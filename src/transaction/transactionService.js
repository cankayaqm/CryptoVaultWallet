let balance = 500;

export const sendCrypto = (amount, address) => {
  if (!address || address.length < 5) {
    return { success: false, message: "Invalid wallet address" };
  }

  if (amount <= 0) {
    return { success: false, message: "Amount must be greater than 0" };
  }

  if (amount > balance) {
    return { success: false, message: "Insufficient funds" };
  }

  balance -= amount;

  return {
    success: true,
    txId: "0x" + Math.random().toString(16).substring(2, 10),
    newBalance: balance,
    timestamp: new Date().toLocaleString()
  };
};