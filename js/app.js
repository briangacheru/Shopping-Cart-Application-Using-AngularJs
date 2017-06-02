var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					{p_id: "1", p_name: "Samsung Galaxy S7 Edge", p_image: "images/1.jpg", p_price: 28990},
					{p_id: "2", p_name: "iPhone 8", p_image: "images/2.png", p_price: 60138},
					{p_id: "3", p_name: "Sony Xperia Z3+", p_image: "images/3.png", p_price: 1519000},
					{p_id: "4", p_name: "ALIENWARE 17", p_image: "images/4.png", p_price: 75187},
					{p_id: "5", p_name: "Luvaglio Laptop", p_image: "images/5.png", p_price: 50115000},
					{p_id: "6", p_name: "Motorola Moto G4 16GB", p_image: "images/6.png", p_price: 9013}
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});