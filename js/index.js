// import $ from "jquery";
// import data from "../pData";
$(function(){
  let windowW = $(window).width();
  console.log(windowW);
  // allData();

  if(windowW >= 1339){
    // nav();
    // subMenu();
    // hearMeBtn();
    // gallery();
    animation();
  }else if(windowW < 1338 && windowW >= 980){
    // mNav();
    // gallery();
    // hearMeBtn();
  }else if(windowW < 979 && windowW >= 580){
    // 타블릿
    // mNav();
    // gallery();
    // hearMeBtn();
  }else if(windowW < 579 ){
    // 모바일
    // hearMeBtn();
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
  document.querySelector('#modal figure>img').setAttribute('src',this.pic);
  document.querySelector('#modal figure>figcaption').innerHTML =  this.title;
  document.querySelector('#modal dl>dd:nth-child(2)').innerHTML = this.year;
  document.querySelector('#modal dl>dd:nth-child(4)').innerHTML = this.program;
  document.querySelector('#modal dl>dd>a').setAttribute('href',this.url)
  document.querySelector('#modal dl>dd>a').innerHTML = this.url;
  document.querySelector('#modal dl>dd:nth-child(8)').innerHTML = this.text;
  }
  let mymodal = [
    new Modal('banksalad','./images/banksalad.jpg','2001','react program','http://www.a1.com','text01'),
    new Modal('hanssem','./images/hanssem.jpg','2002','js program','http://jungmin.react.hanssem.s3-website.ap-northeast-2.amazonaws.com','text02'),
    new Modal('knola','./images/knola.jpg','2003','react program','http://jungmin.react.knola.s3-website.ap-northeast-2.amazonaws.com','text03')
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

// 내비게이션
function nav(){     // top포함
  $('#header nav>ul>li>a').on('click', function(){
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

function animation(){
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