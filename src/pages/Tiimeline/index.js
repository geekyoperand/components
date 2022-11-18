import React from "react"
import TimeLine from "components/TimelIne"
import items from "./data"
import "./styles.scss"

const TimelineComponent = () => {
    return (
        <div className="content">
            <TimeLine items={items} />
            <TimeLine items={items} columns="double" />
        </div>
    )
}

export default TimelineComponent
