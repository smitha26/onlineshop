import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';
let router = express.Router();

// app.get('/cart/add/:id', function(request, response){
// console.log('Item added by id: ' + request.params.id);
// var objectId = request.params.id;

router.get ('/', function (request, response) {
    response.json ({
        message: 'This is a test route for the cart.'
    });
});

export default router;

// db.collection('products').findOne (
//     {
//         name: objectId
//     },
//     {},
//
//     function(error, resultList){
//         if (error) {
//             throw error;
//             response.redirect('/error');
//         }
//         //check if we have a shopping cart in the session
//         var cart = request.session.cart;
//         //if no cart exsist, create new cart
//         if (!cart){
//             cart = {
//                 total:0,
//                 itemList: []
//             };
//             request.session.cart = cart;
//         }
//
//         //Grab the item from the result list
//         var item = resultList;
// }
