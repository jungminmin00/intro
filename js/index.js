import $ from "jquery";
$(function(){
  let windowW = $(window).width();
  console.log(windowW);

  if(windowW >= 1339){
    nav();
    subMenu();
  }else if(windowW < 1338 && windowW >= 980){
    // nav();
    mNav();
    gallery();
  }else if(windowW < 979 && windowW >= 580){
    // 타블릿
    mNav();
    gallery();
  }else if(windowW < 579 ){
    // 모바일
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
function gallery(){
  const figureW = $('#gallery04 figure').width();
  $('.all04>figure:last').prependTo('.all04');
  $('.all04').css('marginLeft', '-'+figureW+'px');
  // 버튼클릭
  $('#gallery04 .prev').on('click', function(){
    $('#gallery04>.show04>.all04').animate({marginLeft: '-='+figureW+'px'}, 400, function(){
      $('#gallery04 figure:first').appendTo('#gallery04>.show04>.all04');
      $('#gallery04>.show04>.all04').css('margin-left', '-'+figureW+'px')
    });
  });
  $('#gallery04 .next').on('click', function(){
    $('#gallery04>.show04>.all04').animate({marginLeft: '-='+figureW+'px'}, 400, function(){
      $('#gallery04 figure:last').prependTo('#gallery04>.show04>.all04');
      $('#gallery04>.show04>.all04').css('margin-left', '-'+figureW+'px')
    });
  });

}