import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import dayjs from "dayjs";
import Slider from "@mui/material/Slider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import { sliderMarks } from "../../utilities/sliderMarks";
import FormSwitch from "../FormSwitch";

const TabGeneralSettings = ({ tab }) => {
  const { register, getValues, setValue, watch } = useFormContext();
  const { quantityMarks1, quantityMarks2, durationMarks1, durationMarks2 } =
    sliderMarks();

  const [sliderValue, setSliderValue] = useState({
    identifySoundsQuantity: getValues("identifySoundsQuantity"),
    identifySoundsDuration: getValues("identifySoundsDuration"),
    nonIdentifySoundsQuantity: getValues("nonIdentifySoundsQuantity"),
    nonIdentifySoundsDuration: getValues("nonIdentifySoundsDuration"),
    driverSoundsQuantity: getValues("driverSoundsQuantity"),
    driverSoundsDuration: getValues("driverSoundsDuration"),
  });

  const date = new Date();
  date.setHours(0, 0);

  const [time, setTime] = useState(dayjs(date));

  const handleTime = (newTime) => {
    setTime(newTime);
  };

  const handleChange = (e, target) => {
    setSliderValue({
      ...sliderValue,
      [target]: e.target.value,
    });
  };

  const CustomSliderStyles = {
    color: "#0078D3",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 22,
      backgroundColor: "#333",
    },
  };

  useEffect(() => {
    if (watch("autoLogout") === "si") {
      setValue("logoutTime", time.$d);
    } else {
      setValue("logoutTime", "");
    }
  }, [time, watch("autoLogout")]);

  return (
    <section className={`config-container ${tab === 4 && "d-block"}`}>
      <h2 className="uppercase h2">Funcionamiento general</h2>
      <FormSwitch
        label="Logout automático"
        id1="auto-logout-1"
        id2="auto-logout-2"
        {...register("autoLogout")}
      />

      {watch("autoLogout") === "si" && (
        <div className="item-config">
          <label>Hora:</label>
          <div className="w-100">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["Timepicker"]}>
                <TimePicker
                  ampm={false}
                  timeSteps={{ minutes: 1 }}
                  slotProps={{ textField: { size: "small" } }}
                  value={time}
                  onChange={handleTime}
                />
              </DemoContainer>
            </LocalizationProvider>
            <input type="hidden" {...register("logoutTime")} />
          </div>
        </div>
      )}

      <h4 className="uppercase" style={{ marginBottom: 5, marginTop: 30 }}>
        Sonidos por identificación en cabina
      </h4>
      <div className="item-config">
        <label htmlFor="phoneAddTxt">Cantidad de pititos:</label>
        <div style={{ flexGrow: 1 }}>
          <Slider
            sx={CustomSliderStyles}
            value={sliderValue.identifySoundsQuantity}
            valueLabelDisplay="off"
            marks={quantityMarks1}
            min={0}
            max={5}
            {...register("identifySoundsQuantity", {
              valueAsNumber: true,
              onChange: (e) => handleChange(e, "identifySoundsQuantity"),
            })}
          />
        </div>
      </div>
      <div className="item-config">
        <label htmlFor="phoneAddTxt">Duración (segundos):</label>
        <div style={{ flexGrow: 1 }}>
          <Slider
            sx={CustomSliderStyles}
            value={sliderValue.identifySoundsDuration}
            valueLabelDisplay="off"
            marks={durationMarks1}
            step={0.5}
            min={0.5}
            max={2}
            {...register("identifySoundsDuration", {
              valueAsNumber: true,
              onChange: (e) => handleChange(e, "identifySoundsDuration"),
            })}
          />
        </div>
      </div>

      <h4 className="uppercase" style={{ marginBottom: 5, marginTop: 30 }}>
        Sonidos por No identificación en cabina
      </h4>
      <div className="item-config">
        <label htmlFor="phoneAddTxt">Cantidad de pititos:</label>
        <div style={{ flexGrow: 1 }}>
          <Slider
            sx={CustomSliderStyles}
            value={sliderValue.nonIdentifySoundsQuantity}
            valueLabelDisplay="auto"
            marks={quantityMarks2}
            min={0}
            max={30}
            {...register("nonIdentifySoundsQuantity", {
              valueAsNumber: true,
              onChange: (e) => handleChange(e, "nonIdentifySoundsQuantity"),
            })}
          />
          <div className="container-header" style={{ textAlign: "center" }}>
            {sliderValue.nonIdentifySoundsQuantity} pitido(s)
          </div>
        </div>
      </div>
      <div className="item-config">
        <label htmlFor="phoneAddTxt">Duración (segundos):</label>
        <div style={{ flexGrow: 1 }}>
          <Slider
            sx={CustomSliderStyles}
            value={sliderValue.nonIdentifySoundsDuration}
            valueLabelDisplay="auto"
            marks={durationMarks2}
            step={0.2}
            min={0.5}
            max={20}
            {...register("nonIdentifySoundsDuration", {
              valueAsNumber: true,
              onChange: (e) => handleChange(e, "nonIdentifySoundsDuration"),
            })}
          />
          <div className="container-header" style={{ textAlign: "center" }}>
            {sliderValue.nonIdentifySoundsDuration} segundos
          </div>
        </div>
      </div>

      <h4 className="uppercase" style={{ marginBottom: 5, marginTop: 30 }}>
        Sonidos por más de un conductor en cabina
      </h4>
      <div className="item-config">
        <label htmlFor="phoneAddTxt">Cantidad de pititos:</label>
        <div style={{ flexGrow: 1 }}>
          <Slider
            sx={CustomSliderStyles}
            value={sliderValue.driverSoundsQuantity}
            valueLabelDisplay="auto"
            marks={quantityMarks2}
            min={0}
            max={30}
            {...register("driverSoundsQuantity", {
              valueAsNumber: true,
              onChange: (e) => handleChange(e, "driverSoundsQuantity"),
            })}
          />
          <div className="container-header" style={{ textAlign: "center" }}>
            {sliderValue.driverSoundsQuantity} pitido(s)
          </div>
        </div>
      </div>
      <div className="item-config">
        <label htmlFor="phoneAddTxt">Duración (segundos):</label>
        <div style={{ flexGrow: 1 }}>
          <Slider
            sx={CustomSliderStyles}
            value={sliderValue.driverSoundsDuration}
            valueLabelDisplay="auto"
            marks={durationMarks2}
            step={0.2}
            min={0.5}
            max={20}
            {...register("driverSoundsDuration", {
              valueAsNumber: true,
              onChange: (e) => handleChange(e, "driverSoundsDuration"),
            })}
          />
          <div className="container-header" style={{ textAlign: "center" }}>
            {sliderValue.driverSoundsDuration} segundos
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabGeneralSettings;
