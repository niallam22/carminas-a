
// import backgroundImg from "./assets/images/anneBackgroundImg.jpeg"
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Home() {
    return(
		<>
        	<section id="home" className="main style1 dark fullscreen">
			{/* <video autoPlay muted loop id="myVideo" src={backgroundVid} type="video/mp4"></video> */}
			<div className="backgroundImage"></div>

				<div className="home content">
					<header>
						<h2>Carmina Bernhardt</h2>
					</header>
					<span>
							Award winning actor, writer, director
					</span>
					<span>
						"Acting is a mirror reflecting the depths of our emotions and the truth of our existence."
					</span>
					<ul className="mainLinks">
						<li>
						<HashLink smooth to="/#actor" className="button style2 link">Actor</HashLink>
						</li>
						<li>
						<HashLink smooth to="/#coach" className="button style2 link">Coach</HashLink>
						</li>
						<li>
						<HashLink smooth to="/#script" className="button style2 link">Script Consultant</HashLink>
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