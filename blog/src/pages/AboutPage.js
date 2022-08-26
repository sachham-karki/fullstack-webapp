import React from "react";
import "./About.css";

const AboutPage = () => (
  <React.Fragment>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sachham's Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/styles.css" />
      </head>

      <body>
        <main>
          {/* <!-- ***********************  ABOUT / PROFILE  *********************** --> */}
          <header>
            <div class="content-wrap">
              <h1 class="fancy">Sachham Karki</h1>
              <h2 class="facny intro">Full-Stack Software Developer</h2>
              <p>
                An Information Technology graduate ‘majoring in Web and Mobile
                application development’ and minoring in ‘Network and Systems
                Computing’. I have experience as a Full Stack Developer along
                with planning, designing, programming, hosting, version control
                and testing by using cutting edge tools. I enjoy all aspects of
                software development with the end goal becoming a Full Stack
                Developer.
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/sachham-karki/"
                  target="_blank"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </header>

          {/* <!--    <p>Add 2<sup>nd</sup> paragraph if you need.</p> */}
          {/* ---------------- PROJECTS / PORTFOLIO  ---------------- --> */}

          <section class="project">
            <div class="content-wrap divider">
              <h2>Featured Project</h2>
              <section class="project-item">
                <img src="img/github.png" />
                <h3>My GitHub Info</h3>
                <p>
                  This is my HTML and CSS portfolio. I have more projects on my
                  GitHub. Feel free to visit my .
                </p>
                <p>
                  <a
                    href="https://github.com/sachham-karki?tab=repositories"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </p>
              </section>

              {/* <!-- id="project" --> */}

              <section class="project-item">
                <img src="img/webapp.png" alt="description of image" />
                <h3>Restaurent Web App</h3>
                <p>
                  Please click this button to view my project related video.
                </p>
                <a href="#project-video">Project</a>
              </section>
            </div>
            {/* <!-- End of Project block. --> */}
          </section>
          {/* <!-- ***********************  WORK EXPERIENCE  *********************** --> */}
          <section class="work">
            <div class="content-wrap item-details divider">
              <h2>Work Experience</h2>

              <section class="job-item">
                <div class="job-details divider">
                  <h3>Full-Stack Software Developer</h3>
                  <p>Labax Nominees PTY Ltd (Freelance)</p>
                  <p>Apr 2022 – August 2022</p>
                </div>
                <div class="job-summery">
                  <ul>
                    <li>Developing front-end and UX/UI designing</li>
                    <li>Designing the backend of the application</li>
                    <li>Creating databases and servers</li>
                    <li>Creating SEO (Search Engine Optimization)</li>
                    <li>Ensuring Cross Platform compatibility</li>
                    <li>
                      Writing Terms and Condition & Private Policy Documents
                    </li>
                    <li>
                      Analysing & meet all technical and consumer requirements
                    </li>
                  </ul>
                </div>
              </section>

              <section class="job-item">
                <div class="job-details">
                  <h3>Full-Stack Software Developel</h3>
                  <p>NJM Group (Internship)</p>
                  <p>June 2020 – December 2020</p>
                </div>
                <div job="job-summery">
                  <ul>
                    <li>Designed responsive and mobile design websites.</li>
                    <li>Maintained existing websites</li>
                    <li>
                      Designed software tools and sub modules to support
                      software reuse domain analyses.
                    </li>
                    <li>
                      Responsible for running tests, debugging, and refining the
                      computer software.
                    </li>
                    <li>
                      Enhanced software application to reduce operating time to
                      improve efficiency.
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </section>

          {/* <!-- --------------------Education-------------------- --> */}
          <section class="education">
            <div class="content-wrap item-details">
              <h2>Education</h2>
              <section>
                <h3>Victoria University</h3>
                <p>
                  Bachelor Of Information Technology,
                  <br />
                  Major - Web and Mobile Application development
                  <br />
                  Minor - Network and System Computing,
                  <br />
                  2020-2022
                </p>
              </section>

              <section>
                <h3>Victoria University</h3>
                <p>
                  Diploma Of Information Technology,
                  <br />
                  2019-2020
                </p>
              </section>
            </div>
          </section>
          {/* <!-- --------------  CONTACT INFO / SOCIAL MEDIA  -------------- --> */}

          <footer>
            <div class="content-wrap">
              <h2>Let's Keep in Touch!</h2>
              <ul class="contact">
                <li>
                  <a href="mailto:sachhamkarki999@gmail.com">
                    sachhamkarki999@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sachham-karki/"
                    target="_blank"
                  >
                    Sachham's LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sachham-karki" target="_blank">
                    Sachham's GitHub
                  </a>
                </li>
              </ul>
              <div id="project-video">
                <video width="80%" height="150" controls loop>
                  <source src="img/myVideo.mp4" type="video/mp4" />
                  <track
                    src="img/video_subtitle.vtt"
                    kind="captions"
                    label="EnGlish"
                    srclang="en"
                    default
                  />
                </video>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  </React.Fragment>
);

export default AboutPage;
