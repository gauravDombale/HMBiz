// let loginForm = document.querySelector('.login-form');

// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active');
//  }
// let close = document.querySelector('.login-form');

// document.querySelector('#times').onclick = () =>{
//     loginForm.classList.remove('active');
//  }
// window.onscroll = () =>{
//   loginForm.classList.remove('active');
// }




// let signupForm = document.querySelector('#profile');
// document.querySelector('#add').onclick = () =>{
    
// console.log("hii");

//  }
// let close = document.querySelector('.profile');

// // document.querySelector('#times').onclick = () =>{
// //     signupForm.classList.remove('active');
// //  }
// window.onscroll = () =>{
//   signupForm.classList.remove('active');
// }


 
 
// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// window.onscroll = () =>{
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }


// var slideIndex = 0;
// showSlides();
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for(i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if(slideIndex > slides.length) {
//     slideIndex = 1
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }




// $(document).ready(function(){
// 	$("#search-box").on("keyup", function() {
// 	  var value = $(this).val().toLowerCase();
// 	  $("#con1 .box").filter(function() {
// 		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
// 	  });
// 	});
//   });




// const switchTheme = document.querySelector("#dark");
// switchTheme.addEventListener("change", function () {
//   document.body.classList.toggle("dark-mode");
// });

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}





// var slideIndex = 0;
// showSlides();
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for(i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if(slideIndex > slides.length) {
//     slideIndex = 1
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 2 seconds
// }



function popup(popup_name)
{
  get_popup=document.getElementById(popup_name);
  if(get_popup.style.display=="flex")
  {
    get_popup.style.display="none";
  }
  else
  {
    get_popup.style.display="flex";
  }

}
function pop(pop)
{
    pop1='login-popup';
    get_pop1=document.getElementById(pop1);
    get_pop=document.getElementById(pop);
    if(get_pop.style.display=="flex")
    {
        get_pop1.style.display="flex";
        get_pop.style.display="none";
    }
    else
    {
        get_pop1.style.display="none";
        get_pop.style.display="flex";
    }
}
function datapop(data)
{
    data1='register-popup';
    get_data1=document.getElementById(data1);
    get_data=document.getElementById(data);
    if(get_data.style.display=="flex")
    {
        get_data1.style.display="flex";
        get_data.style.display="none";
    }
    else
    {
        get_data1.style.display="none";
        get_data.style.display="flex";
    }
}
function dis(name)
{
    get_name=document.getElementById(name);
    if(get_name.style.display=="flex")
    {
        get_name.style.display="none";
    }
    else
    {
        get_name.style.display="flex";
    }
}

function show(show)
{
  get_show=document.getElementById(show);
  if(get_show.style.display=="flex")
  {
    get_show.style.display="none";
  }
  else
  {
    get_show.style.display="flex";
  }
}


  // --- Nav |  01  |  Side-Slide
  $('#add').click(function() {
    console.log("clicked")
    $('.profile').animate({left: "0px"}, 200);
  });
  
  $('h3.nav01').click(function() {
    $('.profile').animate({left: "-285px"}, 200);
  });