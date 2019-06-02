<!-- 索引 -->
function getTel(){
    var prefixArr = ['122','155','188','135','139'];
    var prefix = prefixArr[parseInt(Math.random()*10)];
    for(var i=0;i<8;i++){
        tel += Math.floor(Math.random()*10);
    }
    return tel;
}
var startTime = (new Date()).getTime();
var db = connnect('zyl');
var tempInfo = [];
for(var i=0; i<100000;i++){
    tempInfo.push({
        logintime:new Date(),
        tel:getTel()
    })
}
db.tel.insert(tempInfo);
<!-- 查询 -->
var res = db.tel.find({tel:'13514566629'});
res.forEach(res=>printjson(res));
<!-- 建立索引 提高查询效率[数据大量，频繁查询时]-->
db.tel.ensureIndex({tel:1});
<!-- 获取索引 -->
db.tel.getIndexes({});
<!-- 删除索引 -->
db.tel.dropIndex({tel:1})

var runTome = new Date().getTime() - startTime;
print('run time is' + runTime + 'ms');