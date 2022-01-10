import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTopics } from "../topics/topicsSlice";
import Select from "react-select";
export function AddArticle() {
	const [category, setCategory] = useState();
	const [author, setAuthor] = useState();
	const [title, setTitle] = useState();
	const [time, setTime] = useState();
	const [content, setContent] = useState();
	const topics = useSelector(selectTopics);
	const topicOpt = topics.map((topic) => ({
		value: topic.name,
		label: topic.name,
	}));

	console.log(topicOpt);
	return (
		<div>
			<label htmlFor="category">文章類型</label>
			<Select
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
			<label htmlFor="time">發布時間</label>
			<input
				id="time"
				type="time"
				onChange={(e) =>
					setTime(e.currentTarget.value)
				}
			/>
			<label htmlFor="content">內文</label>
			<input
				id="content"
				onChange={(e) =>
					setContent(
						e.currentTarget
							.value
					)
				}
			/>
		</div>
	);
}
