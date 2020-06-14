// To be used for player to bank or bank to player transaction
let bankPaymentHandler = function(game, amount, type, onSuccess) {
    // game      -> The game object, pass the "this" object as first param
    // amount    -> Transaction amount
    // type      -> Type of transaction: True if to be paid by bank to player
    // onSuccess -> Success handler
    try {
        game.performBankTransaction(amount, type);
    } catch(error) {
        let failedTransaction = {
            type: INSUFFICIENT_FUNDS,
            payee: type ? -1 : game.currentPlayer, // -1 indicates a payment fault by the bank
            receiver: type ? game.currentPlayer : -1,
            amount: amount,
            message: `Insufficient funds to perform transaction. Need ${game.currency}${amount-game.getPlayerBalance()} more`,
            timestamp: game.getTimestamp(),
        }
        game.pending.push(failedTransaction);
        return failedTransaction;
    }
    return onSuccess(game, amount);
}

// To be used for player to player transaction
let playerPaymentHandler = function(game, amount, otherPlayerId, type, onSuccess) {
    // game          -> The game object, pass "this" object as first param
    // amount        -> Transaction amount
    // otherPlayerId -> ID of other player involved in transaction
    // type          -> True if to be paid by other player
    // onSuccess     -> Success handler
    try {
        game.performPlayerTransaction(amount, otherPlayerId, type);
    } catch(error) {
        let failedTransaction = {
            type: INSUFFICIENT_FUNDS,
            payee: type ? otherPlayerId: game.currentPlayer,
            receiver: type ? game.currentPlayer : otherPlayerId,
            amount: amount,
            message: `Insufficient funds to perform transaction. Need ${game.currency}${amount-game.getPlayerBalance()} more.`,
            timestamp: game.getTimestamp(),
        }
        game.pending.push(failedTransaction);
        return failedTransaction;
    }
    return onSuccess(game, amount, otherPlayerId);
}

let invalidResponseHandler = function(game, message=null) {
    if (message===null) {
        message = `${game.getPlayer()} submitted Invalid response`;
    }
    return {
        type: INVALID_RESPONSE,
        message: message,
        timestamp: game.getTimestamp(),
    }
}