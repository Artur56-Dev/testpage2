const div = document.querySelector('.headerdiv');
const placeholder = document.createElement('div');
placeholder.style.height = div.offsetHeight + 'px';
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
const divmenuspan = document.querySelector('.divmenuspan');
const dropdiv = document.querySelector('.dropdiv');
divmenuspan.addEventListener('click', () => {
  console.log('Нажал');
  dropdiv.style.height = "68vw";
  setTimeout(function () {
    dropdiv.style.padding = "3vw";
  }, 60);
  // dropdiv.style.padding = "3vw";
});
const dropdivb1 = document.querySelector('.dropdiv .a1 .b1');
dropdivb1.addEventListener('click', () => {
  console.log('Нажал');
  dropdiv.style.height = "0";
  // dropdiv.style.padding = "0";
  setTimeout(function () {
    dropdiv.style.padding = "0";
  }, 240);
});
window.addEventListener('load', function () {
  window.addEventListener("resize", function() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      // экран стал вертикальным
      const headingp = this.document.querySelector('.heading headingp');
      if(this.document.body.offsetWidth < 480){
        this.location.href = "index.html";
        headingp.textContent = ""
      }
      console.log('Экран стал вертикальным');
    } else if (window.matchMedia("(orientation: landscape)").matches) {
      // экран стал горизонтальным
      if(this.document.body.offsetWidth < 480){
        this.location.href = "index.html";
        headingp.textContent = "sfsadfd"
      }
      console.log("Экран стал горизонтальным");
    }
  });
});
// window.addEventListener("resize", function () {
//   if (window.matchMedia("(orientation: portrait)").matches) {
//     // экран стал горизонтальным
//     console.log('стал горизонтальным');
//     if (this.document.body.offsetWidth < 480) {
//       this.location.href = "index.html";
//     }
//   }
// });
