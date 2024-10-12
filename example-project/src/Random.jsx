export function Random(){
    let num = Math.random()*10
    return <h1 style={{"backgroundColor":'pink'}}> random number is okh: {Math.round(num)}</h1>
    // or {num}

}