import { Col, Row, ToggleButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TiThumbsUp, TiThumbsDown } from "react-icons/ti";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Star from './Star';
import { useContext } from "react";
import DataContext from '../../context/DataContext';
const ReviewModal = (props) => {

  const data = useContext(DataContext); 
  const visit = [
    { name: <TiThumbsUp /> , print : "재방문할래요", value: '10'},
    { name:  <TiThumbsDown /> , print : "", value: '11'}
  ]


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header>
        <Modal.Title style={{margin : "0 auto"}} id="contained-modal-title-vcenter" >
          한줄평작성 
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <div>
            <Row style={{margin : "0 auto"}}>
                <div style={{textAlign :"center", fontSize : "1.3em", marginBottom : "0.5em"}}> 해당 도서는 어떠셨나요?</div>
                <div style={{textAlign :"center"}}> <Star/> </div>
            </Row>
            
            <hr/>
            <Row>
                  <Row >
                    <div  style={{textAlign :"center", fontSize : "1.3em", marginBottom : "0.5em"}}>
                    마음에 드는 도서 문구 한줄을 작성해주세요
                    </div>
                  </Row>
                  <Row >
                     <Col xs={9} style={{textAlign : "center"}}>
                       문구작성 <input  style={{width : "70%"}} type="text"/>
                     </Col>
                     <Col xs={3} style={{textAlign : "center"}}>
                      페이지 <input style={{width : "50%"}} type="text" /> 
                     </Col>
                  </Row>
            </Row>
            
            <hr/>
            <Row>
              <div  style={{textAlign :"center", fontSize : "1.3em", marginBottom : "0.5em"}}>
              도서에 대한 한줄평을 남겨주세요
              </div>
              <div style={{marginLeft : "12em"}}>
              <input style={{width : "50%"}} type="text" /> 
              </div>
            </Row>
            
            <hr/>

            <Row>
              <Row>
                <Col xs={4}>
                </Col>
                <Col xs={4} style={{fontSize : "1.3em", marginBottom : "0.5em"}}>
                해당 도서를 추천하세요? 
                </Col>
                <Col xs={4}>
                  <ButtonGroup>
                      {visit.map((visit, idx) => (
                      <ToggleButton
                      className="btnclick"
                      key={idx}
                      id={`visit-${idx}`}
                      type="radio"
                      variant={idx % 2 ? 'outline-success' : 'outline-success'}
                      name="visit"
                      value={visit.value}
                      //checked={visitValue === visit.value}
                      //onChange={(e) => setVisitValue(e.currentTarget.value)}
                      //onClick={() => {setYesNoBtn(visit.print)}}
                      >
                      {visit.name}
                      </ToggleButton>
                  ))}
                  </ButtonGroup>
                </Col>
              </Row>

            </Row>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button style={{margin : "0 auto"}} closeButton onClick={props.onHide}>
          작성완료
        </Button>
      </Modal.Footer>
      
    </Modal>
  );
};

export default ReviewModal;
