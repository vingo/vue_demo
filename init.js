
var app = new Vue({
    el: '#app',
    data: {
    message: 'Hello Vue!'
}
});
console.log('init app.......');

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
})
  console.log('init app2.......');

  var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: 'seen'
    }
})
  console.log('init app3.......');
  var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{text:'v'},{text:'i'},{text:'n'},{text:'g'},{text:'o'}]
    }
})
  console.log('init app4.......');
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
          console.log('cur this .... app5',this==app5)
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  console.log('init app5.......');
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })
  console.log('init app6.......');

  var app00 = new Vue({
    el: '#app-00',
    data: {
      url: 'http://www.baidu.com'
      ,message:'hello',
      firstname:'vingo',
      lastname:'mao',
      question:'',
      answer:'',
      isActive: true,hasError:false,
      classA:'classA',
      classB:'classB',activeColor:'red',
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      ok:true,
      parentMessage: 'Parent',
      items:[{message:'a'},{message:'b'},{message:'x'},{message:'f'}],
      itemsobj:{id:1,name:'vingo',age:28}
    },
    methods: {
        doSomething:function(){
            console.log('dosomething.....')
            this.url='http://www.google.com';
        },
        reversedMessage2:function(){
            return this.message.split('').reverse().join('')
        },
        getAnswer:function(){
                //_.debounce` 是一个通过 Lodash 限制操作频率的函数。_.debounce(function(){},500)
            this.answer = 'Thinking...';
            var vm = this
            axios.get('http://test.api-clicker.51keli.cn/api/order/detail?id=15167802184038125')
            .then(function(response){
                console.log(response,typeof response);
                vm.answer=response.statusText;
            })
            .catch(function(err){
                console.log(err);
                vm.answer='sorry can not answer';
            });
        }
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion, oldQuestion) {
          this.answer = 'Waiting for you to stop typing...'
          this.getAnswer()
        }
      },
    computed: {
        // 计算属性的 getter
        reversedMessage: function () {
          // `this` 指向 vm 实例
          return this.message.split('').reverse().join('')
        },
        //way1
        // fullname:function(){
        //     return this.firstname+' '+this.lastname;
        // },
        //way2
        fullname:{
            get: function() {
                return this.firstname+' '+this.lastname;
            },
            set: function (newvalue){
                var names = newvalue.split(' ')
                this.firstname = names[0]
                this.lastname = names[names.length - 1];
            }
        }
      }
  })
  console.log('init app6.......');

