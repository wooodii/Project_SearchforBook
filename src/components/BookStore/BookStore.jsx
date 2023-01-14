import { Col, Row } from 'react-bootstrap';
import './BookStore.scss'; 
import BookStoreData from './BookStoreData';
const BookStore = () => {
    return (
        <>
        <div style={{ width : "100%"}}>
            {BookStoreData.map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em", color : "gray"}}> {i.adress} </div> 
                </div>
            </div>
        ))}
            </div>
            <div style={{display : "flex", width : "100%"}}>
            {/* {BookStoreData.filter((i, index) => (index >= 5)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em", color : "gray"}}> {i.adress} </div> 
                </div>
            </div>
        ))} */}
            </div>
        </>
    );
}
 
export default BookStore;