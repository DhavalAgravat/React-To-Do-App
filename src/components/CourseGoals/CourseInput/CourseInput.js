import React, { useState, useRef } from "react";

import Button from "../../UI/Button/Button";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    color: ${(props) => (props.inValid ? "red" : "black")};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.inValid ? "red" : "#ccc")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  & p {
    color: red;
    display: ${(props) => (props.inValid ? "block" : "none")};
  }
`;

const CourseInput = (props) => {
  const inputRef = useRef();
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      // console.log();
      setIsValid(true);
      props.onAddGoal(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl inValid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} ref={inputRef} />
        <p>Enter Text First !</p>
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
