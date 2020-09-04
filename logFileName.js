const shortid = require('shortid');
module.exports = function getFileName(d, v) {
  let fn = "";
  if (v === "@") {
    fn = d.substr(180, 36) + '_fractal.txt';
  } else if (v === "#") {
    fn = d.substr(708, 36) + '_forms.txt';
  } else {
    fn = shortid.generate() + ".txt";
  }
  return fn;
}
