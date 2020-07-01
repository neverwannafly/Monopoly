import Game from "./game";

export interface GameModes {
  [key: string]: {
    locations: {
      [key: number]: {
        title: string,
        value: number,
        housePrice?: number,
        color: string,
        picture: string,
        rentScheme: Array<number>,
      }
    },
    currency: string,
  }
};

export interface Transaction {
  type: number,
  message: string,
  timestamp: string,
  payload: object,
}

export interface Cards {
  COMMUNITY_CHEST: (gameModes: GameModes) => {
    [key: number]: {
      desc: string,
      image: string,
      action: (game: Game) => Transaction;
    }
  }
}