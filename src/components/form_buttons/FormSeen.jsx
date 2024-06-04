import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {insertData} from "../../db/DataParser";
import { useState } from "react";

// import {GetSeenData } from "../../db/dbPetsSeen";
// import GetSeenData from "../../db/dbPetsSeen";


function FormSeen({filter, changeFilter}) {
  const [position, setPosition] = useState('52.2 21.3');

  let newFilter = {
    "pets_seen": {
      "type": 1
    },
    "pets_found": {},
  }
  const handleChange = (event) => {
    insertDataToDB(position, 1, 1, 1);
    // changeFilter(newFilter);
  }
  return (
      <>
          <p>teteet</p>
          <TextField
            id="outlined-controlled"
            label="Pozycja"
            value={position}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
          <Button 
            variant="contained" 
            onClick={handleChange}
            // {
            //   ()=> {
            //     console.log(change);
            //     // insertDataToDB(position, 1, 1, 1);
            //     // change(newFilter);
            //   }
            // }
          >
            Potwierdź
          </Button>
      </>
  );
}

function insertDataToDB(position, pet_type, pet_breed, pet_color) {
  insertData(
    "pets_seen", 
    {position: position, pet_type: pet_type, pet_breed: pet_breed, color: pet_color}
  );
}

export default FormSeen;