


// -------------------------------

var header = document.getElementById('box__contetn__right')
var navbarpage = document.getElementById("navbarpage_id");
var logo = document.getElementById("img_logo")
var navbar_page = document.getElementById("navbar_page__box-id")

function myFunction() {

  if (window.scrollY < 128) {
    navbarpage.style.position = "relative"

    navbar_page.style.justifyContent = "center"

    navbarpage.style.backgroundColor = "transparent"

    logo.style.width = 0
  }

  if (window.scrollY >= 128) {
    // header.style.position = "fixed";
    // header.style.right = "44px"
    // header.style.top = "75px"


    navbarpage.style.position = "fixed"
    navbarpage.style.backgroundColor = "#fff"
    navbarpage.style.top = 0
    navbarpage.style.height = "60px"
    navbarpage.style.display = "flex"
    navbarpage.style.alignItems = "center"


    logo.style.width = "100% "

    navbar_page.style.justifyContent = "space-between"

    // console.log(window.pageYOffset)
  }
  // if (window.scrollY <= 100){
  //   // header.style.position = "absolute";
  //   // header.style.top = "45px"
  //   // header.style.right = "-70px"
  // }
  if (window.scrollY >= 3570) {
    header.style.position = "absolute";
    header.style.right = "-70px"
    header.style.top = "81.8%"
  }
}



function myFunction1() {

  if (window.scrollY < 128) {
    navbarpage.style.position = "relative"

    navbar_page.style.justifyContent = "center"

    navbarpage.style.backgroundColor = "transparent"

    logo.style.width = 0
  }

  if (window.scrollY >= 128) {
    header.style.position = "fixed";
    header.style.right = "44px"
    header.style.top = "75px"


    navbarpage.style.position = "fixed"
    navbarpage.style.backgroundColor = "#fff"
    navbarpage.style.top = 0
    navbarpage.style.height = "75px"
    navbarpage.style.display = "flex"
    navbarpage.style.alignItems = "center"


    logo.style.width = "100% "

    navbar_page.style.justifyContent = "space-between"

    console.log(window.pageYOffset)
  }
  if (window.scrollY <= 100) {
    header.style.position = "absolute";
    header.style.top = "45px"
    header.style.right = "-70px"
  }
  if (window.scrollY >= 3570) {
    header.style.position = "absolute";
    header.style.right = "-70px"
    header.style.top = "81.8%"
  }
}


function myFunction2() {

  if (window.scrollY >50) {
    document.getElementById('header').style.position = "fixed"
    document.getElementById('header').style.zIndex = "9999"
    document.getElementById('header_top').style.height = "50px"
    document.getElementById('nav-menu').style.height = "50px"
    document.getElementById('nav-menu').style.display = "block"
    // document.getElementById('nav-menu').style.backgroundColor = "red"
    document.getElementById('nav-menu').style.marginLeft = "90px"
    document.getElementById('nav-menu').style.borderTop = "1px solid #e3e3e3"
    document.getElementById('header-logo').style.width = "7%"
    document.getElementById('header-logo').style.marginTop = "3%"
    document.getElementById('header-book').style.display = "none"
    document.getElementById('header-main').style.display = "none" 
    // document.getElementById('nav-item').style.display = "none" 
    // document.getElementById('nav-link').style.color = "#000000"

  }

  if (window.scrollY <= 50) {
    document.getElementById('header').style.position = "relative"
    document.getElementById('header').style.zIndex = "9999"
    document.getElementById('header_top').style.height = "94px"
    document.getElementById('nav-menu').style.height = "50px"
    document.getElementById('nav-menu').style.display = "none"
    // document.getElementById('nav-menu').style.backgroundColor = "red"
    document.getElementById('nav-menu').style.marginLeft = "90px"
    document.getElementById('nav-menu').style.borderTop = "1px solid #e3e3e3"
    document.getElementById('header-logo').style.width = "8%"
    document.getElementById('header-logo').style.marginTop = "0%"
    document.getElementById('header-book').style.display = "block"
    document.getElementById('header-main').style.display = "block" 

  }
  
}


function goTop(){
  window.scroll(0, 0);
}


























var index = 0;
setInterval(
  changeImage = function () {
    var img = ['../IMG/Pool 00015.jpg', '../IMG/sl16.jpg'];
    document.getElementById('img').src = img[index];
    index++;
    if (index == 2) {
      index = 0;
    }
  }
  , 4000);

  

// ----------------------------

var story_content = ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br><br> Curabitur a tellus sed lectus ultrices accumsan ut eu nulla. In varius rutrum commodo. Duis justo purus, semper eget molestie in, consectetur vel nibh. Nulla commodo tellus eget sem tristique, eget convallis massa laoreet. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. <br><br> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.']

