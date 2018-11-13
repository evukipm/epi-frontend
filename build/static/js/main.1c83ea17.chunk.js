(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(80)},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),s=a(83),l=a(2),i=a(3),u=a(5),p=a(4),h=a(6),m=a(85),d=a(84),f=a(27),v=a(82),g=a(12),b=a.n(g),E=new(function(){function e(){Object(l.a)(this,e),this.auth=b.a.create({baseURL:"https://epi-backend.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/signup",{username:t,password:a}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),O=r.a.createContext(),y=O.Provider,j=O.Consumer,w=function(e){return function(t){return r.a.createElement(j,null,function(a){return r.a.createElement(e,Object.assign({},a,t))})}},C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLogged:!1,user:null,isLoading:!0},a.handleSetUser=function(e){a.setState({user:e,isLogged:!0})},a.handleLogOut=function(){E.logout().then(function(){a.setState({user:null,isLogged:!1})}).catch(function(e){console.log("Hay que manejar errores")})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.me().then(function(t){e.setState({user:t,isLoading:!1,isLogged:!0})}).catch(function(t){e.setState({isLogged:!1,user:null,isLoading:!1})})}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("h1",null,"Loading..."):r.a.createElement(y,{value:{isLogged:this.state.isLogged,user:this.state.user,logout:this.handleLogOut,setUser:this.handleSetUser}},this.props.children)}}]),t}(n.Component),k=w(function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.path,a=e.component,n=e.isLogged,c=Object(f.a)(e,["path","component","isLogged"]);return r.a.createElement(d.a,Object.assign({},c,{path:t,render:function(e){return n?r.a.createElement(a,e):r.a.createElement(v.a,{to:"/login"})}}))}}]),t}(n.Component)),S=a(81),L=(a(55),w(function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLogged,a=e.user,n=e.logout;return r.a.createElement("div",null,t?r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",null,r.a.createElement(S.a,{to:"/"},r.a.createElement("i",{className:"fas fa-home"}))),r.a.createElement("div",null,r.a.createElement(S.a,{to:"/search"},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement("div",{className:"create-post-navbar-button"},r.a.createElement(S.a,{to:"/newpost"},r.a.createElement("i",{className:"fas fa-pencil-alt"}))),r.a.createElement("div",null,r.a.createElement(S.a,{to:"/profile/".concat(a._id)},r.a.createElement("i",{className:"fas fa-user"}))),r.a.createElement("div",null,r.a.createElement("p",{onClick:n},r.a.createElement("i",{className:"fas fa-sign-out-alt"})))):r.a.createElement("div",{className:"navbar-container"},r.a.createElement(S.a,{to:"/login"},"Login"),r.a.createElement(S.a,{to:"/signup"},"Signup")))}}]),t}(n.Component))),N=a(11),x=(a(57),w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;E.signup({username:t,password:n}).then(function(e){a.setState({username:"",password:""}),a.props.setUser(e),a.props.history.push("/")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(N.a)({},n,r))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(S.a,{to:"/login"}," Login")))}}]),t}(n.Component))),P=(a(59),w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;E.login({username:n,password:r}).then(function(e){a.props.setUser(e),a.props.history.push("/")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(N.a)({},n,r))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("div",null,r.a.createElement("label",{className:"label-text"},"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Login"}))}}]),t}(n.Component))),V=(a(61),w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isNotemptyValue:!1},a.handleChangeInput=function(e){a.setState({value:e.target.value,isNotemptyValue:!0})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.value;a.props.onSubmit(t),a.setState({value:"",isNotemptyValue:!1})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.isNotemptyValue;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:t,onChange:this.handleChangeInput,required:!0}),a?r.a.createElement("input",{type:"submit",value:"Add step"}):null)}}]),t}(n.Component))),U=new(function(){function e(){Object(l.a)(this,e),this.post=b.a.create({baseURL:"https://epi-backend.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"createPost",value:function(e){return this.post.post("/post",{post:e}).then(function(e){return e.data})}},{key:"getPost",value:function(){return this.post("/post").then(function(e){return e.data})}},{key:"getSearch",value:function(e){return this.post.get("/post/search",{param:e}).then(function(e){return e.data})}}]),e}()),D=(a(63),w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={steps:[],isTitleEmpty:!0,isDescriptionEmpty:!0,title:"",text:"",isPostCreated:!1},a.handleSubmit=function(e){var t=a.state.steps;t.push({step:e}),a.setState({steps:t})},a.handleCreatePost=function(){var e=a.state,t=e.title,n=e.text,r=e.steps;U.createPost({title:t,text:n,steps:r}).then(function(){a.setState({isPostCreated:!0})}).catch(function(e){console.log(e)})},a.handleChange=function(e){var t,n=e.target,r=n.name,c=n.value;if("title"===r)a.setState((t={},Object(N.a)(t,r,c),Object(N.a)(t,"isTitleEmpty",!1),t));else if("text"===r){var o;a.setState((o={},Object(N.a)(o,r,c),Object(N.a)(o,"isDescriptionEmpty",!1),o))}console.log(a.state.title,a.state.text)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"allIsNotEmpty",value:function(){var e=this.state,t=e.isTitleEmpty,a=e.isDescriptionEmpty,n=e.steps;return!t&&!a&&n.length>0}},{key:"handelePostCreated",value:function(){var e;e=this.allIsNotEmpty();var t=this.state.steps;return r.a.createElement("div",null,r.a.createElement("label",null,"Title:"),r.a.createElement("input",{name:"title",onChange:this.handleChange}),r.a.createElement("label",null,"Description:"),r.a.createElement("textarea",{name:"text",onChange:this.handleChange}),r.a.createElement("p",{className:"label-text"},"Define your steps:"),r.a.createElement("ol",null,t.map(function(e,t){return console.log(e),r.a.createElement("li",{key:t},e.step)})),r.a.createElement(V,{onSubmit:this.handleSubmit}),e?r.a.createElement("button",{onClick:this.handleCreatePost},"Create Post"):null)}},{key:"render",value:function(){var e=this.state.isPostCreated;return r.a.createElement("div",null,e?r.a.createElement(v.a,{to:"/"}):this.handelePostCreated())}}]),t}(n.Component))),A=new(function(){function e(){Object(l.a)(this,e),this.profile=b.a.create({baseURL:"http://localhost:5000",withCredentials:!0})}return Object(i.a)(e,[{key:"getProfile",value:function(e){return this.profile.get("/profile/".concat(e)).then(function(e){return e.data}).catch(function(e){console.log(e)})}},{key:"getuserPost",value:function(e){return this.profile.get("/profile/post/".concat(e)).then(function(e){return e.data}).catch(function(e){console.log(e)})}},{key:"follow",value:function(e){return this.profile.post("/profile/post/".concat(e)).then(function(e){return e.data}).catch(function(e){console.log(e)})}},{key:"getfollowers",value:function(e){return this.profile.get("/profile/getfollowers/".concat(e)).then(function(e){return e.data}).catch(function(e){console.log(e)})}}]),e}()),I=a(18),_=new(function(){function e(){Object(l.a)(this,e),this.vote=b.a.create({baseURL:"https://epi-backend.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"createPositiveVote",value:function(e,t){return this.vote.put("/vote/".concat(e,"/increase"),{stepId:t}).then(function(e){return e.data})}},{key:"createNegativeVote",value:function(e,t){return this.vote.put("/vote/".concat(e,"/decrease"),{stepId:t}).then(function(e){return e.data})}}]),e}()),R=(a(65),a(26)),F=a.n(R),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:a.props.data,viewSteps:!1},a.handleIncreaseVote=function(e){return function(){var t=Object(I.a)({},a.state.data);t.steps[e].positiveVotes++,console.log(t),a.setState({data:t}),_.createPositiveVote(t._id,t.steps[e]._id).then(function(){console.log(t)}).catch(function(e){console.log(e)})}},a.handleDecreaseVote=function(e){return function(){var t=Object(I.a)({},a.state.data);t.steps[e].negativeVotes++,console.log(t),a.setState({data:t}),_.createNegativeVote(t._id,t.steps[e]._id).then(function(){console.log(t)}).catch(function(e){console.log(e)})}},a.toggleStep=function(){var e=a.state.viewSteps;a.setState({viewSteps:!e})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.viewSteps;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-post-post"},r.a.createElement("h1",null,a.title),r.a.createElement("div",{className:"container-post-author"},r.a.createElement("p",null,r.a.createElement(S.a,{to:"/profile/".concat(a.author._id)},a.author.username)),r.a.createElement("p",null,F()(a.date).fromNow())),r.a.createElement("p",{className:"container-post-description"},a.text),a.steps.length>1?r.a.createElement("button",{onClick:this.toggleStep},n?"Close steps":"View steps"):null,r.a.createElement("ol",{className:"container-post-list"},n?a.steps.map(function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("div",{className:"container-post-votes"},r.a.createElement("p",null,t.positiveVotes),r.a.createElement("img",{src:"".concat("","/img/arrow_up.png"),alt:"arrow-img",width:"40px",onClick:e.handleIncreaseVote(a)}),r.a.createElement("p",null,t.negativeVotes),r.a.createElement("img",{src:"".concat("","/img/arrow_down.png"),alt:"arrow-img",width:"40px",onClick:e.handleDecreaseVote(a)})),r.a.createElement("div",{className:"container-post-step"},t.step))}):null)))}}]),t}(n.Component),M=(a(68),w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],isLoading:!0},a.update=function(){a.setState({isLoading:!0});var e=a.props.id;A.getuserPost(e).then(function(e){a.setState({posts:e,isLoading:!1})}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var e=this.state.posts;return r.a.createElement("div",null,e.map(function(e,t){return r.a.createElement(T,{data:e,key:t})}))}}]),t}(n.Component))),q=(a(70),w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:a.props.data},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",null,r.a.createElement("p",null,e.username),r.a.createElement("p",null,e.avatar))}}]),t}(n.Component))),J=w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",null,e.map(function(e,t){return r.a.createElement(q,{data:e,key:t,index:t})}))}}]),t}(n.Component)),B=(a(72),w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={user:"",isLoading:!0,isSameUser:!1},a.update=function(){a.setState({isLoading:!0});var e=a.props.match.params.id;A.getProfile(e).then(function(t){a.props.user._id===e?a.setState({user:t,isLoading:!1,isSameUser:!0}):a.setState({user:t,isLoading:!1,isSameUser:!1})}).catch(function(e){console.log(e)})},a.addFollower=function(e){var t=a.props.match.params.id;A.follow(t).then(function(e){a.setState({user:e})}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.user,a=t._id,n=t.username,c=t.avatar,o=t.description;return r.a.createElement("div",{className:"profile-main-page"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:c,alt:n})),r.a.createElement("div",null,r.a.createElement(S.a,{to:"/profile/".concat(a)},n),this.state.isSameUser?null:r.a.createElement("button",{onClick:this.addFollower.bind(this)},"Follow me")),r.a.createElement("div",null,o)),r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(S.a,{to:"/profile/".concat(e,"/mypost")},"link1"),r.a.createElement(S.a,{to:"/profile/".concat(e,"/myfollowers")},"link2")),r.a.createElement(d.a,{path:"/profile/".concat(e,"/mypost"),render:function(t){return r.a.createElement(M,Object.assign({},t,{id:e}))}}),r.a.createElement(d.a,{path:"/profile/".concat(e,"/myfollowers"),render:function(t){return r.a.createElement(J,Object.assign({},t,{id:e}))}})))}}]),t}(n.Component))),H=(a(74),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],isLoading:!0},a.update=function(){a.setState({isLoading:!0}),U.getPost().then(function(e){a.setState({data:e,isLoading:!1})}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",null,e.map(function(e,t){return r.a.createElement(T,{data:e,key:t,index:t})}))}}]),t}(n.Component)),z=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data;return r.a.createElement("div",null,t.length<1?r.a.createElement("p",null,"No results"):t.map(function(t,a){return r.a.createElement("div",{className:"search-user-box"},r.a.createElement("img",{src:t.avatar,alt:"user avatar"}),r.a.createElement("p",null,r.a.createElement(S.a,{to:"/profile/".concat(t._id)},t.username),t.description),r.a.createElement("button",{onClick:e.followUser},"Follow"))}))}}]),t}(n.Component),G=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",null,e.length<1?r.a.createElement("p",null,"No results"):e.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.text))}))}}]),t}(n.Component),K=new(function(){function e(){Object(l.a)(this,e),this.search=b.a.create({baseURL:"https://epi-backend.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"searchUser",value:function(e,t){return this.search.get("/search?type=".concat(e,"&class=").concat(t)).then(function(e){return e.data})}}]),e}()),Q=(a(76),w(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={searchValue:"",selectedOption:"user",searchResult:[]},a.handleOptionChange=function(e){var t=e.target.value;a.setState({selectedOption:t,searchResult:[]})},a.handleInput=function(e){var t=e.target.value;a.setState({searchValue:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.searchValue,r=t.selectedOption;K.searchUser(r,n).then(function(e){a.setState({searchResult:e})}).catch(function(e){return console.log(e)})},a.setType=function(){var e=a.state,t=e.searchResult,n=e.selectedOption;return"user"===n?r.a.createElement(z,{data:t}):"title"===n||"text"===n?r.a.createElement(G,{data:t}):r.a.createElement("div",null)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchValue,a=e.selectedOption;return r.a.createElement("div",{className:"search-page"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Searching for ",t),r.a.createElement("div",{className:"search-option-container"},r.a.createElement("label",{className:"search-radio-buttons"},r.a.createElement("input",{type:"radio",value:"user",checked:"user"===a,onChange:this.handleOptionChange}),"Users"),r.a.createElement("label",{className:"search-radio-buttons"},r.a.createElement("input",{type:"radio",value:"title",checked:"title"===a,onChange:this.handleOptionChange}),"Posts title"),r.a.createElement("label",{className:"search-radio-buttons"},r.a.createElement("input",{type:"radio",value:"text",checked:"text"===a,onChange:this.handleOptionChange}),"Post content")),r.a.createElement("input",{type:"text",onChange:this.handleInput}),r.a.createElement("input",{type:"submit",value:"search"})),this.setType())}}]),t}(n.Component))),W=(a(78),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement("div",null,r.a.createElement("div",{className:"main-page"},r.a.createElement(L,null),r.a.createElement(m.a,null,r.a.createElement(d.a,{path:"/signup",component:x}),r.a.createElement(d.a,{path:"/login",component:P}),r.a.createElement(k,{exact:!0,path:"/",component:H}),r.a.createElement(k,{path:"/newpost",component:D}),r.a.createElement(k,{path:"/profile/:id",component:B}),r.a.createElement(k,{path:"/search",component:Q})))))}}]),t}(n.Component));o.a.render(r.a.createElement(s.a,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.1c83ea17.chunk.js.map