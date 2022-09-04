import React, { useState } from "react";
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
        onKeyPress={(e) => e.key === "Enter" && onAddHandler()}
      />
      <AddButton onClick={onAddHandler}>ADD</AddButton>
    </FromContainer>
  );
};

export default Form;
