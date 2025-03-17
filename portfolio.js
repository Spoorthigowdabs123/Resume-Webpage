let prevScrollPos=window.scrollY
window.addEventListener("scroll",()=>{
    const navBar=document.querySelector(".navBar")
    const currentScrollPos = window.scrollY
    if (currentScrollPos>prevScrollPos)
    {
        navBar.classList.add("hide")
        navBar.classList.remove("show")
    }
    else{
        navBar.classList.add("show")
        navBar.classList.remove("hide")
    }
    prevScrollPos=currentScrollPos
})