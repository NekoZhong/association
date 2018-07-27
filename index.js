var oInput = document.getElementsByTagName('input')[0];
var oUl = document.getElementsByTagName('ul')[0];

function debounce(func, wait, key) {
    var timer = null;

    var debounce = function () {
        var _this = this;
        var argus = arguments;
        if (key) {
            if (!timer) {
                func.apply(_this, argus);
                timer = setTimeout(function () {
                    timer = null;

                }, wait)
            }
        } else {
            timer = setTimeout(function () {
                func.apply(_this, argus);
            }, wait)
        }

    }
    debounce.cancel = function () {
        clearTimeout(timer);
        timer = null;
    }

    return debounce;
}

var setUser = debounce(show, 1000, false);

oInput.oninput = setUser;
function show() {
    var value = oInput.value;
    var oScript = document.createElement('script');
    oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value +'&cb=getData';
    document.body.appendChild(oScript);
    document.body.removeChild(oScript);
}

function getData(data) {
    var s = data.s;
    str = '';
    s.forEach(function(ele, index) {
        str += '<li><a href="https://www.baidu.com/s?wd=' + ele + '">' + ele +'</a></li>';
    })
    oUl.innerHTML = str;
}