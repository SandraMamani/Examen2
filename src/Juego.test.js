import IngresarCodigoSecreto from "./Juego.js";
import Juego from "./convertirCodigoSecreto.js";

describe("Juego", () => {
  const jugar = new Juego();

  it("Ingresar el codigo secreto", () => {
    expect(IngresarCodigoSecreto("1234")).toEqual("1234");
  });

  it("Ingresar el codigo secreto no visible", () => {
    expect(jugar.convertirCodigoSecreto("1234")).toEqual("****");
  });

  it("Ingresar el codigo secreto no visible", () => {
    expect(jugar.convertirCodigoSecreto("12345")).toEqual("*****");
  });

  it("Ingresar el codigo secreto no visible", () => {
    expect(jugar.convertirCodigoSecreto("123456")).toEqual("******");
  }); 
});