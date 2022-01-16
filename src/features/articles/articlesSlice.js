import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
	name: "articles",
	initialState: {
		articles: {
			Gossiping: [
				{
					id: 1,
					author: "LOL",
					title: "辦尾牙或領3000，你選哪一個?",
					time: "1/8 14:03:20 2022",
					content: `安安大家豪我城武辣最近公司在投票要不要辦尾牙如果選擇不要辦尾牙的話\n，每個員工折現三千進戶頭我是選要拿三千啦，\n不用去跟老闆吃飯還有錢拿94爽大家會選哪個有沒有八卦`,
					replys: [
						{
							id: 1,
							author: "AllenHuang",
							time: "1/8 14:03:20 2022",
							content: "當然是拿三千",
						},
						{
							id: 2,
							author: "dan5120",
							time: "1/8 14:03:20 2022",
							content: "拿3000阿  浪費下班時間還要敬酒",
						},
					],
				},
				{
					id: 2,
					author: "dkl1027",
					title: "[問卦] 籃球項目怎不列在冬奧？",
					time: "1/8 14:03:41 2022",
					content: "籃球這項運動是奈史密斯基於冬天天寒發明的一項運動，\n以彌補冬天很多運動都無法進行的另一項競技遊戲，綜觀全世界的職業籃球聯盟，也都是冬季開打，\n一直打到春季末期，照理說是冬天的運動，\n怎麼沒把這項運動在冬奧比？大家覺得在冬奧比是不是更適合？",
					replys: [
						{
							id: 1,
							author: "AllenHuang",
							time: "1/8 14:03:41 2022",
							content: "隨便，沒在看。",
						},
						{
							id: 2,
							author: "bryan7114",
							time: "1/8 14:03:41 2022",
							content: "因為職業賽冬天有例賽 沒辦法參與",
						},
					],
				},
			],
			Stock: [
				{
					id: 1,
					author: "nisi0773",
					title: "[新聞] 台中銀犀利 年終衝九個月",
					time: "1/8 02:00:49 2022",
					content: "原文內容：經濟日報 記者夏淑賢/台北報導台中銀行（2812）昨（6）日常董會通過年終獎金方案，\n在獲利創新高與順利完成現金資等鼓舞下，常董會拍板年終獎金平均六個月，\n與獲利同創歷來最佳水準，業績好的員工更可超過九個月。另考績升等加薪之外，\n還能平均加薪接近4%。",
					replys: [
						{
							id: 1,
							author: "cuteSquirrel",
							time: "1/8 02:00:49 2022",
							content: "最強總部概念",
						},
						{
							id: 2,
							author: "hyscout",
							time: "1/8 02:00:49 2022",
							content: "阿明連金融業都輸",
						},
					],
				},
				{
					id: 2,
					author: "mabell",
					title: "[新聞] 【美股盤後】就業數據令人失望 收黑",
					time: "1/8 09:10:20 2022",
					content: "美國公布12月就業數據令人失望，引發賣壓，\n美股今天連續第3天下跌，週線收黑。\n道瓊工業指數終場下跌4.81點，或0.01%，收在36231.66點。標準普爾500指數下跌19.02點，或0.41%，收在4677.03點。\n以科技股為主的那斯達克指數下跌144.97點，或0.96%，收在14935.90點。費城半導體指數下跌112.711點，或2.88%，收在3796.324點。",
					replys: [
						{
							id: 1,
							author: "lpmybig",
							time: "1/8 09:10:20 2022",
							content: "豪 歐印宏達電 負債子孫墊",
						},
						{
							id: 2,
							author: "mabell4",
							time: "1/8 09:10:20 2022",
							content: "崩盤歐印台積電 睏霸數錢到處現",
						},
					],
				},
			],
		},
		extraArticles: {},
	},
	reducers: {
		addArticle(state, action) {
			state["articles"][action.payload.category].push(
				action.payload.addContent
			);
		},
		addReply(state, action) {
			state["articles"][action.payload.category][
				action.payload.contentId
			].replys.push(action.payload.newReply);
		},
	},
});

export const selectArticles = (state) => state.articles.articles;
export const { addArticle, addReply } = articlesSlice.actions; //需搭配react-redux的useDispatch使用
export default articlesSlice.reducer;
