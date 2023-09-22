// import $ from "jquery";
// import data from "../pData";
$(function(){
  let windowW = $(window).width();
  console.log(windowW);
  // scrollAll();

  var delay = 300;
  var timer = null;

  //Javascript
  window.addEventListener('resize', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      console.log('resize event!');
    }, delay);
  });
  
  nav();
  textAnimation();
  link();
  resize();
  // allData();
  if(windowW >= 1441){
    cursorAnimate();
    // subMenu();
    // hearMeBtn();
    // gallery();
    // animation();
  }else if(windowW <= 1440){
    // mNav();
    // gallery();
    // hearMeBtn();
    menuBtn();
    headerBg();
  }
  
})


// 함수 
function allData(){
  
  //객체 만들기
  function Modal(title,pic,year,program,url,text){
    this.title = title;
    this.pic = pic;
    this.year = year;
    this.program = program;
    this.url = url;
    this.text = text;
  }

  Modal.prototype.action = function(){
  document.querySelector('#modal h4').innerHTML = this.title;
  document.querySelector('#box03>div>div>figure>img').setAttribute('src',this.pic);
  document.querySelector('#modal figure>figcaption').innerHTML =  this.title;
  document.querySelector('#modal dl>dd:nth-child(2)').innerHTML = this.year;
  document.querySelector('#modal dl>dd:nth-child(4)').innerHTML = this.program;
  document.querySelector('#modal dl>dd>a').setAttribute('href',this.url)
  document.querySelector('#modal dl>dd>a').innerHTML = this.url;
  document.querySelector('#modal dl>dd:nth-child(8)').innerHTML = this.text;
  }
  let mymodal = [
    new Modal('knola','./images/knola.jpg','2003','react program','http://jungmin.react.knola.s3-website.ap-northeast-2.amazonaws.com','text03'),
    new Modal('banksalad','./images/banksalad.jpg','2001','react program','http://www.a1.com','text01'),
    new Modal('hanssem','./images/hanssem.jpg','2002','js program','http://jungmin.react.hanssem.s3-website.ap-northeast-2.amazonaws.com','text02')
  ]
  const btn = document.querySelectorAll('#gallery04 .gallery04>figure');
  const close = document.querySelector('#modal .close');

  btn.forEach(function(item,index){
    item.addEventListener('click',function(){
      document.querySelector('#modal').style.display = 'flex';
      mymodal[index].action();
    })
  });

  close.addEventListener('click',function(){
    document.querySelector('#modal').style.display = 'none';
  });
  // const result = data.forEach((value, index) =>{
  //     $('#gallery04>.show04>.all04').append(`<figure><img src=${data[index].photo} alt=${data[index].title}></img><figcaption>${data[index].title}</figcaption></figure>`);
  //     // figure클릭시
  //     $("#gallery04 figure").click(function(){
  //       $("#box02 .modal").css('display', 'flex');
  //       $(".modal>section>div>figure").innerHTML = (`<img src=${data[index].photo} alt=${data[index].title}>`);
  //       $(".modal>section>div>ul").innerHTML = (`<li><dfn>title</dfn><span>${data[index].title}</span></li><li><dfn>url</dfn><span><a href=${data[index].url} target="_blank">이동</a></span></li><li><dfn>language</dfn><span>${data[index].language}</span></li>`);
  //     }); 
  // })
  // $('.modal .close').on('click', function(){
  //   $('#box02 .modal').css('display', 'none');
    
  // })
  
}

function scrollAll(){
  window.addEventListener("wheel", function(e){
    e.preventDefault();
  },{passive : false});
  var $html = $("html");
  var page = 1;
  var lastPage = $(".content").length;

  $html.animate({scrollTop:0},10);
  $(window).on("wheel", function(e){
  
    if($html.is(":animated")) return;
  
    if(e.originalEvent.deltaY > 0){
      if(page== lastPage) return;
  
      page++;
    }else if(e.originalEvent.deltaY < 0){
      if(page == 1) return;
  
      page--;
    }
    var posTop = (page-1) * $(window).height();
  
    $html.animate({scrollTop : posTop});
 
  });

}
// 내비게이션
function nav(){     // top포함
  $('#header nav>ul>li>a').on('click', function(){
      let href = $(this).attr('href');
      console.log(href);
      let idHeight = $(href).offset().top;
      $('html,body').animate({scrollTop: idHeight}, 500);
      return false;   // a 막아주기
  })
  $('#box01>a').on('click', function(){
    let href = $(this).attr('href');
      console.log(href);
      let idHeight = $(href).offset().top;
      $('html,body').animate({scrollTop: idHeight}, 500);
      return false;   // a 막아주기
  })
  $('header>div>h1>a').on('click', function(){
    let href = $(this).attr('href');
      console.log(href);
      let idHeight = $(href).offset().top;
      $('html,body').animate({scrollTop: idHeight}, 500);
      return false;   // a 막아주기
  })
}
function navm(){
  $('#header>div>nav>ul>li>a').on('click', function(){
    return false;
  })
}
// 서브메뉴
function subMenu(){ 
  $('#subMenu li>a').on('click', function(){
    let href = $(this).attr('href');
    let idHeight = $(href).offset().top;
    $('html,body').animate({scrollTop: idHeight}, 500);
    console.log(href, idHeight);
    return false;
  });
  $('#top').on('click', function(){
    $('html,body').animate({scrollTop: 0}, 500);
  });
}

