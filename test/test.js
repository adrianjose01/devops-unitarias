const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // Importa la aplicación

chai.use(chaiHttp);
const expect = chai.expect;

describe("Pruebas de la aplicación web", () => {
  it('Debe devolver un mensaje "¡Hola, mundo!" en la ruta principal', (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("¡Hola, mundo!");
        done();
      });
  });
});
