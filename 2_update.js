var user1 = {
    name:"zhuyilong",
    age:31,
    hobby:['handsome','basketball','love'],
    pc:{
        brand:'apple',
        price:10000
    }
};
var user2 = {
    name:"caiminghui",
    age:21,
    hobby:['zhuyilong','music'],
    pc:{
        brand:'dell',
        price:5000
    }
};
var db = connect('zyl');
db.user.insert([user1,user2]);
print("success");

<!-- $set -->
<!-- db.user.update({name:"zhuyilong"},{$set:{age:30}}); -->
<!-- db.user.update({name:"zhuyilong"},{$set:'hobby.0':'健身'); -->

<!-- upsert -->
<!-- db.user.update({name:"zhuyilong"},{$set:{age:31}},{upsert:true}); -->

<!-- multi -->
<!-- db.user.update({},{$set:{hobby:[]}},{multi:true}); -->

<!-- $push -->
<!-- db.user.update({name:"zhuyilong"},{$push:{hobby:"ok"}}); -->

<!-- $addToSet -->
<!-- db.user.update({name:"zhuyilong"},{$addToSet:{hobby:"sleep"}); -->

<!-- $each -->
<!-- var newHobby = ['game','shopping','sleep'];
db.user.update({name:"zhuyilong"},{$addToSet:{hobby:{$each}}}); -->

<!-- findAndModify -->
<!-- var modify = {
    findAndModify:'user',
    query:{name:'zhuyilong'},
    update:{$set:{age:31}},
    new:true  修改以后的结果，false修改之前的结果
}
var res = db.runCommand(modify);
printjson(res);

findAndModify与update区别
findAndModify应答式，会返回是否成功结果
update非应答式 -->