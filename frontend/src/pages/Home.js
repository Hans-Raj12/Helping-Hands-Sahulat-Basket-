import {Link} from 'react-router-dom'
import coverImage from '../assets/coverImage.jpg'
import '../styles/Home.css'
const Home = () => {
    return (
        <div className="container">
        <div className="cover-image" style={{backgroundImage:`url(${coverImage})`}}>
          <div className="overlay">
            <h1>Need your Big Hand For Change The World.</h1>
            <button>Donate</button>
          </div>
        </div>
      </div>

        // <div className="home">
        //     <h1>Home</h1>
        //     <h1>Home</h1>
        //     <h1>Home</h1>
        //     <h1>Home</h1>
        //     <h1>Home</h1>
        //     <h1>Home</h1>
        //     <Link to='/sidebar'>Donor Dashboard</Link>
            
            
        // </div>
    )
}

export default Home