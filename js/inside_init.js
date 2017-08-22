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
    } else if ((parseInt(h_array[i][j + 6]) == parseInt(h_array[(i)][j + 5])) && (parseInt(h_array[(i)][j + 5]) == parseInt(h_array[(i)][j + 4])) && (parseInt(h_array[(i)][j + 4]) == parseInt(h_array[(i)][j + 3])) && (parseInt(h_array[(i)][j + 3]) == parseInt(h_array[(i)][j + 2])) && (parseInt(h_array[(i)][j + 2]) == parseInt(h_array[(i)][j + 1]))) {
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
      return;

    } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j])) &&
      (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 5)][j]))) {
      alert('Seis vertivales!!');
      console.log('fila :' + i + ' columna:' + j);
      return;

    } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j])) &&
      (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 4)][j]))) {
      alert('Cinco verticales!!!!');
      console.log('fila :' + i + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 3)][j]))) {
      alert('cuatro verticales!!!');
      console.log('fila :' + i + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i][j]) == parseInt(h_array[(i + 1)][j])) && (parseInt(h_array[(i + 1)][j]) == parseInt(h_array[(i + 2)][j]))) {
      alert('tres verticales!');
      console.log('fila :' + i + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i + 6][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
      alert('seis verticales en posicion 2!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i + 6][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j]))) {
      alert('cinco verticales en posicion 2!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i + 6][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]))) {
      alert('cuatro verticales en posicion 2!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i + 6][j]) == parseInt(h_array[(i + 5)][j])) && (parseInt(h_array[(i + 5)][j]) == parseInt(h_array[(i + 4)][j]))) {
      alert('tres verticales en posicion 2!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;

    } else if ((parseInt(h_array[i + 5][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j])))) {
      alert('cinco verticales en posicion 3!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i + 5][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])))) {
      alert('cuatro verticales en posicion 3!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i + 5][j]) == parseInt(h_array[(i + 4)][j])) && (parseInt(h_array[(i + 4)][j]) == parseInt(h_array[(i + 3)][j]))) {
      alert('tres verticales en posicion 3!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;
    } else if ((parseInt(h_array[i + 4][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
      alert('cuatro verticales en posicion 4!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;

    } else if ((parseInt(h_array[i + 4][j]) == parseInt(h_array[(i + 3)][j])) && (parseInt(h_array[(i + 3)][j]) == parseInt(h_array[(i + 2)][j]))) {
      alert('tres verticales en posicion 4!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;

    } else if ((parseInt(h_array[i + 3][j]) == parseInt(h_array[(i + 2)][j])) && (parseInt(h_array[(i + 2)][j]) == parseInt(h_array[(i + 1)][j]))) {
      alert('tres verticales en posicion 5!');
      console.log('fila :' + 6 + ' columna:' + j);
      return;
    }
  }
}
