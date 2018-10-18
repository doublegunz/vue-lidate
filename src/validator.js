//validasi hanya untuk format @gmail.com
export function notGmail(value = "") {
    let regex = new RegExp(/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/);
    return regex.test(value)
}

//validasi email tersedia
export function isEmailAvailable(value) {
    if(value === "") return true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value.length > 100);
        }, 500);
    });
}

//validasi no telepon format indonesia
export function notPhone(value = "") {
    let regex = new RegExp(/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/);
    return regex.test(value)
}