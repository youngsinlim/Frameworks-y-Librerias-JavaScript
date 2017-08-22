var columna = 7, dulces = 4;
var h_array = [];

function prueba() {
  alert("holi")
}

/* Drag and drop */
function drag_drop() {

  for (var i = 1; i <= columna; i++) {
    $('#sortable' + i).sortable({
      update: function() {
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
  for (i = 0; i<7; i++) {
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
      h_array[i][j] = $('.col-' + (j + 1) + ' ul li:nth-child(' + ((i + 1)) + ')').attr('id'); // arreglo horizontal y vertical
    }
  }


  for (var i = 0; i < 7; i++) {

    for (var j = 0; j < columna; j++) {
      // validar horizontalmente
      if ((parseInt(h_array[i][j]) == parseInt(h_array[(i)][j + 1])) && (parseInt(h_array[(i)][j + 1]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 3])) &&
        (parseInt(h_array[(i)][j + 3]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 5])) && (parseInt(h_array[(i)][j + 5]) == parseInt(h_array[(i)][j + 6]))) {
        alert('Siete horizontales!');
        console.log('fila :' + i + ' columna:' + j);
        return;

      } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i)][j + 1])) && (parseInt(h_array[(i)][j + 1]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 3])) &&
        (parseInt(h_array[(i)][j + 3]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 5]))) {
        alert('Seis horizontales!!');
        console.log('fila :' + i + ' columna:' + j);
        return;
      } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i)][j + 1])) && (parseInt(h_array[(i)][j + 1]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 3])) &&
        (parseInt(h_array[(i)][j + 3]) == parseInt(h_array[(i)][j + 4]))) {
        alert('Cinco horizontales!!!!');
        console.log('fila :' + i + ' columna:' + j);
        return;
      } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i)][j + 1])) && (parseInt(h_array[(i)][j + 1]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 3]))) {
        alert('cuatro horizontales!!!');
        console.log('fila :' + i + ' columna:' + j);
        return;
      } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i)][j + 1])) && (parseInt(h_array[(i)][j + 1]) == parseInt(h_array[(i)][j + 2]))) {
        alert('tres horizontales!');
        console.log('fila :' + i + ' columna:' + j);
        return;
      }else if ((parseInt(h_array[i][j + 6]) == parseInt(h_array[(i)][j + 5])) && (parseInt(h_array[(i)][j + 5]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 3])) && (parseInt(h_array[(i)][j + 3]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 1]))) {
        alert('seis horizontales en posicion 2!');
        console.log('fila :' + i + ' columna:' + 6);
        return;
      } else if ((parseInt(h_array[i][j + 6]) == parseInt(h_array[(i)][j + 5])) && (parseInt(h_array[(i)][j + 5]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 3])) && (parseInt(h_array[(i)][j + 3]) == parseInt(h_array[(i)][j + 2]))) {
        alert('cinco horizontales en posicion 2!');
        console.log('fila :' + i + ' columna:' + 6);
        return;
      } else if ((parseInt(h_array[i][j + 6]) == parseInt(h_array[(i)][j + 5])) && (parseInt(h_array[(i)][j + 5]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 3]))) {
        alert('cuatro horizontales en posicion 2!');
        console.log('fila :' + i + ' columna:' + 6);
        return;
      } else if ((parseInt(h_array[i][j + 6]) == parseInt(h_array[(i)][j + 5])) && (parseInt(h_array[(i)][j + 5]) == parseInt(h_array[(i)][j + 4]))) {
        alert('tres horizontales en posicion 2!');
        console.log('fila :' + i + ' columna:' + 6);
        return;
      } else if ((parseInt(h_array[i][j + 5]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 3]) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 1])))) {
        alert('cinco horizontales en posicion 3!');
        console.log('fila :' + i + ' columna:' + 5);
        return;
      } else if ((parseInt(h_array[i][j + 5]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 3])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 2]))) {
        alert('cuatro horizontales en posicion 3!');
        console.log('fila :' + i + ' columna:' + 5);
        return;
      } else if ((parseInt(h_array[i][j + 5]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 3]))) {
        alert('tres horizontales en posicion 3!');
        console.log('fila :' + i + ' columna:' + 5);
        return;
      } else if ((parseInt(h_array[i][j + 4]) == parseInt(h_array[(i)][j + 3])) && (parseInt(h_array[(i)][j + 3]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 1]))) {
        alert('cuatro horizontales en posicion 4!');
        console.log('fila :' + i + ' columna:' + 4);
        return;
      } else if ((parseInt(h_array[i][j + 4]) == parseInt(h_array[(i)][j + 3])) && (parseInt(h_array[(i)][j + 3]) == parseInt(h_array[(i)][j + 2]))) {
        alert('tres horizontales en posicion 4!');
        console.log('fila :' + i + ' columna:' + 4);
        return;

      } else if ((parseInt(h_array[i][j + 3]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 1]))) {
        alert('tres horizontales en posicion 5!');
        console.log('fila :' + i + ' columna:' + 3);
        return;
      }

      // validar verticalmente
      if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j])) &&
        (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 6)][j]))) {
        alert('Siete verticales!');
        console.log('fila :' + i + ' columna:' + j);


      } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j])) &&
        (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 5)][j]))) {
        alert('Seis vertivales!!');
        console.log('fila :' + i + ' columna:' + j);


      } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j])) &&
        (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 4)][j]))) {
        alert('Cinco verticales!!!!');
        console.log('fila :' + i + ' columna:' + j);

      } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j]))) {
        alert('cuatro verticales!!!');
        console.log('fila :' + i + ' columna:' + j);

      } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j]))) {
        alert('tres verticales!');
        console.log('fila :' + i + ' columna:' + j);

      } else if ((parseInt(h_array[i + 6][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
        alert('seis verticales en posicion 2!');
        console.log('fila :' + 6 + ' columna:' + j);

      } else if ((parseInt(h_array[i + 6][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j]))) {
        alert('cinco verticales en posicion 2!');
        console.log('fila :' + 6 + ' columna:' + j);

      } else if ((parseInt(h_array[i + 6][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]))) {
        alert('cuatro verticales en posicion 2!');
        console.log('fila :' + 6 + ' columna:' + j);

      } else if ((parseInt(h_array[i + 6][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j]))) {
        alert('tres verticales en posicion 2!');
        console.log('fila :' + 6 + ' columna:' + j);


      } else if ((parseInt(h_array[i + 5][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j])))) {
        alert('cinco verticales en posicion 3!');
        console.log('fila :' + 6 + ' columna:' + j);

      } else if ((parseInt(h_array[i + 5][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])))) {
        alert('cuatro verticales en posicion 3!');
        console.log('fila :' + 6 + ' columna:' + j);

      } else if ((parseInt(h_array[i + 5][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]))) {
        alert('tres verticales en posicion 3!');
        console.log('fila :' + 6 + ' columna:' + j);

      } else if ((parseInt(h_array[i + 4][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
        alert('cuatro verticales en posicion 4!');
        console.log('fila :' + 6 + ' columna:' + j);


      } else if ((parseInt(h_array[i + 4][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j]))) {
        alert('tres verticales en posicion 4!');
        console.log('fila :' + 6 + ' columna:' + j);


      } else if ((parseInt(h_array[i + 3][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
        alert('tres verticales en posicion 5!');
        console.log('fila :' + 6 + ' columna:' + j);

      }
    }
  }


  /**
  if (parseInt(ulli_1[0]) == parseInt(ulli_1[1]) && parseInt(ulli_1[1]) == parseInt(ulli_1[2]) && parseInt(ulli_1[0]) == parseInt(ulli_1[2])) {
    eliminar(0, 1, 2, 1);
  } else if (parseInt(ulli_1[1]) == parseInt(ulli_1[2]) && parseInt(ulli_1[2]) == parseInt(ulli_1[3]) && parseInt(ulli_1[3]) == parseInt(ulli_1[1])) {
    eliminar(1, 2, 3, 1);
  } else if (parseInt(ulli_1[2]) == parseInt(ulli_1[3]) && parseInt(ulli_1[3]) == parseInt(ulli_1[4]) && parseInt(ulli_1[4]) == parseInt(ulli_1[2])) {
    eliminar(2, 3, 4, 1);
  } else if (parseInt(ulli_1[3]) == parseInt(ulli_1[4]) && parseInt(ulli_1[4]) == parseInt(ulli_1[5]) && parseInt(ulli_1[5]) == parseInt(ulli_1[3])) {
    eliminar(3, 4, 5, 1);
  } else if (parseInt(ulli_1[4]) == parseInt(ulli_1[5]) && parseInt(ulli_1[5]) == parseInt(ulli_1[6]) && parseInt(ulli_1[6]) == parseInt(ulli_1[4])) {
    eliminar(4, 5, 6, 1);
  }

  //validacion vertical 2

  if (parseInt(ulli_2[0]) == parseInt(ulli_2[1]) && parseInt(ulli_2[1]) == parseInt(ulli_2[2]) && parseInt(ulli_2[0]) == parseInt(ulli_2[2])) {
    eliminar(0, 1, 2, 2);
  } else if (parseInt(ulli_2[1]) == parseInt(ulli_2[2]) && parseInt(ulli_2[2]) == parseInt(ulli_2[3]) && parseInt(ulli_2[3]) == parseInt(ulli_2[1])) {
    eliminar(1, 2, 3, 2);
  } else if (parseInt(ulli_2[2]) == parseInt(ulli_2[3]) && parseInt(ulli_2[3]) == parseInt(ulli_2[4]) && parseInt(ulli_2[4]) == parseInt(ulli_2[2])) {
    eliminar(2, 3, 4, 2);
  } else if (parseInt(ulli_2[3]) == parseInt(ulli_2[4]) && parseInt(ulli_2[4]) == parseInt(ulli_2[5]) && parseInt(ulli_2[5]) == parseInt(ulli_2[3])) {
    eliminar(3, 4, 5, 2);
  } else if (parseInt(ulli_2[4]) == parseInt(ulli_2[5]) && parseInt(ulli_2[5]) == parseInt(ulli_2[6]) && parseInt(ulli_2[6]) == parseInt(ulli_2[4])) {
    eliminar(4, 5, 6, 2);
  }

  //validacion vertical 3

  if (parseInt(ulli_3[0]) == parseInt(ulli_3[1]) && parseInt(ulli_3[1]) == parseInt(ulli_3[2]) && parseInt(ulli_3[0]) == parseInt(ulli_3[2])) {
    eliminar(0, 1, 2, 3);
  } else if (parseInt(ulli_3[1]) == parseInt(ulli_3[2]) && parseInt(ulli_3[2]) == parseInt(ulli_3[3]) && parseInt(ulli_3[3]) == parseInt(ulli_3[1])) {
    eliminar(1, 2, 3, 3);
  } else if (parseInt(ulli_3[2]) == parseInt(ulli_3[3]) && parseInt(ulli_3[3]) == parseInt(ulli_3[4]) && parseInt(ulli_3[4]) == parseInt(ulli_3[2])) {
    eliminar(2, 3, 4, 3);
  } else if (parseInt(ulli_3[3]) == parseInt(ulli_3[4]) && parseInt(ulli_3[4]) == parseInt(ulli_3[5]) && parseInt(ulli_3[5]) == parseInt(ulli_3[3])) {
    eliminar(3, 4, 5, 3);
  } else if (parseInt(ulli_3[4]) == parseInt(ulli_3[5]) && parseInt(ulli_3[5]) == parseInt(ulli_3[6]) && parseInt(ulli_3[6]) == parseInt(ulli_3[4])) {
    eliminar(4, 5, 6, 3);
  }
  **/
}

function eliminar(x, y, z, v) {

  if (v == 1) {
    // eliminacion + animacion

    $('#sortable1 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable1 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable1 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable1 li:nth-child(' + (x + 3) + ')').remove();
    });

    $('#sortable1 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable1 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable1 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable1 li:nth-child(' + (y + 1) + ')').remove();
    });

    $('#sortable1 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable1 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable1 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable1 li:nth-child(' + (z - 1) + ')').remove();
      rellenar(x, y, z, v);
    });
  } else if (v == 2) {
    // eliminacion + animacion

    $('#sortable2 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable2 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable2 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable2 li:nth-child(' + (x + 3) + ')').remove();
    });

    $('#sortable2 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable2 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable2 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable2 li:nth-child(' + (y + 1) + ')').remove();
    });

    $('#sortable2 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable2 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable2 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable2 li:nth-child(' + (z - 1) + ')').remove();
      rellenar(x, y, z, v);
    });
  } else if (v == 3) {
    // eliminacion + animacion

    $('#sortable3 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable3 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable3 li:nth-child(' + (x + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable3 li:nth-child(' + (x + 3) + ')').remove();
    });

    $('#sortable3 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable3 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable3 li:nth-child(' + (y + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable3 li:nth-child(' + (y + 1) + ')').remove();
    });

    $('#sortable3 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 0
    }, 600);
    $('#sortable3 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 1
    }, 600);
    $('#sortable3 li:nth-child(' + (z + 1) + ')').animate({
      opacity: 0
    }, 600, function() {
      $('#sortable3 li:nth-child(' + (z - 1) + ')').remove();
      rellenar(x, y, z, v);
    });
  }

}

function rellenar(id_x, id_y, id_z, v) {

  //Vertical fill
  for (var i = 1; i <= columna; i++) {
    if (v == i) {
      randomFill();
      $('#sortable' + i + ' li:nth-child(' + i + ')').before(
        '<li id="' + num[0] + '" class="candy">' + fill[num[0]] + '</li>' +
        '<li id="' + num[1] + '" class="candy">' + fill[num[1]] + '</li>' +
        '<li id="' + num[2] + '" class="candy">' + fill[num[2]] + '</li>'
      );
    }
  }
  drag_drop();
  validar();
}

$(function() {

  $('.panel-tablero').disableSelection();

  // validar solo un click
  $('.btn-reinicio').on('click', function() {
    inicio();
    validar();
  })

  pre_title($('.main-titulo'));
})
