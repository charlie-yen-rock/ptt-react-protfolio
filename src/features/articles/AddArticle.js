import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTopics } from "../topics/topicsSlice";
import Select from "react-select";
import { addArticle, selectArticles } from "./articlesSlice";
import { useNavigate } from "react-router-dom";
export function AddArticle() {
	const [category, setCategory] = useState();
	const [author, setAuthor] = useState();
	const [title, setTitle] = useState();
	const [content, setContent] = useState();
	const topics = useSelector(selectTopics);
	const topicOpt = topics.map((topic) => ({
		value: topic.name,
		label: topic.name,
	}));
	const articles = useSelector(selectArticles);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const handleClick = () => {
		if (category && author && title && content) {
			let id =
				Object.keys(articles[category]).length +
				1;
			let addContent = {
				id: id,
				author: author,
				title: title,
				time: currenttime(),
				content: content,
				replys: [],
			};
			dispatch(
				addArticle({
					category: category,
					addContent: addContent,
				})
			);
			navigate(`/${category}`);
			resetState();
		} else {
			alert("請輸入所有欄位");
		}
	};
	const currenttime = () => {
		const currentdate = new Date();
		const dateTime =
			currentdate.getMonth() +
			1 +
			"/" +
			currentdate.getDate() +
			" " +
			currentdate.getHours() +
			":" +
			currentdate.getMinutes() +
			":" +
			currentdate.getSeconds() +
			" " +
			currentdate.getFullYear();
		return dateTime;
	};

	const resetState = () => {
		setCategory();
		setAuthor();
		setTitle();
		setContent();
	};
	const customStyles = {
		container: (provided, state) => ({
			///最外框
			...provided,
		}),

		control: (provided, state) => ({
			//主體
			...provided,
			backgroundColor: "#bbb",
			color: "black",
		}),
		valueContainer: (provided, state) => ({
			//文字欄主體
			...provided,
		}),

		menu: (provided, state) => ({
			//下拉選單parent
			...provided,
			backgroundColor: "#bbb",
		}),
		placeholder: (provided, state) => ({
			//輸入前
			...provided,
			backgroundColor: "#bbb",
			color: "black",
		}),
		input: (provided, state) => ({
			...provided,
			//輸入
		}),
		menuList: (provided, state) => ({
			...provided,
			//下拉選單
			backgroundColor: "#bbb",
			color: "black",
		}),
		singleValue: (provided, state) => ({
			...provided,
			//選擇結果
		}),
		noOptionsMessage: (provided, state) => ({
			...provided,
			//無選項結果
			backgroundColor: "#bbb",
			color: "black",
		}),
		indicatorsContainer: (provided, state) => ({
			...provided,
			//下拉箭頭
			backgroundColor: "#bbb",
			color: "black",
		}),
	};
	return (
		<div className="form">
			<label htmlFor="category">文章類型</label>
			<Select
				className="selectContainer"
				classNamePrefix="selectContainer"
				styles={customStyles}
				onChange={(category) =>
					setCategory(category.value)
				}
				options={topicOpt}
				id="category"
			/>

			<label htmlFor="author">使用者名稱</label>
			<input
				id="author"
				onChange={(e) =>
					setAuthor(
						e.currentTarget
							.value
					)
				}
			/>
			<label htmlFor="title">標題</label>
			<input
				id="title"
				onChange={(e) =>
					setTitle(
						e.currentTarget
							.value
					)
				}
			/>

			<label htmlFor="content">內文</label>

			<textarea
				rows="15"
				cols="50"
				id="content"
				onChange={(e) =>
					setContent(
						e.currentTarget
							.value
					)
				}
			>
				Enter details here...
			</textarea>
			<button onClick={handleClick}>送出</button>
		</div>
	);
}
