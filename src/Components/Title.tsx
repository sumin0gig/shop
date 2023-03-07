import React from 'react';

const Title = ({title,center=false}:{title:string,center?:boolean}) => {
	return (
			<p className={center?'title center':'title'}>{title}</p>
	);
};

export default Title;