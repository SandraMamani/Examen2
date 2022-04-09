import IngresarCodigoSecreto from "./juego.js";

describe("Juego", () => {
  it("Ingresar el codigo secreto", () => {
    expect(IngresarCodigoSecreto("1234")).toEqual("1234");
  });
});
