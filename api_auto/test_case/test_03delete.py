import requests
import unittest
from api.cms_api import Cms
from conf.config import *


class Cms_test(Cms):
    def test_03deleteByIds(self):
        response = self.session.post(url=delete_url, headers=delete_headers, data=delete_data)
        assert response.json()["msg"] == "1条数据删除成功！"


if __name__ == '__main__':
    unittest.main()              #执行以test开头的用例
