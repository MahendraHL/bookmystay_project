import React, { useState, useEffect } from 'react';
import HotelList from '../HotelList';


function MysuruHotel() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getImageSrc = (hotelName) => {

        if (hotelName === "Grand Mercure Mysore") {
            return "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7c/29/40/grand-mercure-mysuru.jpg?w=700&h=-1&s=1";
        }
        else if(hotelName === "Hotel Heritage Inn Mysore"){
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218438811.jpg?k=21b01396168a38b1129fe8532b84b7369fc5597402f06ae728929bb850f1e0d2&o=&hp=1";
        }
        else if(hotelName === "Radisson Blu Plazza"){
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254763982.jpg?k=524253d62031ea37a5aae285c53e0d3e0a01f0ffeae6860dbe7f0ebd9922d3a5&o=&hp=1";
        }
        else if(hotelName === "Emerald Clarks Inn Suites"){
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/277753886.jpg?k=670b6bab3f2157ab5f7ba91174274e5fb8de5c94b1c7386e2afc82f34cc39afb&o=&hp=1";
        }
        else if(hotelName === "Southern Star Mysore"){
            return "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/73/19/27/southern-star-mysore.jpg?w=700&h=-1&s=1";
        }
        else {
            return "https://example.com/default-image.jpg"; // Default image source
        }
    };

    
    const getLink = (hotelName) => {
        if (hotelName === "Grand Mercure Mysore") {
            return "/GrandMercureMysuru";
        } else if (hotelName === "Hotel Heritage Inn Mysore") {
            return "/HotelHeritageInnMysore";
        }
        else if(hotelName === "Radisson Blu Plazza"){
            return "/RadissonVluPlazaHotelMysore";
        }
        else if(hotelName === "Emerald Clarks Inn Suites"){
            return "/EmeraldClarksInnSuites";
        }
        else if(hotelName === "Southern Star Mysore"){
            return "/SouthernStarMysore";
        }
        else {
            return "#"; 
        }
    };

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const locationId = 1; 

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
                    location: "Mysuru", 
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
            <HotelList location="Mysuru" hotels={hotels} />
        </div>
    );
}

export default MysuruHotel;
