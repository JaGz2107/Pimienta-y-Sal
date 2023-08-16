let arrPlatos = require('../BaseDatos/platos')
const about = {
    title: "Sabores que Enamoran",
    descripcion1: "Buena Atencion Al Cliente",
    descripcion2: "Un Sabor Incomparable",
    img: "principal.jpg"
}

const mainControlller = {
    index : (req, res) => {
        res.render('index', { title: "Platos", data: arrPlatos, about})
    },
    detail: (req, res) => {
        const buscarPlato = arrPlatos.find((plato) => plato.id === req.params.id)

        res.render('detalleMenu', {plato: buscarPlato})
    }
}

module.exports = mainControlller;