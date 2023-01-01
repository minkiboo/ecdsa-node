const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const privateKey = toHex(secp.utils.randomPrivateKey());
const publicKey = secp.getPublicKey(privateKey);

function getAddress(publicKey) {
    // the first byte indicates whether this is in compressed form or not
    return "0x" + toHex(keccak256(publicKey.slice(1)).slice(-20));
}


console.log('private key:', privateKey);
console.log('address:', getAddress(publicKey));