import React from 'react';
import ProfilePic from '../../assets/images/profile photo.jpeg';

function About() {
    return (
        <section>
            <div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
            <div className="center">
				<img
					src={ProfilePic}
					alt="about-me"
					className="photo"
				/>
			</div>
            <div className="about-me">
                <p>
                Hi I'm Haillander, Making an intentional career move into Software Development leveraging background in Mechanical Engineer
                </p>
                <p>
                I have developed skills how machines and systems works and gain an Analytical Skills to solve complex problems. 
                Studying Full Stack Web Development at The University of Sydney Coding Boot Camp.
                </p>
                <p>
                innovative problem-solver who is passionate for Front-End Development as it satisfies my need for creativity and allows me 
                to easily put my ideas into digital form and get results back quick. Strengths in communication, leadership, teamwork, project management.

                </p>
            </div>
        </section>
    );
}

export default About;