import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
//导入Vue构造函数
import Vue from 'vue'
//导入根组件
import app from './components/app.vue'

const vm = new Vue({
    //指定vm实例要控制的页面区域
    el:'#app',
    //通过render函数，把指定的组件渲染到el区域中
    render: h => h(app)
})

$(function(){
    $('li:odd').css('background-color','skyblue'),
    $('li:even').css('background-color','pink')
})

class Person{
    static info = '666'
}
console.log(Person.info)