export const validationRules = {
    email: [
        {
            message: 'Email không hợp lệ.',
            // eslint-disable-next-line no-useless-escape
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
            regex: /^(?=.*[a-zA-Z_À-ỹ])[a-zA-Z_À-ỹ\s\d]{1,30}$/,
        },
        {
            message: 'Tên hiển thị không được để trống.',
        },
    ],
    newPassword: [
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
                    (rule.isCheck && !inputs.policyCheck)
                ) {
                    errors[fieldName] = rule.message
                }
            })
        }
    })

    return errors
}
