import React from 'react';
import { onTitleMove } from '../../Title';

const AdmBannHead = () => {
  return (
    <div>
      <ul className="AdmHeader">
        <li><span onClick={()=>onTitleMove("no1")}>배너 추가</span></li>
        <li><span onClick={()=>onTitleMove("no2")}>배너 목록</span></li>
      </ul>
    </div>
  );
};

export default AdmBannHead;