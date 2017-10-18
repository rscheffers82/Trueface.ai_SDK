module.exports=function(t){function e(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){t.exports=require("react")},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(2);e.Enroll=s.Enroll;var a=i(3);e.Match=a.Match},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var a=i(0),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={height:"640",src:"",stream:new MediaStream,width:"480"},e.streaming=!1,e.photos=[],e}return s(e,t),e.prototype.render=function(){var t=this,e="host "+(this.props.className||"");return a.createElement("div",{className:e},a.createElement("section",{className:"photos"},this.photos.map(function(t,e){return a.createElement("img",{key:e,alt:"img"+e,src:"data:image/png;base64,"+t})})),a.createElement("video",{autoPlay:!0,ref:function(e){return t.video=e},width:this.state.width,height:this.state.height,src:this.state.src},"Video stream not available."),a.createElement("section",{className:"toolbar"},a.createElement("button",{onClick:function(e){return t.takePhoto()}},"Take photos")),a.createElement("canvas",{ref:function(e){return t.canvas=e}}))},e.prototype.componentDidMount=function(){var t=this;navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(e){var i=window.URL.createObjectURL(e);t.setState({stream:e,src:i})}).catch(function(t){throw new Error(t.name)}),null!==this.video&&this.video.addEventListener("canplay",this.videoCanPlay.bind(this),!1)},e.prototype.componentWillUnmount=function(){this.state.stream&&(this.state.stream.stop?this.state.stream.stop():(this.state.stream.getVideoTracks&&this.state.stream.getVideoTracks().map(function(t){return t.stop()}),this.state.stream.getAudioTracks&&this.state.stream.getAudioTracks().map(function(t){return t.stop()}))),this.state.src&&window.URL.revokeObjectURL(this.state.src)},e.prototype.videoCanPlay=function(t){if(!this.streaming){if(!this.video||!this.canvas)return;var e=""+this.video.videoHeight/(this.video.videoWidth/+this.state.width);this.video.setAttribute("width",this.state.width),this.canvas.setAttribute("width",this.state.width),this.video.setAttribute("height",""+e),this.canvas.setAttribute("height",""+e),this.setState({height:e}),this.streaming=!0}},e.prototype.takePhoto=function(){if(this.canvas&&this.video){var t=this.canvas.getContext("2d");if(t){t.drawImage(this.video,0,0,+this.state.width,+this.state.height);var e=this.canvas.toDataURL("image/jpeg"),i=e.replace("data:image/jpeg;base64,","");this.photos.push(i),this.forceUpdate(),this.props.onPhotoTaken&&this.props.onPhotoTaken(i)}}},e}(a.Component);e.Enroll=o},function(t,e,i){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(e,"__esModule",{value:!0});var a=i(0),o=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={height:"640",src:"",stream:new MediaStream,width:"480"},e.streaming=!1,e}return s(e,t),e.prototype.render=function(){var t=this,e="host "+(this.props.className||"");return a.createElement("div",{className:e},a.createElement("video",{autoPlay:!0,ref:function(e){return t.video=e},width:this.state.width,height:this.state.height,src:this.state.src},"Video stream not available."),a.createElement("section",{className:"toolbar"},a.createElement("button",{onClick:function(e){return t.takePhoto()}},"Take photos")),a.createElement("canvas",{ref:function(e){return t.canvas=e}}))},e.prototype.componentDidMount=function(){var t=this;navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(e){var i=window.URL.createObjectURL(e);t.setState({stream:e,src:i})}).catch(function(t){throw new Error(t.name)}),null!==this.video&&this.video.addEventListener("canplay",this.videoCanPlay.bind(this),!1)},e.prototype.componentWillUnmount=function(){this.state.stream&&(this.state.stream.stop?this.state.stream.stop():(this.state.stream.getVideoTracks&&this.state.stream.getVideoTracks().map(function(t){return t.stop()}),this.state.stream.getAudioTracks&&this.state.stream.getAudioTracks().map(function(t){return t.stop()}))),this.state.src&&window.URL.revokeObjectURL(this.state.src)},e.prototype.videoCanPlay=function(t){if(!this.streaming){if(!this.video||!this.canvas)return;var e=""+this.video.videoHeight/(this.video.videoWidth/+this.state.width);this.video.setAttribute("width",this.state.width),this.canvas.setAttribute("width",this.state.width),this.video.setAttribute("height",""+e),this.canvas.setAttribute("height",""+e),this.setState({height:e}),this.streaming=!0}},e.prototype.takePhoto=function(){if(this.canvas&&this.video){var t=this.canvas.getContext("2d");if(t){t.drawImage(this.video,0,0,+this.state.width,+this.state.height);var e=this.canvas.toDataURL("image/jpeg"),i=e.replace("data:image/jpeg;base64,","");this.props.onPhotoTaken&&this.props.onPhotoTaken(i)}}},e}(a.Component);e.Match=o}]);