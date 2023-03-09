import React from 'react';

export let titleH:{ [x: string]: number; }={};
const Title = ({title,center=false}:{title:string,center?:boolean}) => {
	const arr=document.querySelector('.title')?document.querySelector('.title')!.getBoundingClientRect().top:0;
	titleH[title]=arr;
	return (
			<p className={center?'title center':'title'}>{title}</p>
	);
};

export default Title;