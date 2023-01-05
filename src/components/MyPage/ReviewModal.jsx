import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CommentInput from "../CommentInput";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import Star from './Star';

const ReviewModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title style={{margin : "0 auto"}} id="contained-modal-title-vcenter" >
          한줄평작성 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            <Row style={{margin : "0 auto"}}>
                <div> 해당 도서는 어떠셨나요? </div>
                <div> <Star /></div>
            </Row>
            <hr/>
            <Row>
                  <Row>마음에 드는 도서 문구 한줄을 작성해주세요</Row>
                  <Row>
                    <Col>문구작성<input type="text"/></Col>
                    <Col>페이지<input type="text" />p</Col>
                  </Row>
            </Row>
            <hr/>
            <Row>
              도서에 대한 한줄평을 남겨주세요
              <CommentInput />
            </Row>
            <hr/>
            <Row>
              <Row> 해당 도서를 추천하세요?</Row>
              <Row>
                <Button className="likebtn">추천해요 <TiThumbsUp /></Button> 
                <Button className="unlikebtn"> 잘 모르겠어요 <TiThumbsDown /></Button> 
              </Row>
            </Row>
        </div>
      </Modal.Body>

      <Modal.Footer >
        <Button style={{margin : "0 auto"}} closeButton onClick={props.onHide}>작성완료</Button>
      </Modal.Footer>
      
    </Modal>
  );
};

export default ReviewModal;
