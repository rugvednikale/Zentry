const nextButton =document.querySelector('.next-button');
const video = document.querySelector('.hero-video');

const movielist = ['video/hero.mp4', 'video/hero2.mp4', 'video/hero3.mp4', 'video/hero4.mp4',];

let index = 0;
nextButton.addEventListener('click', function() {

    index+=1;
   video.src = movielist[index];
    if(index ===3){
        index=-1;
    }    
});
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };
  
  const res = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  alert(result.message);
});
