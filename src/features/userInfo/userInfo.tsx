import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import {fetchAllUsers, UserInfoState} from './slices/userInfoSlice';
export const Userinfo: React.FC<{}> = () => {
	const dispatch: AppDispatch = useDispatch();
	const userInfo:UserInfoState = useSelector((state: RootState) => state.user_info)
	const {loading, data, error} = userInfo;
	useEffect(() => {
		dispatch(fetchAllUsers());
	}, [])
	useEffect(() => {console.log(loading, data, error)}, [loading, data, error]);
	return(
		<div>
			<h2>User Info</h2>
		</div>
	)
}

