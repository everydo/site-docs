---
created: 2010-06-02 09:58
creator: 小罗
description: ''
title: 易度文档系统程序目录说明
---
=================================
易度文档管理系统程序目录说明
=================================

通过易度提供的安装包，根据提示安装成功后，会在相应的磁盘自动建立以下目录。

例如E:\EDO，您可以通过以下说明简单了解一下易度文档管理系统的目录构成以及一些重要的目录说明。

::

  E:\EDO
  ├─Apache
  │  ├─bin
  │  ├─conf
  │  └─logs
  ├─app.edo
  │  ├─bin
  │  ├─buildout-cache
  │  ├─cache
  │  ├─develop-eggs
  │  ├─eggs
  │  └─etc
  ├─backup
  ├─backups
  ├─bin
  ├─cwRsync
  ├─data
  │  ├─frs
  │  └─zodb
  ├─fonts
  ├─logs
  ├─python
  └─temp

Apache:
===========
Apache所在的目录


|  bin: apache二进制程序目录
|  config: apache 配置文件目录
|  logs: 所有日志的存放目录


App.edo
===========
易度系统主程序所在目录

|  bin: 实例运行的二进制存放目录
|  cache: apache 调用的静态文件存放目录
|  eggs: 易度主程序的产品区
|  log: 日志存放目录
|  buildout-cache: 一些产品包的存放目录


cwRsync
=============
备份工具rsync的主目录

backup  
===========
页面预览缓存目录

backups
==========
备份目录

python
============
Python2.5目录

temp
============
临时文件夹,安装升级程序时会使用到该目录

data  
============
默认数据存放目录

|   frs: 文件系统备份
|   zodb: zeo数据备份存放位置   
| 

| 相关问题: 
|   `1.易度文档系统的使用端口说明？ <port.rst>`_
|   `2.怎么安装易度文档管理系统？ <howto_install.rst>`_
| 

