import React from 'react';
import { AppBar, Button, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { ReactComponent as CompanyLogo } from '../../img/company-logo.svg'
import { ReactComponent as FooterLogo } from '../../img/footerlogo.svg'
import bg from '../../img/footerbg.png'

export type MenuOption = {
    label: string,
    url: string
}

export const MenuList: Array<MenuOption> = [
    {
        label: 'Home',
        url: '/home'
    },
    {
        label: 'Contacts',
        url: '/contacts'
    }
]

function Footer() {


    return (
        <Grid className='footer'>
            <FooterLogo />
            <Grid className='footer__frame'>
                <select className='footer__frame__select'>
                    <option className='footer__frame__option'>TECHNOLOGY DEPARTMENT</option>
                </select>
                <div className='footer__frame__address'>
                    Jl. Lembong No 8 <br />
                    Kel. Braga Kec. Sumur <br />
                    Bandung, Kota <br /> Bandung, Jawa Barat
                </div>
            </Grid>
            <Grid className='footer__values'>
                <div className='footer__values__text'>Who We Are</div>
                <div className='footer__values__text'>Our Values</div >
                <div className='footer__values__text'>The Perks</div>
                
            </Grid>

        </Grid>
    )
}

export default Footer;