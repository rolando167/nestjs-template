import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller({
    version: '1'
})
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/all')
    getAll() {
        return this.userService.getAll();
    }

    // findOne(@Param('id') id: string): any {
    @Get(":id")
    getById(@Param('id') id: string): any {
        return this.userService.getById(id);
    }

    @Post('create')
    create(@Body() user: any) {
        this.userService.create(user);
    }

    @Put('update')
    update(@Body() user: any) {
        this.userService.update(user);
    }

    /**
      * Delete user
      * @param id
      */
    @Delete('delete/:id')
    delete(@Param('id') id: string) : any{
        this.userService.delete(id);
    }
}
