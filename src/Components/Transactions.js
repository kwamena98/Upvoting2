import React, { useContext,useState,useEffect } from "react";
// import useFetch from "../hooks/useFetch";
import Axios from 'axios'
import { useQuery } from 'react-query';
import Spinner from "./Spinner";
const TransactionsCard = ({usernames,upvotes, url,keyword }) => {

    function formatNumber(number) {
        if (number >= 1000000) {
          return (number / 1000000).toFixed(1) + "M";
        } else if (number >= 1000) {
          return (number / 1000).toFixed(1) + "K";
        } else {
          return number.toString();
        }
      }
//   const gifUrl = useFetch({ keyword });



  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">


            <p className="text-white text-base">{usernames}</p>

          <p className="text-white text-base">{formatNumber(upvotes)}</p>
        </div>
        <img
          src={url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Upvote
        </li>
        </div>
      </div>
    </div>
  );
};


const Transactions = () => {


    const { data, isLoading, refetch } = useQuery(["nfts"], () => {
        return fetch("http://7066-41-215-173-89.ngrok.io/all")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            return data;
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            throw error;
          });
      });
      
  
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">



       
        {isLoading ? (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spinner />
    </div>
  ) : ( 
    
    
    <div className="flex flex-wrap justify-center items-center mt-10">

{data &&
        data
          .sort((a, b) => b.votes - a.votes)
          .map((item) => (
          <TransactionsCard key={item.id} url={item.image} upvotes={item.votes} usernames={item.username}/>
          ))}

        </div>

  )}

        </div>
      </div>
   
  );
};

export default Transactions;
