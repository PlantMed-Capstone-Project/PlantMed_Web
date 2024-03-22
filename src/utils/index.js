import { Buffer } from 'buffer'
import moment from 'moment'

import { convert } from 'html-to-text'

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
 * Dùng chuyển đổi image sang dạng chuỗi base64.
 * Cách sử dụng:
 * ```js
 * imageToBase64(files[0], function(result) {
 *      setState(result)
 * })
 * ```
 * @param {*} file Image file
 * @param {*} callback function, useState
 */
export const imageToBase64 = (file, callback) => {
    let reader = new FileReader()
    reader.onloadend = function () {
        callback(reader.result.split(',')[1])
    }
    reader.readAsDataURL(file)
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

export const parseImg = (img) => {
    if (img.includes('https') || img.includes('blob')) {
        return img
    } else {
        return `data:image/png;base64,${img}`
    }
}

export const parseDiffDays = (timestamp) => {
    let parsedDate = moment(Date.parse(timestamp))
    let currentDay = moment()

    return parsedDate.diff(currentDay, 'days') + 1
}

const options = {
    wordwrap: 130,
    // ...
}

// Hàm loại bỏ ảnh khỏi chuỗi trả về
const sliceImg = (string) => {
    const startIndex = string.indexOf('<img')
    const endIndex = string.indexOf('>', startIndex)
    return string.substring(0, startIndex) + string.substring(endIndex + 1)
}

/**
 * slice content
 * @param {*} str string
 * @param {*} len Number
 * @returns new string
 */
export const convertString = (str, len) => {
    return convert(sliceImg(str), options).length > len
        ? convert(sliceImg(str), options).slice(0, len) + '...'
        : convert(sliceImg(str), options)
}

export const sortComment = (data) => {
    data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
}
