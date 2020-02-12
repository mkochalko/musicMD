import React from 'react';

export default class About extends React.Component {
    
    render() {
        return(
            <div className={classes.aboutUs}>
                <div className={classes.aboutMe}>
                    <img />
                    <p className={classes.title}>Matt: Team Leader</p>
                    <p className={classes.description}></p>
                    <div className={classes.icons}></div>
                </div>
                <div className={classes.aboutMe}>
                    <img />
                    <p className={classes.title}>Jon: Backend Engineer</p>
                    <p className={classes.description}></p>
                    <div className={classes.icons}></div>
                </div>
                <div className={classes.aboutMe}>
                    <img />
                    <p className={classes.title}>Kit: Fullstack Engineer</p>
                    <p className={classes.description}></p>
                    <div className={classes.icons}></div>
                </div>
                <div className={classes.aboutMe}>
                    <img />
                    <p className={classes.title}>Barrett: Frontend Engineer</p>
                    <p className={classes.description}></p>
                    <div className={classes.icons}></div>
                </div>
                <div className={classes.aboutProject}>Blurb about the Project</div>
            </div>
        )
    }
}