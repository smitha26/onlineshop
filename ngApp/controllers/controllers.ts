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
                this.signinService.save(this.product).then(() => {
                    this.products = this.signinService.list();
                    this.product = null;
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
                    // this.products = signinService.list();
                }
            }

            export class AboutController {
                public message = 'Hello from the about page!';
            }

        }
