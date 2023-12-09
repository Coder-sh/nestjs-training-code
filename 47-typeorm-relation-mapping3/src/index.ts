import { AppDataSource } from './data-source'
import { Article } from './entity/Article'
import { Tag } from './entity/Tag'

AppDataSource.initialize()
    .then(async () => {
        // const a1 = new Article()
        // a1.title = 'aaaa'
        // a1.content = 'aaaaaaaaa'

        // const a2 = new Article()
        // a2.title = 'bbbb'
        // a2.content = 'bbbbbbbb'

        // const t1 = new Tag()
        // t1.name = 'ttt1111'

        // const t2 = new Tag()
        // t2.name = 'ttt2222'

        // const t3 = new Tag()
        // t3.name = 'ttt3333'

        // a1.tags = [t1, t2]
        // a2.tags = [t1, t2, t3]

        const entityManage = AppDataSource.manager

        // await entityManage.save(t1)
        // await entityManage.save(t2)
        // await entityManage.save(t3)

        // await entityManage.save(a1)
        // await entityManage.save(a2)


        // const article = await entityManage.find(Article, {
        //     relations: {
        //         tags: true
        //     }
        // })
        // console.log(article);
        // console.log(article.map(item => item.tags));


        // const article = await entityManage
        //     .createQueryBuilder(Article, "a")
        //     .leftJoinAndSelect("a.tags", "t")
        //     .getMany()
        // console.log(article);
        // console.log(article.map(item => item.tags));


        // const article = await entityManage
        //     .getRepository(Article)
        //     .createQueryBuilder("a")
        //     .leftJoinAndSelect("a.tags", "t")
        //     .getMany()
        // console.log(article);
        // console.log(article.map(item => item.tags));


        // const article = await entityManage.findOne(Article, {
        //     where: {
        //         id: 2
        //     },
        //     relations: {
        //         tags: true
        //     }
        // })
        // article.title = "ccccc"
        // article.tags = article.tags.filter(item => item.name.includes("ttt111"))
        // await entityManage.save(article)


        // await entityManage.delete(Article, 1)
        // await entityManage.delete(Tag, 1)


        const tags = await entityManage.find(Tag, {
            relations: {
                articles: true
            }
        })
        console.log(tags);

    })
    .catch((error) => console.log(error))
