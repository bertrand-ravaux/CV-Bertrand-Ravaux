$(function(){
  pageActuelle = '#contact'
  $( '#contactNav' ).click(function() {
    $('#contactNav').css('color','red');
    $(pageActuelle).hide( 'slow' );
    $('.navbar-collapse').collapse('hide');
    $( '#contact' ).show( 'fast' );
    pageActuelle = '#contact';
  });
  $( '#skillsNav' ).click(function() {
    $('#skillsNav').css('color','blue');
    $('.navbar-collapse').collapse('hide');
    $(pageActuelle).hide( 'fast' );
    $( '#skills' ).show( 'slow' );
    pageActuelle = '#skills';
  });
  $( '#experiencesNav' ).click(function() {
    $('#experiencesNav').css('color','yellow');
    $('.navbar-collapse').collapse('hide');
    $(pageActuelle).hide( 'fast' );
    $( '#experiences' ).show( 'slow' );
    pageActuelle = '#experiences';
  });
  $( '#trainingNav' ).click(function() {
    $('#trainingNav').css('color','green');
    $('.navbar-collapse').collapse('hide');
    $(pageActuelle).hide( 'fast' );
    $( '#training' ).show( 'slow' );
    pageActuelle = '#training';
  });
  $( '#leisureNav' ).click(function() {
    $('#leisureNav').css('color','cyan');
    $('.navbar-collapse').collapse('hide');
    $(pageActuelle).hide( 'fast' );
    $( '#leisure' ).show( 'slow' );
    pageActuelle = '#leisure';
  });
});
