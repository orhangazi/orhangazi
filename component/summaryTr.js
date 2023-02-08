"use strict"

function summaryTr() {
	const [liked, setLiked] = React.useState(false)

	if (liked) {
		return "You liked this!"
	}

	return (
		<a href="#" onClick={() => alert("Türkçe'ye tıklandı")}>
			Türkçe özet
		</a>
	)
}

const rootNode = document.getElementById("about-me-root")
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(summaryTr))
