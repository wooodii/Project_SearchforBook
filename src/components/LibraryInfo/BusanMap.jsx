import { useState } from 'react';
import { useEffect } from 'react';
// import { markerdata } from "../data/markerdata";
const { kakao } = window;

// useRef 사용
const BusanMap = ({searchPlace}) => {

    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    
    useEffect(() => {
        const container = document.getElementById('map'); 
        //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
	    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	    level: 3 //지도의 레벨(확대, 축소 정도)
        };
    const map = new kakao.maps.Map(container, options); 
    const ps = new kakao.maps.services.Places(); 

    ps.keywordSearch(searchPlace, placesSearchCB); 
    console.log(searchPlace)
    function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
    
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();
    
            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }       
    
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        } 
    }


    function displayMarker(place) {
        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });
    
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' 
            + place.place_name + '</div>');
            infowindow.open(map, marker);
        });

        // markerdata.forEach(el => {
        //     // 마커를 생성합니다
        //     new kakao.maps.Marker({
        //       //마커가 표시 될 지도
        //       map: map,
        //       //마커가 표시 될 위치
        //       position: new kakao.maps.LatLng(el.lat, el.lng),
        //       //마커에 hover시 나타날 title
        //       title: el.title,
        //     });
        //   });
    }

    }, [searchPlace])
    
    return (
        <> 
        <div id="map" style={{width:"100%", height:"100%", marginLeft : "4em"}}>
                
        </div>
        </>
    );
}

export default BusanMap;