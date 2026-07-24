// ═══════════════════════════════════════
//  STATE
// ═══════════════════════════════════════
const S = {
  level:1, xp:0, avatarId:0, mapId:0,
  totalKills:0, bestWave:0, totalRuns:0
};
let running=false, gameThread=null;

// ═══════════════════════════════════════
//  DATA
// ═══════════════════════════════════════
const MAPS=[
  {id:0,name:"Crimson Hollow",desc:"A blood-red cavern beneath the earth",color:"#8B1A1A",img:"assets/maps/map_1.png"},
  {id:1,name:"Misty Peaks",desc:"Fog-shrouded mountain pass",color:"#2E4A3E",img:"assets/maps/map_2.png"},
  {id:2,name:"Shadow Marsh",desc:"Dark waters reflect no light",color:"#1A1A2E",img:"assets/maps/map_3.png"},
  {id:3,name:"Golden Temple",desc:"Ruins of a forgotten shrine",color:"#4A3A1A",img:"assets/maps/map_4.png"},
  {id:4,name:"Frozen Abyss",desc:"Eternal winter grips the land",color:"#1A3A4A",img:"assets/maps/map_5.png"},
  {id:5,name:"Ember Wastes",desc:"Ash falls like snow on scorched ground",color:"#4A2A1A",img:"assets/maps/map_6.png"},
  {id:6,name:"Jade Cavern",desc:"Ancient tunnels pulse with green light",color:"#1A4A2A",img:"assets/maps/map_7.png"},
  {id:7,name:"Storm Ridge",desc:"Lightning splits the sky endlessly",color:"#2A2A4A",img:"assets/maps/map_8.png"},
  {id:8,name:"Void Realm",desc:"Reality bends in the darkness",color:"#0A0A1A",img:"assets/maps/map_9.png"},
  {id:9,name:"Aurora Drift",desc:"Colors dance across the frozen expanse",color:"#1A3A3A",img:"assets/maps/map_10.png"}
];
const AVATARS=[
  {id:0,name:"White Blade",title:"Shiro Ronin",armor:"#F4F2EC",trim:"#1E2E6B",img:"assets/player/avatar_1.png"},
  {id:1,name:"Shadow Ronin",title:"Kage Wanderer",armor:"#16161B",trim:"#5468C4",img:"assets/player/avatar_2.png"},
  {id:2,name:"Indigo Sentinel",title:"Ai Guardian",armor:"#1E2E6B",trim:"#F4F2EC",img:"assets/player/avatar_3.png"},
  {id:3,name:"Gilded Blossom",title:"Kinka Warrior",armor:"#F4F2EC",trim:"#C9A34E",img:"assets/player/avatar_4.png"},
  {id:4,name:"Ember Wolf",title:"Honoo Kensei",armor:"#16161B",trim:"#A62639",img:"assets/player/avatar_5.png"}
];
const AVATAR_IMGS=[];
AVATARS.forEach((a,i)=>{const img=new Image();img.src=a.img;AVATAR_IMGS.push(img)});
function getStats(){
  return {
    maxHp:100,atk:12,spd:160,kb:90,crit:.12,
    regen:0,shield:0,vamp:0,cooldown:650
  };
}
function xpNeeded(lvl){return 50+lvl*30}

// ═══════════════════════════════════════
//  ASSETS
// ═══════════════════════════════════════
const ENEMY_IMGS={1:[],2:[],3:[]};
const MAP_IMGS=[];
function preloadEnemyImages(){
  [1,2,3].forEach(tier=>{
    const count=tier===3?2:3;
    for(let i=1;i<=count;i++){
      const img=new Image();
      img.src=`assets/enemies/enemy_tier${tier}_${i}.png`;
      ENEMY_IMGS[tier].push(img);
    }
  });
}
function preloadMapImages(){
  MAPS.forEach(m=>{
    const img=new Image();
    img.src=m.img;
    MAP_IMGS.push(img);
  });
}
preloadEnemyImages();
preloadMapImages();

