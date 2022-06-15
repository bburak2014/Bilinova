import {useEffect} from "react";
import Showcases from "../Showcases/Showcases";
import CurrentListings from "../CurrentListings/CurrentListings";
import { Typography, Grid } from "@mui/material";
import "./CartList.css";
import { useSelector, useDispatch } from "react-redux";


function CartList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  
  return (
    <>
      <div className="CartlistBody">
        <div className="cartDiv">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <div className="home-title">
                  <span>Vitrindekiler</span>{" "}
                </div>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Showcases />
            </Grid>
          </Grid>
        </div>
      </div>
       
 
         { todos?
          todos.map((todo)=>(
            <CurrentListings
            key={todo.id}
                    id={todo.id}
                    YüklemeYeri={todo.YüklemeYeri}
                    YüklemeŞehri={todo.YüklemeŞehri}
                    Mesafe={todo.Mesafe}
                    VarışYeri={todo.VarışYeri}
                    VarışŞehri={todo.VarışŞehri}
                    Fiyat={todo.Fiyat}
                    AraçTipi={todo.AraçTipi}
                    KiralamaTipi={todo.KiralamaTipi}
                    Tonaj={todo.Tonaj}
             />

          )):null
         }
          
                
       
    </>
  );
}

export default CartList;
