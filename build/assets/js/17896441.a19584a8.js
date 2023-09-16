/*! For license information please see 17896441.a19584a8.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{8729:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ne});var n=a(7294),l=a(1944),r=a(902);const o=n.createContext(null);function s(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(o.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(o);if(null===e)throw new r.i6("DocProvider");return e}function i(){var e;const{metadata:t,frontMatter:a,assets:r}=c();return n.createElement(l.d,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=r.image)?e:a.image})}var d=a(6010),m=a(7524),u=a(7462),p=a(5999),b=a(9960);function E(e){const{permalink:t,title:a,subLabel:l,isNext:r}=e;return n.createElement(b.Z,{className:(0,d.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function v(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(E,(0,u.Z)({},t,{subLabel:n.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(E,(0,u.Z)({},a,{subLabel:n.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){const{metadata:e}=c();return n.createElement(v,{previous:e.previous,next:e.next})}var g=a(2263),f=a(143),_=a(5281),k=a(373),N=a(4477);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function Z(e){const t=L[e.versionMetadata.banner];return n.createElement(t,e)}function y(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(b.Z,{to:a,onClick:l},n.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,g.Z)(),{pluginId:r}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,k.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,f.Jo)(r),i=null!=s?s:(m=c).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.Z)(t,_.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(Z,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(y,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function w(e){let{className:t}=e;const a=(0,N.E)();return a.banner?n.createElement(T,{className:t,versionMetadata:a}):null}function C(e){let{className:t}=e;const a=(0,N.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,_.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function x(e){let{lastUpdatedBy:t}=e;return n.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function I(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:_.k.common.lastUpdated},n.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(x,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}const A="iconEdit_Z9Sw";function M(e){let{className:t,...a}=e;return n.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.Z)(A,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function B(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:_.k.common.editThisPage},n.createElement(M,null),n.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var P=a(3008);const S="tags_jXut",O="tag_QGVx";function D(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,d.Z)(S,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:O},n.createElement(P.Z,{label:t,permalink:a}))}))))}const V="lastUpdated_vwxv";function H(e){return n.createElement("div",{className:(0,d.Z)(_.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(D,e)))}function R(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(_.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(B,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",V)},(a||l)&&n.createElement(I,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function z(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:o}=e,s=o.length>0,i=!!(t||a||r);return s||i?n.createElement("footer",{className:(0,d.Z)(_.k.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(H,{tags:o}),i&&n.createElement(R,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var F=a(6043),j=a(3743);const q="tocCollapsibleButton_TO0P",G="tocCollapsibleButtonExpanded_MG3E";function J(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",q,!t&&G,a.className)}),n.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const W="tocCollapsible_ETCw",$="tocCollapsibleContent_vkbj",K="tocCollapsibleExpanded_sAul";function Q(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:s}=(0,F.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(W,!o&&K,a)},n.createElement(J,{collapsed:o,onClick:s}),n.createElement(F.z,{lazy:!0,className:$,collapsed:o},n.createElement(j.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const X="tocMobile_ITEo";function Y(){const{toc:e,frontMatter:t}=c();return n.createElement(Q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(_.k.docs.docTocMobile,X)})}var ee=a(9407);function te(){const{toc:e,frontMatter:t}=c();return n.createElement(ee.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:_.k.docs.docTocDesktop})}var ae=a(2503),ne=a(7654);function le(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(_.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(ae.Z,{as:"h1"},a)),n.createElement(ne.Z,null,t))}var re=a(2802),oe=a(8596),se=a(4996);function ce(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ie={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function de(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(b.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function me(e){let{children:t,active:a,index:l,addMicrodata:r}=e;return n.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ue(){const e=(0,se.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(b.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",ie.breadcrumbsItemLink),href:e},n.createElement(ce,{className:ie.breadcrumbHomeIcon})))}function pe(){const e=(0,re.s1)(),t=(0,oe.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(_.k.docs.docBreadcrumbs,ie.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ue,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(me,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(de,{href:t.href,isLast:l},t.label))})))):null}const be={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ",box:"box_xglo",tess:"tess_w_hO"};var Ee=a(2389);function ve(e){let{children:t,fallback:a}=e;return(0,Ee.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=a?a:null}var he=a(5893);function ge({id:e,host:t,repo:l,repoId:r,category:o,categoryId:s,mapping:c,term:i,strict:d,reactionsEnabled:m,emitMetadata:u,inputPosition:p,theme:b,lang:E,loading:v}){const[h,g]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{h||(a.e(891).then(a.bind(a,2891)),g(!0))}),[]),h?(0,he.jsx)("giscus-widget",{id:e,host:t,repo:l,repoid:r,category:o,categoryid:s,mapping:c,term:i,strict:d,reactionsenabled:m,emitmetadata:u,inputposition:p,theme:b,lang:E,loading:v}):null}var fe=a(6668);function _e(){const{giscus:e}=(0,fe.L)();return n.createElement(ve,{fallback:n.createElement("div",null,"Loading Comments...")},(()=>n.createElement("span",null,n.createElement(ge,(0,u.Z)({id:"comments",repo:"b9348/gta4replies",repoId:"R_kgDOISz7Ag",category:"Announcements",categoryId:"DIC_kwDOISz7As4CSKLm",mapping:"url",term:"\u6b22\u8fce\u7559\u8a00\u634f\u3002",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"preferred_color_scheme",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous"},e)))))}function ke(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(Y,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(te,null)}}(),{frontMatter:l}=c(),{hide_comment:r}=l;return n.createElement(n.Fragment,null,n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&be.docItemCol)},n.createElement(w,null),n.createElement("div",{className:be.docItemContainer},n.createElement("article",null,n.createElement(pe,null),n.createElement(C,null),a.mobile,n.createElement(le,null,t),n.createElement(z,null)),n.createElement(h,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop)),n.createElement("br",null),n.createElement("div",{className:be.last},!r&&n.createElement(_e,{className:be.tess})))}function Ne(e){const t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(ke,null,n.createElement(a,null))))}},3008:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(9960);const o="tag_zVej",s="tagRegular_sFm0",c="tagWithCount_h2kH";function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(o,i?c:s)},a,i&&n.createElement("span",null,i))}},4477:(e,t,a)=>{a.d(t,{E:()=>s,q:()=>o});var n=a(7294),l=a(902);const r=n.createContext(null);function o(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function s(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},5251:(e,t,a)=>{a(7418);var n=a(7294),l=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;l=r("react.element"),r("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var n,r={},i=null,d=null;for(n in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:l,type:e,key:i,ref:d,props:r,_owner:o.current}}t.jsx=i},5893:(e,t,a)=>{e.exports=a(5251)}}]);