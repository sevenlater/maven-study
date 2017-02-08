// description：加密解密方法
// author:vicshang(2016-1-8 15:40:39)
// update

var DEFAULT_RC4_KEY = "\x6A\x72\x78\x7A\x73\x31\x32\x33\x34\x35\x36\x71\x77\x65\x72\x74";
var RC4_SKIP_LENGTH = 1020;
function do_encrypt(input) {
  var rc = new arc4(DEFAULT_RC4_KEY);
  return rc.encodeString(input, "utf8", "base64", RC4_SKIP_LENGTH);
}
function do_decrypt(input) {
  var rc = new arc4(DEFAULT_RC4_KEY);
  return rc.decodeString(input, "base64", "utf8", RC4_SKIP_LENGTH);
}