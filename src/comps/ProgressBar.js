import React from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({file}) => {
    const {url, progress} = useStorage(file)
    console.log(progress, url, 'need');
    return (
        <div className="progress-bar">
            progress
        </div>
    )
}

export default ProgressBar
