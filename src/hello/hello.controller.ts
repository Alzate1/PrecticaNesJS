import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
@Controller()
export class HelloController {
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message:'Hello word'
        })
    }

    @Get('notFound')
    @HttpCode(404)
    notFoundPgae(){
        return '404 Not found'
    }
    @Get('error')
    @HttpCode(500)
    errorPgae(){
        return 'Error router!!'
    }
    @Get('new')
    @HttpCode(201)
    sometimes(){
    return 'sometime new'
    }
    @Get('ticket/:number')
    getNumber(@Param('number', ParseIntPipe)number:number){
        return number + 14
        
    }
    @Get('active/:status')
    @UseGuards(AuthGuard)
    ifUserActive(@Param('status',ParseBoolPipe)status:boolean){
        return status        
    }
    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe)query:{
        name:string,
        age:number
    }){
        console.log(typeof query.age)
        console.log(typeof query.name)
      return `hellow ${query.name}, you are ${query.age +30} years`  
    }
}
