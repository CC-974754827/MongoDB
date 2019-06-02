$gt 大于     $lt 小于
$gte大于等于  $lte小于等于
db.user.find(
    {age:{$gte:20,$lte:30}},
    {name:true,age:true,_id:false}    <!--显示的名称-->
)

$in  在哪个字段
db.user.find(
    {age:{$in:[20,25]}},
    {name:true,age:true,_id:false} 
)

$and  $or  $not 与或非
db.user.find(
    {$or:[{age:{$gte:20}},{'pc.brand':'apper'}]},
    {name:true,age:true,_id:false} 
)

数组  $all $in $size
db.user.find(
    {hobby:['basketball']},   <!--[] 完全等于数组-->
    {hobby:'basketball'},   <!--有此条就可以-->
    {hobby:{$all:['basketball','sleep']}},   <!--$all 需要都包含-->
    {hobby:{$in:['basketball','sleep']}},   <!--$in 有一个就可以-->
    {hobby:{$size:3}},   <!--$size 数组长度-->
)

分页 
limit[每次查几条]  skip[跳过几条数据]  sort[排序]]]
db.user.find(
    {},
    {name:true,age:true,_id:false} 
).limit(1).skip(0).sort({age:-1})   <!--降序  +1升序-->


js forEach 循环遍历打印出每一条数据
var db = connect('zyl');
var userList = db.user.find();
userList.forEach(function(user){
    printjson(user);
});