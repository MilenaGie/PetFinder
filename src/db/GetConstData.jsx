import { GetData } from "./DataParser";

function GetConstData(data_type, component) {
    if(data_type != "pet_type" || data_type == "pet_breed" || data_type == "color") {
        console.log("Nie istnieje taki zbior danych");
        return(<></>);
    }
    return(
        <>{GetData(data_type, component)}</>
    );
}

export default GetConstData;
