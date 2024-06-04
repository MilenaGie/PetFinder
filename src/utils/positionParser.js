function parsePosition(pos) {
    let res = pos.split(" ");
    return([parseFloat(res[0]), parseFloat(res[1])]);
}

export default parsePosition;
