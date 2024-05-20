import express, { Request, Response } from "express"
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is running rakib!')
})
app.post('/', (req:Request, res:Response)=>{
    console.log(req.body)
    res.send("got it")
})
export default app