function createCookie(name, value, days = 3) {
    let expires
    if (days) {
        var date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = '; expires=' + date.toGMTString()
    } else expires = ''
    document.cookie = name + '=' + value + expires + '; path=/'
}

function readCookie(name) {
    if (typeof document === 'undefined') return null
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
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

// lấy ra cookie với tên được truyền vào
function getCookie(cname) {
    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}

// condition cho việc check cookie
function checkCookie(nameAccessC, nameRefreshC) {
    let accessC = getCookie(nameAccessC)
    let refreshC = getCookie(nameRefreshC)
    return accessC != '' && refreshC != ''
}

export { createCookie, readCookie, clearCookie, checkCookie }
