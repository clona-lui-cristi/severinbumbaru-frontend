import React from 'react';
import './App.scss';
import './Responsive.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content1">
          <div className="logo-name">
            <img src="logo.png" alt="logo" className="responsive-img" />

            <h1>Name of the faculty</h1>

            <span></span>
          </div>

          <div className="text-photo">
            <div className="unu">
              <div className="text">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vel risus dignissim mauris consectetur cursus nec
                  vitae lectus. Maecenas quis nisl et nulla dapibus lacinia sit
                  amet eu quam. Sed consectetur iaculis neque sed interdum.
                  Quisque eget metus quis ligula porttitor viverra. Integer
                  euismod metus massa, vel dapibus nisl pretium sit amet.
                  Maecenas blandit blandit velit, eget dictum lacus sagittis
                  quis. Nam nec turpis vehicula, aliquam sapien eu, ullamcorper
                  magna. Donec volutpat molestie lorem, ut maximus enim eleifend
                  id. Duis dapibus sem porttitor, congue turpis eu, eleifend
                  dolor.
                </h3>
              </div>
              <div className="photo"></div>
            </div>
            <div className="doi">
              <div className="text">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vel risus dignissim mauris consectetur cursus nec
                  vitae lectus. Maecenas quis nisl et nulla dapibus lacinia sit
                  amet eu quam. Sed consectetur iaculis neque sed interdum.
                  Quisque eget metus quis ligula porttitor viverra. Integer
                  euismod metus massa, vel dapibus nisl pretium sit amet.
                  Maecenas blandit blandit velit, eget dictum lacus sagittis
                  quis. Nam nec turpis vehicula, aliquam sapien eu, ullamcorper
                  magna. Donec volutpat molestie lorem, ut maximus enim eleifend
                  id. Duis dapibus sem porttitor, congue turpis eu, eleifend
                  dolor.
                </h3>
              </div>
              <div className="photo"></div>
            </div>
            <div className="unu">
              <div className="text">
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vel risus dignissim mauris consectetur cursus nec
                  vitae lectus. Maecenas quis nisl et nulla dapibus lacinia sit
                  amet eu quam. Sed consectetur iaculis neque sed interdum.
                  Quisque eget metus quis ligula porttitor viverra. Integer
                  euismod metus massa, vel dapibus nisl pretium sit amet.
                  Maecenas blandit blandit velit, eget dictum lacus sagittis
                  quis. Nam nec turpis vehicula, aliquam sapien eu, ullamcorper
                  magna. Donec volutpat molestie lorem, ut maximus enim eleifend
                  id. Duis dapibus sem porttitor, congue turpis eu, eleifend
                  dolor.
                </h3>
              </div>
              <div className="photo"></div>
            </div>
          </div>
        </div>
        <div className="content2">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </div>

      <hr></hr>
      <div className="prof-header">
        <h1>Professors</h1>
        <h3>That keep making new generations</h3>
      </div>

      <div className="professors">
        <div className="professor">
          <div className="professor-photo"></div>
          <div className="professor-name">
            <h3>Dr. ing. Stoica Vasiliu</h3>
          </div>
          <div className="professor-faculty">
            <h3>Faculty of Computer Science</h3>
          </div>
        </div>
        <div className="professor">
          <div className="professor-photo"></div>
          <div className="professor-name">
            <h3>Dr. ing. Stoica Vasiliu</h3>
          </div>
          <div className="professor-faculty">
            <h3>Faculty of Computer Science</h3>
          </div>
        </div>
        <div className="professor">
          <div className="professor-photo"></div>
          <div className="professor-name">
            <h3>Dr. ing. Stoica Vasiliu</h3>
          </div>
          <div className="professor-faculty">
            <h3>Faculty of Computer Science</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
