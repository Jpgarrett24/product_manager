const productController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post('/api/products', productController.create);
    app.get('/api/products', productController.getAll);
    app.get('/api/products/:_id', productController.getOne);
    app.delete('/api/products/:_id', productController.delete);
    app.put('/api/products/:_id', productController.update);
};