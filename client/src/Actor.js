import { motion, spring, Variants } from "framer-motion"
import anneImg from "./assets/images/anneImg.jpeg"
import anneImg2 from "./assets/images/anneImg2.jpeg"

export default function Actor(props){

    // const {  bool, contentAnimate } = props;
    // console.log(`actor.js bool ${bool}`)
    // console.log(`actor.js contentAnimate: ${contentAnimate}`);
    // console.log(`actor.js contentAnimateStr: ${JSON.stringify(contentAnimate)}`);


    const contentAnimate={
        offscreen:{x:10000, opacity:0}, //initial
        onscreen:{ //animated
        x:0, 
        opacity:1,
        // rotate:[0,10,0,10,0,10,0], //rotate from 0 to 10 to 0
        transition: {
            // type:"spring",
            // bounce:0.1,
            duration:1}
      }
    }


    return (
        <motion.section
        id="actor" 
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
                        <h2 id="actorHeading">Actor</h2>
                    </header>

                <div className="mainContent">
                   <div className="upperContainer">
                        <img src={anneImg} alt="Meisner" />
                        <div className="textContainer">
                          <p>I am an experienced actor specializing in both theatrical and screen performances, deeply connecting with the characters I portray to bring their stories to life from my own unique perspective. 
                            </p>
                            <p>With a foundation in traditional acting from my training at the New York Film School, combined with personal experiences, I create authentic and profoundly human performances that aim to transport audiences and explore the complexities of the human condition. 
                            </p>
                        </div>
                    </div>
                    <div className="lowerContainer">
                        <div className="textContainer">
                            <p>Each role I take on becomes an opportunity for self-discovery and a chance to explore the complexities of the human condition.
                            </p>
                            <p>Explore my portfolio to witness over 15 years of dedicated passion, joining me on an artistic journey of compelling storytelling and a shared exploration of what it means to be human.
                            </p>
                        </div>
                        <img src={anneImg2} alt="Meisner" />
                    </div>

                </div>
        
            </motion.div>
    </motion.section>
    )
}