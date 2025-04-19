import { ParallaxLayer } from "@react-spring/parallax";
import './ResumeComponent.css'

const ResumeComponent = ({ offset, image, title, children }) => {
  return (
    <div>
      <ParallaxLayer speed={0} offset={offset - 0.5}>
        <img className="main-content" src={image} alt={title || "Resume section"} />
        <div className="overlay" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.25} offset={offset}>
        <div style={{height: '100%'}}>
            <div style={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><p className="title">{title}</p></div>
            <div style={{height: '75%'}}>
                {children}
            </div>
            {/* <div style={{}}>
            {children}

            </div> */}
        </div>
      </ParallaxLayer>
    </div>
  );
};

export default ResumeComponent;
