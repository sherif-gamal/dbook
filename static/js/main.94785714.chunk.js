(this["webpackJsonpde-book"]=this["webpackJsonpde-book"]||[]).push([[0],{185:function(e,t,a){},186:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(12),r=a.n(c),o=(a(185),a(186),a(49)),s=a(11),A=a(41),l=a.n(A),p=a(68),d=a(51),u=a(119),h=a(173);function S(e){return b.apply(this,arguments)}function b(){return(b=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(t);case 2:return a=e.sent,e.abrupt("return",a?JSON.parse(a):[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return g.apply(this,arguments)}function g(){return(g=Object(p.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:return n=e.sent,e.next=5,localStorage.setItem(t,JSON.stringify([].concat(Object(h.a)(n),[a])));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=a(159),Q=a(24),C=a(4),w=a(349),k=a(370),m=a(38),E=a(369),J=a(353),O=a(354),f=a(357),I=a(351),y=a(42),U=a(356),x=a(355),L=a(164),D=a.n(L),q=a(166),v=a.n(q),W=a(165),F=a.n(W),K=a(358),M=a(359),V=a(361),T=a(360),Z=a(2),N=240,R=Object(w.a)((function(e){return Object(k.a)({root:{display:"flex",height:"100%"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:N,width:"calc(100% - ".concat(N,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:N,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:N,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(Q.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(B.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1}})})),P=function(e){var t,a,n=e.children,c=R(),r=Object(m.a)(),s=i.a.useState(!1),A=Object(d.a)(s,2),l=A[0],p=A[1];return Object(Z.jsxs)("div",{className:c.root,children:[Object(Z.jsx)(I.a,{}),Object(Z.jsx)(J.a,{position:"fixed",className:Object(C.a)(c.appBar,Object(Q.a)({},c.appBarShift,l)),children:Object(Z.jsxs)(O.a,{children:[Object(Z.jsx)(x.a,{color:"inherit","aria-label":"open drawer",onClick:function(){p(!0)},edge:"start",className:Object(C.a)(c.menuButton,Object(Q.a)({},c.hide,l)),children:Object(Z.jsx)(D.a,{})}),Object(Z.jsx)(y.a,{variant:"h6",noWrap:!0,children:"De-Book"})]})}),Object(Z.jsxs)(E.a,{variant:"permanent",className:Object(C.a)(c.drawer,(t={},Object(Q.a)(t,c.drawerOpen,l),Object(Q.a)(t,c.drawerClose,!l),t)),classes:{paper:Object(C.a)((a={},Object(Q.a)(a,c.drawerOpen,l),Object(Q.a)(a,c.drawerClose,!l),a))},children:[Object(Z.jsx)("div",{className:c.toolbar,children:Object(Z.jsx)(x.a,{onClick:function(){p(!1)},children:"rtl"===r.direction?Object(Z.jsx)(F.a,{}):Object(Z.jsx)(v.a,{})})}),Object(Z.jsx)(U.a,{}),Object(Z.jsx)(f.a,{children:Object(Z.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(Z.jsxs)(K.a,{button:!0,children:[Object(Z.jsx)(M.a,{children:Object(Z.jsx)(T.a,{})}),Object(Z.jsx)(V.a,{primary:"Book list"})]})})})]}),Object(Z.jsxs)("main",{className:c.content,children:[Object(Z.jsx)("div",{className:c.toolbar}),n]})]})},H=function(e){var t,a=e.book,i=Object(n.useState)(2),c=Object(d.a)(i,2),r=c[0],o=c[1],s=Object(n.useState)(void 0),A=Object(d.a)(s,2),h=A[0],b=A[1],g=a.title;return Object(n.useEffect)((function(){S(g).then((function(e){return h&&e.forEach((function(e){return function(e,t){e&&e.annotations.add("highlight",t)}(h,e)}))}))}),[g,h]),Object(Z.jsx)(P,{children:Object(Z.jsx)("div",{style:{height:"100vh",position:"relative"},children:Object(Z.jsx)(u.ReactReader,{url:null===a||void 0===a?void 0:a.book,title:g,location:r,getRendition:function(e){t=e,b(e)},handleTextSelected:function(){var e=Object(p.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.annotations.highlight(a),e.next=3,j(g,a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),locationChanged:function(e){return o(e)}})})})};var z=a(167),Y=a(168),G=function(){function e(){Object(z.a)(this,e),this.readyPromise=new Promise((function(e){window.AdobeDC?e():document.addEventListener("adobe_dc_view_sdk.ready",(function(){e()}))})),this.adobeDCView=void 0}return Object(Y.a)(e,[{key:"ready",value:function(){return this.readyPromise}},{key:"previewFile",value:function(e,t,a){var n={clientId:"06eca8b6ae8644c791ea69bd366982f6"};return e&&(n.divId=e),this.adobeDCView=new window.AdobeDC.View(n),console.log(t),this.adobeDCView.previewFile({content:{location:{url:t.book}},metaData:{fileName:t.title,id:"6d07d124-ac85-43b3-a867-36930f502ac6"}},a)}},{key:"previewFileUsingFilePromise",value:function(e,t,a){this.adobeDCView=new window.AdobeDC.View({clientId:"06eca8b6ae8644c791ea69bd366982f6",divId:e}),this.adobeDCView.previewFile({content:{promise:t},metaData:{fileName:a}},{})}},{key:"registerSaveApiHandler",value:function(){this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.SAVE_API,(function(e,t,a){return console.log(e,t,a),new Promise((function(t){setTimeout((function(){var a={code:window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,data:{metaData:Object.assign(e,{updatedAt:(new Date).getTime()})}};t(a)}),2e3)}))}),{})}},{key:"registerEventsHandler",value:function(){this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,(function(e){console.log(e)}),{enablePDFAnalytics:!0})}}]),e}(),X=function(e){var t=e.book;return Object(n.useEffect)((function(){var e=new G;return console.log("shit"),e.ready().then((function(){e.previewFile("pdf-div",t,{})})),function(){}}),[t]),Object(Z.jsx)(P,{children:Object(Z.jsx)("div",{id:"pdf-div",className:"sized-container-div"})})},_=a.p+"static/media/alice.42a825d9.epub",$=a.p+"static/media/bitcoin.61bcf4b2.pdf",ee=a.p+"static/media/die-dollar.849e84fd.pdf",te=a.p+"static/media/moby.0a924b5d.epub",ae=a.p+"static/media/overpopulation.1c2ad2ca.pdf",ne=[{title:"Alice in wonderland",book:_,author:"Sherif Gamal",thumbnail:a.p+"static/media/alice.13cf694a.jpeg",format:"epub"},{title:"Bitcoin",book:$,author:"Sherif Gamal",thumbnail:"data:image/jpeg;base64,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",format:"pdf"},{title:"Die Dollar Die",book:ee,author:"Robert Salisbury",thumbnail:a.p+"static/media/die-dollar.57428b9f.jpg",format:"pdf"},{title:"Moby Dick",book:te,author:"Sherif Gamal",thumbnail:a.p+"static/media/moby.e3483b42.jpeg",format:"epub"},{title:"Overpopulation",book:ae,author:"Robert Salisbury",thumbnail:a.p+"static/media/overpopulation.6f7473ed.jpeg",format:"pdf"}],ie=function(){var e=Object(s.f)().title,t=ne.find((function(t){return t.title===e}));return t?Object(Z.jsx)(Z.Fragment,{children:"epub"===t.format?Object(Z.jsx)(H,{book:t}):Object(Z.jsx)(X,{book:t})}):Object(Z.jsx)(Z.Fragment,{children:"Not found"})},ce=a(368),re=a(362),oe=a(363),se=a(364),Ae=a(365),le=a(366),pe=a(367),de=a(371),ue=a(94),he=a(170),Se=a.n(he),be=a(171),je=a.n(be),ge=a(172),Be=a.n(ge),Qe=a(169),Ce=a.n(Qe),we=Object(w.a)((function(e){return Object(k.a)({root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:ue.a[500]},link:{textDecoration:"none"}})})),ke=function(e){var t=e.book,a=we(),n=(t.format,t.author,t.title),c=t.thumbnail,r=i.a.useState(!1),s=Object(d.a)(r,2),A=s[0],l=s[1];return Object(Z.jsx)(o.b,{to:"/books/".concat(n),className:a.link,children:Object(Z.jsxs)(re.a,{className:a.root,children:[Object(Z.jsx)(oe.a,{avatar:Object(Z.jsx)(de.a,{"aria-label":"recipe",className:a.avatar,children:"R"}),action:Object(Z.jsx)(x.a,{"aria-label":"settings",children:Object(Z.jsx)(Ce.a,{})}),title:n,subheader:"September 14, 2016"}),Object(Z.jsx)(se.a,{className:a.media,image:c,title:"Paella dish"}),Object(Z.jsx)(Ae.a,{children:Object(Z.jsx)(y.a,{variant:"body2",color:"textSecondary",component:"p",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),Object(Z.jsxs)(le.a,{disableSpacing:!0,children:[Object(Z.jsx)(x.a,{"aria-label":"add to favorites",children:Object(Z.jsx)(Se.a,{})}),Object(Z.jsx)(x.a,{"aria-label":"share",children:Object(Z.jsx)(je.a,{})}),Object(Z.jsx)(x.a,{className:Object(C.a)(a.expand,Object(Q.a)({},a.expandOpen,A)),onClick:function(){l(!A)},"aria-expanded":A,"aria-label":"show more",children:Object(Z.jsx)(Be.a,{})})]}),Object(Z.jsx)(pe.a,{in:A,timeout:"auto",unmountOnExit:!0,children:Object(Z.jsxs)(Ae.a,{children:[Object(Z.jsx)(y.a,{paragraph:!0,children:"Method:"}),Object(Z.jsx)(y.a,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),Object(Z.jsx)(y.a,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),Object(Z.jsx)(y.a,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"}),Object(Z.jsx)(y.a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})})},me=function(){return Object(Z.jsx)(P,{children:Object(Z.jsx)(ce.a,{container:!0,spacing:2,children:ne.map((function(e){return Object(Z.jsx)(ce.a,{item:!0,children:Object(Z.jsx)(ke,{book:e})})}))})})},Ee=function(){return Object(Z.jsx)(o.a,{children:Object(Z.jsxs)(s.c,{children:[Object(Z.jsx)(s.a,{path:"/books/:title",children:Object(Z.jsx)(ie,{})}),Object(Z.jsx)(s.a,{path:"/",children:Object(Z.jsx)(me,{})})]})})};var Je=function(){return Object(Z.jsx)("div",{className:"App",children:Object(Z.jsx)(Ee,{})})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,372)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(Z.jsx)(i.a.StrictMode,{children:Object(Z.jsx)(Je,{})}),document.getElementById("root")),Oe()}},[[308,1,2]]]);
//# sourceMappingURL=main.94785714.chunk.js.map