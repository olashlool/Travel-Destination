import data from "../../data/db.json"
function Tours() {
    return (
        data.map(tour => {
            return (
                <div>
                    <h1>Name:{tour.name} </h1>
                    <br />
                    <img src={tour.image} />
                </div>
            )
        })
    );
}
export default Tours;