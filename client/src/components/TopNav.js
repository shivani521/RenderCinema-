import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { firebaseAuth } from '../utils/firebase-config';
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const TopNav = ({isScrolled}) => {
    const navLinks = [
        {name: "Home", link: '/'},
        {name: "TvShow", link: '/tv'},
        {name: "My List", link: '/mylist'},
        {name: "Movies", link: '/movies'}
    ]

    const navigate = useNavigate()

    onAuthStateChanged(firebaseAuth, (currentUser) =>{
        if(!currentUser) navigate('/login')
      });
  return (
    <NavContainer>
        <nav className={`${isScrolled ? "scrolled": "notScroll"}`}>
        <div className="leftside">
            <div className='logo'>
                <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png" alt="logo" />
            </div>
            <ul className='links'>
                {
                    navLinks.map(({name, link}) => {
                        return(
                            <li key={name}>
                                <Link to={link}>{name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        <div className="rightside">
            <button onClick={()=>signOut(firebaseAuth)}>
                <AiOutlineLogout/>
            </button>
        </div>
        </nav>
        
    </NavContainer>
  )
}
const NavContainer = styled.div`
 .notScroll{
    display:flex;
 }
 .scrolled{
    display:flex;
    background-color: black;
 }
 nav{
    position: sticky;
    top:0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .leftside{
        margin-left: 5rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 10rem;
        height: 2rem;
    }
 }
 .links{
    display: flex;
    list-style-type: none;
    gap:3rem;
    li{
        a{
            color: white;
            text-decoration: none;
        }
    }
 }
}
.rightside{
    margin-right:1rem;
    display:flex;
    align-items: center;
    gap:1rem;
    button{
        background-color: red;
        border:none;
        cursor: pointer;
        border-radius: 50%;
    }&:focus{
        outline: none;
    }svg{
        color:white;
        font-size: 2rem;
    }
}
`
export default TopNav
