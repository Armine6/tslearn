import { Dispatch } from 'react';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/states';
import { useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector