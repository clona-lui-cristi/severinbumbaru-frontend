import React from "react";
import Faculty from "./Faculty";

function FacultyList() {
  return (
    <div className="faculties">
      <div className="faculties-header">
        <h1>Faculties</h1>
        <hr id="fc"></hr>
        <span></span>
        <span></span>
      </div>
      <div className="faculties-list">
        <ul>
          <Faculty
            name="Facultatea de Inginerie"
            contact="secretar.ing@ugal.ro & 0336130208"
            conducere="Prof. dr. ing. Elena SCUTELNICU"
            licenta="Inginerie mecanică"
            master="Inginerie industrială"
            doctorat="Inginerie mecanică/industrială"
          />
          <Faculty
            name="Facultatea de Arhitectura Navala"
            contact="secretar.naoe@ugal.ro & 0336130230"
            conducere="Conf. dr. ing. Gabriel POPESCU"
            licenta="Arhitectura navală"
            master="Arhitectura navală"
            doctorat="Inginerie mecanică"
          />
          <Faculty
            name="Facultatea de Medicina si Farmacie"
            contact="secretar.med@ugal.ro & 0336130217"
            conducere="Prof. univ. dr. Mădălina Nicoleta MATEI"
            licenta="Sănătate"
          />
          <Faculty
            name="Facultatea de Litere"
            contact="secretar.lt@ugal.ro & 0336130200"
            conducere="Prof. dr. Simona ANTOFI"
            licenta="Limbă şi literatură"
            master="Filologie"
            doctorat="Filologie"
          />
          <Faculty
            name="Facultatea de Automatica si Calculatoare"
            contact="secretar.aciee@ugal.ro & 0336130236"
            conducere="Prof. dr. ing. Marian BARBU"
            licenta="Ingineria sistemelor"
            master="Ingineria sistemelor"
            doctorat="Calculatoare și tehnologia informației"
          />
        </ul>
      </div>
    </div>
  );
}

export default FacultyList;
