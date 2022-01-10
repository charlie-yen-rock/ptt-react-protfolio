//import "../App.css";
import Topics from "../features/topics/Topics";
import Articles from "../features/articles/Articles";
import { ArticleContent } from "../features/articles/ArticleContent";
import { AddArticle } from "../features/articles/AddArticle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">
							ptt
						</Link>
					</li>
					<li>
						<Link to="/contact">
							聯絡資訊
						</Link>
					</li>
				</ul>

				<Routes>
					<Route
						path="/"
						element={<Topics />}
					/>
					<Route
						path="/contact"
						element={
							<Contact />
						}
					/>
					<Route
						path="/addArticle"
						element={
							<AddArticle />
						}
					/>
					<Route
						path="/:topicName"
						element={
							<Articles />
						}
					/>
					<Route
						path="/:topicName/:id"
						element={
							<ArticleContent />
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

function Contact() {
	return (
		<div>
			<h1>這是聯絡資訊</h1>
		</div>
	);
}
export default App;
