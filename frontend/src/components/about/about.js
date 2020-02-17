import React from 'react';
import classes from './about.module.css';
import NavBarContainer from '../nav/navbar_container';
import navClasses from '../nav/nav.module.css';
export default class About extends React.Component {
    
    render() {
        return (
          <div class={classes.aboutContainer}>
            <NavBarContainer
              className={navClasses.navContainer}
            ></NavBarContainer>
            <div className={classes.aboutUs}>
              <div className={classes.team}>
                  <h1>The Team</h1>
              </div>
              <div className={classes.aboutMatt}>
                <div className={classes.imgDiv}>
                  <img
                    className={classes.aboutPhoto}
                    src="/images/theDoctor.png"
                    alt="Matt"
                  />
                </div>
                <div className={classes.textDiv}>
                  <p className={classes.title}>Matt: Team Leader</p>
                  <p className={classes.description}>
                    Matt graduated from Santa Clara University with a degree in Mechanical
                    Engineering and worked as a Project Manager for two years before learning to code.
                    Using this experience, he guided the team and project through the numerous challenges 
                    of building an app from scratch, yielding nothing short of fantastic programming experience 
                    for each team member. He played a crucial role in all aspects of the project, providing input and direction
                    on design, structure, functionality, bugs, and solutions. His leadership can be seen on every page
                    of MusicMD.
                  </p>
                </div>
                <div className={classes.icons}>
                  <a
                    href="https://github.com/mkochalko"
                    target="_blank"
                    className={classes.iconlink}
                  >
                    <svg className={classes.svg} viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mkochalko/"
                    target="_blank"
                    className={classes.iconlink}
                  >
                    <svg className={classes.svg} viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className={classes.aboutJon}>
                <div className={classes.icons}>
                  <a
                    href="https://github.com/jonjonlai"
                    target="_blank"
                    className={classes.iconlink}
                  >
                    <svg className={classes.svg} viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jonjonlai/"
                    target="_blank"
                    className={classes.iconlink}
                  >
                    <svg className={classes.svg} viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className={classes.textDiv}>
                  <p className={classes.title}>Jon: Backend Engineer</p>
                  <p className={classes.description}>Jon graduated from Yale with 
                    a background in Mechanical Engineering and went on to work in the financial
                    sector in Hong Kong. His diverse background was essential in the design
                    of the backend of MusicMD, as it lead him develop a robust framework 
                    that integrates various APIs into the frontend. Jon also helped design dynamic 
                    react elements that give MusicMD important functionality   </p>
                </div>
                <div className={classes.imgDivleft}>
                  <img
                    className={classes.aboutPhoto}
                    src="/images/GFYB.jpeg"
                    alt="Jom"
                  />
                </div>
              </div>
              <div className={classes.aboutKit}>
                <div className={classes.imgDiv}>
                  <img
                    className={classes.aboutPhoto}
                    src="/images/theDoctor.png"
                    alt="Matt"
                  />
                </div>
                <div className={classes.textDiv}>
                  <p className={classes.title}>Ankit: Fullstack Engineer</p>
                  <p className={classes.description}>
                    Ankit previously worked as a private network engineer for
                    high net worth clients before deciding to pursue his passion
                    in coding. His experience as an engineer provided great
                    insight on the flow of a project from start to finish, as
                    shown through his leadership as the Fullstack engineer. In
                    addition to ensuring a proper workflow from frontend to
                    backend, Ankit also led the UI/UX design of MusicMD.
                  </p>
                </div>
                <div className={classes.icons}>
                  <a
                    href="https://github.com/ankitspatel1145/"
                    target="_blank"
                    className={classes.iconlink}
                  >
                    <svg className={classes.svg} viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ankitspatel1145/"
                    target="_blank"
                    className={classes.iconlink}
                  >
                    <svg className={classes.svg} viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className={classes.aboutBarrett}>
                <div className={classes.icons}>
                  <a
                    href="https://github.com/bhelzel"
                    target="_blank"
                    className={classes.iconlink}
                  >
                    <svg className={classes.svg} viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ankitspatel1145/"
                    target="_blank"
                    className={classes.iconlink}
                  >
                    <svg className={classes.svg} viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <div className={classes.textDiv}>
                  <p className={classes.title}>Barrett: Frontend Engineer</p>
                  <p className={classes.description}>Barrett graduated from the University
                  of Vermont with a degree in Chinese and Religion. With a background in linguistics 
                  and a strong set of skills developed while learning Mandarin, his affinity for language was
                  on full display throughout the project. Despite little to no experience in tech 
                  and engineering, he quickly picked up new programming languages, libraries, and frameworks
                  and easily built the app's frontend. He played an important
                  role in the design and layout of the site and was responsible for all creative
                  and professional writing.
                  </p>
                </div>
                <div className={classes.imgDivleft}>
                  <img
                    className={classes.aboutPhoto}
                    src="/images/theDoctor.png"
                    alt="Matt"
                  />
                </div>
              </div>
              <div className={classes.aboutProject}>
                <p className={classes.aboutTitle}>Our Story</p>
                <p className={classes.aboutText}>
                  For us, Music MD is more than just an app to showcase our
                  skills. It is the creative expression of our passion for
                  music, and the demonstration of our belief in live shows as a
                  means to bring people closer and relieve us from the necessary
                  stresses of everyday life.
                </p>
                <p className={classes.aboutText}>
                  The result of a desire to enhance peoples' concert going
                  experience, we set out with the goals of providing both easy
                  access to information on nearby concerts, and the ability to
                  listen to songs from the artists you wish to see. After all,
                  you don't want to be the static face in the crowd while
                  everyone else sings along!
                </p>
                <p className={classes.aboutText}>
                  Ultimately, we had a blast making Music MD. Our team funcioned
                  as a single cohesive unit: a plan was set, responsibilities
                  were delegagted, and, in two short weeks, we built the app
                  you're reading about now! We thought about leaving you with
                  some catchy quote from a famous musician, but we'll let the
                  music do the talking instead.
                </p>
                <div>
                  <a
                    href="https://github.com/mkochalko/musicMD"
                    target="_blank"
                    className={navClasses.gitIcon}
                  >
                    <img src="/images/github_icon.png" />
                  </a>
                  <p className={navClasses.iconName}>Repo</p>
                </div>
              </div>
            </div>
          </div>
        );
        }
}