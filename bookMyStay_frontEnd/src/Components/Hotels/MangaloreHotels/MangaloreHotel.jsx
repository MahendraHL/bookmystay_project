import React, { useState, useEffect } from 'react';
import HotelList from '../HotelList';


function MangaloreHotel() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getImageSrc = (hotelName) => {

        if (hotelName === "AJ Grand Hotel Mangalore") {
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/386516730.jpg?k=010021c4b79cf89b87e870b394f725293dc1b4d422a19c1da36869aebcc63904&o=&hp=1";
        }
        else if(hotelName === "Gold Finch Hotel"){
            return "https://image.wedmegood.com/resized/800X/uploads/member/88763/1511420770_fghnfx.JPG";
        }
        else if(hotelName === "Vivanta Mangalore"){
            return "https://images.trvl-media.com/lodging/1000000/530000/526400/526357/0837c403.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill";
        }
        else if(hotelName === "Hotel Sai Palace"){
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/193215845.jpg?k=e1e27420f9be7d6a0722a1da6e478c8a9d04e1e0f72408ae0f4186124f09be09&o=&hp=1";
        }
        else if(hotelName === "Deepa Comforts"){
            return "https://www.hoteldeepacomforts.com/pimages/n2.jpg";
        }
        
        else {
            return "https://example.com/default-image.jpg"; 
        }
    };

    const getLink = (hotelName) => {

        if (hotelName === "AJ Grand Hotel Mangalore") {
            return "/AJGrandHotelMangalore";
        } else if (hotelName === "Gold Finch Hotel") {
            return "/GoldfinchHotelMangaluru";
        }
        else if(hotelName === "Vivanta Mangalore"){
            return "/VivantaMangalore";
        }
        else if(hotelName === "Hotel Sai Palace"){
            return "/HotelSaiPalaceMangalore";
        }
        else if(hotelName === "Deepa Comforts"){
            return "/HotelDeepaComfortsMangalore";
        }
        else {
            return "#"; 
        }
    };

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const locationId = 4; // Assuming 1 is the locationId for Bengaluru

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
                    location: "Mangalore",
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
            <HotelList location="Mangalore" hotels={hotels} />
        </div>
    );
}

export default MangaloreHotel;
