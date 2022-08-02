import Carousel from 'react-bootstrap/Carousel';

export default function Jumbotron() {
  return (
    <div className='jumbotron' style={{zIndex:0}}>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 carousal--img"
                src={require("../../../src/images/jt.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousal--img"
                src={require("../../../src/images/jt.jpg")}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousal--img"
                src={require("../../../src/images/jt.jpg")}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

