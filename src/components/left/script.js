// Function Animation
var animationTit = function () {

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

      $(window).on('load', function () {
        functions.animation_tit()
        functions.animation_redes()
      })

    },

    //init Animation
    init: function () {
      this.plugins();
    }
    
  };

}();

//init object
animationTit.init();

