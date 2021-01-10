import React from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [selectImg, setSelectImg] = React.useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectImg={setSelectImg}/>
      {selectImg && <Modal selectImg={selectImg} setSelectImg={setSelectImg}/>}
    </div>
  );
}

export default App;
