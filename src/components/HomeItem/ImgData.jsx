import './index.scss';
const ImgData = ({url, opacity, parallaxPos}) => {
    return (
        <img src={require(`../../asset/mbti/${url}`) }
            style={{
                opacity,
                transform : `traslated3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px)`
            }}></img>
    );
}
 
export default ImgData;