// ═══════════════════════════════════════
//  EMBER BACKGROUND
// ═══════════════════════════════════════
const bgC=document.getElementById('bgCanvas');
const bgX=bgC.getContext('2d');
const embers=Array.from({length:22},()=>({
  x:Math.random()*innerWidth,y:Math.random()*innerHeight,
  spd:.3+Math.random()*.5,r:1+Math.random()*2,
  phase:Math.random()*Math.PI*2,amp:15+Math.random()*25,
  alpha:.15+Math.random()*.35,
  color:['#7C8CE8','#5468C4','#C9A34E'][Math.floor(Math.random()*3)]
}));
function resizeBg(){bgC.width=innerWidth;bgC.height=innerHeight}
window.addEventListener('resize',resizeBg);resizeBg();
(function animBg(){
  bgX.clearRect(0,0,bgC.width,bgC.height);
  const t=performance.now()/1000;
  for(const e of embers){
    e.y-=e.spd;e.x+=Math.sin(t+e.phase)*e.amp*.01;
    if(e.y<-10){e.y=bgC.height+10;e.x=Math.random()*bgC.width}
    bgX.globalAlpha=e.alpha;
    bgX.fillStyle=e.color;
    bgX.beginPath();bgX.arc(e.x,e.y,e.r,0,Math.PI*2);bgX.fill();
  }
  bgX.globalAlpha=1;
  requestAnimationFrame(animBg);
})();

// ═══════════════════════════════════════
//  MODALS
// ═══════════════════════════════════════
function openModal(id){
  document.getElementById(id).classList.add('active');
}
function closeModal(id){document.getElementById(id).classList.remove('active')}

// ═══════════════════════════════════════
//  MAP SELECTION
// ═══════════════════════════════════════
(function(){
  const g=document.getElementById('mapGrid');
  MAPS.forEach(m=>{
    const c=document.createElement('div');c.className='map-card'+(m.id===S.mapId?' selected':'');
    c.innerHTML=`<img src="${m.img}" alt="${m.name}"><div class="info"><h3>${m.name}</h3><p>${m.desc}</p></div>`;
    c.onclick=()=>{S.mapId=m.id;g.querySelectorAll('.map-card').forEach(x=>x.classList.remove('selected'));c.classList.add('selected');closeModal('mapModal');startGame()};
    g.appendChild(c);
  });
})();

// ═══════════════════════════════════════
//  AVATAR SELECTION
// ═══════════════════════════════════════
(function(){
  const g=document.getElementById('avatarGrid');
  AVATARS.forEach(a=>{
    const c=document.createElement('div');c.className='avatar-card'+(a.id===S.avatarId?' selected':'');
    c.innerHTML=`<img src="${a.img}" alt="${a.name}"><h3>${a.name}</h3><p>${a.title}</p><div class="status">${a.id===S.avatarId?'Equipped':'Select'}</div>`;
    c.onclick=()=>{S.avatarId=a.id;g.querySelectorAll('.avatar-card').forEach(x=>{x.classList.remove('selected');x.querySelector('.status').textContent='Select'});c.classList.add('selected');c.querySelector('.status').textContent='Equipped';updateMenuLevel()};
    g.appendChild(c);
  });
})();

// ═══════════════════════════════════════
//  GAME ENGINE
// ═══════════════════════════════════════
const gc=document.getElementById('gameCanvas');
const gx=gc.getContext('2d');
  let keys={};let mouseX=0,mouseY=0;let player,enemies,wave,kills,spawnedThisWave,waveTimer,lastSpawn;

document.addEventListener('keydown',e=>{keys[e.key.toLowerCase()]=keys[e.code]=true});
document.addEventListener('keyup',e=>{keys[e.key.toLowerCase()]=keys[e.code]=false});
gc.addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY});
document.addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY});

function startGame(){
  document.getElementById('menu').classList.add('hidden');
  document.getElementById('bgCanvas').style.display='none';
  document.getElementById('hud').classList.remove('hidden');
  document.getElementById('controls').classList.remove('hidden');
  gc.style.display='block';
  gc.width=innerWidth;gc.height=innerHeight;

  const st=getStats();
  const av=AVATARS[S.avatarId];
  player={x:gc.width/2,y:gc.height/2,hp:st.maxHp,maxHp:st.maxHp,
    r:20,angle:0,stats:st,armor:av.armor,trim:av.trim,
    lastAtk:0,invUntil:0};
  enemies=[];wave=0;kills=0;spawnedThisWave=0;waveTimer=0;lastSpawn=0;
  mouseX=player.x+100;mouseY=player.y;
  document.getElementById('playerAvatar').src=av.img;
  document.getElementById('playerName').textContent=av.name;
  document.getElementById('playerTitle').textContent=av.title;
  nextWave();
  if(!running){running=true;gameLoop()}
}

