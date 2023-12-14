import { useFormContext } from "react-hook-form";
import { formValidate } from "../../utilities/formValidate";

import FormInputText from "../FormInputText";
import FormError from "../FormError";
import FormSwitch from "../FormSwitch";

const TabSurfsight = ({ tab }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const { required } = formValidate();

  return (
    <section className={`config-container ${tab === 2 && "d-block"}`}>
      <h2 className="uppercase h2">Ingreso de datos de usuario Surfsight</h2>
      <FormSwitch
        label="Order now"
        id1="orderSurfsight-1"
        id2="orderSurfsight-2"
        {...register("orderSurfsight")}
      />

      {watch("orderSurfsight") === "no" && (
        <>
          <FormInputText
            label="Endpoint"
            type="text"
            required={true}
            {...register("endPointSurfsight", { required })}
          >
            <FormError error={errors.endPointSurfsight} />
          </FormInputText>

          <FormInputText
            label="Usuario"
            type="text"
            required={true}
            {...register("userSurfsight", { required })}
          >
            <FormError error={errors.userSurfsight} />
          </FormInputText>

          <FormInputText
            label="Password"
            type="password"
            required={true}
            {...register("passwordSurfsight", { required })}
          >
            <FormError error={errors.passwordSurfsight} />
          </FormInputText>

          <div className="check-connection">
            <button
              type="button"
              className="btn-default"
              id="connection-surfsight"
              style={{ marginRight: 15 }}
            >
              Validar conexión
            </button>
            Última conexión válida: <time>Fecha</time>
          </div>
          <p>
            (<span className="required-mark">*</span>) Campos obligatorios
          </p>
        </>
      )}
    </section>
  );
};

export default TabSurfsight;
