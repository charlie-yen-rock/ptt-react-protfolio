import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectArticles, addReply } from "./articlesSlice";
import { useState } from "react";

export function ArticleContent(props) {
	const [replyConent, setReplyConent] = useState();
	const [replyAuthor, setReplyAuthor] = useState();
	const dispatch = useDispatch();
	const { topicName, id } = useParams();
	const articles = useSelector(selectArticles);
	const content = articles[topicName][id - 1];

	const handleClick = () => {
		if (replyConent && replyAuthor) {
			let replyId = content.replys.length;
			let newReply = {
				id: replyId + 1,
				author: replyAuthor,
				time: currenttime(),
				content: replyConent,
			};
			dispatch(
				addReply({
					category: topicName,
					contentId: id - 1,
					newReply: newReply,
				})
			);
			setReplyConent();
			setReplyAuthor();
			//forEach不會直接mutate array中 primitives參數，但透過object 的key(input.value)指定似乎可達成mutate?
			document.querySelectorAll("input").forEach(
				(input) => (input.value = "")
			);
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
	return (
		<div className="articleContent">
			<div className="title">
				<div className="titleBar">
					<p className="head">作者</p>
					<p>{content.author}</p>
				</div>
				<div className="titleBar">
					<p className="head">標題</p>
					<p>{content.title}</p>
				</div>
				<div className="titleBar">
					<p className="head">時間</p>
					<p>{content.time}</p>
				</div>
			</div>
			<div className="content">
				{/*\r為回車字元，\n為換行字元，由於不同作業系統都可能用到，故regex寫法如下*/}
				{content.content
					.split(/\r\n|\n|\r/gm)
					.map((line, index) => (
						<p key={index}>
							{line}
						</p>
					))}
			</div>
			<div className="replys">
				<p>__</p>
				{content.replys.map((reply, index) => (
					<div
						className="reply"
						key={index}
					>
						<p className="replyAuthor">
							{
								reply.author
							}
							:
						</p>
						<p className="replyContent">
							{
								reply.content
							}
						</p>
						<p className="replyTime">
							{
								reply.time
							}
						</p>
					</div>
				))}
				<di className="addReply">
					<input
						placeholder="使用者名稱"
						onChange={(e) => {
							setReplyAuthor(
								e
									.target
									.value
							);
						}}
					/>

					<input
						placeholder="回覆內容"
						onChange={(e) => {
							setReplyConent(
								e
									.target
									.value
							);
						}}
					/>
					<button onClick={handleClick}>
						送出
					</button>
				</di>
			</div>
		</div>
	);
}
