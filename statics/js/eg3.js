/**
 * Created by Administrator on 2017/12/4.
 */

var eg = {};
// 申明一个对象当作命名空间使用
// 定义一个公共函数获取id元素 减少代码量 提高复用率
eg.$ = function (id) {
    return document.getElementById(id);
};
// 定义一个公共函数来获取制定class的名称元素集合，能兼容各浏览器
eg.getElementsByClassName = function (className, element) {
  if (document.getElementsByClassName){
      return (element || document).getElementsByClassName(className)
  }
  var children = (element || document).getElementsByTagName('*');
  var elements = [];
  for (var i =0; i <children.length; i++){
      var child = children[i];
      var classNames = child.className.split(' ');
      for (var j=0; j < classNames.length; j++){
          if (classNames[j] == className){
              elements.push(child);
              break;
          }
      }
  }
  return elements;
};
// 定义一个公共函数解决监听事件兼容问题
eg.addListener = function (target, type, handler) {
  if (target.addEventListener){
      target.addEventListener(type, handler, false);
  }else if (target.attachEvent) {
      target.attachEvent("on" + type, handler);
  }else{
      target["on" + type] = handler;
  }



};
eg.data = [
  ["/statics/imges/photo01.jpg", "/statics/imges/thumb01jpg"],
    ["/statics/imges/photo02.jpg", "/statics/imges/thubm02.jpg"],
    ["/statics/imges/photo03.jpg", "/statics/imges/thumb03.jpg"],
    ["/statics/imges/photo04.jpg", "/statics/imges/thumb04.jpg"],
    ["/statics/imges/photo05.jpg", "/statics/imges/thumb05.jpg"],
    ["/statics/imges/photo06.jpg", "/statics/imges/thumb06.jpg"],
    ["/statics/imges/photo07.jpg", "/statics/imges/thumb07.jpg"]
];
eg.shownumberswatching = 0;
eg.groupNumber = 1;
eg.groupSize = 6;
eg.showThubm = function (group) {
    var ul = eg.$("smallPhotosList");
    ul.innerHTML = '';
    var start = (group-1)*eg.groupSize;
    var end = group*eg.groupSize;
    for (var i=start;(i<end&&i<eg.data.length); i++){
        var li = document.createElement("li");
        li.innerHTML = '<img src="'+eg.data[i][1]+'"id="thumb'+i+'"width="80" height="40"/>';
        (function (i) {
            eg.addListener(li, "click", function(){
                eg.showNumber = i;
                eg.showBig();
            });

        })(i);
        ul.appendChild(li);
    }
};
eg.showBig = function () {
    eg.$("bigPhotoSrc").src = eg.$("thumb"+eg.showNumber).src.replace("thumb", "photo");
};
eg.init = function () {
    eg.showThubm(1);
};
eg.init();