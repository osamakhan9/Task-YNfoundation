import React, {  useState } from "react";
import styles from "../Navbar css/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import image from '../image/desig_spotlight.png'
import image2 from '../image/bussines.png'

import { RiArrowDropDownLine } from "react-icons/ri";



const Navbar = () => {
  


  const [active, setActive] = useState("");
  const [info, setinfo] = useState(false);
  
 // console.log(userName)

  
  
  const activeStyle = {
    color: "black",
    
    textDecoration: "none",
    
    
    borderBottom : "4px solid #fdd835"
    
  };
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
    BsBorderBottom: "yellow"
  };




  return (
    <div id={styles.fixedNav}>
      <div id={styles.navBar}>
        <div id={styles.menuNav}>
          <li>
            <NavLink to="/">
              <img id={styles.logo}
                src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
                alt="logo"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={() => setActive("")}
            >
              Design spotlight<span><RiArrowDropDownLine className={styles.drop_logo}/></span>
            </NavLink>
            <div id={styles.mainMenu1}>
              <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Visual documents</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Visual Suite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Docs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Presentations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Whiteboards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                    PDF editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Graphs and charts
                    </NavLink>
                  </li>

                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Photos and Videos</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      YouTube video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Photo editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> 
                    Photo collages
                    </NavLink>
                  </li>
               
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Print</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Business cards 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Invitations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Mugs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Hoodies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Calendars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Labels
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Marketing</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Logos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Posters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Flyers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Brochures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Social media
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Websites
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Stickers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Yard signs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      QR Code Generator
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.typesofMenu}>
                 <div>
                  <img src={image} alt="" />
                 </div>

                </ul>
              </div>
            </div>
          </li>


          <li>
            <NavLink to="/" onClick={() => setActive("")}>
              Business<span><RiArrowDropDownLine className={styles.drop_logo}/></span>
            </NavLink>
            <div id={styles.mainMenu2}>
            <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Visual documents</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Visual Suite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Docs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Presentations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Whiteboards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                    PDF editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Graphs and charts
                    </NavLink>
                  </li>

                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Photos and Videos</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      YouTube video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Photo editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> 
                    Photo collages
                    </NavLink>
                  </li>
               
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Print</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Business cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Invitations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Mugs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Hoodies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Calendars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Labels
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Marketing</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Logos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Posters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Flyers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Brochures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Social media
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Websites
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Stickers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Yard signs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      QR Code Generator
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.typesofMenu}>
                 <div>
                  <img src={image2} alt="" />
                 </div>

                </ul>
              </div>
            </div>
          </li>

          
          <li>
            <NavLink to="/">Education<span><RiArrowDropDownLine className={styles.drop_logo}/></span></NavLink>
            <div id={styles.mainMenu3}>
            <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Visual documents</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Visual Suite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Docs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Presentations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Whiteboards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                    PDF editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Graphs and charts
                    </NavLink>
                  </li>

                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Photos and Videos</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      YouTube video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Photo editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> 
                    Photo collages
                    </NavLink>
                  </li>
               
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Print</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Business cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Invitations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Mugs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Hoodies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Calendars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Labels
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Marketing</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Logos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Posters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Flyers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Brochures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Social media
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Websites
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Stickers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Yard signs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      QR Code Generator
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.typesofMenu}>
                 <div>
                  <img src={image} alt="" />
                 </div>

                </ul>
              </div>
            </div>
          </li>




          <li>
            <NavLink to="/">Plans and pricing<span><RiArrowDropDownLine className={styles.drop_logo}/></span></NavLink>
            <div id={styles.mainMenu3}>
            <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Visual documents</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Visual Suite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Docs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Presentations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Whiteboards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                    PDF editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Graphs and charts
                    </NavLink>
                  </li>

                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Photos and Videos</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      YouTube video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Photo editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> 
                    Photo collages
                    </NavLink>
                  </li>
               
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Print</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Business cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Invitations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Mugs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Hoodies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Calendars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Labels
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Marketing</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Logos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Posters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Flyers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Brochures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Social media
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Websites
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Stickers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Yard signs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      QR Code Generator
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.typesofMenu}>
                 <div>
                  <img src={image} alt="" />
                 </div>

                </ul>
              </div>
            </div>
          </li>



          <li>
            <NavLink to="/">Learn<span><RiArrowDropDownLine className={styles.drop_logo}/></span></NavLink>
            <div id={styles.mainMenu3}>
            <div className={styles.dropDown}>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      <h5>Visual documents</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Visual Suite
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Docs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Presentations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      {" "}
                      Whiteboards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                    PDF editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Graphs and charts
                    </NavLink>
                  </li>

                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Photos and Videos</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      YouTube video editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Photo editor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"> 
                    Photo collages
                    </NavLink>
                  </li>
               
                </ul>
                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Print</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Business cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Invitations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Mugs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      T-Shirt
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/"></NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Hoodies
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Calendars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Labels
                    </NavLink>
                  </li>
                </ul>

                <ul>
                  <li>
                    <NavLink to="/">
                      <h5>Marketing</h5>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/"
                      onClick={() => setActive("")}
                    >
                      Logos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Posters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Flyers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Brochures
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Social media
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Websites
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Stickers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      Yard signs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      QR Code Generator
                    </NavLink>
                  </li>
                </ul>

                <hr />
                <ul className={styles.typesofMenu}>
                 <div>
                  <img src={image} alt="" />
                 </div>

                </ul>
              </div>
            </div>


          </li>
        </div>




        <div id={styles.searchBars}>
          <li>
            <div className={styles.iconInput}>
              <IoSearchOutline />
              <input
                type="text"
                id={styles.inpSrch}
                placeholder="Try logo, poster, anything!"
              ></input>
            </div>
            <div id={styles.searchBarsData}></div>
          </li>
        
         

          <li>
               <button className={styles.log}>Log in</button>
          </li>
          <li>
             <button className={styles.sign}>Sign up</button>
          </li>

        </div>
      </div>
      <hr className={styles.hrLine} />
    </div>
  );
};

export default Navbar;