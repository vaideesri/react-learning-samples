import React from 'react'

function Forinloop() {
    let a="welcome"
    let b=[]
    let handleForinloop=()=>{
        for(let i in a)
        {
            b.push(
                <div>
                    {a[i]}
                </div>
            )
        }
    }
  return (
    <div>
      {b}
      {handleForinloop()}
    </div>
  )
}

export default Forinloop
