import React from 'react'
import { motion } from 'framer-motion';

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
        <motion.div 
            className="backdrop" onClick={handleClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img 
                src={selectImg} alt="enlargePic"
                initial={{y: '-100vh'}}
                animate={{y: '0'}}
            />
        </motion.div>
    )
}

export default Modal
