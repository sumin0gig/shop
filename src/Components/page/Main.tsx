import React from 'react';
import { siteName } from '../../App';
import Title from '../Title';
import SimpleSlider from './slider/SimpleSlider';
import MiniSlider from './slider/MiniSlider';
import { useDispatch } from 'react-redux';
import { getThunk } from '../../modules/getDataReducer';

const Main = () => {
	const dispatch= useDispatch()
	dispatch(getThunk())
	return (
		<>
		<div className='main'>
			<Title title={`주목해야할 ${siteName}소식`} center={true}/>
			<SimpleSlider/>
			<div className='inner'>
				<Title title='BEST 10'/>
				<div className='inDiv'>
					<MiniSlider/>
				</div>
			</div>
		</div>
		</>
	);
};

export default Main;