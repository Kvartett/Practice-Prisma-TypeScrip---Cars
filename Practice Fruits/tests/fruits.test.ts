import app from "../src/index";
import supertest from "supertest";

const server = supertest(app);

describe("GET /fruits", () => {
    it("should respond with status 200 when successful", async () => {
        const result = await server.get("/fruits");
        const status = result.status;
        expect(status).toEqual(200);
    });
});

describe("GET /fruits/:id",  () => {
    it("should respond with status 404 when receive invalid param", async () => {
        const result = await server.get("/fruits/a");
        expect(result.status).toBe(404);
    })
});

describe("POST /fruits", () => {
    it("should respond with status 201 when successful", async () => {
        const body = {
            name: 'Morango',
            price: 10
        };
        const result = await server.post("/fruits").send(body);
        const status = result.status;
        expect(status).toEqual(201);
    });

    it("should respond with status 422 when parameters are incorrect", async () => {
        const body = {
            name: 10,
            price: 10
        };
        const result = await server.post("/fruits").send(body);
        const status = result.status;
        expect(status).toEqual(422);
    });
});