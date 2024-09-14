function showHideInfo(button) {
    const infoSection = button.nextElementSibling;
    infoSection.classList.toggle('show-info');
  }
  
  
  const infoButtons = document.querySelectorAll('.toggle-info');
  
  infoButtons.forEach(button => {
    button.addEventListener('click', () => {
      showHideInfo(button);
    });
  });


/*for books page*/

function searchBooks() {
    var searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    var cards = document.querySelectorAll('.card.book');

    cards.forEach(function(card) {
        var title = card.querySelector('.card-title').textContent.trim().toLowerCase();
        if (title.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('searchInput').addEventListener('input', searchBooks);



/*Event page */
var seeMoreButton=document.querySelectorAll('.btn');

seeMoreButton.forEach(button=>{
  button.addEventListener('click',function(){

    var content=document.getElementById('hidden-content');
    console.log(content);
    if(content.style.display==='none' || content.style.display==='')
      {
        content.style.display='block';
        this.textContent='Read Less';
      }
      else{
        content.style.display='none';
       this.textContent='Find Out More';
      } 
      console.log(content.style.display);
  });
}); 




