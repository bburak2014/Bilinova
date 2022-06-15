import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Paper } from "@mui/material";
import "./Header.css";
import Share from "../Share.js/Share";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import { addTodo } from "../../features/counter/todoSlice";
import { Formik } from "formik";
import {ToastContainer,Toast} from "react-bootstrap";
 import { incrementNotifications,decrementNotifications,selectNotifications } from "../../features/counter/NotificationsSlice";
import "bootstrap/dist/css/bootstrap.min.css";

import { selectCount } from "../../features/counter/counterSlice";

const pages = ["Ana Sayfa", "Yakınımda Ne Var?", "İlanlarım", "Hesabım"];
const mobileMenuId = "primary-search-account-menu-mobile";

const Header = () => {
  const count = useSelector(selectCount);
 const notification=useSelector(selectNotifications);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [anchorElShare, setAnchorElShare] = useState(null);

  const [mobileMoreAnchorElShare, setMobileMoreAnchorElShare] = useState(null);
  const [anchorElNotification, setAnchorElNotification] = useState(null);

  const [mobileMoreAnchorElNotification, setMobileMoreAnchorElNotification] = useState(null);
  const isMobileMenuOpenNotification = Boolean(mobileMoreAnchorElNotification);
  const handleProfileMenuNotification= (event) => {
    setAnchorElNotification(event.currentTarget);
  };
   const handleMobileMenuOpenNotification= (event) => {
    setMobileMoreAnchorElNotification(event.currentTarget);
   notification>0? dispatch(decrementNotifications()):<p></p>
   notification>0? setMobileMoreAnchorElNotification(true):setMobileMoreAnchorElNotification(false)

  };
  const handleMobileMenuCloseNotification = () => {
    setMobileMoreAnchorElNotification(null);
  };
  const [show, setShow] = useState(false);
 
  const isMobileMenuOpenShare = Boolean(mobileMoreAnchorElShare);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // sahare

  const handleProfileMenuOpenShare = (event) => {
    setAnchorElShare(event.currentTarget);
  };
  const handleMobileMenuOpenShare = (event) => {
    setMobileMoreAnchorElShare(event.currentTarget);
  };
  const handleMobileMenuCloseShare = () => {
    setMobileMoreAnchorElShare(null);
  };
 

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
   

  

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuOpenShare}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
         >
          <ShareIcon />
        </IconButton>
        <p className="pmobilLink">Davet Et</p>
      </MenuItem>
      <MenuItem           onClick={handleMobileMenuOpenNotification}
>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={notification} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p className="pmobilLink">Bildirim</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit"  >
          <Badge badgeContent={count} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p className="pmobilLink">Favorilerim</p>
      </MenuItem>
      <MenuItem           onClick={handleShow}
