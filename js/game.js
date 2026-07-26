// ═══════════════════════════════════════
//  CONSTANTS
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
  {id:9,name:"Aurora Drift",desc:"Colors dance across the frozen expanse",color:"#1A3A3A",img:"assets/maps/map_10.png"},
  {id:10,name:"Blood Moon Pass",desc:"A crimson sky bleeds over jagged cliffs",color:"#5A1A2A",img:"assets/maps/map_11.png"},
  {id:11,name:"Whispering Pines",desc:"Ancient trees hum with unseen spirits",color:"#2A3A1A",img:"assets/maps/map_12.png"},
  {id:12,name:"Crimson Throne",desc:"The seat of a fallen warlord",color:"#6A1A1A",img:"assets/maps/map_13.png"},
  {id:13,name:"Obsidian Gate",desc:"Black stone walls that swallow light",color:"#1A1A1A",img:"assets/maps/map_14.png"},
  {id:14,name:"Moonlit Valley",desc:"Pale light reveals hidden paths",color:"#2A2A4A",img:"assets/maps/map_17.png"},
  {id:15,name:"Iron Bastion",desc:"Fortified walls of unbreakable steel",color:"#4A4A4A",img:"assets/maps/map_18.png"},
  {id:16,name:"Ashen Garden",desc:"Flowers bloom in a world of fire",color:"#3A2A1A",img:"assets/maps/map_19.png"},
  {id:17,name:"Oracle's Peak",desc:"Visions dance in the mountain mist",color:"#1A3A5A",img:"assets/maps/map_20.png"},
  {id:18,name:"Eclipse Plains",desc:"Darkness devours the horizon",color:"#0A0A15",img:"assets/maps/map_21.png"},
  {id:19,name:"Verdant Abyss",desc:"Lush greenery hides ancient terrors",color:"#1A3A2A",img:"assets/maps/map_22.png"},
  {id:20,name:"Crystal Depths",desc:"Prismatic light fractures in the dark",color:"#2A1A3A",img:"assets/maps/map_23.png"},
  {id:21,name:"Saharan Dunes",desc:"Endless sands bury forgotten empires",color:"#4A3A1A",img:"assets/maps/map_24.png"},
  {id:22,name:"Volcanic Crown",desc:"Molten rock flows from the peak",color:"#3A1A0A",img:"assets/maps/map_25.png"},
  {id:23,name:"Frostveil Lake",desc:"Ice as far as the eye can see",color:"#1A2A3A",img:"assets/maps/map_26.png"},
  {id:24,name:"Twilight Spire",desc:"A tower that touches the dying sky",color:"#1A1A2A",img:"assets/maps/map_27.png"}
];
const AVATARS=[
  {id:0,name:"White Blade",title:"Shiro Ronin",armor:"#F4F2EC",trim:"#1E2E6B",img:"assets/player/avatar_1.png"},
  {id:1,name:"Shadow Ronin",title:"Kage Wanderer",armor:"#16161B",trim:"#5468C4",img:"assets/player/avatar_2.png"},
  {id:2,name:"Indigo Sentinel",title:"Ai Guardian",armor:"#1E2E6B",trim:"#F4F2EC",img:"assets/player/avatar_3.png"},
  {id:3,name:"Gilded Blossom",title:"Kinka Warrior",armor:"#F4F2EC",trim:"#C9A34E",img:"assets/player/avatar_4.png"},
  {id:4,name:"Ember Wolf",title:"Honoo Kensei",armor:"#16161B",trim:"#A62639",img:"assets/player/avatar_5.png"},
  {id:5,name:"Verdant Fox",title:"Midori Kitsune",armor:"#1A3A2A",trim:"#4ADE80",img:"assets/player/avatar_6.png"},
  {id:6,name:"Crystal Hare",title:"Hikari Yuki",armor:"#E8E8F0",trim:"#A78BFA",img:"assets/player/avatar_7.png"},
  {id:7,name:"Sandstalker",title:"Suna Nomad",armor:"#3A2A1A",trim:"#FBBF24",img:"assets/player/avatar_8.png"},
  {id:8,name:"Magma Horn",title:"Yama Shishi",armor:"#2A1A0A",trim:"#F97316",img:"assets/player/avatar_9.png"},
  {id:9,name:"Frost Stag",title:"Koori Ookami",armor:"#1A2A3A",trim:"#67E8F9",img:"assets/player/avatar_10.png"},
  {id:10,name:"Dusk Crane",title:"Tasogare Tsuru",armor:"#1A1A2A",trim:"#C084FC",img:"assets/player/avatar_11.png"},
  {id:11,name:"Storm Koi",title:"Arashi Koi",armor:"#0A1A2A",trim:"#38BDF8",img:"assets/player/avatar_12.png"},
  {id:12,name:"Shadow Lotus",title:"Ankokuron",armor:"#1A0A1A",trim:"#E879F9",img:"assets/player/avatar_13.png"}
];
const AVATAR_IMGS=[];
AVATARS.forEach((a,i)=>{const img=new Image();img.src=a.img;AVATAR_IMGS.push(img)});

