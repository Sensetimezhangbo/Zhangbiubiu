'''
此模块用来存放接口的入参信息和url以及headers
'''
# 1登录接口
login_url = 'http://cms.duoceshi.cn/cms/manage/loginJump.do'
login_headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}
login_data = {
    "userAccount": "admin",
    "loginPwd": "123456"
}
# 2添加用户接口
saveSysUse_url = 'http://cms.duoceshi.cn/cms/manage/saveSysUser.do'
saveSysUse_headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}
saveSysUse_data = {
    "id": " ",
    "userName": "aaa345",
    "userSex": "1",
    "userMobile": "13944444442",
    "userEmail": "123456@qq.com",
    "userAccount": "cd81666",
    "loginPwd": "123456",
    "confirmPwd": "123456"
}
# 3删除用户接口
delete_url = 'http://cms.duoceshi.cn/cms/manage/deleteByIds.do'
delete_headers = {
    "Content-Type": "application/x-www-form-urlencoded"
}
delete_data = {
    "ids": "130861"
}
