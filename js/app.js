var columna = 7, dulces = 4;
var h_array = [];
var point = 0;
var move = 0;

/* Drag and drop */
function drag_drop() {

  for (var i = 1; i <= columna; i++) {
    $('#sortable' + i).sortable({
      update: function() {
        move++
        $('#movimientos-text').html(move);
        validar();
      }
    });
    $('#sortable' + i).css({
      'width': '100%',
      'position': 'relative',
      'left': '-20px'
    })
  }

  $('.candy').css({
    'list-style-type': 'none',
    'text-align': 'center',
    'height': '14.28%'
  })

  $('.candy img').css({
    'height': '90px'
  })

}


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


var num = [
  0, 1, 2, 3, 4, 5, 6
];

function randomFill() {
  var i, j;
  for (i = 0; i < 7; i++) {
    num[i] = Math.floor(Math.random() * dulces);
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

    for (var i = 0; i < columna; i++) {
      randomFill();

      $('.col-' + ((i + 1))).append(function() {

        $(this).append(
          '<ul id="sortable' + ((i + 1)) + '" class="connected">' +
          '<li id="' + num[0] + '" class="candy c' + ((i + 1)) + '">' + fill[num[0]] + '</li>' +
          '<li id="' + num[1] + '" class="candy c' + ((i + 2)) + '">' + fill[num[1]] + '</li>' +
          '<li id="' + num[2] + '" class="candy c' + ((i + 3)) + '">' + fill[num[2]] + '</li>' +
          '<li id="' + num[3] + '" class="candy c' + ((i + 4)) + '">' + fill[num[3]] + '</li>' +
          '<li id="' + num[4] + '" class="candy c' + ((i + 5)) + '">' + fill[num[4]] + '</li>' +
          '<li id="' + num[5] + '" class="candy c' + ((i + 6)) + '">' + fill[num[5]] + '</li>' +
          '<li id="' + num[6] + '" class="candy c' + ((i + 7)) + '">' + fill[num[6]] + '</li>' +
          '</ul>');
      })
    }

  }
  drag_drop();
};


