module.exports = function reverse (n) {
    let nAbsolute = Math.abs(n);
    nAbsolute = String(nAbsolute);
    return +nAbsolute.split('').reverse().join('');
}
