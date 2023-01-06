import './MainPage.scss'; 

const MainPage = () => {
    return (
        <><>
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display|Playfair+Display+SC" rel="stylesheet" />

            <div id="main" >
            <div class="card">
            <div class="mainimg"></div>

            <div class="article" style={{
                fontSize : "2em"
            }}><p>2023</p></div>

        <div class="block">

            <div class="headline">
                <h1 style={{fontWeight :"bold"}}>SEARCH FOR BOOKS </h1>by Busan library </div>
            <div class="para" />
            <p style={{
                marginTop :"2em", fontSize : "1.4em", marginLeft : "-5em"
            }}> 
                <br /> 부산시민을 위한 도서검색서비스입니다.
                <br /> events set in a new-build / years from now, a mess of a place filled / with
                <br /> books and records, our kids thick as thieves / redefining all notions of
                <br /> mischief. <br />
                Perhaps our paths will cross in a city / of seven hills as the light draws
                <br /> your face / out from the bliss of anonymity. / Maybe you’ll be stroking the
                <br /> goose-down nape / of a small child with eyes the exact shade / of those I
                <br /> met across a room at the startof this pain-in-the-heart, this febrile
                <br /> dance. </p>
            </div>     
        </div></div>
        </>
        </>
    );
}
 
export default MainPage;