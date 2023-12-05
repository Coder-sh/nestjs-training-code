import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")


    // const user = new User()
    // user.firstName = 'guang'
    // user.lastName = 'guang'
    // user.age  = 20

    // const idCard = new IdCard();
    // idCard.cardName = '1111111';
    // idCard.user = user;

    // // await AppDataSource.manager.save(user);
    // await AppDataSource.manager.save(idCard);


    // const ics = await AppDataSource.manager.find(IdCard, {
    //     relations: {
    //         user: true
    //     }
    // });
    // console.log(ics);
    

    // const ics = await AppDataSource.manager.getRepository(IdCard)
    //     .createQueryBuilder("ic")
    //     .leftJoinAndSelect("ic.user", "u")
    //     .getMany();
    // console.log(ics);
    
    // const ics = await AppDataSource.manager.createQueryBuilder(IdCard, "ic")
    //     .leftJoinAndSelect("ic.user", "u")
    //     .getMany()
    // console.log(ics);
    

    // const user = new User();
    // user.id = 1;
    // user.firstName = "guang111"
    // user.lastName = "guang111"
    // user.age = 18

    // const idCard = new IdCard();
    // idCard.id = 1;
    // idCard.cardName = "22222",
    // idCard.user = user;

    // await AppDataSource.manager.save(idCard);


    // await AppDataSource.manager.delete(User, 1)


    // const idCard = await AppDataSource.manager.findOne(IdCard, {
    //     where: {
    //         id: 1
    //     },
    //     relations: {
    //         user: true
    //     }
    // })
    // await AppDataSource.manager.delete(User, idCard.user.id)
    // await AppDataSource.manager.delete(IdCard, idCard.id)


    // const user = await AppDataSource.manager.find(User, {
    //     relations: {
    //         idCard: true
    //     }
    // })
    // console.log(user);
    
}).catch(error => console.log(error))
