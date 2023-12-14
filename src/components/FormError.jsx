const FormError = ({ error }) => {
  return <>{error && <p className="errorForm">{error.message}</p>}</>;
};

export default FormError;
