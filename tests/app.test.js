// tests/app.test.js
const request = require("supertest");
const app = require("../src/app");

describe("API Endpoints", () => {
  it("GET /hello should return Hello World!", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello World!");
  });

  it("POST /sum should return correct sum", async () => {
    const res = await request(app).post("/sum").send({ a: 5, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  it("POST /sum with invalid data should return 400", async () => {
    const res = await request(app).post("/sum").send({ a: "x", b: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Invalid input");
  });

  test.skip('Omitido: esta prueba fue omitida', () => {
    expect(true).toBe(false); // 🟠 omitido
  });

  function evaluar(valor) {
  if (valor > 0) return "positivo";
  else if (valor < 0) return "negativo";
  else return "cero";
}

  
test('positivo', () => expect(evaluar(5)).toBe("positivo"));
test('negativo', () => expect(evaluar(-3)).toBe("negativo"));
test('cero', () => expect(evaluar(0)).toBe("cero"));
  
});
