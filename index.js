const fetch = require("node-fetch")
const express = require("express")
const app = express()

PORT = process.env.PORT || 8080

app.use(express.static(__dirname+"/public"))

app.set('view engine','ejs')

app.get("/", (req,res) => {
	res.render("home",{content : "blank---"})
})

app.get("/:name", (req,res) => {
	res.render("home",{content : req.params.name})
})


app.get("/fetch/:name",async(req,res) => {

	console.log(req.params.name)
	console.log("just checking if this work")
	const html = await fetch(`https://www.youtube.com/results?search_query=${req.params.name}`)
	// const html = await fetch('https://www.youtube.com/results?search_query=rehna+tu')
	// console.log(linki)
	const link = await  html.text()

	// // console.log("this is link : ",link)
	// var sam = "<!DOCTYPE html><script>Hello world</script><script class='check'>kollalo keli</script>"
	// const dom = await new JSDOM(sam,{resources: "usable"})
	// console.log("scrapped info : ",dom.window.document.querySelector("script").textContent)

	
	res.json({"page" : link})
	// res.send("sed => des")
})


app.listen(PORT, () => {
	console.log("running on port 8080")
})