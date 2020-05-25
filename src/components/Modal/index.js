import Modal from "./Modal";
import confirm from "./confirm";

Modal.warning = function (props) {
    const config = {
        icon: "warning-circle-fill",
        type: "warning",
        ...props
    }
    return confirm(config)
}
Modal.info = function (props) {
    const config = {
        icon: "info-circle-fill",
        type: "info",
        ...props
    }
    return confirm(config)
}
Modal.success = function (props) {
    const config = {
        icon: "check-circle-fill",
        type: "success",
        ...props
    }
    return confirm(config)
}
Modal.error = function (props) {
    const config = {
        icon: "close-circle-fill",
        type: "error",
        ...props
    }
    return confirm(config)
}
Modal.confirm = confirm;
export default Modal;
