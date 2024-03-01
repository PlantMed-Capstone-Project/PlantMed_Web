export const validationRules = {
    email: [
        {
            message: 'Email không hợp lệ',
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
            compareField: 'password',
        },
    ],
    policyCheck: [
        {
            message: 'Phải chấp nhận với điều khoản trước khi đăng ký.',
            isCheck: false,
        },
    ],
    username: [
        {
            field: 'username',
            message: 'Tên hiển thị không được để trống.',
        },
    ],
}

export const validateInputs = (inputs) => {
    const errors = {}

    Object.entries(validationRules).forEach(([fieldName, rules]) => {
        rules.forEach((rule) => {
            if (
                !inputs[fieldName] ||
                (rule.regex && !inputs[fieldName].match(rule.regex)) ||
                (rule.minLength && inputs[fieldName].length < rule.minLength) ||
                (rule.compareField &&
                    inputs[fieldName] !== inputs[rule.compareField]) ||
                (rule.isCheck && !inputs.policyCheck)
            ) {
                errors[fieldName] = rule.message
            }
        })
    })

    return errors
}
