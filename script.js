let bodyWidth = document.body.clientWidth;
console.log(bodyWidth);
window.addEventListener('load', function () {
  const hellodiv = document.querySelector('.maindiv .hellodiv');
  const conteiner1 = document.querySelector('.maincontent .conteiner1');
  console.log('Высоты div:' + hellodiv.offsetHeight);
  if (hellodiv.offsetHeight > window.innerHeight) {
    hellodiv.style.height = "100vh";
    console.log('div больше и должен обрезатся');
  }
  if(this.window.innerWidth > this.window.innerHeight){
    conteiner1.style.height = "80vh";
    console.log("Ширина "+this.window.innerWidth + " больше " + "Высоты " + this.window.innerHeight)
  }
  else{
    conteiner1.style.height = "80vw";
    console.log("Ширина "+ this.window.innerWidth + " меньше " + "Высоты " + this.window.innerHeight)
  }
  window.addEventListener("resize", function() {
    
    
    if (window.matchMedia("(orientation: portrait)").matches) {
      if(this.window.innerWidth > this.window.innerHeight){
        conteiner1.style.height = "80vh";
        console.log("Ширина "+this.window.innerWidth + " больше " + "Высоты " + this.window.innerHeight)
      }
      else{
        conteiner1.style.height = "80vw";
        console.log("Ширина "+ this.window.innerWidth + " меньше " + "Высоты " + this.window.innerHeight)
      }
      console.log('Экран стал вертикальным');
    } else if (window.matchMedia("(orientation: landscape)").matches) {
      // экран стал горизонтальным
      if(this.document.body.offsetWidth < 480){
        this.location.href = "index2.php";
      }
      if(this.window.innerWidth > this.window.innerHeight){
        conteiner1.style.height = "80vh";
        console.log("Ширина "+this.window.innerWidth + " больше " + "Высоты " + this.window.innerHeight)
      }
      else{
        conteiner1.style.height = "80vw";
        console.log("Ширина "+ this.window.innerWidth + " меньше " + "Высоты " + this.window.innerHeight)
      }
      console.log("Экран стал горизонтальным");
    }
  });
});
console.log('Видимоя высота:' + window.innerHeight);
const div = document.querySelector('.headerdiv');
const placeholder = document.createElement('div');
placeholder.style.height = 5 + 'vw';
placeholder.style.display = 'none';
div.parentNode.insertBefore(placeholder, div);
const threshold = div.offsetTop;
window.addEventListener('scroll', () => {
  if (window.pageYOffset > threshold) {
    div.classList.add('fixed-top');
    placeholder.style.display = 'block'; // show the placeholder element when the div element becomes fixed
  } else {
    div.classList.remove('fixed-top');
    placeholder.style.display = 'none'; // hide the placeholder element when the div element is no longer fixed
  }
});
const div1 = document.querySelector('.headerdiv2');
const placeholder1 = document.createElement('div');
placeholder1.style.height = 7 + 'vh';
placeholder1.style.display = 'none';
div1.parentNode.insertBefore(placeholder1, div1);
const threshold1 = div.offsetTop;
window.addEventListener('scroll', () => {
  if (window.pageYOffset > threshold1) {
    div1.classList.add('fixed-top');
    placeholder1.style.display = 'block'; 
  } else {
    div1.classList.remove('fixed-top');
    placeholder1.style.display = 'none';
  }
});
const divmenuspan = document.querySelector('.divmenuspan2');
const dropdiv = document.querySelector('.dropdiv2');
divmenuspan.addEventListener('click', () => {
  console.log('Нажал');
  dropdiv.style.height = "68vw";
  setTimeout(function () {
    dropdiv.style.padding = "3vw";
  }, 60);
});
const dropdivb1 = document.querySelector('.dropdiv2 .a1 .b1');
dropdivb1.addEventListener('click', () => {
  console.log('Нажал');
  dropdiv.style.height = "0";
  // dropdiv.style.padding = "0";
  setTimeout(function () {
    dropdiv.style.padding = "0";
  }, 240);
});
const blurback = document.querySelector('.blurback');
const elements = document.querySelectorAll('#singin');
elements.forEach(element => {
  element.addEventListener('click', function() {
    blurback.style.display = "flex";
  });
});
const closeregforms = document.querySelectorAll('#closeregform');
closeregforms.forEach(closeregform => {
  closeregform.addEventListener('click', function() {
    blurback.style.display = "none";
  });
});
const loginfotm = document.querySelector('.login-logout .a2');
const registrfotm = document.querySelector('.login-logout .a3');
$('#backsingin').click(function(){
  loginfotm.style.display = "flex";
  registrfotm.style.display = "none";
});
$('#regform').click(function(){
  loginfotm.style.display = "none";
  registrfotm.style.display = "flex";
});
