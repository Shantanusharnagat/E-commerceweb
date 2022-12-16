import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./servs.css"
import van from "../images/Media/van.png"
import customer from "../images/Media/customer.png"
import money from "../images/Media/money.png"
function AutoLayoutExample() {
  return (
    <Container className='cont'>
      
      <Row className='rows'>
        <Col>
            <img src={van} className="icons" alt="van"/>
            <div className='text'>
            <h4>Free Shipping</h4>
            <p>On all orders above 100 Riyal</p>
            </div>
            <div className='line'></div>
        </Col>
        
        <Col>
            <img src={customer} className="icons" alt="customer"/>
            <div className='text'>
            <h4>Customer Service</h4>
            <p>24*7 Support to all Service</p>
            </div>
            <div className='line'></div>
        </Col>
        
        <Col>
        <img src={money} className="icons" alt="money"/>
        <div className='text'><h4>Discount</h4>
            <p>Coupons to our Customers</p>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;