import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./designers.css"
import designers from "../images/Media/desg1.jpg"

function AutoLayoutExample() {
  return (
    <Container className='desgncont'>
    
      <Row>
        <Col><div className='revbox'>
                <div className='divtes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                {/* <img src={designers} alt="desgns"/> */}
            </div></Col>
        <Col><div className='revbox'>
        <div className='divtes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div></Col>
        <Col><div className='revbox'>
        <div className='divtes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            </div></Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;