import React from 'react';

const Title = ({title,center=false,no}:{title:string,center?:boolean,no?:string}) => {
	return (
			<p className={center?'title center':'title'} id={no}>{title}</p>
	);
};

export const onTitleMove=(no:string)=>{
	let height=document.querySelector(`#${no}`)?
	window.pageYOffset+document.querySelector(`#${no}`)!.getBoundingClientRect().top-140:
	0;
	window.scrollTo(0,height)
}

export default Title;