function nextWave(){
  wave++;waveTimer=0;lastSpawn=0;spawnedThisWave=0;
  const scale=1+(wave-1)*0.05;
  const base=getStats();
  player.stats={
    maxHp:Math.round(base.maxHp*scale),
    atk:Math.round(base.atk*scale*100)/100,
    spd:base.spd+wave*2,
    kb:base.kb+wave*1.5,
    crit:Math.min(.6,base.crit+wave*0.01),
    regen:base.regen+wave*0.05,
    shield:base.shield,
    vamp:base.vamp,
    cooldown:Math.max(220,base.cooldown-wave*8)
  };
  if(player.hp>player.stats.maxHp)player.hp=player.stats.maxHp;
  updatePlayerStats();
  updateWaveTracker();
}

function spawnEnemy(){
  const tier=wave<=3?1:wave<=8?(Math.random()<.4?2:1):(Math.random()<.3?3:Math.random()<.5?2:1);
  const edge=Math.floor(Math.random()*4);
  const m=30;
  let x,y;
  if(edge===0){x=Math.random()*gc.width;y=-m}
  else if(edge===1){x=gc.width+m;y=Math.random()*gc.height}
  else if(edge===2){x=Math.random()*gc.width;y=gc.height+m}
  else{x=-m;y=Math.random()*gc.height}
  const baseHp=18+(tier-1)*26;const baseSpd=42+(tier-1)*10;
  const baseDmg=4+(tier-1)*4;
  const colors={1:'#5468C4',2:'#C9A34E',3:'#E0455A'};
  const skinIdx=Math.floor(Math.random()*(ENEMY_IMGS[tier]?.length||3));
  const waveSpeedMult=0.5+wave*0.05;
  enemies.push({x,y,hp:baseHp*(1+(wave-1)*.12),maxHp:baseHp*(1+(wave-1)*.12),
    r:(8+tier*3)*4,spd:baseSpd*.06*waveSpeedMult,dmg:baseDmg,tier,color:colors[tier],
    state:'chase',knockT:0,knockX:0,knockY:0,knockSX:0,knockSY:0,
    deathAlpha:1,lastHit:0,skinIdx});
}

function gameLoop(){
  if(!running)return;
  const now=performance.now();
  const dt=Math.min(now-(gameThread||now),50)/1000;
  gameThread=now;
  update(dt,now);render(now);
  requestAnimationFrame(gameLoop);
}

