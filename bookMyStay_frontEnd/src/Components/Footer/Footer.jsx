import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import payment from '../Assets/images/payment3.png'
import { Link } from 'react-router-dom'

var fstyle = {
    listStyle: "none",
    justifyContent: "center",
    paddingLeft: "4%",
    textDecoration: "none"
}


const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="auto" style={fstyle}>
                    <li className="fListItem"><h5>Cities</h5></li>
                    <li className="fListItem"><Link to='./MysoreHotel' onClick={() => window.scrollTo(0, 0)} className="lstyle">Mysuru</Link></li>
                    <li className="fListItem"><Link to='./BengaluruHotel' onClick={() => window.scrollTo(0, 0)} className="lstyle">Bengaluru</Link></li>
                    <li className="fListItem"><Link to='./MurudeshwarHotel' onClick={() => window.scrollTo(0, 0)} className="lstyle">Murudeshwar</Link></li>
                    <li className="fListItem"><Link to='./MangaloreHotel' onClick={() => window.scrollTo(0, 0)} className="lstyle">Mangalore</Link></li>
                </Col>
                <Col md="auto" style={fstyle}>
                    <li className="fListItem"><h5>Homes</h5> </li>
                    <li className="fListItem">Apartments </li>
                    <li className="fListItem">Resorts </li>
                    <li className="fListItem">Villas</li>
                    <li className="fListItem">Hotels</li>
                    <li className="fListItem">Hostels</li>
                    <li className="fListItem">Guest houses</li>
                </Col>
                <Col md="auto" style={fstyle}>
                    <li className="fListItem"><h5>Unique places to stay</h5> </li>
                    <li className="fListItem">Reviews</li>
                    <li className="fListItem">Unpacked: Travel articles </li>
                    <li className="fListItem">Travel communities </li>
                    <li className="fListItem">Seasonal and holiday deals </li>
                </Col>
                <Col md="auto" style={fstyle}>
                    <li className="fListItem"><h5>Customer Service</h5></li>
                    <li className="fListItem"><Link to='./Cancellation' onClick={() => window.scrollTo(0, 0)} className="lstyle">Cancellation Policy</Link></li>
                    <li className="fListItem"><Link to='./PrivacyPolicy' onClick={() => window.scrollTo(0, 0)} className="lstyle">Privacy Policy </Link></li>
                    <li className="fListItem"><Link to='./TermsAndCondition' onClick={() => window.scrollTo(0, 0)} className="lstyle">Terms & conditions</Link></li>
                    <li className="fListItem"><Link to='./Feedback' onClick={() => window.scrollTo(0, 0)} className="lstyle">Feedback </Link></li>
                    <li className="fListItem"><Link to='./BookingCancel' onClick={() => window.scrollTo(0, 0)} className="lstyle">User Booking Cancel</Link></li>
                </Col>
                <Col md="auto" style={fstyle}>
                    <li className="fListItem">
                        <h5>Address</h5>
                        <p>
                            Book My Stay Private Limited
                            <br />
                            Near Hottagalli industrial Area,
                            <br />
                            6/858-M, Silent shores,
                            <br />
                            Mysore 570018,
                            <br /> Kerala, India.
                        </p>
                    </li>
                    <li className="fListItem">We Accept: </li>
                    <li className="fListItem">
                        <img src={payment} alt="payment" style={{ width: "290px", height: "40px", display: "flex" }} />
                    </li>

                </Col>
            </Row>
            <div className="fText">Copyright © 2024 Bookmystay.</div>
        </Container>
    );
};

export default Footer;
