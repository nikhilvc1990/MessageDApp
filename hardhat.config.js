require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      accounts: {
        mnemonic: "slot amount waste sense nothing lawsuit muscle course water mobile candy struggle",
        count: 10,
        initialIndex: 0,
        accountsBalance: "900000000000000000000000",
      },
    },
    // sepolia : {
    //   url: "YOUR_SEPOLIA_RPC_URL",
    //   accounts: ["YOUR_PRIVATE_KEY"]
    // }
  }
};

