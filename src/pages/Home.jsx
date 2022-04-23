import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import Container from '@mui/material/Container';


const Home = ({ searchBy }) => {

    const [apiData, setApiData] = useState([]);

    const getApiData = () => {
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(response => {
                // console.log(response.data);
                setApiData(response.data.results);
            }).catch(err => {
                console.log(err);
            })
    };


    useEffect(() => {
        getApiData();
    }, []);


    return (
        <Container sx={{ my: 5 }}>
            <CardDisplay searchBy={searchBy} data={apiData} />
        </Container>
    );

};

export default Home;