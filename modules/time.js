function time(input) {
  var sek="";
  var min="";
  var godz="";
  var answer="";
  if(input!==null){
    sek = input%60+' sek.';
    if (input>=60) {
      input=Math.floor(input/60);
      min = input%60+' min. ';
      if (input>=60) {
        input=Math.floor(input/60);
        godz = input+' godz. ';
      }
    }
    answer = godz+min+sek;
  }
  return answer;
}
exports.timeFormat = time;