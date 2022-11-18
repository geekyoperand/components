import React from "react"
import Spin from "components/Spin"
import PopoverComponent from "pages/Popover"
import TimelineComponent from "pages/Tiimeline"
import PopupComponent from "pages/Popup"
import "./styles.scss"

const Homepage = () => {
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <div className="homepage-conatiner">
            <div className="container card">
                {loading ? (
                    <div className="spinner">
                        <Spin />
                    </div>
                ) : (
                    <>
                        <PopupComponent />
                        {/* Uncomment below line to use respective component */}
                        {/* <PopoverComponent /> */}
                        {/* <TimelineComponent /> */}
                    </>
                )}
            </div>
        </div>
    )
}

export default Homepage
