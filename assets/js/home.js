$(document).ready(function () {
  // Activa el submenú al hacer hover
  $('.nav-item.dropdown').hover(
    function () {
      $(this).addClass('show');
      $(this).find('.dropdown-menu').addClass('show').stop(true, true).slideDown(200);
    },
    function () {
      $(this).removeClass('show');
      $(this).find('.dropdown-menu').removeClass('show').stop(true, true).slideUp(200);
    }
  );
});


$(document).ready(function () {
  // Ocultar los elementos al principio
  $('#video-overlay').hide();
  $('#video-content').hide();

  // Mostrar con animación apenas se carga la página
  $('#video-overlay').fadeIn(1000);
  $('#video-content').slideDown(800);
});


$(document).ready(function() {
  $('.card').hover(
    function() {
      $(this).animate({ opacity: 0.9 }, 200);
      $(this).find('.card-text').stop().slideDown(300);
    },
    function() {
      $(this).animate({ opacity: 1 }, 200);
      $(this).find('.card-text').stop().slideUp(300);
    }
  );
});


//CONTADOR
$(document).ready(function () {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function startCounters() {
    $('.contador-numero').each(function () {
      const $this = $(this);
      const target = parseInt($this.data('target'));
      let count = 0;

      if (isElementInViewport(this) && !$this.hasClass('counted')) {
        $this.addClass('counted');
        const interval = setInterval(function () {
          const increment = Math.ceil(target / 100);
          count += increment;
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          $this.text(count);
        }, 20);
      }

      if (!isElementInViewport(this)) {
        $this.removeClass('counted');
        $this.text('0');
      }
    });
  }

  $(window).on('scroll resize touchmove orientationchange', startCounters);
  startCounters();
});


//carrusel
$(document).ready(function () {
  // Inicializar el carrusel de Bootstrap
  $('#carouselTestimonios').carousel({
    interval: 3000, // Autoplay cada 3 segundos
    pause: 'hover', // Pausa al hacer hover
  });
});



//FOOTER

$(document).ready(function () {
  $('#newsletterForm').on('submit', function (e) {
    e.preventDefault();
    const $form = $(this);

    if (this.checkValidity() === false) {
      e.stopPropagation();
      $form.addClass('was-validated');
      return;
    }

    // Mostrar spinner y texto de envío
    $('#btnText').text('Enviando...');
    $('#spinner').removeClass('d-none');
    $form.addClass('was-validated');

    // Simular envío
    setTimeout(function () {
      $('#btnText').text('Suscrito');
      $('#spinner').addClass('d-none');
      $form[0].reset();
      $form.removeClass('was-validated');

      // Reiniciar botón después de 1 segundo
      setTimeout(function () {
        $('#btnText').text('Suscríbete');
      }, 2000);
    }, 2000);
  });
});