function update(dt,now){
  const st=player.stats;
  // Movement
  let mx=0,my=0;
  if(keys['w']||keys['arrowup'])my=-1;
  if(keys['s']||keys['arrowdown'])my=1;
  if(keys['a']||keys['arrowleft'])mx=-1;
  if(keys['d']||keys['arrowright'])mx=1;
  const len=Math.sqrt(mx*mx+my*my);
  if(len>0){mx/=len;my/=len}
  player.x+=mx*st.spd*dt;player.y+=my*st.spd*dt;
  player.x=Math.max(player.r,Math.min(gc.width-player.r,player.x));
  player.y=Math.max(player.r,Math.min(gc.height-player.r,player.y));

  // Aim
  player.angle=Math.atan2(mouseY-player.y,mouseX-player.x);

  // Regen
  if(st.regen>0)player.hp=Math.min(player.maxHp,player.hp+st.regen*dt);

  // Crosshair
  const crossDist=45;
  const cx=player.x+Math.cos(player.angle)*crossDist;
  const cy=player.y+Math.sin(player.angle)*crossDist;

  // Spawning
  const count=Math.min(40,3+wave*2);
  const interval=Math.max(180,750-wave*15);
  waveTimer+=dt*1000;
  if(spawnedThisWave<count&&waveTimer-lastSpawn>interval){spawnEnemy();lastSpawn=waveTimer;spawnedThisWave++}

  // Enemies
  let nearest=null,nearestDist=Infinity;
  for(const e of enemies){
    if(e.state==='knock'){
      e.knockT+=dt/.26;
      if(e.knockT>=1){e.x=e.knockX;e.y=e.knockY;e.state='chase'}
      else{const t=1-(1-e.knockT)**2;e.x=e.knockSX+(e.knockX-e.knockSX)*t;e.y=e.knockSY+(e.knockY-e.knockSY)*t}
      continue;
    }
    if(e.state==='dying'){
      e.knockT+=dt/.35;
      const t=1-(1-e.knockT)**2;
      e.x=e.knockSX+(e.knockX-e.knockSX)*t;e.y=e.knockSY+(e.knockY-e.knockSY)*t;
      e.deathAlpha=1-e.knockT;
      if(e.knockT>=1){e.remove=true}
      continue;
    }
    const dx=player.x-e.x,dy=player.y-e.y;
    const dist=Math.sqrt(dx*dx+dy*dy)||.001;
    e.x+=dx/dist*e.spd*dt*60;e.y+=dy/dist*e.spd*dt*60;
    if(dist<e.r+player.r&&now>player.invUntil&&now-e.lastHit>550){
      e.lastHit=now;
      if(Math.random()>=st.shield){player.hp-=e.dmg;player.invUntil=now+500}
    }
    const dc=Math.sqrt((e.x-cx)**2+(e.y-cy)**2);
    if(dc<e.r+26&&dc<nearestDist){nearestDist=dc;nearest=e}
  }
  enemies=enemies.filter(e=>!e.remove);

  // Auto attack
  if(nearest&&now-player.lastAtk>=st.cooldown){
    player.lastAtk=now;
    const isCrit=Math.random()<st.crit;
    const dmg=st.atk*(isCrit?2:1);
    nearest.hp-=dmg;
    // popups
    popups.push({x:nearest.x,y:nearest.y,text:''+Math.round(dmg),crit:isCrit,t0:now});
    if(nearest.hp<=0){
      const dx=nearest.x-player.x,dy=nearest.y-player.y;
      const d=Math.sqrt(dx*dx+dy*dy)||1;
      nearest.state='dying';nearest.knockT=0;nearest.knockSX=nearest.x;nearest.knockSY=nearest.y;
      nearest.knockX=nearest.x-dx/d*nearest.r*1.5;nearest.knockY=nearest.y-dy/d*nearest.r*1.5;
      kills++;
      if(st.vamp>0)player.hp=Math.min(player.maxHp,player.hp+player.maxHp*st.vamp);
    }else{
      const push=Math.random()<.7;
      const dx=nearest.x-player.x,dy=nearest.y-player.y;
      const d=Math.sqrt(dx*dx+dy*dy)||1;
      let dirX=dx/d,dirY=dy/d;
      if(!push){dirX=-dirX;dirY=-dirY}
      const jitter=(Math.random()*40-20)*Math.PI/180;
      const rdx=dirX*Math.cos(jitter)-dirY*Math.sin(jitter);
      const rdy=dirX*Math.sin(jitter)+dirY*Math.cos(jitter);
      const kbDist=st.kb;
      nearest.state='knock';nearest.knockT=0;nearest.knockSX=nearest.x;nearest.knockSY=nearest.y;
      nearest.knockX=Math.max(nearest.r,Math.min(gc.width-nearest.r,nearest.x+rdx*kbDist));
      nearest.knockY=Math.max(nearest.r,Math.min(gc.height-nearest.r,nearest.y+rdy*kbDist));
    }
  }

  // Popups
  popups=popups.filter(p=>now-p.t0<600);

  // Wave clear
  if(enemies.filter(e=>e.state!=='dying').length===0&&waveTimer>2000)nextWave();

  // Death
  if(player.hp<=0){endGame();return}

  // HUD
  const alive=enemies.filter(e=>e.state!=='dying').length;
  document.getElementById('hudEnemies').textContent=alive+' remaining';
}

