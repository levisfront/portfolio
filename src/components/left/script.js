// Function Animation
var animatioTit = function () {

  var functions = {

    animation_tit: function(){
      $('.tit').css('margin-left', '40px')
    },
    animation_redes: function(){
      $('.redes').css({
        "height": "auto",
        "overflow": "visibility",
        "margin-bottom": "40px"
      })
    }

  };

  return {

    plugins: function() {

      $(document).ready(function () {

        $(window).on("load", function(){

          setTimeout(functions.animation_tit(), 2000)
          setTimeout(functions.animation_redes(), 4000)

        })

      });

    },

    //init Animation
    init: function () {
      this.plugins();
    }
    
  };

}();

//init object
animatioTit.init();

