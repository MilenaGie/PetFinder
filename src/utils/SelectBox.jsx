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

function SelectBox(selectName, selectValue, changeValue, data_type) {
    GetData(data_type, (results) => {
        dataCollection[data_type] = results;
    });
    return (
        <div>
            <TextField
                id="outlined-select"
                select
                required
                label={selectName}
                variant="outlined"
                onChange={(event) => {
                    changeValue(event.target.value);
                }}
                helperText="Please select a value"
                InputLabelProps={{
                shrink: true
                }}
                value={selectValue || ""}
                defaultValue={""}
            >
                {dataCollection[data_type]?.map((d, i) => (
                <MenuItem
                    key={d.id}
                    value={d.id}
                >
                    {d.value}
                </MenuItem>
                ))}
            </TextField>
        </div>
      );
}

export default SelectBox;
