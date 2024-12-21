import cacheManager from ".";


const db = new cacheManager()


db.resetCache().then((resault : any)=>{
    console.log(resault)
}).catch((err:any)=>{
    console.log(err)
})