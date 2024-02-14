import { useRef } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Editor({ value, onChange }) {
    const reactQuillRef = useRef()

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
            matchVisual: false,
        },
    }

    const formats = [ 
        'header','font','size','bold','italic','underline','strike','blockquote','list','bullet','indent','link','image','video','code-block' 
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
                height: '20rem',
                marginBottom: '3.125rem',
            }}
        />
    )
}

export default Editor
