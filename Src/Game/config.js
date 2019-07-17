// Contains all configuration details

let gameModes = {
    UK: {
        locations: {
            1: {
                title: "Old Kent Road",
                value: 60,
                housePrice: 30,
                color: BROWN,
                picture: "assets/uk/old_kent_road.jpg",
                rentScheme: [2,10,30,90,160,250], 
            },
            3: {
                title: "Whitechapel Road",
                value: 60,
                housePrice: 30,
                color: BROWN,
                picture: "assets/uk/whitechapel_road.jpg",
                rentScheme: [4,20,60,180,320,450],
            },
            5: {
                title: "King's Cross Station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/king_cross_station.jpg",
                rentScheme: [25,50,100,200],
            },
            6: {
                title: "The Angel, Islington",
                value: 100,
                housePrice: 50,
                color: LIGHT_BLUE,
                picture: "assets/uk/islington.jpg",
                rentScheme: [6,30,90,270,400,550],
            },
            8: {
                title: "Euston Road",
                value: 100,
                housePrice: 50,
                color: LIGHT_BLUE,
                picture: "assets/uk/euston_road.jpg",
                rentScheme: [6,30,90,270,400,550],
            },
            9: {
                title: "Pentonville Road",
                value: 120,
                housePrice: 60,
                color: LIGHT_BLUE,
                picture: "assets/uk/pentonville_road.jpg",
                rentScheme: [8,40,100,300,450,600],
            },
            11: {
                title: "Pall Mall",
                value: 140,
                housePrice: 70,
                color: PINK,
                picture: "assets/uk/pall_mall.jpg",
                rentScheme: [10,50,150,450,625,750],
            },
            12: {
                title: "Electric Company",
                value: 150,
                housePrice: null,
                color: SILVER,
                picture: "assets/uk/electric_company.jpg",
                rentScheme: [4,10],
            },
            13: {
                title: "Whitehall",
                value: 140,
                housePrice: 70,
                color: PINK,
                picture: "assets/uk/whitehall.jpg",
                rentScheme: [10,50,150,450,625,750],
            },
            14: {
                title: "Northumberland Avenue",
                value: 160,
                housePrice: 80,
                color: PINK,
                picture: "assets/uk/northumberland_avenue.jpg",
                rentScheme: [12,60,180,500,700,900],
            },
            15: {
                title: "Marylebone Station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/marylebone_station.jpg",
                rentScheme: [25,50,100,200],
            },
            16: {
                title: "Bow Street",
                value: 180,
                housePrice: 90,
                color: ORANGE,
                picture: "assets/uk/bow_street.jpg",
                rentScheme: [14,70,200,550,750,950],
            },
            18: {
                title: "Great Marlborough Street",
                value: 180,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/uk/marlborough_street.jpg",
                rentScheme: [14,70,200,550,750,950],
            },
            19: {
                title: "Vine Street",
                value: 200,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/uk/vine_street.jpg",
                rentScheme: [16,80,220,600,800,1000],
            },
            21: {
                title: "Strand",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/uk/strand.jpg",
                rentScheme: [18,90,250,700,875,1050]
            },
            23: {
                title: "Fleet Street",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/uk/fleet_street.jpg",
                rentScheme: [18,90,250,700,875,1050],
            },
            24: {
                title: "Trafalgar Square",
                value: 240,
                housePrice: 120,
                color: RED,
                picture: "assets/uk/trafalgar_square.jpg",
                rentScheme: [20,100,300,750,925,1100],
            },
            25: {
                title: "Fenchurch Street station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/fenchurch_street_station.jpg",
                rentScheme: [25,50,100,200],
            },
            26: {
                title: "Leicester Square",
                value: 260,
                housePrice: 130,
                color: YELLOW,
                picture: "assets/uk/leicester_square.jpg",
                rentScheme: [22,110,330,800,975,1150],
            },
            27: {
                title: "Coventry Street",
                value: 260,
                housePrice: 130,
                color: YELLOW,
                picture: "assets/uk/coventry_street.jpg",
                rentScheme: [22,110,330,800,975,1150],
            },
            28: {
                title: "Water Works",
                value: 150,
                housePrice: null,
                color: SILVER,
                picture: "assets/uk/electric_works.jpg",
                rentScheme: [4,10],
            },
            29: {
                title: "Piccadilly",
                value: 280,
                housePrice: 140,
                color: YELLOW,
                picture: "assets/uk/piccadilly.jpg",
                rentScheme: [24,120,360,850,1025,1200],
            },
            31: {
                title: "Regent Street",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/uk/regent_street.jpg",
                rentScheme: [26,130,390,900,1100,1275],
            },
            32: {
                title: "Oxford Street",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/uk/oxford_street.jpg",
                rentScheme: [26,130,390,900,1100,1275],
            },
            34: {
                title: "Bond Street",
                value: 320,
                housePrice: 160,
                color: GREEN,
                picture: "assets/uk/bond_street.jpg",
                rentScheme: [28,150,450,1000,1200,1400],
            },
            35: {
                title: "Liverpool Street Station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/liverpool_street_station.jpg",
                rentScheme: [25,50,100,200],
            },
            37: {
                title: "Park Lane",
                value: 350,
                housePrice: 175,
                color: BLUE,
                picture: "assets/uk/park_lane.jpg",
                rentScheme: [35,175,500,1100,1300,1500],
            },
            39: {
                title: "Mayfair",
                value: 400,
                housePrice: 200,
                color: BLUE,
                picture: "assets/uk/mayfair.jpg",
                rentScheme: [50,200,600,1400,1700,2000],
            },
        },
        currency: "£",
        multiplier: 1,
    },
    USA: {
        locations: {
            1: {
                title: "Mediterranean Avenue",
                value: 60,
                housePrice: 30,
                color: BROWN,
                picture: "assets/usa/mediterranean_avenue.jpg",
                rentScheme: [2,10,30,90,160,250], 
            },
            3: {
                title: "Baltic Avenue",
                value: 60,
                housePrice: 30,
                color: BROWN,
                picture: "assets/usa/baltic_avenue.jpg",
                rentScheme: [4,20,60,180,320,450],
            },
            5: {
                title: "Reading Railroad",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/usa/king_cross_station.jpg",
                rentScheme: [25,50,100,200],
            },
            6: {
                title: "Oriental Avenue",
                value: 100,
                housePrice: 50,
                color: LIGHT_BLUE,
                picture: "assets/usa/oriental_avenue.jpg",
                rentScheme: [6,30,90,270,400,550],
            },
            8: {
                title: "Vermont Avenue",
                value: 100,
                housePrice: 50,
                color: LIGHT_BLUE,
                picture: "assets/usa/vermont_avenue.jpg",
                rentScheme: [6,30,90,270,400,550],
            },
            9: {
                title: "Connecticut Avenue",
                value: 120,
                housePrice: 60,
                color: LIGHT_BLUE,
                picture: "assets/usa/connecticut_avenue.jpg",
                rentScheme: [8,40,100,300,450,600],
            },
            11: {
                title: "St. Charles Place",
                value: 140,
                housePrice: 70,
                color: PINK,
                picture: "assets/usa/st_charles_place.jpg",
                rentScheme: [10,50,150,450,625,750],
            },
            12: {
                title: "Electric Company",
                value: 150,
                housePrice: null,
                color: SILVER,
                picture: "assets/usa/electric_company.jpg",
                rentScheme: [4,10],
            },
            13: {
                title: "States Avenue",
                value: 140,
                housePrice: 70,
                color: PINK,
                picture: "assets/usa/states_avenue.jpg",
                rentScheme: [10,50,150,450,625,750],
            },
            14: {
                title: "Virginia Avenue",
                value: 160,
                housePrice: 80,
                color: PINK,
                picture: "assets/usa/virginia_avenue.jpg",
                rentScheme: [12,60,180,500,700,900],
            },
            15: {
                title: "Marylebone Station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/usa/marylebone_station.jpg",
                rentScheme: [25,50,100,200],
            },
            16: {
                title: "Pennsylvania Railroad",
                value: 180,
                housePrice: 90,
                color: ORANGE,
                picture: "assets/usa/st_james_place.jpg",
                rentScheme: [14,70,200,550,750,950],
            },
            18: {
                title: "Tennessee Avenue",
                value: 180,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/usa/tennessee_avenue.jpg",
                rentScheme: [14,70,200,550,750,950],
            },
            19: {
                title: "New York Avenue",
                value: 200,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/usa/new_york_avenue.jpg",
                rentScheme: [16,80,220,600,800,1000],
            },
            21: {
                title: "Kentucky Avenue",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/usa/kentucky_avenue.jpg",
                rentScheme: [18,90,250,700,875,1050]
            },
            23: {
                title: "Indiana Avenue",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/usa/indiana_avenue.jpg",
                rentScheme: [18,90,250,700,875,1050],
            },
            24: {
                title: "Illinois Avenue",
                value: 240,
                housePrice: 120,
                color: RED,
                picture: "assets/usa/illinois_avenue.jpg",
                rentScheme: [20,100,300,750,925,1100],
            },
            25: {
                title: "B & O Railroad",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/usa/fenchurch_street_station.jpg",
                rentScheme: [25,50,100,200],
            },
            26: {
                title: "Atlantic Avenue",
                value: 260,
                housePrice: 130,
                color: YELLOW,
                picture: "assets/usa/atlantic_avenue.jpg",
                rentScheme: [22,110,330,800,975,1150],
            },
            27: {
                title: "Ventnor Avenue",
                value: 260,
                housePrice: 130,
                color: YELLOW,
                picture: "assets/usa/ventnor_avenue.jpg",
                rentScheme: [22,110,330,800,975,1150],
            },
            28: {
                title: "Electric Works",
                value: 150,
                housePrice: null,
                color: SILVER,
                picture: "assets/usa/electric_works.jpg",
                rentScheme: [4,10],
            },
            29: {
                title: "Marvin Gardens",
                value: 280,
                housePrice: 140,
                color: YELLOW,
                picture: "assets/usa/marvin_gardens.jpg",
                rentScheme: [24,120,360,850,1025,1200],
            },
            31: {
                title: "Pacific Avenue",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/usa/pacific_avenue.jpg",
                rentScheme: [26,130,390,900,1100,1275],
            },
            32: {
                title: "North Carolina Avenue",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/usa/north_carolina_avenue.jpg",
                rentScheme: [26,130,390,900,1100,1275],
            },
            34: {
                title: "Pennsylvania Avenue",
                value: 320,
                housePrice: 160,
                color: GREEN,
                picture: "assets/usa/pennsylvania_avenue.jpg",
                rentScheme: [28,150,450,1000,1200,1400],
            },
            35: {
                title: "Short Line Railroad",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/usa/liverpool_street_station.jpg",
                rentScheme: [25,50,100,200],
            },
            37: {
                title: "Park City",
                value: 350,
                housePrice: 175,
                color: BLUE,
                picture: "assets/usa/park_city.jpg",
                rentScheme: [35,175,500,1100,1300,1500],
            },
            39: {
                title: "Boardwalk",
                value: 400,
                housePrice: 200,
                color: BLUE,
                picture: "assets/usa/boardwalk.jpg",
                rentScheme: [50,200,600,1400,1700,2000],
            },
        },
        currency: "$",
        multiplier: 1,
    },
};

