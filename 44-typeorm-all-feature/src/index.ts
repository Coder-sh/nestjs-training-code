import { In } from 'typeorm';
import { AppDataSource } from './data-source';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async () => {
    // const user = new User();
    // user.id = 1;
    // user.firstName = 'aaa111';
    // user.lastName = 'bbb';
    // user.age = 25;

    // await AppDataSource.manager.save(User, [
    //   {
    //     firstName: 'ccc111',
    //     lastName: 'ccc',
    //     age: 21,
    //     id: 2,
    //   },
    //   {
    //     firstName: 'ddd222',
    //     lastName: 'ddd',
    //     age: 22,
    //     id: 3,
    //   },
    //   {
    //     firstName: 'eee333',
    //     lastName: 'eee',
    //     age: 23,
    //     id: 4,
    //   },
    // ]);

    // await AppDataSource.manager.delete(User, 1);
    // await AppDataSource.manager.delete(User, [2, 3]);

    // const user = new User();
    // user.id = 4;
    // await AppDataSource.manager.remove(User, user);

    // await AppDataSource.manager.save(User, [
    //   {
    //     firstName: 'ccc',
    //     lastName: 'ccc',
    //     age: 21,
    //   },
    //   {
    //     firstName: 'ddd',
    //     lastName: 'ddd',
    //     age: 22,
    //   },
    //   {
    //     firstName: 'eee',
    //     lastName: 'eee',
    //     age: 23,
    //   },
    // ]);

    // const users = await AppDataSource.manager.findBy(User, { age: 23 });
    // console.log(users);

    // const users = await AppDataSource.manager.findAndCount(User);
    // console.log(users);

    // const users = await AppDataSource.manager.findAndCountBy(User, {
    //   age: 23,
    // });
    // console.log(users);

    // const user = await AppDataSource.manager.findOne(User, {
    //   select: { firstName: true, age: true },
    //   where: { age: 23 },
    //   order: { age: 'ASC' },
    // });
    // console.log(user);

    // const users = await AppDataSource.manager.find(User, {
    //   select: { firstName: true, age: true },
    //   where: { id: In([4, 7]) },
    //   order: {
    //     age: 'ASC',
    //   },
    // });
    // console.log(users);

    // const user = await AppDataSource.manager.findOneBy(User, {
    //   age: 23,
    // });
    // console.log(user);

    // try {
    //   const user = await AppDataSource.manager.findOneOrFail(User, {
    //     where: {
    //       id: 666,
    //     },
    //   });
    //   console.log(user);
    // } catch (e) {
    //   console.log(e);
    //   console.log('没有找到该用户');
    // }

    // const users = await AppDataSource.manager.query(
    //   'select * from user where age in(?, ?)',
    //   [21, 22]
    // );
    // console.log(users);

    // const queryBuilder = await AppDataSource.manager.createQueryBuilder();
    // const user = await queryBuilder
    //   .select('user')
    //   .from(User, 'user')
    //   .where('user.age = :age', { age: 21 })
    //   .getOne();
    // console.log(user);

    // await AppDataSource.manager.transaction(async (manager) => {
    //   await manager.save(User, {
    //     id: 4,
    //     firstName: 'eee',
    //     lastName: 'eee',
    //     age: 20,
    //   });
    // });

    const user = await AppDataSource.manager.getRepository(User).find({
      where: {
        age: 21,
      },
    });
    console.log(user);
  })
  .catch((error) => console.log(error));
