var list = [
    // {
    //     title:"吃饭睡觉",
    //     isChecked:true
    // },
    // {
    //     title:"打豆豆",
    //      isChecked:false
    // }
]
var vm = new Vue({
    el:".main",
    data:{
        list:list,
        todo:"",
        edtorTodos:""  //要记录的数据
    },
    methods:{
        addTodo(){
            this.list.push({
                title1:this.todo,
                isChecked:false
            })
            this.todo = ''
        },
        deleteTodo(todo){
            var index = this.list.indexOf(todo);
            this.list.splice(index,1);
        },
        edtorTodo(todo){ //编辑
            this.edtorTodos = todo;
        },
        edtorTodoed(todo){//失去焦点
            this.edtorTodos="";
        }

    },
    directives:{
        "focus":{
            update(el,binding){
                if(binding.value){
                    el.focus();
                }
            }
        }
    }
})