function validar() {

  for (var i = 0; i < 7; i++) {
    // filas i
    h_array[i] = [];
    for (var j = 0; j < columna; j++) {
      // columnas j
      h_array[i][j] = $('.col-' + ((j + 1)) + ' ul li:nth-child(' + ((i + 1)) + ')').attr('id'); // arreglo horizontal y vertical
    }
  }

  for (var i = 0; i < 7; i++) {

    for (var j = 0; j < columna; j++) {

      if (i == 0) {

        // validar horizontalmente
        if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)])) && (parseInt(h_array[i][(j + 2)]) == parseInt(h_array[i][(j + 3)])) &&
          (parseInt(h_array[i][(j + 3)]) == parseInt(h_array[i][(j + 4)])) && (parseInt(h_array[i][(j + 4)]) == parseInt(h_array[i][(j + 5)])) && (parseInt(h_array[i][(j + 5)]) == parseInt(h_array[i][(j + 6)]) && (parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 6)])))) {
          eliminar(j, (j + 1), (j + 2), (j + 3), (j + 4), (j + 5), (j + 6), i, "h");
          if (i <= 6) {
            i = i + 1;
          }
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)])) && (parseInt(h_array[i][(j + 2)]) == parseInt(h_array[i][(j + 3)])) &&
          (parseInt(h_array[i][(j + 3)]) == parseInt(h_array[i][(j + 4)])) && (parseInt(h_array[i][(j + 4)]) == parseInt(h_array[i][(j + 5)]) && (parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 5)])))) {
          eliminar(j, (j + 1), (j + 2), (j + 3), (j + 4), (j + 5), i, '', "h");
          if (i <= 6) {
            i = i + 1;
          }
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)])) && (parseInt(h_array[i][(j + 2)]) == parseInt(h_array[i][(j + 3)])) &&
          (parseInt(h_array[i][(j + 3)]) == parseInt(h_array[i][(j + 4)]) && (parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 4)])))) {
          eliminar(j, (j + 1), (j + 2), (j + 3), (j + 4), i, '', '', "h");
          if (i <= 6) {
            i = i + 1;
          }
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)])) && (parseInt(h_array[i][(j + 2)]) == parseInt(h_array[i][(j + 3)]) && (parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 3)])))) {
          eliminar(j, (j + 1), (j + 2), (j + 3), i, '', '', '', "h");
          if (i <= 6) {
            i = i + 1;
          }
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)]))) {
          eliminar(j, (j + 1), (j + 2), i, '', '', '', '', "h");
        }

        // validar verticalmente
        if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j])) &&
          (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 6)][j]))) {
          eliminar(i, (i + 1), (i + 2), (i + 3), (i + 4), (i + 5), (i + 6), j, "v");
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j])) &&
          (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 5)][j]))) {
          eliminar(i, (i + 1), (i + 2), (i + 3), (i + 4), (i + 5), j, '', "v");
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j])) &&
          (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 4)][j]))) {
          eliminar(i, (i + 1), (i + 2), (i + 3), (i + 4), j, '', '', "v");
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j]))) {
          eliminar(i, (i + 1), (i + 2), (i + 3), j, '', '', '', "v");
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j]))) {
          eliminar(i, (i + 1), (i + 2), j, '', '', '', '', "v");
        } else if ((parseInt(h_array[(i + 6)][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
          eliminar((i + 6), (i + 5), (i + 4), (i + 3), (i + 2), (i + 1), j, '', "v");
        } else if ((parseInt(h_array[(i + 6)][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j]))) {
          eliminar((i + 6), (i + 5), (i + 4), (i + 3), (i + 2), j, '', '', "v");
        } else if ((parseInt(h_array[(i + 6)][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]))) {
          eliminar((i + 6), (i + 5), (i + 4), (i + 3), j, '', '', '', "v");
        } else if ((parseInt(h_array[(i + 6)][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j]))) {
          eliminar((i + 6), (i + 5), (i + 4), j, '', '', '', '', "v");
        } else if ((parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j])))) {
          eliminar((i + 5), (i + 4), (i + 3), (i + 2), (i + 1), j, '', '', "v");
        } else if ((parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])))) {
          eliminar((i + 5), (i + 4), (i + 3), (i + 2), j, '', '', '', "v");
        } else if ((parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]))) {
          eliminar((i + 5), (i + 4), (i + 3), j, '', '', '', '', "v");
        } else if ((parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
          eliminar((i + 4), (i + 3), (i + 2), (i + 1), j, '', '', '', "v");
        } else if ((parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j]))) {
          eliminar((i + 4), (i + 3), (i + 2), j, '', '', '', '', "v");
        } else if ((parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
          eliminar((i + 3), (i + 2), (i + 1), j, '', '', '', '', "v");
        }
      } else if (i <= 6) {
        // validar horizontalmente
        if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)])) && (parseInt(h_array[i][(j + 2)]) == parseInt(h_array[i][(j + 3)])) &&
          (parseInt(h_array[i][(j + 3)]) == parseInt(h_array[i][(j + 4)])) && (parseInt(h_array[i][(j + 4)]) == parseInt(h_array[i][(j + 5)])) && (parseInt(h_array[i][(j + 5)]) == parseInt(h_array[i][(j + 6)]) && (parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 6)])))) {
          eliminar(j, (j + 1), (j + 2), (j + 3), (j + 4), (j + 5), (j + 6), i, "h");
          if (i <= 6) {
            i = i + 1;
          }
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)])) && (parseInt(h_array[i][(j + 2)]) == parseInt(h_array[i][(j + 3)])) &&
          (parseInt(h_array[i][(j + 3)]) == parseInt(h_array[i][(j + 4)])) && (parseInt(h_array[i][(j + 4)]) == parseInt(h_array[i][(j + 5)]) && (parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 5)])))) {
          eliminar(j, (j + 1), (j + 2), (j + 3), (j + 4), (j + 5), i, '', "h");
          if (i <= 6) {
            i = i + 1;
          }
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)])) && (parseInt(h_array[i][(j + 2)]) == parseInt(h_array[i][(j + 3)])) &&
          (parseInt(h_array[i][(j + 3)]) == parseInt(h_array[i][(j + 4)]) && (parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 4)])))) {
          eliminar(j, (j + 1), (j + 2), (j + 3), (j + 4), i, '', '', "h");
          if (i <= 6) {
            i = i + 1;
          }
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)])) && (parseInt(h_array[i][(j + 2)]) == parseInt(h_array[i][(j + 3)]) && (parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 3)])))) {
          eliminar(j, (j + 1), (j + 2), (j + 3), i, '', '', '', "h");
          if (i <= 6) {
            i = i + 1;
          }
        } else if ((parseInt(h_array[i][j]) == parseInt(h_array[i][(j + 1)])) && (parseInt(h_array[i][(j + 1)]) == parseInt(h_array[i][(j + 2)]))) {
          eliminar(j, (j + 1), (j + 2), i, '', '', '', '', "h");
        }
      }

    }

  }

}

