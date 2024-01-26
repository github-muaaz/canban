export const mapToUrl = (str) => {

    let url = ""
    let c;

    str = str.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        c = str.charAt(i)

        if (c === " ")
            url += ('-');
        else
            url += (c);
    }

    return url
}

export const getCompletedCount = items => {
    return items.filter(i => !!i.isCompleted).length;
}


export const capitalizeAll = (str) => {
    if (!str)
        return str;
    return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

export const capitalize = (str) => {
    if (!str)
        return str;
    return str.charAt(0).toUpperCase() + str.substring(1);
}