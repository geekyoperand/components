import React from "react"
import { CrossIcon } from "components/Icons"
import "./styles.scss"

const PopupType = {
    Modal: "modal",
    Drawer: "drawer",
}

const Popup = ({
    children,
    visible = false,
    onClose = () => null,
    destroyOnClose = false,
    header = "",
    type = PopupType.Modal,
}) => {
    React.useEffect(() => {
        if (visible) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "visible"
    }, [visible])

    if (!visible) return

    return (
        <div className="popup-container">
            <div className="popup-mask" onClick={destroyOnClose && onClose} />
            <div className={type === PopupType.Drawer ? "popup-drawer-content" : "popup-modal-content"}>
                <div className="popup-header">
                    <div className="close-popup" onClick={onClose}>
                        <CrossIcon className="close-icon" />
                    </div>
                </div>
                <div className="popup-child-content">{children}</div>
            </div>
        </div>
    )
}

export default Popup
