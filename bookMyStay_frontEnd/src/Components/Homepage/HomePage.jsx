import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Form,
  FormControl,
} from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./HomePage.css";
import PhotoGrid from "./PhotoGrid";
import Subscribe from "./Subscribe";
import FAQs from "./FAQs";

const HomePage = () => {
  const name = window.sessionStorage.getItem("name");
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (location.state) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [location.state]);

  const getImageSrc = (hotelName) => {
    if (hotelName === "Grand Mercure Mysore") {
      return "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7c/29/40/grand-mercure-mysuru.jpg?w=700&h=-1&s=1";
    } else if (hotelName === "Hotel Heritage Inn Mysore") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218438811.jpg?k=21b01396168a38b1129fe8532b84b7369fc5597402f06ae728929bb850f1e0d2&o=&hp=1";
    } else if (hotelName === "Radisson Blu Plazza") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254763982.jpg?k=524253d62031ea37a5aae285c53e0d3e0a01f0ffeae6860dbe7f0ebd9922d3a5&o=&hp=1";
    } else if (hotelName === "Emerald Clarks Inn Suites") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277753886.jpg?k=670b6bab3f2157ab5f7ba91174274e5fb8de5c94b1c7386e2afc82f34cc39afb&o=&hp=1";
    } else if (hotelName === "Southern Star Mysore") {
      return "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/73/19/27/southern-star-mysore.jpg?w=700&h=-1&s=1";
    } else if (hotelName === "Emerald Clarks Inn Suites") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277753886.jpg?k=670b6bab3f2157ab5f7ba91174274e5fb8de5c94b1c7386e2afc82f34cc39afb&o=&hp=1";
    } else if (hotelName === "The Leela Palace") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48254908.jpg?k=ce6fb7f862332a9baf41424b06770027cdc104b3201dacf9fd20a7bbf6df295c&o=&hp=1";
    } else if (hotelName === "Holiday inn Bengaluru Racecourse") {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKGBhfG-ZuSZlv_b5pIrCr0WnK7GzOD6dwVfaD-VWog&s";
    } else if (hotelName === "Shangri La Bangalore") {
      return "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a7/a1/7c/shangri-la-hotel-bengaluru.jpg?w=700&h=-1&s=1";
    } else if (hotelName === "Sheraton Grand Bangalore") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465558115.jpg?k=345223aeb5f9c622a617ac88a0fb90ed3a092b862b3985c0de3f1309b02e7c31&o=&hp=1";
    } else if (hotelName === "The Oberoi Bangalore") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31211348.jpg?k=c469403df80f10e33120c7be42b61d458746716a4e04c62ad4b9afc1c22edc98&o=&hp=1";
    } else if (hotelName === "AJ Grand Hotel Mangalore") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386516730.jpg?k=010021c4b79cf89b87e870b394f725293dc1b4d422a19c1da36869aebcc63904&o=&hp=1";
    } else if (hotelName === "Gold Finch Hotel") {
      return "https://image.wedmegood.com/resized/800X/uploads/member/88763/1511420770_fghnfx.JPG";
    } else if (hotelName === "Vivanta Mangalore") {
      return "https://images.trvl-media.com/lodging/1000000/530000/526400/526357/0837c403.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill";
    } else if (hotelName === "Hotel Sai Palace") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/193215845.jpg?k=e1e27420f9be7d6a0722a1da6e478c8a9d04e1e0f72408ae0f4186124f09be09&o=&hp=1";
    } else if (hotelName === "Deepa Comforts") {
      return "https://www.hoteldeepacomforts.com/pimages/n2.jpg";
    } else if (hotelName === "Next Stay Panhavati Comforts") {
      return "https://images.trvl-media.com/lodging/76000000/75820000/75812200/75812189/af5ed881.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill";
    } else if (hotelName === "Fab Hotel Suvee Boutique") {
      return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321848183.jpg?k=f9fa430748dc63d2f02524d2347eeef52c073d1635c9aff1b1aba74f4b5d30f2&o=&hp=1";
    } else if (hotelName === "Naveen Beach Resort") {
      return "https://www.naveenhotels.com/Naveen-Beach-Resort/images/header/Header-04.jpg";
    } else if (hotelName === "Sea view Beach Resort") {
      return "https://media.timbu.com/img/h1442130/562/422/b1/sea-view-beach-resort-1442130-11.jpg";
    } else if (hotelName === "RNS Residency") {
      return "https://content.jdmagicbox.com/comp/bhatkal/z7/9999p8385.8385.110222104550.g6z7/catalogue/rns-residency-murdeshwar-bhatkal-3-star-hotels-gg8g35y.jpg";
    } else {
      return "https://example.com/default-image.jpg";
    }
  };

  const getLink = (hotelName) => {
    if (hotelName === "Grand Mercure Mysore") {
      return "/GrandMercureMysuru";
    } else if (hotelName === "Hotel Heritage Inn Mysore") {
      return "/HotelHeritageInnMysore";
    } else if (hotelName === "Radisson Blu Plazza") {
      return "/RadissonVluPlazaHotelMysore";
    } else if (hotelName === "Emerald Clarks Inn Suites") {
      return "/EmeraldClarksInnSuites";
    } else if (hotelName === "Southern Star Mysore") {
      return "/SouthernStarMysore";
    } else if (hotelName === "Emerald Clarks Inn Suites") {
      return "/EmeraldClarksInnSuites";
    } else if (hotelName === "The Leela Palace") {
      return "/TheLeelaPalaceBengaluru";
    } else if (hotelName === "Holiday inn Bengaluru Racecourse") {
      return "/HolidayInnBengaluruRacecourse";
    } else if (hotelName === "Shangri La Bangalore") {
      return "/ShangriLaBengaluru";
    } else if (hotelName === "Sheraton Grand Bangalore") {
      return "/SheratonGrandBangalore";
    } else if (hotelName === "The Oberoi Bangalore") {
      return "/TheOberoiBengaluru";
    } else if (hotelName === "AJ Grand Hotel Mangalore") {
      return "/AJGrandHotelMangalore";
    } else if (hotelName === "Gold Finch Hotel") {
      return "/GoldfinchHotelMangaluru";
    } else if (hotelName === "Vivanta Mangalore") {
      return "/VivantaMangalore";
    } else if (hotelName === "Hotel Sai Palace") {
      return "/HotelSaiPalaceMangalore";
    } else if (hotelName === "Deepa Comforts") {
      return "/HotelDeepaComfortsMangalore";
    } else if (hotelName === "Next Stay Panhavati Comforts") {
      return "/NexstayPanchvatiComforts";
    } else if (hotelName === "Fab Hotel Suvee Boutique") {
      return "/FabHotelSuveeBoutiqueHotel";
    } else if (hotelName === "Naveen Beach Resort") {
      return "/NaveenBeachResort";
    } else if (hotelName === "Sea view Beach Resort") {
      return "/SeaViewBeachResort";
    } else if (hotelName === "RNS Residency") {
      return "/RNSResidency";
    } else {
      return "#";
    }
  };

  const moveToSignIn = () => {
    if (isLoggedIn) {
      alert("Logout Succesful");
      window.sessionStorage.clear();
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/Login");
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/bookmystay/getproperty?hotelName=${searchQuery}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSearchResults(data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      <Container fluid className="header-container">
        <h4 className="welcome-title">welcome {name} Book your Hotels</h4>
        <Row>
          <Col xs={12} md={10}>
            <p className="main-title">Find your next stay</p>
            <p className="sub-title">
              Search low prices on hotels, homes and much more...
            </p>
          </Col>

          <Col xs={12} md={2} className="text-md-end">
            <Button
              onClick={moveToSignIn}
              variant="outline-info"
              className="sign-in-button"
            >
              {isLoggedIn ? "Sign out" : "Sign in"}
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="cities-container">
        <Container fluid className="city-rows">
          <Row className="justify-content-center city-rows">
            {[
              {
                to: "/MysoreHotel",
                src: "https://www.holidify.com/images/cmsuploads/compressed/attr_1568_20191102174918.jpg",
                alt: "Mysuru",
                label: "Mysuru",
              },
              {
                to: "/BengaluruHotel",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9LHqWsAf5vBKk_RNd_lmocokeW9BQVFoXINr1quTrw&s",
                alt: "Bengaluru",
                label: "Bengaluru",
              },
              {
                to: "/MurudeshwarHotel",
                src: "https://curlytales.com/wp-content/uploads/2022/07/Untitled-design-2022-07-01T181844.822.jpg",
                alt: "Murdeshwar",
                label: "Murdeshwar",
              },
              {
                to: "/MangaloreHotel",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLdyQiJTnswRHqGO7Euv-0EqB3gtiqkZP0n72Jx8h_A&s",
                alt: "Mangalore",
                label: "Mangalore",
              },
            ].map((city, index) => (
              <Col xs={6} md={3} key={index} className="text-center city-col">
                <Link to={city.to} className="city-link">
                  <Image
                    src={city.src}
                    roundedCircle
                    className="city-image"
                    alt={city.alt}
                  />
                  <p className="city-label">
                    <b>{city.label}</b>
                  </p>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <Container fluid className="search-container">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form onSubmit={handleSearch} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="info" type="submit">
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container fluid className="cities-card">
        <Container fluid className="citycards-row">
          <Row className="justify-content-center citycard-row">
            {searchResults ? (
              searchResults.map((result, index) => (
                <Col
                  xs={6}
                  md={3}
                  key={index}
                  className="text-center citycard-col"
                >
                  <div className="city-link">
                    <img
                      src={getImageSrc(result.hotelName)}
                      className="hotel-image"
                      alt="Resort"
                    />
                    <p className="city-label">
                      <b>{result.hotelName}</b>
                    </p>
                    <p>{result.description}</p>
                    <Link
                      to={getLink(result.hotelName)}
                      onClick={() => window.scrollTo(0, 0)}
                      className="lstyle"
                    >
                      <Button variant="primary">View Details</Button>
                    </Link>
                  </div>
                </Col>
              ))
            ) : (
              <p></p>
            )}
          </Row>
        </Container>
      </Container>
      <PhotoGrid />
      <FAQs />
      <Subscribe />
    </>
  );
};

export default HomePage;
