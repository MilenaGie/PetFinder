function PopupContentLost({pet_type, color, pet_breed, contact_info, additional_info}) {
    return (
        <p style={{fontSize: 15,}}>
            <b>Rodzaj:</b> {pet_type.value}<br/>
            <b>Rasa:</b> {pet_breed.value}<br/>
            <b>Umaszczenie:</b> {color.value}<br/>
            <b>Kontakt:</b> <br/>
            {contact_info} <br/>
            <b>Dodatkowe informacje:</b> <br/>
            {additional_info}
        </p>
    );
}

export default PopupContentLost;
