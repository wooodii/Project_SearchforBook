import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const CommentInput = () => {
  /** params는 동적으로 주소값을 지정해줘서 데이터 값과 연결해 화면에 불러옴 */
  const { id } = useParams();
  const [textInput, setTextInput] = useState("");
  const {action, state} = useContext(DataContext);

  const addComment = () => {
    console.log("코멘트");

    const comment = {
      commentId: state.commentCount,
      productId: id,
      name: state.user ? state.user.name : "익명",
      text: textInput,
    };

    action.setAllComments(state.allCommnets.concat(comment));
    //console.log(state.allComments)
    action.setCommentCount(state.commentCount + 1);
  };

  return (
    <div>
      <Container>
        <input
          type="text"
          paceholder="서평을 입력하세요"
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
        <button style={{border : "2px solid black", marign : "1.5em"}} onClick={addComment}> 입력</button>
      </Container>
    </div>
  );
};

export default CommentInput;
