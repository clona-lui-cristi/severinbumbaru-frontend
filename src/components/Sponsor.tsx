import React from 'react'

interface propsSponsor{
    imagPath: string;
}


function Sponsor({imagPath}: propsSponsor) {
  return (
    <li>
        <img src={imagPath} alt="sponsor" />
    </li>
  );
}

export default Sponsor;