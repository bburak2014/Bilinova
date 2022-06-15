import {  createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
 
 


export const todoSlice = createSlice({
	name: 'todos',
	initialState: [{
		id: nanoid(),
				YüklemeYeri: "Ankara Ostim",
				YüklemeŞehri:"Ankara",
				Mesafe:"200",
				VarışYeri: "Ereğli Limanı",
				VarışŞehri: "Kdz.Ereğli",
				Fiyat:"3200",
				AraçTipi: "Tır",
                KiralamaTipi: "Günlük",
				Tonaj: "50",
	
	},
	{
		id: nanoid(),
				YüklemeYeri: "Ankara Ostim",
				YüklemeŞehri:"Ankara",
				Mesafe:"200",
				VarışYeri: "Ereğli Limanı",
				VarışŞehri: "Kdz.Ereğli",
				Fiyat:"3200",
				AraçTipi: "Tır",
                KiralamaTipi: "Günlük",
				Tonaj: "50",
	
	}],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				YüklemeYeri: action.payload.YüklemeYeri,
				YüklemeŞehri: action.payload.YüklemeŞehri,
				Mesafe: action.payload.Mesafe,
				VarışYeri: action.payload.VarışYeri,
				VarışŞehri: action.payload.VarışŞehri,
				Fiyat: action.payload.Fiyat,
				AraçTipi: action.payload.AraçTipi,
                KiralamaTipi: action.payload.KiralamaTipi,
				Tonaj: action.payload.Tonaj,

			};

			state.push(todo);

		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		CategoryTodo: (state, action) => {
			return state.filter((todo) => todo.cardType === action.payload.cardType);
		},
	},
	 
});
 



export const { addTodo, toggleComplete, deleteTodo,CategoryTodo } = todoSlice.actions;
 
export default todoSlice.reducer;
