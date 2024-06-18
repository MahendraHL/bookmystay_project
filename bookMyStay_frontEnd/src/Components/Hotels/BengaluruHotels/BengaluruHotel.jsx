import React, { useState, useEffect } from 'react';
import HotelList from '../HotelList';


function BengaluruHotel() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getImageSrc = (hotelName) => {
        if (hotelName === "The Leela Palace") {
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48254908.jpg?k=ce6fb7f862332a9baf41424b06770027cdc104b3201dacf9fd20a7bbf6df295c&o=&hp=1";
        }
        else if (hotelName === "Holiday inn Bengaluru Racecourse") {
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKGBhfG-ZuSZlv_b5pIrCr0WnK7GzOD6dwVfaD-VWog&s";
        }
        else if (hotelName === "Shangri La Bangalore") {
            return "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/a7/a1/7c/shangri-la-hotel-bengaluru.jpg?w=700&h=-1&s=1";
        }
        else if (hotelName === "Sheraton Grand Bangalore") {
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/465558115.jpg?k=345223aeb5f9c622a617ac88a0fb90ed3a092b862b3985c0de3f1309b02e7c31&o=&hp=1";
        }
        else if (hotelName === "The Oberoi Bangalore") {
            return "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31211348.jpg?k=c469403df80f10e33120c7be42b61d458746716a4e04c62ad4b9afc1c22edc98&o=&hp=1";
        }
        else {
            return "https://example.com/default-image.jpg";
        }
    };

    const getLink = (hotelName) => {

        if (hotelName === "The Leela Palace") {
            return "/TheLeelaPalaceBengaluru";
        } else if (hotelName === "Holiday inn Bengaluru Racecourse") {
            return "/HolidayInnBengaluruRacecourse";
        }
        else if (hotelName === "Shangri La Bangalore") {
            return "/ShangriLaBengaluru";
        }
        else if (hotelName === "Sheraton Grand Bangalore") {
            return "/SheratonGrandBangalore";
        }
        else if (hotelName === "The Oberoi Bangalore") {
            return "/TheOberoiBengaluru";
        }
        // Add more conditions as needed for other hotel names
        else {
            return "#";
        }
    };

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const locationId = 2;

                const response = await fetch(`http://localhost:8080/api/v1/bookmystay/getdescription/${locationId}`);


                if (!response.ok) {
                    throw new Error('Failed to fetch hotel data');
                }
                const responseData = await response.json();
                const data = responseData.data;
                console.log(data);
                const combinedHotels = data.map(hotel => ({
                    ...hotel,
                    location: "Bengaluru",
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
            <HotelList location="Bengaluru" hotels={hotels} />
        </div>
    );
}

export default BengaluruHotel;