function eliminar(z, x, c, v, b, n, m, q, w) {

  var position; //posiciones del dulce
  var vh = w; // horizontal o vertical?
  var pos, eliminar; // pos es en que columna o fila esta , cantidad a eliminar.

  var cadena = z + '' + x + '' + c + '' + v + '' + b + '' + n + '' + m + '' + q;
  var cadena2 = z + ',' + x + ',' + c + ',' + v + ',' + b + ',' + n + ',' + m + ',' + q;

  eliminar = cadena.length - 1;

  if (eliminar == 3) {
    position = cadena2.substr(0, eliminar + 2);
  } else if (eliminar == 4) {
    position = cadena2.substr(0, eliminar + 3);
  } else if (eliminar == 5) {
    position = cadena2.substr(0, eliminar + 4);
  } else if (eliminar == 6) {
    position = cadena2.substr(0, eliminar + 5);
  } else if (eliminar == 7) {
    position = cadena2.substr(0, eliminar + 6);
  }

  pos = parseInt(cadena.substr(eliminar)) + 1;

  var erase_candy = position.split(',');

  if (w == "h") {
    vh = "horizontal";
  } else if (w == "v") {
    vh = "vertical";
  }

  // este debe ser el valor minimo del arreglo
  var l = erase_candy.sort();
  var min = parseInt(l[0]);
  var l2 = erase_candy.sort(function(a, b) {
    return b - a
  });
  var max = parseInt(l2[0]);

  if (vh == "vertical") {

    for (var i = min; i <= max; i++) {

      $('#sortable' + (pos) + ' li:nth-child(' + (i + 1) + ')').animate({
        opacity: 0
      }, 600);
      $('#sortable' + (pos) + ' li:nth-child(' + (i + 1) + ')').animate({
        opacity: 1
      }, 600);
      $('#sortable' + (pos) + ' li:nth-child(' + (i + 1) + ')').animate({
        opacity: 0
      }, 600);

      // vertical opacity 0
      setTimeout(function() {
        for (var j = 0; j <= 7; j++) {
          var opacidad = Math.round($('#sortable' + (pos) + ' li:nth-child(' + j + ')').css('opacity'));
          if (opacidad == 0) {
            $('#sortable' + (pos) + ' li:nth-child(' + j + ')').remove();
            //pos, cantidad eliminada, vertica o horizontal
            rellenar(pos, vh);
            puntuacion();
          }
        }
      }, 1801);

    }
  } else if (vh == "horizontal") {
    for (var i = min; i <= max; i++) {

      $('#sortable' + (i + 1) + ' li:nth-child(' + (pos) + ')').animate({
        opacity: 0
      }, 600);
      $('#sortable' + (i + 1) + ' li:nth-child(' + (pos) + ')').animate({
        opacity: 1
      }, 600);
      $('#sortable' + (i + 1) + ' li:nth-child(' + (pos) + ')').animate({
        opacity: 0
      }, 600);

      //horizontal opacity 0
      setTimeout(function() {
        for (var j = 0; j <= 7; j++) {
          var opacidad = Math.round($('#sortable' + (j) + ' li:nth-child(' + pos + ')').css('opacity'));
          if (opacidad == 0) {
            $('#sortable' + (j) + ' li:nth-child(' + pos + ')').remove();
            //pos, cantidad eliminada, vertica o horizontal
            rellenar(j, vh);
            puntuacion();
          }
        }
      }, 1801);

    }
  }
}


function rellenar(a, c) {
  // a = numero de columna
  // b = numero eliminado
  // c = vertical o horizontal?
  randomFill();

  //horizontal & vertical fill
  $('#sortable' + a + ' li:nth-child(1)').before(
    '<li id="' + num[0] + '" class="candy">' + fill[num[0]] + '</li>'
  )

  drag_drop();

  setTimeout(function() {
    validar();
  }, 100);

}

function puntuacion() {
  point = point + 20;
  $('#score-text').html(point);
}

$(function() {

  $('.panel-tablero').disableSelection();

  // validar solo un click
  $('.btn-reinicio').on('click', function() {
    $('.btn-reinicio').html("Reiniciar");
    inicio();
    validar();
  })

  pre_title($('.main-titulo'));
})
