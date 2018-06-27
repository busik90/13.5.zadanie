// process.stdin.on('readable', function() {
//   var sec = process.stdin.read();

//   if (sec != null) {
//     console.log(upTimeFormat(sec));
//   }
// });

function upTimeFormat(sec) {
  var days = Math.floor(sec / (24 * 3600)),
      hours = Math.floor(sec % (24 * 3600) / 3600),
      min = Math.floor(sec % 3600 / 60),
      sec = Math.floor(sec % 3600 % 60);

  (days < 1) ? days = '' : days += 'd ';

  (days < 1 && hours < 1) ? hours = '' : hours += 'h ';
  
  (days < 1 && hours < 1 && min < 1) ? min = '' : min += 'm ';

  var formatedTime = days + hours + min + sec + 's';

  return formatedTime;
}

exports.printTime = upTimeFormat;