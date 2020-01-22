import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
$(function(){
    $('li:odd').css('background-color','skyblue'),
    $('li:even').css('background-color','pink')
})

class Person{
    static info = '666'
}
console.log(Person.info)