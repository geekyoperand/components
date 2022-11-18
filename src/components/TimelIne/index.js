import React from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import "./styles.scss"

const columnsTypes = {
    SINGLE: "single",
    DOUBLE: "double",
}

const TimeLineCard = ({ card }) => {
    const [showReadMoreText, setShowReadMoreText] = React.useState(false)

    return (
        <div className="timeline-content">
            <span className="card-title text-bold">{card.cardTitle}</span>
            <span className="card-subtitle text-medium">{card.cardSubtitle}</span>
            <span className="card-description text-muted">
                {card.cardDescription.length > 100 && !showReadMoreText
                    ? card.cardDescription.match(/.{1,100}/g)[0]
                    : card.cardDescription}
            </span>
            {card.cardDescription.length > 100 && (
                <div
                    className="text-faint text-spaced read-more-btn"
                    onClick={() => setShowReadMoreText(!showReadMoreText)}
                >
                    Read {showReadMoreText ? "less" : "more"} {showReadMoreText ? <FiChevronUp /> : <FiChevronDown />}
                </div>
            )}
        </div>
    )
}

const TimeLine = ({ items, columns = columnsTypes.SINGLE }) => {
    return (
        <div className={`timeline ${columns === columnsTypes.SINGLE ? "left-aligned" : ""}`}>
            {items.map((card, index) => (
                <div
                    key={index}
                    className={`timeline-container ${
                        columns === columnsTypes.DOUBLE && !(index % 2) ? "left" : "right"
                    }`}
                >
                    <TimeLineCard card={card} />
                </div>
            ))}
        </div>
    )
}

export default TimeLine
