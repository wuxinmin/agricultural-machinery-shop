import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://agricultural.com/getList',{data: data.list})
Mock.mock('http://agricultural.com/getUser',{
    "name|2": "洪达",
    "age|18-25": 20
})
Mock.mock('http://agricultural.com/list',{
    "info|10-20": [
        {
            'index|+1': 1,
            'name': "@first @last",
            'id': "@integer(10000, 99999)",
            'date': "@datetime",
            'img': "@image('200*200')",
            'text': "@sentence(6, 22)"
        }
    ]
})

let Random = Mock.Random;
let productData = req => {
    let productList = []; // 存放信息
    for(let i=0; i<100; i++) {
        let product = {
            name: Random.ctitle(5,20),
            img: Random.dataImage('120x120','农机' + Random.integer(1, 100)),
            price: Random.integer(1000, 10000),
            owner: Random.cname()
        }
        productList.push(product)
    }
    return productList;
}
Mock.mock('http://agricultural.com/getRecommendLists',productData)