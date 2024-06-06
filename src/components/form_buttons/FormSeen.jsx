import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {insertData} from "../../db/DataParser";
import { useState } from "react";
import dotSeen from "../../assets/dot-seen.svg"
import defaultFilter from "../../data/defaultFilter";
import SelectBox from "../../utils/SelectBox";

// import Date from Date;

function FormSeen() {
  const [position, setPosition] = useState('52.2 21.3');
  const [pType, setPType] = useState(1);
  const [pBreed, setPBreed] = useState(1);
  const [pColor, setPColor] = useState(1);
  const [additInfo, setAdditInfo] = useState("");
  const [dateAction, setDateAction] = useState("05 October 2011 14:48 UTC");

  const handleChange = (event) => {
    insertDataToDB(position, pType, pBreed, pColor, additInfo, dateAction);
  }
  return (
      <>
        <div direction="row" spacing={4} p={1} sx={{position: 'fixed' }}>
          <TextField
            id="outlined-controlled"
            label="Pozycja"
            value={position}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
          {SelectBox("Typ zwierzęcia", pType, setPType, "pet_type")}
          {SelectBox("Rasa zwierzęcia", pBreed, setPBreed, "pet_breed")}
          {SelectBox("Kolor zwierzęcia", pColor, setPColor, "color")}
          <TextField
            id="outlined-controlled"
            label="Dodatkowe Informacje"
            value={additInfo}
            onChange={(event) => {
              setAdditInfo(event.target.value);
            }}
          />
        </div>
        <br />
        <Button 
          variant="contained" 
          onClick={handleChange}
        >
          Potwierdź
        </Button>
      </>
  );
}

function insertDataToDB(position, pet_type, pet_breed, pet_color, additional_info, date_action) {
  insertData(
    "pets_seen", 
    {position: position, pet_type: pet_type, pet_breed: pet_breed, color: pet_color, additional_info:additional_info, date_action:new Date(date_action).toISOString()}
  );
}

export default FormSeen;