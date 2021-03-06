define(function (require, exports, module) {
    /**
     *
     * @param Parent  继承类
     * @param props  新类原型方法
     * @returns {Function} constructor
     */
    var klass = function (Parent, props) {

        var Child, F, i;
        Child = function () {
            if (Child.uber && Child.uber.hasOwnProperty("__construct")) {
                Child.uber.__construct.apply(this, arguments);
            }
            if (Child.prototype.hasOwnProperty("__construct")) {
                Child.prototype.__construct.apply(this, arguments);
            }
        };

        Parent = Parent || Object;
        F = function () {
        };
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.uber = Parent.prototype;
        Child.prototype.constructor = Child;

        for (i in props) {
            if (props.hasOwnProperty(i)) {
                Child.prototype[i] = props[i];
            }
        }
        return Child;
    };

    module.exports = klass;

});