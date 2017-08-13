// fill

for (var i = 1; i <= 7; i++) {
  var columnas = '.col-' + i;

  $(columnas).append(function(){
    for(var j=0; j<7 ; j++){

      // Random fill function

      var randomFromListGenerator = function(list) {

        for (var i = 0, l = list.length; i < l; i++) {
          var random = Math.floor((Math.random() * l));
          list[i] = list[random];
        }
        return list;
      }

      var nextRandomFromList = randomFromListGenerator([
        "<img src='image/1.png'>",
        "<img src='image/2.png'>",
        "<img src='image/3.png'>",
        "<img src='image/4.png'>",
        "<img src='image/5.png'>",
        "<img src='image/6.png'>",
        "<img src='image/7.png'>"
      ]);

      $(this).append('<div id="'+cont+'" class="candy c_'+(i-1)+' f_'+j+'">' + nextRandomFromList[i-1] + '</div>')
      cont++;
    }
  }
  );
}
