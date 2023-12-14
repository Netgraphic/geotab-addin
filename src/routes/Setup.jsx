import { useForm, FormProvider, useFormState } from "react-hook-form";
import { faGears } from "@fortawesome/free-solid-svg-icons";

import ConfigStatus from "../components/setup/ConfigStatus";
import Tabs from "../components/setup/Tabs";
import WelcomeConfig from "../components/setup/WelcomeConfig";
import Title from "../components/Title";

const CheckForm = ({ control }) => {
  const { isSubmitted, isSubmitSuccessful } = useFormState({
    control,
  });

  return (
    isSubmitted &&
    !isSubmitSuccessful && (
      <p className="errorSubmission">Hay errores en la configuración</p>
    )
  );
};

const Setup = () => {
  const methods = useForm({
    defaultValues: {
      orderSurfsight: "si",
      whatsappNotifications: "no",
      emailNotifications: "no",
      identifySoundsQuantity: 0,
      identifySoundsDuration: 0.5,
      nonIdentifySoundsQuantity: 0,
      nonIdentifySoundsDuration: 0.5,
      driverSoundsQuantity: 0,
      driverSoundsDuration: 0.5,
      autoLogout: "no",
      logoutTime: "",
    },
  });

  //Don't submit when Enter is pressed on
  const checkKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <WelcomeConfig />
      <ConfigStatus />

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          onKeyDown={(e) => checkKeyDown(e)}
          noValidate
          style={{ overflow: "hidden" }}
        >
          <div className="container-header">
            <button type="submit" className="btn-alt">
              Guardar
            </button>
            <CheckForm control={methods.control} />
            <div className="clear"></div>
          </div>

          <Title text="Configuración" icon={faGears} />
          <Tabs />
        </form>
      </FormProvider>
    </>
  );
};

export default Setup;
