"use strict"

function TurkishButton() {
	const [liked, setLiked] = React.useState(false)

	if (liked) {
		return "You liked this!"
	}

	return (
		<a
			href="#"
			style={{color: "antiquewhite"}}
			onClick={() => alert("Türkçe'ye tıklandı")}
		>
			Turkish
		</a>
	)
}

const rootNode = document.getElementById("turkish-button-root")
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(TurkishButton))