import './index.scss';
const ImgData = ({url, opacity, parallaxPos, scale, rotationPosition}) => {
    return (
        <img src={require(`../../asset/mbti/${url}`) }
            style={{
                width : "13em", 
                height : "18em",
                position : "absolute",
                top : "3em",
                right : "10em",
                opacity,
                transform : `traslated3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) rotate(${rotationPosition}) scale(${scale})`
            }}></img>
    );
}
 
export default ImgData;