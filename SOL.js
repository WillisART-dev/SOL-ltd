let section = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header .navbar a')

window.onscroll =()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')

        if(top>offset && top<offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
        })
    }  
  })

}


let navigation_bar = document.querySelector(".navbar")
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener('click', function(){
     navigation_bar.classList.add("active2");
});

close_btn.addEventListener("click", function(){
    navigation_bar.classList.remove("active2");
})



function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 700){
        navbar.classList.remove('bgColor');
    } else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);

