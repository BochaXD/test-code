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
/*     test('Falla/Error: Simulación de error', () => {
    expect(() => {
      throw new Error('Esto es un error simulado');
    }).toThrow('Otro mensaje'); // ❌ falla porque no coincide
  }); */

  test.skip('Omitido: esta prueba fue omitida', () => {
    expect(true).toBe(false); // 🟠 omitido
  });

  test('Desconocido: falla asincrónica sin assert', async () => {
    await new Promise((_, reject) => setTimeout(() => reject('Desconocido'), 10));
  });
  function evaluar(valor) {
  if (valor > 0) return "positivo";
  else if (valor < 0) return "negativo";
  else return "cero";
}
});
