(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(21),s=n.n(r),i=n(7),c=(n(31),n(25)),u=n(2),l=n(3),m=n(22),_=n(23),p=new(function(){function e(t){var n=t.serverUrl,a=t.cohort,o=t.token;Object(m.a)(this,e),this._serverUrl=n,this._cohort=a,this._token=o}return Object(_.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"sendUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"sendNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then(this._checkResponse)}},{key:"sendUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._serverUrl,"/").concat(this._cohort,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({cardID:e,like:t})}).then(this._checkResponse)}}]),e}())({serverUrl:"https://mesto.nomoreparties.co/v1",cohort:"cohort-24",token:"edb7481a-fcf7-4397-94a7-daeb2327e95b"}),d="https://auth.nomoreparties.co",h=function(e){return e.ok?e.json():Promise.reject(e)},j=o.a.createContext(),f=n(17),b=n.p+"static/media/Mesto-logo.5f3664ca.svg",g=n(0);var O=function(e){var t=e.expandNavBar,n=o.a.useState(!1),a=Object(u.a)(n,2),r=a[0],s=a[1];return r?Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("button",{className:"page__button page__button_type_close",onClick:function(){s(!1),t(!1)},"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",type:"button"})}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"page__button header__button",onClick:function(){s(!0),t(!0)},children:[Object(g.jsx)("div",{className:"header__button header__button_burger"}),Object(g.jsx)("div",{className:"header__button header__button_burger"}),Object(g.jsx)("div",{className:"header__button header__button_burger"})]})})};var v=function(e){var t=e.onSignOut,n=e.email;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("p",{className:"header__email",children:n}),Object(g.jsx)("button",{className:"header__button header__button_logout page__button",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var x=function(e){var t=e.onSignOut,n=e.email;return Object(g.jsxs)("div",{className:"header__expanded-nav-bar",children:[Object(g.jsx)("p",{className:"header__email",children:n}),Object(g.jsx)("button",{className:"header__button header__button_logout page__button",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var N=function(e){var t=e.onSignOut,n=e.email,a=Object(l.h)(),r=Object(f.useMediaQuery)({query:"(max-width: 480px)"}),s=Object(f.useMediaQuery)({query:"(min-width: 481px)"}),c=o.a.useState(!1),m=Object(u.a)(c,2),_=m[0],p=m[1];return o.a.useEffect((function(){p(!1)}),[s,a]),Object(g.jsxs)("div",{className:"header__content",children:[_&&Object(g.jsx)(x,{onSignOut:t,email:n}),Object(g.jsxs)("div",{className:"header__main page__animation",children:[Object(g.jsx)("img",{className:"logo",src:b,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}),Object(g.jsx)("nav",{className:"header__nav-bar",children:"/"===a.pathname&&(r&&Object(g.jsx)(O,{expandNavBar:p})||s&&Object(g.jsx)(v,{onSignOut:t,email:n}))||"/sign-in"===a.pathname&&Object(g.jsx)(i.c,{className:"header__button page__button",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})||"/sign-up"===a.pathname&&Object(g.jsx)(i.c,{className:"header__button page__button",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})};var C=function(e){var t=e.onSignOut,n=e.email;return Object(g.jsx)("header",{className:"header page__section page__animation",children:Object(g.jsx)(N,{onSignOut:t,email:n})})};var k=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,r=e.onCardDelete,s=o.a.useContext(j),i=t.owner._id===s._id,c=t.likes.some((function(e){return e._id===s._id}));return Object(g.jsxs)("figure",{className:"element",children:[Object(g.jsx)("img",{className:"element__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),i&&Object(g.jsx)("button",{className:"element__button-delete page__button",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){r(t)}}),Object(g.jsxs)("figcaption",{className:"element__figcaption",children:[Object(g.jsx)("h2",{className:"element__card-title",children:t.name}),Object(g.jsxs)("div",{className:"element__like-section",children:[Object(g.jsx)("button",{className:"element__button-like page__button ".concat(c?"button-like_active":""),type:"button",onClick:function(){a(t)}}),Object(g.jsx)("p",{className:"element__like-counter",children:t.likes.length})]})]})]})};var y=function(e){var t=e.cards,n=e.onEditProfile,a=e.onAddPlace,r=e.onEditAvatar,s=e.onCardClick,i=e.onCardLike,c=e.onCardDelete,u=o.a.useContext(j),l=u.name,m=u.about,_=u.avatar;return Object(g.jsxs)("main",{className:"content page__block-alignment page__main",children:[Object(g.jsxs)("section",{className:"profile page__section page__animation page__profile",children:[Object(g.jsx)("div",{className:"profile__avatar avatar-form-open-button",style:{backgroundImage:"url(".concat(_,")")},onClick:r}),Object(g.jsxs)("div",{className:"profile__info",children:[Object(g.jsx)("h1",{className:"profile__title",children:l}),Object(g.jsx)("button",{className:"profile__change-button page__button profile-form-open-button",onClick:n,type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(g.jsx)("p",{className:"profile__subtitle",children:m||""})]}),Object(g.jsx)("button",{className:"profile__add-button page__button add-card-form-open-button",onClick:a,type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]}),Object(g.jsx)("section",{className:"elements page__section page__animation",children:t.map((function(e){return Object(g.jsx)(k,{card:e,onCardClick:s,onCardLike:i,onCardDelete:c},e._id)}))})]})};var S=function(){return Object(g.jsx)("footer",{className:"footer page__section page__animation",children:Object(g.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var T=function(e){var t=e.name,n=e.isOpen,a=e.onClose,r=e.children,s=n?"popup__flexed popup_opened":"popup__flexed";return o.a.useEffect((function(){if(n){var e=function(e){"Escape"===e.key&&a()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}}),[n,a]),Object(g.jsx)("div",{className:"popup popup_".concat(t," ").concat(s),onClick:function(e){e.target===e.currentTarget&&a()},children:Object(g.jsxs)("div",{className:"popup__container popup__container_".concat(t),children:[Object(g.jsx)("button",{className:"page__button page__button_type_close popup__button-close",onClick:function(e){e.target===e.currentTarget&&a()},"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button"}),r]})})};var w=function(e){var t=e.card,n=e.onClose;return Object(g.jsx)(T,{name:"open-image",isOpen:t,onClose:n,children:Object(g.jsxs)("figure",{className:"popup__figure",children:[Object(g.jsx)("img",{className:"popup__image",src:t?t.link:"",alt:t?"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430: ".concat(t.name):""}),Object(g.jsx)("figcaption",{className:"popup__figcaption",children:t?t.name:""})]})})};var E=function(e){var t=e.name,n=e.title,a=e.submitText,o=e.isOpen,r=e.onClose,s=e.onSubmit,i=e.submitButtonState,c=e.theme,u=e.children;return Object(g.jsx)(T,{name:t,isOpen:o,onClose:r,children:Object(g.jsxs)("form",{className:"form form_theme_".concat(c),onSubmit:s,name:"".concat(t,"-form"),noValidate:!0,autoComplete:"off",children:[Object(g.jsx)("h2",{className:"form__heading",children:n}),u,Object(g.jsx)("button",{className:"page__button form__button-save form__button-save_theme_".concat(c),disabled:!i,type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443",children:a})]})})},L=n(13),U=n(10);function D(){var e=o.a.useState({}),t=Object(u.a)(e,2),n=t[0],r=t[1],s=o.a.useState({}),i=Object(u.a)(s,2),c=i[0],l=i[1],m=o.a.useState(!1),_=Object(u.a)(m,2),p=_[0],d=_[1],h=Object(a.useCallback)((function(e){var t=e.target,n=t.name,a=t.value,o=t.validationMessage,s=t.closest("form").checkValidity();r((function(e){return Object(U.a)(Object(U.a)({},e),{},Object(L.a)({},n,a))})),l((function(e){return Object(U.a)(Object(U.a)({},e),{},Object(L.a)({},n,o))})),d(s)}),[r]),j=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];r(e),l(t),d(n)}),[r,l,d]);return console.log(n),console.log(c),console.log(p),{values:n,setValues:r,handleChangeInput:h,errors:c,isValid:p,resetFrom:j}}var R=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,r=e.isSubmitting,s="white",i=D(),c=i.values,u=(i.setValues,i.handleChangeInput),l=i.errors,m=i.isValid,_=i.resetFrom,p=o.a.useContext(j);return o.a.useEffect((function(){t&&_({name:p.name,signing:p.about},{},!1)}),[p,t,_]),Object(g.jsx)(E,{name:"change-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c.name,about:c.signing})},submitButtonState:m,theme:s,children:Object(g.jsxs)("fieldset",{className:"form__profile-information",children:[Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(s," ").concat(l.name&&"form__input_error"),value:c.name||"",onChange:u,type:"text",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:2,maxLength:40}),Object(g.jsx)("span",{className:"form__input-error ".concat(l.name&&"form__input-error_active"),children:l.name})]}),Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(s," ").concat(l.signing&&"form__input_error"),value:c.signing||"",onChange:u,type:"text",name:"signing",placeholder:"\u041f\u043e\u0434\u043f\u0438\u0441\u044c",required:!0,minLength:2,maxLength:200}),Object(g.jsx)("span",{className:"form__input-error ".concat(l.signing&&"form__input-error_active"),children:l.signing})]})]})})};var I=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,r=e.isSubmitting,s="white",i=D(),c=i.values,u=(i.setValues,i.handleChangeInput),l=i.errors,m=i.isValid,_=i.resetFrom;return o.a.useEffect((function(){t&&_()}),[t,_]),Object(g.jsx)(E,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:c.link})},submitButtonState:m,theme:s,children:Object(g.jsx)("fieldset",{className:"form__profile-information",children:Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(s," ").concat(l.link&&"form__input_error"),value:c.link||"",onChange:u,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(g.jsx)("span",{className:"form__input-error ".concat(l.link&&"form__input-error_active"),children:l.link})]})})})};var P=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,r=e.isSubmitting,s="white",i=D(),c=i.values,u=(i.setValues,i.handleChangeInput),l=i.errors,m=i.isValid,_=i.resetFrom;return o.a.useEffect((function(){t&&_()}),[t,_]),Object(g.jsx)(E,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c.location,link:c.link})},submitButtonState:m,theme:s,children:Object(g.jsxs)("fieldset",{className:"form__profile-information",children:[Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(s," ").concat(l.location&&"form__input_error"),value:c.location||"",onChange:u,type:"text",name:"location",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:2,maxLength:30}),Object(g.jsx)("span",{className:"form__input-error ".concat(l.location&&"form__input-error_active"),children:l.location})]}),Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(s," ").concat(l.link&&"form__input_error"),value:c.link||"",onChange:u,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(g.jsx)("span",{className:"form__input-error ".concat(l.link&&"form__input-error_active"),children:l.link})]})]})})};var F=function(e){var t=e.onClose,n=e.handleCardDelete,a=e.cardForDeletion,o=e.isSubmitting?"\u0414\u0430":"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...";return Object(g.jsx)(E,{name:"confirm-deletion",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitText:o,isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n(a)},submitButtonState:a,theme:"white"})};var A=function(e){var t=e.name,n=e.title,a=e.submitText,o=e.onSubmit,r=e.submitButtonState,s=e.isRegister,c=e.theme,u=e.children;return Object(g.jsx)("div",{className:"page-with-form page__block-alignment page__animation",children:Object(g.jsx)("div",{className:"page-with-form__container page-with-form__container_".concat(t),children:Object(g.jsxs)("form",{className:"form form_theme_".concat(c),onSubmit:o,name:"".concat(t,"-form"),noValidate:!0,autoComplete:"off",children:[Object(g.jsx)("h2",{className:"form__heading form__heading_style",children:n}),u,Object(g.jsx)("button",{className:"page__button form__button-save form__button-save_margin form__button-save_theme_".concat(c),disabled:!r,type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443",children:a}),s&&Object(g.jsxs)("p",{className:"form__redirection",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(g.jsx)(i.b,{to:"/sign-in",className:"form__link page__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})};var q=function(e){var t=e.onLogin,n=e.isSubmitting,a=e.serverRequestStatus,r="dark",s=D(),i=s.values,c=(s.setValues,s.handleChangeInput),u=s.errors,l=s.isValid,m=s.resetFrom;return o.a.useEffect((function(){"success"===a&&m()}),[a,m]),Object(g.jsx)(A,{name:"login",title:"\u0412\u0445\u043e\u0434",submitText:n?"\u0412\u043e\u0439\u0442\u0438":"\u0412\u0445\u043e\u0434...",onSubmit:function(e){e.preventDefault(),i.email&&i.password&&t(i.email,i.password)},submitButtonState:l,isRegister:!1,theme:r,children:Object(g.jsxs)("fieldset",{className:"form__profile-information form__profile-information_margin",children:[Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(r," ").concat(u.email&&"form__input_error"),value:i.email||"",onChange:c,type:"email",name:"email",placeholder:"Email",required:!0,minLength:6,maxLength:30}),Object(g.jsx)("span",{className:"form__input-error ".concat(u.email&&"form__input-error_active"),children:u.email})]}),Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(r," ").concat(u.password&&"form__input_error"),value:i.password||"",onChange:c,type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:6}),Object(g.jsx)("span",{className:"form__input-error ".concat(u.password&&"form__input-error_active"),children:u.password})]})]})})};var V=function(e){var t=e.onRegister,n=e.isSubmitting,a=e.serverRequestStatus,r="dark",s=D(),i=s.values,c=(s.setValues,s.handleChangeInput),u=s.errors,l=s.isValid,m=s.resetFrom;return o.a.useEffect((function(){"success"===a&&m()}),[a,m]),Object(g.jsx)(A,{name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitText:n?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f...",onSubmit:function(e){e.preventDefault(),i.email&&i.password&&t(i.email,i.password)},submitButtonState:l,isRegister:!0,theme:r,children:Object(g.jsxs)("fieldset",{className:"form__profile-information form__profile-information_margin",children:[Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(r," ").concat(u.email&&"form__input_error"),value:i.email||"",onChange:c,type:"email",name:"email",placeholder:"Email",required:!0,minLength:6,maxLength:30}),Object(g.jsx)("span",{className:"form__input-error ".concat(u.email&&"form__input-error_active"),children:u.email})]}),Object(g.jsxs)("section",{className:"form__input-section",children:[Object(g.jsx)("input",{className:"form__input form__input_theme_".concat(r," ").concat(u.password&&"form__input_error"),value:i.password||"",onChange:c,type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:6}),Object(g.jsx)("span",{className:"form__input-error ".concat(u.password&&"form__input-error_active"),children:u.password})]})]})})};var B=function(e){var t=e.isOpen,n=e.onClose,a=e.popupStatusMessage,o=Object(l.g)(),r="success"===a.errorType,s=r?"popup__image-status_type_success":"popup__image-status_type_reject";return Object(g.jsx)(T,{name:"status",isOpen:t,onClose:function(){n(),r&&o.push("/sign-in")},children:Object(g.jsxs)("div",{className:"popup__status",children:[Object(g.jsx)("div",{className:"popup__image-status ".concat(s)}),Object(g.jsx)("h2",{className:"popup__heading popup__heading_status",children:a.errorText})]})})},J=n(26);var z=function(){return Object(g.jsx)("div",{className:"spinner page__section",children:Object(g.jsx)("div",{className:"spinner__body"})})},M=function(e){var t=e.component,n=Object(J.a)(e,["component"]);return Object(g.jsx)(l.b,{children:function(){return n.loggedIn?n.isUserDataReceived?Object(g.jsx)(t,Object(U.a)({},n)):Object(g.jsx)(z,{}):Object(g.jsx)(l.a,{to:"/sign-in"})}})};var H=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=o.a.useState(!1),s=Object(u.a)(r,2),i=s[0],m=s[1],_=o.a.useState(!1),f=Object(u.a)(_,2),b=f[0],O=f[1],v=o.a.useState(null),x=Object(u.a)(v,2),N=x[0],k=x[1],T=o.a.useState(null),E=Object(u.a)(T,2),L=E[0],U=E[1],D=o.a.useState(!1),A=Object(u.a)(D,2),J=A[0],z=A[1],H=o.a.useState(""),Q=Object(u.a)(H,2),G=Q[0],Y=Q[1],K=Object(l.g)(),W=o.a.useState({name:"",about:"",avatar:""}),X=Object(u.a)(W,2),Z=X[0],$=X[1],ee=o.a.useState(!1),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],oe=o.a.useState([]),re=Object(u.a)(oe,2),se=re[0],ie=re[1],ce=o.a.useState(!0),ue=Object(u.a)(ce,2),le=ue[0],me=ue[1],_e=o.a.useState(!1),pe=Object(u.a)(_e,2),de=pe[0],he=pe[1],je=o.a.useState({errorStatus:null,message:""}),fe=Object(u.a)(je,2),be=fe[0],ge=fe[1];function Oe(){O(!1),a(!1),m(!1),U(null),k(null),he(!1)}function ve(e){var t={400:{errorType:"fault",errorText:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"},401:{errorType:"fault",errorText:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"},201:{errorType:"success",errorText:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"},other:{errorType:"fault",errorText:"\u0427\u0442\u043e - \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."},serverError:{errorType:"fault",errorText:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435."}};ge("undefined"===typeof e?{errorType:t.other.errorType,errorText:t.other.errorText}:{errorType:t[e].errorType,errorText:t[e].errorText})}function xe(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(d,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(h)).then((function(e){e&&(Y(e.data.email),z(!0),K.push("/"))})).catch((function(e){he(!0),ve(e.status)}))}return o.a.useEffect((function(){J&&Promise.all([p.getUserInfo(),p.getCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];$(n),ie(a),ae(!0)})).catch((function(e){he(!0),ve(e.status)}))}),[J]),o.a.useEffect((function(){xe()}),[]),Object(g.jsx)(j.Provider,{value:Z,children:Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)(C,{onSignOut:function(){localStorage.removeItem("jwt"),z(!1),K.push("/sign-in")},email:G}),Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{path:"/sign-up",children:Object(g.jsx)(V,{onRegister:function(e,t){me(!1),function(e,t){return fetch("".concat(d,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(h)}(e,t).then((function(e){e&&(z(!1),he(!0),ve(201))})).catch((function(e){he(!0),ve(e.status)})).finally((function(){me(!0)}))},isSubmitting:le,serverRequestStatus:be.errorType})}),Object(g.jsx)(l.b,{path:"/sign-in",children:Object(g.jsx)(q,{onLogin:function(e,t){me(!1),e&&t&&function(e,t){return fetch("".concat(d,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(h)}(e,t).then((function(t){t.token&&(localStorage.setItem("jwt",t.token),Y(e),z(!0),K.push("/"))})).catch((function(e){he(!0),ve(e.status)})).finally((function(){me(!0)}))},isSubmitting:le,serverRequestStatus:be.errorType})}),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(M,{exact:!0,path:"/",loggedIn:J,cards:se,onEditProfile:function(){O(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){a(!0)},onCardClick:function(e){U(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Z._id}));p.changeLikeCardStatus(e._id,!t).then((function(t){ie((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){he(!0),ve(e.status)}))},onCardDelete:k,isUserDataReceived:ne,component:y}),Object(g.jsx)(S,{})]})]}),Object(g.jsx)(B,{isOpen:de,onClose:Oe,popupStatusMessage:be}),Object(g.jsx)(R,{isOpen:b,onClose:Oe,onUpdateUser:function(e){me(!1),p.sendUserInfo(e).then((function(e){$(e),Oe()})).catch((function(e){he(!0),ve(e.status)})).finally((function(){me(!0)}))},isSubmitting:le}),Object(g.jsx)(I,{isOpen:n,onClose:Oe,onUpdateAvatar:function(e){me(!1),p.sendUserAvatar(e).then((function(e){$(e),Oe()})).catch((function(e){he(!0),ve(e.status)})).finally((function(){me(!0)}))},isSubmitting:le}),Object(g.jsx)(P,{isOpen:i,onClose:Oe,onAddPlace:function(e){me(!1),p.sendNewCard(e).then((function(e){ie([e].concat(Object(c.a)(se))),Oe()})).catch((function(e){he(!0),ve(e.status)})).finally((function(){me(!0)}))},isSubmitting:le}),Object(g.jsx)(w,{card:L,onClose:Oe}),Object(g.jsx)(F,{onClose:Oe,handleCardDelete:function(e){me(!1),p.deleteCard(e._id).then((function(){ie(se.filter((function(t){return t._id!==e._id}))),Oe()})).catch((function(e){he(!0),ve(e.status)})).finally((function(){me(!0)}))},cardForDeletion:N,isSubmitting:le})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(i.a,{basename:"/react-mesto-auth",children:Object(g.jsx)(H,{})})}),document.getElementById("root")),Q()}},[[38,1,2]]]);
//# sourceMappingURL=main.9131b4b6.chunk.js.map