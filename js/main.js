// ═══════════════════════════════════════
//  STATE
// ═══════════════════════════════════════
const S={level:1,xp:0,avatarId:0,mapId:0,totalKills:0,bestWave:0,totalRuns:0};
(function(){
  const s=localStorage.getItem('mau_s');
  if(s)Object.assign(S,JSON.parse(s));
})();
function writeState(){
  localStorage.setItem('mau_s',JSON.stringify({
    level:S.level,xp:S.xp,avatarId:S.avatarId,mapId:S.mapId,
    totalKills:S.totalKills,bestWave:S.bestWave,totalRuns:S.totalRuns
  }));
}

let volume=0.4, muted=false, activeMusic='menu';
let menuMusic=null;

function saveAudioState(){
  localStorage.setItem('mau_volume',volume);
  localStorage.setItem('mau_muted',muted);
}
function loadAudioState(){
  const v=localStorage.getItem('mau_volume');
  const m=localStorage.getItem('mau_muted');
  if(v!==null)volume=parseFloat(v);
  if(m!==null)muted=m==='true';
}
loadAudioState();

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

document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape') document.querySelectorAll('.modal-overlay.active').forEach(m=>m.classList.remove('active'));
});

// ═══════════════════════════════════════
//  MENU AUDIO
// ═══════════════════════════════════════
function initAudio(){
  if(!menuMusic){
    menuMusic=new Audio('assets/menu_music/Orbital Lobby_1.mp3');
    menuMusic.loop=true;
    menuMusic.volume=volume;
  }
}
function applyAudioVolume(){
  initAudio();
  const effective=muted?0:volume;
  if(menuMusic)menuMusic.volume=effective;
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
function playMenuMusic(){
  initAudio();
  activeMusic='menu';
  if(menuMusic){menuMusic.currentTime=0; menuMusic.play().catch(()=>{});}
  applyAudioVolume();
}
function pauseMusic(){
  if(menuMusic)menuMusic.pause();
}
function resumeMusic(){
  if(activeMusic==='menu')playMenuMusic();
}

// ═══════════════════════════════════════
//  SOUND EFFECTS
// ═══════════════════════════════════════
const MENU_SOUND_FILES=[
  'assets/menu_sounds/click_1.wav',
  'assets/menu_sounds/click_2.wav'
];
function playRandomSound(files){
  if(!files||!files.length)return;
  const a=new Audio(files[Math.floor(Math.random()*files.length)]);
  a.volume=volume;
  a.play().catch(()=>{});
}
function setupMenuSounds(){
  const play=()=>playRandomSound(MENU_SOUND_FILES);
  document.querySelectorAll('.menu-btns button').forEach(b=>b.addEventListener('click',play));
  document.querySelectorAll('.modal-close').forEach(b=>b.addEventListener('click',play));
}
setupMenuSounds();

// ═══════════════════════════════════════
//  START OVERLAY & MENU INIT
// ═══════════════════════════════════════
document.addEventListener('click',()=>playMenuMusic(), {once:true});
document.addEventListener('touchstart',()=>playMenuMusic(), {once:true});
document.addEventListener('keydown',()=>playMenuMusic(), {once:true});
playMenuMusic();

const startOverlay=document.getElementById('startOverlay');
if(startOverlay){
  const startHandler=()=>{
    playMenuMusic();
    startOverlay.style.display='none';
    document.removeEventListener('click',startHandler);
    document.removeEventListener('touchstart',startHandler);
    document.removeEventListener('keydown',startHandler);
  };
  startOverlay.addEventListener('click',startHandler);
  startOverlay.addEventListener('touchstart',startHandler);
  startOverlay.addEventListener('keydown',startHandler);
}

// ═══════════════════════════════════════
//  MAP SELECTION
// ═══════════════════════════════════════
(function(){
  const g=document.getElementById('mapGrid');
  MAPS.forEach(m=>{
    const c=document.createElement('div');c.className='map-card'+(m.id===S.mapId?' selected':'');
    c.innerHTML=`<img src="${m.img}" alt="${m.name}"><div class="info"><h3>${m.name}</h3><p>${m.desc}</p></div>`;
    c.onclick=()=>{
      playRandomSound(MENU_SOUND_FILES);
      S.mapId=m.id;writeState();
      g.querySelectorAll('.map-card').forEach(x=>x.classList.remove('selected'));
      c.classList.add('selected');
      closeModal('mapModal');
      window.location.href='game.html';
    };
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
    c.onclick=()=>{
      playRandomSound(MENU_SOUND_FILES);
      S.avatarId=a.id;writeState();
      g.querySelectorAll('.avatar-card').forEach(x=>{x.classList.remove('selected');x.querySelector('.status').textContent='Select'});
      c.classList.add('selected');c.querySelector('.status').textContent='Equipped';
      closeModal('avatarModal');
    };
    g.appendChild(c);
  });
})();

// ═══════════════════════════════════════
//  GAME ENGINE (redirect only)
// ═══════════════════════════════════════
function startGame(){
  writeState();
  window.location.href='game.html';
}