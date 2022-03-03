import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from '../../data/data.json';
import "./TourDetails.css"

function TourDetails() {
    const [readMore, setreadMore] = useState(false);
    let { id } = useParams();
    const result = data.filter((value) => value.id === id);

    return (
        <div className="card" key={id}>
            <h2>{result[0].name}</h2>
            <img src={result[0].image} alt="" />
            <p className='pragraph'>{readMore ? `description : ${result[0].info}`
                : `description : ${result[0].info.substring(0, 200)}...`}
                <button onClick={() => setreadMore(!readMore)}>
                    {!readMore ? "show more" : "show less"}
                </button>
            </p>
        </div>
    );
}
export default TourDetails;