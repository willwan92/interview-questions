## 简述解释型和编译型编程语言？
解释型：在执行程序时，计算机才一条一条的将代码解释成机器语言给计算机来执行
编译型：是把源程序的每一条语句都编译成机器语言，并保存成二进制文件，这样计算机运行该程序时可以直接以机器语言来运行此程序，运行速度很快。

## 请至少列举5个 PEP8 规范（知道）

缩进：每一级4个缩进。连续跨行应该使用圆括号或大括号或者使用悬挂缩进。
代码长度约束
一行列数：PEP8 规定最大为79列，如果拼接url很容易超限
一个函数：不可以超过30行；直观来讲就是完整显示一个函数一个屏幕就够了，不需要上下拖动 一个类：不要超过200行代码，不要超过10个方法
一个模块：不要超过500行
import
不要在一句import中引用多个库
命名规范
注释
总体原则，错误的注释不如没有注释。所以当一段代码发生变化时，第一件事就是要修改注释！

## python的可变类型和不可变类型？
可变类型：list dict set

可变对象的内容是可以变化的，当对象的内容发生变化时，变量的对象引用是不会变化的。

不可变类型：tuple

不可变对象的本身不可变，但是变量的对象引用是可变的

## 至少列举8个常用模块都有那些？
os,sys,time,random,re,hashlib,logging,json,pickle…

os模块提供了不少与操作系统相关联的函数.
sys通用工具脚本经常调用命令行参数.
re模块为高级字符串处理提供了正则表达式工具。对于复杂的匹配和处理，正则表达式提供了简洁、优化的解决方案:
random提供了生成随机数的工具。
re的match和search区别？
match:从字符串的开头位置匹配，必须以此为开头
search:从开头开始查，找到符合的就返回结果

## 字符串、列表、元组、字典每个常用的5个方法？
字符串：repleace,strip,split,upper,lower,join,find,index…

- replace(old, new [, max])

把将字符串中的 str1 替换成 str2,如果 max 指定，则替换不超过 max 次。

- strip([chars])#去空格及特殊符号

在字符串上执行 lstrip()和 rstrip()

s.strip().lstrip().rstrip(',')
1
split(str="", num=string.count(str))
num=string.count(str)) 以 str 为分隔符截取字符串，如果 num 有指定值，则仅截取 num+1 个子字符串

join(seq)
以指定字符串作为分隔符，将 seq 中所有的元素(的字符串表示)合并为一个新的字符串

find(str, beg=0 end=len(string))
检测 str 是否包含在字符串中，如果指定范围 beg 和 end ，则检查是否包含在指定范围内，如果包含返回开始的索引值，否则返回-1

index(str, beg=0, end=len(string))
跟find()方法一样，只不过如果str不在字符串中会报一个异常.

## 列表：append,pop,insert,remove,reverse,sort,count,index…
增：
list.append(obj)
在列表末尾添加新的对象
list.insert(index, obj)
将对象插入列表

删：
list.pop([index=-1])
移除列表中的一个元素（默认最后一个元素），并且返回该元素的值
list.remove(obj)
移除列表中某个值的第一个匹配项

改：
list.reverse()

反向列表中元素
#将字符串反转
st=List(s)
result=“”.join(st.reverse())
1
2
3
4
查：
list.sort(cmp=None, key=None, reverse=False)
对原列表进行排序
list.count(obj)
统计某个元素在列表中出现的次数

## 字典：get,keys,values,pop,popitems,clear,update,items…

查：
radiansdict.get(key, default=None)
返回指定键的值，如果值不在字典中返回default值
radiansdict.keys()
返回一个迭代器，可以使用 list() 来转换为列表
radiansdict.values()
返回一个迭代器，可以使用 list() 来转换为列表
radiansdict.items()
以列表返回可遍历的(键, 值) 元组数组

删：
pop(key[,default])
删除字典给定键 key 所对应的值，返回值为被删除的值。key值必须给出。 否则，返回default值
popitem()
随机返回并删除字典中的一对键和值(一般删除末尾对)
radiansdict.clear()
删除字典内所有元素

