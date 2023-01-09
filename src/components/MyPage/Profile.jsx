import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileUpdate from "./ProfileUpdate";
import DataContext from "../../context/DataContext";
import bear from '../../asset/weeklybest/bear.png'
const Profile = () => {
	const {state} = useContext(DataContext);
  return (
    <div>
      <Container>
				<Row>
					<Col>
						{ state.user.profile ? 
						<div style={{
                            width : "15em", height : "15em", borderRadius: "100%",
                            backgroundImage : `url(${state.user.profile})`,
                            backgroundSize : "cover", margin : "0 auto" }
							}></div>
						: 
						<div style={{ width : "15em", height : "15em", 
                        borderRadius: "100%", backgroundImage : `url(${bear})`, opacity : "50%",
                        backgroundSize:"cover", margin : "0 auto"}}> </div>}
						<ProfileUpdate />
					</Col>
				</Row>
			</Container>
    </div>
  );
};

export default Profile;
