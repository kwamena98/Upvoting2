import React, { useContext ,useState,useEffect} from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum, SiQuantconnect, SiSololearn, SiTelegraph } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Axios from 'axios'



const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Welcome = () => {
 
 
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







  const [items,setItem]=useState([{}])


  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-row items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Upload Your Nft<br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Upvote others' NFTS 
          </p>
   
            {!walletAddress ? (
           <button
           type="button"
           onClick={connectWallet}
           className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
         >
           <AiFillPlayCircle className="text-white mr-2" />
           <p className="text-white text-base font-semibold">
             Connect Wallet
           </p>
         </button>
            ):(
              <h1></h1>
            )
      
    }
 
  
         
        </div>

        <div className="flex flex-colum flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
              </div>
              <div>
                
                <p className="text-white font-light text-sm">
                    
                {!walletAddress?(<a>Wallet not connected</a>):(<a> <br></br>{walletAddress.slice(0, 5) + "..." + walletAddress.slice(-5)}</a>)}
                 
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Address
                </p>
              </div>
            </div>
            <button >Send Sol</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Welcome;
