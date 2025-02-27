import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(arg) {
    if (!arg || arg === true) this.arg = 'direct'
    if (arg === false) this.arg = 'reverse'
  }

  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!")
    message = message.toUpperCase()
    key = key.toUpperCase()
    let j = 0
    let res = []
    for (let i = 0; i < message.length; i++) {
      if (this.letters.indexOf(message[i]) >= 0 && this.letters.indexOf(message[i]) < 26) {
        // console.log("START")
        // console.log(key[j]);
        // console.log(this.letters.indexOf(message[i]));
        // console.log(this.letters.indexOf(key[j]));
        // console.log("END")
        res.push(this.letters[(this.letters.indexOf(message[i]) + this.letters.indexOf(key[j])) % 26])
        j = (j + 1 === key.length) ? 0 : ++j
        // console.log(res);
      } else {
        // console.log(res);
        res.push(message[i])
      }
    }
    // console.log(message);
    // console.log(key);
    if (this.arg === 'direct') return res.join("")
    if (this.arg === 'reverse') return res.reverse().join("")
    //console.log("encrypt " + this.arg)
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!")
    encryptedMessage = encryptedMessage.toUpperCase()
    key = key.toUpperCase()
    let j = 0
    let res = []
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.letters.indexOf(encryptedMessage[i]) >= 0 && this.letters.indexOf(encryptedMessage[i]) < 26) {
        // console.log("START")
        // console.log(key[j]);
        // console.log(this.letters.indexOf(encryptedMessage[i]));
        // console.log(this.letters.indexOf(key[j]));
        // console.log("END")
        res.push(this.letters[(this.letters.indexOf(encryptedMessage[i]) - this.letters.indexOf(key[j]) + 26) % 26])
        j = (j + 1 === key.length) ? 0 : ++j
      } else {
        res.push(encryptedMessage[i])
      }
    }
    if (this.arg === 'direct') return res.join("")
    if (this.arg === 'reverse') return res.reverse().join("")
    //console.log("encrypt " + this.arg)
  }
}
