export const USER_STORE = "@@";
export const RECORD_PATH = "@_@_@";

/**
 * 防抖函数：连续多次重复动作，只执行一次
 * @param {执行方法} fn 
 * @param {间隔时间} t 
 */

export const Debounce = (fn, t) => {
    let delay = t || 500;
    let timer;
    return function() {
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    }
};

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = window.btoa(window.encodeURIComponent(JSON.stringify(content)));
    } else {
        content = window.btoa(window.encodeURIComponent(content));
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return localStorage.getItem(name) ? JSON.parse(decodeURIComponent(window.atob(localStorage.getItem(name)))) : "";
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

export const setSession = (key, value) => {
    if (!key) return
    if (typeof value !== 'string') {
        value = window.btoa(window.encodeURIComponent(JSON.stringify(value)));
    } else {
        value = window.btoa(window.encodeURIComponent(value));
    }
    window.sessionStorage.setItem(key, value)
}

export const getSession = key => {
    if (!key) return
    return sessionStorage.getItem(key) ? JSON.parse(decodeURIComponent(window.atob(sessionStorage.getItem(key)))) : "";
}

export const removeSesssion = key => {
    if (!key) return
    window.sessionStorage.removeItem(key)
}

export const getRecordPathParams = path => {
    return getSession(RECORD_PATH) ? getSession(RECORD_PATH)[path] : {}
}

export const setRecordPathParams = (path, params) => {
    let recordObj = getSession(RECORD_PATH) || {};
    if (Object.keys(params).length > 0) {
        recordObj[path] = params;
    }
    setSession(RECORD_PATH, recordObj);
}

/**
 * 数组深拷贝
 */
export const deepCopy = obj => {
    // 只拷贝对象
    if (typeof obj !== 'object') return;
    // 根据obj的类型判断是新建一个数组还是一个对象
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        // 遍历obj,并且判断是obj的属性才拷贝
        if (obj.hasOwnProperty(key)) {
            // 判断属性值的类型，如果是对象递归调用深拷贝
            newObj[key] = (obj[key] && typeof obj[key] === 'object') ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}

/**
 * 获取文件格式
 * @param {*} filepath 
 */
export const getFileExt = filepath => {
    if (filepath != '') {
        if (filepath.indexOf('?') > -1) {
            filepath = filepath.split('?')[0];
        }
        var pos = '.' + filepath.replace(/.+\./, '');
        return pos;
    }
    return '';
}

export const delayCall = (you_want_time, func) => {
    var _time = setTimeout(function() {
        func();
        clearTimeout(_time);
        _time = null;
    }, you_want_time);
};

export const uploadDefaultCover = {
    name: "food.jpg",
    url: "~@/../static/images/default_cover.jpg",
    splitUrl: "~@/../static/images/default_cover.jpg"
};

export const getDefaultCover = url => {
    return url.search("default_cover.jpg") !== -1 ? "~@/../static/images/default_cover.jpg" : url
}

export const getDefaultBanner = url => {
    return url.search("default_cover.jpg") !== -1 ? "~@/../static/images/default_banner.jpg" : url
}

export const disabledSecond = str => {
    if (str.match(new RegExp(/(:)/g)).length >= 2) {
        str = str.substr(0, str.length - 3)
    }
    return str;
}