
var data={name:'vingo'};
// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
    data: data
})
  //实例化后 如果你在data中新添加一个属性 视图不受影响
  data.id=1;
//Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
var obj = {
    foo: 'bar'
};
Object.freeze(obj)
new Vue({
    el: '#app-8',
    data: obj
})
// $watch 是一个实例方法
// vm.$watch('a', function (newValue, oldValue) {
//     // 这个回调将在 `vm.a` 改变后调用
//})
//---  实例生命周期钩子
