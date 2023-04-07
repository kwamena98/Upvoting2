import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import React,{useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWallet } from '@fortawesome/free-solid-svg-icons';
// import { useQuery } from 'react-query';
// import Axios from 'axios'
// import Spinner from '../Components/Spinner';

const ProfileCard = ({ username, profilePictureUrl }) => {

    function formatNumber(number) {
        if (number >= 1000000) {
          return (number / 1000000).toFixed(1) + "M";
        } else if (number >= 1000) {
          return (number / 1000).toFixed(1) + "K";
        } else {
          return number.toString();
        }
      }
  
  
    const [items,setItem] = useState([
  
      {
        id: '1',
        title: 'El Classico',
        image: 'https://phantom-marca.unidadeditorial.es/ea73e309d4d83235044dbbe48f124f4b/resize/1320/f/jpg/assets/multimedia/imagenes/2022/11/21/16690544280122.jpg',
        text: 'Highest Bid now is $700 FEET',
        votes:'1000',
      },
      {
        id: '2',
        title: 'Diamond',
        image: 'https://pbs.twimg.com/media/FpGRkeoaAAAG7U8?format=jpg&name=small',
        text: 'Highest Bid now is $800 FEET',
        votes:'11',
      },
      {
        id: '3',
        title: 'Rizz',
        image: 'https://pbs.twimg.com/media/FpGRzVYXgAAlx5x?format=jpg&name=small',
        text: 'Highest Bid now is $600 FEET',
        votes:'20',
      },
      {
        id: '4',
        title: 'Cubic',
        image: 'https://pbs.twimg.com/media/FpGSHQmXgAAWBIf?format=jpg&name=small',
        text: 'Highest Bid now is $700 FEET',
        votes:'14',
      },
      {
        id: '5',
        title: 'Nest',
        image: 'https://pbs.twimg.com/media/FpGSSsxX0AACtOb?format=jpg&name=small',
        text: 'Highest Bid now is $600 FEET',
        votes:'2000000',
      },
      {
        id: '6',
        title: 'Lit',
        image: 'https://images.pexels.com/photos/997127/pexels-photo-997127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Highest Bid now is $7K FEET',
        votes:'500',
      },
    ]);
  return (
    <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Dashboard">Home</Nav.Link>
      <Nav.Link href="/Profile">Profile</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        <div className="instagram-profile">
      <div className="profile-picture">
        <img src="https://picsum.photos/id/1005/150/150" alt="Profile" />
      </div>
      <div className="profile-info">
        <h1 className="username">Kwamena</h1>
        <div className="stats">
          <span className="stat-count">10</span> posts
          <br></br>
          <span className="stat-count">567k</span> Votes
        </div>
      </div>
    </div>
    <div>
        
  <div className='container'>
    <div className="container">
      {items &&
        items
          .sort((a, b) => b.votes - a.votes)
          .map((item) => (
            <div className="card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                {/* <p className="card-text">{(item.username).toUpperCase()}</p> */}
                {/* When the button is clicked, call handleShow with the item's ID */}
                <button
                  className="btn btn-success"
                  disabled
                >
                  {/* Format the number of votes and add an up arrow */}
                  {formatNumber(parseInt(item.votes))}⬆️
                </button>
              </div>
            </div>
          ))}
    </div>

</div>
    </div>
    </div>
    

    
  );
};

export default ProfileCard;