function myclick1() {
  document.getElementById('our_story__right__content-id').textContent = story_content[0]
  document.getElementById('our_story__right__title__box1').style.borderBottom = "3px solid #DBA765"
  document.getElementById('our_story__right__title__box1').style.color = "#DBA765"
  document.getElementById('our_story__right__title__box2').style.borderBottom = "0"
  document.getElementById('our_story__right__title__box2').style.color = "#000000"

}
function myclick2() {
  document.getElementById('our_story__right__content-id').textContent = story_content[1]
  document.getElementById('our_story__right__title__box2').style.borderBottom = "3px solid #DBA765"
  document.getElementById('our_story__right__title__box2').style.color = "#DBA765"
  document.getElementById('our_story__right__title__box1').style.borderBottom = "0"
  document.getElementById('our_story__right__title__box1').style.color = "#000000"
}


// -----------------------------

var img_box1 = ['../IMG/g1.jpg','../IMG/g21.jpg','../IMG/g31.jpg']
var img_box2 = ['../IMG/g2.jpg','../IMG/g22.jpg','../IMG/g32.jpg']
var img_box3 = ['../IMG/g3.jpg','../IMG/g23.jpg','../IMG/g33.jpg']
var img_box4 = ['../IMG/g4.jpg','../IMG/g24.jpg','../IMG/g34.jpg']
var img_box5 = ['../IMG/g5.jpg','../IMG/g25.jpg','../IMG/g35.jpg']
var img_box6 = ['../IMG/g6.jpg','../IMG/g26.jpg','../IMG/g36.jpg']
var img_box7 = ['../IMG/g7.jpg','../IMG/g27.jpg','../IMG/g37.jpg']
var img_box8 = ['../IMG/g8.jpg','../IMG/g28.jpg','../IMG/g38.jpg']

function myclick3(){
  document.getElementById('content__image_id1').src = img_box1[0]
  document.getElementById('content__image_id2').src = img_box2[0]
  document.getElementById('content__image_id3').src = img_box3[0]
  document.getElementById('content__image_id4').src = img_box4[0]
  document.getElementById('content__image_id5').src = img_box5[0]
  document.getElementById('content__image_id6').src = img_box6[0]
  document.getElementById('content__image_id7').src = img_box7[0]
  document.getElementById('content__image_id8').src = img_box8[0]

  document.getElementById('ROOMS_SUITES_id').style.borderBottom = "4px solid #DBA765"
  document.getElementById('ROOMS_SUITES_id').style.marginRight = "40px"
  document.getElementById('ROOMS_SUITES_id').style.cursor = "pointer"
  document.getElementById('ROOMS_SUITES_id').style.color = "#DBA765"

  document.getElementById('RESTAURANTS_BARS_id').style.borderBottom = "4px solid transparent"
  document.getElementById('SPA_id').style.borderBottom = "4px solid transparent"
  document.getElementById('RESTAURANTS_BARS_id').style.color = "#000000"
  document.getElementById('SPA_id').style.color = "#000000"
}
function myclick4(){
  document.getElementById('content__image_id1').src = img_box1[1]
  document.getElementById('content__image_id2').src = img_box2[1]
  document.getElementById('content__image_id3').src = img_box3[1]
  document.getElementById('content__image_id4').src = img_box4[1]
  document.getElementById('content__image_id5').src = img_box5[1]
  document.getElementById('content__image_id6').src = img_box6[1]
  document.getElementById('content__image_id7').src = img_box7[1]
  document.getElementById('content__image_id8').src = img_box8[1]

  document.getElementById('RESTAURANTS_BARS_id').style.borderBottom = "4px solid #DBA765"
  document.getElementById('RESTAURANTS_BARS_id').style.marginRight = "40px"
  document.getElementById('RESTAURANTS_BARS_id').style.cursor = "pointer"
  document.getElementById('RESTAURANTS_BARS_id').style.color = "#DBA765"

  document.getElementById('ROOMS_SUITES_id').style.borderBottom = "4px solid transparent"
  document.getElementById('SPA_id').style.borderBottom = "4px solid transparent"
  document.getElementById('ROOMS_SUITES_id').style.color = "#000000"
  document.getElementById('SPA_id').style.color = "#000000"

}
function myclick5(){
  document.getElementById('content__image_id1').src = img_box1[2]
  document.getElementById('content__image_id2').src = img_box2[2]
  document.getElementById('content__image_id3').src = img_box3[2]
  document.getElementById('content__image_id4').src = img_box4[2]
  document.getElementById('content__image_id5').src = img_box5[2]
  document.getElementById('content__image_id6').src = img_box6[2]
  document.getElementById('content__image_id7').src = img_box7[2]
  document.getElementById('content__image_id8').src = img_box8[2]

  document.getElementById('SPA_id').style.borderBottom = "4px solid #DBA765"
  document.getElementById('SPA_id').style.marginRight = "40px"
  document.getElementById('SPA_id').style.cursor = "pointer"
  document.getElementById('SPA_id').style.color = "#DBA765"

  document.getElementById('ROOMS_SUITES_id').style.borderBottom = "4px solid transparent"
  document.getElementById('RESTAURANTS_BARS_id').style.borderBottom = "4px solid transparent"
  document.getElementById('ROOMS_SUITES_id').style.color = "#000000"
  document.getElementById('RESTAURANTS_BARS_id').style.color = "#000000"
}


// ====================
// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 15,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 2
//         },
//         1000: {
//             items: 3
//         }
//     }
// })


