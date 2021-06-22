(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(21),o=a.n(s),i=a(8),c=(a(31),a(25)),l=a(2),u=a(3),m=a(22),_=a(23),d=new(function(){function e(t){var a=t.serverUrl,n=t.cohort,r=t.token;Object(m.a)(this,e),this._serverUrl=a,this._cohort=n,this._token=r}return Object(_.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"sendUserInfo",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:a})}).then(this._checkResponse)}},{key:"sendNewCard",value:function(e){var t=e.name,a=e.link;return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:a})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then(this._checkResponse)}},{key:"sendUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({cardID:e,like:t})}).then(this._checkResponse)}}]),e}())({serverUrl:"https://mesto.nomoreparties.co/v1",cohort:"cohort-24",token:"edb7481a-fcf7-4397-94a7-daeb2327e95b"}),p="https://auth.nomoreparties.co",j=function(e){return e.ok?e.json():Promise.reject(e)},h=r.a.createContext(),b=a(17),f=a.p+"static/media/Mesto-logo.5f3664ca.svg",g=a(0);var v=function(e){var t=e.expandNavBar,a=r.a.useState(!1),n=Object(l.a)(a,2),s=n[0],o=n[1];return s?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("button",{className:"page__button page__button_type_close",onClick:function(){o(!1),t(!1)},"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",type:"button"})}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"page__button header__button",onClick:function(){o(!0),t(!0)},children:[Object(g.jsx)("div",{className:"header__button header__button_burger"}),Object(g.jsx)("div",{className:"header__button header__button_burger"}),Object(g.jsx)("div",{className:"header__button header__button_burger"})]})})};var O=function(e){var t=e.onSignOut,a=e.email;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("p",{className:"header__email",children:a}),Object(g.jsx)("button",{className:"header__button header__button_logout page__button",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var x=function(e){var t=e.onSignOut,a=e.email;return Object(g.jsxs)("div",{className:"header__expanded-nav-bar",children:[Object(g.jsx)("p",{className:"header__email",children:a}),Object(g.jsx)("button",{className:"header__button header__button_logout page__button",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var N=function(e){var t=e.onSignOut,a=e.email,n=Object(u.h)(),s=Object(b.useMediaQuery)({query:"(max-width: 480px)"}),o=Object(b.useMediaQuery)({query:"(min-width: 481px)"}),c=r.a.useState(!1),m=Object(l.a)(c,2),_=m[0],d=m[1];return r.a.useEffect((function(){d(!1)}),[o,n]),Object(g.jsxs)("div",{className:"header__content",children:[_&&Object(g.jsx)(x,{onSignOut:t,email:a}),Object(g.jsxs)("div",{className:"header__main page__animation",children:[Object(g.jsx)("img",{className:"logo",src:f,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}),Object(g.jsx)("nav",{className:"header__nav-bar",children:"/"===n.pathname&&(s&&Object(g.jsx)(v,{expandNavBar:d})||o&&Object(g.jsx)(O,{onSignOut:t,email:a}))||"./sign-in"===n.pathname&&Object(g.jsx)(i.c,{className:"header__button page__button",to:"./sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})||"./sign-up"===n.pathname&&Object(g.jsx)(i.c,{className:"header__button page__button",to:"./sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})};var k=function(e){var t=e.onSignOut,a=e.email;return Object(g.jsx)("header",{className:"header page__section page__animation",children:Object(g.jsx)(N,{onSignOut:t,email:a})})};var y=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,s=e.onCardDelete,o=r.a.useContext(h),i=t.owner._id===o._id,c=t.likes.some((function(e){return e._id===o._id}));return Object(g.jsxs)("figure",{className:"element",children:[Object(g.jsx)("img",{className:"element__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),i&&Object(g.jsx)("button",{className:"element__button-delete page__button",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){s(t)}}),Object(g.jsxs)("figcaption",{className:"element__figcaption",children:[Object(g.jsx)("h2",{className:"element__card-title",children:t.name}),Object(g.jsxs)("div",{className:"element__like-section",children:[Object(g.jsx)("button",{className:"element__button-like page__button ".concat(c?"button-like_active":""),type:"button",onClick:function(){n(t)}}),Object(g.jsx)("p",{className:"element__like-counter",children:t.likes.length})]})]})]})};var C=function(e){var t=e.cards,a=e.onEditProfile,n=e.onAddPlace,s=e.onEditAvatar,o=e.onCardClick,i=e.onCardLike,c=e.onCardDelete,l=r.a.useContext(h),u=l.name,m=l.about,_=l.avatar;return Object(g.jsxs)("main",{className:"content page__block-alignment page__main",children:[Object(g.jsxs)("section",{className:"profile page__section page__animation page__profile",children:[Object(g.jsx)("div",{className:"profile__avatar avatar-form-open-button",style:{backgroundImage:"url(".concat(_,")")},onClick:s}),Object(g.jsxs)("div",{className:"profile__info",children:[Object(g.jsx)("h1",{className:"profile__title",children:u}),Object(g.jsx)("button",{className:"profile__change-button page__button profile-form-open-button",onClick:a,type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(g.jsx)("p",{className:"profile__subtitle",children:m||""})]}),Object(g.jsx)("button",{className:"profile__add-button page__button add-card-form-open-button",onClick:n,type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]}),Object(g.jsx)("section",{className:"elements page__section page__animation",children:t.map((function(e){return Object(g.jsx)(y,{card:e,onCardClick:o,onCardLike:i,onCardDelete:c},e._id)}))})]})};var S=function(){return Object(g.jsx)("footer",{className:"footer page__section page__animation",children:Object(g.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var M=function(e){var t=e.name,a=e.isOpen,n=e.onClose,s=e.children,o=a?"popup__flexed popup_opened":"popup__flexed";return r.a.useEffect((function(){if(a){var e=function(e){"Escape"===e.key&&n()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}}),[a,n]),Object(g.jsx)("div",{className:"popup popup_".concat(t," ").concat(o),onClick:function(e){e.target===e.currentTarget&&n()},children:Object(g.jsxs)("div",{className:"popup__container popup__container_".concat(t),children:[Object(g.jsx)("button",{className:"page__button page__button_type_close popup__button-close",onClick:function(e){e.target===e.currentTarget&&n()},"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button"}),s]})})};var T=function(e){var t=e.card,a=e.onClose;return Object(g.jsx)(M,{name:"open-image",isOpen:t,onClose:a,children:Object(g.jsxs)("figure",{className:"popup__figure",children:[Object(g.jsx)("img",{className:"popup__image",src:t?t.link:"",alt:t?"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430: ".concat(t.name):""}),Object(g.jsx)("figcaption",{className:"popup__figcaption",children:t?t.name:""})]})})},w=a(10),E=a(5);var L=function(e){var t=e.name,a=e.title,n=e.submitText,r=e.isOpen,s=e.onClose,o=e.onSubmit,i=e.submitButtonState,c=e.theme,l=e.children;return Object(g.jsx)(M,{name:t,isOpen:r,onClose:s,children:Object(g.jsxs)("form",{className:"form form_theme_".concat(c),onSubmit:o,name:"".concat(t,"-form"),noValidate:!0,autoComplete:"off",children:[Object(g.jsx)("h2",{className:"form__heading",children:a}),l,Object(g.jsx)("button",{className:"page__button form__button-save form__button-save_theme_".concat(c),disabled:!i,type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443",children:n})]})})};var U=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,s=e.isSubmitting,o="white",i=r.a.useContext(h),c=r.a.useState({name:{value:"",valid:!0,errorMessage:""},signing:{value:"",valid:!0,errorMessage:""}}),u=Object(l.a)(c,2),m=u[0],_=u[1],d=!(!m.name.valid||!m.signing.valid),p=s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",j=m.name.errorMessage?"form__input_error":"",b=m.name.errorMessage?"form__input-error_active":"",f=m.name.errorMessage,v=m.signing.errorMessage?"form__input_error":"",O=m.signing.errorMessage?"form__input-error_active":"",x=m.signing.errorMessage;function N(e){var t=e.target,a=t.name,n=t.value,r=t.validity.valid,s=t.validationMessage;_((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(w.a)({},a,{value:n,valid:r,errorMessage:s}))}))}return r.a.useEffect((function(){t&&_((function(e){return Object(E.a)(Object(E.a)({},e),{},{name:{value:i.name,valid:!0,errorMessage:""},signing:{value:i.about,valid:!0,errorMessage:""}})}))}),[i,t]),Object(g.jsx)(L,{name:"change-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitText:p,isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:m.name.value,about:m.signing.value})},submitButtonState:d,theme:o,children:Object(g.jsxs)("fieldset",{className:"form__profile-information",children:[Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(o," ").concat(j),value:m.name?m.name.value:"",onChange:N,type:"text",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:2,maxLength:40}),Object(g.jsx)("span",{className:"form__input-error ".concat(b),children:f})]}),Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(o," ").concat(v),value:m.signing?m.signing.value:"",onChange:N,type:"text",name:"signing",placeholder:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c",required:!0,minLength:2,maxLength:200}),Object(g.jsx)("span",{className:"form__input-error ".concat(O),children:x})]})]})})};var D=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,s=e.isSubmitting,o="white",i=r.a.useState({}),c=Object(l.a)(i,2),u=c[0],m=c[1],_=!!(u.value&&u.value&&u.valid&&u.valid),d=s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",p=u.errorMessage?"form__input_error":"",j=u.errorMessage?"form__input-error_active":"";return r.a.useEffect((function(){t&&m({value:"",valid:!0,errorMessage:""})}),[t]),Object(g.jsx)(L,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitText:d,isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:u.value})},submitButtonState:_,theme:o,children:Object(g.jsx)("fieldset",{className:"form__profile-information",children:Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(o," ").concat(p),value:u.value||"",onChange:function(e){var t=e.target,a=t.value,n=t.validity.valid,r=t.validationMessage;m({value:a,valid:n,errorMessage:r})},type:"url",name:"image-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(g.jsx)("span",{className:"form__input-error ".concat(j),children:u.errorMessage})]})})})};var R=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,s=e.isSubmitting,o="white",i=r.a.useState({location:{value:"",valid:!1,errorMessage:""},link:{value:"",valid:!1,errorMessage:""}}),c=Object(l.a)(i,2),u=c[0],m=c[1],_=!(!u.location.valid||!u.link.valid),d=s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",p=u.location.errorMessage?"form__input_error":"",j=u.location.errorMessage?"form__input-error_active":"",h=u.location.errorMessage,b=u.link.errorMessage?"form__input_error":"",f=u.link.errorMessage?"form__input-error_active":"",v=u.link.errorMessage;function O(e){var t=e.target,a=t.name,n=t.value,r=t.validity.valid,s=t.validationMessage;m((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(w.a)({},a,{value:n,valid:r,errorMessage:s}))}))}return r.a.useEffect((function(){t&&m({location:{value:"",valid:!1,errorMessage:""},link:{value:"",valid:!1,errorMessage:""}})}),[t]),Object(g.jsx)(L,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:d,isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:u.location.value,link:u.link.value})},submitButtonState:_,theme:o,children:Object(g.jsxs)("fieldset",{className:"form__profile-information",children:[Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(o," ").concat(p),value:u.location?u.location.value:"",onChange:O,type:"text",name:"location",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:2,maxLength:30}),Object(g.jsx)("span",{className:"form__input-error ".concat(j),children:h})]}),Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(o," ").concat(b),value:u.link?u.link.value:"",onChange:O,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(g.jsx)("span",{className:"form__input-error ".concat(f),children:v})]})]})})};var P=function(e){var t=e.onClose,a=e.handleCardDelete,n=e.cardForDeletion,r=e.isSubmitting?"\u0414\u0430":"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...";return Object(g.jsx)(L,{name:"confirm-deletion",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitText:r,isOpen:n,onClose:t,onSubmit:function(e){e.preventDefault(),a(n)},submitButtonState:n,theme:"white"})};var A=function(e){var t=e.name,a=e.title,n=e.submitText,r=e.onSubmit,s=e.submitButtonState,o=e.isRegister,c=e.theme,l=e.children;return Object(g.jsx)("div",{className:"page-with-form page__block-alignment page__animation",children:Object(g.jsx)("div",{className:"page-with-form__container page-with-form__container_".concat(t),children:Object(g.jsxs)("form",{className:"form form_theme_".concat(c),onSubmit:r,name:"".concat(t,"-form"),noValidate:!0,autoComplete:"off",children:[Object(g.jsx)("h2",{className:"form__heading form__heading_style",children:a}),l,Object(g.jsx)("button",{className:"page__button form__button-save form__button-save_margin form__button-save_theme_".concat(c),disabled:!s,type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443",children:n}),o&&Object(g.jsxs)("p",{className:"form__redirection",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(g.jsx)(i.b,{to:"/sign-in",className:"form__link page__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})};var q=function(e){var t=e.onLogin,a=e.isSubmitting,n=e.serverRequestStatus,s=r.a.useState({email:{value:"",valid:!1,errorMessage:""},password:{value:"",valid:!1,errorMessage:""}}),o=Object(l.a)(s,2),i=o[0],c=o[1],u="dark",m=!(!i.email.valid||!i.password.valid),_=a?"\u0412\u043e\u0439\u0442\u0438":"\u0412\u0445\u043e\u0434...",d=i.email.errorMessage?"form__input_error":"",p=i.email.errorMessage?"form__input-error_active":"",j=i.email.errorMessage,h=i.password.errorMessage?"form__input_error":"",b=i.password.errorMessage?"form__input-error_active":"",f=i.password.errorMessage;function v(e){var t=e.target,a=t.name,n=t.value,r=t.validity.valid,s=t.validationMessage;c((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(w.a)({},a,{value:n,valid:r,errorMessage:s}))}))}return r.a.useEffect((function(){"success"===n&&c({email:{value:"",valid:!1,errorMessage:""},password:{value:"",valid:!1,errorMessage:""}})}),[n]),Object(g.jsx)(A,{name:"login",title:"\u0412\u0445\u043e\u0434",submitText:_,onSubmit:function(e){e.preventDefault(),i.email.value&&i.password.value&&t(i.email.value,i.password.value)},submitButtonState:m,isRegister:!1,theme:u,children:Object(g.jsxs)("fieldset",{className:"form__profile-information form__profile-information_margin",children:[Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(u," ").concat(d),value:i.email?i.email.value:"",onChange:v,type:"email",name:"email",placeholder:"Email",required:!0,minLength:6,maxLength:30}),Object(g.jsx)("span",{className:"form__input-error ".concat(p),children:j})]}),Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(u," ").concat(h),value:i.password?i.password.value:"",onChange:v,type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:6}),Object(g.jsx)("span",{className:"form__input-error ".concat(b),children:f})]})]})})};var B=function(e){var t=e.onRegister,a=e.isSubmitting,n=e.serverRequestStatus,s=r.a.useState({email:{value:"",valid:!1,errorMessage:""},password:{value:"",valid:!1,errorMessage:""}}),o=Object(l.a)(s,2),i=o[0],c=o[1],u="dark",m=!(!i.email.valid||!i.password.valid),_=a?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f...",d=i.email.errorMessage?"form__input_error":"",p=i.email.errorMessage?"form__input-error_active":"",j=i.email.errorMessage,h=i.password.errorMessage?"form__input_error":"",b=i.password.errorMessage?"form__input-error_active":"",f=i.password.errorMessage;function v(e){var t=e.target,a=t.name,n=t.value,r=t.validity.valid,s=t.validationMessage;c((function(e){return Object(E.a)(Object(E.a)({},e),{},Object(w.a)({},a,{value:n,valid:r,errorMessage:s}))}))}return r.a.useEffect((function(){"success"===n&&c({email:{value:"",valid:!1,errorMessage:""},password:{value:"",valid:!1,errorMessage:""}})}),[n]),Object(g.jsx)(A,{name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitText:_,onSubmit:function(e){e.preventDefault(),i.email.value&&i.password.value&&t(i.email.value,i.password.value)},submitButtonState:m,isRegister:!0,theme:u,children:Object(g.jsxs)("fieldset",{className:"form__profile-information form__profile-information_margin",children:[Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(u," ").concat(d),value:i.email?i.email.value:"",onChange:v,type:"email",name:"email",placeholder:"Email",required:!0,minLength:6,maxLength:30}),Object(g.jsx)("span",{className:"form__input-error ".concat(p),children:j})]}),Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(u," ").concat(h),value:i.password?i.password.value:"",onChange:v,type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:6}),Object(g.jsx)("span",{className:"form__input-error ".concat(b),children:f})]})]})})};var I=function(e){var t=e.isOpen,a=e.onClose,n=e.popupStatusMessage,r=Object(u.g)(),s="success"===n.errorType,o=s?"popup__image-status_type_success":"popup__image-status_type_reject";return Object(g.jsx)(M,{name:"status",isOpen:t,onClose:function(){a(),s&&r.push("/sign-in")},children:Object(g.jsxs)("div",{className:"popup__status",children:[Object(g.jsx)("div",{className:"popup__image-status ".concat(o)}),Object(g.jsx)("h2",{className:"popup__heading popup__heading_status",children:n.errorText})]})})},F=a(26),J=function(e){var t=e.component,a=Object(F.a)(e,["component"]);return Object(g.jsx)(u.b,{children:function(){return a.loggedIn?Object(g.jsx)(t,Object(E.a)({},a)):Object(g.jsx)(u.a,{to:"./sign-in"})}})};var z=function(){return Object(g.jsx)("div",{className:"spinner page__section",children:Object(g.jsx)("div",{className:"spinner__body"})})};var H=function(){var e=r.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],s=r.a.useState(!1),o=Object(l.a)(s,2),i=o[0],m=o[1],_=r.a.useState(!1),b=Object(l.a)(_,2),f=b[0],v=b[1],O=r.a.useState(null),x=Object(l.a)(O,2),N=x[0],y=x[1],M=r.a.useState(null),w=Object(l.a)(M,2),E=w[0],L=w[1],A=r.a.useState(!1),F=Object(l.a)(A,2),H=F[0],Q=F[1],V=r.a.useState(""),G=Object(l.a)(V,2),Y=G[0],K=G[1],W=Object(u.g)(),X=r.a.useState({name:"",about:"",avatar:""}),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=r.a.useState(!1),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],se=r.a.useState([]),oe=Object(l.a)(se,2),ie=oe[0],ce=oe[1],le=r.a.useState(!0),ue=Object(l.a)(le,2),me=ue[0],_e=ue[1],de=r.a.useState(!1),pe=Object(l.a)(de,2),je=pe[0],he=pe[1],be=r.a.useState({errorStatus:null,message:""}),fe=Object(l.a)(be,2),ge=fe[0],ve=fe[1];function Oe(){v(!1),n(!1),m(!1),L(null),y(null),he(!1)}function xe(e){var t={400:{errorType:"fault",errorText:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"},401:{errorType:"fault",errorText:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"},201:{errorType:"success",errorText:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"},other:{errorType:"fault",errorText:"\u0427\u0442\u043e - \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."},serverError:{errorType:"fault",errorText:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435."}};ve("undefined"===typeof e?{errorType:t.other.errorType,errorText:t.other.errorText}:{errorType:t[e].errorType,errorText:t[e].errorText})}function Ne(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(p,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(j)).then((function(e){e&&(K(e.data.email),Q(!0),W.push("./"))})).catch((function(e){he(!0),xe(e.status)}))}return r.a.useEffect((function(){H&&Promise.all([d.getUserInfo(),d.getCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];ee(a),ce(n),re(!0)})).catch((function(e){he(!0),xe(e.status)}))}),[H]),r.a.useEffect((function(){Ne()}),[]),Object(g.jsx)(h.Provider,{value:$,children:Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)(k,{onSignOut:function(){localStorage.removeItem("jwt"),Q(!1),W.push("./sign-in")},email:Y}),Object(g.jsxs)(u.d,{children:[Object(g.jsx)(u.b,{path:"./sign-up",children:Object(g.jsx)(B,{onRegister:function(e,t){_e(!1),function(e,t){return fetch("".concat(p,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(j)}(e,t).then((function(e){e&&(Q(!1),he(!0),xe(201))})).catch((function(e){he(!0),xe(e.status)})).finally((function(){_e(!0)}))},isSubmitting:me,serverRequestStatus:ge.errorType})}),Object(g.jsx)(u.b,{path:"./sign-in",children:Object(g.jsx)(q,{onLogin:function(e,t){_e(!1),e&&t&&function(e,t){return fetch("".concat(p,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(j)}(e,t).then((function(t){t.token&&(localStorage.setItem("jwt",t.token),K(e),Q(!0),W.push("./"))})).catch((function(e){he(!0),xe(e.status)})).finally((function(){_e(!0)}))},isSubmitting:me,serverRequestStatus:ge.errorType})}),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(u.d,{children:[!ne&&Object(g.jsx)(z,{}),Object(g.jsx)(J,{path:"./",loggedIn:H,cards:ie,onEditProfile:function(){v(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){n(!0)},onCardClick:function(e){L(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===$._id}));d.changeLikeCardStatus(e._id,!t).then((function(t){ce((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))})).catch((function(e){he(!0),xe(e.status)}))},onCardDelete:y,isUserDataReceived:ne,component:C})]}),Object(g.jsx)(S,{})]})]}),Object(g.jsx)(I,{isOpen:je,onClose:Oe,popupStatusMessage:ge}),Object(g.jsx)(U,{isOpen:f,onClose:Oe,onUpdateUser:function(e){_e(!1),d.sendUserInfo(e).then((function(e){ee(e),Oe()})).catch((function(e){he(!0),xe(e.status)})).finally((function(){_e(!0)}))},isSubmitting:me}),Object(g.jsx)(D,{isOpen:a,onClose:Oe,onUpdateAvatar:function(e){_e(!1),d.sendUserAvatar(e).then((function(e){ee(e),Oe()})).catch((function(e){he(!0),xe(e.status)})).finally((function(){_e(!0)}))},isSubmitting:me}),Object(g.jsx)(R,{isOpen:i,onClose:Oe,onAddPlace:function(e){_e(!1),d.sendNewCard(e).then((function(e){ce([e].concat(Object(c.a)(ie))),Oe()})).catch((function(e){he(!0),xe(e.status)})).finally((function(){_e(!0)}))},isSubmitting:me}),Object(g.jsx)(T,{card:E,onClose:Oe}),Object(g.jsx)(P,{onClose:Oe,handleCardDelete:function(e){_e(!1),d.deleteCard(e._id).then((function(){ce(ie.filter((function(t){return t._id!==e._id}))),Oe()})).catch((function(e){he(!0),xe(e.status)})).finally((function(){_e(!0)}))},cardForDeletion:N,isSubmitting:me})]})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))};o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(H,{})})}),document.getElementById("root")),Q()}},[[38,1,2]]]);
//# sourceMappingURL=main.3cfd6368.chunk.js.map