const GAME_MUSIC_FILES=[
  'assets/game_music/Starforge Ceilidh.mp3',
  'assets/game_music/Paper Lantern Run.mp3',
  'assets/game_music/Paper Lantern Run (1).mp3',
  'assets/game_music/Moonfall Over Zeta_1.mp3',
  'assets/game_music/Bamboo Sprint.mp3',
  'assets/game_music/Bamboo Sprint 2.mp3'
];
const PLAYER_DAMAGE_FILES=[
  'assets/player_damage/heavy_bomb_explosion_1-1784908403871.mp3',
  'assets/player_damage/heavy_bomb_explosion_2-1784908407260.mp3',
  'assets/player_damage/heavy_bomb_explosion_3-1784908409673.mp3',
  'assets/player_damage/heavy_bomb_explosion_4-1784908409678.mp3'
];
const THROW_ENEMY_FILES=[
  'assets/throw_enemy/martial_arts_throw_1-1784907428450.mp3',
  'assets/throw_enemy/martial_arts_throw_2-1784907428454.mp3',
  'assets/throw_enemy/martial_arts_throw_3-1784907428456.mp3',
  'assets/throw_enemy/martial_arts_throw_4-1784907428460.mp3'
];
const MENU_SOUND_FILES=[
  'assets/menu_sounds/click_1.wav',
  'assets/menu_sounds/click_2.wav'
];

