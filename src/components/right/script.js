// Function rightCont
var rightCont = function () {

  var functions = {

    open_who_i_m: function (){
    	$('[data-cont]').removeClass('ativo')
    	$('.who-i-m-component').addClass('ativo')
    },
    open_works: function (){
    	$('[data-cont]').removeClass('ativo')
    	$('.works-component').addClass('ativo')
    },
    open_skills: function (){
    	$('[data-cont]').removeClass('ativo')
    	$('.skills-component').addClass('ativo')
    },
    open_contact: function (){
    	$('[data-cont]').removeClass('ativo')
    	$('.contact-component').addClass('ativo')
    }

  };

  return {

    plugins: function() {

      $(document).ready(function () {
      	$('.who-i-m').on('click', function (){
      		functions.open_who_i_m()
      	})
      	$('.works').on('click', function (){
      		functions.open_works()
      	})
      	$('.skills').on('click', function (){
      		functions.open_skills()
      	})
      	$('.contact').on('click', function (){
      		functions.open_contact()
      	})
      });

    },

    //init rightCont
    init: function () {
      this.plugins();
    }
    
  };

}();

//init object
rightCont.init();

