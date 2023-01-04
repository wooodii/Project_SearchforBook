import { createContext, useState } from "react";
const DataContext = createContext();

const DataProvider = ({children}) => {
    const [user, setUser] = useState({name : "wooodi", profile: null, likelist : [] });
    
    const [allCommnets, setAllComments] = useState([
        {
            commentId : 1, 
            name : "user",
            text : "읽고 난 책의 후기를 남겨주세요"
        }
    ])
    
    const [myBook, setMyBook] = useState([]);
    const [myLib, setMyLib] = useState([]);
    const [addMbti, setAddMbti] = useState([]); 
    const [commentCount, setCommentCount] = useState();
    const [mbtipick, setMbtiPick] = useState();


    const value = {
        state : {user, allCommnets, commentCount, myBook, myLib, addMbti},
        action : {setUser, setAllComments, setCommentCount, setMyBook, setMyLib, setAddMbti}
    };
    return <DataContext.Provider value={value}> {children} </DataContext.Provider>
};

// consumer 라는 기능인데 provider가 consumer랑 같이 사용하기 때문에
// {User} 문장을 입력해놓음 => 실 기능을 provider만 사용한 상태
const { User : DataConsumer} = DataContext;
export {DataConsumer, DataProvider};
export default DataContext;