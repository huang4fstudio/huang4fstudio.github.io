$(document).ready(function(){
    Materialize.showStaggeredList('#potrait-list');
    var options = [
      {selector: '#course-list', offset: 50, callback: 'Materialize.showStaggeredList("#course-list")' },
    ];
    Materialize.scrollFire(options);
    $('.scrollspy').scrollSpy();
    $('.tabs-wrapper').pushpin({ top: $('.tabs-wrapper').offset().top });
});
