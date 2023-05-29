
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
      // экран стал вертикальным
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
// if (hellodiv.style.height > 100) {
//   hellodiv.style.height = "100vh";
//   console.log('div больше и должен обрезатся');
// }

// const div = document.querySelector('.headerdiv');
// const placeholder = document.createElement('div');
// placeholder.style.height = div.offsetHeight + 'px';
// placeholder.style.display = 'none';
// div.parentNode.insertBefore(placeholder, div);
// const threshold = div.offsetTop;
// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > threshold) {
//     div.classList.add('fixed-top');
//     placeholder.style.display = 'block'; // show the placeholder element when the div element becomes fixed
//   } else {
//     div.classList.remove('fixed-top');
//     placeholder.style.display = 'none'; // hide the placeholder element when the div element is no longer fixed
//   }
// });
// const divmenuspan = document.querySelector('.divmenuspan');
// const dropdiv = document.querySelector('.dropdiv');
// divmenuspan.addEventListener('click', () =>{
//     console.log('Нажал');
//     dropdiv.style.height = "68vw";
//     setTimeout(function() {
//         dropdiv.style.padding = "3vw";
//     }, 60);
//     // dropdiv.style.padding = "3vw";
// });
// const dropdivb1 = document.querySelector('.dropdiv .a1 .b1');
// dropdivb1.addEventListener('click', () =>{
//     console.log('Нажал');
//     dropdiv.style.height = "0";
//     // dropdiv.style.padding = "0";
//     setTimeout(function() {
//         dropdiv.style.padding = "0";
//     }, 240);
// });
