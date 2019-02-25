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
                rentScheme: [0,2,10,30,90,160,250], 
            },
            3: {
                title: "Whitechapel Road",
                value: 60,
                housePrice: 30,
                color: BROWN,
                picture: "assets/uk/whitechapel_road.jpg",
                rentScheme: [0,4,20,60,180,320,450],
            },
            5: {
                title: "King's Cross station",
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
                rentScheme: [0,6,30,90,270,400,550],
            },
            8: {
                title: "Euston Road",
                value: 100,
                housePrice: 50,
                color: LIGHT_BLUE,
                picture: "assets/uk/euston_road.jpg",
                rentScheme: [0,6,30,90,270,400,550],
            },
            9: {
                title: "Pentonville Road",
                value: 120,
                housePrice: 60,
                color: LIGHT_BLUE,
                picture: "assets/uk/pentonville_road.jpg",
                rentScheme: [0,8,40,100,300,450,600],
            },
            11: {
                title: "Pall Mall",
                value: 140,
                housePrice: 70,
                color: PINK,
                picture: "assets/uk/pall_mall.jpg",
                rentScheme: [0,10,50,150,450,625,750],
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
                rentScheme: [0,10,50,150,450,625,750],
            },
            14: {
                title: "Northumberland Avenue",
                value: 160,
                housePrice: 80,
                color: PINK,
                picture: "assets/uk/northumberland_avenue.jpg",
                rentScheme: [0,12,60,180,500,700,900],
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
                rentScheme: [0,14,70,200,550,750,950],
            },
            18: {
                title: "Great Marlborough Street",
                value: 180,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/uk/marlborough_street.jpg",
                rentScheme: [0,14,70,200,550,750,950],
            },
            19: {
                title: "Vine Street",
                value: 200,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/uk/vine_street.jpg",
                rentScheme: [0,16,80,220,600,800,1000],
            },
            21: {
                title: "Strand",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/uk/strand.jpg",
                rentScheme: [0,18,90,250,700,875,1050]
            },
            23: {
                title: "Fleet Street",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/uk/fleet_street.jpg",
                rentScheme: [0,18,90,250,700,875,1050],
            },
            24: {
                title: "Trafalgar Square",
                value: 240,
                housePrice: 120,
                color: RED,
                picture: "assets/uk/trafalgar_square.jpg",
                rentScheme: [0,20,100,300,750,925,1100],
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
                rentScheme: [0,22,110,330,800,975,1150],
            },
            27: {
                title: "Coventry Street",
                value: 260,
                housePrice: 130,
                color: YELLOW,
                picture: "assets/uk/coventry_street.jpg",
                rentScheme: [0,22,110,330,800,975,1150],
            },
            28: {
                title: "Electric Works",
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
                rentScheme: [0,24,120,360,850,1025,1200],
            },
            31: {
                title: "Regent Street",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/uk/regent_street.jpg",
                rentScheme: [0,26,130,390,900,1100,1275],
            },
            32: {
                title: "Oxford Street",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/uk/oxford_street.jpg",
                rentScheme: [0,26,130,390,900,1100,1275],
            },
            34: {
                title: "Bond Street",
                value: 320,
                housePrice: 160,
                color: GREEN,
                picture: "assets/uk/bond_street.jpg",
                rentScheme: [0,28,150,450,1000,1200,1400],
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
                rentScheme: [0,35,175,500,1100,1300,1500],
            },
            39: {
                title: "Mayfair",
                value: 400,
                housePrice: 200,
                color: BLUE,
                picture: "assets/uk/mayfair.jpg",
                rentScheme: [0,50,200,600,1400,1700,2000],
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
                rentScheme: [0,2,10,30,90,160,250], 
            },
            3: {
                title: "Baltic Avenue",
                value: 60,
                housePrice: 30,
                color: BROWN,
                picture: "assets/usa/baltic_avenue.jpg",
                rentScheme: [0,4,20,60,180,320,450],
            },
            5: {
                title: "King's Cross station",
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
                rentScheme: [0,6,30,90,270,400,550],
            },
            8: {
                title: "Vermont Avenue",
                value: 100,
                housePrice: 50,
                color: LIGHT_BLUE,
                picture: "assets/usa/vermont_avenue.jpg",
                rentScheme: [0,6,30,90,270,400,550],
            },
            9: {
                title: "Connecticut Avenue",
                value: 120,
                housePrice: 60,
                color: LIGHT_BLUE,
                picture: "assets/usa/connecticut_avenue.jpg",
                rentScheme: [0,8,40,100,300,450,600],
            },
            11: {
                title: "St. Charles Place",
                value: 140,
                housePrice: 70,
                color: PINK,
                picture: "assets/usa/st_charles_place.jpg",
                rentScheme: [0,10,50,150,450,625,750],
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
                rentScheme: [0,10,50,150,450,625,750],
            },
            14: {
                title: "Virginia Avenue",
                value: 160,
                housePrice: 80,
                color: PINK,
                picture: "assets/usa/virginia_avenue.jpg",
                rentScheme: [0,12,60,180,500,700,900],
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
                title: "St. James Place",
                value: 180,
                housePrice: 90,
                color: ORANGE,
                picture: "assets/usa/st_james_place.jpg",
                rentScheme: [0,14,70,200,550,750,950],
            },
            18: {
                title: "Tennessee Avenue",
                value: 180,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/usa/tennessee_avenue.jpg",
                rentScheme: [0,14,70,200,550,750,950],
            },
            19: {
                title: "New York Avenue",
                value: 200,
                housePrice: 100,
                color: ORANGE,
                picture: "assets/usa/new_york_avenue.jpg",
                rentScheme: [0,16,80,220,600,800,1000],
            },
            21: {
                title: "Kentucky Avenue",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/usa/kentucky_avenue.jpg",
                rentScheme: [0,18,90,250,700,875,1050]
            },
            23: {
                title: "Indiana Avenue",
                value: 220,
                housePrice: 110,
                color: RED,
                picture: "assets/usa/indiana_avenue.jpg",
                rentScheme: [0,18,90,250,700,875,1050],
            },
            24: {
                title: "Illinois Avenue",
                value: 240,
                housePrice: 120,
                color: RED,
                picture: "assets/usa/illinois_avenue.jpg",
                rentScheme: [0,20,100,300,750,925,1100],
            },
            25: {
                title: "Fenchurch Street station",
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
                rentScheme: [0,22,110,330,800,975,1150],
            },
            27: {
                title: "Ventnor Avenue",
                value: 260,
                housePrice: 130,
                color: YELLOW,
                picture: "assets/usa/ventnor_avenue.jpg",
                rentScheme: [0,22,110,330,800,975,1150],
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
                rentScheme: [0,24,120,360,850,1025,1200],
            },
            31: {
                title: "Pacific Avenue",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/usa/pacific_avenue.jpg",
                rentScheme: [0,26,130,390,900,1100,1275],
            },
            32: {
                title: "North Carolina Avenue",
                value: 300,
                housePrice: 150,
                color: GREEN,
                picture: "assets/usa/north_carolina_avenue.jpg",
                rentScheme: [0,26,130,390,900,1100,1275],
            },
            34: {
                title: "Pennsylvania Avenue",
                value: 320,
                housePrice: 160,
                color: GREEN,
                picture: "assets/usa/pennsylvania_avenue.jpg",
                rentScheme: [0,28,150,450,1000,1200,1400],
            },
            35: {
                title: "Liverpool Street Station",
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
                rentScheme: [0,35,175,500,1100,1300,1500],
            },
            39: {
                title: "Boardwalk",
                value: 400,
                housePrice: 200,
                color: BLUE,
                picture: "assets/usa/boardwalk.jpg",
                rentScheme: [0,50,200,600,1400,1700,2000],
            },
        },
        currency: "$",
        multiplier: 1,
    },
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
                desc: `Go back to ${gameModes[gameMode]["locations"][1]["title"]}`,
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
                desc: `Advance to ${gameModes[gameMode]["locations"][11]["title"]}. If you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function() {
                    
                }
            }, 
            4: {
                desc: `Take a trip to ${gameModes[gameMode]["locations"][15]["title"]} and if you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function() {
                    
                }
            }, 
            5: {
                desc: `Advance to ${gameModes[gameMode]["locations"][24]["title"]}. If you pass "Go" collect ${gameModes[gameMode]["currency"]}${gameModes[gameMode]["multiplier"]*200}`,
                image: "assets/mascot/",
                action: function() {

                }
            },
            6: {
                desc: `Advance to ${gameModes[gameMode]["locations"][39]["title"]}`,
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