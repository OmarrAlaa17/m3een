import React from 'react'
import classes from './style/footer.module.css'
import LinkIcon from '@mui/icons-material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <div className={classes.footer}>
       
         <div className={classes.logoContainer}>
            <div className={classes.info}>
              <p>
                Created by MONTU
              </p>
              <a href="http://www.montu.website/">
                <LinkIcon style={{fontSize:25}} />
              </a>
              <a href="https://www.facebook.com/montuxtech/" ClassName={classes.socialLink}>
                        <FacebookIcon style={{fontSize:25}} />
              </a>
            </div>
         </div>

    </div>
  )
}

export default Footer