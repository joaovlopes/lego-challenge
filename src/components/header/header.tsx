import './header.scss'

import brandLogo from '@/assets/brands/brandLogo.png'
import categoriesIcon from '@/assets/icons/categoriesIcon.png'
import searchIcon from '@/assets/icons/searchIcon.png'
import requestIcon from '@/assets/icons/requestIcon.png';
import contactIcon from '@/assets/icons/contactIcon.png';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { SectionsMenu } from '@/constants/sections-menu'
import { ThemesMenu } from '@/constants/themes-menu'
import { BrandsMenu } from '@/constants/brands-menu';

function Header() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box role="presentation" onClick={toggleDrawer(false)} id="menu" sx={{ height: 1/1 }}>
          <div className='listMenu'>
            <div className='brandLogoDrawer'>
                <img 
                    src={brandLogo} 
                    alt="Brand logo" 
                />
                <CloseOutlinedIcon className='closeOutlinedIcon'/>
            </div>
            <div className='sectionMenu'>
                {SectionsMenu.map((section) => (
                <ListItem key={section.name} disablePadding>
                    <ListItemButton className='sectionOption listItemButton'>
                        <img 
                            src={section.icon} 
                            alt=""
                        />
                        <ListItemText primary={section.text} className='sectionText'/>
                    </ListItemButton>
                </ListItem>
                ))}
            </div>

            <div>
                <h3 className='sectionTitle'>Themes</h3>
            </div>

            <div className='sectionMenu'>
                {ThemesMenu.map((theme) => (
                <ListItem key={theme.name} disablePadding>
                    <ListItemButton className='listItemButton'>
                        <ListItemText primary={theme.text} className='themeText'/>
                    </ListItemButton>
                </ListItem>
                ))}
            </div>
          </div>

          <div className='sectionMenuBrand'>
            {BrandsMenu.map((brand) => (
              <div className='sectionBrand' key={brand.name}>
                <img src={brand.image} alt={brand.name + 'Brand image'} />
              </div>
            ))}
          </div>
        </Box>
      );

    return (
        <header className='headerContainer'>
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


            <div className='centerMenuCategories'>
                {ThemesMenu.map((themes) => (
                    <a 
                        rel="stylesheet" 
                        href="#" 
                        key={themes.name}
                    >
                        {themes.text}
                    </a>
                ))}
            </div>


            <div className='actionsMenu'>
                <div 
                    className='actionOption contactAction'
                    onClick={toggleDrawer(true)}    
                >
                    <img 
                        src={contactIcon} 
                        alt="Contact icon"
                        className='contactIcon'
                    />
                    <span className='actionText'>Contact us</span>
                </div>
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
        </header>
    )
}

export default Header