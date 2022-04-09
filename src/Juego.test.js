import IngresarCodigoSecreto from "./juego.js";
import convertirCodigoSecreto from "./convertirCodigoSecreto.js";

describe("Juego", () => {
  it("Ingresar el codigo secreto", () => {
    expect(IngresarCodigoSecreto("1234")).toEqual("1234");
  });

  it("Ingresar el codigo secreto no visible", () => {
    expect(convertirCodigoSecreto("1234")).toEqual("****");
  });
});