>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        >
          <AddIcon />
        </IconButton>
        <p className="pmobilLink">Ekle</p>
      </MenuItem>
    </Menu>
  );
  const renderMenuShare = (
    <Menu
      anchorEl={mobileMoreAnchorElShare}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpenShare}
      onClose={handleMobileMenuCloseShare}
    >
      <MenuItem onClick={handleProfileMenuOpenShare}>
        <Share />
      </MenuItem>
    </Menu>
  );
  const renderModal = (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ürün Ekle</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={{
            YüklemeYeri: "",
            YüklemeŞehri: "",
            Mesafe: "",
            VarışYeri: "",
            VarışŞehri: "",
            Fiyat: "",
            AraçTipi: "",
            KiralamaTipi: "",
            Tonaj: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.YüklemeYeri) {
              errors.YüklemeYeri = "Alanı Doldurun";
            }
            if (!values.YüklemeŞehri) {
              errors.YüklemeŞehri = "Alanı Doldurun";
            }
            if (!values.Mesafe) {
              errors.Mesafe = "Alanı Doldurun";
            }
            if (!values.VarışYeri) {
              errors.VarışYeri = "Alanı Doldurun";
            }
            if (!values.VarışŞehri) {
              errors.VarışŞehri = "Alanı Doldurun";
            }
            if (!values.Fiyat) {
              errors.Fiyat = "Alanı Doldurun";
            }
            if (!values.AraçTipi) {
              errors.AraçTipi = "Alanı Doldurun";
            }
            if (!values.KiralamaTipi) {
              errors.KiralamaTipi = "Alanı Doldurun";
            }
            if (!values.Tonaj) {
              errors.Tonaj = "Alanı Doldurun";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              dispatch(addTodo(values));
              dispatch(incrementNotifications());
              setShowNotification(true);
               setSubmitting(false);
               handleClose();
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Modal.Body>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Yükleme Yeri"
                    id="YüklemeYeri"
                    name="YüklemeYeri"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.YüklemeYeri}
                  />
                </Box>
                {errors.YüklemeYeri &&
                  touched.YüklemeYeri &&
                  errors.YüklemeYeri}
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Yükleme Şehri"
                    id="YüklemeŞehri"
                    name="YüklemeŞehri"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.YüklemeŞehri}
                  />
                </Box>
                {errors.YüklemeŞehri &&
                  touched.YüklemeŞehri &&
                  errors.YüklemeŞehri}

                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Mesafe"
                    id="Mesafe"
                    name="Mesafe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Mesafe}
                  />
                </Box>
                {errors.Mesafe && touched.Mesafe && errors.Mesafe}

                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="VarışYeri"
                    id="VarışYeri"
                    name="VarışYeri"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.VarışYeri}
                  />
                </Box>
                {errors.VarışYeri && touched.VarışYeri && errors.VarışYeri}

                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Varış Şehri"
                    id="VarışŞehri"
                    name="VarışŞehri"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.VarışŞehri}
                  />
                </Box>
                {errors.VarışŞehri && touched.VarışŞehri && errors.VarışŞehri}

                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Fiyat"
                    id="Fiyat"
                    name="Fiyat"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Fiyat}
                  />
                </Box>
                {errors.Fiyat && touched.Fiyat && errors.Fiyat}

                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="AraçTipi"
                    id="AraçTipi"
                    name="AraçTipi"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.AraçTipi}
                  />
                </Box>
                {errors.AraçTipi && touched.AraçTipi && errors.AraçTipi}

                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Kiralama Tipi"
                    id="KiralamaTipi"
                    name="KiralamaTipi"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.KiralamaTipi}
                  />
                </Box>
                {errors.KiralamaTipi &&
                  touched.KiralamaTipi &&
                  errors.KiralamaTipi}
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                    marginTop: 5,
                  }}
                >
                  <TextField
                    fullWidth
                    label="Tonaj"
                    id="Tonaj"
                    name="Tonaj"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Tonaj}
                  />
                </Box>
                {errors.Tonaj && touched.Tonaj && errors.Tonaj}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                 >
                  Kaydet
                </Button>
              </Modal.Footer>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
  const renderNotification = (
      <>
          
       <Menu
      anchorEl={mobileMoreAnchorElNotification}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpenNotification}
      onClose={handleMobileMenuCloseNotification}
    >
 
      <MenuItem onClick={handleProfileMenuNotification}>
      
       <p>Ürün eklendi</p>
      
        
      </MenuItem>
      
 
     
    </Menu>
      </>
    );
    
 const ToastNotification=(
  <ToastContainer  bg="Success">
   
  <Toast  onClose={() => setShowNotification(false)} show={showNotification} delay={3000} autohide >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
      <strong className="me-auto">İşlem Başarılı</strong>
           </Toast.Header>
          <Toast.Body>Bir Ürün Eklendi</Toast.Body>
        </Toast>
</ToastContainer> 
 )
 
 
 
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Paper
              variant="outlined"
              sx={{ display: { xs: "none", lg: "flex" }, mr: 1 }}
            >
              <img src="yukgetirlogo.svg" alt="logo" width={"118px"} />
            </Paper>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", lg: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", lg: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      className="pmobilLink"
                      style={{ padding: "7px" }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Ara…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Menu>
            </Box>
            <Search sx={{ display: { xs: "none", lg: "flex" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Ara…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Paper
              variant="outlined"
              sx={{ display: { xs: "flex", lg: "none" }, mr: 1 }}
            >
              <img src="yukgetirlogo.svg" alt="logo" width={"118px"} />
            </Paper>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", lg: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={handleShow}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpenShare}
                color="inherit"
              >
                <ShareIcon />
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleMobileMenuOpenNotification}
              >
                <Badge badgeContent={notification} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                >
                <Badge badgeContent={count} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenuShare}
      {renderModal}
      {renderNotification}
      {ToastNotification}
    </>
  );
};
export default Header;
