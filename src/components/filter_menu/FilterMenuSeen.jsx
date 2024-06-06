import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import defaultFilter from '../../data/defaultFilter';

function FilterMenuSeen({changeFilter, updateComponent}) {
    let newFilter = { ...defaultFilter };
    
    return(
        <Box width="20" height="20">
            <p>asdasd1</p>
            <Button 
                variant="contained" 
                onClick= {(event) => {
                    newFilter.types = "pets_seen";
                    changeFilter(newFilter);
                    updateComponent();
                }}
            > 
                Wyszukaj
            </Button>
        </Box>
    )
}

export default FilterMenuSeen;
