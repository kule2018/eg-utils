class modules {
  /**
   * @description 数组元素去重
   * @param {Array < any >} arr
   * @returns {Array < any >}
   */
  public arrUnique(arr: Array < any > ): Array < any > {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (temp.indexOf(arr[i]) == -1) {
        temp.push(arr[i]);
      }
    }
    return temp;
  }
  /**
   * @description 数组元素排序
   * @param {*} arr 数组
   * @param {number} type 1-降序  2-升序  3-随机
   * @returns {Array < any >}
   */
  public arrSort(arr: any, type: number): Array < any > {
    return arr.sort(function (a: any, b: any): any {
      switch (type) {
        case 1:
          return b - a;
        case 2:
          return a - b;
        case 3:
          return Math.random() - 0.5;
        default:
          return arr;
      }
    })
  }
  /**
   * @description 删除指定的数组元素
   * @param {Array < any >} arr
   * @param {*} ele
   * @returns {Array < any >}
   */
  public arrRemove(arr: Array < any > , ele: any): Array < any > {
    let i = arr.indexOf(ele);
    i > -1 ? arr.splice(i, 1) : null
    return arr;
  }
  /**
   * @description 获得两个数组的并集
   * @param {Array < any >} a
   * @param {Array < any >} b
   * @returns {Array < any >}
   */
  public arrUnion(a: Array < any > , b: Array < any > ): Array < any > {
    return this.arrUnique(a.concat(b));
  }
  /**
   * @description 获得两个数组的交集
   * @param {Array < any >} a
   * @param {Array < any >} b
   * @returns {Array < any >}
   */
  public arrIntersect(a: Array < any > , b: Array < any > ): Array < any > {
    return b.filter(function (v) {
      return a.indexOf(v) !== -1
    })
  }
  /**
   * @description 数组元素最大值（number）
   * @param {Array < number >} arr
   * @returns {number}
   */
  public arrMax(arr: Array < number > ): number {
    return Math.max.apply(null, arr);
  }
  /**
   * @description 数组元素最小值（number）
   * @param {Array < number >} arr
   * @returns {number}
   */
  public arrMin(arr: Array < number > ): number {
    return Math.min.apply(null, arr);
  }
  /**
   * @description 数组元素求和（number）
   * @param {Array < number >} arr
   * @returns {number}
   */
  public arrSum(arr: Array < number > ): number {
    return arr.reduce(function (pre, cur) {
      return pre + cur
    })
  }
  /**
   * @description 数组元素平均值（number）
   * @param {Array < number >} arr
   * @returns {number}
   */
  public arrAverage(arr: Array < number > ): number {
    return this.arrSum(arr) / arr.length
  }
  /**
   * @description 比较两个数组是否相等
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  public arrEqual(a: any, b: any): boolean {
    if (a === b) return true;
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  /**
   * @description 合并两个对象
   * @param {*} a 对象
   * @param {*} b 对象
   * @returns {Object}
   */
  public mergeJSON(a: any, b: any): Object {
    let temp = {};
    if (a && b) {
      for (let i in b) {
        a[i] = b[i];
      }
      temp = a;
    }
    return temp;
  }
  /**
   * @description 深拷贝数组或对象
   * @param {(object | Array < any >)} obj 数组或对象
   * @returns {(object | Array < any >)}
   */
  public deepCopy(obj: object | Array < any > ): object | Array < any > {
    return JSON.parse(JSON.stringify(obj))
  }
  /**
   * @description 获取对象长度
   * @param {{
   *     [key: string]: any
   *   }} obj
   * @returns {number}
   */
  public getObjectLen(obj: {
    [key: string]: any
  }): number {
    return Object.keys(obj).length
  }
}

export {
  modules as ArrayMod
}