const pad = (array, minSize, value=null) => {
    if (minSize < 0 || array.length > minSize) {
        return array
    } else {
        while (array.length < minSize) {
            array.push(value)
        }
    }
};

module.exports = {pad};
