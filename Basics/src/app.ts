import express,{Application,Request,Response,NextFunction} from 'express'
const app:Application = express();

let dispatch = (a:number,b:number):number => {
    return b-a
}

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    let obj:object = {'Test':dispatch(10,12)}
    res.json({'Hello':obj});
})
app.listen(3000,()=>{
    console.log("Server is running");
})