const TALISMANS=[
  {id:'fire',emoji:'🔥',jp:'火 (Hi)',name:'Flame Talisman',desc:'Your attacks ignite enemies, dealing burn damage over time and slightly increasing attack power.',img:'assets/item_loots/Fire.png',color:'#E0455A'},
  {id:'water',emoji:'💧',jp:'水 (Mizu)',name:'Water Talisman',desc:'Restores HP over several seconds and removes burning or poison effects.',img:'assets/item_loots/Water.png',color:'#38BDF8'},
  {id:'thunder',emoji:'⚡',jp:'雷 (Kaminari)',name:'Thunder Talisman',desc:'Increases movement and attack speed while occasionally striking nearby enemies with lightning.',img:'assets/item_loots/Thunder.png',color:'#C9A34E'},
  {id:'love',emoji:'💖',jp:'愛 (Ai)',name:'Heart Talisman',desc:'Grants a protective heart shield that absorbs damage and charms weak enemies for a short time.',img:'assets/item_loots/Love.png',color:'#E879F9'},
  {id:'wind',emoji:'🌪',jp:'風 (Kaze)',name:'Wind Talisman',desc:'Boosts movement speed, jump height, dodge distance, and attack evasion.',img:'assets/item_loots/Wind.png',color:'#67E8F9'},
  {id:'strength',emoji:'💪',jp:'力 (Chikara)',name:'Power Talisman',desc:'Temporarily doubles melee damage, increases knockback, and lets you break heavy objects.',img:'assets/item_loots/Strength.png',color:'#F97316'},
  {id:'fortune',emoji:'🍀',jp:'運 (Un)',name:'Lucky Talisman',desc:'Increases item drop rate, critical hit chance, coin rewards, and rare loot probability.',img:'assets/item_loots/Fortune.png',color:'#4ADE80'},
  {id:'body',emoji:'➕',jp:'体 (Karada)',name:'Vitality Talisman',desc:'Fully restores stamina, increases maximum HP, and grants temporary damage resistance.',img:'assets/item_loots/Body.png',color:'#A78BFA'},
  {id:'gold',emoji:'💰',jp:'金 (Kin)',name:'Treasure Talisman',desc:'Instantly attracts nearby coins and increases all currency earned for a limited time.',img:'assets/item_loots/Gold.png',color:'#C9A34E'},
  {id:'magic',emoji:'⭐',jp:'魔 (Ma)',name:'Mystic Talisman',desc:'Reduces skill cooldowns, boosts magic damage, and slightly regenerates mana or spirit energy.',img:'assets/item_loots/Magic.png',color:'#7C8CE8'},
  {id:'health',emoji:'❤️',jp:'命 (Inochi)',name:'Life Talisman',desc:'Instantly restores HP and increases maximum HP for a short duration.',img:'assets/item_loots/Health.png',color:'#A62639'},
  {id:'defense',emoji:'🔷',jp:'守 (Mamoru)',name:'Guardian Talisman',desc:'Raises defense, reduces incoming damage, and grants brief super armor.',img:'assets/item_loots/Defense.png',color:'#5468C4'},
  {id:'attack',emoji:'⚔',jp:'攻 (Kō)',name:'Assault Talisman',desc:'Boosts physical attack power and increases combo damage.',img:'assets/item_loots/Attack.png',color:'#F4F2EC'},
  {id:'agility',emoji:'👟',jp:'速 (Hayai)',name:'Swift Talisman',desc:'Increases movement speed, dodge speed, attack animation speed, and jump height.',img:'assets/item_loots/Agility.png',color:'#FBBF24'},
  {id:'critical',emoji:'🎲',jp:'瞬 (Shun)',name:'Critical Talisman',desc:'Greatly increases critical hit rate and critical damage multiplier.',img:'assets/item_loots/Critical.png',color:'#C084FC'},
  {id:'ultimate',emoji:'🌟',jp:'極 (Kiwami)',name:'Master Talisman',desc:'Temporarily boosts every primary stat by a moderate amount and grants immunity to debuffs.',img:'assets/item_loots/Ultimate.png',color:'#F4F2EC'}
];
const TALISMAN_IMGS={};
TALISMANS.forEach(t=>{const img=new Image();img.src=t.img;TALISMAN_IMGS[t.id]=img});

let volume=0.4, muted=false;
const S={level:1,xp:0,avatarId:0,mapId:0,totalKills:0,bestWave:0,totalRuns:0};
(function(){
  const s=localStorage.getItem('mau_s');
  if(s)Object.assign(S,JSON.parse(s));
  const v=localStorage.getItem('mau_volume');
  const m=localStorage.getItem('mau_muted');
  if(v!==null)volume=parseFloat(v);
  if(m!==null)muted=m==='true';
})();
function saveState(){
  localStorage.setItem('mau_s',JSON.stringify({level:S.level,xp:S.xp,avatarId:S.avatarId,mapId:S.mapId,totalKills:S.totalKills,bestWave:S.bestWave,totalRuns:S.totalRuns}));
}
function saveAudioState(){
  localStorage.setItem('mau_volume',volume);
  localStorage.setItem('mau_muted',muted);
}

