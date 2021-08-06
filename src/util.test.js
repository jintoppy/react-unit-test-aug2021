import { add, sub } from './util';

describe('Util', () => {
    describe('add', () => {

        it('should add two numbers', () => {
            const result = add(1,2);
            expect(result).toEqual(3);
        });

        it('should return same number if only one argument is passed', () => {
            const result = add(1);
            expect(result).toEqual(1);
        });

    });

});