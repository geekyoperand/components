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
                    top: "50%",
                    right: -9,
                    transform: "translate(100%, -50%)",
                },
                arrowStyle: {
                    top: "calc(50% - 6px)",
                    right: -15,
                    transform: "rotate(135deg)",
                },
                position: "right",
            }

        case "bottom":
            return {
                positionStyle: {
                    bottom: -9,
                    right: "50%",
                    transform: "translate(50%, 100%)",
                },
                arrowStyle: {
                    bottom: -15,
                    right: "calc(50% - 6px)",
                    transform: "rotate(225deg)",
                },
                position: "bottom",
            }

        case "left":
            return {
                positionStyle: {
                    left: -9,
                    top: "50%",
                    transform: "translate(-100%, -50%)",
                },
                arrowStyle: {
                    left: -15,
                    top: "calc(50% - 6px)",
                    transform: "rotate(315deg)",
                },
                position: "left",
            }
        default:
            return {
                positionStyle: {
                    top: -9,
                    left: "50%",
                    transform: "translate(-50%, -100%)",
                },
                arrowStyle: {
                    top: -15,
                    left: "calc(50% - 6px)",
                    transform: "rotate(45deg)",
                },
                position: "top",
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
    const [backgroundColor, setBackgroundColor] = useState("#d2d2d2")

    const showPopover = () => setPopoverVisible(true)
    const hidePopover = () => setPopoverVisible(false)
    const onHoverEffect = () => setBackgroundColor("blue")
    const offHoverEffect = () => setBackgroundColor("#d2d2d2")

    const hasContent = title || content
    const styleAccToPosition = getStyleAccToPosition(position)

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
                        style={{
                            ...styleAccToPosition.arrowStyle,
                            visibility: PopoverVisible ? "visible" : "hidden",
                            borderColor: backgroundColor,
                        }}
                    />
                    <div
                        className="popover-arrow-background"
                        style={{
                            ...styleAccToPosition.arrowStyle,
                            visibility: PopoverVisible ? "visible" : "hidden",
                            borderColor: backgroundColor,
                            [styleAccToPosition.position]:
                                styleAccToPosition.arrowStyle[styleAccToPosition.position] - 1.5,
                        }}
                    />
                    <div
                        className="popover-content"
                        onMouseEnter={() => {
                            if (trigger === TriggerOptions.HOVER) {
                                showPopover()
                                onHoverEffect()
                            }
                        }}
                        onMouseLeave={() => {
                            if (trigger === TriggerOptions.HOVER) {
                                hidePopover()
                                offHoverEffect()
                            }
                        }}
                        style={{
                            ...styleAccToPosition.positionStyle,
                            visibility: PopoverVisible ? "visible" : "hidden",
                            borderColor: backgroundColor,
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
