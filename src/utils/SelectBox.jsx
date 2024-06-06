import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { GetData } from "../db/DataParser";
import TextField from '@mui/material/TextField';

let dataPetType, dataPetBreed, dataPetColor;
let dataCollection = {
    "pet_type": dataPetType,
    "pet_breed": dataPetBreed,
    "color": dataPetColor,
}

function SelectBox(selectValue, changeValue, data_type, bgcolor, includeAll) {
    GetData(data_type, (results) => {
        dataCollection[data_type] = results;
        if (includeAll && dataCollection[data_type][999] == undefined) {
            dataCollection[data_type][999] = {id: 999, value: "wszystkie"}
        }
    });
    return (
        <div>
            <TextField
                id="outlined-select"
                select
                required
                variant="outlined"
                onChange={(event) => {
                    changeValue(event.target.value);
                }}
                InputLabelProps={{
                    shrink: true
                }}
                value={selectValue || ""}
                defaultValue={""}
                sx = {{'& > :not(style)': { m: 0, width: '20ch' },  bgcolor: bgcolor}}
                
            >
                {dataCollection[data_type]?.map((d, i) => (
                <MenuItem
                    key={d.id}
                    value={JSON.stringify({
                        id: d.id,
                        value: d.value,
                      })}
                >
                    {d.value}
                </MenuItem>
                ))}
            </TextField>
        </div>
      );
}

export default SelectBox;
