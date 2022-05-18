import React, { useState } from 'react'
import axios from 'axios';

function Formular() {
    const[domeniu, setDomeniu] = useState("");
    const[specializare, setSpecializare] = useState("");
    const[prenume_init_t, setPrenumeInitT] = useState("");
    const[nume, setNume] = useState("");
    const[sex, setSex] = useState("");
    const[cnp, setCnp] = useState("");
    const[data_n, setDataN] = useState("");
    const[domiciliu, setDomeciliu] = useState("");
    const[cetatenie, setCetatenie] = useState("");
    const[telefon, setTelefon] = useState("");
    const[email, setEmail] = useState("");
    const[liceu, setLiceu] = useState("");
    const[an_absolvire, setAnAbsolvire] = useState("");
    const[media, setMedia] = useState("");
    const[nr_matricol, setNrMatricol] = useState("");

    const[formulare, setFormulare] = useState<any[]>([]);


    const sendForm = () => {
        axios.post("http://localhost:5000/formular", {
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
            nr_matricol: nr_matricol
        }).then((response) =>{
            setFormulare(response.data);
            console.log(response.data);
        });
    };

  return (
    <form>
      <input
        type="text"
        id="domeniu"
        placeholder="domeniu"
        onChange={(e) => setDomeniu(e.target.value)}
      />
      <input
        type="text"
        id="specializare"
        placeholder="specializare"
        onChange={(e) => setSpecializare(e.target.value)}
      />
      <input
        type="text"
        id="prenume_init_t"
        placeholder="prenume"
        onChange={(e) => setPrenumeInitT(e.target.value)}
      />
      <input
        type="text"
        id="nume"
        placeholder="nume"
        onChange={(e) => setNume(e.target.value)}
      />
      <input
        type="text"
        id="sex"
        placeholder="sex"
        onChange={(e) => setSex(e.target.value)}
      />
      <input
        type="number"
        id="cnp"
        placeholder="cnp"
        onChange={(e) => setCnp(e.target.value)}
      />
      <input
        type="date"
        id="data_n"
        placeholder="data nasterii"
        onChange={(e) => setDataN(e.target.value)}
      />
      <input
        type="text"
        id="domiciliu"
        placeholder="domiciliu"
        onChange={(e) => setDomeciliu(e.target.value)}
      />
      <input
        type="text"
        id="cetatenie"
        placeholder="cetatenie"
        onChange={(e) => setCetatenie(e.target.value)}
      />
      <input
        type="number"
        id="telefon"
        placeholder="telefon"
        onChange={(e) => setTelefon(e.target.value)}
      />
      <input
        type="email"
        id="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        id="liceu"
        placeholder="liceu"
        onChange={(e) => setLiceu(e.target.value)}
      />
      <input
        type="number"
        id="an_absolvire"
        placeholder="an absolvire"
        onChange={(e) => setAnAbsolvire(e.target.value)}
      />
      <input
        type="number"
        id="media"
        placeholder="media"
        step='.01'
        onChange={(e) => setMedia(e.target.value)}
      />
      <input
        type="number"
        id="nr_matricol"
        placeholder="nr matricol"
        onChange={(e) => setNrMatricol(e.target.value)}
      />
      <input type="submit" value="Submit" onClick={sendForm}/>
    </form>
  );
}

export default Formular;