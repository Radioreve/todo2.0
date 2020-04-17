function getItem(itemId) {
	const itemAsString = window.localStorage.getItem(itemId)
    const itemAsJavascriptObjet = JSON.parse(itemAsString)
	return itemAsJavascriptObjet
}

function setItem(itemId, item) {
	const itemAsString = JSON.stringify(item)
	window.localStorage.setItem(item.id, itemAsString)
}