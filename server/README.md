## Server Endpoints

| Method | Endpoint         | Description                              |
| ------ | ---------------- | ---------------------------------------- |
| GET    | `/items`         | Returns an array of all store items      |
| GET    | `/items/:itemId` | Returns the item object with id `itemId` |

---

### Structure of `items` array

```javascript
{
  "status": 200,
  "items": [
    {
      "name": "Product Name",
      "price": "$xx.xx",
      "body_location": "Wrist",
      "category": "Fitness",
      "_id": 1234,
      "imageSrc": ...,
      "numInStock": 9,
      "companyId": 19962,
    },
    {
      "name": ...,
      "price": ...,
      ...
    }
  ]
}
```

---

### Structure of `item` object

```javascript
{
  "status": 200,
  "item": {
    "name": "Product Name",
    "price": "$xx.xx",
    "body_location": "Wrist",
    "category": "Fitness",
    "_id": 1234,
    "imageSrc": ...,
    "numInStock": 9,
    "companyId": 19962,
  }
}
```
