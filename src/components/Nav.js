import React from 'react'
import classes from './style/nav.module.css'
import { useState ,useEffect} from 'react'
import img from '../img/logo3een.jpg'
import { NavLink } from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSelector} from 'react-redux'

const Nav = () => {
    const [active,setActive] = useState("sleepOptions")
    const Data=  useSelector(state => state);
    const [count, setCount] = useState(0);

    const navHandeler =()=>{
        if(active==='optionsActive'){
            setActive('sleepOptions');
        }else{
            setActive('optionsActive')
        }
    }
    useEffect(()=>{
        if(Data){
        let c = 0;
        Data.map((p) => {
          c += p.count;
          return c;  
        })
          setCount(c);
        }
      },[Data])
  return (
    <div className={classes.nav}>
        <div className={classes.logoContainer}>
            <div className={classes.imgContainer}>
            <img src={img} alt="logo"/>
            </div>
        </div>

        <div className={classes.navOptions}>
            <div className={`${classes[active]} ${classes.options}`}>
            <ul className={classes.links}>
                <li onClick={navHandeler}>
                <NavLink to="/" exact activeClassName={classes.activeLink}> Home</NavLink>
                </li>
                <li  onClick={navHandeler}>
                <NavLink  to="/products" activeClassName={classes.activeLink}> Full catalog</NavLink>
                </li>
                <li onClick={navHandeler}>
                <NavLink to="/cart" activeClassName={classes.activeLink}>
                    {count}<ShoppingBasketIcon style={{ fontSize: 25,marginLeft:10 }} />
                </NavLink>
                </li>

                <li onClick={navHandeler}>
                    <a href="https://www.facebook.com/3einn" ClassName={classes.socialLink}>
                        <FacebookIcon style={{fontSize:20}} />
                    </a>
                </li>

                <li onClick={navHandeler}>
                    <a href="https://www.instagram.com/3einn_/" ClassName={classes.socialLink}>
                        <InstagramIcon style={{fontSize:20}} />
                    </a>
                </li>
            </ul>
            </div>
           
        </div>
        <div className={classes.bur} onClick={navHandeler}>
            {active==='sleepOptions'? <MenuIcon style={{ fontSize: 40 }} /> : <ClearIcon style={{ fontSize: 40 }}/>}
        </div>
           
    </div>
  )
}

export default Nav