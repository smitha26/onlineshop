import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';
let router = express.Router();

// app.get('/cart/add/:id', function(request, response){
// console.log('Item added by id: ' + request.params.id);
// var objectId = request.params.id;

// router.get ('/', function (request, response) {
//     response.json ({
//         message: 'This is a test route for the cart.'
//     });
// });

router.post ('/', function (request, response) {
    let cart = request.session.cart;
    let product = request.body;
    let objectId = request.params.id;
    console.log(request.body);

        if (!cart) {
            cart= {
                total:0,
                itemList:[]
            };
            //Save the cart to the session
            request.session.cart = cart;
        }
        //Add the product to the cart session
        cart.itemList.push (product);
        //Add price to total
        cart.total = cart.total + product.price;
        console.log('This is server cart session: ', cart);
    response.json ({
        product: request.body,
        message: 'This is a test route for the cart.'
    });
    // response.redirect('/cart');
});

router.get('/', function(request, response){
// - Get the cart out of the session.
// - Grab the cart items.
// - Send back those items as a response in json format.
    let i = 0;
    let name;
    let price;
    let cart = request.session.cart;
    let items = cart.itemList;
    let total = cart.total;
    let itemName = cart.itemList[0].name;

    console.log("this is items ", itemName);
    console.log("this is items ", cart);
    console.log("this is total ", total);
    console.log("this is itemlist_len" , cart.itemList.length);
    // let name0 = cart.itemList[0].name;
    // let price0 = cart.itemList[0].price;

    response.json ([cart]);

    // console.log("this is name and price  ", name0, price0);
    //  cart.itemList.push({
    //     name: 'Cart total',
    //     price: cart.total,
    //      total: cart.total
    //  });
    //  console.log("this is itemlist" , cart.itemList);
    // response.json(cart.itemList);
    //  response.json(cart);

    // console.log("this is items ", total);
    // response.json ({cart.itemList});
    // response.json({
    //     data: {
    //         redirect: 'error',
    //         message: 'Username and Login was not correct.'
    //     }
    // });


    // response.render('cart.html', {cart:cart});
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
