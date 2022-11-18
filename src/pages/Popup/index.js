import Popup from "components/Popup"
import React, { useState } from "react"

const PopupComponent = () => {
    const [openModal, setOpenModal] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <div className="content">
            <button onClick={() => setOpenModal(true)}>Open Popup Modal</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => setOpenDrawer(true)}>Open Popup Drawer</button>
            <Popup
                visible={openModal}
                onClose={() => setOpenModal(false)}
                header={<span>Popup</span>}
                style={{ width: 500 }}
                type="modal"
                destroyOnClose
            ></Popup>
            <Popup
                visible={openDrawer}
                onClose={() => setOpenDrawer(false)}
                header={<span>Popup</span>}
                style={{ width: 500 }}
                type="drawer"
                destroyOnClose
            ></Popup>
        </div>
    )
}

export default PopupComponent
