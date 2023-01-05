import ImgData from "./ImgData";
import Title from "./Title";
import './index.scss';

const Index = ({project, itemIndex}) => {
    return (
        <li className="project-item-container">
            <Title title={project.title}/>
            <ImgData url={project.url}/>


            <div className="info-block">
                <p className="info-block-header">
                    <span> 
                        0{itemIndex}
                    </span>
                </p>
            </div>

            {project.info.map((element) => (
                <p key={element}><span>{element}</span></p>
            ))}
        </li>
    );
}
 
export default Index;