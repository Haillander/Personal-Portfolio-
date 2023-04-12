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
                    Hi I'm Haillander an aspiring full-stack web developer based in Sydney, Australia. My journey into tech started at the end of 2022 when I decided to change career. I took the opportunity to reinvent myself and pursue a new and challenging career in web development.
                </p>
                <p>
                    I'm leveraging my Mechanical Engineer background to build a more intuitive user experience on the web.  My newly developed skills in JavaScript, CSS, React.js, and responsive web design. I’m excited to apply my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                </p>
                <p>
                    When I'm not coding I enjoy Traveling, and also spending time with my family and keeping health. 
                </p>
            </div>
        </section>
    );
}

export default About;