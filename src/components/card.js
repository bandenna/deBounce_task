const Displaycard = ({ details }) => {
    const { title, link, description } = details
    return (
        <div className="card mt-3">
            <p> Title :{title}</p>
            <p> Link :{link}</p>
            <p className="p-3"> Description :{description}</p>
        </div>
    )
}
export default Displaycard