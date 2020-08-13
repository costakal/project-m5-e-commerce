## Server Endpoints

| Method | Endpoint                    | Description                                                                                                     |
| ------ | --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| GET    | `/items`                    | Returns an array of all store items                                                                             |
| GET    | `/items/:itemId`            | Returns the item object with id `itemId`                                                                        |
| GET    | `/companies`                | Returns an array of all companies                                                                               |
| GET    | `/companies/:companyId`     | Returns the company object and items array with id `companyId`                                                  |
| GET    | `/categories`               | Returns an array of all categories                                                                              |
| GET    | `/categories/:categoryName` | Returns an array of items with category `categoryName`                                                          |
| PUT    | `/order`                    | Checks for sufficient stock and, if sufficient, reduces the stock of each ordered item by the quantity ordered. |

---

### Structure of server response for `/items`

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
    },
  ]
}
```

---

### Structure of server response for `/items/:itemId`

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

---

### Structure of server response for `/companies`

```javascript
{
  "status": 200,
  "companies": [
    {
      "name": "Company Name",
      "url": "http://.../",
      "country": "Canada",
      "_id": 1234,
    },
    {
      "name": "Company Name",
      "url": "http://.../",
      ...
    },
  ]
}
```

---

### Structure of server response for `/companies/:companyId`

```javascript
{
  "status": 200,
  "company": {
    "name": "Company Name",
    "url": "http://.../",
    "country": "Canada",
    "_id": 1234,
  },
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
    },
  ]
}
```

---

### Structure of server response for `/categories`

```javascript
{
  "status": 200,
  "categories": [
    "fitness",
    "medical",
    "lifestyle",
    ...
  ]
}
```

---

### Structure of server response for `/categories/:categoryName`

```javascript
{
  "status": 200,
  "category": "fitness",
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
    },
  ]
}
```

---

### Structure of `PUT` body for `/order`

```javascript
{
  "order": [
    {
      "itemId": 1234,
      "quantity": 2
    },
    {
      "itemId": 5678,
      "quantity": 1
    }
  ]
}
```

---

### Structure of server response for `/order`

```javascript
{
  "status": 200,
  "confirmation": "dd0451c5-97ae-47fd-accf-62ea7dd12fb5",
  "order": [
    {
      "itemId": 1234,
      "quantity": 2
    },
    {
      "itemId": 5678,
      "quantity": 1
    }
  ]
}
```

or...

```javascript
{
  "status": 400,
  "error": "Sorry but one or more items in your order have insufficient stock.",
  "missingStockItems": [
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
    },
  ]
}
```
