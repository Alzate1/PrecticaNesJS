import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value:',value)
    const number= parseInt(value.age.toString(),10);
    if(isNaN(number)){

      throw  new HttpException('age must be a number',HttpStatus.BAD_REQUEST)
    }

    return { ...value,age:number};
  }
}
