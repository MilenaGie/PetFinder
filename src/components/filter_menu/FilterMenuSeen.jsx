import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function FilterMenuSeen({currentFilter, changeFilter}) {
    let newFilter = {
        "pets_seen": null,
        "pets_found": {},
      }
    return(
        <Box width="20" height="20">
            <p>asdasd1</p>
            <Button 
            variant="contained" 
            onClick= {(event) => {
                changeFilter(newFilter);
            }}> 
            Wyszukaj
            </Button>
        </Box>
    )
}

export default FilterMenuSeen;
