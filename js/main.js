//==========页面加载完成后==========
function Start()
{
	//开发调试
	//alert("sss")
    //PicObj = JSON.parse(PicData);
    //alert(PicObj.sites.length);
}
//==========页面加载完成后==========
//==========小部件==========
/*功能开发中*/
function STOP()
{
    alert("功能开发中....")
}
/*随机数*/
function randomNum(minNum, maxNum)
{
    switch (arguments.length)
    {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
//==========小部件==========
//==========登录、注册、留言、通知==========
//登录
function PopLoginWindow()
{
    var LoginWindow = document.getElementById("LoginWindow");
    LoginWindow.style.display = "block";
}
function ClosePopLoginWindow()
{
    let LoginWindow = document.getElementById("LoginWindow");
    LoginWindow.style.display = "none";
}
//注册
function PopSignInWindow()
{
    var SignInWindow = document.getElementById("SignInWindow");
    SignInWindow.style.display = "block";
}
function ClosePopSignInWindow()
{
    let SignInWindow = document.getElementById("SignInWindow");
    SignInWindow.style.display = "none";
}
//留言
function PopMessagePaperWindow()
{
    var MessagePaperWindow = document.getElementById("MessagePaperWindow");
    MessagePaperWindow.style.display = "block";
}
function CloseMessagePaperWindow()
{
    let MessagePaperWindow = document.getElementById("MessagePaperWindow");
    MessagePaperWindow.style.display = "none";
}
//通知
function PopInformWindow()
{
    var PopInformWindow = document.getElementById("InformWindow");
    PopInformWindow.style.display = "block";
}
function CloseInformWindow()
{
    let PopInformWindow = document.getElementById("InformWindow");
    PopInformWindow.style.display = "none";
}
//==========登录、注册、留言、通知==========
//==========留言板、通知栏==========
function ClearMessage()
{
    document.getElementById('MessageBoard').innerHTML = "";
}
function SendMessage() 
{
    // 发送信息
    // 获得当前时间
    var now = new Date();
    var year = now.getFullYear();
    //得到年份
    var month = now.getMonth() + 1;
    //得到月份
    var date = now.getDate();
    //得到日期
    // var day = now.getDay();//得到周几
    var hour = now.getHours();
    //得到小时数
    var minute = now.getMinutes();
    //得到分钟数
    var second = now.getSeconds();
    //得到秒数
    var time = year + "年" + month + "月" + date + "日 " + hour + ":" + minute + ":" + second + " ";
    //获得用户信息
    var name = document.getElementById("MessagePaperName").value;
    var Email = document.getElementById("MessagePaperEmail").value;
    var text = document.getElementById("MessagePaperText").value;
    var txt = time + name + "(" + Email + ")" + "来信：" + text;
    console.log(txt);
    //创建p标签
    var p = document.createElement("hr");
    ///把txt内容追加到p结点上
    p.appendChild(document.createTextNode(txt));
    //追加或插入
    //在div里面找到p
    var ps = document.getElementById("MessageBoard").getElementsByTagName("p");
    if (ps.length > 0) 
    {
        //如果有，就是已经有了评论，插入到评论的前面
        document.getElementById("MessageBoard").insertBefore(p, ps[0]);
    }
    else {
        //否则，创建新的评论
        document.getElementById("MessageBoard").appendChild(p);
    }
    alert("成功！")
}
//==========留言板、通知栏==========
//==========全选/全不选/反选==========
//全选
function SelectPictureAllYes()
{
    var PictureShowPicCheckbox = document.getElementsByName("PictureShowPicCheckbox");
    for (var i = 0; i < PictureShowPicCheckbox.length; i++) {
        PictureShowPicCheckbox[i].checked = true;
    }
}
//全不选
function SelectPictureAllNo()
{
    var PictureShowPicCheckbox = document.getElementsByName("PictureShowPicCheckbox");
    for (var i = 0; i < PictureShowPicCheckbox.length; i++) {
        PictureShowPicCheckbox[i].checked = false;
    }
}
//反选
function SelectPictureAllReverse()
{
    var PictureShowPicCheckbox = document.getElementsByName("PictureShowPicCheckbox");
    for (var i = 0; i < PictureShowPicCheckbox.length; i++)
    {
        if (PictureShowPicCheckbox[i].checked == false) {
            PictureShowPicCheckbox[i].checked = true;
        }
        else {
            PictureShowPicCheckbox[i].checked = false;
        }
    }
}
//==========全选/全不选/反选==========
//==========轮播图==========
var timer, index = randomNum(1, 160);
PicObjHead = JSON.parse(PicData);
window.onload = showPic;
function showPic()
{
    document.getElementById("BannerPic").src = PicObjHead.sites[index].src;
    if (index < (PicObjHead.sites.length - 1)) {
        index++;
    }
    else {
        index = 1;
    }
    timer = setTimeout("showPic()", 1500);
}
function showNext() 
{
    clearTimeout(timer);
    showPic();
}
function showPre() 
{
    clearTimeout(timer);
    showPrepic();
}
function showPrepic() 
{
    if (index > 1) {
        index--;
    }
    else {
        index = 150;
    }
    document.getElementById("BannerPic").src = PicObj.sites[index].src;
    timer = setTimeout("showPrepic()", 1500);
}
//==========轮播图==========
//==========返回顶部==========
/**
    * JavaScript脚本实现回到页面顶部示例
    * @param speed 速度
    * @param stime 时间间隔 (毫秒)
    **/
function GotoTop(speed, stime) 
{
    speed = speed || 0.1;
    stime = stime || 10;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;
    if (document.documentElement) 
    {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;
    // 滚动条到页面顶部的水平距离
    var x = Math.max(x1, Math.max(x2, x3));
    // 滚动条到页面顶部的垂直距离
    var y = Math.max(y1, Math.max(y2, y3));
    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
    var speeding = 1 + speed;
    //scrollTo() 方法可把内容滚动到指定的坐标
    window.scrollTo(Math.floor(x  / speeding), Math.floor(y  / speeding));
    // 如果距离不为零, 继续调用函数
    if (x > 0 || y > 0) {
        var run = "GotoTop(" + speed + ", " + stime + ")";
        window.setTimeout(run, stime);
    }
}
//==========返回顶部==========
//==========悬浮广告==========
var adverTop;
//层距页面顶端距离
var adverLeft;
var adverObject;
//层对象
function FloatAdvertisingInix()
{
    adverObject = document.getElementById("FloatAdvertising");
    //获得层对象
    if (adverObject.currentStyle)
    {
        adverTop = parseInt(adverObject.currentStyle.top);
        adverLeft = parseInt(adverObject.currentStyle.left);
    }
    else
    {
        adverTop = parseInt(document.defaultView.getComputedStyle(adverObject, null).top);
        adverLeft = parseInt(document.defaultView.getComputedStyle(adverObject, null).left);
    }
}
function FloatAdvertisingMove()
{
    var scrollTop = parseInt(document.body.scrollTop) || parseInt(document.documentElement.scrollTop);
    var scrollLeft = parseInt(document.body.scrollLeft) || parseInt(document.documentElement.scrollLeft);
    adverObject.style.top = adverTop + scrollTop + "px";
    adverObject.style.left = adverLeft + scrollLeft + "px";
}
window.onload = FloatAdvertisingInix;
window.onscroll = FloatAdvertisingMove;
function CloseFloatAdvertising() 
{
    document.getElementById("FloatAdvertising").style.display = "none";
}
//==========悬浮广告==========
//==========图片展示==========
function LoadPicture()
{
    var EndHtml = '';
    PicObj = JSON.parse(PicData);
    for (var i = 0; i < 30; i++) 
    {
        var Num = randomNum(1, 160);
        var a = "<a href=\"" + PicObj.sites[Num].src + "\"target=\"blank\">";
        var img = "<img src=\"" + PicObj.sites[Num].src + "\" />";
        var input = " <input type=\"checkbox\"value=\"Num\"name=\"PictureShowPicCheckbox\" />";
        var Link = "<div class=\"PictureShowPic\">" + a + img + input + "</div>";
        EndHtml += Link;
    }
    document.getElementById("PictureShow").innerHTML += EndHtml;
}
//==========图片展示==========
//==========本地搜索函数==========
function LocalSearch(WordButton)//接受按钮对象
{
    var WordInput = document.getElementById("SearchInput").value;
    if (WordInput == "" && WordButton.name == "") {//如果按钮对象的值 和 搜索输入框的值都是空
        alert("请输入要搜索的内容。");
        return false;
    }
    if ( WordInput != "") {
        word = WordInput;
    }
    if (WordButton.name != "") {
        word = WordButton.name;
    }
    SearchObj = JSON.parse(PicData);
    var EndHtml = '';
    for (var i = 0; i < SearchObj.sites.length - 1; i++) 
    {
        if (PicObj.sites[i].describe.indexOf(word) >= 0)
        {
            var a = "<a href=\"" + PicObj.sites[i].src + "\"target=\"blank\">";
            var img = "<img src=\"" + PicObj.sites[i].src + "\" />";
            var input = "<input type=\"checkbox\"value=\"Num\"name=\"PictureShowPicCheckbox\" />";
            var Link = "<div class=\"PictureShowPic\">" + a + img + input + "</div>";
            EndHtml += Link;
        }
    }
    if (EndHtml == "") {
        alert("站内没搜索到有关\"" + word + "\"的图片，请尝试站外搜索。");
        return false;
    }
    document.getElementById("PictureShow").innerHTML = "";
    document.getElementById("PictureShow").innerHTML = EndHtml;
}
//==========本地搜索函数==========
//==========搜索前判断==========
function BeforeSearch()
{
    var word = document.getElementById("SearchInput").value;
    if (word == "") {
        alert("请输入要搜索的内容。");
        return false;
    }
    else {
        return true ();
    }
}
//==========搜索前判断==========
