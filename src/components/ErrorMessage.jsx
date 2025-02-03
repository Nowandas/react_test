import PropTypes from "prop-types";
import {toast} from "react-toastify";

const ErrorMessage = ({errorMessage}) => {
  return (
    toast.error(errorMessage),
    <div>{errorMessage}</div>
  )
}

ErrorMessage.propTypes = {
    errorMessage:PropTypes.string,
};


export default ErrorMessage