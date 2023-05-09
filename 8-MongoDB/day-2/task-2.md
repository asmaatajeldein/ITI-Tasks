1. Import Inventory database
```bash
mongorestore --db inventory ./inv
```

***

2. Display number of products per category
```bash
db.products.aggregate([{$group:{_id:"$category", noProducts:{$sum:1}}}]).pretty()
```
```bash
	[
	  { _id: null, noProducts: 2 },
	  { _id: 'Laptop', noProducts: 3 },
	  { _id: 'Phone', noProducts: 4 },
	  { _id: 'TV', noProducts: 2 }
	]
```

***

3. display max category products price
```bash
db.products.aggregate([{$group:{_id:"$category", maxPrice:{$max:"$price"}}}]).pretty()
```
```bash
[
  { _id: 'TV', maxPrice: 11122.1 },
  { _id: null, maxPrice: 244.20000000000002 },    
  { _id: 'Laptop', maxPrice: 44122.476457950004 },
  { _id: 'Phone', maxPrice: 16072.47645795 }      
]
```

***

4. display Ahmed's orders populated with product
```bash
db.orders.aggregate([
    {$lookup:{from:"users", localField:"userId", foreignField:"_id", as:"orderPlacedBy"}},
    {$match:{"orderPlacedBy.name": "ahmed"}},
    {$lookup:{from:"products", localField:"productsIds", foreignField:"_id", as:"prductDetails"}}]) 
```

```bash
[
  {
    _id: ObjectId("6040ae169ad8e02d58cc3e0e"),
    userId: ObjectId("6040adb69ad8e02d58cc3e0d"),
    productsIds: [
      ObjectId("589ba2fb2742a35b47dad21c"),
      ObjectId("589ba2fb2742a35b47dad21e")
    ],
    orderPlacedBy: [ { _id: ObjectId("6040adb69ad8e02d58cc3e0d"), name: 'ahmed' } ],
    prductDetails: [
      {
        _id: ObjectId("589ba2fb2742a35b47dad21c"),
        name: 'Iphone7',
        price: 16072.47645795,
        category: 'Phone',
        vendor: 'Apple',
        stock: [ 20, 70 ],
        quantity: 10
      },
      {
        _id: ObjectId("589ba2fb2742a35b47dad21e"),
        name: 'Toshiba Laptop',
        price: 11122.1,
        category: 'Laptop',
        vendor: { name: 'Toshiba', phone: '011111321' },
        stock: [ 55, 67, 23, 1 ],
        quantity: 80
      }
    ]
  },
  {
    _id: ObjectId("6040b15c9ad8e02d58cc3e10"),
    userId: ObjectId("6040adb69ad8e02d58cc3e0d"),
    productsIds: [ ObjectId("589ba2fb2742a35b47dad21c") ],
    orderPlacedBy: [ { _id: ObjectId("6040adb69ad8e02d58cc3e0d"), name: 'ahmed' } ],
    prductDetails: [
      {
        _id: ObjectId("589ba2fb2742a35b47dad21c"),
        name: 'Iphone7',
        price: 16072.47645795,
        category: 'Phone',
        vendor: 'Apple',
        stock: [ 20, 70 ],
        quantity: 10
      }
    ]
  }
]
```

***

5. get user Ahmed's highest order price
```bash
db.orders.aggregate([
    {$lookup:{from:"users", localField:"userId", foreignField:"_id", as:"orderPlacedBy"}},
    {$match:{"orderPlacedBy.name": "ahmed"}},{$lookup:{from:"products", localField:"productsIds", foreignField:"_id", as:"productDetails"}},
    {$addFields:{orderPrice:{$sum:"$productDetails.price"}}},
    {$sort:{orderPrice:-1}},
    {$limit:1},
    {$project:{orderPrice:1}}
])
```
```bash
[
  {
    _id: ObjectId("6040ae169ad8e02d58cc3e0e"),
    orderPrice: 27194.576457950003
  }
]
```
