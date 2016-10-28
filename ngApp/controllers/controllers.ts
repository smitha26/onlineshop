namespace onlineshop.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public products;
        public product;

        public save() {
            this.productService.save(this.product).then(() => {
                //this.todolisting.push(this.todolist);
                this.products = this.productService.list();
                this.product = null;
            });
        }
        public remove(id) {
            this.productService.remove(id).then(() => {
                this.products = this.productService.list(); // redisplay list
            }).catch((err) => {
                console.error(err);
            });
        }


        constructor(private productService:onlineshop.Services.ProductService,
            private $state:ng.ui.IStateService,
            private $stateParams:ng.ui.IStateParamsService)
            {
                if (window.session) {
                    this.user = window.session.user;
                }
                else {
                    this.user = {}
                }

                this.products = productService.list();
                // let productId = $stateParams['id'];
                // console.log(productId);
                // this.product = productService.get(productId);
                // console.log(this.product);
            }
        }

        export class SignupController {
            public message = 'Hello from the signup page!';
            public products;
            public product;

            public save() {
                // var result = ;
                // console.log ('result: ', this.signinService.save (this.product).$promise.then () {
                //
                // });
                // console.log ('test: ', this.signinService.save (this.product));
                this.signinService.save(this.product).then(() => {
                    // this.products = this.signinService.list();
                    // this.product = null;
                    this.$state.go ('aftersignuplogin');
                });
            }
            public remove(id) {
                this.signinService.remove(id).then(() => {
                    this.products = this.signinService.list(); // redisplay list
                }).catch((err) => {
                    console.error(err);
                });
            }

            constructor(private signinService:onlineshop.Services.SigninService,
                private $state:ng.ui.IStateService,
                private $stateParams:ng.ui.IStateParamsService)
                {

                    //  let productId = $stateParams['id'];
                    // // console.log(productId);
                    //     this.product = signinService.get(productId);
                    // // console.log(this.product);
                     this.products = signinService.list();
                }
            }


            //Controller for User Login
            export class LoginController {
                public message = 'Hello from the login page!';
                public products;
                public product;

                public save() {
                    this.loginService.save(this.product).then((response) => {
                        // this.products = this.loginService.list();
                        // this.product = null;
                        // this.$state.go ('profile');

                        // In the response pull out the data that has the redirectTo route.
                        console.log ('response: ', response);
                        console.log ('response data: ', response.data);

                        // Create the app data object.
                        if (window.session == null) {
                            window.session = {};
                        }
                        window.session.user = response.data.user;
                        console.log ('app data: ', window.session);

                        this.$state.go (response.data.redirect);

                        // this.$state.go (data.redirect);
                    });
                }

                constructor(private loginService:onlineshop.Services.LoginService,
                    private $state:ng.ui.IStateService,
                    private $stateParams:ng.ui.IStateParamsService)
                    {
                        //  this.products = loginService.list();
                    }
                }

        //Controller for Cart
        export class CartController {
            public newitem;
            public items;

            public addItemtoCart() {
                console.log ('- Adding cart to item.');

                let newitem = {
                    name: 'Blue Dress',
                    description: 'Some description',
                    price: 200
                };

                this.cartService.save(newitem).then(() => {
                    // this.items.push(this.newitem);
                    // this.newitem = null;
                });
            }

            constructor (
                private cartService:onlineshop.Services.CartService,
                private $state:ng.ui.IStateService,
                private $stateParams:ng.ui.IStateParamsService
            ) {

                // Grab the items in the cart.
                this.items = cartService.list();
            }
        }

            //Controller for About Page
            export class AboutController {
                public message = 'Hello from the about page!';
            }

        }
