import React from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
    const [file, setFile] = React.useState(null)
    const [error, setError] = React.useState(null)

    const types = ['image/webp', 'image/jpeg', 'image/png', 'image/jpg']
    const changeHandler = (e) => {
        const selected = e.target.files[0]
        console.log(selected.type);
        if (selected && types.includes(selected.type)){
            setError(null)
            setFile(selected);
        } else {
            setError('Format of picture is invalide.')
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            {error && <div className="error">{error}</div> }
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </form>
    )
}

export default UploadForm
