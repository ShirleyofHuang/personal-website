import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Parallex from '../components/Parallex';
import TravelContainer from '../components/TravelContainer';
import Header from '../components/Header';
import { CountryInfo } from '../types/CountryType';
// import '../css/TravelPage.css';

const countries = [
    {
        country: "Vietnam",
        cities: ["Hanoi", "Ho Chi Minh", "Hoi An", "Danang", "Ha Long Bay"], 
        pictures: ["vietnam1.jpeg", "vietnam2.jpeg", "vietnam3.jpeg", "vietnam4.jpeg", "vietnam5.jpeg"]
    }, 
    {
        country: "Thailand",
        cities: ["Bangkok", "Chiang Mai", "Koh Tao", "Koh Samui", "Khao Sok", "Ao Nang"], 
        // pictures: ["thailand1.jpeg"]
        pictures: ["thailand1.jpeg", "thailand2.jpeg", "thailand3.jpeg", "thailand4.jpeg", "thailand5.jpeg", "thailand6.jpeg"]
    }, 
    {
        country: "Singapore",
        cities: ["Singaore", "Haji Lane", "Chinatown"], 
        pictures: ["singapore1.jpeg", "singapore2.jpeg", "singapore3.jpeg"]
    }, 
    {
        country: "Indonesia",
        cities: ["Bali", "Ubud"], 
        pictures: ["bali1.jpeg", "bali2.jpeg"]
    }, 
    {
        country: "South Korea",
        cities: ["Seoul", "Incheon", "Myeongdong"], 
        pictures: ["sk1.jpeg", "sk2.jpeg", "sk3.jpeg"]
    }, 
]

const TravelPage = () => {
    return (

        <div>
            <Parallex />
            {countries.map((travel: CountryInfo) => {
                return <TravelContainer 
                    country={travel.country} 
                    cities={travel.cities} 
                    pictures={travel.pictures}
                    />
            })}
        </div>
    )
}

export default TravelPage