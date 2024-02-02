import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isInputEmpty , setIsInputEmpty] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      setIsInputEmpty(false);
      
    } else {
      setIsInputEmpty(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
            background: !isValid ? 'salmon' : isInputEmpty ? 'transparent' : 'white',
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" style = { {background: isInputEmpty ? 'lightcoral' : 'red' }}>
      Add Goal</Button>
    </form>
  );
};

export default CourseInput;