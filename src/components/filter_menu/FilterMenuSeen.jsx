import Box from '@mui/material/Box';
import { useState } from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import SelectBox from "../../utils/SelectBox";

const labelStyle = {
    mr: 1,
    display: { xs: 'none', md: 'flex' },
    fontWeight: 500,
    fontSize: 18,
    color: "tertiary.text",
    textDecoration: 'none',
    mt: 2,
};

function FilterMenuSeen({currentFilter, changeFilter, updateComponent}) {
    const stateAll = JSON.stringify({id: 999, value: "wszystkie"})
    const [pType, setPType] = useState(stateAll);
    const [pBreed, setPBreed] = useState(stateAll);
    const [pColor, setPColor] = useState(stateAll);
    
    return(
        <Box width="20" height="20">
            <Typography sx={labelStyle}>    
                Wybierz gatunek
            </Typography>
            {SelectBox(pType, setPType, "pet_type", "primary.main", true)}
            <Typography sx={labelStyle}>
                Wybierz rasę
            </Typography>
            {SelectBox(pBreed, setPBreed, "pet_breed", "primary.main", true)}
            <Typography sx={labelStyle}>
                Wybierz kolor
            </Typography>
            {SelectBox(pColor, setPColor, "color", "primary.main", true)}
            <br />
            <Button 
                variant="contained" 
                onClick= {(event) => {
                    currentFilter.types = "pets_seen";
                    currentFilter.filters.pet_type = JSON.parse(pType).value;
                    currentFilter.filters.pet_breed = JSON.parse(pBreed).value;
                    currentFilter.filters.color = JSON.parse(pColor).value;
                    updateComponent();
                }}
            > 
                Wyszukaj
            </Button>
        </Box>
    )
}

export default FilterMenuSeen;
