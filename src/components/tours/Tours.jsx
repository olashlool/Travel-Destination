import data from "../../data/db.json"
function Tours() {
    return (
        data.map(tour => {
            return (
                <div>
                    <h3>Name:{tour.name} </h3>
                    <br />
                    <img src={tour.image} />
                </div>
            )
        })
    );
}
export default Tours;