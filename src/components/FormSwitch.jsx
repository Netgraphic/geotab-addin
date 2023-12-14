import { forwardRef } from "react";

const FormSwitch = forwardRef(({ label, name, id1, id2, onChange }, ref) => {
  return (
    <div className="item-config">
      <label htmlFor={name}>{label}:</label>
      <div className="w-100">
        <div className="switch-field">
          <input
            type="radio"
            id={id1}
            name={name}
            ref={ref}
            value="si"
            onChange={onChange}
          />
          <label htmlFor={id1}>Sí</label>
          <input
            type="radio"
            id={id2}
            name={name}
            ref={ref}
            value="no"
            onChange={onChange}
          />
          <label htmlFor={id2}>No</label>
        </div>
      </div>
    </div>
  );
});

export default FormSwitch;
