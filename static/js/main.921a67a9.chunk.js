(this.webpackJsonpsongs=this.webpackJsonpsongs||[]).push([[0],{16:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),o=n.n(l),i=n(4),c=n(3),s=n(11),u=n(12),m=n(14),d=n(13),E=n(15),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"renderList",value:function(){var e=this;return this.props.songs.map((function(t){return r.a.createElement("div",{className:"item",key:t.title},r.a.createElement("div",{className:"right floated content"},r.a.createElement("button",{className:"ui button primary",onClick:function(){e.props.selectSong(t)}},"Select")),r.a.createElement("div",{className:"content"},t.title))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui divided list"},this.renderList())}}]),t}(r.a.Component),v=Object(i.b)((function(e){return{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})(g),h=Object(i.b)((function(e){return{song:e.selectedSong}}))((function(e){var t=e.song;return t?r.a.createElement("div",null,r.a.createElement("h4",null,"Song title: ",t.title),r.a.createElement("p",null,"Song duration: ",t.duration)):r.a.createElement("div",null,"Please select a song for details!")})),p=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui segment container",style:{marginBottom:"5vh"}},"react-redux 101"),r.a.createElement("div",{className:"ui container grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"column eight wide"},r.a.createElement(v,null)),r.a.createElement("div",{className:"column eight wide"},r.a.createElement(h,null)))))},f=Object(c.b)({songs:function(){return[{title:"The Way You Look Tonight",duration:"3:22"},{title:"Welcome to My World",duration:"2:22"},{title:"Fly Me To The Moon",duration:"2:27"},{title:"The Glory of Love",duration:"2:49"}]},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});o.a.render(r.a.createElement(i.a,{store:Object(c.c)(f)},r.a.createElement(p,null)),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.921a67a9.chunk.js.map