import { useState, useEffect } from "react";
import supabase from "./dbSetup";

function GetData(dbName, resultComponent, selection, filter) {
    if (selection == null) { selection == ''; }
    const [results, setResults] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
      const { data, error } = await supabase.from(dbName).select(selection);
      setResults(data);
    }
    
    if (filter == null) {
        return (<> {resultComponent(results)} </>);
    } else {
        return (<> {resultComponent(results, filter, dbName)} </>);
    }  
}

async function insertData(dbName, newData) {
    const { error } = await supabase.from(dbName).insert([newData]);
    // setResults(newData); // or newData??
}

export {GetData, insertData};