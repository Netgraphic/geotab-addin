import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = ({ text, icon }) => {
  return (
    <h1>
      {text} <FontAwesomeIcon icon={icon} />
    </h1>
  );
};

export default Title;
