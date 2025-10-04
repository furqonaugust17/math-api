const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTTP Server', () => {
    describe('when GET /add/{a}/{b}', () => {
        it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
            const a = 10;
            const b = 20;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const server = createServer({ mathBasic: MathBasic });

            const response = await server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30);
            expect(spyAdd).toHaveBeenCalledWith(a, b);
        });
    });

    describe('when GET /subtract/{a}/{b}', () => {
        it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
            const a = 12;
            const b = 8;
            const spySubtract = jest.spyOn(MathBasic, 'subtract');
            const server = createServer({ mathBasic: MathBasic });

            const response = await server.inject({
                method: 'GET',
                url: `/subtract/${a}/${b}`
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(4);
            expect(spySubtract).toHaveBeenCalledWith(a, b);
        });
    });


    describe('when GET /multiply/{a}/{b}', () => {
        it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
            const a = 12;
            const b = 5;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const server = createServer({ mathBasic: MathBasic });

            const response = await server.inject({
                method: 'GET',
                url: `/multiply/${a}/${b}`
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(60);
            expect(spyMultiply).toHaveBeenCalledWith(a, b);
        });
    });

    describe('when GET /divide/{a}/{b}', () => {
        it('should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
            const a = 21;
            const b = 3;
            const spyDivide = jest.spyOn(MathBasic, 'divide');
            const server = createServer({ mathBasic: MathBasic });

            const response = await server.inject({
                method: 'GET',
                url: `/divide/${a}/${b}`
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(7);
            expect(spyDivide).toHaveBeenCalledWith(a, b);
        });
    });

    describe('when GET /rectangle/perimeter/{length}/{width}', () => {
        it('should respond with a status code of 200 and the payload value is rectangle perimeter result of length and width correctly', async () => {
            const length = 10;
            const width = 15;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
            const server = createServer({ figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${length}/${width}`
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(50);
            expect(spyCalculateRectanglePerimeter).toHaveBeenCalledWith(length, width);
        });
    });

    describe('when GET /rectangle/area/{length}/{width}', () => {
        it('should respond with a status code of 200 and the payload value is rectangle area result of length and width correctly', async () => {
            const length = 10;
            const width = 15;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
            const server = createServer({ figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/area/${length}/${width}`
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(150);
            expect(spyCalculateRectangleArea).toHaveBeenCalledWith(length, width);
        });
    });

    describe('when GET /triangle/perimeter/{sideA}/{sideB}/{base}', () => {
        it('should respond with a status code of 200 and the payload value is triangle perimeter result of sideA, sideB, Base correctly', async () => {
            const sideA = 10;
            const sideB = 10;
            const base = 15;
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
            const server = createServer({ figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/triangle/perimeter/${sideA}/${sideB}/${base}`
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(35);
            expect(spyCalculateTrianglePerimeter).toHaveBeenCalledWith(sideA, sideB, base);
        });
    });

    describe('when GET /triangle/area/{base}/{height}', () => {
        it('should respond with a status code of 200 and the payload value is triangle area result of base and height correctly', async () => {
            const base = 15;
            const height = 8
            const figureCalculator = new FigureCalculator(MathBasic);
            const spyCalculateTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
            const server = createServer({ figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/triangle/area/${base}/${height}`
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(60);
            expect(spyCalculateTriangleArea).toHaveBeenCalledWith(base, height);
        });
    });
});