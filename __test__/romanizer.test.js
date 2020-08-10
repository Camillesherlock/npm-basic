import {transform} from "../src/romanizer";

describe('transform', () => {
    it('should return "X" when put 10', () => {
        var number = transform(10)
        expect(number).toEqual("X");
    });
    });