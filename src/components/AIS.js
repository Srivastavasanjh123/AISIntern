import React, {useReducer,useEffect} from 'react';
import './AIS.css';
import Timer from './Timer';
import Question from './Question';
import Options from './Options';
import SubmitButton from './SubmitButton';

//reducer function for state management
const initialState = {
    selectedOption:null,
    isSubmitted:false,
    correctAnswer:2,  //correct answer
    timeLeft:60,
};
function reducer(state,action){
    switch(action.type) {
        case 'SELECT_OPTION':
            if(!state.isSubmitted) {
                return{...state,selectedOption:action.payload};
            }
            return state;
            case 'SUBMIT':
                return{...state,isSubmitted: true};
            case 'TICK':
                return{...state,timeLeft: state.timeLeft-1};
            case 'RESET':
                return initialState;
            default:
                throw new Error();
    }
}
const AIS = () => {
    const [state,dispatch]=useReducer(reducer,initialState);
    //Timer Useeffect
    useEffect(()=>{
        if(state.timeLeft===0){
            alert('Time is up! Reload the page to try again.');
            window.location.reload();
        }
        else{
        const timer=setInterval(() => {
            dispatch({type: 'TICK'});},1000);
        return ()=> clearInterval(timer);
        }
    },[state.timeLeft]);

    return(
        <div className="AIS-container">
            <Timer timeLeft={state.timeLeft}/>
            <Question question="Which company developed the react framework?"/>
            <Options
            options={['Google','Microsoft','Facebook','Apple']}
            selectedOption={state.selectedOption}
            correctAnswer={state.correctAnswer}
            isSubmitted={state.isSubmitted}
            dispatch={dispatch}
            />
            <SubmitButton
            isSubmitted={state.isSubmitted}
            dispatch={dispatch}
            selectedOption={state.selectedOption}
            correctAnswer={state.corretAnswer}
            />
           
        </div>
    );

};
export default AIS;