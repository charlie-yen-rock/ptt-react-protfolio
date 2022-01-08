import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
	name: "topics",
	initialState: {
		topics: [
			{
				id: 1,
				name: "Gossiping",
			},

			{
				id: 2,
				name: "Stock",
			},
		],
		extraTopics: [],
	},
	reducers: {},
});

export const selectTopics = (state) => state.topics.topics; //第1個topics是store.js中configureStore設定的，需搭配react-redux的useSelector hook使用
//export const {some Reducer here}=topicsSlice.actions;//需搭配react-redux的useDispatch使用
export default topicsSlice.reducer; //reducer沒加s,用在store.js的configureStore
