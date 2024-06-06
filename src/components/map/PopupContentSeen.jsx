function PopupContentSeen({pet_type, color, pet_breed, additional_info}) {
    return (
        <p style={{fontSize: 15,}}>
            <b>Rodzaj:</b> {pet_type.value}<br/>
            <b>Rasa:</b> {pet_breed.value}<br/>
            <b>Umaszczenie:</b> {color.value}<br/>
            <b>Dodatkowe informacje:</b> <br/>
            {additional_info}
        </p>
    );
}

export default PopupContentSeen;
