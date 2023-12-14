import { forwardRef } from "react";

const FormRadio = forwardRef(({ id, label, name, value, onChange }, ref) => {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        id={id}
        ref={ref}
        className="input-radio"
        name={name}
        value={value}
        onChange={onChange}
      />{" "}
      <span>{label}</span>
    </label>
  );
});

export default FormRadio;
