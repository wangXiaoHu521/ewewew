/**
 * Created by ajiao on 2017/11/24.
 */

/*// TODO 1. 获取单个元素
function getElement(arm){
   var obj = document.getElementById(arm);
   console.log(obj);
   return obj;
}

// TODO 2. 获取多个元素 document.getElementsByName
function getElements(arm){
    var arr = [];
    var eles = document.getElementsByName(arm);
    for(var i = 0; i < eles.length; i++){
        arr[i] = eles[i];
    }
    return arr;
}

// TODO 3. 获取多个元素 document.getElementsByClassName  .className
function getElementsByClassName(arm){
    var arr = [];
    if(arm.indexOf(".")>-1){
        var eles = document.getElementsByClassName(arm.substring(1));
        for(var i = 0; i < eles.length; i++){
            arr[i] = eles[i];
        }
    }
    return arr;
}*/


// TODO 4. 三者合并 统一天下
/*function $(arm) {
    var arr = [];
    if (arm.indexOf("#") > -1) { // TODO 获取单个  #id
        var obj = document.getElementById(arm.substring(1));
        return obj;
    } else if (arm.indexOf(".") > -1) { // TODO  通过 getElementsByClassName 获取多个 .class
        var eles = document.getElementsByClassName(arm.substring(1));
        for (var i = 0; i < eles.length; i++) {
            arr[i] = eles[i];
        }
        return arr;
    } else { // TODO  通过 getElementsByName 获取多个  name
        var eles = document.getElementsByName(arm);
        for (var i = 0; i < eles.length; i++) {
            arr[i] = eles[i];
        }
        return arr;
    }
}*/

// TODO 5. 保证一个function 只有一个 return
function $(arm) {
    var arr = [];
    if (arm.indexOf("#") > -1) { // TODO 获取单个  #id

        var obj = document.getElementById(arm.substring(1));
        arr[0] = obj;
       // return arr;
    } else if (arm.indexOf(".") > -1) { // TODO  通过 getElementsByClassName 获取多个 .class
        var eles = document.getElementsByClassName(arm.substring(1));
        for (var i = 0; i < eles.length; i++) {
            arr[i] = eles[i];
        }
        // return arr;
    } else { // TODO  通过 getElementsByName 获取多个  name
        var eles = document.getElementsByName(arm);
        for (var i = 0; i < eles.length; i++) {
            arr[i] = eles[i];
        }
       // return arr;
    }
    return arr;
}