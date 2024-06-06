function PopupContentFound({pet_type, color, pet_breed}) {
    return (
        <p>
            Rodzaj: {pet_type.value}<br/>
            Rasa: {pet_breed.value}<br/>
            Umaszczenie: {color.value}<br/>
            
        </p>
    );
}

export default PopupContentFound;
