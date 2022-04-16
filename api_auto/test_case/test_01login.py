'''
此模块写用例，
'''

import requests        # 导入requests 库
import unittest        # 导入unittest框架
from api.cms_api import Cms   # 导入cms_api模块里的Cms
from conf.config import *     # 导入confg文件里的所有*   *代表全部


class Cms_test(Cms):
    @classmethod
    def setUpClass(cls) -> None:
        Cms().set_session()

    def test01_login(self):
        response = self.session.post(url=login_url, headers=login_headers, data=login_data)
        assert response.json()["msg"] == "登录成功！"


