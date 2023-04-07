

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Image} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import Axios from 'axios'
import Spinner from '../Components/Spinner';
import Navbar from '../Components/Navbar';
import '../index.css';
import Welcome from '../Components/Welcome';
import Transactions from '../Components/Transactions';
export const Dashboard =()=>{
    const [show, setShow] = useState(false);
    const [onscreenid,setOnscreen]=useState("")

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
      
      setOnscreen(id)
      setShow(true);

    
    }

    function formatNumber(number) {
      if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + "M";
      } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + "K";
      } else {
        return number.toString();
      }
    }


    const [walletAddress, setWalletAddress] = useState(null);

    const checkIfWalletIsConnected = async () => {
      if (window?.solana?.isPhantom) {
        console.log('Phantom wallet foundx!');
        const response = await window.solana.connect({ onlyIfTrusted: true });

        setWalletAddress(response.publicKey.toString());
        console.log('Connected with Public Key:', response.publicKey.toString());
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    };
    
    const connectWallet = async () => {
      if (window?.solana?.isPhantom) {
        console.log('Phantom wallet found!');
        const response = await window.solana.connect();
        console.log('Connected with Public Key:', response.publicKey.toString());
        setWalletAddress(response.publicKey.toString());
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    };
    
    useEffect(() => {
      const onLoad = async () => {
        await checkIfWalletIsConnected();
      };
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }, []);
    
    useEffect(() => {
      console.log(walletAddress);
    }, [walletAddress]);
    
      

  const renderNotConnectedContainer = () => (
    <button
      className="btn btn-primary"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );



  const {data:nftData,isLoading,refetch} =useQuery(["nfts"],()=>{
      return Axios.get("http://127.0.0.1:5000/all").then((res)=>
      setItem(res.data));
  })




  const [items,setItem]=useState([{}])

    // const [items,setItem] = useState([
  
    //   {
    //     id: '1',
    //     title: 'El Classico',
    //     image: 'https://phantom-marca.unidadeditorial.es/ea73e309d4d83235044dbbe48f124f4b/resize/1320/f/jpg/assets/multimedia/imagenes/2022/11/21/16690544280122.jpg',
    //     text: 'Highest Bid now is $700 FEET',
    //     votes:'1000',
    //   },
    //   {
    //     id: '2',
    //     title: 'Diamond',
    //     image: 'https://pbs.twimg.com/media/FpGRkeoaAAAG7U8?format=jpg&name=small',
    //     text: 'Highest Bid now is $800 FEET',
    //     votes:'11',
    //   },
    //   {
    //     id: '3',
    //     title: 'Rizz',
    //     image: 'https://pbs.twimg.com/media/FpGRzVYXgAAlx5x?format=jpg&name=small',
    //     text: 'Highest Bid now is $600 FEET',
    //     votes:'20',
    //   },
    //   {
    //     id: '4',
    //     title: 'Cubic',
    //     image: 'https://pbs.twimg.com/media/FpGSHQmXgAAWBIf?format=jpg&name=small',
    //     text: 'Highest Bid now is $700 FEET',
    //     votes:'14',
    //   },
    //   {
    //     id: '5',
    //     title: 'Nest',
    //     image: 'https://pbs.twimg.com/media/FpGSSsxX0AACtOb?format=jpg&name=small',
    //     text: 'Highest Bid now is $600 FEET',
    //     votes:'2000000',
    //   },
    //   {
    //     id: '6',
    //     title: 'Lit',
    //     image: 'https://images.pexels.com/photos/997127/pexels-photo-997127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //     text: 'Highest Bid now is $7K FEET',
    //     votes:'500',
    //   },
    // ]);

    

const handleUpvote = async (id) =>  {
  // sendSol("437BEiVgePKBwWNFiCguNukezsAEP3z5Um13nc2VrKuW",1)
  setItem(
    items.map((items)=>{
      if (items.id===id){
        return {...items,votes:parseInt(items.votes, 10) + 1};
      }else{
        return items;
      }
    })
    )

}

    return(



      

      <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      
        <Navbar/>
      <Welcome/>

     
        </div>
        <div>
          <Transactions/>


      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ready to Upvote</Modal.Title>
          </Modal.Header>
          <Modal.Body>1 Sol to Upvote</Modal.Body>
          <Modal.Footer>
            {!walletAddress && renderNotConnectedContainer()}
            <button className='btn btn-primary' onClick={()=>handleUpvote(onscreenid)}>
              Upvote
            </button>
          </Modal.Footer>
      </Modal>
  
      </div>  
      </div>
   
    )
}