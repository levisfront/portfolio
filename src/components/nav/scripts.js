// FUNCTION NAV
var nav = function () {

  var functions = {

    nav_open: function (){
      $('.nav').addClass('ativo');
      $('.open').css('opacity', '0')
    },
    nav_close: function (){
      $('.nav').removeClass('ativo');
      $('.open').css('opacity', '1')
    }

  };

  return {

    plugins: function() {

      $(document).ready(function () {

        $('.open').click(function(){
          functions.nav_open()
        })
        $('.close, .btn-nav').click(function(){
          functions.nav_close()
        })

      });

    },

    //init nav
    init: function () {
      this.plugins();
    }
    
  };

}();

//init object
nav.init();

