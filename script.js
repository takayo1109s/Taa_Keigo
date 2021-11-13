$(function(){

$('#q8-btn').on('click', function () {
  $(this).siblings().slideToggle(100);
  // $('#q8-btn ~ dd').slideToggle();
})

$('#q9-btn').on('click', function () {
  $(this).siblings().slideToggle(100);
  // $('#q8-btn ~ dd').slideToggle();
})

$('#q10-btn').on('click', function () {
  $(this).siblings().slideToggle(100);
  // $('#q8-btn ~ dd').slideToggle();
})


$('.characters button').click(function(){
  $('.jqs-3 li.blue').show('slow');
});


$(function(){
  $('.accordion_one .ac_header').click(function(){
    $(this).next('.ac_inner').slideToggle();
    $(this).toggleClass("open");
  });
});



document.getElementById("uranai_btn").onclick = function() {
  var rnd = Math.floor( Math.random() * 6 );
  var uranai;
  if (rnd === 0) uranai = "STAR WARS";
  if (rnd === 1) uranai = "BABY DRIVER";
  if (rnd === 2) uranai = "ショーシャンクスの空に";
  if (rnd === 3) uranai = "How To Be Single";
  if (rnd === 4) uranai = "We Are The Millers";
  if (rnd === 5) uranai = "LoveHord";
  alert(uranai);
}




})