改：
radiansdict.update(dict2)
把字典dict2的键/值对更新到dict里

## 谈谈你对面向对象的理解？
面向对象的程序设计的核心是对象（上帝式思维），要理解对象为何物，必须把自己当成上帝，上帝眼里世间存在的万物皆为对象，
不存在的也可以创造出来。对象是特征和技能的结合，其中特征和技能分别对应对象的数据属性和方法属性。
优点是：解决了程序的扩展性。对某一个对象单独修改，会立刻反映到整个体系中，如对游戏中一个人物参数的特征和技能修改都很容易。
缺点：可控性差，无法向面向过程的程序设计流水线式的可以很精准的预测问题的处理流程与结果，
面向对象的程序一旦开始就由对象之间的交互解决问题，即便是上帝也无法预测最终结果。
应用场景：需求经常变化的软件，一般需求的变化都集中在用户层，互联网应用，企业内部软件，游戏等都是面向对象的程序设计大显身手的好地方。

## 面向对象中super的作用？

super在面向对象继承类中代指父类，书写方法super(类名,self).属性或者方法或super().属性或者方法
super方法可以增加类之间调用的灵活性，当父类名发生变化时不必修改
super方法在类的多继承时可以简化代码，避免代码冗余
super机制里可以保证公共父类仅被执行一次，执行的顺序遵循MRO，广度优先查询方法

## 解释继承
一个类继承自另一个类，也可以说是一个孩子类/派生类/子类，继承自父类/基类/超类，同时获取所有的类成员（属性和方法）。
继承使我们可以重用代码，并且还可以更方便地创建和维护代码。Python 支持以下类型的继承：

单继承- 一个子类类继承自单个基类
多重继承- 一个子类继承自多个基类
多级继承- 一个子类继承自一个基类，而基类继承自另一个基类
分层继承- 多个子类继承自同一个基类
混合继承- 两种或两种以上继承类型的组合

## 列举 Python2和Python3的区别？

- 默认编码

2–>ascii，3–>utf-8

- print的区别

python2中print是一个语句，不论想输出什么，直接放到print关键字后面即可。python3里，print()是一个函数，像其他函数一样，print()需要你将要输出的东西作为参数传给它。

- input的区别：

python2有两个全局函数，用在命令行请求用户输入。
第一个叫input()，它等待用户输入一个python表达式(然后返回结果)。
第二个叫做raw_input(),用户输入什么他就返回什么。 python3 通过input替代了他们。

- 字符串：

python2中有两种字符串类型：Unicode字符串和非Unicode字符串。Python3中只有一种类型：Unicode字符串。

- xrange()

python2里，有两种方法获得一定范围内的数字：range(),返回一个列表，还有xrange(),返回一个迭代器。
python3　里，range()返回迭代器，xrange()不再存在。

## ascii、unicode、utf-8、gbk 区别？(知道即可)

ASCII码：使用一个字节编码，所以它的范围基本是只有英文字母、数字和一些特殊符号 ，只有256个字符。
Unicode：能够表示全世界所有的字节
GBK：是只用来编码汉字的，GBK全称《汉字内码扩展规范》，使用双字节编码。
UTF-8：是一种针对Unicode的可变长度字符编码，又称万国码。

## 常见的HTTP请求方法
 get：让后端传给前端想要的数据
 post：前端传数据给后端让其添加记录
 put：前端传数据和筛选数据的依据给后端让其更新记录
 patch：前端传局部数据和筛选数据的依据给后端让其更新局部记录
 delete：前端传筛选数据的依据给后端让其删除记录
 options：是跨域问题中的复杂请求预检的请求

## 什么是jwt？ 它的优势是什么？
复制代码
 jwt的全称是json web token， 一般用于用户认证
 jwt的实现原理：
     - 用户登录成功之后，会给前端返回一段token。
     - token是由.分割的三段组成。
         - 第一段header：类型+算法+base64url加密
         - 第二段paylod：用户信息+超时时间+base64url加密
         - 第三段sign：hs256（前两段拼接）加密 + base64url
     - 以后前端再次发来信息时
         - 超时验证
         - token合法性校验
 优势：
     - token只在前端保存，后端只负责校验。
     - 内部集成了超时时间，后端可以根据时间进行校验是否超时。
     - 由于内部存在hash256加密，所以用户不可以修改token，只要一修改就认证失败。


