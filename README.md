相信无论是前端还是后端开发，都或多或少地被接口文档折磨过。 前端经常抱怨后端给的接口文档与实际情况不一致。
后端又觉得编写及维护接口文档会耗费不少精力，经常来不及更新。其实无论是前端调用后端，还是后端调用后端，都期望有一个好的接口文档。
但是这个接口文档对于程序员来说，就跟注释一样，经常会抱怨别人写的代码没有写注释，然而自己写起代码起来，最讨厌的，也是写注释。
所以仅仅只通过强制来规范大家是不够的，随着时间推移，版本迭代，接口文档往往很容易就跟不上代码了。

发现了痛点就要去找解决方案。解决方案用的人多了，就成了标准的规范，这就是 Swagger 的由来。Swagger 很好，但是也显然存在一些问题。
在前端开发与后端项目联调的过程中，我们总避免不了要根据后端的接口文档(一般是Swagger)来定义前端的API调用代码，同时要根据接口文档中API请求参数，
返回参数等定义出前端使用的typescript类型定义，随着业务功能的增大，这项工作也越来越耗费前端开发人员的时间，然后而这项工作本来是可以通过自动化工具去完成的，
因为后端同学给出的接口文档中就已经包含了请求类型，方法名称，参数类型，返回值类型等定义，只需要通过工具依据固定的规则转化为前端代码即可。

生成接口示例
```typescript
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
```

createApiInstance 为一个自定义的接口调用函数，参数都传入函数后，可以函数内部使用 fetch、axios 或者更复杂的封装。

当然，这只是个非常简单的 demo，主要是实现这个想法，Swagger 各个版本协议都有很大的不同，如果要完整开发，需要非常深入的了解 Swagger 的协议。
同时目前只实现了 query 的简单兼容，其他的入参方式并没有实现。另外在类型定义上，目前是简单的写死，实际可以提取出 interface、enum 等类型，方便后续代码中调用。
一些公共的 ref 也没有做处理，所以仅供一个简单的参考。