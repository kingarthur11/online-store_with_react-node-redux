import "./Backdrop.css"

const Backdrop = ({show, click}) => {
    return show && <div className="backdrop" onClick={click}></div>
    // return <div className="backdrop"></div>
}
export default Backdrop;