import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';
let router = express.Router();


router.post('/', function(req, res) {
    console.log('In Login Post')
    console.log('form data: ',req.body);
    //var cursor =
    database.db.collection('users').findOne(
        {
            username: req.body.username,
            password: req.body.password
            // password: request.body.password
        },
        function(error, dbResult){
            console.log('database result:', dbResult);

            // Check for an error or no dbResult.
            if (error != null || dbResult == null) {
                // Send back json data that has the route to redirect to.
                res.json({
                    data: {
                        redirect: 'error',
                        message: 'Username and Login was not correct.'
                    }
                });
                return;
            }

            // Send back the user data.
            res.json ({
                data: {
                    redirect: 'profile',
                    user: dbResult
                }
            });


            // if (!user){
            //     res.redirect('/error');
            // }else
            // {
            //     req.session.user = user;
            //     console.log('session: ', req.session);
            //     res.json({
            //         redirect:'profile'
            //     });
            //     // if (user.admin) {
            //     //     res.redirect ('/admin');
            //     // }else {
            //     //     res.redirect('/profile')
            //     // }
            //     // console.log('user: ', user);
            // }
        });
    });



    export default router;
