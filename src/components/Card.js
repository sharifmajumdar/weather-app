import './style.css';
function Card(){
    return(
        <div id='card-area'>
            <h1>Current Weather Info</h1>
            <div id='info-area'>
                <p>City Name</p>
                <h3>Temperature</h3>
            </div>
        </div>
    );
}

export default Card;