export const formatDateYYYY = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export const formatDateString = (date) => {
    return new Date(date).toLocaleDateString('en', { day: '2-digit' }) + ' ' + new Date(date).toLocaleDateString('en', { month: 'short' }) + ' ' + new Date(date).toLocaleDateString('en', { year: 'numeric' })
}