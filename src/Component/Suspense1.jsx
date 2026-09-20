function Suspense()
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            resolve(["apple","Banana","Mango"])
        },2000)
    }
    );
}
 let fruit={
    data:null,
    read()
    {
        if(this.data!==null)
            return this.data;
        throw Suspense()
        .then(re=>
            this.data=re
        
        )
    }
 }
function My()
{
    const f=fruit.read()
return(
    <>
    <h2>
        My favroite fruits  
    </h2>
    <ul>
        {f.map((k,i)=>
        (
            <li key={i}>{k}</li>
        )
        )}
    </ul>
    </>
)
}
export default My



 
