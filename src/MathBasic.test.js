const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multipy, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrow();
      expect(() => MathBasic.add(1)).toThrow();
      expect(() => MathBasic.add(1, 2, 3)).toThrow();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrow();
      expect(() => MathBasic.add(true, {})).toThrow();
      expect(() => MathBasic.add(null, false)).toThrow();
    });

    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  describe('B subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrow();
      expect(() => MathBasic.subtract(1)).toThrow();
      expect(() => MathBasic.subtract(1, 2, 3)).toThrow();
      expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.subtract('1', '2')).toThrow();
      expect(() => MathBasic.subtract(true, {})).toThrow();
      expect(() => MathBasic.subtract(null, false)).toThrow();
    });

    it('should return a - b when given two number parameters', () => {
      expect(MathBasic.subtract(3, 2)).toEqual(1);
      expect(MathBasic.subtract(10, 5)).toEqual(5);
      expect(MathBasic.subtract(50, 32)).toEqual(18);
    });
  });

  describe('C multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrow();
      expect(() => MathBasic.multiply(1)).toThrow();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrow();
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrow();
    });

    it('should throw erroe when given non-number parameters', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrow();
      expect(() => MathBasic.multiply(true, {})).toThrow();
      expect(() => MathBasic.multiply(null, false)).toThrow();
    });

    it('should return a * b when given two number parameters', () => {
      expect(MathBasic.multiply(1, 2)).toEqual(2);
      expect(MathBasic.multiply(5, 8)).toEqual(40);
      expect(MathBasic.multiply(9, 8)).toEqual(72);
    });
  });

  describe('D divide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrow();
      expect(() => MathBasic.divide(1)).toThrow();
      expect(() => MathBasic.divide(1, 2, 3)).toThrow();
      expect(() => MathBasic.divide(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.divide('1', '2')).toThrow();
      expect(() => MathBasic.divide(true, {})).toThrow();
      expect(() => MathBasic.divide(null, false)).toThrow();
    });

    it('should return a / b when given two number parameters', () => {
      expect(MathBasic.divide(8, 4)).toEqual(2);
      expect(MathBasic.divide(18, 2)).toEqual(9);
      expect(MathBasic.divide(21, 7)).toEqual(3);
    });
  });
});
