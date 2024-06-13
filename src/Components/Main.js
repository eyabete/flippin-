import React, {useState} from "react";
import Card from "./Card";
import axios from "axios";
import bulb from "./bulb.png";
import mental from "./mental-health.png";
import focus from "./focus.png";
import creativity from "./creativity.png";

const Main=()=>{
    const [search, setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=()=>{   
            //console.log("hello");
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAlIfW1s8v4f9Wgj9yVq9quUat_WLdtzdg'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
    }
    return(
        <>
        <div className="header">
            <div className="row2">
                <h2> Flippin'</h2>
                <div className="search">
                <input type="text" placeholder="Search a book" value={search} onChange={e=>setSearch(e.target.value)}></input>
                <button onClick={searchBook}><i className="fas fa-search"></i></button>
                </div>
                <div><h3>"There's more treasure to find in books than in pirate's loot."</h3></div>    
            </div>
        </div>

        <div className="row3">
            <h1>"Flip those Pages"</h1>
            <hr className="hrz"></hr>
        </div>        

        <div className="container">

            {bookData.length === 0 ? (
            <>
                
                    <div className="card1">
                        <img className="icons" src={bulb}></img>
                        <p>Expands Knowledge and Understanding</p>
                    </div>
                    <div className="card1">
                        <img className="icons" src={focus}></img>
                        <p>Improves Memory and Focus</p>
                    </div>
                    <div className="card1">
                        <img className="icons" src={mental}></img>
                        <p>Reduces Stress and Anxiety</p>
                    </div>
                    <div className="card1">
                        <img className="icons" src={creativity}></img>
                        <p>Enhances Creativity and Imagination</p>
                    </div>
              
                
           
            </>
            
        ) : (
          <Card book={bookData} />
        )}
        </div>
        
        </>
    )
}
export default Main;