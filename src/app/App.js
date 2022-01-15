import "../App.css";
import Topics from "../features/topics/Topics";
import Articles from "../features/articles/Articles";
import { ArticleContent } from "../features/articles/ArticleContent";
import { AddArticle } from "../features/articles/AddArticle";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<div className="nav">
					<ul>
						<li id="logo">
							<Link to="/">
								批踢踢實業坊React範本
							</Link>
						</li>
						<li>
							<Link to="/contact">
								聯絡資訊
							</Link>
						</li>
					</ul>
				</div>
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
		<div className="contact">
			<p>這是聯絡資訊</p>
		</div>
	);
}
export default App;
