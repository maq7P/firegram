import React from 'react'

const Modal = ({selectImg, setSelectImg}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectImg(null)
        }
    }
    const handleKeyDown = () => {
        document.addEventListener('keydown', e => {
            if(e.key === 'Escape'){
                setSelectImg(null)
            }
        })
    }
    React.useEffect(() => {
        handleKeyDown()
    }, [])

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectImg} alt="enlargePic"/>
        </div>
    )
}

export default Modal
