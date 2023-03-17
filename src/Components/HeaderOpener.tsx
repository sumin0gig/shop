import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../modules';
import { productDataType } from '../modules/getDataReducer';
import { Link } from 'react-router-dom';

const HeaderOpener = () => {
	const bestList =useSelector((state:rootState)=>state.getDataReducer.bestproduct)
  
  const onClick=()=>{
		document.querySelector(".opener")?.classList.toggle("opener-on");
	}
  if (!bestList) return <div>no data</div>
  return (
    <ul className='wrapper'>
					<div className='wrap'>
						{/* 여기에 링크 반복적으로 돌아가며 출력 */}
						<div>
							<a href={`/product/view/${bestList[0].p_no}`} target="_self">
								<strong>1. </strong> {bestList[0].p_name.length>7?bestList[0].p_name.slice(0,7)+"...":bestList[0].p_name}							
							</a>
						</div>
						<button className='wrapbtn' onClick={onClick}>▼</button>
					</div>
					<div className='opener'>
						<table>
							<caption>인기 검색어</caption>
							<tbody>
								{/* 여기에 tr 반복적으로 돌아가며 출력 */}
                {bestList.map((li:productDataType,i:number) => 
                  <tr key={i}>
                    <td>
                      <strong>{i+1}. </strong>
                      <Link to={`/product/view/${li.p_no}`}>{li.p_name.length>5?li.p_name.slice(0,5)+"...":li.p_name}</Link>
                    </td>
                    <td>{li.p_isnew==="Y"?<div className='new'>NEW</div>:<div className='best'>HOT</div>}</td>
                  </tr>
                )}
							</tbody>
						</table>
					</div>
				</ul>
  );
};

export default HeaderOpener;