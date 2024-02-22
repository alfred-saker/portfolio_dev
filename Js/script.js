const div_link = document.getElementById("div_link")
const burgerIcon = document.getElementById("burger")

console.log(burgerIcon)

burgerIcon.addEventListener('click', displayLink)


function displayLink() {
  if (div_link.style.display === 'none') {
    console.log("Block");
    div_link.style.display = "block";
  } else {
    console.log("none");
    div_link.style.display = "none";
  }
}

const text = document.querySelector(".sec-text")

const textLoad = ()=>{
  setTimeout(()=>{
    text.textContent = "Alfred Kuate." 
  }, 0)
  setTimeout(()=>{
    text.textContent = "Dev Web Backend." 
  }, 4000)
  setTimeout(()=>{
    text.textContent = "Passionné du Digital." 
  }, 8000)
}
textLoad()
setInterval(textLoad, 20000)


const btn_up = document.querySelector('.btn-up') 

btn_up.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
})



