import React from 'react';
const Options=({options,selectedOption,correctAnswer,isSubmitted,dispatch})=>{
    const handleOptionClick=(index)=>{
        dispatch({type: 'SELECT_OPTION',payload:index});
    };

    const getOptionStyle = (index)=>{
        if(isSubmitted){
            if (index===correctAnswer) return {backgroundColor:'green',color:'white'};
            if(index===selectedOption && index!==correctAnswer)
                return{backgroundColor:'red',color:'white'};
        }
        return selectedOption === index?{backgroundColor:'#d1e7ff'}:{};
    };
    return(
        <div className="options">
            {options.map((option,index)=>(
                <div
                key={index}
                className="option"
                style={getOptionStyle(index)}
                onClick={()=>handleOptionClick(index)}
                >
                    {option}
                </div>
            ))}
        </div>
    );

};
export default Options;
