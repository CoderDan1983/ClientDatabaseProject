const clientName=document.getElementById("clientName0");
const clientCard=document.getElementById("clientCardNumber0");
const clientProduct = document.getElementById("clientProduct0");
const clientAmount = document.getElementById("clientAmount0");
const otherTasksDropdown = document.getElementById("otherTasksDropdown");
const displayedTotal = document.getElementById("total");

const addToCartButton=document.getElementById("addToCart");
const orderButton = document.getElementById("orderButton");
const clearCartButton = document.getElementById("clearCartButton");
const otherTasksButton = document.getElementById("otherTasksButton");

let orderList=[];
let total=0;
//clientProduct.addEventListener('change', ()=>{

//});

let productPrices=[
{product: "largeSombrero", price: 30},
{product: "frozenHotSauce", price: 5},
{product: "discoGolfSet", price: 45},
{product: "oldSandwich", price: 80},
];

function getProductPrice(product){
	for(var p=0; p < productPrices.length; p++){
		if(productPrices[p].product==product){
			return(productPrices[p].price);
		}
	}
	return(-1); //ie-product not found!
}

addToCartButton.addEventListener('click', ()=>{
	let order={
		product: clientProduct.value,
		amount: parseFloat(clientAmount.value)
	}
	console.log(order);
	console.log(typeof(order.amount));
	orderList.push(order);

	let price = getProductPrice(order.product);
	if(price!=-1){
		total+=order.amount*price;
		displayedTotal.innerHTML="Total: " + total;
	}
});

clearCartButton.addEventListener('click', ()=>{

});

orderButton.addEventListener('click', ()=>{

});



otherTasksButton.addEventListener('click', ()=>{

});