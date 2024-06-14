import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import getDefaultFilter from '../../data/defaultFilter';

function FilterMenuLost({currentFilter, changeFilter, updateComponent}) {
    let newFilter = {...getDefaultFilter()};

    return(
        <Box width="20" height="20">
            <p>asdasd3</p>
            <Button 
                variant="contained" 
                onClick= {(event) => {
                    newFilter.types = "pets_lost";
                    changeFilter(newFilter);
                    updateComponent();
                }}
            > 
                Wyszukaj
            </Button>
        </Box>
    )
}

export default FilterMenuLost;
