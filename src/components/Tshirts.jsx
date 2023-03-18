import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./tshirts.css"
import swts1 from "../images/Media/Products/mens1.jpg"
import swts2 from "../images/Media/Products/mens2.jpg"
import swts3 from "../images/Media/Products/mens3.jpg"
import swts4 from "../images/Media/Products/mens4.jpg"

function AutoLayoutExample() {
  return (
    <Container className='swetscont'>
      {/* <Row >
        <Col className='swets'><img src={swts1} className="swetsimg" alt=""/></Col>
        <Col className='swets'><img src={swts2} className="swetsimg" alt=""/></Col>
        <Col className='swets'><img src={swts3} className="swetsimg" alt=""/></Col>
        <Col className='swets'><img src={swts4} className="swetsimg" alt=""/></Col>
        </Row> */}
        <Row>
          <Col className='divol'>
            <div className='divspo'>
              <img src={swts1} className="swetsimg" alt="swet"/>
             
            </div>
            <p>Black Fashion Jacket</p>
          
          </Col>
          <Col className='divol'><div className='divspo'>
          <img src={swts2} className="swetsimg" alt="swet"/>
          </div><p>Short Sleev Tshirt</p><p>Price</p><p>Add to cart</p></Col>
          <Col className='divol'><div className='divspo'>

          <img src={swts3} className="swetsimg" alt="swet"/>
          </div><p>Single Store Book</p></Col>
          <Col className='divol'><div className='divspo'>
          <img src={swts4} className="swetsimg" alt="swet"/>
          </div><p className='names'>Working boy Tshirt</p></Col>
        </Row>
      
    </Container>
  );
}

export default AutoLayoutExample;