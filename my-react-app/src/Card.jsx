import profilePic from'./assets/profile.jpg'

function Card() {
    return(
        <div className="card">

            <img className="card-image" alt="Profile Picture" src={profilePic}></img>

            <h2 className='card-title'>Callum Jones</h2>

            <p className='card-text'>I am an IT Trainer learning React for a personal development</p>

        </div>
    );
}

export default Card