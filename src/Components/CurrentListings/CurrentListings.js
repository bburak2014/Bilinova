import {useState} from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import PaymentIcon from "@mui/icons-material/Payment";
import { Grid, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../Showcases/Showcases.css";
import {   useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  
   
} from '../../features/counter/counterSlice';
function CurrentListings({
  YüklemeYeri,
  YüklemeŞehri,
  Mesafe,
  VarışYeri,
  VarışŞehri,
  Fiyat,
  AraçTipi,
  KiralamaTipi,
  Tonaj,
}) {
   const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);
  const changeStyle = () => {
   setActive(!isActive);
   isActive?dispatch(decrement()):dispatch(increment())

 };
 
  return (
    <div className="CartlistBodyAdd">
      <Card className="cartDivAdd">
        <CardContent>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>

        <CardActions>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} xl={4}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  {" "}
                  <Box>
                    <div className="CartCity">{YüklemeŞehri}</div>{" "}
                    <div className="CartPort">{YüklemeYeri}</div>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Box>
                    <div className="CartMile">{Mesafe}</div>{" "}
                    <div>
                      <ArrowForwardIcon />
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  {" "}
                  <Box>
                    <div className="CartCity">{VarışŞehri}</div>{" "}
                    <div className="CartPort">{VarışYeri}</div>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={4} xl={4}>
              <div className="updateDate">
                Yükleme Tarihi: 22.03.2022-12.04.2022
              </div>
            </Grid>
            <Grid item xs={6} md={4} xl={4}>
              <div className="CardPrice">{Fiyat}</div>
              <div className="CardKDV">+KDV</div>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <div className="carFeature">
                <ArrowForwardIcon />
                Araç Tipi :{AraçTipi}
              </div>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <div className="carFeature3">
                <ArrowForwardIcon />
                Kiralama Tipi : {KiralamaTipi}
              </div>
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <div className="carFeature2">
                <ArrowForwardIcon />
                Tonaj :{Tonaj} TON
              </div>
            </Grid>
          </Grid>
        </CardActions>
        <CardActions>
          <Button
            style={{ textTransform: "none" }}
            variant="outlined"
            startIcon={<PaymentIcon />}
          >
            Peşin-Yükleyici Ödemeli
          </Button>
          <Button
            style={{ textTransform: "none" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Detaylar
          </Button>
          <IconButton onClick={changeStyle} aria-label="add to favorites">
          <FavoriteIcon  className={
                  isActive
                    ? "activeF"
                    : "NoactiveF"
                }/>
        </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default CurrentListings;
