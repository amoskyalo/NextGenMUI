const useConstructLookupsFromArrayObjectElements = (arrEl, nameKey, valueKey) => {
    let arr = [];

    for (let el of arrEl) {
        arr.push({ name: el[nameKey], value: el[valueKey] })
    }

    return arr;
}

export { useConstructLookupsFromArrayObjectElements }