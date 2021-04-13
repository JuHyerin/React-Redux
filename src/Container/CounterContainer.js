import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import { increase, decrease, setDiff } from '../modules/counter';
import Counter from "../components/Counter";

function CounterContainer () {
    /*구조분해 : 새로운 객체*/
//1
    // const {number, diff} = useSelector(state => state.counter);

//2
    // const {number, diff} = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }));
//3 deep한 number, diff를 받아오지 못함
    //const {couter} = useSelector(state => state.counter);

    /*최적화*/
//1
    // const number = useSelector(state => state.counter.number);
    // const diff = useSelector(state => state.counter.diff);
//2
    const {number, diff} = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }), shallowEqual);
//3
    // const counter = useSelector(state => state.counter);


    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            // number={counter.number}
            // diff={counter.diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}
export default CounterContainer;