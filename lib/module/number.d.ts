import { BaseMod } from './base';
declare class modules extends BaseMod {
    /**
     * @description 生成指定位数的随机数
     * @param {number} placeRange 位数
     * @param {string} returnType
     * @returns {number}
     */
    getPlaceRandomNum(placeRange: number, returnType: string): number;
    /**
     * @description 生成指定范围的随机数
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @returns {number}
     */
    getRangeRandomNum(min: number, max: number): number;
    /**
     * @description 格式化成货币格式
     * @param {string} value
     * @returns {string}
     */
    getFormatCurrency(value: string): string;
    /**
     * @description 转换成大写货币格式
     * @param {*} value 货币金额
     * @returns {string}
     */
    changeToChnCurrency(value: any): string;
}
export { modules as NumberMod };
