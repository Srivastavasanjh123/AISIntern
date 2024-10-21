import React from 'react';
const SubmitButton=({isSubmitted,dispatch,selectedOption,correctAnswer})=>{
    const handleSubmit=()=>{
        if (selectedOption!==null){
            dispatch({type:'SUBMIT'});

        }else{
            alert('Please select an option first!');
        }
    };

    const buttonText=isSubmitted ? 'NEXT':'Submit';
    return(
        <button className="submit-button" onClick={handleSubmit}>
            {buttonText}
        </button>
    );
};
export default SubmitButton;