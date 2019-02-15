class modules {
    /**
     * @description html转成字符串
     * @param {*} htmlDOM htmlDOM
     * @returns {string}
     */
    public htmlToStirng(htmlDOM: any): string {
        let temp = document.createElement("div");
        temp.appendChild(htmlDOM);
        return temp.innerHTML
    }
    /**
     * @description 字符串转html
     * @param {*} htmlString html字符串
     * @returns {*}
     */
    public stringToHtml(htmlString: any): any {
        let temp = document.createElement("div");
        temp.innerHTML = htmlString;
        return temp.children[0];
    }
    /**
     * @description 获取url中指定参数值
     * @param {string} param 参数名称
     * @returns {(string | null)}
     */
    public getQueryParam(param: string): string | null {
        let r = window.location.search.substr(1).match(new RegExp("(^|&)" + param + "=([^&]*)(&|$)")); //search,查询？后面的参数，并匹配正则
        if (r != null) {
            return decodeURIComponent(r[2]);
        } else {
            return null;
        }
    }
    /**
     * @description 随机生成色值
     * @returns {string}
     */
    public getRandomColor(): string {
        return '#' +
            (function (color) {
                return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
                    (color.length == 6) ? color : arguments.callee(color);
            })('');
    }
    /**
     * @description 获取当前浏览器版本
     * @returns {*}
     */
    public getBrowserType(): any {
        let userAgent = navigator.userAgent;
        let isOpera = userAgent.indexOf("Opera") > -1;
        let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
        let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        let isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
        let isFF = userAgent.indexOf("Firefox") > -1;
        let isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1;
        let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;

        if (isIE) {
            let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            let fIEVersion = parseFloat(RegExp["$1"]);
            if (fIEVersion == 7) return "IE7"
            else if (fIEVersion == 8) return "IE8";
            else if (fIEVersion == 9) return "IE9";
            else if (fIEVersion == 10) return "IE10";
            else return "IE7以下"
        }
        if (isIE11) return 'IE11';
        if (isEdge) return "Edge";
        if (isFF) return "FF";
        if (isOpera) return "Opera";
        if (isSafari) return "Safari";
        if (isChrome) return "Chrome";
    }
    /**
     * @description 获取相对路径的绝对路径
     * @param {string} url 相对路径
     * @returns {string} 绝对路径
     */
    public relativePathToFullPath(url: string): string {
        let img = new Image();
        img.src = url; // 设置相对路径给image, 此时会发送出请求
        url = img.src; // 此时相对路径已经变成绝对路径
        img.src = ''; // 取消请求
        return url;
    };

}

export {
    modules as OtherMod
}