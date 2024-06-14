import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import getDefaultFilter from '../../data/defaultFilter';

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

function FilterMenu({currentFilter, changeFilter, updateComponent}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const tabWidth = { width: "33%" };
    return (
        <Box 
            height="92vh" 
            width="20vw"
            sx={{ bgcolor: "secondary.main", boxShadow: '3', justifyContent: "space-between"}}
        >
            <Box      
                alignItems="left"
                textAlign="left"
                gap={4}
                p={2} 
            >
                <Tabs value={value} onChange={handleChange}>
                    <Tab icon={<FavoriteIcon />} label="WIDZIANE" style={tabWidth}/>
                    <Tab icon={<FavoriteIcon />} label="ZNALEZIONE" style={tabWidth}/>
                    <Tab icon={<FavoriteIcon />} label="ZAGINIONE" style={tabWidth}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <FilterMenuSeen 
                        currentFilter={currentFilter}
                        changeFilter={changeFilter}
                        updateComponent={updateComponent} 
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FilterMenuFound 
                        currentFilter={currentFilter}
                        changeFilter={changeFilter}
                        updateComponent={updateComponent} 
                    />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <FilterMenuLost 
                        currentFilter={currentFilter}
                        changeFilter={changeFilter}
                        updateComponent={updateComponent} 
                    />
                </TabPanel>
            </Box>
            <Box sx={{ margin: 10 }} />
            <Button
                variant="contained" 
                onClick= {(event) => {
                    changeFilter({...getDefaultFilter()});
                    updateComponent();
                }}
            >
                Wyświetl wszystkie zgłoszenia
            </Button>
        </Box>
    );
}

export default FilterMenu;
