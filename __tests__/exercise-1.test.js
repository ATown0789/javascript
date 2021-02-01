const exerciseOne = require('../exercise-1');

test("test", () => {
    expect(true).toBe(true);
} );

// Add testing code for all the remaining functions you wrote in the exercise-1.js file

describe("tekCamp()", () => {

    test("existence of tekcamp()", () => {
        expect(exerciseOne.tekCamp()).toBe(undefined);        
    });

    test("tekCamp() console.logs with TEK at least once", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        // expect(console.log).toBeCalledTimes(10);
        expect(console.log).toHaveBeenCalledWith("TEK");
    });

    test("tekCamp() last console.log() is camp", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenLastCalledWith("camp");
    })

    test("tekCamp() on 3, console.log() TEK", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(3,"TEK");
    });

    test("tekCamp() on 4 console.logs 4", () => {
        console.log= jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(4,4);
    });

    test("tekCamp() on 1 console.logs 1 ", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(1,1);
    });

    test("tekCamp() on 15 console.logs 'TEKcamp' ", () => {
        console.log = jest.fn();
        exerciseOne.tekCamp();
        expect(console.log).toHaveBeenNthCalledWith(15,"TEKcamp");
    })

});


// YOUR CODE HERE.  follow the template below to flush out your tests.

describe("farenheitCelsius()", () => {

    test("farenheitCelsius(212) should return 100 celsius", () => {

        expect(exerciseOne.farenheitCelsius(212)).toBe(100);

    });

    test("farenheitCelsius(68) should return 20 celsius", () => {
        expect(exerciseOne.farenheitCelsius(68)).toBe(20);
    });

});

describe("celsiusFarenheit()", () => {

    test("celsiusFarenheit(20) should return 68", () => {
        expect(exerciseOne.celsiusFarenheit(20)).toBe(68);
    });

    test("celsiusFarenheit(100) should return 212", () => {
        expect(exerciseOne.celsiusFarenheit(100)).toBe(212);
    });

});

describe("strToArr", () => {

    test("strToArr('hello') should return an array", () => {
        expect(Array.isArray(exerciseOne.strToArr('hello'))).toBe(true);
    });

});

describe("canVote()", () => {

    test("canVote() returns false", () => {
        expect(exerciseOne.canVote(17)).toBe(false);
    })

    test("canVote(age = 21) returns true", () => {
        expect(exerciseOne.canVote(21)).toBe(true);
    } )

    test("canVote() without an age argument returns false", () => {
        expect(exerciseOne.canVote()).toBe(false);
    })

});

describe("reversePhone", () => {

    test("reversePhone('8176026329') should return '9236206718'", () => {
        expect(exerciseOne.reversePhone(8176026329)).toBe(9236206718);
    });

});

describe("makeCar", () => {

    test("makeCar('dodge','ram','2007','tan') should return an object", () => {
        expect(exerciseOne.makeCar('dodge','ram','2007','tan')).toEqual({
            make: 'dodge',
            model: 'ram',
            year: '2007',
            color: 'tan'
        });
    });

});

describe("oddEven", () => {

    test("oddEVen([10,23,3,4]) should return an object", () => {
        expect(exerciseOne.oddEven([10,23,3,4])).toEqual({
            10: 'even',
            23: 'odd',
            3: 'odd',
            4: 'even'
        });
    });
});

describe("chessCalc", () => {

    test("chessCalc(['iPhone','queen','pawn']) should return 10", () => {
        expect(exerciseOne.chessCalc(['iPhone','queen','pawn'])).toBe(10);
    });

    test("chessCalc(['android']) should return null", () => {
        expect(exerciseOne.chessCalc(['android'])).toBe(null);
    });
    
    test("chessCalc(['king','queen','pawn','pawn','pawn','bishop']) should return 15", () => {
        expect(exerciseOne.chessCalc(['king','queen','pawn','pawn','pawn','bishop'])).toBe(15);
    });
});
