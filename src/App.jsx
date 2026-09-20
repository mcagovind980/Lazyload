import { Suspense, useState } from "react"
// import Radio from "./Component/Radio"
import Suspense1 from "./Component/Suspense1"

function App()
{
  return(

    <>
    <Suspense fallback={<div>Loading....</div>}>
     {/* <Radio/> */}
<Suspense1/>
</Suspense>
    </>
  )
}
export default App