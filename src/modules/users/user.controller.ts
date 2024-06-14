import { Controller, Get, Param, Post, Body, Put, Delete, Res, Req, HttpStatus, ParseIntPipe, UseFilters, ForbiddenException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from 'src/core/errors/http-exception.filter';

@UseFilters(HttpExceptionFilter)
@Controller({
    version: '1'
})
export class UserController {
    constructor(private userService: UserService) { }

    @Get('test')
    test(): string {
        //throw new ForbiddenException();
        return 'test';
    }

    @Get('/all')
    async getAll(@Res() res: Response): Promise<any> {
        return res.status(HttpStatus.OK)
            .json(await this.userService.getAll());
    }

    // findOne(@Param('id') id: string): any {
    @Get(":id")
    async getById(@Param('id', ParseIntPipe) id: number, @Res() res: Response): Promise<any> {
        const data = await this.userService.getById(id) || null;
        res.status(HttpStatus.OK)
            .json(data);
    }

    @Get("relation/:id")
    async getUserPosts(@Param('id', ParseIntPipe) id: number, @Res() res: Response): Promise<any> {
        const data = await this.userService.getUserPosts(id) || null;
        res.status(HttpStatus.OK)
            .json(data);
    }

    @Post('create')
    async create(@Req() req: Request, @Res() res: Response, @Body() user: any): Promise<any> {
        console.log(req.url);
        const data = await this.userService.create(user);
        res.status(HttpStatus.CREATED).json({
            "message": "Created!!",
            data
        });
    }

    @Put('update/:id')
    async update(@Param('id') id: string, @Body() user: any, @Res() res: Response): Promise<any> {
        const data = await this.userService.update(id, user);
        res.status(HttpStatus.CREATED).json({
            "message": "Updated!!",
            data
        });
    }

    /**
      * Delete user
      * @param id
      */
    @Delete('delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response): Promise<any> {
        const data = await this.userService.delete(id);
        res.status(HttpStatus.OK).json({
            "message": "Deleted!!",
            data
        });
    }
}
