import loaderImg from "../../assets/images/loader.gif";

const ConfigStatus = () => {
  return (
    <div className="container-header p-0">
      <h3>Estado de la configuración</h3>
      <ul className="config-details">
        <li>
          Prueba Geotab
          <span id="statusGeotab" className="status">
            <img src={loaderImg} />
          </span>
        </li>
        <li>
          Prueba Surfsight
          <span id="statusSurfsight" className="status">
            <img src={loaderImg} />
          </span>
        </li>
        <li>
          Datos de Contacto válidos
          <span id="statusContact" className="status">
            <img src={loaderImg} />
          </span>
        </li>
        <li>
          Datos de Funcionamiento general válidos
          <span id="statusContact" className="status">
            <img src={loaderImg} />
          </span>
        </li>
      </ul>
      <div className="clear"></div>
    </div>
  );
};

export default ConfigStatus;
