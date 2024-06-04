import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import FilterMenuSeen from './FilterMenuSeen';
import FilterMenuFound from './FilterMenuFound';
import FilterMenuLost from './FilterMenuLost';

function TabPanel(props) {
    const { children, value, index } = props;
    
    return (
        <div hidden={value !== index} >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function FilterMenu({currentFilter, changeFilter}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const tabWidth = { width: "33%" };
    return (
        <Box 
            height="89vh"    ////
            width="20vw"
            alignItems="left"
            textAlign="left"
            gap={4}
            p={2}
            sx={{ bgcolor: "secondary.main", boxShadow: '3'}}
        >
            <Tabs value={value} onChange={handleChange}>
                <Tab icon={<FavoriteIcon />} label="WIDZIANE" style={tabWidth}/>
                <Tab icon={<FavoriteIcon />} label="ZNALEZIONE" style={tabWidth}/>
                <Tab icon={<FavoriteIcon />} label="ZAGINIONE" style={tabWidth}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <FilterMenuSeen currentFilter={currentFilter} changeFilter={changeFilter} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FilterMenuFound currentFilter={currentFilter} changeFilter={changeFilter} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FilterMenuLost currentFilter={currentFilter} changeFilter={changeFilter} />
            </TabPanel>
        </Box>
    );
}

export default FilterMenu;
