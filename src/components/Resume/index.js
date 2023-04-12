import React from 'react';
import { 
	FaGitAlt, 
	FaGithub, 
	FaHtml5, 
	FaCss3Alt, 
	FaJsSquare, 
	FaBootstrap, 
	FaNode, FaReact, 
	FaNpm, 
	FaCloudDownloadAlt 
} 
from "react-icons/fa";
import { SiHeroku, SiGraphql, SiMysql, } from "react-icons/si";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import myResume from '../../assets/files/Resume-Haillander.pdf';
import { Col, Row } from 'react-bootstrap';

function Resume() {
    return (
        <section>
            <div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="center">
				<a href={myResume} download>
					<h4>Download <FaCloudDownloadAlt /></h4>
				</a>
			</div>
            <Row>
			<Col>
				<h5>Developer Proficiencies</h5>
				<ol>
					<li>Git <FaGitAlt /></li>
					<li>GitHub <FaGithub /></li>
					<li>Heroku <SiHeroku /></li>
				</ol>
				<br></br>
            </Col>
            <Col>
				<h5>Front-End Proficiencies</h5>
				<ol>
					<li>HTML5 <FaHtml5 /></li>
					<li>CSS3 <FaCss3Alt /></li>
					<li>JavaScript <FaJsSquare /></li>
					<li>jQuery <DiJqueryLogo /></li>
					<li>Reactjs <FaReact /></li>
					<li>Bootstrap <FaBootstrap /></li>
				</ol>
				<br></br>
            </Col>
            <Col>
				<h5>Back-End Proficiencies</h5>
				<ol>
                    <li>Nodejs  <FaNode /></li>
					<li>Expressjs <FaNpm /></li>
					<li>MySQL <SiMysql /></li>
					<li>Sequelize</li>
                    <li>MongoDB  <DiMongodb /></li>
					<li>Mongoose</li>
                    <li>GraphQL <SiGraphql /></li>
                    <li>APIs</li>
					<li>MVC</li>
					<li>PWA</li>
				</ol>
            </Col>
            </Row>
		</section>
    );
}

export default Resume;