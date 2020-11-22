let imageCollection = [
   "images/img1.jpeg",
   "images/img2.jpeg",
   "images/img3.jpeg",
   "images/img4.jpeg",
   "images/img5.jpeg",
   "images/img6.jpeg",
   "images/img7.jpeg"
];

let container = document.getElementById('container');
function show() {
   container.style.display = "block";
   chooseImg();
   timerID = setInterval(chooseImg, 5000);
}
setInterval(show, 10000);

document.body.addEventListener('mousemove', e => {
   container.style.display = "none";
});

//create random index for selection of images
function chooseImg() {
   let currentImg = [];
   let index = Math.floor(Math.random() * imageCollection.length);
   if (currentImg.length === 0) {
      currentImg.push(index);
   } else if (currentImg.length === 1) {
      if (currentImg[0] === index) {
         index = imageCollection.length;
      }
      currentImg.pop();
      currentImg.push(index);
   }
   showScreenSaver(currentImg[0]);
}

function showScreenSaver(num) {
   let shell = document.getElementById('shell');
   let img = document.createElement('img');
   img.className = "pic";
   img.src = imageCollection[num];
   shell.append(img);
   fadeIn(img, 300);
   if (shell.children.length > 0) {
      fadeOut(img, 4800);
      let image = shell.getElementsByClassName('pic')[0];
      fadeOut(img, 5000);
      image.replaceWith(img);
      changePosition(img, shell);
   }
}

function changePosition(img, pos) {
   let posTop = Math.trunc(Math.random() * img.offsetHeight / 40 + 3);
   let posLeft = Math.trunc(Math.random() * img.offsetWidth + 2 * img.offsetWidth / 10 + 100);
   img.style.position = "relative";
   img.style.top = posTop + 'px';
   img.style.left = posLeft + 'px';
}

function fadeIn(img, speed) {
   setInterval(function () {
      img.style.opacity = 1;
   }, speed);
}

function fadeOut(img, speed) {
   setInterval(function () {
      img.style.opacity = 0;
   }, speed);
}



