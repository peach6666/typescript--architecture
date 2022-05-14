export function sum(...vals: number[]){
    return vals.reduce((total,val)=>total+=val)
}