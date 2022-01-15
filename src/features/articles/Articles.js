import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectArticles } from "./articlesSlice";
export default function Articles(props) {
	const { topicName } = useParams(); //useParams會讀取App,js route的path="/:topicName"，該topicName url值是多少並以obj回傳
	const articles = useSelector(selectArticles);

	return (
		<div className="bg">
			<h1>{topicName}</h1>
			<Link to="/addArticle">
				<button>新增文章</button>
			</Link>
			{/*為使文章id最後者render在最前面，在此創造articles[topicName]的shallow copy，避免原物件被改變，並用該copy.reverse來依序render，故呈現如下
			[...articles[topicName]].reverse().map*/}
			{[...articles[topicName]]
				.reverse()
				.map((article, index) => (
					<Link
						to={`/${topicName}/${article.id}`}
						key={index}
					>
						<div className="article">
							<p>
								{
									article.title
								}
							</p>
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
