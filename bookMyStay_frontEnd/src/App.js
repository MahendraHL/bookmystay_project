import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingHotel from "./Components/HotelHomePage/BookingHotel";
import EmeraldClarksInnSuites from "./Components/HotelHomePage/MysoreHotelHomepage/EmeraldClarksInnSuites";
import AJGrandHotelMangalore from "./Components/HotelHomePage/MangaloreHotelHomepage/AJGrandHotelMangalore";
import FabHotelSuveeBoutiqueHotel from "./Components/HotelHomePage/MurudeshwarHotelHomepage/FabHotelSuveeBoutiqueHotel";
import GoldfinchHotelMangaluru from "./Components/HotelHomePage/MangaloreHotelHomepage/GoldfinchHotelMangaluru";
import GrandMercureMysuru from "./Components/HotelHomePage/MysoreHotelHomepage/GrandMercureMysuru";
import HolidayInnBengaluruRacecourse from "./Components/HotelHomePage/BengaluruHotelHomepage/HolidayInnBengaluruRacecourse";
import HotelDeepaComfortsMangalore from "./Components/HotelHomePage/MangaloreHotelHomepage/HotelDeepaComfortsMangalore";
import HotelHeritageInnMysore from "./Components/HotelHomePage/MysoreHotelHomepage/HotelHeritageInnMysore";
import HotelSaiPalaceMangalore from "./Components/HotelHomePage/MangaloreHotelHomepage/HotelSaiPalaceMangalore";
import NaveenBeachResort from "./Components/HotelHomePage/MurudeshwarHotelHomepage/NaveenBeachResort";
import NexstayPanchvatiComforts from "./Components/HotelHomePage/MurudeshwarHotelHomepage/NexstayPanchvatiComforts";
import RadissonVluPlazaHotelMysore from "./Components/HotelHomePage/MysoreHotelHomepage/RadissonVluPlazaHotelMysore";
import RNSResidency from "./Components/HotelHomePage/MurudeshwarHotelHomepage/RNSResidency";
import ShangriLaBengaluru from "./Components/HotelHomePage/BengaluruHotelHomepage/ShangriLaBengaluru";
import SeaViewBeachResort from "./Components/HotelHomePage/MurudeshwarHotelHomepage/SeaViewBeachResort";
import SheratonGrandBangalore from "./Components/HotelHomePage/BengaluruHotelHomepage/SheratonGrandBangalore";
import SouthernStarMysore from "./Components/HotelHomePage/MysoreHotelHomepage/SouthernStarMysore";
import TheLeelaPalaceBengaluru from "./Components/HotelHomePage/BengaluruHotelHomepage/TheLeelaPalaceBengaluru";
import TheOberoiBengaluru from "./Components/HotelHomePage/BengaluruHotelHomepage/TheOberoiBengaluru";
import VivantaMangalore from "./Components/HotelHomePage/MangaloreHotelHomepage/VivantaMangalore";
import Login from "./Components/Homepage/Login";
import HomePage from "./Components/Homepage/HomePage";
import SignUp from "./Components/Homepage/SignUp";
import ListYourProperty from "./Components/Homepage/ListYourProperty";
import MysoreHotel from "./Components/Hotels/MysoreHotels/MysoreHotel";
import MurudeshwarHotel from "./Components/Hotels/MurudeshwarHotels/MurudeshwarHotel";
import MangaloreHotel from "./Components/Hotels/MangaloreHotels/MangaloreHotel";
import TermsAndCondition from "./Components/Footer/TermsAndCondition";
import PrivacyPolicy from "./Components/Footer/PrivacyPolicy";
import Cancellation from "./Components/Footer/Cancellation";
import Feedback from "./Components/Footer/Feedback";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import BengaluruHotel from "./Components/Hotels/BengaluruHotels/BengaluruHotel";
import HotelCarouselImages from "./Components/HotelHomePage/HotelCarouselImages";
import HotelDetailsData from "./Components/HotelHomePage/HotelDetailsData";
import HotelNavBar from "./Components/HotelHomePage/HotelNavBar";
import BookingCancel from "./Components/Footer/BookingCancel";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> <br /> <br /> <br />
        <br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/EmeraldClarksInnSuites"
            element={<EmeraldClarksInnSuites />}
          />
          <Route
            path="/AJGrandHotelMangalore"
            element={<AJGrandHotelMangalore />}
          />
          <Route
            path="/FabHotelSuveeBoutiqueHotel"
            element={<FabHotelSuveeBoutiqueHotel />}
          />
          <Route
            path="/GoldfinchHotelMangaluru"
            element={<GoldfinchHotelMangaluru />}
          />
          <Route
            path="/HolidayInnBengaluruRacecourse"
            element={<HolidayInnBengaluruRacecourse />}
          />
          <Route path="/GrandMercureMysuru" element={<GrandMercureMysuru />} />
          <Route
            path="/HotelDeepaComfortsMangalore"
            element={<HotelDeepaComfortsMangalore />}
          />
          <Route
            path="/HotelHeritageInnMysore"
            element={<HotelHeritageInnMysore />}
          />
          <Route
            path="/HotelSaiPalaceMangalore"
            element={<HotelSaiPalaceMangalore />}
          />
          <Route path="/NaveenBeachResort" element={<NaveenBeachResort />} />
          <Route
            path="/NexstayPanchvatiComforts"
            element={<NexstayPanchvatiComforts />}
          />
          <Route
            path="/RadissonVluPlazaHotelMysore"
            element={<RadissonVluPlazaHotelMysore />}
          />
          <Route path="/RNSResidency" element={<RNSResidency />} />
          <Route path="/ShangriLaBengaluru" element={<ShangriLaBengaluru />} />
          <Route path="/SeaViewBeachResort" element={<SeaViewBeachResort />} />
          <Route
            path="/SheratonGrandBangalore"
            element={<SheratonGrandBangalore />}
          />
          <Route path="/SouthernStarMysore" element={<SouthernStarMysore />} />
          <Route
            path="/TheLeelaPalaceBengaluru"
            element={<TheLeelaPalaceBengaluru />}
          />
          <Route path="/TheOberoiBengaluru" element={<TheOberoiBengaluru />} />
          <Route path="/VivantaMangalore" element={<VivantaMangalore />} />
          <Route path="/BookingHotel" element={<BookingHotel />} />
          <Route path="/ListYourProperty" element={<ListYourProperty />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/MysoreHotel" element={<MysoreHotel />} />
          <Route path="/BengaluruHotel" element={<BengaluruHotel />} />
          <Route path="/MurudeshwarHotel" element={<MurudeshwarHotel />} />
          <Route path="/MangaloreHotel" element={<MangaloreHotel />} />
          <Route path="/GrandMercureMysuru" element={<GrandMercureMysuru />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Cancellation" element={<Cancellation />} />
          <Route path="/BookingCancel" element={<BookingCancel />} />
          <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route
            path="/AJGrandHotelMangalore"
            element={<AJGrandHotelMangalore />}
          />
          <Route
            path="/HotelCarouselImages"
            element={<HotelCarouselImages />}
          />
          <Route path="/HotelNavBar" element={<HotelNavBar />} />
          <Route path="/HotelDetailsData" element={<HotelDetailsData />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
