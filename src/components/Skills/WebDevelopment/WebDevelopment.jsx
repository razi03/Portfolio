import React from 'react';
import './WebDevelopment.css';

const WebDevelopment = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Web Development</h3>
      <div className="skills__box">
        <div className="skills__group">
          <h4 className="skills__subtitle">Frontend</h4>
          <div className="skills__limited">
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">Tailwind CSS</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data"> {/* This will move to the second column */}
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skills__separator"></div> {/* Separator Line */}

        <div className="skills__group">
          <h4 className="skills__subtitle">Backend</h4>
          <div className="skills__limited">
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className="skills__name">SQL</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevelopment;
