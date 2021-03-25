console.log("hey")

const name = document.getElementById('name')
async function hello(name){
	const test = await fetch(`/fetch/:${name}`)
	// console.log(test)
	var result = await test.json()
	// console.log(result["pidico"])

	var dom = new DOMParser()
	var doc = dom.parseFromString(result["page"], 'text/html')
	var jam = doc.querySelectorAll('script')[32]['text']
	// console.log(jam.slice(20,-1))
	var id = JSON.parse(jam.slice(20,-1))
	console.log(id['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']['contents'][0]['itemSectionRenderer']['contents'][0]['videoRenderer']['videoId'])
	// await body.appendChild(doc.querySelectorAll('script')[32])

	// console.log(ytInitialData)
	return await id['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']['contents'][0]['itemSectionRenderer']['contents'][0]['videoRenderer']['videoId']
}

async function sample(){var id_vid = await hello(name.innerHTML)

const id_display = document.createElement('div')
id_display.setAttribute("id", "tag_display")

id_display.innerHTML = id_vid

const body = document.getElementsByTagName("BODY")[0].appendChild(id_display)}

sample()