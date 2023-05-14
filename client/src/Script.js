import { motion, spring, Variants } from "framer-motion"
import anneImg5 from "./assets/images/anneImg5.jpeg"
import anneImg6 from "./assets/images/anneImg6.jpeg"

export default function Script(){

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
        id="script" 
        className="main style2"
        transition={{staggerChildren:0}} //passes the variants variable to the children with delay
        initial= {"offscreen"} 
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.1}} //animation takes place when 0.1 of the parent element is in view and will happen anytime this event takes place
        >
            <motion.div 
                className="content box"
                variants={contentAnimate}
            >
            <header>
                <h2 id="scriptHeading">Script consultancy</h2>
            </header>
            <div className="mainContent">
                <div className="upperContainer">
                <img src={anneImg5} alt="anne modeling" />
                    <div className="textContainer">
                        <p>As an experienced actor and writer of theatrical and screen performances, I bring a unique perspective to script writing consultation,
                        </p>
                        <p>Whether you're in the early stages of concept development or seeking feedback on a completed script my approach to writing seeks to explore the relationships and themes in the field.
                        </p>
                    </div>
                </div>
                <div className="lowerContainer">
                    <div className="textContainer">
                        <p>Together, we will delve into the depths of your narrative, uncovering its true potential and ensuring that every scene captivates and engages viewers.
                        </p>
                        <p>Get in touch and let's discuss how we can shape your script into a powerful and compelling story that reflects and speaks the truth of your creative vision.
                        </p>
                    </div>
                    <img src={anneImg6} alt="anne modeling" />
                </div>

            </div>

        </motion.div>
    </motion.section>
    )
}