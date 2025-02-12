
/**
 * util tool functions
 *
 * @export
 * @class utils
 */
export default class utils{

    /**
     * Deep copy
     *
     * @static
     * @param {Object} data
     * @returns {Object} data
     * @memberof utils
     */
    static deepCopy(data) {
        const that = this;
       if (Object.prototype.toString.call(data) === "[object Array]"){
           return data.map(((item) => {
               if (Object.prototype.toString.call(item) === "[object Array]" || Object.prototype.toString.call(item) === "[object Object]") {
                   return that.deepCopy(item);
               }
               return item;
           }));
       } else if (Object.prototype.toString.call(data) === "[object Object]") {
           let newData = {};
           for (let i in data) {
               if (Object.prototype.toString.call(data[i]) === "[object Array]" || Object.prototype.toString.call(data[i]) === "[object Object]") {
                   newData[i] = that.deepCopy(data[i]);
               } else {
                   newData[i] = data[i];
               }
           }
           return newData;
       }
    }

    /**
     * Get today's date
     *
     * @static
     * @param {String} [type="/"]
     * @returns {String} //03/30/2020
     * @memberof utils
     */
    static getDate(type = "/") {
		const date = new Date();
		const year = date.getFullYear();
		const month = this.datePlus0(new Date().getMonth() + 1);
		const currentDate = this.datePlus0(new Date().getDate());
        return `${month}${type}${currentDate}${type}${year}`;
    }

    /**
     * Add 0
     *
     * @static
     * @param {Number} x
     * @returns {String}
     * @memberof utils
     */
    static datePlus0(x) {
		if (x < 10) {
			return `0${x}`;
		} else {
			return x;
		}
	}
}