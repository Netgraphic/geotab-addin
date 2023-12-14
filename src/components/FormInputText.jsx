import { forwardRef } from "react";

const FormInputText = forwardRef(
  ({ label, type, onChange, name, required, children }, ref) => {
    return (
      <>
        <div className="item-config">
          <label htmlFor={name}>
            {label}: {required && <span className="required-mark">*</span>}
          </label>
          <input
            type={type}
            name={name}
            onChange={onChange}
            ref={ref}
            className="textfield-form required"
          />
        </div>
        {children}
      </>
    );
  }
);

export default FormInputText;
