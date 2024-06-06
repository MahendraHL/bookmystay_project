import React, { useState, useEffect } from 'react';
import HotelList from '../HotelList';


function MurudeshwarHotel() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    const getImageSrc = (hotelName) => {
   
        if (hotelName === "Next Stay Panhavati Comforts") {
            return "https://images.trvl-media.com/lodging/76000000/75820000/75812200/75812189/af5ed881.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill";
        }
        else if(hotelName === "Fab Hotel Suvee Boutique"){
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321848183.jpg?k=f9fa430748dc63d2f02524d2347eeef52c073d1635c9aff1b1aba74f4b5d30f2&o=&hp=1";
        }
        else if(hotelName === "Naveen Beach Resort"){
            return "https://www.naveenhotels.com/Naveen-Beach-Resort/images/header/Header-04.jpg";
        }
        else if(hotelName === "Sea view Beach Resort"){
            return "https://media.timbu.com/img/h1442130/562/422/b1/sea-view-beach-resort-1442130-11.jpg";
        }
        else if(hotelName === "RNS Residency"){
            return "https://content.jdmagicbox.com/comp/bhatkal/z7/9999p8385.8385.110222104550.g6z7/catalogue/rns-residency-murdeshwar-bhatkal-3-star-hotels-gg8g35y.jpg";
        }
        else {
            return "https://example.com/default-image.jpg"; 
        }
    };


    const getLink = (hotelName) => {
        if (hotelName === "Next Stay Panhavati Comforts") {
            return "/NexstayPanchvatiComforts";
        } else if (hotelName === "Fab Hotel Suvee Boutique") {
            return "/FabHotelSuveeBoutiqueHotel";
        }
        else if(hotelName === "Naveen Beach Resort"){
            return "/NaveenBeachResort";
        }
        else if(hotelName === "Sea view Beach Resort"){
            return "/SeaViewBeachResort";
        }
        else if(hotelName === "RNS Residency"){
            return "/RNSResidency";
        }
        else {
            return "#"; 
        }
    };

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const locationId = 3; 

                const response = await fetch(`http://localhost:8080/api/v1/bookmystay/getdescription/${locationId}`);
                
                
                if (!response.ok) {
                    throw new Error('Failed to fetch hotel data');
                }
                const responseData = await response.json();
                const data = responseData.data;
                console.log(data);
                const combinedHotels = data.map(hotel => ({
                    ...hotel,
                    propertyId: hotel.id, 
                    location: "Murudheswar", 
                    imageSrc: getImageSrc(hotel.hotelName), 
                    link: getLink(hotel.hotelName), 
                }));

                setHotels(combinedHotels);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchHotelData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <HotelList location="Murudheswar" hotels={hotels} />
        </div>
    );
}

export default MurudeshwarHotel;
