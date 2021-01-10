import { motion } from 'framer-motion';
import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({setSelectImg}) => {
    const { docs } = useFirestore('images')
    console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div 
                    className="img-wrap" 
                    key={doc.id} 
                    onClick={() => setSelectImg(doc.url)}
                    layout
                    whileHover={{opacity: 1}}>
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1.5}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