// ═══════════════════════════════════════
//  ASSETS
// ═══════════════════════════════════════
const ENEMY_IMGS={1:[],2:[],3:[],4:[]};
const MAP_IMGS=[];
function preloadEnemyImages(){
  [1,2,3,4].forEach(tier=>{
    const count=tier===4?7:tier===3?10:tier===2?14:12;
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

function getStats(){
  return {
    maxHp:100,atk:12,spd:160,kb:90,crit:.12,
    regen:0,shield:0,vamp:0,cooldown:650
  };
}
function xpNeeded(lvl){return 50+lvl*30}

function playRandomSound(files){
  if(!files||!files.length)return;
  const a=new Audio(files[Math.floor(Math.random()*files.length)]);
  a.volume=volume;
  a.play().catch(()=>{});
}

// ═══════════════════════════════════════
//  CANVAS & GAME STATE
// ═══════════════════════════════════════
const gc=document.getElementById('gameCanvas');
const gx=gc.getContext('2d');
let running=false, gameThread=null, paused=false;
let keys={}, mouseX=0, mouseY=0;
let player, enemies, wave, kills, spawnedThisWave, waveTimer, lastSpawn;
let popups=[], loots=[], inventory=[], notifications=[];
let gameMusic=null;

function resizeGame(){gc.width=innerWidth;gc.height=innerHeight}
window.addEventListener('resize',resizeGame);
resizeGame();

document.addEventListener('keydown',e=>{keys[e.key.toLowerCase()]=keys[e.code]=true});
document.addEventListener('keyup',e=>{keys[e.key.toLowerCase()]=keys[e.code]=false});
gc.addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY});
document.addEventListener('mousemove',e=>{mouseX=e.clientX;mouseY=e.clientY});

// ═══════════════════════════════════════
//  GAME AUDIO
// ═══════════════════════════════════════
function initAudio(){
  if(!gameMusic){
    gameMusic=new Audio();
    gameMusic.loop=false;
    gameMusic.volume=muted?0:volume;
  }
}
function applyAudioVolume(){
  initAudio();
  const effective=muted?0:volume;
  if(gameMusic)gameMusic.volume=effective;
  const slider=document.getElementById('volumeSlider');
  if(slider)slider.value=Math.round(volume*100);
  const muteBtn=document.getElementById('muteToggleBtn');
  if(muteBtn)muteBtn.textContent=muted?'Unmute':'Mute';
}
function setVolume(value){
  volume=Math.max(0,Math.min(1,value));
  if(volume<=0.01){muted=true;}else if(muted){muted=false;}
  saveAudioState();
  applyAudioVolume();
}
function toggleMute(){
  muted=!muted;
  if(!muted&&volume<=0.01)volume=0.4;
  saveAudioState();
  applyAudioVolume();
}
function playGameMusic(){
  initAudio();
  const files=GAME_MUSIC_FILES;
  if(gameMusic&&files.length){
    gameMusic.pause();
    gameMusic.src=files[Math.floor(Math.random()*files.length)];
    gameMusic.loop=false;
    gameMusic.currentTime=0;
    gameMusic.onended=()=>{if(activeMusic==='game')playGameMusic()};
    gameMusic.play().catch(()=>{});
  }
  applyAudioVolume();
}
function pauseMusic(){
  if(gameMusic)gameMusic.pause();
}
let activeMusic='game';

// ═══════════════════════════════════════
//  GAME ENGINE
// ═══════════════════════════════════════
function startGame(){
  paused=false;
  document.getElementById('pauseMenu').classList.add('hidden');
  document.getElementById('hud').classList.remove('hidden');
  document.getElementById('controls').classList.remove('hidden');
  gc.style.display='block';
  gc.width=innerWidth;gc.height=innerHeight;

  const st=getStats();
  const av=AVATARS[S.avatarId];
  player={x:gc.width/2,y:gc.height/2,hp:st.maxHp,maxHp:st.maxHp,
    r:40,angle:0,stats:st,armor:av.armor,trim:av.trim,
    lastAtk:0,invUntil:0,inventory:[],lootRadius:60};
  enemies=[];wave=0;kills=0;spawnedThisWave=0;waveTimer=0;lastSpawn=0;
  loots=[];inventory=[];notifications=[];
  mouseX=player.x+100;mouseY=player.y;
  document.getElementById('playerAvatar').src=av.img;
  document.getElementById('playerName').textContent=av.name;
  document.getElementById('playerTitle').textContent=av.title;
  updateInventoryHUD();
  nextWave();
  playGameMusic();
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
  const tier=wave<=3?1:wave<=8?(Math.random()<.4?2:1):(Math.random()<.3?4:Math.random()<.4?3:Math.random()<.6?2:1);
  const edge=Math.floor(Math.random()*4);
  const m=30;
  let x,y;
  if(edge===0){x=Math.random()*gc.width;y=-m}
  else if(edge===1){x=gc.width+m;y=Math.random()*gc.height}
  else if(edge===2){x=Math.random()*gc.width;y=gc.height+m}
  else{x=-m;y=Math.random()*gc.height}
  const baseHp=18+(tier-1)*26;const baseSpd=42+(tier-1)*10;
  const baseDmg=4+(tier-1)*4;
  const colors={1:'#5468C4',2:'#C9A34E',3:'#E0455A',4:'#8B5CF6'};
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
  if(!paused){
    const dt=Math.min(now-(gameThread||now),50)/1000;
    gameThread=now;
    update(dt,now);render(now);
  } else {
    gameThread=now;
    render(now);
  }
  requestAnimationFrame(gameLoop);
}

function update(dt,now){
  const st=player.stats;
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
  player.angle=Math.atan2(mouseY-player.y,mouseX-player.x);
  if(st.regen>0)player.hp=Math.min(player.maxHp,player.hp+st.regen*dt);
  const crossDist=85;
  const cx=player.x+Math.cos(player.angle)*crossDist;
  const cy=player.y+Math.sin(player.angle)*crossDist;
  const count=Math.min(40,3+wave*2);
  const interval=Math.max(180,750-wave*15);
  waveTimer+=dt*1000;
  if(spawnedThisWave<count&&waveTimer-lastSpawn>interval){spawnEnemy();lastSpawn=waveTimer;spawnedThisWave++}
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
      if(Math.random()>=st.shield){player.hp-=e.dmg;player.invUntil=now+500;playRandomSound(PLAYER_DAMAGE_FILES)}
    }
    const dc=Math.sqrt((e.x-cx)**2+(e.y-cy)**2);
    if(dc<e.r+50&&dc<nearestDist){nearestDist=dc;nearest=e}
  }
  enemies=enemies.filter(e=>!e.remove);
  if(nearest&&now-player.lastAtk>=st.cooldown){
    player.lastAtk=now;
    const isCrit=Math.random()<st.crit;
    const dmg=st.atk*(isCrit?2:1);
    nearest.hp-=dmg;
    playRandomSound(THROW_ENEMY_FILES);
    popups.push({x:nearest.x,y:nearest.y,text:''+Math.round(dmg),crit:isCrit,t0:now});
    if(nearest.hp<=0){
      const dx=nearest.x-player.x,dy=nearest.y-player.y;
      const d=Math.sqrt(dx*dx+dy*dy)||1;
      nearest.state='dying';nearest.knockT=0;nearest.knockSX=nearest.x;nearest.knockSY=nearest.y;
      nearest.knockX=nearest.x-dx/d*nearest.r*1.5;nearest.knockY=nearest.y-dy/d*nearest.r*1.5;
      kills++;
      if(st.vamp>0)player.hp=Math.min(player.maxHp,player.hp+player.maxHp*st.vamp);
      if(Math.random()<0.35){
        const talisman=TALISMANS[Math.floor(Math.random()*TALISMANS.length)];
        loots.push({x:nearest.x,y:nearest.y,talismanId:talisman.id,bobT:0,life:8,r:20});
      }
    }else{
      const dx=nearest.x-player.x,dy=nearest.y-player.y;
      const d=Math.sqrt(dx*dx+dy*dy)||1;
      const jitter=(Math.random()*40-20)*Math.PI/180;
      const rdx=dx/d*Math.cos(jitter)-dy/d*Math.sin(jitter);
      const rdy=dx/d*Math.sin(jitter)+dy/d*Math.cos(jitter);
      const kbDist=st.kb;
      nearest.state='knock';nearest.knockT=0;nearest.knockSX=nearest.x;nearest.knockSY=nearest.y;
      nearest.knockX=Math.max(nearest.r,Math.min(gc.width-nearest.r,nearest.x+rdx*kbDist));
      nearest.knockY=Math.max(nearest.r,Math.min(gc.height-nearest.r,nearest.y+rdy*kbDist));
    }
  }
  popups=popups.filter(p=>now-p.t0<600);
  for(const l of loots){
     l.life-=dt;
     if(l.life<=0){l.remove=true;continue}
     const dx=player.x-l.x,dy=player.y-l.y;
     const dist=Math.sqrt(dx*dx+dy*dy);
     if(dist<player.r+l.r+10){
       const t=TALISMANS.find(x=>x.id===l.talismanId);
       if(t){
         inventory.push(t.id);
         addNotification(t);
         updateInventoryHUD();
       }
       l.remove=true;
     }
   }
   loots=loots.filter(l=>!l.remove);
   if(enemies.filter(e=>e.state!=='dying').length===0&&waveTimer>2000)nextWave();
   if(player.hp<=0){endGame();return}
  const alive=enemies.filter(e=>e.state!=='dying').length;
  document.getElementById('hudEnemies').textContent=alive+' remaining';
}

