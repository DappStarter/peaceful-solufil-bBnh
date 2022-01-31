require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind hospital hockey private olympic suit'; 
let testAccounts = [
"0xeb5e1d6c4748b66fb11409b571f51ab37a0f2bdb5ee1ec0f1c3158a2b5da900e",
"0x3e0bde8338e5b975fbd4c881ad4b2c600cc8d92f4fb72699e9ffb310bc2b7053",
"0x5df7b155b100409d98233bd09ad9514d5b9548128d8f8a9e7c27a9e10f5cb3b1",
"0xd700812895c1967efe1731220fb70d4eaac7dab52ac92f4d64c853f862071413",
"0x36a6f97bb7eb6a575799921995de4607c91b1309b7be8380b30d846cf479adea",
"0x874ebdbcde7fa5303ffb4637b17e48d8dd5ee41a0e015acf2e839ecb3a0f7832",
"0xb799932e322b2dc6d83fa98a48af695edd5e9b0c59638f71b81bc8a3951b2e72",
"0xe35954e04c5e6c730e453d5e07d614be8d0a4981d4cbb9d430afe2c12ad2a902",
"0xcbfa7ec6540d843f128160c6b8621e257f988553815d79708ae79928e312bb37",
"0x87716e809feda38d0a9abced6f3375744938b37ea6d9e82293c802c277c4eebe"
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

