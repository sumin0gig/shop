import React from 'react';
import Title from '../../Title';

const AdmSite = () => {
  return (
    <div className='main'>
      <h1 className='center'>사이트 설정</h1>

      <div className="underlineDiv">
        <Title title='사이트 설정'/>
        <div className="grayDiv">
          <form action="">
            <input type="text" />

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmSite;