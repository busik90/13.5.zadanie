var OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');

commands();

process.stdin.on('readable', function() {
  var input = process.stdin.read();

  if (input !== null) {
    var instruction = input.toString().trim();

    switch (instruction) {
      case '/commands':
        commands();
        break;

      case '/nodeVer':
        console.log('Node version: ' + process.versions.node + '\n');
        break;

      case '/sysLang':
        console.log('System language: ' + process.env.lang + '\n');
        break;

      case '/OSinfo':
        OSinfo.print();
        break;

      case '/exit':
        console.log('Quitting app!');
        process.exit();

      default:
        console.log('Wrong instruction!' + '\n');
    }
  }
});

function commands() {
  process.stdout.write(
    '\n-----------------------------\n' +
    'Commands:\n' +
    '- /nodeVer [show node version]\n' +
    '- /sysLang [show system language]\n' +
    '- /OSinfo [show OS information]\n' +
    '- /commands [show commands list]\n' +
    '- /exit [exit programm]\n' +
    '-----------------------------\n\n');
};