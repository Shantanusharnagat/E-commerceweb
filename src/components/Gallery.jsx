import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./gallery.css"
import box1 from "../images/Media/glasses-category-img-2.jpg"
import box2 from "../images/Media/glasses-category-img-1.jpg"
import box3 from "../images/Media/retail-black-friday-small-banner-4-opt.jpg"
import box4 from "../images/Media/retail-black-friday-small-banner-1-opt.jpg"
import box5 from "../images/Media/retail-black-friday-small-banner-2-opt.jpg"
import box6 from "../images/Media/baner-flat-fashion-7.jpg"
function ResponsiveExample() {
  return (
    <Container className='gals'>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
       
        <Col xs={6} md={4} className="box1 box">
          <img src={box1} className="boxy" alt="box1"/>
          <div className='lbl'>
          <h4>T Shirts</h4>
          <p className='view'>View all</p>
          </div>
          
        </Col>
        <Col xs={6} md={4} className="box2 box">
        <img src={box3} className="boxy" alt="box2"/>
        <div className='lbl'>
          <h4>Children</h4>
          <p className='view'>View all</p>
          </div>
        </Col>
        <Col xs={6} md={4} className="box3 box">
        <img src={box2} className="boxy" alt="box3"/>
        <div className='lbl'>
          <h4>Sunglasses</h4>
          <p className='view'>View all</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='hi'>hi</p>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4} className="box4 box">
        <img src={box4} className="boxy" alt="box4"/>
        <div className='lbl'>
          <h4>Shoes</h4>
          <p className='view'>View all</p>
          </div>
        </Col>
        <Col xs={6} md={4} className="box5 box">
        <img src={box5} className="boxy" alt="box5"/>
        <div className='lbl'>
          <h4>Phone Cases</h4>
          <p className='view'>View all</p>
          </div>
        </Col>
        <Col xs={6} md={4} className="box6 box">
        <img src={box6} className="boxy" alt="box3"/>
        <div className='lbl'>
          <h4>Bags</h4>
          <p className='view'>View all</p>
          </div>
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      
    </Container>
  );
}

export default ResponsiveExample;