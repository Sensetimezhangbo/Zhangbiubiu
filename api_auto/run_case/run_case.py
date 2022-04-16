'''
此模块用来输出自动化报告
'''
from untils.HTMLTestRunner3_New import HTMLTestRunner
from time import strftime
import unittest

now = strftime("%Y-%m-%d_%H_%M_%S")  # 添加时间戳
file = r"C:\Users\张biubiu\Desktop\api_auto\report" + "\\" + now + "_api自动化测试报告.html"  # 拼接文件生成的路径和文件名
f = open(file, 'wb')  # 创建一个文件的数据流
start_dir = r"C:\Users\张biubiu\Desktop\api_auto\test_case"  # 查找用例的路径
discover = unittest.defaultTestLoader.discover(start_dir=start_dir, pattern="test*.py")
# 创建一个对象
runner = HTMLTestRunner(stream=f,
                        description="用例情况如下：",
                        tester="小张",
                        title="接口自动化测试报告"
                        )
runner.run(discover)
