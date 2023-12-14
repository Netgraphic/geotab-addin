import { useFormContext } from "react-hook-form";
import { formValidate } from "../../utilities/formValidate";

import FormInputText from "../FormInputText";
import FormError from "../FormError";

const TabGeotab = ({ tab }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { required } = formValidate();

  return (
    <section className={`config-container ${tab === 1 && "d-block"}`}>
      <h2 className="uppercase h2">Ingreso de datos de usuario Geotab</h2>
      <FormInputText
        label="Usuario"
        type="text"
        required={true}
        {...register("userGeotab", { required })}
      >
        <FormError error={errors.userGeotab} />
      </FormInputText>

      <FormInputText
        label="Password"
        type="password"
        required={true}
        {...register("passwordGeotab", { required })}
      >
        <FormError error={errors.passwordGeotab} />
      </FormInputText>

      <div className="check-connection">
        <button
          type="button"
          className="btn-default"
          style={{ marginRight: 15 }}
        >
          Validar conexión
        </button>
        Última conexión válida: <time>Fecha</time>
      </div>
      <p>
        (<span className="required-mark">*</span>) Campos obligatorios
      </p>
    </section>
  );
};

export default TabGeotab;
