import './BookStore.scss'; 
import BookStoreData from './BookStoreData';
const BookStore = () => {
    return (
        <>
        {BookStoreData.map((i, index) => (
            <div style={{border : "2px solid black", margin : "4em"}}>
            <div>{i.store}</div>
            <div>{i.content}</div>
            <div>{i.adress}</div>
            </div>
        ))}
        </>
    );
}
 
export default BookStore;