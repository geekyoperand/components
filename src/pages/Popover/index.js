import React from "react"
import Popover from "components/Popover"
import "./styles.scss"

const PopoverComponent = () => {
    return (
        <div className="content">
            <div className="trigger">
                <header>Trigger</header>
                <div className="demo-btns">
                    <Popover position="left" trigger="hover" content={"Your Content"}>
                        <button>On hover</button>
                    </Popover>
                    <Popover position="top" trigger="focus" title={"Your Title"} content={"Your Content"}>
                        <button>On focus</button>
                    </Popover>
                    <Popover position="right" trigger="click" title={"Your Title"} content={"Your Content"}>
                        <button>On click</button>
                    </Popover>
                </div>
            </div>

            <div className="positions">
                <header>Positions</header>
                <div className="demo-btns">
                    <Popover position="left" title={"Your Title"} content={"Your Content"}>
                        <button>Left</button>
                    </Popover>
                    <Popover position="top" title={"Your Title"} content={"Your Content"}>
                        <button>Top</button>
                    </Popover>
                    <Popover position="bottom" content={"Your Content"}>
                        <button>Bottom</button>
                    </Popover>
                    <Popover position="right" title={"Your Title"} content={"Your Content"}>
                        <button>Right</button>
                    </Popover>
                </div>
            </div>
        </div>
    )
}

export default PopoverComponent
