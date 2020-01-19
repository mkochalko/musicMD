const validArray = array => {
    return array instanceof Array && array.length === 0;
}

module.exports = validArray;

const validText = str => {
    return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;