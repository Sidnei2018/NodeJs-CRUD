server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});