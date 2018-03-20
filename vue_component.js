/**
 * VUE组件化应用构建
 */
// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    props: ['todo'],  
    template: '<li>{{ todo.text }}</li>'
  })

var app7 = new Vue({
    el: '#app-7',
    data: {
        todoList: [{text:'v'},{text:'i'},{text:'n'},{text:'g'},{text:'o'}],
        rawHtml:"<span style='color:red'>this color is red</span>",
        dynamicId:1
    }
})
  console.log('init app7.......');


