 import React from 'react'
 import { useState, useEffect } from 'react'
 import { useNavigate } from "react-router-dom"
 import TopNav from "../components/TopNav.js"
 import styled from "styled-components"
 import {AiOutlineInfoCircle } from "react-icons/ai";
 import {FaPlay} from "react-icons/fa";
 import Card from "../components/Card.js"
 import { getGenres, fetchMovies } from "../store"
 import {useDispatch, useSelector } from 'react-redux'
 import SliderContainer from "../components/SliderContainer";

 const Netflix = () => {
     const [isScrolled, setIsScrolled] = useState(false)
     const navigate = useNavigate()

     const movies = useSelector((state)=> state.netflix.movies)
     const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)

     const dispatch = useDispatch()

     useEffect(()=>{
      dispatch(getGenres());
   },[]);

     useEffect(()=>{
        if(genresLoaded){
          dispatch(fetchMovies({type: "all"}))
        }
     });

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset   === 0 ? false: true)
      return () =>(window.onscroll = null)
    }
    // console.log(movies)
  
   return (
    <HeroContainer>
      <div className='hero'>
      <TopNav isScrolled={isScrolled}/>
      <img className="background-image" src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg' alt='no internet connection' />
      <div className='container'>
        <div className='title'>
          <h1>SuperMan</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div className='buttons'>
        <button onClick={()=>navigate('/player')}className='playBtn'>Play</button>
        <button className='moreBtn'>More</button>
      </div>
     </div>
     </div>
     <SliderContainer movies={movies}/>
    </HeroContainer>
     
   )
 }
 const HeroContainer = styled.div`
 background-color: black;
  .hero{
    position: relative;
    .background-image{
      filter: brightness(40%)
    }
    img{
      height: 70vh;
      width: 100vw;
    }
    .container{
      position: absolute;
      bottom: 1rem;
      .title{
        h1{
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p{
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          color: white;
          font-family:"lexend Deca", sans-serif ;
        }
      }
      .buttons{
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }

      .playBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;

      }
      .moreBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }

 `
 export default Netflix
 