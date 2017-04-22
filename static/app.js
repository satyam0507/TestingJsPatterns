//    Copyright 2017 Satyam Singh
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var height = document.body.offsetHeight;
var width = document.body.offsetWidth;
var obj = {
  height: height,
  width: width
}
parent.postMessage(obj, 'http://localhost:4430');


function gapush(type) {
  var sizeObj = {
    height: document.body.offsetHeight,
    width: document.body.offsetWidth
  }
  var j = ['NotifyVisitors',sizeObj];
  var name = JSON.stringify(j);
  var domain = window.location.href;
  var message = name;
  //console.log(message);
  parent.postMessage(message, domain);
}