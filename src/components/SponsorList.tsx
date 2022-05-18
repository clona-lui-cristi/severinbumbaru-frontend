import React from 'react'
import Sponsor from './Sponsor';

function SponsorList() {
  return (
    <div className="sponsors">
      <div className="sponsors-header">
        <h1>Sponsors</h1>
        <hr id="sp"></hr>
        <span></span>
        <span></span>
      </div>
      <div className="sponsors-list">
        <ul>
          <Sponsor imagPath={"images/sponsors/1.png"} />
          <Sponsor imagPath={"images/sponsors/2.png"} />
          <Sponsor imagPath={"images/sponsors/3.png"} />
          <Sponsor imagPath={"images/sponsors/4.png"} />
          <Sponsor imagPath={"images/sponsors/5.png"} />
          <Sponsor imagPath={"images/sponsors/6.png"} />
          <Sponsor imagPath={"images/sponsors/7.png"} />
          <Sponsor imagPath={"images/sponsors/8.png"} />
          <Sponsor imagPath={"images/sponsors/9.png"} />
          <Sponsor imagPath={"images/sponsors/10.png"} />
          <Sponsor imagPath={"images/sponsors/11.png"} />
          <Sponsor imagPath={"images/sponsors/12.png"} />
          <Sponsor imagPath={"images/sponsors/13.png"} />
          <Sponsor imagPath={"images/sponsors/14.png"} />
          <Sponsor imagPath={"images/sponsors/15.png"} />
          <Sponsor imagPath={"images/sponsors/16.png"} />
          <Sponsor imagPath={"images/sponsors/17.png"} />
        </ul>
      </div>
    </div>
  );
}

export default SponsorList;