## django请求的生命周期？
. 当用户在浏览器中输入url时,浏览器会生成请求头和请求体发给服务端
请求头和请求体中会包含浏览器的动作(action),这个动作通常为get或者post,体现在url之中.
. url经过Django中的wsgi,再经过Django的中间件,最后url到过路由映射表,在路由中一条一条进行匹配,
一旦其中一条匹配成功就执行对应的视图函数,后面的路由就不再继续匹配了.
. 视图函数根据客户端的请求查询相应的数据.返回给Django,然后Django把客户端想要的数据做为一个字符串返回给客户端.
. 客户端浏览器接收到返回的数据,经过渲染后显示给用户.

## cookie和session的区别：
.cookie:
cookie是保存在浏览器端的键值对,可以用来做用户认证
.session：
将用户的会话信息保存在服务端,key值是随机产生的字符串,value值是session的内容
依赖于cookie将每个用户的随机字符串保存到用户浏览器上
Django中session默认保存在数据库中：django_session表
flask,session默认将加密的数据写在用户的cookie中

## django中csrf的实现机制
第一步：django第一次响应来自某个客户端的请求时,后端随机产生一个token值，把这个token保存在SESSION状态中;同时,后端把这个token放到cookie中交给前端页面；
第二步：下次前端需要发起请求（比如发帖）的时候把这个token值加入到请求数据或者头信息中,一起传给后端；Cookies:{csrftoken:xxxxx}
第三步：后端校验前端请求带过来的token和SESSION里的token是否一致。

## 简述什么是FBV和CBV？
FBV和CBV本质是一样的，基于函数的视图叫做FBV，基于类的视图叫做CBV
在python中使用CBV的优点：
- .提高了代码的复用性，可以使用面向对象的技术，比如Mixin（多继承）
- .可以用不同的函数针对不同的HTTP方法处理，而不是通过很多if判断，提高代码可读性

## 列举django的内置组件？
.Admin是对model中对应的数据表进行增删改查提供的组件
.model组件：负责操作数据库。model组件的方法
.form组件：1.生成HTML代码2.数据有效性校验3校验信息返回并展示
.ModelForm组件即用于数据库操作,也可用于用户请求的验证


## Django如何实现websocket？
django实现websocket官方推荐大家使用channels。channels通过升级http协议 升级到websocket协议。保证实时通讯。也就是说，我们完全可以用channels实现我们的即时通讯。而不是使用长轮询和计时器方式来保证伪实时通讯。他通过改造django框架，使django既支持http协议又支持websocket协议。
     

# DRF

## 序列化时many=True和many=False的区别？
复制代码
在使用APIView时，数据展示的时候序列化多个数据的时候用many=True，序列化单个数据的时候用many=False

## drf组件中节流的实现方式？
复制代码
匿名用户通过ip地址来控制访问频率，已登录用户通过id来控制
 首先要设置配置文件：
 - 也可以设置全局，
     "DEFAULT_THROTTLE_CLASSES":["rest_framework.throttling.AnonRateThrottle",]
 - 设置访问频率——一分钟10次
     "DEFAULT_THROTTLE_RATES": {
             "anon":"10/m"
         }
 - 实现原理
     把所有登录记录时间放在一个列表中，当用户请求网页的时候，用现在的时间减去约束的时间间隔，然后把小于这个时间记录排除，再计算出时间间隙的记录条数，
     如果其中的条数小于规定的条数则可以访问并且把当前时间添加进列表中，如果大于或等于则不让其访问。
 - 具体流程
     当用户请求网页的时候，后台允许该界面的url中的as_views()，运行源码的APIView中的dispatch方法，运行initial方法，里面的check_throttles方法，
     循环运行节流类中的allow_request方法，但是AnonRateThrottle等类中没有，去执行SimpleRateThrottle类中的allow_request方法，里面就是实现原理中的代码，
     如果可以访问返回True，如果不让访问则返回False，之后返回check_throttles，如果是False则运行SimpleRateThrottle类中的wait方法得到需要等待的时间在页面上显示！

