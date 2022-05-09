const os = require('os');

const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.log('cpus', os.cpus());
console.log('constants', os.constants);
console.log('networkInterfaces:', os.networkInterfaces());

console.log('architecture:', os.arch());
console.log('platform:', os.platform());
console.log('#cores:', os.cpus().length);
console.log('free_ram_memory:', os.freemem(), '(bytes)');
console.log('free_ram_memory:', kb(os.freemem()), '(Kilobytes)');
console.log('free_ram_memory:', mb(os.freemem()), '(megabytes)');
console.log('free_ram_memory:', gb(os.freemem()), '(gigabytes)');
console.log('total_ram_memory:', gb(os.totalmem()), '(gigabytes)');
console.log('home_dir:', os.homedir());
console.log('temporal_dir:', os.tmpdir());
console.log('hostname:', os.hostname());
