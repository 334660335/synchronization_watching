# synchronization_watching
Able to watch the same video on different device networks
能够在不同的设备和网络上观看同一个视频

The project is still under construction,this is a simaple demo
项目还在构思中，这是一个简单的demo

Introduce:
介绍：

I am lazy, my idea is use socket io send order to control js player button
使用的方法也比较偷懒，思路就是，使用socket.io发送指令，控制播放的JS按钮

Mainly for watch movie with my firends.
主要是为了和异地的妹子同时看电影，所以才有这个想法，

Hope like-minded developers can participate in the improvement or provide better solutions.
希望志同道合的开发者们能够参与完善或者提供更好的方案

My english writing ability is very poor, hope understand, thank you for your support
本人才疏学浅，英语文字功底很差，希望理解，谢谢大家的支持

Problems:
遇到的问题：
	1.Play some delay
	1.播放存在延迟

Step:
配置步骤：
	1.Registered a jwplayer.key on https://support.jwplayer.com
	1.在 https://support.jwplayer.com 注册一个jwplayer.key
	
	2.download socket io package and set the listen
	2.下载相应的socket.io，打开服务端口监听
	
	3.open the browser and listen the port
	3.打开浏览器同时监听一个端口
	
	4.input '2' into input box
	4.在输入框框输入2即是播放

Testing:
测试机型：
	PC 			已通过	/ pass
	Android 	部分机型通过	/ partly through
	IOS			safari 通过，但在ipad上有问题  / iphone safari pass . ipad safari not work

Thanks:
鸣谢：
	https://support.jwplayer.com
