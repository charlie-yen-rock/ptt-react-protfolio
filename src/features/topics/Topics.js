import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
export default function Topics(props) {
	const topics = useSelector(selectTopics);
	return (
		<div className="topics">
			<h1>topic</h1>
			{topics.map((topic, index) => (
				<Link to={`/${topic.name}`} key={index}>
					<div className="topic">
						<h2>
							{
								topic.name
							}
						</h2>
					</div>
				</Link>
			))}
		</div>
	);
}
