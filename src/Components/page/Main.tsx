import React, { useEffect } from 'react';
import { siteName } from '../../App';
import Title from '../Title';
import SimpleSlider from './slider/SimpleSlider';
import MiniSlider from './slider/MiniSlider';
import { useDispatch } from 'react-redux';
import { getBanner, getThunk } from '../../modules/getDataReducer';

const Main = () => {
	const dispatch= useDispatch()
	useEffect(()=>{
		dispatch(getThunk())
		dispatch(getBanner())		
	},[dispatch])
	return (
		<>
		<div className='main'>
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