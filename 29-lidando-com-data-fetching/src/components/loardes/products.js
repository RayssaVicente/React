import products from "../database.json"

export function loardProduct({params}){
    const prouct = products.find(p => p.id === +params.productId)

    return product
}