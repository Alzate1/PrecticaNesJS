import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TaksService } from "./taks.service";
import { UpdateTaksDto } from "./dto/update-taks.dto";
import { CreateTaksDto } from "./dto/create-taks.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/taks')
@ApiTags('taks')
export class TaksController{
    taksService: TaksService;
    constructor(taksService: TaksService){
        this.taksService = taksService;
    }
    @Get()
    @ApiOperation({summary:'Get all taks'})
    @ApiResponse({status:200,description:'Return all taks'  })
    @ApiResponse({status:403,description:'Forbiden'  })
    getAllTaks(@Query()taksQuery:any){
        console.log(taksQuery)
       return this.taksService.getTaks();
    }
    @Get('/:id')
    getTaks(@Param('id')id:string){
        console.log(id)
       return this.taksService.getTak(parseInt(id));
    }
    @Post()
    @ApiOperation({summary:'create task'})
    createTaks(@Body()taks: CreateTaksDto){
       return this.taksService.createTaks(taks);
    }
    @Put()
    updateTaks(@Body()taks:UpdateTaksDto){
       return this.taksService.updateTaks(taks);
    }
    @Delete()
    deleteTaks(){
       return this.taksService.deleteTaks();
    }
    @Patch()
    updateTakStatus(){
       return this.taksService.updateTakStatus();
    }
}