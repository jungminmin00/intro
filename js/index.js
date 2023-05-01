// 내비게이션
function nav(){
  $('nav li>a').on('click', function(){
    let href = $(this).attr('href');
    let idHeight = $(href).offset().top;
    $('html,body').animate({scrollTop: idHeight}, 500);

    console.log(href, idHeight);
    // nav a 눌러 스크롤 내리기
    /* 1. a 클릭 - a 막아주기*
      2. 누른 것의 높이 알아보기*
      3. 스크롤 사용하여 화면 이동시기(animate)*
    */
    return false;
  });
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