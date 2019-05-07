// myReduce
Array.prototype.myReduce = function() {
    const ary = this;
    const { length } = ary;

    if (arguments.length === 0) {
        throw new TypeError('undefined is not a function');
    }

    if (typeof arguments[0] !== 'function') {
        throw new TypeError(arguments[0] + ' is not a function');
    }
    
    // 在没有初始值的空数组上调用 reduce 将报错。
    if (length === 0 && arguments.length === 1) {
        throw new TypeError('empty array with no initial value');
    }

    const callback = arguments[0];
    const index = arguments.length >= 2 ? 0 : 1;
    let value = index === 0 ? arguments[1] : ary[0];
    for (let i = index; i < length; i++) {
        value = callback(value, ary[i], i, ary);
    }
    return value;
};

console.log([1, 3, 5].myReduce((i, j) => { return i * j }));