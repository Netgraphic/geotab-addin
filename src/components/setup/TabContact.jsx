import { useFormContext } from "react-hook-form";
import { formValidate } from "../../utilities/formValidate";

import FormInputText from "../FormInputText";
import FormError from "../FormError";
import FormSwitch from "../FormSwitch";
import PhonesGroupList from "./PhonesGroupList";

const TabContact = ({ tab }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const { required, patternEmail } = formValidate();

  return (
    <>
      <section className={`config-container ${tab === 3 && "d-block"}`}>
        <h2 className="uppercase h2">Datos de Contacto - Administrador</h2>
        <FormInputText
          label="Nombre"
          type="text"
          required={true}
          {...register("nameAdmin", { required })}
        >
          <FormError error={errors.nameAdmin} />
        </FormInputText>

        <FormInputText
          label="Correo"
          type="email"
          required={true}
          {...register("emailAdmin", { required, pattern: patternEmail })}
        >
          <FormError error={errors.emailAdmin} />
        </FormInputText>

        <FormInputText label="Teléfono" type="tel" {...register("phoneAdmin")}>
          <FormError error={errors.phoneAdmin} />
        </FormInputText>

        <FormSwitch
          label="Notificaciones por Whatsapp"
          id1="whatsappNotifications-1"
          id2="whatsappNotifications-2"
          {...register("whatsappNotifications")}
        />

        {watch("whatsappNotifications") === "si" && (
          <FormInputText
            label="ID Grupo Whatsapp"
            type="text"
            required={true}
            {...register("whatsappGroupID", { required })}
          >
            <FormError error={errors.whatsappGroupID} />
          </FormInputText>
        )}

        <FormSwitch
          label="Notificaciones por Correo"
          id1="emailNotifications-1"
          id2="emailNotifications-2"
          {...register("emailNotifications")}
        />

        {watch("emailNotifications") === "si" && (
          <FormInputText
            label="Correo a notificar"
            type="email"
            required={true}
            {...register("emailToNotify", { required, pattern: patternEmail })}
          >
            <FormError error={errors.emailToNotify} />
          </FormInputText>
        )}

        <p>
          (<span className="required-mark">*</span>) Campos obligatorios
        </p>
      </section>

      <section className={`config-container ${tab === 3 && "d-block"}`}>
        <PhonesGroupList />
      </section>
    </>
  );
};

export default TabContact;
