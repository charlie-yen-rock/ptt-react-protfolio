import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAtticles } from "./articlesSlice";
export default function Articles(props) {
	const { topicName } = useParams(); //useParams會讀取App,js route的path="/:topicName"，該topicName url值是多少並以obj回傳
	const articles = useSelector(selectAtticles);
	return (
		<div className="bg">
			<h1>articles</h1>
			<Link to="/addArticle">
				<h2>新增文章</h2>
			</Link>

			{articles[topicName].map((article, index) => (
				<Link
					to={`/${topicName}/${article.id}`}
					key={index}
				>
					<div className="article">
						<h2>
							{
								article.title
							}
						</h2>
						<p>
							{
								article.time
							}
						</p>
						<p>
							{
								article.author
							}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
