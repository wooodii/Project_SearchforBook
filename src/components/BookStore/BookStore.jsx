import { Col, Row } from 'react-bootstrap';
import './BookStore.scss'; 
import BookStoreData from './BookStoreData';
const BookStore = () => {
    return (
        <>
        <Row>
            <Col>
            {BookStoreData.filter((i, index) => (index == 1)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
            </Col>
            <Col>
            {BookStoreData.filter((i, index) => (index == 2)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
            </Col>
            <Col>
            {BookStoreData.filter((i, index) => (index == 3)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
            </Col>
        </Row>

        <Row>
        <Col>
        {BookStoreData.filter((i, index) => (index == 4)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
        </Col>

        <Col>
        {BookStoreData.filter((i, index) => (index == 5)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
        </Col>

        <Col>
        {BookStoreData.filter((i, index) => (index == 6)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
        </Col>
        </Row>

        <Row>
        <Col>
        {BookStoreData.filter((i, index) => (index == 7)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
        </Col>
        <Col>
        {BookStoreData.filter((i, index) => (index == 8)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
        </Col>
        <Col>
        {BookStoreData.filter((i, index) => (index == 9)).map((i, index) => (
            <div style={{width : "35em", border : "2px solid black", margin : "4em", borderRadius : "20px"}}>
                
                <div style={{ margin : "2em"}}>
                    <img style={{width : "100%", borderRadius : "20px"}}src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> {i.store} </div> 
                    <div style={{fontSize : "1.3em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em"}}> {i.adress} </div> 
                </div>
            
            </div>
        ))}
        </Col>
        </Row>
        </>
    );
}
 
export default BookStore;