## drf组件权限的实现过程？

 当用户执行一个业务的时候，运行了as_view方法
 1、进入了APIView类的dispatch方法
 2、进入self.initial方法中的self.check_permissions(request)方法
 3、里面执行了for循环，把每个权限类实例化对象，
 4、执行自己定义的权限类里面的has_permission方法，里面会判断request.user是否存在
 5、不存在就返回False，存在就返回True
 6、之后执行self.permission_denied报错方法，返回的是False就报错，可以自定义报错信息，在has_permission方法中写message = {"status": False, "error": "登录成功之后才能评论"}，
    就实现了自定义报错
 7、如果返回的是True就让他进入功能

 ##  drf有哪些视图类？以及他们之间的区别？
 
 第一种：APIView
     第一种遵循了CBV的模式，里面的功能比较多但是需要自己写的代码也有很多
     提供了免除csrf认证，版本处理、认证、权限、节流、解析器、筛选器、分页、序列化、渲染器
 ​
 ​
 第二种：ListAPIView,RetrieveAPIView,CreateAPIView,UpdateAPIView,DestroyAPIView
     第二种则在第一种的基础上，封装了许多我们需要自己的写的代码，许多功能的实现只需要给专属的变量名赋值就可以实现该功能
 ​
 ​
 第三种：GenericViewSet、ListModelMixin,RetrieveModelMixin,CreateModelMixin,UpdateModelMixin,DestroyModelMixin
     第三种则重构了APIView中的as_view()方法，结合请求方法和不同Mixin类的方法名从而进行执行不同的功能。与前面两种最主要的区别是url路由中as_view()方法中需要传值。
     目前使用的主要目的是把第二种的bug(查询全部数据的功能和查询单个数据的功能无法在一个类中实现)实现在一个类中！

## 什么是restful规范
复制代码
 restful规范是一套规则，用于API中之间进行数据交换的约定。
 它的具体规则有：
 1、https代替http，保证数据传输时的安全
 2、在url中一般要体现api标识，这样看到url就知道他是一个api
     建议：https://www.zdr.com/api/...（不会存在跨域问题）
 3、在接口中要体现版本，可放在url中也可以放在请求头中
     建议：https://www.zdr.com/api/v1/...
 4、restful也称为面向资源编程，视网络上的一切都是资源，对资源可以进行操作，所以一般资源都用名词
 5、如果要加入一些筛选条件，可以添加在url中
     https://www.zdr.com/api/v1/user/?page=1&type=9
 6、根据method请求方法不同做不同操作
     get/post/put/patch/delete
 7、根据请求方法不同返回不同的值
     get全部/post返回添加的值/put/patch/delete不返回值
 8、给用户返回状态码
     - 200——成功
     - 300——301是永久重定向，302是临时重定向
     - 400——403拒绝中间件的csrftoken认证 /404找不到
     - 500——服务端代码错误
 9、操作异常时，要返回错误信息
     {
         error: "Invalid API key"
     }
 10、对于下一个请求要返回一些接口： Hypermedia AP
     {
         'id':2,
         'name':'alex',
         'age':19,
         'depart': "http://www.luffycity.com/api/user/30/"
     }

## 什么是前后端分离
复制代码
 前端：整个页面显示以及页面的交互逻辑，用ajax和node作为交互。其中node作为中间层
 后端：提供api接口，利用redis保存session，与数据库交互
 ​
 步骤：
 1)客户端（浏览器）向node请求页面交互。
 2)node向后端（这里用java）转发请求。java在发送请求到数据库。
 3)java返回结果给node。node返回页面，提供数据。
 ​
 node:
     node主要是为了分层开发，前端不需要知道后端是怎么提供数据，怎么操作。后端也不需要知道node是怎么操作，前端是怎么部署。前端可以利用node自己作处理。
 node本身有着异步,非阻塞I／o。在处理并发量比较大的数据请求上有很大的优势。

