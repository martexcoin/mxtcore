var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('2d3fa2f5'),
  addressVersion: 50,
  privKeyVersion: 243,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('81f998298dc023c13c9b7948f75cd1ab90b30d7f9d753e7dbdbfb3b00b193e3b'),
    merkle_root: hex('b225fe020839baae89b482f6b353e5d4147703da3adcd04485bc4141164cd5ec'),
    height: 0,
    nonce: 2085922,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399939200,
    bits: 1e0fffff
  },
  dnsSeeds: [
    'seed.martexcoin.org',
    'seed1.martexcoin.org',
    'seed2.martexcoin.org',
    'seed3.martexcoin.org'
  ],
  defaultClientPort: 51324,
  lastPoWBlock: 33331
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
