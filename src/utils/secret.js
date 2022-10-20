const CryptoJS = require('crypto-js');  //引用AES源码js

const key = CryptoJS.enc.Utf8.parse("WAHAHASZHFHB1234"); //十六位十六进制数作为秘钥, key UTF8编码格式化处理
console.log('密钥：', key.toString()); //密钥： 574148414841535a4846484231323334
console.log('密钥：', key.toString(CryptoJS.enc.Utf8)); //密钥：WAHAHASZHFHB1234
const iv = CryptoJS.enc.Utf8.parse('1234WAHAHASZHFHB'); //十六位十六进制数作为秘钥偏移量

//解密方法
function Decrypt(word) {
    console.log("要解密的密文：", word.toString());
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    console.log('密文十六进制encryptedHexStr：', encryptedHexStr.toString());
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    console.log('Base64 srcs：', srcs.toString(CryptoJS.enc.Utf8));
    let decrypt = CryptoJS.AES.decrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    console.log('解密:',decryptedStr.toString());
    return decryptedStr.toString();
}
//加密方法
function Encrypt(word) {
    console.log("加密前明文：", word.toString()); // "10603_e267389d035047f0a04ca3eaaca55c54"
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    console.log("加密后：", encrypted.ciphertext.toString().toUpperCase());
    return encrypted.ciphertext.toString().toUpperCase();//加密后转大写。
    // return CryptoJS.enc.Base64.stringify(encrypted.ciphertext) // 直接转base64，返回的是base64格式的密文

}

// 通过 export default 将其暴露出去，方便在需要的时候进行引入~
export default {
	Decrypt ,
	Encrypt
}
