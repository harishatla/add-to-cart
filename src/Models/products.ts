export class Products{
        category: string
        description:  string
        id: number
        image: string
        price: number
        quantity ?: number
        rating: {
                        rate: number, 
                        count: number
                }
        title:  string
        total ?: number

        constructor(){
                
        }
}