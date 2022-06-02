require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember evil inner clog bubble giant'; 
let testAccounts = [
"0x3ddb61165bc51d7330b32c90306734b56da749aadc06efc10fc11382082797cb",
"0x97f1ee17c52cde943fa9aff1c21255ee10a793561ae247a577be12b1d7842828",
"0xeb3a78bd76934425526fb4fee4076ebc7330fa7df3cc28f6b9469537c21c523e",
"0x14444272521b279f054d115aaecf3bd178d0acd83940bf076f664d87321bda29",
"0xcdf9616a3910da09a59a413b9d613649de0d302ea55d2c439460b59399e008e1",
"0x2ad7dca4f6b9516c73d907478c525966e525b27712c96f912fe925dc26d3a5fe",
"0x9f411a4ad93ab8ed55258b68d35623e1bf95808bf4e65db90424e6fb7e01b7bd",
"0xbce8122f198c8794f71904eef8e4b53abea75ca2dbf77dc2f9643c7a14f7eead",
"0x978338a64fd9fb62e6bab56dac9a441c047a9a6ebf5ed23a982de3a91615d0c0",
"0x8dd4362b104852a5bb6b3f05da420ba77677e4eb59ab7dd3bf4f46fae9b3e9f5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

