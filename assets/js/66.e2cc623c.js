(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{631:function(s,n,a){"use strict";a.r(n);var t=a(33),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("在 Linux 环境下搭建 mongodb 3.6 环境，并将mongodb 添加到服务项里，同时实现开机启动的目的.")]),s._v(" "),a("h1",{attrs:{id:"下载文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载文件"}},[s._v("#")]),s._v(" 下载文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.4.tgz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"开始安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[s._v("#")]),s._v(" 开始安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf mongodb-linux-x86_64-3.6.4.tgz \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到/usr/local/mongodb/目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" mongodb-linux-x86_64-3.6.4 /usr/local/mongodb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MONGODB_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MONGODB_HOME}")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使之生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 /usr/local/mongodb 文件夹下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/mongodb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" mongodb.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定数据库路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dbpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/data/db\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定MongoDB日志文件，注意是指定文件不是目录 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("logpath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/log/out.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定服务端口号，默认端口27017")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以守护进程的方式运行MongoDB，创建服务器进程，即后台运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("fork")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绑定服务IP，若绑定127.0.0.1，则只能本机访问；若绑定0.0.0.0，则所有人都可以访问。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bind_ip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 /usr/local/mongodb/bin")]),s._v("\n./mongod --config /usr/local/mongodb/mongodb.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动成功")]),s._v("\nabout to fork child process, waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" server is ready "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" connections.\nforked process: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20058")]),s._v("\nchild process started successfully, parent exiting.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加 mongo 命令软连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/mongodb/bin/mongo /usr/local/bin/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证 mongo 版本")]),s._v("\nmongo --version\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("p",[s._v("启动成功后，访问http://127.0.0.1:27017/ , 可以看到:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/n8V3518.png",alt:""}})]),s._v(" "),a("h1",{attrs:{id:"配置开机启动及添加到系统服务中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置开机启动及添加到系统服务中"}},[s._v("#")]),s._v(" 配置开机启动及添加到系统服务中")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 mongod 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/rc.d/init.d/mongodb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加以下内容")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chkconfig:         2345 75 15")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# description:       mongodb")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### BEGIN INIT INFO")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Provides:     mongodb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Required-Start:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Required-Stop:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default-Start:        2 3 4 5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Default-Stop:         0 1 6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Short-Description: mongodb")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Description: mongo db server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### END INIT INFO")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EXE_FILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/bin/mongod\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONFIG_FILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/mongodb/mongodb.conf\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#. /lib/lsb/init-functions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MONGOPID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mongod"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -x "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$EXE_FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n  start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$EXE_FILE")]),s._v(" --config "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONFIG_FILE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONGOPID")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -15 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MONGOPID")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mongod\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    log_success_msg "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: /etc/init.d/mongodb {start|stop|status}"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存完成之后，添加脚本执行权限，命令如下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x  /etc/rc.d/init.d/mongodb \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动MongoDB ，会打印出启动日志.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mongodb start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭MongoDB服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mongodb stop\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证mongoDB是否启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i :27017\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加到防火墙列表")]),s._v("\n/sbin/iptables -I INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(" -j ACCEPT\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存到防火墙列表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables save\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启防火墙")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br")])]),a("h1",{attrs:{id:"参考学习链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考学习链接"}},[s._v("#")]),s._v(" 参考学习链接")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/pfnie/articles/6759105.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux下MongoDB安装和配置详解"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/ztx114/article/details/80061932",target:"_blank",rel:"noopener noreferrer"}},[s._v("服务器搭建--Linux安装MongoDB3.6.4"),a("OutboundLink")],1)]),s._v(" "),a("h1",{attrs:{id:"centos-redis-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-redis-安装"}},[s._v("#")]),s._v(" centos redis 安装")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000016012597",target:"_blank",rel:"noopener noreferrer"}},[s._v("(转)Centos下Redis的安装与配置"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),a("p",[s._v("1、CC 命令未识别\n这里要安装 gcc")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc automake autoconf libtool "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc gcc-c++\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("2、redis安装zmalloc.h:50:31: 致命错误：jemalloc/jemalloc.h：没有那个文件或目录\n"),a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2019/07/20a89f727ff3db01.png",alt:""}})]),s._v(" "),a("p",[s._v("解决方案：\n执行命令：make MALLOC=libc")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MALLOC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("libc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);