function render(now){
  gx.clearRect(0,0,gc.width,gc.height);
  const map=MAPS[S.mapId];
  const mapImg=MAP_IMGS[S.mapId];
  if(mapImg?.complete&&mapImg.naturalWidth){
    gx.drawImage(mapImg,0,0,gc.width,gc.height);
  } else {
    gx.fillStyle=map.color;gx.fillRect(0,0,gc.width,gc.height);
  }
  gx.strokeStyle='rgba(255,255,255,.04)';gx.lineWidth=1;
  for(let x=0;x<gc.width;x+=48){gx.beginPath();gx.moveTo(x,0);gx.lineTo(x,gc.height);gx.stroke()}
  for(let y=0;y<gc.height;y+=48){gx.beginPath();gx.moveTo(0,y);gx.lineTo(gc.width,y);gx.stroke()}
  for(const e of enemies){
    gx.globalAlpha=e.deathAlpha;
    const grd=gx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.r*1.9);
    grd.addColorStop(0,e.color+'88');grd.addColorStop(1,e.color+'00');
    gx.fillStyle=grd;gx.beginPath();gx.arc(e.x,e.y,e.r*1.9,0,Math.PI*2);gx.fill();
    const img=ENEMY_IMGS[e.tier]?.[e.skinIdx];
    if(img?.complete){
      gx.drawImage(img,e.x-e.r,e.y-e.r,e.r*2,e.r*2);
    } else {
      gx.fillStyle=e.color;gx.beginPath();gx.arc(e.x,e.y,e.r,0,Math.PI*2);gx.fill();
      gx.strokeStyle=e.color;gx.lineWidth=2;gx.stroke();
    }
    if(e.state!=='dying'){
      const bw=e.r*2,bh=3,bx=e.x-e.r,by=e.y-e.r-6;
      gx.fillStyle='rgba(0,0,0,.5)';gx.fillRect(bx,by,bw,bh);
      gx.fillStyle='#E0455A';gx.fillRect(bx,by,bw*(e.hp/e.maxHp),bh);
    }
    gx.globalAlpha=1;
  }
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
  const bLen=player.r*1.9;
  const bx=player.x+Math.cos(player.angle)*bLen;
  const by=player.y+Math.sin(player.angle)*bLen;
  const tGrd=gx.createRadialGradient(bx,by,0,bx,by,8);
  tGrd.addColorStop(0,'#F4F2ECAA');tGrd.addColorStop(1,'#F4F2EC00');
  gx.fillStyle=tGrd;gx.beginPath();gx.arc(bx,by,8,0,Math.PI*2);gx.fill();
  const crossDist=85;
  const ccx=player.x+Math.cos(player.angle)*crossDist;
  const ccy=player.y+Math.sin(player.angle)*crossDist;
  const locked=enemies.some(e=>e.state==='chase'&&Math.sqrt((e.x-ccx)**2+(e.y-ccy)**2)<e.r+50);
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
   for(const l of loots){
     l.bobT+=0.04;
     const bob=Math.sin(l.bobT)*4;
     const t=TALISMANS.find(x=>x.id===l.talismanId);
     const img=t?TALISMAN_IMGS[t.id]:null;
     const lr=18;
     if(img?.complete&&img.naturalWidth){
       gx.drawImage(img,l.x-lr,l.y-lr+bob,lr*2,lr*2);
     } else {
       gx.fillStyle='#C9A34E';gx.beginPath();gx.arc(l.x,l.y+bob,lr,0,Math.PI*2);gx.fill();
       gx.fillStyle='#0A0A0C';gx.font='bold 12px serif';gx.textAlign='center';gx.textBaseline='middle';
       gx.fillText('?',l.x,l.y+bob);
     }
     gx.strokeStyle='rgba(201,163,78,.4)';gx.lineWidth=1;
     gx.beginPath();gx.arc(l.x,l.y+bob,lr+4+Math.sin(l.bobT*1.5)*2,0,Math.PI*2);gx.stroke();
   }
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
function updateInventoryHUD(){
  const container=document.getElementById('inventoryList');
  if(!container)return;
  container.innerHTML='';
  const show=inventory.slice(-6);
  show.forEach(tid=>{
    const t=TALISMANS.find(x=>x.id===tid);if(!t)return;
    const slot=document.createElement('div');
    slot.className='inv-slot';slot.title=t.name+' - '+t.desc;
    slot.innerHTML='<img src="'+t.img+'" alt="'+t.name+'"><span>'+t.emoji+'</span>';
    container.appendChild(slot);
  });
}
function addNotification(talisman){
  notifications.push({talisman,alpha:1,t0:performance.now()});
  const container=document.getElementById('notificationArea');
  if(!container)return;
  const el=document.createElement('div');
  el.className='loot-notification';
  el.innerHTML='<img src="'+talisman.img+'" alt="'+talisman.name+'"><div class="loot-text"><strong>'+talisman.emoji+' '+talisman.name+'</strong><span>'+talisman.desc+'</span></div>';
  container.appendChild(el);
  setTimeout(()=>el.classList.add('show'),10);
  setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),400)},4000);
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
  paused=false;
  document.getElementById('pauseMenu').classList.add('hidden');
  S.totalKills+=kills;S.totalRuns++;
  if(wave>S.bestWave)S.bestWave=wave;
  let xpGain=kills*5;
  while(xpGain>0){const need=xpNeeded(S.level);if(S.xp+xpGain>=need){xpGain-=need-S.xp;S.xp=0;S.level++}else{S.xp+=xpGain;xpGain=0}}
  saveState();
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
  paused=false;
  document.getElementById('pauseMenu').classList.add('hidden');
  document.getElementById('gameover').classList.remove('active');
  document.getElementById('hud').classList.add('hidden');
  document.getElementById('controls').classList.add('hidden');
  gc.style.display='none';
  saveState();
  window.location.href='index.html';
}

