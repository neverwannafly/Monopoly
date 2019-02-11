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
            },
            3: {
                title: "Whitechapel Road",
                value: 60,
                housePrice: 30,
                color: BROWN,
                picture: "assets/uk/whitechapel_road.jpg",
            },
            5: {
                title: "King's Cross station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/king_cross_station.jpg",
            },
            6: {
                title: "The Angel, Islington",
                value: 100,
                housePrice: 50,
                color: LIGHT_BLUE,
                picture: "assets/uk/islington.jpg",
            },
            8: {
                title: "Euston Road",
                value: 100,
                housePrice: 50,
                color: LIGHT_BLUE,
                picture: "assets/uk/euston_road.jpg",
            },
            9: {
                title: "Pentonville Road",
                value: 120,
                housePrice: 60,
                color: LIGHT_BLUE,
                picture: "assets/uk/pentonville_road.jpg",
            },
            11: {
                title: "Pall Mall",
                value: 140,
                housePrice: 70,
                color: PINK,
                picture: "assets/uk/pall_mall.jpg",
            },
            12: {
                title: "Electric Company",
                value: 150,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/electric_company.jpg",
            },
            13: {
                title: "Whitehall",
                value: 140,
                housePrice: 70,
                color: PINK,
                picture: "assets/uk/whitehall.jpg",
            },
            14: {
                title: "Northumberland Avenue",
                value: 160,
                housePrice: 80,
                color: PINK,
                picture: "assets/uk/northumberland_avenue.jpg",
            },
            15: {
                title: "Marylebone Station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/marylebone_station.jpg",
            },
            16: {
                title: "Bow Street",
                value: 180,
                housePrice: 90,
                color: ORANGE,
                picture: "assets/uk/bow_street.jpg",
            },
            18: {
                title: "Great Marlborough Street",
                value: 180,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/uk/marlborough_street.jpg",
            },
            19: {
                title: "Vine Street",
                value: 200,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/uk/vine_street.jpg",
            },
            21: {
                title: "Strand",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/uk/strand.jpg",
            },
            23: {
                title: "Fleet Street",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/uk/fleet_street.jpg",
            },
            24: {
                title: "Trafalgar Square",
                value: 240,
                housePrice: 120,
                color: RED,
                picture: "assets/uk/trafalgar_square.jpg",
            },
            25: {
                title: "Fenchurch Street station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/fenchurch_street_station.jpg",
            },
            26: {
                title: "Leicester Square",
                value: 260,
                housePrice: 130,
                color: YELLOW,
                picture: "assets/uk/leicester_square.jpg",
            },
            27: {
                title: "Coventry Street",
                value: 260,
                housePrice: 130,
                color: YELLOW,
                picture: "assets/uk/coventry_street.jpg",
            },
            28: {
                title: "Electric Works",
                value: 150,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/electric_works.jpg",
            },
            29: {
                title: "Piccadilly",
                value: 280,
                housePrice: 140,
                color: YELLOW,
                picture: "assets/uk/piccadilly.jpg",
            },
            31: {
                title: "Regent Street",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/uk/regent_street.jpg",
            },
            32: {
                title: "Oxford Street",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/uk/oxford_street.jpg",
            },
            34: {
                title: "Bond Street",
                value: 320,
                housePrice: 160,
                color: GREEN,
                picture: "assets/uk/bond_street.jpg",
            },
            35: {
                title: "Liverpool Street Station",
                value: 200,
                housePrice: null,
                color: WHITE,
                picture: "assets/uk/liverpool_street_station.jpg",
            },
            37: {
                title: "Park Lane",
                value: 350,
                housePrice: 175,
                color: BLUE,
                picture: "assets/uk/park_lane.jpg",
            },
            39: {
                title: "Mayfair",
                value: 400,
                housePrice: 200,
                color: BLUE,
                picture: "assets/uk/mayfair.jpg",
            },
        },
        currency: "£",
        multiplier: 1,
    },
    USA: {

    },
};

let rentScheme = function(args) {
    
};

let CARDS = {
    COMMUNITY_CHEST: function(gameMode) {
        return {
            1: {
                desc: `Advance to "Go"!`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            2: {
                desc:`Go to jail. Move directly to jail. Do not pass "Go". Do not collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function() {
                    
                }
            },
            3: {
                desc: `Go back to ${gameModes[gameMode]["locations"][1]}`,
                image: "assets/mascot/",
                action: function() {
                    
                }
            }, 
            4: {
                desc: `Pay hospital ${gameModes[gameMode]["currency"]}100`,
                image: "assets/mascot/",
                action: function() {
                    
                }
            }, 
            5: {
                desc: `Doctor's fee. Pay ${gameModes[gameMode]["currency"]}50`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            6: {
                desc: `Pay your insurance premium ${gameModes[gameMode]["currency"]}50`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            7: {
                desc: `Bank error in your favour. Collect ${gameModes[gameMode]["currency"]}200`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            8: {
                desc: `Annuity matures. Collect ${gameModes[gameMode]["currency"]}100`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            9: {
                desc: `You inherit ${gameModes[gameMode]["currency"]}100`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            10: {
                desc: `From sale of stock you get ${gameModes[gameMode]["currency"]}50`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            11: {
                desc: `Receive interest on 7% preference shares: ${gameModes[gameMode]["currency"]}25`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            12: {
                desc: `Income tax refund. Collect ${gameModes[gameMode]["currency"]}20`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            13: {
                desc: `You have won second prize in a beauty contest. Collect ${gameModes[gameMode]["currency"]}10`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            14: {
                desc: `It is your birthday. Collect ${gameModes[gameMode]["currency"]}10 from each player`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            15: {
                desc: `Pay a ${gameModes[gameMode]["currency"]}10 fine or take a "Chance"`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            16: {
                desc: `Get out of jail free. This card may be kept until needed or sold`,
                image: "assets/mascot/",
                action: function() {

                }
            }
        }
    },
    CHANCE: function(gameMode) {
        return {
            1: {
                desc: `Advance to "Go"!`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            2: {
                desc:`Go to jail. Move directly to jail. Do not pass "Go". Do not collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function() {
                    
                }
            },
            3: {
                desc: `Advance to ${gameModes[gameMode]["locations"][11]}. If you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function() {
                    
                }
            }, 
            4: {
                desc: `Take a trip to ${gameModes[gameMode]["locations"][15]} and if you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function() {
                    
                }
            }, 
            5: {
                desc: `Advance to ${gameModes[gameMode]["locations"][24]}. If you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            6: {
                desc: `Advance to Mayfair`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            7: {
                desc: `Go back three spaces`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            8: {
                desc: `Make general repairs on all of your houses. For each house pay ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*25}. For each hotel pay ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*100}`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            9: {
                desc: `You are assessed for street repairs: ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*40} per house, ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*115} per hotel`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            10: {
                desc: `Pay school fees of ${gameModes[gameMode]["currency"]}150`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            11: {
                desc: `"Drunk in charge" fine ${gameModes[gameMode]["currency"]}20`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            12: {
                desc: `Speeding fine ${gameModes[gameMode]["currency"]}15`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            13: {
                desc: `Your building loan matures. Receive ${gameModes[gameMode]["currency"]}150`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            14: {
                desc: `You have won a crossword competition. Collect ${gameModes[gameMode]["currency"]}100`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            15: {
                desc: `Bank pays you dividend of ${gameModes[gameMode]["currency"]}50`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            16: {
                desc: `Get out of jail free. This card may be kept until needed or sold`,
                image: "assets/mascot/",
                action: function() {

                }
            }
        }
    }
}