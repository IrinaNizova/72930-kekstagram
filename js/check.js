function getMessage(a, b){
  if (typeof(a) == "boolean"){
    if (a === true){
      return "Переданное GIF-изображение анимировано и содержит " + b + " кадров"
    }
    else{
      return "Переданное GIF-изображение не анимировано";
    }
  }
  else if (typeof(a) == "number"){
    return "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " аттрибутов";
  }
  else if (typeof(a) == "object"){
    if (typeof(b) == "object"){
      return "Общая площадь артефактов сжатия: " + sum2massive(a, b) + " пикселей";
    }
    else{
      return "Количество красных точек во всех строчках изображения: " + sum1massive(a);
    }
  }
}

function sum1massive(args){
  var result = 0;

  for (var i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}


function sum2massive(args1, args2){
    var result = 0;

    for (var i = 0; i < args1.length; i++) {
        result += (args1[i] * args2[i]);
    }

    return result;
}