function togglePauseMenu(force){
  if(!running || !player){return;}
  const pauseMenu=document.getElementById('pauseMenu');
  const shouldPause=typeof force==='boolean'?force:!paused;
  paused=shouldPause;
  if(shouldPause){
    pauseMenu.classList.remove('hidden');
    pauseMusic();
  } else {
    pauseMenu.classList.add('hidden');
    resumeMusic();
  }
}
function resumeMusic(){
  if(activeMusic==='game')playGameMusic();
}

// ═══════════════════════════════════════
//  PAUSE MENU SETUP
// ═══════════════════════════════════════
function setupPauseMenu(){
  const resumeBtn=document.getElementById('resumeBtn');
  const quitBtn=document.getElementById('quitBtn');
  const muteBtn=document.getElementById('muteToggleBtn');
  const volumeSlider=document.getElementById('volumeSlider');

  if(resumeBtn)resumeBtn.addEventListener('click',()=>togglePauseMenu(false));
  if(quitBtn)quitBtn.addEventListener('click',()=>{
    togglePauseMenu(false);
    backToMenu();
  });
  if(muteBtn)muteBtn.addEventListener('click',toggleMute);
  if(volumeSlider)volumeSlider.addEventListener('input',e=>setVolume(parseInt(e.target.value,10)/100));

  document.addEventListener('keydown',e=>{
    if((e.key==='Escape'||e.code==='Escape')){
      if(running && player && !document.querySelector('.modal-overlay.active')){
        e.preventDefault();
        togglePauseMenu();
      }
    }
  });

  applyAudioVolume();
}

// ═══════════════════════════════════════
//  MENU SOUND HANDLERS (for game page)
// ═══════════════════════════════════════
(function(){
  const play=()=>playRandomSound(MENU_SOUND_FILES);
  const retry=document.querySelector('#gameover .retry');
  const back=document.querySelector('#gameover .back');
  const resumeBtn=document.getElementById('resumeBtn');
  const quitBtn=document.getElementById('quitBtn');
  const muteBtn=document.getElementById('muteToggleBtn');
  if(retry)retry.addEventListener('click',play);
  if(back)back.addEventListener('click',play);
  if(resumeBtn)resumeBtn.addEventListener('click',play);
  if(quitBtn)quitBtn.addEventListener('click',play);
  if(muteBtn)muteBtn.addEventListener('click',play);
})();

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
setupPauseMenu();
setTimeout(()=>{startGame()},100);