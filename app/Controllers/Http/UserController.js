'use strict'

const User = use('App/Models/User')

class UserController {

    //List users
    async index(){
        const users = await User.all();

        return users.toJSON();
    }

    //Create and save a new user
    async store( {request} ){
        const data = request.all();
        const user = await User.create(data);
        return user.toJSON();
    }

    //Find user by id
    async show({ params }){
        const user = await User.findOrFail(params.id);
        return user.toJSON();
    }

    //Update user
    async update({ params }){
        const user = User.find(params.id)
        const data = request.all();
        user.merge(data);
        user.save();

        return user.toJSON();
    }   

    //Delete user
    async delete( {params} ){
        const user = await User.findOrFail(params.id);

        return user.delete();
    }

}

module.exports = UserController
