import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import Grid from '@mui/material/Grid';


const CardDisplay = ({ searchBy, data }) => {


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

        <Grid container rowSpacing={3} columnSpacing={3} justifyContent="center">

            {
                filteredData.map((item, index) => {

                    return (

                        <SingleCard key={index} data={item} />

                    );
                })
            }

        </Grid>
    );
};

export default CardDisplay;