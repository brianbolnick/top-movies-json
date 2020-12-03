const jsonServer = require("json-server")
const path = require("path")
const serveStatic = require("serve-static")

const server = jsonServer.create()

//Persistant database stored in db.json
const router = jsonServer.router('db.json')

//Including in case we need to add static assets?
server.use(
	serveStatic(path.join(__dirname, "public"), {
		maxAge: "1d"
	})
)

server.use((req, res, next) => {
	const { delay } = req.query

	if (delay) {
		setTimeout(() => {
			next()
		}, Number(delay))
	} else {
		next()
	}
})

server.use(jsonServer.defaults())

server.use(router)

server.listen(2020)
console.log(`Server started on port 2020`)
