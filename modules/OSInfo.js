var os = require('os'),
    colors = require('colors'),
    OSUpTimeFormat = require('./OSUpTimeFormat').printTime;

function getOSinfo() {
  var type = os.type(),
      release = os.release(),
      cpu = os.cpus()[0].model,
      uptime = os.uptime(),
      userInfo = os.userInfo();

  if(type === 'Darwin') {
      type = 'OSX';
  } else if(type === 'Windows_NT') {
      type = 'Windows';
  }

  console.log('System:'.grey, type);
  console.log('Release:'.red, release);
  console.log('CPU model:'.blue, cpu);
  console.log('Uptime:'.green, OSUpTimeFormat(uptime));
  console.log('User name:'.yellow, userInfo.username);
  console.log('Home dir:', userInfo.homedir);
  console.log('\n');
}

exports.print = getOSinfo;