const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { id, nombre = 'no name', apikey, page, limite } = req.query;
    res.json({
        msg: "get api - controlador",
        id,
        nombre,
        apikey,
        page,
        limite
    });
};

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: "post api - controlador",
        nombre,
        edad
    });
};

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.json({
        ok: true,
        msg: "put api - controlador",
        id
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: "delete api - controlador"
    });
};

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: "patch api - controlador"
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
};