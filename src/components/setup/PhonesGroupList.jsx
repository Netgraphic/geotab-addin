import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const PhonesGroupList = () => {
  const { register, setValue } = useFormContext();
  const [phoneList, setPhoneList] = useState([]);

  const [phone, setPhone] = useState("");
  const [phoneToUpdate, setPhoneToUpdate] = useState();

  const handleAddPhone = () => {
    if (phoneToUpdate && phone.trim()) {
      setPhoneList(
        phoneList.map((item, index) =>
          item === phoneToUpdate.phone && index === phoneToUpdate.index
            ? phone
            : item
        )
      );
      setPhoneToUpdate("");
      setPhone("");
      return;
    }

    if (phone.trim()) {
      setPhoneList((prev) => [...prev, phone]);
      setPhone("");
    }
  };

  const handleUpdatePhone = (phone, index) => {
    setPhone(phone);
    setPhoneToUpdate({ phone, index });
  };

  const handleDeletePhone = (phoneIndex) => {
    setPhoneList(phoneList.filter((item, index) => index !== phoneIndex));
  };

  useEffect(() => {
    setValue("phoneGroup", phoneList);
  }, [phoneList]);

  return (
    <>
      <h4 className="uppercase">Grupo de teléfonos</h4>
      <div className="item-config">
        <label htmlFor="phoneAddTxt">Teléfono</label>
        <input
          type="tel"
          name="phoneAddTxt"
          className="textfield-form required"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {phoneToUpdate ? (
          <button
            type="button"
            className="btn-alt"
            style={{ marginLeft: 8 }}
            onClick={() => handleAddPhone()}
          >
            Actualizar
          </button>
        ) : (
          <button
            type="button"
            className="btn-default"
            style={{ marginLeft: 8 }}
            onClick={() => handleAddPhone()}
          >
            Agregar
          </button>
        )}

        <input type="hidden" {...register("phoneGroup")} />
      </div>

      {phoneList.length > 0 && (
        <table className="w-100 table-data">
          <thead>
            <tr className="table-header">
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {phoneList.map((phone, index) => (
              <tr key={index}>
                <td>{phone}</td>
                <td>
                  <button
                    type="button"
                    title="Editar"
                    className="btn-edit"
                    onClick={() => handleUpdatePhone(phone, index)}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    type="button"
                    title="Eliminar"
                    className="btn-delete"
                    onClick={() => handleDeletePhone(index)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default PhonesGroupList;
