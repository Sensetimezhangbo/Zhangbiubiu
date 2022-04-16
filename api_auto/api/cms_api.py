from conf.config import *
import requests
import unittest


class Cms(unittest.TestCase):
    @classmethod
    def set_session(cls):
        cls.session = requests.Session()  # 在构造函数中将创建会话的过程赋值给实例变量