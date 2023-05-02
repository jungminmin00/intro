import $ from "jquery";
$(function(){
  let windowW = $(window).width();
  console.log(windowW);

  if(windowW >= 1339){
    nav();
    subMenu();
    hearMeBtn();
  }else if(windowW < 1338 && windowW >= 980){
    mNav();
    gallery();
    hearMeBtn();
  }else if(windowW < 979 && windowW >= 580){
    // 타블릿
    mNav();
    gallery();
    hearMeBtn();
  }else if(windowW < 579 ){
    // 모바일
    hearMeBtn();
  }
  
})

// 함수 

// 내비게이션
function nav(){     // top포함
  $('#header a').on('click', function(){
      let href = $(this).attr('href');
      console.log(href);
      let idHeight = $(href).offset().top;
      $('html,body').animate({scrollTop: idHeight}, 500);
      return false;   // a 막아주기
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