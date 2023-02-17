import { User } from "./user"

export class Course {

    public id: number
    public name: string
    public description: string
    public image: string
    public price: number
    public duration: number
    public teacher: User
    
    constructor(id: number, name: string, description: string, image: string, price: number, duration: number, teacher: User) {
        this.id = id
        this.name = name
        this.description = description
        this.image = image
        this.price = price
        this.duration = duration
        this.teacher = teacher
    }

}
