import { motion, spring, Variants } from "framer-motion"
import anneImg3 from "./assets/images/anneImg3.jpeg"
import anneImg4 from "./assets/images/anneImg4.jpeg"
export default function Coach(){

    const contentAnimate={
        offscreen:{x:10000, opacity:0}, //initial
        onscreen:{ //animated
        x:0, 
        opacity:1,
        transition: {
            duration:1}
      }
    }

    return(
        <motion.section
        id="coach" 
        className="main style2"
        transition={{staggerChildren:0}} //passes the variants variable to the children with delay
        initial= {"offscreen"} 
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.1}} //animation takes place when 0.1 of the parent element is in view and will happen anytime this event takes place
        >
            <motion.div 
                className="content box light"
                variants={contentAnimate}
            >
            <header>
                <h2 id="coachHeading">Coach</h2>
            </header>

            <div className="mainContent">
                <div className="upperContainer">
                <img src={anneImg3} alt="anne modeling" />
                    <div className="textContainer">
                        <p>As an experienced actor and dedicated acting coach, I bring my passion for storytelling to guide and nurture aspiring performers in various realms of the craft. 
                        </p>
                        <p>From musical theatre to voice acting, I offer a comprehensive approach that blends traditional techniques with improvisational skills, equipping students with the tools to excel in both screen and theatrical performances.
                        </p>
                    </div>
                </div>
                <div className="lowerContainer">
                    <div className="textContainer">
                        <p>My coaching philosophy is rooted in fostering authentic and deeply human portrayals, allowing students to discover their unique artistic voices while deepening connection with intuition and natural impluses.</p>
                        <p>Join me on a transformative journey of self-discovery and artistic growth as we unlock the full potential of your acting abilities.
                        </p>
                    </div>
                    <img src={anneImg4} alt="anne modeling" />
                </div>

            </div>
        </motion.div>
    </motion.section>
    )
}