
let express = require('express')
let app = express()

app.set('view engine' , 'ejs')
app.use( '/assets' , express.static('public'))

app.get( '/' , (request , response)=>{
    response.render('pages/index')
})

app.get('/contributor' , (request , response)=>{
    response.render('pages/contributor')
})

app.get('/blog' , (request, response)=>{
    response.render('pages/blog')
})

app.get('/physic' , (request , response)=>{
    response.render('pages/physic')
})

app.get('/maths' , (request,response)=>{
    response.render('pages/maths')
})

app.get('/convert' , (request,response)=>{
    response.render('pages/convert')
})


app.listen(8000)
 