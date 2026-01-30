<script>
// Floating hearts
setInterval(()=>{
 let h=document.createElement('div');
 h.className='heart';
 h.innerHTML='❤️';
 h.style.left=Math.random()*100+'vw';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
},300);

// Typewriter
const text="I love you Sanjana… more than words can ever express ❤️";
let i=0;
(function typing(){
 if(i<text.length){
   document.getElementById('type').innerHTML+=text.charAt(i);
   i++; setTimeout(typing,55);
 }
})();

// Letter popup
function openLetter(){
 document.getElementById('letter').style.display='block';
 document.getElementById('overlay').style.display='block';
}
function closeLetter(){
 document.getElementById('letter').style.display='none';
 document.getElementById('overlay').style.display='none';
}

// Gallery
function showGallery(){
 document.getElementById('gallery').style.display='block';
 window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
}

// Proposal
function startProposal(){
 document.getElementById('proposal').style.display='block';
 window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
}

// No button runs away
const noBtn=document.getElementById('noBtn');
noBtn.addEventListener('mouseover',()=>{
 noBtn.style.position='absolute';
 noBtn.style.left=Math.random()*80+'%';
 noBtn.style.top=Math.random()*80+'%';
});

// Show clue
function showClue(){
 document.getElementById('clue').style.display='block';
}

// MUSIC FIX — plays on first interaction
const music=document.getElementById('music');
document.body.addEventListener('click',()=>{
 if(music.paused) music.play();
},{once:true});

function toggleMusic(){
 if(music.paused) music.play();
 else music.pause();
}
</script>
