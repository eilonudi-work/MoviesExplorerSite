(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(150)},142:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(83),o=a.n(i),l=a(20),c=a(21),s=a(27),m=a(22),u=a(28),d=function(e){var t=e.buttonOnClick;return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand mx-auto"},"Movies Explorer"),r.a.createElement("button",{className:"btn",onClick:function(){return t()}},r.a.createElement("i",{className:"fas fa-plus"})))},v=a(10),E=a(68),p=a(31),f=a.n(p),b=a(52),h=a(71),y=a.n(h),N=function(){var e=Object(b.a)(f.a.mark(function e(t,a){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=7;break}return e.next=4,a(t[n],n,t);case 4:n++,e.next=1;break;case 7:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),M=function(e){return(e=e.replace(/[^a-zA-Z ]/g,"")).charAt(0).toUpperCase()+e.slice(1).toLowerCase()},O=a(36),g=0,j=function(e){return function(t){e||(e={}),t({type:"ADD_EDIT_MODAL",payload:e})}},k=function(e){return function(t){t(e?{type:"DELETE_MOVIE",payload:e}:{type:"DELETE_MOVIE",payload:{}})}},w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.addEditModalStateChange;return r.a.createElement(d,{buttonOnClick:e})}}]),t}(n.Component),D=Object(v.b)(null,{addEditModalStateChange:j})(w),T=(a(142),function(e){var t=e.movieData,a=t.Title,n=t.Year,i=t.Runtime,o=t.Genre,l=t.Director,c=t.Poster,s=e.onErrImg;return console.log(c),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"poster-container"},r.a.createElement("img",{className:"card-img-top",src:c||"",alt:"Movie Poster",onError:s})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title"},r.a.createElement("i",{className:"fas fa-film icon-space"}),a),r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-user icon-space",title:"Director"}),l),r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-calendar-alt icon-space",title:"Release Year"}),n),r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-stopwatch icon-space",title:"Run Time"}),i),r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-bookmark icon-space",title:"Genre"}),o)),r.a.createElement("div",{className:"modal-footer card-bottom"},r.a.createElement("button",{className:"edit-btn",onClick:function(){return e.edit(e.movieData)}},r.a.createElement("i",{className:"fas fa-edit"})),r.a.createElement("button",{className:"delete-btn",onClick:function(){return e.delete(e.movieData)}},r.a.createElement("i",{className:"fas fa-trash"})))))}),C=(a(144),function(e){var t=e.errors;return r.a.createElement("div",{className:"spinner-container"},r.a.createElement("div",{className:"spinner"}),r.a.createElement("label",null,t))}),S=a(85),R=a.n(S),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onErrorImage=function(e){e.target.onerror=null,e.target.src=R.a},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchMovies()}},{key:"render",value:function(){var e=this,t=this.props,a=t.movies,n=t.addEditModalStateChange,i=t.deleteModalStateChange,o=t.errors;return this.props.moviesLoaded?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},a.map(function(t,a){return r.a.createElement(T,{key:a,movieData:t,edit:n,delete:i,onErrImg:e.onErrorImage})}))):r.a.createElement(C,{errors:o})}}]),t}(n.Component),I=Object(v.b)(function(e){return{movies:e.movies.movies,moviesLoaded:e.movies.moviesLoaded,errors:e.movies.errors}},{fetchMovies:function(){return function(){var e=Object(b.a)(f.a.mark(function e(t){var a,n,r,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://www.omdbapi.com/?s=Harry+Potter&y=&plot=short&r=json&apikey=".concat("d298d25"),n=function(e){return"http://www.omdbapi.com/?i=".concat(e,"&apikey=").concat("d298d25")},e.next=6,y.a.get(a);case 6:return r=e.sent,i=r.data.Search,e.next=10,N(i,function(){var e=Object(b.a)(f.a.mark(function e(t){var a,r,i,o,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(n(t.imdbID));case 2:a=e.sent,r=a.data,i=r.Runtime,o=r.Genre,l=r.Director,t.id=g,t.Title=M(t.Title),t.Director=l,t.Genre=o,t.Runtime=i,g++;case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 10:t({type:"FETCH_MOVIES",payload:i}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t({type:"ERROR_FETCHING",payload:e.t0.message});case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(t){return e.apply(this,arguments)}}()},deleteModalStateChange:k,addEditModalStateChange:j})(x),_=a(53),G=a.n(_),L=function(e){var t=e.movieDetails,a=e.onConfirm,n=e.isOpen,i=e.exit,o=t.Title,l=t.Director,c=t.Year,s=t.Runtime,m=t.Genre;return r.a.createElement(G.a,{visible:n,onClickBackdrop:function(){return i()}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"card-title"},r.a.createElement("i",{className:"fas fa-film icon-space"}),o),r.a.createElement("button",{type:"button",className:"close",onClick:function(){return i()}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-user icon-space",title:"Director"}),l),r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-calendar-alt icon-space",title:"Release Year"}),c),r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-stopwatch icon-space",title:"Run Time"}),s),r.a.createElement("small",null,r.a.createElement("i",{className:"fas fa-tape icon-space",title:"Genre"}),m)),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("strong",null,"Are you sure you wanna delete this movie?"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return i()}},"close"),r.a.createElement("button",{type:"submit",className:"btn btn-danger",onClick:function(){return a(t)}},"Delete"))))},V=Object(v.b)(function(e){return{movieDetails:e.movies.selectedMovie,isDeleteMode:e.movies.deleteMode}},{deleteModalStateChange:k,deleteMovie:function(e){return function(t,a){var n=a().movies.movies;n=n.filter(function(t){return t.id!==e.id}),t({type:"DELETE_MOVIE",payload:{},movies:Object(E.a)(n)})}}})(function(e){var t=e.isDeleteMode,a=e.deleteModalStateChange,n=e.movieDetails,i=e.deleteMovie;return r.a.createElement(L,{movieDetails:n,exit:a,isOpen:t,onConfirm:i})}),A=a(80),Y=function(e){return!(e&&e.length<2)},W=function(e){return!e||!/[^a-zA-Z ,]/i.test(e)},F="Well, this field is required",P="Only alphabetic characters and commas allowed",B=a(81),H=(a(146),function(e){var t=e.input,a=e.label,n=e.type,i=e.meta,o=i.touched,l=i.error,c=i.warning;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,{placeholder:a,type:n,className:"form-control",formNoValidate:!0,autoFocus:!0})),o&&(l&&r.a.createElement("small",{className:"error"},l)||c&&r.a.createElement("small",{className:"warn"},c))))}),z=function(e){var t=e.pristine,a=e.handleSubmit,n=e.onSubmit,i=e.exit,o=e.invalid,l=e.modalTitle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},r.a.createElement("i",{className:"fas fa-film icon-space"}),l),r.a.createElement("button",{type:"button",className:"close",onClick:function(){return i()}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{onSubmit:a(n)},r.a.createElement("div",{className:"form-group"},r.a.createElement(B.a,{component:H,name:"Title",label:"Movie Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement(B.a,{component:H,name:"Director",label:"Movie Director"})),r.a.createElement("div",{className:"form-group"},r.a.createElement(B.a,{component:H,name:"Year",label:"Release Year"})),r.a.createElement("div",{className:"form-group"},r.a.createElement(B.a,{component:H,name:"Runtime",label:"Run Time"})),r.a.createElement("div",{className:"form-group"},r.a.createElement(B.a,{component:H,name:"Genre",label:"Genre"})),r.a.createElement("div",{className:"form-group"},r.a.createElement(B.a,{component:H,name:"Poster",label:"Poster Url"})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return i()}},"close"),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:o||t},"Save")))))},U=function(e){var t=e.modalState,a=e.addEditModalStateChange,n=e.updateMovie,i=e.saveNewMovie,o=e.initialValues,l=e.invalid,c=e.handleSubmit,s=e.pristine;return 0===Object.keys(o).length?r.a.createElement(G.a,{visible:t,onClickBackdrop:function(){return a()}},r.a.createElement(z,{modalTitle:"Add New Movie",invalid:l,exit:a,handleSubmit:c,onSubmit:i})):r.a.createElement(G.a,{visible:t,onClickBackdrop:function(){return a()}},r.a.createElement(z,{modalTitle:o.Title,initialValues:o,invalid:l,exit:a,handleSubmit:c,onSubmit:n,pristine:s}))};U=Object(A.a)({form:"addEditMovie",enableReinitialize:!0,validate:function(e,t){var a,n={};return e.Title?t.movies.find(function(t){return t.Title.toLowerCase()===e.Title.toLowerCase()})?n.Title="Well, this title already exists.. ":Y(e.Title)?W(e.Title)||(n.Title=P):n.Title="Must be 2 characters or more":n.Title=F,e.Director?Y(e.Director)?W(e.Director)||(n.Director=P):n.Director="Must be 2 characters or more":n.Director=F,e.Year?(a=e.Year)&&isNaN(Number(a))&&(n.Year="Must be a number"):n.Year=F,e.Runtime?Y(e.Runtime)?function(e){return!e||!/[^a-zA-Z0-9 ]/i.test(e)}(e.Runtime)||(n.Runtime="Only alphabetic and numeric characters allowed"):n.Runtime="Must be 2 characters or more":n.Runtime=F,e.Genre?Y(e.Genre)?W(e.Genre)||(n.Genre=P):n.Genre="Must be 2 characters or more":n.Genre=F,n},warn:function(e){var t,a={};return(t=e.Year)&&t<1895&&(a.Year="Well, the first ever movie created in 1895..."),function(e){return!(e&&e.replace(/\D/g,"")>360)}(e.Runtime)?function(e){return!(e&&e.replace(/\D/g,"")<5)}(e.Runtime)||(a.Runtime="This movie is pretty short.."):a.Runtime="Wow! longer then 6 hours??",a}})(U);var Z=Object(v.b)(function(e){return{initialValues:e.movies.selectedMovie,modalState:e.movies.addEditModalState,movies:e.movies.movies}},{addEditModalStateChange:j,updateMovie:function(e){return function(t,a){var n=a().movies.movies;e.Title=M(e.Title);var r=n.findIndex(function(t){return t.id===e.id});n[r]=e,t(Object(O.a)("addEditMovie")),t({type:"UPDATE_MOVIE",payload:Object(E.a)(n)})}},saveNewMovie:function(e){return function(t,a){t(Object(O.a)("addEditMovie"));var n=a().movies.movies;e.Title=M(e.Title),e.id=g,g++,n.push(e),t({type:"NEW_MOVIE",payload:Object(E.a)(n)})}}})(U),J=(a(148),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(I,null),r.a.createElement(V,null),r.a.createElement(Z,null))}}]),t}(n.Component)),q=a(6),$=a(88),K=a(32),Q={movies:[],moviesLoaded:!1,selectedMovie:{},deleteMode:!1,addEditModalState:!1,errors:""},X=a(82),ee=Object(q.c)({movies:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_MOVIES":e=Object(K.a)({},t,{movies:a.payload,moviesLoaded:!0});break;case"ERROR_FETCHING":e=Object(K.a)({},t,{errors:a.payload});break;case"ADD_EDIT_MODAL":e=Object(K.a)({},t,{addEditModalState:!t.addEditModalState,selectedMovie:a.payload});break;case"UPDATE_MOVIE":case"NEW_MOVIE":e=Object(K.a)({},t,{movies:a.payload,addEditModalState:!t.addEditModalState});break;case"DELETE_MOVIE":e=a.movies?Object(K.a)({},t,{selectedMovie:a.payload,deleteMode:!t.deleteMode,movies:a.movies}):Object(K.a)({},t,{selectedMovie:a.payload,deleteMode:!t.deleteMode});break;default:e=t}return e},form:X.a}),te=[$.a],ae=Object(q.d)(ee,{},q.a.apply(void 0,te)),ne=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{store:ae},r.a.createElement(J,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t,a){e.exports=a.p+"static/media/error_image.ab7505bd.png"}},[[114,2,1]]]);
//# sourceMappingURL=main.bbbb7546.chunk.js.map