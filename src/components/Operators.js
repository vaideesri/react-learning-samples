

function Operators() {
    let Arithmetic=()=>{
        let a=5
        let b=10
        let add=a+b
        let sub=a-b
        let mul=a*b
        let div=a/b
        let mod=a%b
        let inc=++a
        let dec=--b
        return `Add ${add}, Sub ${sub}  mul ${mul}, Div ${div}, mod ${mod}, inc ${inc}, dec ${dec}`
    }
    let Comparison =()=>{
        let c=(5<=5)
        return c.toString()
    }
  return (
    <div>
        {Arithmetic()}<br/>
        {Comparison()}
      
    </div>
  )
}

export default Operators
