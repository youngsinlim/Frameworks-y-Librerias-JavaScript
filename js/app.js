/* Random fill function */
var fill = [
  "<img src='image/1.png'>",
  "<img src='image/2.png'>",
  "<img src='image/3.png'>",
  "<img src='image/4.png'>",
  "<img src='image/5.png'>",
  "<img src='image/6.png'>",
  "<img src='image/7.png'>"
];

function randomFill() {
  var i, j, k;
  for (i = fill.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = fill[i - 1];
    fill[i - 1] = fill[j];
    fill[j] = k;
  }
}

/* Titulo animado */

function pre_title(titulo) {
  var title = titulo;
  title.animate({
    'color': 'rgb(255,255,255);'
  }, 'slow');
  pos_title(title);
}

function pos_title(titulo) {
  var title = titulo;
  title.animate({
    'color': 'rgb(220, 255, 14);'
  }, 'slow');
  pre_title(title);
}


/* Inicializar Juego */

function inicio() {
  var timer = $('#timer').html();
  if (timer == "02:00") {

    // timer start

    countDown();

    $('.col-1').append(function() {
      randomFill();
      $(this).append(
        '<ul id="sortable">' +
        '<li id="0" class="candy c1">' + fill[0] + '</li>' +
        '<li id="1" class="candy c2">' + fill[1] + '</li>' +
        '<li id="2" class="candy c3">' + fill[2] + '</li>' +
        '<li id="3" class="candy c4">' + fill[3] + '</li>' +
        /*
        '<li id="4" class="candy">' + fill[4] + '</li>' +
        '<li id="5" class="candy">' + fill[5] + '</li>' +
        '<li id="6" class="candy">' + fill[6] + '</li>' +*/
        '<li id="1" class="candy c5">' + fill[1] + '</li>' +
        '<li id="1" class="candy c6">' + fill[1] + '</li>' +
        '<li id="2" class="candy c7">' + fill[2] + '</li>' +
        '</ul>');
    })
  }

  //Drag and Drop

  $('#sortable').sortable({
    update: function() {
      validar();
    }
  });


  // Css
  $('#sortable').css({
    'width': '100%'
  })

  $('.candy').css({
    'list-style-type': 'none',
    'text-align': 'center',
    'height': '14.28%'
  })

  $('.candy img').css({
    'height': '90px'
  })
};


function validar() {

  // alertar codigo html del Ul y Li

  var ulli = [];
  for (var i = 0; i < 7; i++) {
    ulli[i] = $('#sortable').find('li')[i].id;
  }

  //validacion vertical

  if (parseInt(ulli[0]) == parseInt(ulli[1]) && parseInt(ulli[1]) == parseInt(ulli[2]) && parseInt(ulli[0]) == parseInt(ulli[2])) {
    eliminar(0, 1, 2);
  } else if (parseInt(ulli[1]) == parseInt(ulli[2]) && parseInt(ulli[2]) == parseInt(ulli[3]) && parseInt(ulli[3]) == parseInt(ulli[1])) {
    eliminar(1, 2, 3);
  } else if (parseInt(ulli[2]) == parseInt(ulli[3]) && parseInt(ulli[3]) == parseInt(ulli[4]) && parseInt(ulli[4]) == parseInt(ulli[2])) {
    eliminar(2, 3, 4);
  } else if (parseInt(ulli[3]) == parseInt(ulli[4]) && parseInt(ulli[4]) == parseInt(ulli[5]) && parseInt(ulli[5]) == parseInt(ulli[3])) {
    eliminar(3, 4, 5);
  } else if (parseInt(ulli[4]) == parseInt(ulli[5]) && parseInt(ulli[5]) == parseInt(ulli[6]) && parseInt(ulli[6]) == parseInt(ulli[4])) {
    eliminar(4, 5, 6);
  }
}

function eliminar(x, y, z) {

  // eliminacion + animacion

  $('#sortable li:nth-child(' + (x + 1) + ')').animate({
    opacity: 0
  }, 600);
  $('#sortable li:nth-child(' + (x + 1) + ')').animate({
    opacity: 1
  }, 600);
  $('#sortable li:nth-child(' + (x + 1) + ')').animate({
    opacity: 0
  }, 600, function() {
    $('#sortable li:nth-child(' + (x + 3) + ')').remove();
  });

  $('#sortable li:nth-child(' + (y + 1) + ')').animate({
    opacity: 0
  }, 600);
  $('#sortable li:nth-child(' + (y + 1) + ')').animate({
    opacity: 1
  }, 600);
  $('#sortable li:nth-child(' + (y + 1) + ')').animate({
    opacity: 0
  }, 600, function() {
    $('#sortable li:nth-child(' + (y + 1) + ')').remove();
  });

  $('#sortable li:nth-child(' + (z + 1) + ')').animate({
    opacity: 0
  }, 600);
  $('#sortable li:nth-child(' + (z + 1) + ')').animate({
    opacity: 1
  }, 600);
  $('#sortable li:nth-child(' + (z + 1) + ')').animate({
    opacity: 0
  }, 600, function() {
    $('#sortable li:nth-child(' + (z - 1) + ')').remove();
    rellenar(x,y,z);
  });
}

function rellenar(id_x,id_y,id_z) {

  $('#sortable li:nth-child(1)').before(
    '<li id="' + id_x + '" class="candy">' + fill[id_x] + '</li>' +
    '<li id="' + id_y + '" class="candy">' + fill[id_y] + '</li>' +
    '<li id="' + id_z + '" class="candy">' + fill[id_z] + '</li>'
  );
  // Css
  $('#sortable').css({
    'width': '100%'
  })

  $('.candy').css({
    'list-style-type': 'none',
    'text-align': 'center',
    'height': '14.28%'
  })

  $('.candy img').css({
    'height': '90px'
  })

}

$(function() {

  $('.panel-tablero').disableSelection();

  // validar solo un click
  $('.btn-reinicio').on('click', function() {
    inicio();
    validar();
  })

  //pre_title($('.main-titulo'));
})
