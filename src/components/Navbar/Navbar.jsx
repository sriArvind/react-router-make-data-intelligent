import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const Navbar = () => {

    return (

        <AppBar position='static' color='success' sx={{ py: 1 }}>

            <Container maxWidth='xl'>

                <Toolbar disableGutters>

                    <Typography noWrap component='div' sx={{ mr: 3 }}>
                        <Avatar
                            src='https://img.icons8.com/plasticine/45/000000/morty-smith.png'
                            alt='logo'
                        />
                    </Typography>

                    <Typography variant='h5' noWrap component='div' sx={{ mr: 3, color: '#F8B400' }}>
                        Rick and Morty
                    </Typography>

                    <Typography variant='h6' noWrap component='div' sx={{ mr: 3 }}>
                        <Link className={styles.linkStyle} to='/'>
                            Home
                        </Link>
                    </Typography>

                    <Typography variant='h6' noWrap component='div' sx={{ mr: 3 }}>
                        <Link className={styles.linkStyle} to='/liked'>
                            Liked
                        </Link>
                    </Typography>

                </Toolbar>

            </Container>

        </AppBar>

    );

};

export default Navbar;