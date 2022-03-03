import { Link } from 'react-router-dom';
import Tour from './tour/Tour';
import "./Tours.css"

function Tours(props) {

    return (
        <>
            {props.data.map((meme,idx)=> {
                return (
                    <div className="card" key={idx}>
                        <Link to={`/city/${meme.id}`}>
                        <Tour tour={meme}/>
                        </Link> 
                    </div>
                );
            })}
        </>
    );
}

export default Tours;