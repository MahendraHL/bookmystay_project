// HotelDetailsData.js
import React from 'react';
import HotelDetails from './HotelDetails';
import WifiIcon from '@mui/icons-material/Wifi';
import VideocamIcon from '@mui/icons-material/Videocam';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import './HotelDetails.css'


function HotelDetailsData({ onHotelSelect }) {
  

    const amenities = [
        { name: 'Wifi', icon: <WifiIcon/> },
        { name: 'AC', icon: <AcUnitIcon/> },
        { name: 'CCTV', icon: <VideocamIcon/> },
        { name: 'Tv', icon: <TvIcon/> },
        { name: 'Power', icon: <PowerOutlinedIcon/> },
        { name: 'Parking', icon: <LocalParkingOutlinedIcon/> },
        { name: 'Tissue Box', icon: <CheckOutlinedIcon/> },
        { name: 'Reception', icon: <CheckOutlinedIcon/> },
    ];

    const rooms = [
        { image: 'https://www.collinsdictionary.com/images/full/doubleroom_564885484_1000.jpg', sharedType: 'Room with Breakfast', price: '1299 INR (Refundable)' },
        { image: 'https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_1280.jpg', sharedType: 'Room Only', price: '999 INR (Refundable)' },
    ];

    const policies = [
        'Cancellation fee of 50% of the total booking if cancelled less than 24 hours prior to arrival',
        'Above 12 years considered as Adult and will be chargeable',
        'An extra bed will be provided to accommodate any additional guest included in the booking for a charge mentioned below.',
        'INR 750 will be charged for an extra mattress per guest. (To be paid at the property)'
    ];

    const terms = [
        'The standard check-in time is 12:00 PM and the standard check-out time is 11:30 AM',
        'This is a couple friendly property. Unmarried/Unrelated couples are allowed to check-in. Local Ids can be presented as proof of identification.',
        'Number of modifications possible on a booking will be on the discretion of Gos',
        'Selective offers of Gos will not be valid on cancellation or modification of a booking',
        'Passport, Aadhar and Driving License are accepted as ID proof',
        'Pets are not allowed.',
        'Any e-coupon discount on the original booking shall be forfeited in the event of cancellation or modification'
    ];

    const nearby = [
        'Mysuru Palace - 0.3km',
        'Mysuru Zoo - 0.7km',
        "Chamundi hill - 2.0km",
        "Mysuru Mall - 0.5km"
    ];

    return (
        <div>
            <HotelDetails amenities={amenities} rooms={rooms} policies={policies} terms={terms} nearby={nearby} />
        </div>
    );
}

export default HotelDetailsData;
