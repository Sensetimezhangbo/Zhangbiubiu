import requests
import unittest
from api.cms_api import Cms
from conf.config import *


class Cms_test(Cms):
    def test_02saveSysUse(self):
        response = self.session.post(url=saveSysUse_url, headers=saveSysUse_headers, data=saveSysUse_data)
        assert response.json()["msg"] == "保存用户信息成功！"


