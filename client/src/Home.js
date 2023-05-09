// import fontawesome
// add background video to static files

import backgroundVid from "./assets/images/siteVid.mp4"
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home() {
    return(
		<>
        	<section id="home" className="main style1 dark fullscreen">
			<video autoPlay muted loop id="myVideo" src={backgroundVid} type="video/mp4"></video>
			<div className="backgroundImage"></div>

				<div className="home content">
					<header>
						<h2>Carmina Bernhardt</h2>
					</header>
					<span>
							Award winning actor, writer, director
					</span>
					<span>
						"When you're with me you have every fucking right to jump like a kangaroo"
					</span>
					<ul className="mainLinks">
						<li>
						<HashLink smooth to="/#actor" className="button style2 link">Actor</HashLink>
						</li>
						<li>
						<HashLink smooth to="/#coach" className="button style2 link">Coach</HashLink>
						</li>
						<li>
						<HashLink smooth to="/#mediaTraining" className="button style2 link">Media Training</ HashLink>
						</li>
						<li>
						<HashLink smooth to="/#script" className="button style2 link">Script Consultancy</HashLink>
						</li>
					</ul>
				</div>
			</section>

			<footer className="contactIcon">
				<HashLink smooth to="#contact" className="">
					<FontAwesomeIcon className="contactIcon" icon={icon({name: 'phone-volume', style: 'solid'})} />
				</HashLink>
			</footer>

		</>

	
    )
}