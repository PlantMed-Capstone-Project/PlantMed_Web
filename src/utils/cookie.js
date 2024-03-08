function createCookie(name, value, days) {
    let expires
    if (days) {
        let date = new Date()
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000)
        expires = ';expires=' + date.toGMTString()
    } else expires = ''
    document.cookie = name + '=' + value + expires + '; path=/'
}

function readCookie(name) {
    if (typeof document === 'undefined') return null
    let nameEQ = name + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length)
        }
    }
    return null
}

function clearCookie(name) {
    createCookie(name, '', -1)
}

export { createCookie, readCookie, clearCookie }
