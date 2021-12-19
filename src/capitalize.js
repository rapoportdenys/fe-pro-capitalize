function capitalize(string) {
    let result = string.split(' ');

    let newArray = result.map(function (item) {
        return item.charAt(0).toUpperCase() + item.slice(1);
    });
   
    return newArray.join(' ');
}

module.exports = capitalize;
