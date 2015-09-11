$(document).ready(function(){
    Materialize.showStaggeredList('#potrait-list');
    var options = [
      {selector: '#project-list', offset: 50, callback: 'Materialize.showStaggeredList("#project-list")' },
    ];
    Materialize.scrollFire(options);
    $('.scrollspy').scrollSpy();
    $('.tabs-wrapper').pushpin({ top: $('.tabs-wrapper').offset().top });
});
