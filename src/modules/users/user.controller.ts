import { Controller, Get, Param, Post, Body, Put, Delete, Res, Req, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { Request, Response } from 'express';

@Controller({
    version: '1'
})
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/all')
    async getAll(@Res() res: Response): Promise<any> {
        res.status(HttpStatus.OK)
            .json( await this.userService.getAll());
    }

    // findOne(@Param('id') id: string): any {
    @Get(":id")
    async getById(@Param('id', ParseIntPipe) id: number, @Res() res: Response): Promise<any> {
        const data = await this.userService.getById(id) || null;
        res.status(HttpStatus.OK)
            .json(data);
    }

    @Post('create')
    create(@Req() req: Request, @Res() res: Response, @Body() user: any): any {
        console.log(req.url);
        this.userService.create(user);
        res.status(HttpStatus.CREATED).json({
            "message": "Created!!"
        });
    }

    @Put('update/:id')
    update(@Param('id') id: string, @Body() user: any, @Res() res: Response): any{
        this.userService.update(id, user);
        res.status(HttpStatus.CREATED).json({
            "message": "Updated!!"
        });
    }

    /**
      * Delete user
      * @param id
      */
    @Delete('delete/:id')
    async delete(@Param('id', ParseIntPipe) id:  number, @Res() res: Response): Promise<any>{
        await this.userService.delete(id);
        res.status(HttpStatus.OK).json({
            "message": "Deleted!!"
        });
    }
}
