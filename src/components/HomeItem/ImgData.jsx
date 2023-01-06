import './index.scss';
const ImgData = ({url, opacity, parallaxPos, scale}) => {
    return (
        <img src={require(`../../asset/mbti/${url}`) }
            style={{
                opacity,
                transform : `traslated3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) scale(${scale})`
            }}></img>
    );
}
 
export default ImgData;