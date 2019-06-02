var username = "zyl";
var time = Date.parse(new Date());
var data = {
    "username" : username,
    "registTime" : time
};
var db = connect('zyl');
db.user.insert(data);
print("插入成功");