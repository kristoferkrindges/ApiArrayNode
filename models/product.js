const router = require("express").Router();
// Rotas ou endpoint
router.post("/product", async (req, res) => {
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

router.get("/", (req, res) => {
	res.json({ message: "Oi Express!" });
	// console.log("Foi!");
});
