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