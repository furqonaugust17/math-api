const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parametes', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrow();
    });

    it('should throw error when given with non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrow();
      expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrow();
    });

    it('should return correct value based on rectangle perimeter formula', () => {
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      expect(result).toEqual(60); // 2 x (length + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 30); // 2 x (length + width)
    });
  });

  describe('B calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrow();
      expect(() => figureCalculator.calculateRectangleArea(null, '2')).toThrow();
      expect(() => figureCalculator.calculateRectangleArea([], {})).toThrow();
    });

    it('should return correct value based on rectangle area formula', () => {
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateRectangleArea(length, width);

      expect(result).toEqual(200); // length * width
      expect(spyMultiply).toHaveBeenCalledWith(length, width); // length * width
    });
  });

  describe('C calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter(true, {})).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter(null, '2')).toThrow();
      expect(() => figureCalculator.calculateTrianglePerimeter([], {})).toThrow();
    });

    it('should return correct value based on triangle perimeter formula', () => {
      const sideA = 20;
      const sideB = 20;
      const base = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

      expect(result).toEqual(50); // (sideA + sideB) + base
      expect(spyAdd).toHaveBeenCalledWith(40, 10); // (sideA + sideB) + base
    });
  });

  describe('D calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrow();
    });

    it('should throw error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrow();
      expect(() => figureCalculator.calculateTriangleArea(null, '')).toThrow();
      expect(() => figureCalculator.calculateTriangleArea([], {})).toThrow();
    });

    it('should return correct value base on triangle area formula', () => {
      const base = 10;
      const height = 8;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateTriangleArea(base, height);

      expect(result).toEqual(40); // (base * height) / 2
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith(80, 2); // (base * height) / 2
    });
  });
});
