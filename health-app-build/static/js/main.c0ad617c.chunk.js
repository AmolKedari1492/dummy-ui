(this["webpackJsonphealth-tracker-ui"]=this["webpackJsonphealth-tracker-ui"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var n=a(82),r=a(0),s=a.n(r),o=a(38),l=a.n(o),i=(a(88),a(19)),c=a(25),m=a(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(12),d=a(7),p=a(8),h=a(11),f=a(10),v=(a(36),a(9)),g=a.n(v),E=new(function(){function e(){Object(d.a)(this,e),this.getUsers=function(e,t,a){g()({method:"GET",url:"/api/users/",headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/"}).then((function(e){return t(e.data)}),(function(e){return a(e)}))},this.deleteUser=function(e,t,a){g()({method:"DELETE",url:"/api/users/"+e._id,headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/"}).then((function(e){return t(e.data)}),(function(e){return a(e)}))}}return Object(p.a)(e,[{key:"login",value:function(e,t,a,n){g()({method:"POST",url:"/api/login",headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/",data:t}).then((function(e){return a(e.data)}),(function(e){return n(e)}))}},{key:"logout",value:function(e,t,a){g()({method:"GET",url:"/api/logout",headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/"}).then((function(e){return t(e.data)}),(function(e){return a(e)}))}},{key:"register",value:function(e,t,a,n){g()({method:"POST",url:"/api/users/",headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/",data:t}).then((function(e){return a(e.data)}),(function(e){return n(e)}))}},{key:"getUser",value:function(e,t,a){g()({method:"GET",url:"/api/users/"+e._id,headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/"}).then((function(e){return t(e.data)}),(function(e){return a(e)}))}},{key:"updateUser",value:function(e,t,a,n){g()({method:"PUT",url:"/api/users/",headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/",data:t}).then((function(e){return a(e.data)}),(function(e){return n(e)}))}},{key:"resetPassword",value:function(e,t,a,n){g()({method:"PUT",url:"/api/users/change-password",headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/",data:t}).then((function(e){return a(e.data)}),(function(e){return n(e)}))}}]),e}()),_=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},b=function(e){var t="?";for(var a in e)t+="".concat(a,"=").concat(e[a]),t+="&";return t},y=new i.a,N=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){var t;n.setState((t={},Object(u.a)(t,e.target.name,e.target.value),Object(u.a)(t,"error",""),t))},n.onLoginClickHandler=function(){if(n.state.email)if(_(n.state.email))if(n.state.password){var e={email:n.state.email,password:n.state.password};E.login({},e,(function(e){y.set("_id",e._id,{path:"/"}),y.set("name",e.name,{path:"/"}),y.set("admin",e.admin,{path:"/"}),y.set("dailyTarget",e.dailyTarget,{path:"/"}),y.set("email",e.email,{path:"/"}),n.props.history.push("/?userID="+e._id,{userID:e._id})}),(function(e){n.setState({error:e.message})}))}else n.setState({error:"Please enter Password."});else n.setState({error:"Email is not valid."});else n.setState({error:"Please enter Email."})},n.state={email:"",password:"",error:""},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login"},s.a.createElement("div",{className:"login__heading"},s.a.createElement("h2",null,"Login")),this.state.error?s.a.createElement("div",{className:"login__error"},this.state.error):null,s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{type:"email",className:"login__control",name:"email",value:this.state.email,onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{type:"password",className:"login__control",name:"password",value:this.state.password,onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__actions"},s.a.createElement("input",{type:"button",className:"login__actions--direct",value:"Login",onClick:this.onLoginClickHandler})),s.a.createElement("div",{className:"login__links"},s.a.createElement(m.b,{to:{pathname:"/register",label:"register"}},"Register")))}}]),a}(r.Component),w=(a(110),new i.a),C=function(e){var t=w.get("admin");return t=JSON.parse(t),s.a.createElement("div",{className:"nav-tabs nav"},s.a.createElement(m.b,{className:"logo ".concat("/"===e.activePath?"active":""),to:{pathname:"/",label:"home"}},"HealthTrackerApp"),s.a.createElement(m.b,{className:"".concat("/account"===e.activePath?"active":""),to:{pathname:"/account",label:"account"}},"Accout"),t?s.a.createElement(m.b,{className:"".concat("/admin"===e.activePath?"active":""),to:{pathname:"/admin",label:"Admin"}},"Admin"):null,s.a.createElement(m.b,{className:"".concat("/logout"===e.activePath?"active":""),to:{pathname:"/login",label:"logout"},onClick:function(){E.logout({},(function(){w.remove("name",{path:"/"}),w.remove("admin",{path:"/"}),w.remove("email",{path:"/"}),w.remove("_id",{path:"/"}),w.remove("dailyTarget",{path:"/"})}),(function(e){console.error(e)}))}},"Logout"))},k=(a(111),a(71),function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchUsers=function(){E.getUsers({},(function(e){n.setState({users:e})}),(function(e){return console.error(e)}))},n.deleteUser=function(e){E.deleteUser(e,(function(e){n.fetchUsers()}),(function(e){return console.error(e)}))},n.goToMeals=function(e){n.props.history.push("/",{userID:e._id})},n.editUser=function(e){n.props.history.push("/account",{userID:e._id})},n.state={users:[]},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"render",value:function(){var e=this,t=this.props.location.pathname;return s.a.createElement("div",{className:"home"},s.a.createElement("header",null,s.a.createElement(C,{activePath:t})),s.a.createElement("section",null,s.a.createElement("h3",null,"User Management"),s.a.createElement("div",{className:"user-list"},s.a.createElement("div",{className:"user-list-header"},s.a.createElement("div",{className:"user-list-item"},"Name"),s.a.createElement("div",{className:"user-list-item"},"Email"),s.a.createElement("div",{className:"user-list-item"},"Actions")),this.state.users.map((function(t,a){return s.a.createElement("div",{className:"user-list-body",key:a},s.a.createElement("div",{className:"user-list-item"},t.name),s.a.createElement("div",{className:"user-list-item"},t.email),s.a.createElement("div",{className:"user-list-item"},s.a.createElement("span",{className:"btn btn-primary",onClick:function(){return e.goToMeals(t)}},"Meals"),s.a.createElement("span",{className:"btn btn-primary",onClick:function(){return e.editUser(t)}},"Edit"),s.a.createElement("span",{className:"btn btn-danger",onClick:function(){return e.deleteUser(t)}},"Delete")))})))),s.a.createElement("footer",null))}}]),a}(r.Component)),D=(a(112),new i.a),j=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchUserData=function(){E.getUser({_id:n.userID},(function(e){n.setState({admin:e.admin,email:e.email,dailyTarget:e.dailyTarget,name:e.name,_id:e._id})}),(function(e){console.error(e)}))},n.onChangeHandler=function(e){n.setState({admin:!n.state.admin})},n.onInputChangeHandler=function(e){n.setState(Object(u.a)({},e.target.name,e.target.value))},n.updateUser=function(){var e=n.state,t=e.name,a=e.email,r=e.admin,s=e.dailyTarget,o=e._id;if(!t||!s||s&&s<1)n.setState({error:"Please fill proper details"});else{var l={admin:r,email:a,dailyTarget:s,name:t,_id:o};E.updateUser({_id:o},l,(function(){n.props.history.push("/")}),(function(e){console.error(e)}))}},n.changePassword=function(){if(n.state.password){var e={_id:n.state._id,password:n.state.password};E.resetPassword({},e,(function(e){n.props.history.push("/")}),(function(e){n.setState({error:e.message})}))}else n.setState({error:"Password cannot be empty."})},n.state={email:"",name:"",password:"",cpassword:"",dailyTarget:""},n.userID=D.get("_id"),n.props.location&&n.props.location.state&&n.props.location.state.userID&&(n.userID=n.props.location.state.userID),n.isAdmin=D.get("admin"),n.isAdmin=JSON.parse(n.isAdmin),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.fetchUserData()}},{key:"render",value:function(){var e=this,t=this.props.location.pathname;return s.a.createElement("div",{className:"home"},s.a.createElement("header",null,s.a.createElement(C,{activePath:t})),s.a.createElement("section",null,s.a.createElement("div",{className:"account"},s.a.createElement("h2",null,"Update"),this.state.error?s.a.createElement("div",{className:"account__error"},this.state.error):null,s.a.createElement("div",{className:"account__item"},s.a.createElement("div",{className:"account__item--lable"},"Email"),s.a.createElement("div",{className:"account__item--value"},s.a.createElement("input",{type:"text",value:this.state.email,disabled:!0}))),this.isAdmin?s.a.createElement("div",{className:"account__item"},s.a.createElement("div",{className:"account__item--lable"},"Admin"),s.a.createElement("input",{className:"",type:"checkbox",checked:this.state.admin||!1,onChange:function(t){return e.onChangeHandler(t)}})):null,s.a.createElement("div",{className:"account__item"},s.a.createElement("div",{className:"account__item--lable"},"Name"),s.a.createElement("div",{className:"account__item--value"},s.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.onInputChangeHandler(t)}}))),s.a.createElement("div",{className:"account__item"},s.a.createElement("div",{className:"account__item--lable"},"Calories"),s.a.createElement("div",{className:"account__item--value"},s.a.createElement("input",{type:"text",name:"dailyTarget",value:this.state.dailyTarget,onChange:function(t){return e.onInputChangeHandler(t)}}))),s.a.createElement("div",{className:"account__actions--direct"},s.a.createElement("div",{onClick:this.updateUser},"Save")),s.a.createElement("div",{className:"account__item"},s.a.createElement("div",{className:"account__item--lable"},"password"),s.a.createElement("div",{className:"account__item--value"},s.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.onInputChangeHandler}))),s.a.createElement("div",{className:"account__actions--direct"},s.a.createElement("div",{onClick:this.changePassword},"Change password")))),s.a.createElement("footer",null))}}]),a}(r.Component),O=a(59),A=a.n(O),S=(a(113),new(function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,[{key:"getMeals",value:function(e,t,a){g()({method:"GET",url:"/api/meals/all/meals"+b(e),headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/"}).then((function(e){return t(e.data)}),(function(e){return a(e)}))}},{key:"getMeal",value:function(e,t,a){g()({method:"GET",url:"/api/meals/"+e._id,headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/"}).then((function(e){return t(e.data)}),(function(e){return a(e)}))}},{key:"updateMeal",value:function(e,t,a,n){g()({method:"PUT",url:"/api/meals/",headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/",data:t}).then((function(e){return a(e.data)}),(function(e){return n(e)}))}},{key:"createMeal",value:function(e,t,a,n){g()({method:"POST",url:"/api/meals/",headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/",data:t}).then((function(e){return a(e.data)}),(function(e){return n(e)}))}},{key:"deleteMeal",value:function(e,t,a){g()({method:"DELETE",url:"/api/meals/"+e._id,headers:{Accept:"application/json","content-type":"application/json","Access-Control-Allow-Origin":"*"},baseURL:"https://akedari-dummy-api.herokuapp.com/"}).then((function(e){return t(e.data)}),(function(e){return a(e)}))}}]),e}())),I=new i.a,U={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"},P=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).fetchUserInfo=function(){E.getUser({_id:n.state.paramsID},(function(e){n.setState({userDailyTarget:e.dailyTarget,userName:e.name})}),(function(e){return console.error(e)}))},n.procesData=function(e,t){e.meals.forEach((function(e){var a=new Date(e.created_at),n=a.getFullYear(),r=a.getMonth();e.month=a.getMonth(),e.year=a.getFullYear(),t[n]=t[n]||{},t[n][r]=t[n][r]||[],t[n][r].push(e)})),n.setState({formattedData:t,meals:e.meals})},n.fetchUserMeals=function(){var e={};S.getMeals({user_id:n.state.paramsID},(function(t){n.procesData(t,e)}),(function(e){console.error(e)}))},n.formattedDate=function(e){var t=new Date("2010-08-05"),a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),n=new Intl.DateTimeFormat("en",{month:"short"}).format(t),r=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(r,"-").concat(n,"-").concat(a)},n.onEditItem=function(e,t,a,r){try{var s=n.state.formattedData;s[t][a][r].calories=e.target.value,n.setState({formattedData:s})}catch(e){console.error(e)}},n.addMeal=function(){n.props.history.push("/meal/",{userID:n.state.paramsID})},n.onEdit=function(e,t,a,r){n.props.history.push("/meal/",{mealID:r._id,userID:n.state.paramsID})},n.onDelete=function(e,t,a,r){S.deleteMeal(r,(function(e){n.fetchUserMeals()}),(function(e){return console.error(e)}))},n.clearDateRange=function(){n.setState({fromDate:void 0,toDate:void 0},(function(){n.fetchUserMeals()}))},n.filterByDateRange=function(){var e={user_id:n.state.paramsID};n.state.toDate&&n.state.fromDate&&(e.from=n.state.fromDate,e.to=n.state.toDate),S.getMeals(e,(function(e){n.procesData(e,{})}),(function(e){console.error(e)}))},n.handleFromChange=function(e){n.setState({fromDate:e})},n.handleToChange=function(e){n.setState({toDate:e})};var r=I.get("_id");return n.props.location&&n.props.location.state&&n.props.location.state.userID&&(r=n.props.location.state.userID),n.state={paramsID:r,formattedData:{},meals:[],userDailyTarget:10,userName:""},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(e,t){this.fetchUserInfo(),this.fetchUserMeals()}},{key:"render",value:function(){var e=this,t=this.props.location.pathname,a=this.state.formattedData;return s.a.createElement("div",{className:"user-home"},s.a.createElement("header",null,s.a.createElement(C,{activePath:t})),s.a.createElement("section",null,s.a.createElement("h2",null,"".concat(this.state.userName,"'s Meals list")),s.a.createElement("div",{className:"user-home__filter"},s.a.createElement("div",{className:"filter-item"},s.a.createElement("label",{htmlFor:"birthday"},"From Date:"),s.a.createElement(A.a,{selected:this.state.fromDate,onChange:this.handleFromChange})),s.a.createElement("div",{className:"filter-item"},s.a.createElement("label",{htmlFor:"birthday"},"To Date:"),s.a.createElement(A.a,{selected:this.state.toDate,onChange:this.handleToChange})),s.a.createElement("div",{className:"filter-item--actions"},s.a.createElement("button",{className:"btn btn-primary",onClick:this.filterByDateRange},"Search"),s.a.createElement("button",{className:"btn btn-primary",onClick:this.clearDateRange},"clear")),s.a.createElement("div",{className:"filter-item--actions"},s.a.createElement("button",{className:"btn btn-primary",onClick:this.addMeal},"Add"))),s.a.createElement("div",{className:"user-home__list"},Object.keys(a).map((function(t,n){return s.a.createElement("div",{key:n,className:"meals-list__year"},s.a.createElement("h3",null,"Year- ".concat(t)),Object.keys(a[t]).map((function(n,r){return s.a.createElement("div",{key:r,className:"meals-list__month"},s.a.createElement("h4",null,"".concat(U[n])),s.a.createElement("div",{className:"meals-list__header"},s.a.createElement("div",{className:"meals-list__values--item"},"Meal"),s.a.createElement("div",{className:"meals-list__values--item"},"Calories"),s.a.createElement("div",{className:"meals-list__values--item"},"Date"),s.a.createElement("div",{className:"meals-list__values--item"},"Action")),a[t][n].map((function(a,r){return s.a.createElement("div",{key:r,className:"meals-list__values"},s.a.createElement("div",{className:"meals-list__values--item"},a.name),s.a.createElement("div",{className:"meals-list__values--item"},s.a.createElement("span",null,a.calories),a.calories<=e.state.userDailyTarget?s.a.createElement("span",{className:"badge badge-green"},"Success"):s.a.createElement("span",{className:"badge badge-red"},"Exceed")),s.a.createElement("div",{className:"meals-list__values--item"},e.formattedDate(a.created_at)),s.a.createElement("div",{className:"meals-list__values--item actions"},s.a.createElement("span",{className:"btn btn-primary",onClick:function(s){return e.onEdit(t,n,r,a)}},"Edit"),s.a.createElement("span",{className:"btn btn-danger",onClick:function(s){return e.onDelete(t,n,r,a)}},"Delete")))})))})))})))),s.a.createElement("footer",null))}}]),a}(r.Component),T=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){var t;n.setState((t={},Object(u.a)(t,e.target.name,e.target.value),Object(u.a)(t,"error",""),t))},n.onRegisterClickHandler=function(){if(n.state.name)if("string"===typeof n.state.name)if(n.state.email)if(_(n.state.email))if(n.state.password&&n.state.cpassword)if(n.state.password&&n.state.cpassword&&n.state.password!==n.state.cpassword)n.setState({error:"Password not matched."});else{var e={email:n.state.email,password:n.state.password,name:n.state.name,dailyTarget:100};E.register({},e,(function(e){n.props.history.push("/login")}),(function(e){n.setState({error:e.message})}))}else n.setState({error:"Please enter Password."});else n.setState({error:"Email is not valid."});else n.setState({error:"Please enter Email."});else n.setState({error:"Name is invalid."});else n.setState({error:"Please enter Name."})},n.state={email:"",name:"",password:"",cpassword:"",error:""},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login"},s.a.createElement("div",{className:"login__heading"},s.a.createElement("h2",null,"Register")),this.state.error?s.a.createElement("div",{className:"login__error"},this.state.error):null,s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Name"),s.a.createElement("input",{className:"login__control",type:"text",name:"name",value:this.state.name,onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{className:"login__control",type:"email",name:"email",value:this.state.email,onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{className:"login__control",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Confirm password"),s.a.createElement("input",{className:"login__control",type:"password",name:"cpassword",value:this.state.cpassword,onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__inputs"},s.a.createElement("input",{className:"login__actions--direct",type:"button",value:"Register",onClick:this.onRegisterClickHandler})),s.a.createElement("div",{className:"login__links"},s.a.createElement(m.b,{to:{pathname:"/login",label:"login"}},"Login")))}}]),a}(r.Component),M=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){var t;n.setState((t={},Object(u.a)(t,e.target.name,e.target.value),Object(u.a)(t,"error",""),t))},n.onResetClickHandler=function(){if(_(n.state.email))if(n.state.password&&n.state.cpassword)if(n.state.password&&n.state.cpassword&&n.state.password!==n.state.cpassword)n.setState({error:"Password not matched."});else{var e={_id:n._id,password:n.state.password};E.resetPassword({},e,(function(e){n.props.history.push("/login")}),(function(e){n.setState({error:e.message})}))}else n.setState({error:"Please enter Password."});else n.setState({error:"Email is not valid."})},n.state={email:"",password:"",cpassword:"",error:""},n._id=n.props.match.params._id,n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.getUser({_id:this._id},(function(t){e.setState({email:t.email})}),(function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login"},s.a.createElement("div",{className:"login__heading"},s.a.createElement("h2",null,"Reset Password")),this.state.error?s.a.createElement("div",{className:"login__error"},this.state.error):null,s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Email"),s.a.createElement("input",{className:"login__control",type:"email",name:"email",value:this.state.email,disabled:!0})),s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{className:"login__control",type:"password",name:"password",onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Confirm password"),s.a.createElement("input",{className:"login__control",type:"password",name:"cpassword",onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__actions"},s.a.createElement("input",{className:"login__actions--direct",type:"button",value:"Reset",onClick:this.onResetClickHandler})))}}]),a}(r.Component),H=function(e){Object(h.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).fetchMeal=function(){S.getMeal({_id:n.state.mealID},(function(e){n.setState({name:e.meal.name,calories:e.meal.calories})}),(function(e){return console.error(e)}))},n.onChangeHandler=function(e){var t;n.setState((t={},Object(u.a)(t,e.target.name,e.target.value),Object(u.a)(t,"error",""),t))},n.onClickHandler=function(){n.state.name?n.state.calories?n.state.calories<0?n.setState({error:"Calories should be non zero."}):n.state.mealID?n.onSave():n.onCreate():n.setState({error:"Please enter calories."}):n.setState({error:"Please enter Email."})},n.onCreate=function(){var e={name:n.state.name,calories:1*n.state.calories,user_id:n.state.userID};S.createMeal({},e,(function(){n.props.history.push("/?userID="+e._id,{userID:e.user_id})}),(function(e){console.error(e)}))},n.onSave=function(){var e={name:n.state.name,calories:1*n.state.calories,user_id:n.state.userID,_id:n.state.mealID};S.updateMeal({},e,(function(){n.props.history.push("/?userID="+e._id,{userID:e.user_id})}),(function(e){console.error(e)}))},n.state={name:"",calories:""},n.props.location&&n.props.location.state&&n.props.location.state.mealID&&(n.state.mealID=n.props.location.state.mealID),n.props.location&&n.props.location.state&&n.props.location.state.userID&&(n.state.userID=n.props.location.state.userID),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.state.mealID&&this.fetchMeal()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login"},s.a.createElement("div",{className:"login__heading"},s.a.createElement("h2",null,"Meal")),this.state.error?s.a.createElement("div",{className:"login__error"},this.state.error):null,s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Name"),s.a.createElement("input",{type:"text",className:"login__control",name:"name",value:this.state.name,onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__inputs"},s.a.createElement("label",null,"Calories"),s.a.createElement("input",{type:"number",className:"login__control",name:"calories",value:this.state.calories,onChange:function(t){return e.onChangeHandler(t)}})),s.a.createElement("div",{className:"login__actions"},s.a.createElement("input",{type:"button",className:"login__actions--direct",value:"Save",onClick:this.onClickHandler})))}}]),a}(r.Component),R=new i.a,L=function(e){var t=e.component,a=Object(n.a)(e,["component"]);return s.a.createElement(c.b,Object.assign({},a,{render:function(e){return R.get("_id")?s.a.createElement(t,e):s.a.createElement(c.a,{to:"/login"})}}))};l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m.a,null,s.a.createElement(c.b,{path:"/login",exact:!0,component:N}),s.a.createElement(c.b,{path:"/register",exact:!0,component:T}),s.a.createElement(c.b,{path:"/reset-password/:_id",exact:!0,component:M}),s.a.createElement(L,{path:"/",exact:!0,component:P}),s.a.createElement(L,{path:"/account",exact:!0,component:j}),s.a.createElement(L,{path:"/admin",exact:!0,component:k}),s.a.createElement(L,{path:"/meal",exact:!0,component:H}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,a){},71:function(e,t,a){},83:function(e,t,a){e.exports=a(171)},88:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.c0ad617c.chunk.js.map