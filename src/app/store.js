/*
redux & redux toolkit & react-redux 差異說明:
redux與redux toolkit差在redux toolkit寫法更精簡，如createSlice(),configureStore(),是本專案所使用的。
另react-redux可透過<Provider>(indes.js中)、useDispatch；useSelector(conponent中)方便使用store中的資料。
*/

import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import articlesReducer from "../features/articles/articlesSlice";
export const store = configureStore({
	reducer: {
		topics: topicsReducer,
		articles: articlesReducer,
	},
});
