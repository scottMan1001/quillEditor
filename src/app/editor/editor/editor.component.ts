import { Component, OnInit } from '@angular/core';
import * as hljs  from 'highlight.js'
import Quill from 'quill'
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  title = 'editorForNg';
  toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // 切换按钮
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // 用户自定义按钮值
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // 上标/下标
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // 减少缩进/缩进
    [{ 'direction': 'rtl' }],                         // 文本下划线
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // 用户自定义下拉
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // 主题默认下拉，使用主题提供的值
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // 清除格式
  ];
  constructor() { }
  draw(){
    document.querySelectorAll('pre').forEach((block) => {
			hljs.highlightBlock(block);
		})
  }
  ngOnInit(): void {
    hljs.configure({   // optionally configure hljs
      languages: ['javascript', 'ruby', 'python','html']
    });
   
    
    var editor = new Quill('#editor', {
     
      modules: { toolbar: this.toolbarOptions},
      placeholder:'Just put here',
      theme: 'snow'
    });
  }

}
