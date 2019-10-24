const wallets = {};

export function getCurrentWallets () {
  addWallet('BTC', 'Bitcoin', 0.241234523);
  addWallet('ETH', 'Etherium', 2.6545634);
  addWallet('XRP', 'Ripple', 135.767835);
  return wallets;
}

function addWallet (name, allName, money) {
  wallets[name] = {
    name,
    allName,
    money
  };
}