import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import { selectArticles } from "../articles/articlesSlice";
export default function Topics(props) {
	const topics = useSelector(selectTopics);
	const articles = useSelector(selectArticles);
	return (
		<div className="topics">
			<h1>熱門看板</h1>
			{topics.map((topic, index) => (
				<Link to={`/${topic.name}`} key={index}>
					<div className="topic">
						<p>{topic.name}</p>
						<p>
							{
								articles[
									topic
										.name
								]
									.length
							}
						</p>
						<p>
							{
								articles[
									topic
										.name
								][
									articles[
										topic
											.name
									]
										.length -
										1
								]
									.title
							}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
