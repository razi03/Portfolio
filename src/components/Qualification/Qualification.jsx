import React, { useState } from 'react';
import "./Qualification.css";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        {/* Tabs for switching */}
        <div className="qualification__tabs">
        <div
            className={`qualification__button button--flex ${activeTab === 2 ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
          </div>

          <div
            className={`qualification__button button--flex ${activeTab === 1 ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i> Education
          </div>

          <div
            className={`qualification__button button--flex ${activeTab === 3 ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab(3)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i> Certifications
          </div>
        </div>

        {/* Sections for displaying content */}
        <div className="qualification__sections">
          {/* Experience Section */}
          <div className={`qualification__content ${activeTab === 2 ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer || Automations Expert</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://www.upwork.com" target="_blank" rel="noopener noreferrer">Upwork</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> May 2024 - Present
                </div>
              </div>
              <div className="qualification__divider">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>
                <div className="qualification__divider">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Front-End Developer Intern</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://www.nti.org/education-center/facilities/national-engineering-and-scientific-commission-nescom/" target="_blank" rel="noopener noreferrer">NESCOM</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> 2024 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Junior Web Developer Intern</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://nicat.pk" target="_blank" rel="noopener noreferrer">NICAT</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> 2023 - 2023
                </div>
              </div>
              <div className="qualification__divider">
                <span className="qualification__rounder-right"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>
                <div className="qualification__divider">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Development Intern</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://internee.pk/" target="_blank" rel="noopener noreferrer">Internee.pk</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> 2024 - 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Customer Sales representative</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://eraconbpo.com/" target="_blank" rel="noopener noreferrer">Eracon Technologies</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> 2022 - 2022
                </div>
              </div>
              <div className="qualification__divider">
                <span className="qualification__rounder-right"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>
                <div className="qualification__divider">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Development Intern</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://eziline.com/" target="_blank" rel="noopener noreferrer">Eziline Software House</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> 2022 - 2022
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className={`qualification__content ${activeTab === 1 ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Science in Computer Science (BSCS)</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://case.edu.pk" target="_blank" rel="noopener noreferrer">Sir Syed CASE IT - Islamabad</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> 2021-09 - Present
                </div>
              </div>
              <div className="qualification__divider">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div className="qualification__divider">
                <span className="qualification__rounder-right"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">HSSC (Intermediate): Engineering</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://harvard.edu.pk" target="_blank" rel="noopener noreferrer">Harvard College of Commerce And Sciences - Rawalpindi</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> 2019-08 - 2021-07
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (Matric): Science</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="#" target="_blank" rel="noopener noreferrer">Emalah School And College - Rawalpindi</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> 2016-08 - 2018-04
                </div>
              </div>
              <div className="qualification__divider">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className={`qualification__content ${activeTab === 3 ? 'qualification__content-active' : ''}`}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IBM Certified Javascript Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  <a className="qualification__link" href="https://coursera.org/share/d8208ddf9820a96f41c42470016e761b" target="_blank" rel="noopener noreferrer">Coursera</a>
                </span>
                <div className="qualification__calendar">
                  <i className='uil uil-calendar-alt'></i> June 2024
                </div>
              </div>
              <div className="qualification__divider">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
