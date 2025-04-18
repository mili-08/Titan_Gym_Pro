$(document).ready(function () {
  // Filtro de botones
  $(".btn-filter").on("click", function () {
    const filter = $(this).data("filter");

    // Agregar la clase 'active' al botón seleccionado
    $(".btn-filter").removeClass("active");
    $(this).addClass("active");

    // Filtrar los elementos con efectos dinámicos
    if (filter === "*") {
      $(".grid-item")
        .fadeOut(200) // Oculta todos los elementos con un efecto de desvanecimiento
        .promise()
        .done(function () {
          $(".grid-item").fadeIn(400); // Muestra todos los elementos con un efecto de desvanecimiento
        });
    } else {
      $(".grid-item")
        .fadeOut(200) // Oculta todos los elementos con un efecto de desvanecimiento
        .promise()
        .done(function () {
          $(filter).fadeIn(400); // Muestra solo los elementos filtrados con un efecto de desvanecimiento
        });
    }
  });

  // Efecto de hover en las imágenes
  $(".grid-item").hover(
    function () {
      $(this).find("img").css({
        transform: "scale(1.1)", // Escala la imagen al pasar el mouse
        transition: "transform 0.3s ease-in-out",
      });
    },
    function () {
      $(this).find("img").css({
        transform: "scale(1)", // Restaura el tamaño original al quitar el mouse
      });
    }
  );
});