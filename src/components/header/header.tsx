import './header.scss'

import brandLogo from '@/assets/brandLogo.png'
import categoriesIcon from '@/assets/categoriesIcon.png'
import requestIcon from '@/assets/requestIcon.png'
import searchIcon from '@/assets/searchIcon.png'
import homeIcon from '@/assets/homeIcon.png'
import contactIcon from '@/assets/contactIcon.png'

import architectureBrandImage from '@/assets/architectureBrandImage.png'
import cityBrandImage from '@/assets/cityBrandImage.png'
import creatorBrandImage from '@/assets/creatorBrandImage.png'
import dotsBrandImage from '@/assets/dotsBrandImage.png'
import duploBrandImage from '@/assets/duploBrandImage.png'
import friendsBrandImage from '@/assets/friendsBrandImage.png'
import ideasBrandImage from '@/assets/ideasBrandImage.png'
import minifiguresBrandImage from '@/assets/minifiguresBrandImage.png'
import technicBrandImage from '@/assets/technicBrandImage.png'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Header() {
    const sectionsMenu = [
        {
            name: 'home',
            text: 'Home',
            icon: homeIcon,
        },
        {
            name: 'request',
            text: 'Requests',
            icon: requestIcon,
        },
        {
            name: 'contact',
            text: 'Contact us',
            icon: contactIcon,
        },
    ];

    const themesMenu = [
        {
            name: 'gifting',
            text: 'Gifting'
        },
        {
            name: 'travel',
            text: 'Travel'
        },
        {
            name: 'adultsWelcome',
            text: 'Adults Welcome'
        },
        {
            name: 'artAndHome',
            text: 'Art & Home Décor'
        },
        {
            name: 'space',
            text: 'Space'
        },
        {
            name: 'popCulture',
            text: 'Pop Culture'
        },
        {
            name: 'toddlers',
            text: 'Toddlers'
        },
        {
            name: 'realWorldRolePlaying',
            text: 'Real World Role Playing'
        },
    ]

    const brandsMenu = [
        {
            name: 'architecture',
            image: architectureBrandImage,
        },
        {
            name: 'city',
            image: cityBrandImage,
        },
        {
            name: 'creator',
            image: creatorBrandImage,
        },
        {
            name: 'dots',
            image: dotsBrandImage,
        },
        {
            name: 'duplo',
            image: duploBrandImage,
        },
        {
            name: 'friends',
            image: friendsBrandImage,
        },
        {
            name: 'ideas',
            image: ideasBrandImage,
        },
        {
            name: 'minifigures',
            image: minifiguresBrandImage,
        },
        {
            name: 'technic',
            image: technicBrandImage,
        },
    ]

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box role="presentation" onClick={toggleDrawer(false)}>
          <div className='brandLogoDrawer'>
            <img 
                src={brandLogo} 
                alt="Brand logo" 
            />
            <CloseOutlinedIcon className='closeOutlinedIcon'/>
          </div>
          <List className='sectionMenu'>
            {sectionsMenu.map((section) => (
              <ListItem key={section.name} disablePadding>
                <ListItemButton className='sectionOption'>
                    <img 
                        src={section.icon} 
                        alt=""
                    />
                    <ListItemText primary={section.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <h3 className='sectionTitle'>Themes</h3>

          <List className='sectionMenu'>
            {themesMenu.map((theme) => (
              <ListItem key={theme.name} disablePadding>
                <ListItemButton>
                  <ListItemText primary={theme.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List className='sectionMenu'>
            {brandsMenu.map((brand) => (
              <div className='sectionBrand' key={brand.name}>
                <img src={brand.image} alt={brand.name + 'Brand image'} />
              </div>
            ))}
          </List>
        </Box>
      );

    return (
        <div className='headerContainer'>
            <Drawer 
                anchor={'top'} 
                open={open} 
                onClose={toggleDrawer(false)}
            >
                {DrawerList}
            </Drawer>

            <div className='actionsMenu'>
                <img 
                    src={brandLogo}
                    alt="Brand logo"
                    className='brandLogo'
                    onClick={toggleDrawer(true)}
                />
                <div 
                    className='actionOption' 
                    onClick={toggleDrawer(true)}
                >
                    <img 
                        src={categoriesIcon} 
                        alt="Categories icon"
                        className='categoriesIcon'
                    />
                    <span className='categoryText'>Categories</span>
                </div>
            </div>

            <div className='actionsMenu'>
                <div 
                    className='actionOption'
                    onClick={toggleDrawer(true)}    
                >
                    <img 
                        src={searchIcon} 
                        alt="Search icon"
                        className='searchIcon'
                    />
                    <span className='actionText'>Search</span>
                </div>

                <div 
                    className='actionOption'
                    onClick={toggleDrawer(true)}    
                >
                    <img 
                        src={requestIcon}
                        alt="Request icon"
                        className='requestIcon'
                    />
                    <span className='actionText'>Request</span>
                </div>
            </div>
        </div>
    )
}

export default Header