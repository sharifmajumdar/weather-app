import './style.css';
function UserInput(){
    return(
    <div id="input-area">
        <h1 class="text-center">Welcome to Weather App</h1>
        <div id="submit-area">
            <input type="text" id="city-name" placeholder="Enter your city name"></input>
            <br></br><br></br>
            <button id="submit-button">Show</button>
        </div>
    </div>);
    function alertMsg()
    {
        document.getElementById("submit-button").addEventListener('click', function(){
            alert("Wrong input");
        })
    }
}


export default UserInput;