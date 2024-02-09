/**
 * Sử dụng để format string có ký tự utf8
 * @param {*} str string
 * @returns string
 */
export const formatText = (str) => {
    return str
        .toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
        .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
        .replace(/đ/g, 'd')
        .replace(/\s/g, '')
        .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
        .replace(/\u02C6|\u0306|\u031B/g, '')
}

/**
 * Sử dụng cho api yêu cầu multipart
 * @param {*} obj object
 * @returns FormData
 */
export function objectToFormData(obj) {
    const formData = new FormData()

    Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value)
    })

    return formData
}

/**
 * Chuyển đổi file hình ảnh thành chuỗi base64
 * @param {*} file Image
 * @returns string
 */
export const imageToBase64 = (file) => {
    const reader = new FileReader()
    const base64 = reader.readAsDataURL(file).split(',')[1]
    return base64
}

/**
 * Chuyển đổi chuỗi base64 thành file hình ảnh
 * @param {*} str string
 * @returns Image
 */
export const base64ToImage = (str) => {
    const img = new Image()
    img.src = `data:image/png;base64,${str}`
    return img
}

/**
 * Chuyển đổi accessToken thành 1 đối tượng
 * @param {*} token string
 * @returns object
 */
export const parseJwt = (token) => {
    return token
        ? JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
        : ''
}
