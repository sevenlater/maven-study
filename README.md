### 说明

这里记录在Maven的学习过程中的一些代码操作和搭架的一些小工程。

### 目录说明

#### javaee-web-archetype

由于maven自带的archetypes并未找到常用的webapp的目录结构，这里自己学习自己创建了一个。目录结构如下:

```
└── javaee-web-archetype
    ├── pom.xml
    ├── src
    │   ├── main
    │   │   ├── java
    │   │   │   └── com
    │   │   │       └── xianzhi
    │   │   │           └── javaee-web
    │   │   │               └── App.java
    │   │   ├── resources
    │   │   │   └── config.properties
    │   │   └── webapp
    │   │       └── WEB-INF
    │   │           └── web.xml
    │   └── test
    │       ├── java
    │       │   └── com
    │       │       └── xianzhi
    │       │           └── javaee-web
    │       │               └── AppTest.java
    │       └── resources
    │           └── config.properties

```

有人感觉需要的话可以将工程下载后执行一下操作。

```
	1. cd {yourfolder}/javaee-web-archetype
	2. mvn clean archetype:create-from-project
	3. cd target/archetype
	4. mvn install // 将archetype安装在自己的库中，如果想要跟他人分享，使用mvn delopy
```