import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAtticles } from "./articlesSlice";

export function ArticleContent(props) {
	const { topicName, id } = useParams();
	const articles = useSelector(selectAtticles);
	const content = articles[topicName][id - 1];
	return (
		<div className="article">
			<div className="title">
				<div className="titleBar">
					<p>作者</p>
					<p>{content.author}</p>
				</div>
				<div className="titleBar">
					<p>標題</p>
					<p>{content.title}</p>
				</div>
				<div className="titleBar">
					<p>時間</p>
					<p>{content.time}</p>
				</div>
			</div>
			<div className="content">
				<p>{content.content}</p>
			</div>
			<div className="replys">
				{content.replys.map((reply, index) => (
					<div
						className="reply"
						key={index}
					>
						<p>
							{
								reply.author
							}
						</p>
						<p>
							{
								reply.content
							}
						</p>
						<p>{reply.time}</p>
					</div>
				))}
			</div>
		</div>
	);
}
