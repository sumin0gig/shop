import React from 'react';
import { siteName } from '../../App';
import Title from '../Title';
import SimpleSlider from './component/SimpleSlider';
import MiniSlider from './component/MiniSlider';

const Main = () => {
	return (
		<>
		<div className='main'>
			<Title title={`주목해야할 ${siteName}소식`} center={true}/>
			<SimpleSlider/>
			<div className='inner'>
				<Title title='추천 상품'/>
				<div className='inDiv'>
					<MiniSlider/>
				</div>
			</div>
		</div>
		</>
	);
};

export default Main;