/**
 * classの追加 addClass()
 * classの削除 removeClass()
 * タグの追加 $('<div>')
 * 要素の取得
 *  - $('div')
 *  - $('.className')
 *  - $('#idName')
 */

 
  // Q1
  

  // Q11
  // $(window).on('scroll', function() {
  //   // idがq-11の要素の画面最上部からの距離を取得
  //   let s2 = $('#s2').offset().top;

  //   // 画面の高さ
  //   let wh = $(window).height();

  //   // $(window).scrollTop()は現在のスクロール位置
  //   if (s2 <= $(window).scrollTop() + wh) {
  //     $('.s2').removeClass('hide2');
  //   } else {
  //     $('.s2').addClass('hide2');
  //   }
    
  // })

  


$(function() {

  $(window).on('scroll', function() {
    // idがq-11の要素の画面最上部からの距離を取得
    let s1 = $('#s1').offset().top;

    // 画面の高さ
    let wh = $(window).height();

    // $(window).scrollTop()は現在のスクロール位置
    if (s1 <= $(window).scrollTop() + wh) {
      $('.s1').removeClass('hide2');
    } else {
      $('.s1').addClass('hide2');
    }
    
  })
  

  
  $(window).on('scroll', function() {
    // idがq-11の要素の画面最上部からの距離を取得
    let s2 = $('#s2').offset().top;

    // 画面の高さ
    let wh = $(window).height();

    // $(window).scrollTop()は現在のスクロール位置
    if (s2 <= $(window).scrollTop() + wh) {
      $('.s2').removeClass('hide2');
    } else {
      $('.s2').addClass('hide2');
    }
    
  })

  $(window).on('scroll', function() {
    // idがq-11の要素の画面最上部からの距離を取得
    let s4 = $('#s4').offset().top;

    // 画面の高さ
    let wh = $(window).height();

    // $(window).scrollTop()は現在のスクロール位置
    if (s4 <= $(window).scrollTop() + wh) {
      $('.s4').removeClass('hide2');
    } else {
      $('.s4').addClass('hide2');
    }
    
  })

  $(window).on('scroll', function() {
    // idがq-11の要素の画面最上部からの距離を取得
    let s5 = $('#s5').offset().top;

    // 画面の高さ
    let wh = $(window).height();

    // $(window).scrollTop()は現在のスクロール位置
    if (s5<= $(window).scrollTop() + wh) {
      $('.s5').removeClass('hide2');
    } else {
      $('.s5').addClass('hide2');
    }
    
  })





  $(window).on('scroll', function() {
    // idがq-11の要素の画面最上部からの距離を取得
    let s6 = $('#s6').offset().top;

    // 画面の高さ
    let wh = $(window).height();

    // $(window).scrollTop()は現在のスクロール位置
    if (s6 <= $(window).scrollTop() + wh) {
      $('.s6').removeClass('hide2');
    } else {
      $('.s6').addClass('hide2');
    }
    
  })

  
});