// 모바일, 타블릿 
function mNav(){
  let navWidth = $('#header nav').width();
  $('#header .navBtn').on('click', function(){
    $(this).hide();
    $('#header nav').animate({left:'0'},500);
  });
  $('#header nav>ul>li>a').on('click', function(){
    const navA = $(this).attr('href');
    const posY = $(navA).offset().top;
    const headerT = $('#header').innerHeight();
    $('#header nav').css('left', '-'+'navWidth'+'px')
    $('html, body').animate({scrollTop: posY - headerT});
    $('#header .navBtn').show();
    $('#header nav').css('left', '-'+navWidth+'px');
    return false;
  });
  $('#header .close').on('click', function(){
    $('#header nav').css('left', '-'+navWidth+'px');
    $('#header .navBtn').show();
  });
}


// box02
function hearMeBtn(){
  $('#box02 input').on('click', function(){
    $('#box02 .modal').css('display', 'flex');

  })
  $('.modal .close').on('click', function(){
    $('#box02 .modal').css('display', 'none');
  })
}

// box04
function gallery(){
  let marginN = $('#gallery04 figure').css('margin-left');
  let widthFig = $('#gallery04 figure').width(); 
  let liWidth = (marginN * 2) + widthFig;
  // 준비
  $('.all04').css('margin-left','-='+liWidth+'px');  
  $('.all04>figure:last').prependTo('.all04');
  // 클릭시
  $('.prev').on('click', function(){
      $('.all04').animate({marginLeft:'-='+liWidth+'px'}, function(){
          $('.all04>figure:first').appendTo('.all04');
          $('.all04').css('margin-left', '-'+liWidth+'px');
      });
  });
  $('.next').on('click', function(){
      $('.all04').animate({marginLeft:'+='+liWidth+'px'}, function(){
          $('.all04>figure:last').prependTo('.all04');
          $('.all04').css('margin-left', '-'+liWidth+'px');
      });
  });
}

function textAnimation(){
  const $text = document.querySelector(".typing .text");

  // 글자 모음 - 개행문자(\n)로 줄바꿈
  const letters = [
    "FAITHFUL",
    "PLANNED",
    "CONSIDERATE",
    "CHALLENGING",
    "LEARNING"
  ];

  // 글자 입력 속도
  const speed = 100;
  let i = 0;

  // 줄바꿈을 위한 <br> 치환
  const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
  }

  // 타이핑 효과
  const typing = async () => {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift(); 
    }
    
    // 잠시 대기
    await wait(800);
    
    // 지우는 효과
    remove();
  }

  // 글자 지우는 효과
  const remove = async () => {
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      
      letter.pop();
      $text.innerHTML = letter.join(""); 
    }
    
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
  }

  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
  }

  // 초기 실행
  setTimeout(typing, 1500);
}

function cursorAnimate(){
  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll("#box03>div>div>figure"); //메뉴 링크
  //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
  }
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("cursor-grow");
      mouseCursor.style.zIndex = "-1";
      link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("cursor-grow");
      mouseCursor.style.zIndex = "1000";
      link.classList.remove("hovered-link");
    });
  });
  let knola = document.querySelector('.knola');
  let hanssem = document.querySelector('.hanssem');
  let banksalad = document.querySelector('.banksalad');
  let theskinfood = document.querySelector('.theskinfood');
  let textC = document.querySelector('.cursor>p>span');
  knola.onmouseover = function(){
    textC.innerText = 'Knola'
  }
  hanssem.onmouseover = function(){
    textC.innerText = 'Hanssem'
  }
  banksalad.onmouseover = function(){
    textC.innerText = 'Banksalad'
  }
  theskinfood.onmouseover = function(){
    textC.innerText = 'Skinfood'
  }
}