let popups=[];
function render(now){
  gx.clearRect(0,0,gc.width,gc.height);
  // BG
  const map=MAPS[S.mapId];
  const mapImg=MAP_IMGS[S.mapId];
  if(mapImg?.complete&&mapImg.naturalWidth){
    gx.drawImage(mapImg,0,0,gc.width,gc.height);
  } else {
    gx.fillStyle=map.color;gx.fillRect(0,0,gc.width,gc.height);
  }
  // Grid
  gx.strokeStyle='rgba(255,255,255,.04)';gx.lineWidth=1;
  for(let x=0;x<gc.width;x+=48){gx.beginPath();gx.moveTo(x,0);gx.lineTo(x,gc.height);gx.stroke()}
  for(let y=0;y<gc.height;y+=48){gx.beginPath();gx.moveTo(0,y);gx.lineTo(gc.width,y);gx.stroke()}

   // Enemies
   for(const e of enemies){
     gx.globalAlpha=e.deathAlpha;
     // Glow
     const grd=gx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.r*1.9);
     grd.addColorStop(0,e.color+'88');grd.addColorStop(1,e.color+'00');
     gx.fillStyle=grd;gx.beginPath();gx.arc(e.x,e.y,e.r*1.9,0,Math.PI*2);gx.fill();
     // Body
     const img=ENEMY_IMGS[e.tier]?.[e.skinIdx];
     if(img?.complete){
       gx.drawImage(img,e.x-e.r,e.y-e.r,e.r*2,e.r*2);
     } else {
       gx.fillStyle=e.color;gx.beginPath();gx.arc(e.x,e.y,e.r,0,Math.PI*2);gx.fill();
       gx.strokeStyle=e.color;gx.lineWidth=2;gx.stroke();
     }
     // HP bar
    if(e.state!=='dying'){
      const bw=e.r*2,bh=3,bx=e.x-e.r,by=e.y-e.r-6;
      gx.fillStyle='rgba(0,0,0,.5)';gx.fillRect(bx,by,bw,bh);
      gx.fillStyle='#E0455A';gx.fillRect(bx,by,bw*(e.hp/e.maxHp),bh);
    }
    gx.globalAlpha=1;
  }

  // Player
  const st=player.stats;
  const pGrd=gx.createRadialGradient(player.x,player.y,0,player.x,player.y,player.r*2.3);
  pGrd.addColorStop(0,player.trim+'66');pGrd.addColorStop(1,player.trim+'00');
  gx.fillStyle=pGrd;gx.beginPath();gx.arc(player.x,player.y,player.r*2.3,0,Math.PI*2);gx.fill();
  const avImg=AVATAR_IMGS[S.avatarId];
  if(avImg?.complete&&avImg.naturalWidth){
    gx.save();gx.beginPath();gx.arc(player.x,player.y,player.r,0,Math.PI*2);gx.clip();
    gx.drawImage(avImg,player.x-player.r,player.y-player.r,player.r*2,player.r*2);
    gx.restore();
  } else {
    gx.fillStyle=player.armor;gx.strokeStyle=player.trim;gx.lineWidth=3;
    gx.beginPath();
    gx.moveTo(player.x,player.y-player.r);
    gx.lineTo(player.x+player.r*.8,player.y);
    gx.lineTo(player.x,player.y+player.r);
    gx.lineTo(player.x-player.r*.8,player.y);
    gx.closePath();gx.fill();gx.stroke();
  }
  // Blade tip
  const bLen=player.r*1.9;
  const bx=player.x+Math.cos(player.angle)*bLen;
  const by=player.y+Math.sin(player.angle)*bLen;
  const tGrd=gx.createRadialGradient(bx,by,0,bx,by,8);
  tGrd.addColorStop(0,'#F4F2ECAA');tGrd.addColorStop(1,'#F4F2EC00');
  gx.fillStyle=tGrd;gx.beginPath();gx.arc(bx,by,8,0,Math.PI*2);gx.fill();

  // Crosshair
  const crossDist=45;
  const ccx=player.x+Math.cos(player.angle)*crossDist;
  const ccy=player.y+Math.sin(player.angle)*crossDist;
  const locked=enemies.some(e=>e.state==='chase'&&Math.sqrt((e.x-ccx)**2+(e.y-ccy)**2)<e.r+26);
  const cColor=locked?'#C9A34E':'#7C8CE8';
  const cR=locked?18:10;
  const pulse=locked?1+.12*Math.sin(now/130):1;
  gx.strokeStyle=cColor;gx.lineWidth=2;gx.globalAlpha=locked?.9:.5;
  gx.beginPath();gx.arc(ccx,ccy,cR*pulse,0,Math.PI*2);gx.stroke();
  gx.beginPath();gx.moveTo(ccx,ccy-cR*pulse-4);gx.lineTo(ccx,ccy-cR*pulse+4);gx.stroke();
  gx.beginPath();gx.moveTo(ccx,ccy+cR*pulse-4);gx.lineTo(ccx,ccy+cR*pulse+4);gx.stroke();
  gx.beginPath();gx.moveTo(ccx-cR*pulse-4,ccy);gx.lineTo(ccx-cR*pulse+4,ccy);gx.stroke();
  gx.beginPath();gx.moveTo(ccx+cR*pulse-4,ccy);gx.lineTo(ccx+cR*pulse+4,ccy);gx.stroke();
  gx.globalAlpha=1;

  // Popups
  for(const p of popups){
    const t=(now-p.t0)/600;
    gx.globalAlpha=1-t;gx.font='bold 14px serif';gx.fillStyle=p.crit?'#C9A34E':'#F4F2EC';
    gx.textAlign='center';gx.fillText(p.text,p.x,p.y-t*40);
  }
  gx.globalAlpha=1;
}

