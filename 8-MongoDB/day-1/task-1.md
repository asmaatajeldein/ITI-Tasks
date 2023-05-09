
```bash
mongosh
```

```bash
use facebook
```

```bash
db.posts.insertMany([
{post_text: "text-1", images: 'flowers.jpg', likes: 5, comments: 5, Datetime: Date(), owner: 'Ali', live: true},
{post_text: "text-2", images: 'cats.jpg', likes: 8, comments: 6, Datetime: Date(), owner: 'Nour', live: false},
{post_text: "text-3", images: 'food.png', likes: 3, comments: 3, Datetime: Date(), owner: 'Muhammad', live: true},
{post_text: "text-4", images: 'paris.jpg', likes: 5, comments: 5, Datetime: Date(), owner: 'Youssef', live: false},
{post_text: "text-5", images: 'flowers.jpg', likes: 7, comments: 6, Datetime: Date(), owner: 'Muhammad', live: true},
{post_text: "text-6", images: 'sunset.png', likes: 56, comments: 3, Datetime: Date(), owner: 'Ali', live: true},
{post_text: "text-7", images: 'sunrise.png', likes: 23, comments: 7, Datetime: Date(), owner: 'Nour', live: true},
{post_text: "text-8", images: 'canada.jpg', likes: 90, comments: 8, Datetime: Date(), owner: 'Malik', live: true},
{post_text: "text-9", images: 'meme.jpg', likes: 38, comments: 78, Datetime: Date(), owner: 'Youssef', live: false},
{post_text: "text-10", images: 'meme.jpg', likes: 47, comments: 45, Datetime: Date(), owner: 'Muhammad', live: true},
{post_text: "text-11", images: 'screenshot.jpg', likes: 9, comments: 4, Datetime: Date(), owner: 'Karim', live: true},
{post_text: "text-12", images: 'meme.jpg', likes: 3, comments: 3, Datetime: Date(), owner: 'Aya', live: true},
{post_text: "text-13", images: 'meme.jpg', likes: 4, comments: 5, Datetime: Date(), owner: 'Nada', live: false},
{post_text: "text-14", images: 'screenshot.jpg', likes: 5, comments: 3, Datetime: Date(), owner: 'Omnia', live: true},
{post_text: "text-15", images: 'meme.jpg', likes: 55, comments: 45, Datetime: Date(), owner: 'Muhammad', live: false},
{post_text: "text-16", images: 'cats.jpg', likes: 78, comments: 43, Datetime: Date(), owner: 'Nada', live: false},
{post_text: "text-17", images: 'meme.jpg', likes: 94, comments: 33, Datetime: Date(), owner: 'Omnia', live: false},
{post_text: "text-18", images: 'flowers.jpg', likes: 24, comments: 11, Datetime: Date(), owner: 'Aya', live: false},
{post_text: "text-19", images: 'meme.jpg', likes: 58, comments: 34, Datetime: Date(), owner: 'Ali', live: false},
{post_text: "text-20", images: 'cats.png', likes: 34, comments: 21, Datetime: Date(), owner: 'Marwan', live: false}
])
```

```bash
db.createCollection("users", {
    capped: true,
    size: 5242880,
    max: 10,
    validator: {$and: [{username:{$type: "string"}}, {email: {$regex: /@gmail\.com$/}}]}
})
```

```bash
db.users.insertMany([
    {username: "Ali", email: "Ali@gmail.com"},
    {username: "Nour", email: "Nour@gmail.com"},
    {username: "Youssef", email: "Youssef@gmail.com"},
    {username: "Muhammad", email: "Muhammad@gmail.com"},
    {username: "Malik", email: "Malik@gmail.com"},
    {username: "Karim", email: "Karim@gmail.com"},
    {username: "Aya", email: "Aya@gmail.com"},
    {username: "Nada", email: "Nada@gmail.com"},
    {username: "Omnia", email: "Omnia@gmail.com"},
    {username: "Marwan", email: "Marwan@gmail.com"}
])
```

```bash
db.users.find()
```

```bash
db.posts.find({owner: "Muhammad"})
```

```bash
db.posts.updateMany({owner: "Muhammad"} , {$set: {likes: 1000}})
```

```bash
db.posts.deleteMany({owner: "Muhammad"})
```
