import {
  createApiInstance
} from '/tools/client/apiBuilder'
export const AppController_getTest = createApiInstance < {
    userName: any // 查询用户名
  },
  null >
  ('AppController_getTest', (userName) => {
    return {
      method: 'get',
      url: '/test',
      query: {
        userName
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  });

export const AppController_getHello = createApiInstance < {

  },
  null >
  ('AppController_getHello', () => {
    return {
      method: 'get',
      url: '/',
      query: {

      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  });