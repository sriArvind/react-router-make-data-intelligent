import React from 'react';
import { useEffect, useState } from 'react';
import SingleCard from '../components/SingleCard/SingleCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const Liked = ({ searchBy }) => {

    const [data, setData] = useState([]);


    useEffect(() => {

        const characters = localStorage.getItem('liked');

        if (characters) {
            setData(JSON.parse(characters));
        }

    }, [data]);


    const filteredData = data.filter((value) => {

        let searchValue = searchBy.trim();

        if (searchValue === '') {
            return value;
        }

        else if (
            (value.name.toLowerCase().includes(searchValue)) ||
            (value.status.toLowerCase().includes(searchValue)) ||
            (value.gender.toLowerCase() === (searchValue)) ||
            (value.species.toLowerCase().includes(searchValue))
        ) {
            return value;
        }

    });


    return (

        <Container sx={{ my: 5 }}>

            <Grid container rowSpacing={3} columnSpacing={3} justifyContent='center'>

                {
                    filteredData.map((item, index) => {

                        return (

                            <SingleCard key={index} data={item} />

                        );
                    })
                }

            </Grid>

        </Container>

    );
};


export default Liked;