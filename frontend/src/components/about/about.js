import React from 'react';
import classes from './about.module.css';
import NavBarContainer from '../nav/navbar_container';
import navClasses from '../nav/nav.module.css';
export default class About extends React.Component {
    
    render() {
        return(
            <div class={classes.aboutContainer} >
                <NavBarContainer className={navClasses.navContainer}></NavBarContainer>
                <div className={classes.aboutUs} >
                    <div className={classes.aboutMatt}>
                        <div className={classes.imgDiv}>
                            <img className={classes.aboutPhoto} src="./pics/theDoctor.jpeg"/>
                        </div>
                        <div className={classes.textDiv}>
                            <p className={classes.title}>Matt: Team Leader</p>
                            <p className={classes.description}>
                                Graduated from Santa Clara University with a Mechanical 
                                Engineering Degree. Used my background in Project Management 
                                to lead our team to a smooth project that gave us all a great 
                                programming experience.  I worked on every aspect of the project, 
                                discussing design and problem solutions with each team member to 
                                create a great end product.
                            </p>
                        </div>
                        <div className={classes.icons}>
                            <a href="https://www.linkedin.com/in/mkochalko/" target="_blank" className={navClasses.linkedInIcon}></a>
                            <p className={navClasses.iconName}>Matt</p>
                        </div>
                    </div>
                    <div className={classes.aboutJon} >
                        <div className={classes.icons}>
                            <a href="https://www.linkedin.com/in/jonjonlai/" target="_blank" className={navClasses.linkedInIcon}></a>
                            <p className={navClasses.iconName}>Jon</p>
                        </div>
                        <div className={classes.textDiv}>
                            <p className={classes.title}>Jon: Backend Engineer</p>
                            <p className={classes.description}></p>
                        </div>
                        <div className={classes.imgDiv}>
                            <img className={classes.aboutPhoto} />
                        </div>
                    </div>
                    <div className={classes.aboutKit} >
                        <div className={classes.imgDiv}>
                            <img className={classes.aboutPhoto} />
                        </div>
                        <div className={classes.textDiv}>
                            <p className={classes.title}>Kit: Fullstack Engineer</p>
                            <p className={classes.description}>
                                Kit previously worked as a private network engineer 
                                for high net worth clients before deciding to pursue 
                                his passion in coding. His experience as an engineer 
                                provided great insight on the flow of a project from 
                                start to finish, as shown through his leadership as 
                                the Fullstack engineer. In addition to ensuring a 
                                proper workflow from frontend to backend, Kit also 
                                led the UI/UX design of MusicMD.
                            </p>
                        </div>
                        <div className={classes.icons}>
                            <a href="https://www.linkedin.com/in/ankit-patel-aa5216133/" target="_blank" className={navClasses.linkedInIcon}></a>
                            <p className={navClasses.iconName}>Kit</p>
                        </div>
                    </div>
                    <div className={classes.aboutBarrett} >
                        <div className={classes.icons}>
                            <a href="https://github.com/mkochalko/musicMD" target="_blank" className={navClasses.linkedInIcon}></a>
                            <p className={navClasses.iconName}>Barrett</p>
                        </div>
                        <div className={classes.textDiv}>
                            <p className={classes.title}>Barrett: Frontend Engineer</p>
                            <p className={classes.description}></p>
                        </div>
                        <div className={classes.imgDiv}>
                            <img className={classes.aboutPhoto} />
                        </div>
                    </div>
                    <div className={classes.aboutProject}>
                        <p className={classes.aboutText} >
                                For us, Music MD is more than just an app to showcase our skills.
                            It is the creative expression of our passion for music, and the 
                            demonstration of our belief in live shows as a means to bring
                            people closer and relieve us from the necessary stresses of 
                            everyday life. 
                        </p>
                        <p className={classes.aboutText} >
                                The result of a desire to enhance peoples' concert going 
                            experience, we set out with the goals of providing both easy access 
                            to information on nearby concerts, and the ability to listen to
                            songs from the artists you wish to see. After all, you don't 
                            want to be the static face in the crowd while everyone else sings along!
                        </p>
                        <p className={classes.aboutText} >
                                Ultimately, we had a blast making Music MD. Our team funcioned
                            as a single cohesive unit: a plan was set, responsibilities were delegagted,
                            and, in two short weeks, we built the app you're reading about now!
                            We thought about leaving you with some catchy quote from a famous musician,
                            but we'll let the music do the talking instead.
                        </p>
                        <a href="https://github.com/mkochalko/musicMD" target="_blank" className={navClasses.gitIcon}></a>
                        <p className={navClasses.iconName}>Repo</p>
                    </div>
                </div>
            </div>
            )
        }
}