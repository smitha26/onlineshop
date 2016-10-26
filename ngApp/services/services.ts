namespace onlineshop.Services {
    export class ProductService {
        private ProductResource;

        public list() {
            return this.ProductResource.query();
        }
        public save(newitem){
            return this.ProductResource.save(newitem).$promise;
        }
        public remove(productId) {
          return this.ProductResource.remove({id: productId}).$promise;
        }
        public get(productId) {
          return this.ProductResource.get({id: productId});
   }
        constructor($resource: ng.resource.IResourceService) {
            this.ProductResource = $resource('/api/shopproducts/:id');
        }
    }
    angular.module('onlineshop').service('productService', ProductService);

    export class SigninService {
        private SigninResource;

        public list() {
            return this.SigninResource.query();
        }
        public save(product){
           return this.SigninResource.save(product);
         }
         public get(productId) {
      return this.SigninResource.get({id: productId});
    }
    public remove(productId) {
      return this.SigninResource.remove({id: productId}).$promise;
    }
        constructor($resource: ng.resource.IResourceService) {
            this.SigninResource = $resource('/api/signup/:id');
        }
    }
    angular.module('onlineshop').service('signinService',SigninService);


    }