function updatePlayerStats(){
  const st=player.stats;
  document.getElementById('statAtk').textContent=Math.round(st.atk);
  document.getElementById('statSpd').textContent=Math.round(st.spd);
  document.getElementById('statKb').textContent=Math.round(st.kb);
  document.getElementById('statCrit').textContent=Math.round(st.crit*100)+'%';
  document.getElementById('hpText').textContent=Math.ceil(player.hp);
  document.getElementById('hpMaxText').textContent=player.maxHp;
  document.getElementById('hpFillLarge').style.width=(player.hp/player.maxHp*100)+'%';
}
function updateWaveTracker(){
  const tracker=document.getElementById('waveTracker');
  tracker.innerHTML='';
  const showCount=Math.min(7,wave+3);
  const startWave=Math.max(1,wave-2);
  for(let i=startWave;i<startWave+showCount;i++){
    const dot=document.createElement('div');
    dot.className='wave-dot';
    if(i<wave) dot.classList.add('dead');
    else if(i===wave) dot.classList.add('current');
    else dot.classList.add('active');
    tracker.appendChild(dot);
  }
  document.getElementById('waveLabel').textContent='Wave '+wave;
}
function endGame(){
  running=false;
  S.totalKills+=kills;S.totalRuns++;
  if(wave>S.bestWave)S.bestWave=wave;
  // Level ups
  let xpGain=kills*5;
  while(xpGain>0){const need=xpNeeded(S.level);if(S.xp+xpGain>=need){xpGain-=need-S.xp;S.xp=0;S.level++}else{S.xp+=xpGain;xpGain=0}}
  document.getElementById('goKills').textContent=kills;
  document.getElementById('gameover').classList.add('active');
  document.getElementById('hud').classList.add('hidden');
  document.getElementById('controls').classList.add('hidden');
}

function restartGame(){
  document.getElementById('gameover').classList.remove('active');
  startGame();
}
function backToMenu(){
  running=false;
  document.getElementById('gameover').classList.remove('active');
  document.getElementById('hud').classList.add('hidden');
  document.getElementById('controls').classList.add('hidden');
  gc.style.display='none';
  document.getElementById('bgCanvas').style.display='block';
  document.getElementById('menu').classList.remove('hidden');
  player=null;
  updateMenuLevel();
}

function updateMenuLevel(){
  const el=document.getElementById('menuLevel');
  if(el)el.textContent='Lv. '+S.level;
}

window.addEventListener('resize',()=>{if(running){gc.width=innerWidth;gc.height=innerHeight}});