function link(){
  $('#box03>div .knola').on('click', function(){
    window.open('http://knola.explain.s3-website.ap-northeast-2.amazonaws.com');
  })
  $('#box03>div .hanssem').on('click', function(){
    window.open('http://hanssem.explain.s3-website.ap-northeast-2.amazonaws.com');
  })
  $('#box03>div .banksalad').on('click', function(){
    window.open('http://banksalad.explain.s3-website.ap-northeast-2.amazonaws.com');
  })
  $('#box03>div .theskinfood').on('click', function(){
    window.open('http://skinfood.explain.s3-website.ap-northeast-2.amazonaws.com');
  })
}

function menuBtn(){
  let nBtn = document.querySelector('header #navBtn');
  let nCBtn = document.querySelector('header #navCloseBtn');
  let nav = document.querySelector('header>div>nav');
  let list1 = document.querySelector('header>div>nav>ul>li:nth-child(1)>a');
  let list2 = document.querySelector('header>div>nav>ul>li:nth-child(2)>a');
  let list3 = document.querySelector('header>div>nav>ul>li:nth-child(3)>a');
  let list4 = document.querySelector('header>div>nav>ul>li:nth-child(4)>a');
  nBtn.onclick = function(){
    // console.log('click');
    nav.style.display = 'flex';
    nBtn.style.display = 'none';
    nCBtn.style.display = 'flex';
  }
  nCBtn.onclick = function(){
    // console.log('click');
    nav.style.display = 'none';
    nBtn.style.display = 'flex';
    nCBtn.style.display = 'none';
  }
  list1.onclick = function(){
    // console.log('click');
    nav.style.display = 'none';
    nBtn.style.display = 'flex';
    nCBtn.style.display = 'none';
  }
  list2.onclick = function(){
    // console.log('click');
    nav.style.display = 'none';
    nBtn.style.display = 'flex';
    nCBtn.style.display = 'none';
  }
  list3.onclick = function(){
    // console.log('click');
    nav.style.display = 'none';
    nBtn.style.display = 'flex';
    nCBtn.style.display = 'none';
  }
  list4.onclick = function(){
    // console.log('click');
    nav.style.display = 'none';
    nBtn.style.display = 'flex';
    nCBtn.style.display = 'none';
  }
}

function resize(){
  window.onresize = function(){
    let innerWidth = window.innerHTML;
    console.log(innerWidth);
  }
}

function headerBg(){
  let header = document.querySelector('header');
  let headerHn = document.querySelector('header>div>h1>a');
  let headerBtn3 = document.querySelector('header #navBtn>div:nth-child(3)');
  let headerBtn2 = document.querySelector('header #navBtn>div:nth-child(2)');
  let headerBtn1 = document.querySelector('header #navBtn>div:nth-child(1)');
  let headerCloseBtn1 = document.querySelector('header #navCloseBtn>div:nth-child(1)');
  let headerCloseBtn2 = document.querySelector('header #navCloseBtn>div:nth-child(2)');
  let bg = document.querySelector('header>div>nav');
  let a4 = document.querySelector('header>div>nav>ul>li:nth-child(4)>a');
  let a3 = document.querySelector('header>div>nav>ul>li:nth-child(3)>a');
  let a2 = document.querySelector('header>div>nav>ul>li:nth-child(2)>a');
  let a1 = document.querySelector('header>div>nav>ul>li:nth-child(1)>a');
  let underline = document.querySelector('.underline:after');
  

  $(window).scroll(function(){
    var navbar = $(this).scrollTop();
    console.log(navbar);
    if(navbar < 921){
      header.style.backgroundColor = '#000';
      headerHn.style.color = '#fff';
      headerBtn3.style.backgroundColor = '#fff';
      headerBtn2.style.backgroundColor = '#fff';
      headerBtn1.style.backgroundColor = '#fff';
      bg.style.backgroundColor = '#000';
      headerCloseBtn1.style.backgroundColor = '#fff';
      headerCloseBtn2.style.backgroundColor = '#fff';
      a4.style.color = '#fff';
      a3.style.color = '#fff';
      a2.style.color = '#fff';
      a1.style.color = '#fff';
    }else{
      header.style.backgroundColor = '#fff';
      headerHn.style.color = '#000';
      headerBtn3.style.backgroundColor = '#000';
      headerBtn2.style.backgroundColor = '#000';
      headerBtn1.style.backgroundColor = '#000';
      headerCloseBtn1.style.backgroundColor = '#000';
      headerCloseBtn2.style.backgroundColor = '#000';
      bg.style.backgroundColor = '#fff';
      a1.style.color = '#000';
      a4.style.color = '#000';
      a3.style.color = '#000';
      a2.style.color = '#000';
    }
  })

}