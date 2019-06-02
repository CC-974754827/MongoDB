# MongoDB

mongo
```
变量var
函数function
输出print
显示数据库show dbs
进入/创建数据库 use shop
显示集合 show collections
显示当前数据库 db
插入 db.user.insert({"name":"zyl"})
查询 db.user.find()
查询 db.user.findOne()
修改 db.user.update({查询},{修改})
删除 db.user.remove(条件)
删除集合 db.user.drop()
删除数据库 db.dropDatabase()
加载js文件 load('./xx.js')
```
数据更新 update
```
$set  修改
$unset  删除
upsert  如果找不到就插入
multi  给所有数据加数据
$push  给一个数组加数据[不会检查]
$addToSet  查找如果不存在就插入
$each  把数组中的每一个插入
findAndModify  查找并修改
```
数据查询find
```
$lt  $gt  $lte  $gte
$in
$or  $and  $not
数组  $all $in $size
分页 limit  skip  sort
js forEach
```
索引
```
生成随机数据
<!-- 建立索引 提高查询效率[数据大量，频繁查询时]-->
db.tel.ensureIndex({tel:1});
<!-- 获取索引 -->
db.tel.getIndexes({});
<!-- 删除索引 -->
db.tel.dropIndex({tel:1})
```
