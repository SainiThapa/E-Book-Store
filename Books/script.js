var seeMoreButton=document.querySelectorAll('.readmore-button');

seeMoreButton.forEach(button=>{
  button.addEventListener('click',function(){

    var content=document.getElementById('hidden-content');
    console.log(content);
    if(content.style.display==='none' || content.style.display=='')
      {
        content.style.display='block';
        this.textContent='Read less';
      }
      else{
        content.style.display='none';
       this.textContent='Read more';
      } 
      console.log(content.style.display);
  });
}); 