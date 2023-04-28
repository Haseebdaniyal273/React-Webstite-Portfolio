/////////switcher//////////
// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click",() =>{
//     document.querySelector(".style-switcher").classList.toggle("open")
// })

//////hide on scroll/////

window.addEventListener("scroll",() => {

if(document.querySelector(".style-switcher").classList.contains("open"))
{
    document.querySelector(".style-switcher").classList.remove("open");
}
})

function setActiveStyle(color)
{

    
}

/////////////////////////////////Aside//////////////////////////////////////
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0  ; i<totalNavList ; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            this.classList.add("active")
        })
      }

////////////////////////////////////////////////////////////////////////////
// var typed = new Typed(".typing",{
// String:["web Designer","Web Developer","Freelancer"],
// typeSpeed:100,
// BackSpeed:60,
// loop:true
// })


