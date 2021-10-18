<<<<<<< HEAD
// const express = require('express')
// const app = express()

// //允许跨域
// app.use(require('cors')())
// app.use(express.json())

// //建立数据库
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/element-admin', {
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     //返回文档
//     useCreateIndex: true,
//     //创建指数存在
// })

// const Article = mongoose.model('Article', new mongoose.Schema({
//     title: { type: String },
//     body: { type: String }
// }))

// // app.get('/articles/index', async(req, res) => {
// //     res.send('index')
// // })

// //新增文章
// app.post('/api/articles', async(req, res) => {
//     const article = await Article.create(req, body);
//     res.send(article);
// })

// //文章列表
// app.get('api/articles', async(req, res) => {
//     const articles = await Article.find()
//     res.send(articles)
// })

// //删除文章
// app.delete('api/articles/:id', async(req, res) => {
//     await Article.findByIdAndDelete(req.params.id)
//     res.send({
//         status: true
//     })
// })

// //文章详情
// app.get('/api/articles/:id', async(req, res) => {
//     const article = await Article.findById(req.params.id)
//     res.send(article)
// })

// //修改文章
// app.put('/api/articles/:id', async(req, res) => {
//     const article = await Article.findByIdAndUpdate(req.params.id, req.body)
//     res.send(article)
// })

// app.listen(3001, () => {
//     console.log('http://localhost:3001');
// })



const express = require("express")
const app = express()

// 允许跨域
app.use(require('cors')())
    // 
app.use(express.json())

// 链接数据库
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/blog-admin", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketOptions: {
        autoReconnect: true,
        connectTimeoutMS: 20000,
        socketTimeoutMS: 20000,
    },
})

const Article = mongoose.model("Article", new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    // type: {
    //     type: String
    // }
}))


app.get("/", async(req, res) =>
    res.send("restful page"))

// 查询所有文章
app.get("/api/article", async(req, res) => {
    const articles = await Article.find()
    res.send(articles)
})

// 文章详情
app.get("/api/article/:id", async(req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})

// 修改文章
app.put("/api/article/:id", async(req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(article)
})

// 新增文章
app.post("/api/article", async(req, res) => {
    const articles = await Article.create(req.body)
    res.send(articles)
})

// 删除文章(接受参数)
app.delete("/api/article/:id", async(req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})

app.listen(3001, () =>
    console.log("http://localhost:3001/")
=======
// const express = require('express')
// const app = express()

// //允许跨域
// app.use(require('cors')())
// app.use(express.json())

// //建立数据库
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/element-admin', {
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     //返回文档
//     useCreateIndex: true,
//     //创建指数存在
// })

// const Article = mongoose.model('Article', new mongoose.Schema({
//     title: { type: String },
//     body: { type: String }
// }))

// // app.get('/articles/index', async(req, res) => {
// //     res.send('index')
// // })

// //新增文章
// app.post('/api/articles', async(req, res) => {
//     const article = await Article.create(req, body);
//     res.send(article);
// })

// //文章列表
// app.get('api/articles', async(req, res) => {
//     const articles = await Article.find()
//     res.send(articles)
// })

// //删除文章
// app.delete('api/articles/:id', async(req, res) => {
//     await Article.findByIdAndDelete(req.params.id)
//     res.send({
//         status: true
//     })
// })

// //文章详情
// app.get('/api/articles/:id', async(req, res) => {
//     const article = await Article.findById(req.params.id)
//     res.send(article)
// })

// //修改文章
// app.put('/api/articles/:id', async(req, res) => {
//     const article = await Article.findByIdAndUpdate(req.params.id, req.body)
//     res.send(article)
// })

// app.listen(3001, () => {
//     console.log('http://localhost:3001');
// })



const express = require("express")
const app = express()

// 允许跨域
app.use(require('cors')())
    // 
app.use(express.json())

// 链接数据库
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/blog-admin", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketOptions: {
        autoReconnect: true,
        connectTimeoutMS: 20000,
        socketTimeoutMS: 20000,
    },
})

const Article = mongoose.model("Article", new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    // type: {
    //     type: String
    // }
}))


app.get("/", async(req, res) =>
    res.send("restful page"))

// 查询所有文章
app.get("/api/article", async(req, res) => {
    const articles = await Article.find()
    res.send(articles)
})

// 文章详情
app.get("/api/article/:id", async(req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})

// 修改文章
app.put("/api/article/:id", async(req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(article)
})

// 新增文章
app.post("/api/article", async(req, res) => {
    const articles = await Article.create(req.body)
    res.send(articles)
})

// 删除文章(接受参数)
app.delete("/api/article/:id", async(req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})

app.listen(3001, () =>
    console.log("http://localhost:3001/")
>>>>>>> 7454ae7dc0c594d388f31b6970a622dfed507a79
)