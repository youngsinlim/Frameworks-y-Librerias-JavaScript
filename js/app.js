/* Titulo animado */
function pre_title(titulo){
  var title = titulo;
  title.animate(
  {
    'color':'rgb(255,255,255);'
  },'slow');
  pos_title(title);
}

function pos_title(titulo){
  var title = titulo;
  title.animate(
  {
    'color':'rgb(220, 255, 14);'
  },'slow');
  pre_title(title);
}

$(function(){
  pre_title($('.main-titulo'));
})
