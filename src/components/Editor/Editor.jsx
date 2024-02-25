import { useEffect, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ImageResize from 'quill-image-resize-module-react'
window.Quill = Quill

function Editor({ value, onChange }) {
    const reactQuillRef = useRef()
    Quill.register('modules/imageResize', ImageResize)
    const [editorHeight, setEditorHeight] = useState(200)

    const updateEditorHeight = () => {
        if (reactQuillRef.current) {
            const editor = reactQuillRef.current.getEditor()
            const newHeight = Math.max(editor.root.scrollHeight, 200)
            setEditorHeight(newHeight)
        }
    }
    useEffect(() => {
        updateEditorHeight()
    }, [value])

    const modules = {
        toolbar: {
            container: [
                [{ header: '1' }, { header: '2' }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
            ],
        },
        clipboard: {
            matchVisual: true,
        },
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize'],
        },
    }

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'code-block',
    ]

    return (
        <ReactQuill
            ref={reactQuillRef}
            theme="snow"
            placeholder="Start writing..."
            modules={modules}
            formats={formats}
            value={value}
            onChange={onChange}
            style={{
                height: editorHeight,
                marginBottom: '3.125rem',
            }}
        />
    )
}

export default Editor
