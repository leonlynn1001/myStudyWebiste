const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const videos = document.querySelectorAll(".tutorial");
const totalVd = videos.length;
let index =0 ;
nextBtn.addEventListener('click',()=>{
  hideAll();
  if(index===totalVd-1){
    index==0;
  }
  else{
    index++;
  }
  videos[index].classList.add("show");
})
prevBtn.addEventListener('click',()=>{
  hideAll();
  if(index===0){
    index= totalVd-1;
  }
  else{
    index--;
  }
  videos[index].classList.add("show")
  // videos[index].style.d
})
function hideAll(){
  for(vd of videos){
    vd.classList.remove("show");
  }
}