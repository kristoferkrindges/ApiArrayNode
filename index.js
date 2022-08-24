// Configuração inicial
const express = require("express");
const app = express();

// Ler o Json / Middlewares
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

// Rotas ou endpoint
app.post("/product", async (req, res) => {
	//req.body
	const { id, name, price } = req.body;

	if (!name) {
		res.status(422);
	}

	const product = {
		id,
		name,
		price,
	};

	try {
		//await
		res.status(201).json({ message: "Produto inserido com sucesso!" });
	} catch {
		res.status(500).json({ error: error });
	}
});

app.get("/", (req, res) => {
	res.json({ message: "Oi Express!" });
	// console.log("Foi!");
});

// Devolver porta
app.listen(3000);
