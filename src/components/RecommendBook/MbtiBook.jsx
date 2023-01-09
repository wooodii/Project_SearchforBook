import {Row } from "react-bootstrap";
import './MbtiBook.css';

const MbtiBook = () => {
  const MbtiBook = [
    {
      id :1,
      title : "ESFP",
      subtitle : "스파클링 흥부자",
      booktitle :  "<100 인생그림책>",
      description : "이들은 늘 흥이 넘치고 화려하고 반짝이는 것에 끌리기 때문에 남다른 심미안을 가지고 있기도 합니다. <100 인생그림책>은 사람의 생애를 100컷의 그림으로 보여주는 그림책입니다. 아름다운 그림들이 미적감각이 뛰어난 이 유형의 사람들을 만족시킬 수 있을 거에요 ",
      img : "drawing.jpg"
  },
  {
      id : 2, 
      title : "ESFJ",
      subtitle : "수다쟁이 인기인",
      booktitle :  "<애쓰지 않고 편안하게>",
      description : "이들은 천성적으로 타인에게 관심과 애정이 많습니다. 가까운 친구나 지인들에 대한 이들의 사랑이 언제나 보답을 받지는 않거든요.  <애쓰지 않고 편안하게>는 타인과 긍정적인 관계를 맺으면서도 나를 보호할 수 있는 기술을 말하는 책인데요. 친구가 혹시 관계로 인해 아파하고 있다면 이 책을 꼭 선물해주세요.",
      img : "comfortable.jpg"
  },
  {
    id : 3,
    title : "ESTP",
    subtitle : "슬퍼하는 여행자",
    booktitle :  "<그 좋았던 시간에>",
    description : "코로나로 여행을 못 가 가장 슬퍼하는 사람들이 있다면 바로 이들이겠죠. 탐험하는 것을 즐기는 이들에게 홀로 머무르는 시간은 고역입니다. <그 좋았던 시간에>는 코로나 이전 시기의 여행에 대해 이야기하며 자유롭고 따뜻했던 그리운 시간을 소환하는 이 책은 여행을 떠나지 않다로 훌륭한 간접경험을 할 수 있게 해주는 책입니다. ",
    img : "goodTime.jpg"
  },
  {
      id : 4,
      title : "ESTJ",
      subtitle : "무적의 마감러",
      booktitle :  "<마감일기>",
      description : "다양한 분야에서 일하는 작가들이 각자의 일과 마감에 대해 이야기하는 책입니다. 사실 위 유형의 친구들에게마감이 크게 두려운 일은 아닙니다. 이들의 가장 큰 무기는 두꺼운 스케쥴러로 계획과 함께라면 어떠한 마감기한도 척척 맞추는 것이 이 친구들의 강점이기 때문이죠. 마감에 허덕이는 당신을 친구가 이해하지 못한다면 이 책을 슬그머니 내밀어보세요.",
      img : "deadlineDiary.jpg"
    },
    {
        id : 5,
        title : "ENFP",
        subtitle : "인간 비타민",
        booktitle :  "<시선으로부터>",
        description : "명랑하고 긍정적이며 좋은 기운을 주변에 전달하는 사람입니다. 이 유형의 친구들을 보면 유쾌한 정세랑 작가의 주인공들이 떠오르더라구요! <시선으로부터>는 떨어져 살고 있는 가족들이 제사를 위해 하와이로 떠난다는 상상을 기반으로 합니다. 그 과정에서 가족들은 문제를 겪으면서도 연대하고 성장하는데요. 정세랑 작가가 뿜어내는 다정한 기운이 여러분에게 좋은 방향으로 전달될 것 같아요",
        img : "fromOneseyes.jpg"
    },
  {
      id : 6,
      title : "ENFJ",
      subtitle : "풍요로운 환경론자",
      booktitle :  "<나는 풍요로웠고 지구는 달라졌다>",
      description : "이들은 세상을 긍정적인 방향으로 변화시키는 것에 진심인 유형입니다. 선한 영향력을 행사하고 우리가 사는 곳을 더 나은 곳으로 바꾸는데 지대한 관심이 있는 이 유형의 사람들은 좋은 환경 운동가가 될 수 있는 자질이 있습니다. <나는 풍요로웠고 지구는 달라졌다>는 식물/에너지/기후변화 그리고 희망을 식물학자의관점에서 이야기하는 책입니다. ",
      img : "richness.jpg"
  },
  {
      id : 7,
      title : "ENTP",
      subtitle : "아이디어 뱅크",
      booktitle :  "<트렌드 코리아 2023>",
      description : "이 유형의 사람들은 호기심이 많아 늘 새로운 것을 찾아다니기 때문에 트렌드에 특히 밝습니다. 언제나 토론의 한복판에 있는 이들은 풍부한 토론 주제가 필요합니다. <트렌드 코리아 2023>는 다양한 트렌드를 찾아 다니지만 일목요연하게 정리하는 능력은 다소 부족한 ENTP친구에게 이런 정리서는 큰 도움이 될꺼에요!",
      img : "trendKorea2023.jpg"
  },
  {
      id : 8,
      title : "ENTJ",
      subtitle : "타고난 리더",
      booktitle :  "<초격자>",
      description : "가끔 친구인지 상사인지 헷갈리는 이 유형의 사람들은 강하고 담대한 리더십을 동경하는 경향이 있습니다. <초격차>는 목표지향적이고 성취지향적인 친구의 성향이라면 이 책에서 다른 이들보다 많은 것을 얻어갈 수 있을 것 같습니다.",
      img : "superDifference.jpg"
    },
    {
        id : 9,
        title : "ISFP",
        subtitle : "을지로 힙스터",
        booktitle :  "<바다, 바닷가에서>",
        description : "이들은 지루하고 관습적인 것을 거부하고 새롭고 핫하고 힙한 것들을 찾는 것에 많은 시간들을 들입니다.새로운 시도에 늘 열려있기 때문에 취향이 세련되었다는 평을 많이 듣는 것 같아요. <바다, 바닷가에서>에 가득 담긴 감각적이 그림들이 당신의 눈을 사로잡을 거에요. ",
        img : "fromTheSea.jpg"
    },
    {
        id : 10,
        title : "ISFJ",
        subtitle : "안전한 울타리",
        booktitle :  "<어린이라는 세계>",
        description : " 이 유형의 사람들은 주변을 챙기는 것에 일가견이 있군요.사랑이 많은 친구에게 마찬가지로 사랑이 많은 김소영 작가의 책을 추천합니다. <어린이라는 세계>는 어린이 책 편집자로 오래 일한 작가가 어린이 글쓰기 교실을 운영하면서 알게 된 어린이의 생태를 다룬 책이에요 어른의 세계와 비슷하면서도 다른 다정한 어린이의 세계가 마음을 훈훈하게 할 거에요.",
        img : "childWorld.jpg"
    },
    {
        id : 11,
        title : "ISTP",
        subtitle : "방구석 탐험가",
        booktitle :  "<더 위험한 과학책>",
        description : "INTP유형처럼 이들도 바깥에서 만나기 어려운 유형입니다. 다만 차이점은 좀 더 실질적인 세계에 관심을 갖는다는 것입니다. <더 위험한 과학책>은 우리가 일상 세계에서 마주하는 과학 원리들을 그림으로 소개하는 책입니다. 엄밀한 과학적 사실에 근거하기 때문에 밖에 나가지 않고도 바깥세계를 탐험하고 싶을 때 이 책이 도움이 된답니다.",
        img : "moreDangerous.jpg"
    },
  {
    id : 12,
    title : "ISTJ",
    subtitle : "단호박 실용주의자",
    booktitle :  "<그림의 힘>",
    description : " 이들은 실용적이고 논리적인 성향으로 예술적인 성향과는 거리가 멀어보일지도 모릅니다. <그림의 힘>은 예술작품이 우리에게 미치는 긍정적인 영향을 논리적으로 설명하고 있는 책이에요. 주황색의 그림은 왜 따듯하고 안전한 느낌이 드는지 알려주는 이 책은 힐링 아이템이 되어줄 수 있을 거에요.",
    img : "powerOfPicture.jpg"
},
{
    id : 13,
    title : "INFP",
    subtitle : "꿈꾸는 고슴도치",
    booktitle :  "<달러구트 꿈 백화점>",
    description : "섬세한 감수성과 풍부한 상상력을 가졌습니다. 눈을 뜨고도 꿈을 꿀 수 있는 유형의 사람들이 있다면 그것은 바로 이들일 것입니다. 이들에게 책을 읽는 것은 다른 세계로의 여행입니다. <달러구트 꿈 백화점>은 잠들어야만 입장할 수 있는 신비롭고 몽환적인 마을 '달러구트 꿈 백화점'에서는 온갖 꿈을 판매하고 있습니다. 개성 넘치는 등장인물들과 함께하는 꿈의 세계의 모험은 일상에 지친 친구에게 좋은 휴식이 되어 줄거에요.",
    img : "dreamShop.jpg"
},
{
    id : 14,
    title : "INFJ",
    subtitle : "사회 운동의 등불",
    booktitle :  "<공정하다는 착각>",
    description : "이 유형의 사람들은 사회 개혁과 공정함에 대한 감수성이 누구보다 높습니다. 이들은 스스로의 안에 단단한 도덕관념과 침범할 수 없는 이상향을 가지고 있기 때문에 사람들에게 외골수라는 이야기를 듣기도 하는 것 같아요. <공정하다는 착각>은 '능력주의사회'의 이면은 날카롭게 지적하는 책이에요. 능력이 많은 자가 자본을 가져간다는 이야기가 보편적인 정의로 통용되는 21세기, '능력'이란 무엇이고 '능력'이 어디에서부터 비롯되는 것인지 묻는 이 책은 불편한 고민을 던집니다. ",
    img : "beFair.jpg"
},
{
    id : 15,
    title : "INTP",
    subtitle : "은둔형 철학자",
    booktitle :  "<명량한 은둔자>",
    description : "집 안에서의 고요하고 사색적인 순간을 사랑하고 사람들을 특별히 좋아하지 않는 유형! <명량한 은둔자>는 고독하지만 외롭지 않고 은둔하지만 고립되지 않은 일상에 대해 말합니다. 읽다 보면 명랑한 은둔이 무엇인지 감이 오실거에요!",
    img : "cheerfulHermit.jpg"
},
{
    id : 16,
    title : "INTJ",
    subtitle : "실천형 독서광",
    booktitle :  "<책좀 빌려줄래>",
    description : "책을 좋아하는 이들에게는 이 책만큼 적합한 책이 없습니다. 당신의 친구는 무엇보다 지식에 목마른 사람들로 관심있는 분야를 깊이 파고드는걸 좋아해서 본투비 독서광일 확률이 높아요. <책좀 빌려줄래>는 이들이 사는 책들은 거의 전문적이고 난해한 책이기 때문에 가끔은 이런 가벼운 책으로 기분전환을 할 필요가 있을 것 같아요. '그랜트 스나이더'의 <책 좀 빌려줄래?>는 책덕후들을 위한 카툰에세이로 책을 좋아하는 사람은 국적불문 공감하면서 읽을 수 있지요. ",
    img : "borrowBook.jpg"
}]
  
  return (
    <div style={{margin: "5em 2em 0 2em"}}>

    <div style={{display : "flex", }}>

    <p style={{fontSize : "3em", fontWeight : "bold"}}> MBTI별 추천도서</p>
    <p style={{fontSize : "1.5em", marginTop : "1em", marginLeft : "1em"}}>자신에게 해당하는 MBTI별 책을 찾아보세요!</p>

    </div>
    <div style={{margin : "0 auto"}}>
      {MbtiBook.filter((i, index)=>(i.id > 0 && i.id <= 8)).map((item) => (
        <div class="flip">
          <div class="card">

            <div class="front" style={{width: "14em", height : "18em"}}>
              <div style={{marginTop : "3em"}}>
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              </div>
            </div>
             
            <div class="back">
              <div>
                <img style={{ width: "14em", height: "18em"}} src={require(`../../asset/mbti/${item.img}`) }></img>
              </div>
                <div>
                  <div>
                    {item.booktitle}
                  </div>
                </div>
            </div>
          </div>
        </div>
      ))}
      </div>
        <div>
        {MbtiBook.filter((i, index)=>(i.id > 8 && i.id <= 16)).map((item) => (
        <div class="flip">
          <div class="card">
            <div class="front">
              <div style={{marginTop : "3em", }}>
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              </div>
            </div>
             
            <div class="back"  style={{width: "14em", height : "18em"}}>
              <div>
              <img style={{ width: "14em", height: "18em"}} src={require(`../../asset/mbti/${item.img}`) }></img>
              </div>
                <div>
                  <div>
                    {item.booktitle}
                  </div>
                </div>
            </div>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default MbtiBook;