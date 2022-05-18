import React, { useState } from "react";
import axios from "axios";

function Formular() {
  const [domeniu, setDomeniu] = useState("");
  const [specializare, setSpecializare] = useState("");
  const [prenume_init_t, setPrenumeInitT] = useState("");
  const [nume, setNume] = useState("");
  const [sex, setSex] = useState("");
  const [cnp, setCnp] = useState("");
  const [data_n, setDataN] = useState("");
  const [domiciliu, setDomeciliu] = useState("");
  const [cetatenie, setCetatenie] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [liceu, setLiceu] = useState("");
  const [an_absolvire, setAnAbsolvire] = useState("");
  const [media, setMedia] = useState("");
  const [nr_matricol, setNrMatricol] = useState("");

  const [formulare, setFormulare] = useState<any[]>([]);

  const sendForm = () => {
    axios
      .post("http://localhost:5000/formular", {
        domeniu: domeniu,
        specializare: specializare,
        prenume_init_t: prenume_init_t,
        nume: nume,
        sex: sex,
        cnp: cnp,
        data_n: data_n,
        domiciliu: domiciliu,
        cetatenie: cetatenie,
        telefon: telefon,
        email: email,
        liceu: liceu,
        an_absolvire: an_absolvire,
        media: media,
        nr_matricol: nr_matricol,
      })
      .then((response) => {
        setFormulare(response.data);
        console.log(response.data);
      });
  };

  return (
    <div className="formm">
      <h2>University Enrollment Form</h2>
      <form>
        <div className="first">
          <input
            type="text"
            id="domeniu"
            placeholder="Domeniu"
            required
            onChange={(e) => setDomeniu(e.target.value)}
          />
          <input
            type="text"
            id="specializare"
            placeholder="Specializare"
            required
            onChange={(e) => setSpecializare(e.target.value)}
          />
        </div>
        <div className="second">
          <input
            type="text"
            id="prenume_init_t"
            placeholder="Prenume + Initiala T"
            required
            onChange={(e) => setPrenumeInitT(e.target.value)}
          />
          <input
            type="text"
            id="nume"
            required
            placeholder="Nume"
            onChange={(e) => setNume(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            required
            id="sex"
            placeholder="Sex"
            onChange={(e) => setSex(e.target.value)}
          />
        </div>
        <div className="third">
          <input
            type="number"
            required
            id="cnp"
            placeholder="CNP"
            onChange={(e) => setCnp(e.target.value)}
          />
          <input
            type="date"
            required
            id="data_n"
            placeholder="Data Nasterii"
            onChange={(e) => setDataN(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            required
            id="domiciliu"
            placeholder="Domiciliul"
            onChange={(e) => setDomeciliu(e.target.value)}
          />
        </div>
        <div className="fourth">
          <input
            type="text"
            required
            id="cetatenie"
            placeholder="Cetățenie"
            onChange={(e) => setCetatenie(e.target.value)}
          />
          <input
            type="number"
            required
            id="telefon"
            placeholder="Telefon"
            onChange={(e) => setTelefon(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="fifth">
          <input
            type="text"
            id="liceu"
            required
            placeholder="Liceu"
            onChange={(e) => setLiceu(e.target.value)}
          />
          <input
            type="number"
            required
            id="an_absolvire"
            placeholder="An de absolvire"
            onChange={(e) => setAnAbsolvire(e.target.value)}
          />
        </div>
        <div className="sixth">
          <input
            type="number"
            required
            id="media"
            placeholder="Media"
            step=".01"
            onChange={(e) => setMedia(e.target.value)}
          />
          <input
            type="number"
            required
            id="nr_matricol"
            placeholder="Numar matricol"
            onChange={(e) => setNrMatricol(e.target.value)}
          />
        </div>
        <button onClick={sendForm}>Send Form</button>
      </form>
    </div>
  );
}

export default Formular;
