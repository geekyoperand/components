import React, { useState } from "react"
import "./styles.scss"

const Positions = {
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left",
}

const TriggerOptions = {
    HOVER: "hover",
    Click: "click",
    FOCUS: "focus",
}

const getStyleAccToPosition = (position) => {
    switch (position) {
        case "right":
            return {
                positionStyle: {
                    right: -28,
                    top: "50%",
                    transform: "translate(100%, -50%)",
                },
                arrowStyle: {
                    right: -34,
                    top: "50%",
                    transform: "rotate(135deg)",
                },
            }

        case "bottom":
            return {
                positionStyle: {
                    right: "50%",
                    bottom: -20,
                    transform: "translate(50%, 100%)",
                },
                arrowStyle: {
                    right: "50%",
                    bottom: -26,
                    transform: "rotate(225deg)",
                },
            }

        case "left":
            return {
                positionStyle: {
                    left: -28,
                    top: "50%",
                    transform: "translate(-100%, -50%)",
                },
                arrowStyle: {
                    left: "-34px",
                    top: "50%",
                    transform: "rotate(315deg)",
                },
            }
        default:
            return {
                positionStyle: {
                    left: "50%",
                    top: "calc(-50% - 16px)",
                    transform: "translate(-50%, -100%)",
                },
                arrowStyle: {
                    left: "50%",
                    top: "calc(-50% - 22px)",
                    transform: "rotate(45deg)",
                },
            }
    }
}

const Popover = ({
    position = Positions.TOP,
    trigger = TriggerOptions.HOVER,
    disappear = true,
    title,
    content,
    children,
}) => {
    const [PopoverVisible, setPopoverVisible] = useState(!disappear)

    const showPopover = () => setPopoverVisible(true)
    const hidePopover = () => setPopoverVisible(false)

    const hasContent = title || content
    const styleAccToPosition = getStyleAccToPosition(position)

    console.log(PopoverVisible)
    return (
        <div
            className="popover-conatiner"
            onClick={() => trigger === TriggerOptions.Click && showPopover()}
            onFocus={() => trigger === TriggerOptions.FOCUS && showPopover()}
            onMouseEnter={() => trigger === TriggerOptions.HOVER && showPopover()}
            onMouseLeave={() => trigger === TriggerOptions.HOVER && hidePopover()}
            onBlur={hidePopover}
        >
            {hasContent && (
                <>
                    <div
                        className="popover-arrow"
                        style={{ ...styleAccToPosition.arrowStyle, visibility: PopoverVisible ? "visible" : "hidden" }}
                    />
                    <div
                        className="popover-content shadow"
                        onMouseEnter={() => trigger === TriggerOptions.HOVER && showPopover()}
                        onMouseLeave={() => trigger === TriggerOptions.HOVER && hidePopover()}
                        style={{
                            ...styleAccToPosition.positionStyle,
                            visibility: PopoverVisible ? "visible" : "hidden",
                        }}
                    >
                        {title && <div className="popover-title">{title}</div>}
                        {content && <div className="popover-description">{content}</div>}
                    </div>
                </>
            )}
            {children}
        </div>
    )
}

export default Popover
