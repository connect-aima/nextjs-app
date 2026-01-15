export default async function Blog(){
    await new Promise(resolve=>{
        setTimeout(()=>{
            resolve("InstenTional Delay")
        },2000)
    })
    return(
        <h1>Blog</h1>
    )
}