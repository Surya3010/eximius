import ProjectStyles from "../styles/projects.module.css";

import Image from "next/image";
import BackgroundAnimation from "./Background";
import BackgroundAnimation2 from "./Background2";
import { projectContent } from "../constants/constants";

const Projects = () => {

  return (
    <div className={ProjectStyles.project}>
      <h1>Projects</h1>

      <div className={ProjectStyles.cardgroup}>
        {projectContent.map((content)=>{return(<div className="card card1">
          <Image
            src={content?.imgUrl}
            alt="Picture of the Events"
            width={500}
            height={300}
          />
          <h1 style={{fontSize:'2rem'}}>{content?.cardTitle}</h1>
          <hr />
          {/* <p style={{textAlign:'justify'}}>
          {content?.cardContent}
          </p> */}

          <div className={ProjectStyles.buttongroup}>
            <button style={{padding:'10px',width:'auto'}}>{content?.buttonTxt}</button>
          </div>
        </div>)})}
      </div>
      <BackgroundAnimation />
      <BackgroundAnimation2 />
    </div>
  );
};

export default Projects;
