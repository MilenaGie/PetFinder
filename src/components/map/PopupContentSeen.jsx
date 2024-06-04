function PopupContentSeen({pet_type, color, pet_breed}) {
    return (
    <p>
    Rodzaj: {pet_type.pet_type}<br/>
    Rasa: {pet_breed.breed_type}<br/>
    Umaszczenie: {color.color}<br/>
    </p>
    );
}

export default PopupContentSeen;
