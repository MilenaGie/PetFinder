import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {insertData} from "../../db/DataParser";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import dotSeen from "../../assets/dot-lost.svg"
import SelectBox from "../../utils/SelectBox";

const labelStyle = {
    mr: 1,
    display: { xs: 'none', md: 'flex' },
    fontWeight: 600,
    color: "tertiary.text",
    textDecoration: 'none',
    mt: 2,
  };
  
function FormLost(onDone) {
    const [position, setPosition] = useState('52.2 21.3');
    let stateBasic = JSON.stringify({id: 99, value: "inne"});
    const [pType, setPType] = useState(stateBasic);
    const [pBreed, setPBreed] = useState(stateBasic);
    const [pColor, setPColor] = useState(stateBasic);
    const [additInfo, setAdditInfo] = useState("");
    const [contact, setContact] = useState("");
    const [dateAction, setDateAction] = useState("05 October 2011 14:48 UTC");
    
    const handleChange = (event) => {
        insertDataToDB(position, pType, pBreed, pColor, additInfo, contact);//, dateAction);
        onDone();
    }

    return (
        <>
        <Typography
           variant="h5"
           sx={{
             mr: 1,
             display: { xs: 'none', md: 'flex' },
             fontWeight: 700,
             letterSpacing: '.1rem',
             color: "primary.text",
             textDecoration: 'none',
           }}
        >
          Zgłoś zaginione zwierzę
        </Typography>
        <div direction="row" spacing={2} p={1} sx={{position: 'fixed' }}>
          <Typography sx={labelStyle}>
            Wprowadź lokalizację
          </Typography>
          <TextField
            id="outlined-controlled"
            value={position}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
            sx = {{bgcolor: "tertiary.main",  width: '20ch'}}
          />
          <Typography sx={labelStyle}>
            Wybierz gatunek
          </Typography>
          {SelectBox(pType, setPType, "pet_type", "tertiary.main")}
          <Typography sx={labelStyle}>
            Wybierz rasę
          </Typography>
          {SelectBox(pBreed, setPBreed, "pet_breed", "tertiary.main")}
          <Typography sx={labelStyle}>
            Wybierz kolor
          </Typography>
          {SelectBox(pColor, setPColor, "color", "tertiary.main")}
          <Typography sx={labelStyle}>
              Wpisz dodatkowy kontakt
          </Typography>
          <TextField
            id="outlined-controlled"
            label="Podaj kontakt do siebie"
            value={contact}
            fullWidth={true}
            multiline={true}
            minRows={2}
            onChange={(event) => {
              setContact(event.target.value);
            }}
            sx = {{bgcolor: "tertiary.main"}}
          />
          <Typography sx={labelStyle}>
              Wpisz dodatkowe informacje
          </Typography>
          <TextField
            id="outlined-controlled"
            label="Dodatkowe Informacje"
            value={additInfo}
            fullWidth={true}
            multiline={true}
            minRows={3}
            onChange={(event) => {
              setAdditInfo(event.target.value);
            }}
            sx = {{bgcolor: "tertiary.main"}}
          />
        </div>
        <br />
        <Button 
          variant="contained" 
          onClick={handleChange}
          sx = {{bgcolor: "secondary.main", fontWeight: 'bold', color: "tertiary.text"}}
        >
          Potwierdź
        </Button>
      </>
  );
}

function insertDataToDB(position, pet_type, pet_breed, pet_color, additional_info, contact) {
    insertData(
      "pets_lost", 
      {position: position, 
        pet_type: JSON.parse(pet_type).id, 
        pet_breed: JSON.parse(pet_breed).id,
        color: JSON.parse(pet_color).id,
        additional_info: additional_info,
        contact_info: contact,
      }
    );
}

export default FormLost;