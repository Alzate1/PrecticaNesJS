import { Injectable } from "@nestjs/common";
import { UpdateTaksDto } from "./dto/update-taks.dto";
import { CreateTaksDto } from "./dto/create-taks.dto";
export interface user {
    name: string;
    age:number;
}
@Injectable()
export class TaksService {
    private taks = []

    getTaks() {
       return this.taks
    }
    getTak(id:number) {
      const taksFound = this.taks.find(t => t.id === id)
        if (!taksFound) {
            return "No se econtró la tarea"
        }
        return taksFound
    }
    createTaks(taks:CreateTaksDto) {
        this.taks.push({

            ...taks,
            id:this.taks.length +1,
        }
        )
        return taks
    }
    updateTaks(taks:UpdateTaksDto) {
        console.log(taks)
        return 'Actualizando tarea'
    }
    deleteTaks() {
        return 'Borrando tarea'
    }
    updateTakStatus() {
        return 'Actualizando el status de  tarea'
    }
}