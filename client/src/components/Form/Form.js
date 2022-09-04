import React, { useState } from "react";
import { ADD_LABEL, ENTER_EVENT } from "../../utils/consts";
import { FromContainer, Input, AddButton } from "./Form.styles";

const Form = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onAddHandler = () => {
    onAdd(value);
    setValue("");
  };

  return (
    <FromContainer>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === ENTER_EVENT && onAddHandler()}
      />
      <AddButton onClick={onAddHandler}>{ADD_LABEL}</AddButton>
    </FromContainer>
  );
};

export default Form;
