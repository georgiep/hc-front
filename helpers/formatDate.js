export function formatDateDMY(newdate) {
    let date = new Date(newdate);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return date.getDate() + " " + monthNames[date.getMonth()]  + " " + date.getFullYear();
}