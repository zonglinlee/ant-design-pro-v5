import {Request, Response} from 'express'
import {waitTime} from "./user";

export enum ResponseCode {
  OK = 200,
  ERROR = 500
}

export default {
  'POST /api/test/login': async (req: Request, res: Response) => {
    await waitTime(1000)
    const {username, password} = req.body
    if (password === 'ant.design' && username === 'admin') {
      res.send({
        status: 'ok',
        code: ResponseCode.OK,
        msg: '您的表单已经提交成功',
      });
    } else {
      res.send({
        status: 'error',
        code: ResponseCode.ERROR,
        msg: '账号密码不对，请重新输入',
      });
    }
  }
}
