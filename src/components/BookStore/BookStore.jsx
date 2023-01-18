import './BookStore.scss'; 
import BookStoreData from './BookStoreData';

const BookStore = () => {
    return (
        <>
            <div style={{margin : "0 10em", display : "flex"}}>
            {BookStoreData.map((i, index) => (
                <div style={{
                    border : "2px solid gray", 
                    display : "block", width : "50vh",
                    margin : "4em", borderRadius : "10px"}}>
                
                <div className='imgcover' 
                    style={{ margin : "2em"}}>
                    <img 
                    style={{width : "100%", borderRadius : "10px"}}
                    src={require(`../../asset/storeimg/${i.img}`)}></img>
                </div>
            
                <div style={{margin : "2em"}}>
                    <div style={{fontSize : "2em", fontWeight : "bold"}}> 
                        {i.store} 
                    </div> 
                    <div style={{fontSize : "1.3em", marginTop : "1em"}}> {i.content} </div>
                    <div style={{fontSize : "1.3em", color : "gray"}}> {i.adress} </div> 
                </div>
            </div>
        ))}
            </div>


        </>
    );
}
 
export default BookStore;