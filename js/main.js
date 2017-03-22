$(function(){
  // 顶部banner关闭
  $('header #header-banner .w #close-banner').click(function(){
    $('header #header-banner').hide();
  });
  // 登录按钮
  $('header #header-nav .fr ul li #nav_login').click(function(){
    $('#mask').show();
    $('#box_login').show();
  });

  $('#box_login #close_login').click(function(){
    $('#mask').hide();
    $('#box_login').hide();
  });
  // 轮播图
  myFocus.set({
    id: 'boxID',
    pattern: 'mF_fancy'
  });

});
