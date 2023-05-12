const productController = require('../controllers/productController');

const router = require('express').Router();

router.get('/all', productController.getAllProducts);

router.get('/:id', productController.getOneProduct);

router.post('/add', productController.addProduct);

router.post('/update', productController.updateProduct);

router.post('/delete', productController.deleteProduct);

module.exports = router;