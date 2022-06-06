let circle = document.querySelectorAll('.circle');
let imgFrame = document.querySelectorAll('.img_frame');

circle[0].style.backgroundColor = '#FFFFFF';
circle[3].style.backgroundColor = '#FFFFFF';
circle[6].style.backgroundColor = '#FFFFFF';

for (let n = 0; n < circle.length; n++) {
  if (n<3) {
    circle.item(n).addEventListener('click', () => {
      imgFrame[0].src=`img/rooms/${n}.png`;
      circle[0].style.backgroundColor = '';
      circle[1].style.backgroundColor = '';
      circle[2].style.backgroundColor = '';
      circle[n].style.backgroundColor = '#FFFFFF';
    }) 
  } else {
    if (n<6) {
      circle.item(n).addEventListener('click', () => {
        imgFrame[1].src=`img/rooms/${n}.png`;
        circle[3].style.backgroundColor = '';
        circle[4].style.backgroundColor = '';
        circle[5].style.backgroundColor = '';
        circle[n].style.backgroundColor = '#FFFFFF';
      })
    } else {
      circle.item(n).addEventListener('click', () => {
        imgFrame[2].src=`img/rooms/${n}.png`;
        circle[6].style.backgroundColor = '';
        circle[7].style.backgroundColor = '';
        circle[8].style.backgroundColor = '';
        circle[n].style.backgroundColor = '#FFFFFF';
      })
    }    
  }
};