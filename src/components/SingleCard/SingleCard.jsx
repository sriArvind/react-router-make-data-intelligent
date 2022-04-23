import React from 'react';
import styles from './SingleCard.module.css';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const SingleCard = ({ data }) => {

    const [flip, setFlip] = useState(true);


    // Managing Liked / Disliked Items;
    // handleLike() Function Start;
    const handleLike = (event) => {

        event.stopPropagation();

        let flag = true;

        let item;

        const characters = localStorage.getItem('liked');

        if (!characters || characters === []) {

            localStorage.setItem('liked', JSON.stringify([data]));
            alert('Item Liked !');

            return;

        }

        else {

            const likedArray = JSON.parse(characters);

            for (let i = 0; i < likedArray.length; i++) {

                if (likedArray[i].id === data.id) {
                    flag = false;
                    item = i;
                }

            }

            if (flag) {

                likedArray.push(data);

                localStorage.setItem('liked', JSON.stringify(likedArray));

                alert('Item Liked !');

            }

            else {

                likedArray.splice(item, 1);

                localStorage.setItem('liked', JSON.stringify(likedArray));

                alert('Item Disliked !');

            }

            return;

        }

    }
    // handleLike() Function End;


    return (

        <Grid className={styles.cardStyle} item sm={6} md={3}>

            {

                flip ?

                    <Card
                        sx={{ width: 270, height: 345 }}
                        onClick={() => setFlip(!flip)}
                    >

                        <CardMedia
                            component='img'
                            image={data.image}
                            alt={data.name}
                        />

                        <CardActions disableSpacing>

                            <IconButton
                                className={`${styles.iconStyle}`}
                                onClick={handleLike}
                            >
                                <FavoriteIcon />
                            </IconButton>

                        </CardActions>

                    </Card>

                    :

                    <Card
                        sx={{ width: 270, height: 345 }}
                        onClick={() => setFlip(!flip)}
                    >

                        <CardContent>

                            <Typography variant='h6' sx={{ mt: 3, textAlign: 'center', color: '#516BEB' }}>
                                Name: {data.name}
                            </Typography>
                            <Typography variant='h6' sx={{ mt: 3, textAlign: 'center', color: '#F76E11' }}>
                                Status: {data.status}
                            </Typography>
                            <Typography variant='h6' sx={{ mt: 3, textAlign: 'center', color: '#711A75' }}>
                                Gender: {data.gender}
                            </Typography>
                            <Typography variant='h6' sx={{ mt: 3, textAlign: 'center', color: '#066163' }}>
                                Species: {data.species}
                            </Typography>

                        </CardContent>

                        <CardActions disableSpacing>

                            <IconButton
                                className={`${styles.iconStyle}`}
                                onClick={handleLike}
                            >
                                <FavoriteIcon />
                            </IconButton>

                        </CardActions>

                    </Card>

            }

        </Grid>

    );

};


export default SingleCard;