function checkTimestamp(filter, checking) {
    if (checking >= filter[from] && checking <= filter[to]) {
        return true;
    } else {
        return false;
    }
}

function checkBasic(filter, attribute) {
    if (filter == null || filter.includes(attribute)) {
        // console.log("true")
        return true;
    } else {
        // console.log("false")
        return false;
    } 
}

function check(filter, el) {
    const {pet_type, pet_breed, color} = el;
    let checks = [
        checkBasic(filter.pet_type, pet_type.pet_type),
        checkBasic(filter.pet_breed, pet_breed.pet_breed),
        checkBasic(filter.color, color.color)
        // checkTimestamp(filter[date_action], el.date_action),
        // checkTimestamp(filter[date_added], el.date_added)
    ];
    // console.log(checks);
    if (checks.includes(false)) {
        return false;
    } else {
        return true;
    }
}

export {check};

//TODO change name file to filtersCheck