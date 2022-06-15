import React from "react";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from "@mui/material";
function Footer() {
  return (
    <>
      <div className="footer-basic">
      <img src="yukgetirlogo.svg" width={100} alt="logo" />
        <footer>
          <div className="social">
          <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <InstagramIcon />
          
        </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <EmailIcon />
          
        </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <TwitterIcon />
          
        </IconButton>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FacebookIcon />
          
        </IconButton>
             
          </div>
          <ul className="list-inline" >
            <li className="list-inline-item">
              <a href="/">Ana Sayfa</a>
            </li>
            <li className="list-inline-item">
              <a href="/">Hizmetler</a>
            </li>
            <li className="list-inline-item">
              <a href="/">Hakkımızda</a>
            </li>
             
            <li className="list-inline-item">
              <a href="/">Gizlilik Politikası</a>
            </li>
          </ul>
          <p className="copyright">YükGetir © 2018</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
