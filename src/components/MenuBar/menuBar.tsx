import React from 'react';
import { AppBar, Button, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { ReactComponent as CompanyLogo } from '../../img/company-logo.svg'

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

function MenuBar() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <AppBar position='static' className='menu-bar'>

            {/* <Drawer direction='right' open={isOpen}>
            {MenuList.map((data) => (
                <>
                <List>
                </List>
                </>
            ))}
            </Drawer> */}

            <Grid padding='0'>
                <Grid className='menu-bar__outside'>
                    <Button>
                        <CompanyLogo/>
                    </Button>
                    <Button>
                        <MenuIcon style={{fill: 'black'}}/>
                    </Button>
                </Grid>
            </Grid>


        </AppBar>
    )
}

export default MenuBar;