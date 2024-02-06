export const imageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = () => resolve(reader.result.split(',')[1])

        reader.onerror = (error) => reject(error)

        reader.readAsDataURL(file)
    })
}

export const base64ToImage = (str) => {
    return new Promise((resolve, reject) => {
        const img = new Image()

        img.onload = () => resolve(img)

        img.onerror = (error) => reject(error)

        img.src = `data:image/png;base64,${str}`
    })
}