let CARDS = {
    BONUS_CARDS: function(gameMode) {
        return {
            GET_OUT_OF_JAIL : {
                title: "Get out of Jail",
                image: "assets/mascot",
                desc: "If you have this card, you can get out of jail for free!",
                quantity: 2,
                action: function(game) {
                    game.getPlayer().inJail = false;
                    return {
                        type: GET_OUT_OF_JAIL,
                        message: `${game.getPlayer()} got out of jail`,
                        timestamp: game.getTimestamp(),
                    }
                }
            }
        }
    },
    COMMUNITY_CHEST: function(gameMode) {
        return {
            1: {
                desc: `Advance to "Go"!`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            2: {
                desc:`Go to jail. Move directly to jail. Do not pass "Go". Do not collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function(game) {
                    
                }
            },
            3: {
                desc: `Go back to ${gameModes[gameMode]["locations"][1]["title"]}`,
                image: "assets/mascot/",
                action: function(game) {
                    
                }
            }, 
            4: {
                desc: `Pay hospital ${gameModes[gameMode]["currency"]}100`,
                image: "assets/mascot/",
                action: function(game) {
                    
                }
            }, 
            5: {
                desc: `Doctor's fee. Pay ${gameModes[gameMode]["currency"]}50`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            6: {
                desc: `Pay your insurance premium ${gameModes[gameMode]["currency"]}50`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            7: {
                desc: `Bank error in your favour. Collect ${gameModes[gameMode]["currency"]}200`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            8: {
                desc: `Annuity matures. Collect ${gameModes[gameMode]["currency"]}100`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            9: {
                desc: `You inherit ${gameModes[gameMode]["currency"]}100`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            10: {
                desc: `From sale of stock you get ${gameModes[gameMode]["currency"]}50`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            11: {
                desc: `Receive interest on 7% preference shares: ${gameModes[gameMode]["currency"]}25`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            12: {
                desc: `Income tax refund. Collect ${gameModes[gameMode]["currency"]}20`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            13: {
                desc: `You have won second prize in a beauty contest. Collect ${gameModes[gameMode]["currency"]}10`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            14: {
                desc: `It is your birthday. Collect ${gameModes[gameMode]["currency"]}10 from each player`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            15: {
                desc: `Pay a ${gameModes[gameMode]["currency"]}10 fine or take a "Chance"`,
                image: "assets/mascot/",
                action: function(game) {

                }
            },
            16: {
                desc: `Get out of jail free. This card may be kept until needed or sold`,
                image: "assets/mascot/",
                action: function(game) {
                    // Prop id of get out of jail card drawn in community chest is -2
                }
            }
        }
    },
    CHANCE: function(gameMode) {
        return {
            1: {
                desc: `Advance to "Go"!`,
                image: "assets/mascot/",
                action: function(game) {
                    game.getPlayer().position = 0;
                    return game.passGo();
                }
            },
            2: {
                desc:`Go to jail. Move directly to jail. Do not pass "Go". Do not collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function(game) {
                    return game.goToJail();
                }
            },
            3: {
                desc: `Advance to ${gameModes[gameMode]["locations"][11]["title"]}. If you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function(game) {
                    let initPos = game.getPlayer().position;
                    let dest = 11;
                    let diff = dest - initPos;
                    if (initPos > dest) { diff += 40; }
                    return game.incrementPlayerPosition(diff);
                }
            }, 
            4: {
                desc: `Take a trip to ${gameModes[gameMode]["locations"][15]["title"]} and if you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function(game) {
                    let initPos = game.getPlayer().position;
                    let dest = 15;
                    let diff = dest - initPos;
                    if (initPos > dest) { diff += 40; }
                    return game.incrementPlayerPosition(diff);
                }
            }, 
            5: {
                desc: `Advance to ${gameModes[gameMode]["locations"][24]["title"]}. If you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function(game) {
                    let initPos = game.getPlayer().position;
                    let dest = 24;
                    let diff = dest - initPos;
                    if (initPos > dest) { diff += 40; }
                    return game.incrementPlayerPosition(diff);
                }
            },
            6: {
                desc: `Advance to ${gameModes[gameMode]["locations"][39]["title"]}`,
                image: "assets/mascot/",
                action: function(game) {
                    game.getPlayer().position = 39;
                    return {
                        type: MOVE_SPACES,
                        message: `${game.getPlayer().name} advances to ${game.getProperty().name}`,
                        timestamp: game.getTimestamp(),
                    };
                }
            },
            7: {
                desc: `Go back three spaces`,
                image: "assets/mascot/",
                action: function(game) {
                    return game.incrementPlayerPosition(-3);
                }
            },
            8: {
                desc: `Make general repairs on all of your houses. For each house pay ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*25}. For each hotel pay ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*100}`,
                image: "assets/mascot/",
                action: function(game) {
                    let properties = game.players[game.currentPlayer].properties;
                    let houses = 0, hotels = 0;
                    for (let propid in properties) {
                        let assets = game.board[propid].assets;
                        if (assets===5) {
                            hotels += 1;
                        } else {
                            houses += assets;
                        }
                    }
                    let cost = houses*gameModes[gameMode]["multiplier"]*25 + hotels*gameModes[gameMode]["multiplier"]*100;
                    return bankPaymentHandler(game, cost, false, function(game, amount){
                        return {
                            type: PAY_MONEY,
                            message: `${game.getPlayer().name} pays ${game.currency}${amount} for general repairs`,
                            timestamp: game.getTimestamp(),
                        }
                    });
                }
            },
            9: {
                desc: `You are assessed for street repairs: ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*40} per house, ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*115} per hotel`,
                image: "assets/mascot/",
                action: function(game) {
                    let properties = game.players[game.currentPlayer].properties;
                    let houses = 0, hotels = 0;
                    for (let propid in properties) {
                        let assets = game.board[propid].assets;
                        if (assets===5) {
                            hotels += 1;
                        } else {
                            houses += assets;
                        }
                    }
                    let cost = houses*gameModes[gameMode]["multiplier"]*40 + hotels*gameModes[gameMode]["multiplier"]*115;
                    return bankPaymentHandler(game, cost, false, function(game, amount){
                        return {
                            type: PAY_MONEY,
                            message: `${game.getPlayer().name} pays ${game.currency}${amount} for street repairs`,
                            timestamp: game.getTimestamp(),
                        }
                    });
                }
            },
            10: {
                desc: `Pay school fees of ${gameModes[gameMode]["currency"]}150`,
                image: "assets/mascot/",
                action: function(game) {
                    let amount = 150;
                    return bankPaymentHandler(game, amount, false, function(game, amount){
                        return {
                            type: PAY_MONEY,
                            message: `${game.getPlayer().name} pays ${game.currency}${amount} as school fees`,
                            timestamp: game.getTimestamp(),
                        }
                    });
                }
            },
            11: {
                desc: `"Drunk in charge" fine ${gameModes[gameMode]["currency"]}20`,
                image: "assets/mascot/",
                action: function(game) {
                    let amount = 20;
                    return bankPaymentHandler(game, amount, false, function(game, amount){
                        return {
                            type: PAY_MONEY,
                            message: `${game.getPlayer().name} pays ${game.currency}${amount} as "Drink in charge" fine`,
                            timestamp: game.getTimestamp(),
                        }
                    });
                }
            },
            12: {
                desc: `Speeding fine ${gameModes[gameMode]["currency"]}15`,
                image: "assets/mascot/",
                action: function(game) {
                    let amount = 15;
                    return bankPaymentHandler(game, amount, false, function(game, amount){
                        return {
                            type: PAY_MONEY,
                            message: `${game.getPlayer().name} pays ${game.currency}${amount} as speeding fine`,
                            timestamp: game.getTimestamp(),
                        }
                    });
                }
            },
            13: {
                desc: `Your building loan matures. Receive ${gameModes[gameMode]["currency"]}150`,
                image: "assets/mascot/",
                action: function(game) {
                    let amount = 150;
                    return bankPaymentHandler(game, amount, true, function(game, amount) {
                        return {
                            type: RECIEVE_MONEY,
                            message: `${game.getPlayer().name} gets ${game.currency}${amount} for building loan maturity`,
                            timestamp: game.getTimestamp(),
                        }
                    });
                }
            },
            14: {
                desc: `You have won a crossword competition. Collect ${gameModes[gameMode]["currency"]}100`,
                image: "assets/mascot/",
                action: function(game) {
                    let amount = 100;
                    return bankPaymentHandler(game, amount, true, function(game, amount) {
                        return {
                            type: RECIEVE_MONEY,
                            message: `${game.getPlayer().name} gets ${game.currency}${amount} for winning crossword competition`,
                            timestamp: game.getTimestamp(),
                        }
                    });
                }
            },
            15: {
                desc: `Bank pays you dividend of ${gameModes[gameMode]["currency"]}50`,
                image: "assets/mascot/",
                action: function(game) {
                    let amount = 50;
                    return bankPaymentHandler(game, amount, true, function(game, amount) {
                        return {
                            type: RECIEVE_MONEY,
                            message: `${game.getPlayer().name} gets ${game.currency}${amount} as dividend`,
                            timestamp: game.getTimestamp(),
                        }
                    });
                }
            },
            16: {
                desc: `Get out of jail free. This card may be kept until needed or sold`,
                image: "assets/mascot/",
                action: function(game) {
                    // Prop id of get out of jail card drawn in chance is -1
                    game.getPlayer().addProperty(GET_OUT_OF_JAIL);
                    return {
                    //     type: 
                    // }
                    }
                }
            }
        }
    }
}

let sameTypePropDict = {
    1: [3],
    3: [1],
    5: [15, 25, 35],
    6: [8, 9],
    8: [6, 9],
    9: [6, 8],
    11: [13, 14],
    12: [28],
    13: [11, 14],
    14: [11, 13],
    15: [5, 25, 35],
    16: [18, 19],
    18: [16, 19],
    19: [16, 18],
    21: [23, 24],
    23: [21, 24],
    24: [21, 23],
    25: [5, 15, 35],
    26: [27, 29],
    27: [26, 29],
    28: [12],
    29: [26, 27],
    31: [32, 34],
    32: [31, 34],
    34: [31, 32],
    35: [5, 15, 25],
    37: [39],
    39: [37],
}