// To be used for player to bank or bank to player transaction
let bankPaymentHandler = function(game, amount, type, onSuccess) {
    // game      -> The game object, pass the "this" object as first param
    // amount    -> Transaction amount
    // type      -> Type of transaction: True if to be paid by bank to player
    // onSuccess -> Success handler
    try {
        game.performBankTransaction(amount, type);
    } catch(error) {
        return {
            type: INSUFFICIENT_FUNDS,
            payee: type ? -1 : game.currentPlayer, // -1 indicates a payment fault by the bank
            message: `Insufficient funds to perform transaction. Need ${game.currency}${amount-game.getPlayerBalance()} more`,
            timestamp: new Date().toLocaleString(),
        }
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
        return {
            type: INSUFFICIENT_FUNDS,
            payee: type ? otherPlayerId: game.currentPlayer,
            message: `Insufficient funds to perform transaction. Need ${game.currency}${amount-game.getPlayerBalance()} more.`,
            timestamp: new Date().toLocaleString(),
        }
    }
    return onSuccess(game, amount, otherPlayerId);
}