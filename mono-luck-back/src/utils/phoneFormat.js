//phone recheck(886)
format886PhoneNumber = (phone) => {
    if( phone.startsWith('886')){
        phone = phone.replace(/886/,'0');
    }
    return phone;
}

module.exports = {
    format886PhoneNumber
}