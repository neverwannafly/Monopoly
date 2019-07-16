let insufficientFundHandler = function(game, amount, type, onSuccess) {
    try {
        game.performBankTransaction(amount, type);
    } catch(error) {
        return {
            type: INSUFFICIENT_FUNDS,
            message: `Insufficient funds to perform transaction.`
        }
    }
    return onSuccess(game, amount);
}