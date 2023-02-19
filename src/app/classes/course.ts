import { User } from "./user"

export class Course {

    public _id: number
    public name: string
    public description: string
    public image: string
    public price: number
    public duration: number
    public owner: User
    
    constructor(_id: number, name: string, description: string, image: string, price: number, duration: number, owner: User) {
        this._id = _id
        this.name = name
        this.description = description
        this.image = image
        this.price = price
        this.duration = duration
        this.owner = owner
    }

}
