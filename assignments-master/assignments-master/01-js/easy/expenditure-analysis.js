/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076900000, price: 15, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656077000000, price: 20, category: 'Clothing', itemName: 'Shirt' },
];


function calculateTotalSpentByCategory(transactions) {
  categorymap={};
  for(let i=0;i<transactions.length;i++){
    if(transactions[i].category in categorymap){
      categorymap[transactions[i].category]+=transactions[i].price;
    }else{
      categorymap[transactions[i].category]=transactions[i].price;
    }
  }
  let result=[];
  for(i in categorymap){
    result.push({category:category,pricemoney:categorymap[category]});
  }
  
  return result;

}

console.log(calculateTotalSpentByCategory(transactions));

