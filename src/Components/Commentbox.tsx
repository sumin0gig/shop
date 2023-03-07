import React from 'react';
type commentboxType={
	heading:string;
	paragraph:string[]
}
const Commentbox = ({heading,paragraph}:commentboxType) => {
	return (
		<div className='commentbox'>
			<p className='subtitle'>{heading}</p>
			{paragraph.map((p,i)=><p className='mini' key={i}>{p}</p>)}
		</div>
	);
};

export default Commentbox;