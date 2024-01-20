import React from "react";
import {ACTIONS} from "../pages/cashier"

const DigitBtn = ({ dispatch, digit }) => {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.digit, payload: { digit } })}>
      {digit}
    </button>
  );
};

export default DigitBtn;
