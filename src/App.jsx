// import { testData } from "./db/DatabaseConnection";
import TopBar from "./components/TopBar";
import FilterMenu from "./components/filter_menu/Menu";
import Map from "./components/map/Map";
import { ThemeProvider, createTheme } from '@mui/material';
import Box from "@mui/material/Box";
import Buttons from "./components/form_buttons/Buttons";
import { useState, useCallback } from "react";
import getDefaultFilter from "./data/defaultFilter"

import "./App.css";

const mainTheme = createTheme({
  palette: {
      primary: {
          main: '#ffffff',    // white
          text: '#57604B',
      },     
      secondary: {
          main: '#CBD1C2',    // light green
          text: '#ffffff',
      },
      tertiary: {
        main: '#E6DFD5',    // beige
        text: '#525252'     // gray
      }
  },
})


function App() {
  const [filter, setFilter] = useState( {...getDefaultFilter()});
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <ThemeProvider theme={mainTheme}>
      <TopBar />
      <Box sx={{ display: 'flex' }} >
        <FilterMenu currentFilter={filter} changeFilter={setFilter} updateComponent={forceUpdate}/>
        <Box width="100vw" sx={{ display: 'flex' }}>
          <Map currentFilter={filter} />
          <Buttons currentFilter={filter} changeFilter={setFilter}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
