// import './css/BusanMap.css';

// useRef 사용
const BusanMap = () => {
    
    const BusanArea = [
        {
            id : 1,
            img : "map011.png",
            areaName : "기장군"
        },
        {
            id : 2,
            img : "map021.png",
            areaName : "금정구"
        },
        {
            id : 3,
            img : "map031.png",
            areaName : "해운대구"
        },
        {
            id : 4,
            img : "map041.png",
            areaName : "동래구"
        },
        {
            id : 5,
            img : "map051.png",
            areaName : "연제구"
        },
        {
            id : 6,
            img : "map061.png",
            areaName : "수영구"
        },
        {
            id : 7,
            img : "map071.png",
            areaName : "북구"
        },
        {
            id : 8,
            img : "map081.png",
            areaName : "부산진구"
        },
        // {
        //     id : 9,
        //     img : "map091.png",
        //     areaName : "남구"
        // },
        {
            id : 11,
            img : "map101.png",
            areaName : "동구"
        },
        {
            id : 11,
            img : "map111.png",
            areaName : "금정구"
        },
        {
            id : 12,
            img : "map121.png",
            areaName : "금정구"
        },
        {
            id : 13,
            img : "map131.png",
            areaName : "사하구"
        },
        {
            id : 14,
            img : "map141.png",
            areaName : "서구"
        },
        {
            id : 15,
            img : "map151.png",
            areaName : "중구"
        },
        {
            id : 16,
            img : "map161.png",
            areaName : "영도구"
        }
    ]

    return (
        <> 
        <div class="main5">
        <div class="section">
				<div class="innerLeft">
					<div class="title">
						<h3>
							<b>도서관 안내</b> <br/>
							찾으시는 지역을 선택해주세요
						</h3>
					</div>
					<div class="map web-view">
						<span class="mp1"><a href="#mp1on" class="mp1on">기장군</a></span>
						<div class="mapBg1"></div>
						<span class="mp2"><a href="#mp2on" class="mp2on">금정구</a></span>
						<div class="mapBg2"></div>
						<span class="mp3"><a href="#mp3on" class="mp3on">해운대구</a></span>
						<div class="mapBg3"></div>
						<span class="mp4"><a href="#mp4on" class="mp4on">동래구</a></span>
						<div class="mapBg4"></div>
						<span class="mp5"><a href="#mp5on" class="mp5on">연제구</a></span>
						<div class="mapBg5"></div>
						<span class="mp6"><a href="#mp6on" class="mp6on">수영구</a></span>
						<div class="mapBg6"></div>
						<span class="mp7"><a href="#mp7on" class="mp7on">북구</a></span>
						<div class="mapBg7"></div>
						<span class="mp8"><a href="#mp8on" class="mp8on">부산진구</a></span>
						<div class="mapBg8"></div>
						<span class="mp9"><a href="#mp9on" class="mp9on">남구</a></span>
						<div class="mapBg9"></div>
						<span class="mp10"><a href="#mp10on" class="mp10on">동구</a></span>
						<div class="mapBg10"></div>
						<span class="mp11"><a href="#mp11on" class="mp11on">사상구</a></span>
						<div class="mapBg11"></div>
						<span class="mp12"><a href="#mp12on" class="mp12on">강서구</a></span>
						<div class="mapBg12"></div>
						<span class="mp13"><a href="#mp13on" class="mp13on">사하구</a></span>
						<div class="mapBg13"></div>
						<span class="mp14"><a href="#mp14on" class="mp14on">서구</a></span>
						<div class="mapBg14"></div>
						<span class="mp15"><a href="#mp15on" class="mp15on">중구</a></span>
						<div class="mapBg15"></div>
						<span class="mp16"><a href="#mp16on" class="mp16on">영도구</a></span>
						<div class="mapBg16"></div>
					</div>
                </div>
            </div>
            </div>
        </>
    );
}

export default BusanMap;