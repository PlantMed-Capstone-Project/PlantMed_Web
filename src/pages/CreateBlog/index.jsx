import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Box, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import Editor from 'components/Editor/Editor'
import useActions from 'hooks/useActions'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './CreateBlog.styled'
import MultipleSelect from 'components/MutipleSelect'

function CreateBlog() {
    const { show } = useActions(snackbarAction)
    const navigate = useNavigate()

    const initialInputs = {
        title: '',
        content: '',
        image: '',
        tag: '',
    }

    const [inputs, setInputs] = useState(initialInputs)
    const [titleError, setTitleError] = useState('')
    const [imagetext, setImageText] = useState('')
    const clearInput = () => {
        setInputs(initialInputs)
    }

    // handle unload
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            const message =
                'Bạn có chắc chắn muốn rời khỏi trang? Dữ liệu chưa được lưu.'
            event.returnValue = message
            return message
        }

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [inputs])

    const handleFileChange = (event) => {
        const files = event.target.files
        console.log(files)
        const reader = new FileReader()
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
        try {
            const isInclude = allowedTypes.includes(files[0].type)
            if (files.length > 0 && isInclude) {
                reader.onloadend = () => {
                    // The result property contains the base64 representation of the file
                    const base64String = reader.result
                    setInputs((prevState) => ({
                        ...prevState,
                        image: base64String,
                    }))
                    setImageText(files[0].name)
                }
            }
            reader.readAsDataURL(files[0])
        } catch (e) {
            
        }
    }

    const handleTextChange = (type, value) => {
        if (type === 'title') {
            setInputs((prevState) => ({ ...prevState, title: value }))
        } else if (type === 'editor') {
            setInputs((prevState) => ({ ...prevState, content: value }))
        } else {
            setInputs((prevState) => ({
                ...prevState,
                tag: value.map((plantId) => ({ plantId })),
            }))
        }
    }

    const handleValidate = () => {
        setTitleError('')
        const validContent =
            inputs.content.replace(/<(.|\n)*?>/g, '').trim().length === 0
        let flag = true
        if (!inputs.title.trim()) {
            flag = false
            setTitleError('Tiêu đề bài viết không được để trống!')
        } else if (validContent) {
            flag = false
            show({
                message: 'Nội dung bài viết không được để trống!',
                severity: SNACKBAR_SEVERITY.WARNING,
            })
        }

        if (flag) {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        try {
            // show({
            //     message: 'Vui long chờ trong giây lát!',
            //     autoHideDuration: 2000,
            // })
            show({
                message: 'Bài viết của bạn đã được đưa vào hàng chờ!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
            clearInput()
            navigate('/')
        } catch (err) {
            show({
                message:
                    err.response.data.message ??
                    'Lỗi hệ thống! Vui lòng thử lại sau!',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        }
    }

    return (
        <S.Wrapper>
            <S.Container>
                <S.TypoHeader>BÀI VIẾT MỚI</S.TypoHeader>
                <S.FormWrapper>
                    <TextField
                        fullWidth
                        label="Tiêu đề bài viết"
                        value={inputs.title}
                        error={titleError && inputs.title.trim() === ''}
                        helperText={inputs.title.trim() ? '' : titleError}
                        multiline
                        maxRows={4}
                        size="small"
                        color="success"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderStyle: 'dashed',
                                },
                            },
                            marginBottom: '1.25rem',
                        }}
                        onChange={(e) =>
                            handleTextChange('title', e.target.value)
                        }
                    />
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            component="label"
                            variant="contained"
                            color="success"
                            endIcon={<CloudUploadIcon />}
                            sx={{ marginBottom: '1.25rem' }}
                        >
                            Tải ảnh bìa
                            <S.VisuallyHiddenInput
                                type="file"
                                onChange={handleFileChange}
                                inputProps={{ accept: 'image/jpeg, image/png' }}
                            />
                        </Button>
                        <Typography sx={{ marginLeft: '1.25rem' }}>
                            {imagetext}
                        </Typography>
                    </Box>
                    <MultipleSelect
                        onChange={(e) => handleTextChange('tag', e)}
                    />
                    <Editor
                        value={inputs.content}
                        onChange={(value) => handleTextChange('editor', value)}
                    />
                </S.FormWrapper>
                <Box textAlign="end" sx={{ marginTop: '1.25rem' }}>
                    <S.Submit variant="contained" onClick={handleValidate}>
                        Đăng bài
                    </S.Submit>
                </Box>
            </S.Container>
        </S.Wrapper>
    )
}

export default CreateBlog