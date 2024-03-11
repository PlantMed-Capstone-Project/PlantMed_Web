import { FORM_REGISTER } from 'constant'
import { readCookie } from 'utils/cookie'

export const validationRules = {
    email: [
        {
            message: 'Email không hợp lệ.',
            regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
        {
            message: 'Vui lòng nhập email.',
        },
    ],
    password: [
        {
            message: 'Mật khẩu không được dưới 5 ký tự.',
            minLength: 5,
        },
        {
            message: 'Vui lòng nhập mật khẩu.',
        },
    ],
    lastName: [
        {
            message: 'Vui lòng nhập họ.',
        },
    ],
    firstName: [
        {
            message: 'Vui lòng nhập tên.',
        },
    ],
    confirmPassword: [
        {
            message: 'Mật khẩu xác thực không trùng khớp.',
            compareField: 'password' || 'newPassword',
        },
    ],
    policyCheck: [
        {
            message: 'Phải chấp nhận với điều khoản trước khi đăng ký.',
            isCheck: false,
        },
    ],
    fullname: [
        {
            message: 'Tên hiển thị không hợp lệ.',
            regex: /^(?=.*[a-zA-Z_À-ỹ])[a-zA-Z_À-ỹ\s\d]+$/,
        },
        {
            message: 'Tên hiển thị không được để trống.',
        },
    ],
    oldPassword: [
        {
            message: 'Vui lòng nhập mật khẩu hiện tại của bạn.',
        },
    ],
    newPassword: [
        {
            message: 'Mật khẩu mới không được giống với mật khẩu cũ.',
            compareField: 'oldPassword',
        },
        {
            message: 'Mật khẩu mới không được dưới 6 ký tự.',
            minLength: 6,
        },
        {
            message: 'Vui lòng nhập mật khẩu mới.',
        },
    ],
}

export const validateInputs = (inputs) => {
    const errors = {}
    const currentPass = JSON.parse(readCookie(FORM_REGISTER))

    Object.keys(inputs).forEach((fieldName) => {
        if (validationRules[fieldName]) {
            validationRules[fieldName].forEach((rule) => {
                if (
                    !inputs[fieldName] ||
                    (rule.regex && !inputs[fieldName].match(rule.regex)) ||
                    (rule.minLength &&
                        inputs[fieldName].length < rule.minLength) ||
                    (fieldName === 'confirmPassword' &&
                        inputs[fieldName] !== inputs['password'] &&
                        inputs[fieldName] !== inputs['newPassword']) ||
                    (fieldName === 'oldPassword' &&
                        inputs[fieldName] !== currentPass.password) ||
                    (rule.compareField &&
                        fieldName === 'newPassword' &&
                        inputs[fieldName] === inputs[rule.compareField]) ||
                    (rule.isCheck && !inputs.policyCheck)
                ) {
                    errors[fieldName] = rule.message
                }
            })
        }
    })

    return errors
}
