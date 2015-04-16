var Flags = (function(){

  function init() {
    // $('#africa').on('click', function(){
    //     $('#continents').fadeOut(300);
    //     $('#africa-big').fadeIn(3000);
    //   });
    // $('#asia').on('click', function(){
    //     $('#continents').fadeOut(300);
    //     // $('#africa-big').fadeOut(3000);
    //     $('#asia-big').fadeIn(3000);
    //   });
    $('.land').on('click', function(event){      
      var button = $(event.target);
      var country = button.data('country');
      $('.country-info').find('.country-title').text(country);
      $('.country-info').find('.country-flag img').attr('src', '../static/images/flags/' + country.replace(' ','_') + ".jpg");
      $('.country-info').show();
      console.log(country);
    });
    // $('#country-data').on('show.bs.modal', function (event) {
    //   var button = $(event.relatedTarget); // Button that triggered the modal
    //   var country = button.data('country'); // Extract info from data-* attributes
    //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //   var modal = $(this);
    //   modal.find('.modal-title').text(country);
    //   modal.find('.modal-body img').attr('src', '../static/images/flags/' + country.replace(' ','_') + ".jpg");
    // });

  }
  return {
    init: init
      
    }
}());