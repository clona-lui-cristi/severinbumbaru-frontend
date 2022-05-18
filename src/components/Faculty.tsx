import React from 'react';

interface propsFaculty{
    name: string;
    contact: string;
    conducere: string;
    licenta?: string;
    master?: string;
    doctorat?: string;
}

function Faculty({name, contact, conducere, licenta, master, doctorat}: propsFaculty){
    return (
      <li>
        <div className='name-check'>
          <h4>{name}</h4>
        </div>
        <h3>Contact</h3>
        <span>{contact}</span>
        <h3>Conducere</h3>
        <span>{conducere}</span>
        <h3>Licenta</h3>
        <span>{licenta}</span>
        <h3>Master</h3>
        <span>{master}</span>
        <h3>Doctorat</h3>
        <span>{doctorat}</span>

      </li>
    );
}
export default Faculty;