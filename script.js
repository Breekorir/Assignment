
const openMenuButton=document.querySelector("#inc");
openMenuButton.addEventListener("click", ()=>{
    console.log("Opening Menu!!!")
   document.querySelector("#mobile-menu").style.display="flex"})


    
const closeMenuButton=document.querySelector("#ind");
closeMenuButton.addEventListener("click", ()=>{
   console.log("Closing Menu!!!")
   document.querySelector("#mobile-menu").style.display="none"})
