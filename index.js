
const menuButton = document.querySelector(".menubutton");
const crossBtn = document.querySelector(".crossBtn")

menuButton.addEventListener("click",()=>{
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'block';
})

crossBtn.addEventListener("click",()=>{
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
})
console.log(crossBtn);