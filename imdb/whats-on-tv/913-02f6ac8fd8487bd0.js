"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{3357:function(e,t,i){i.d(t,{C5:function(){return r},DA:function(){return c},EQ:function(){return g},Ew:function(){return p},RQ:function(){return f},dS:function(){return u},gd:function(){return h},ih:function(){return m}});var n,r,a=i(16189),o=i(54122);(n=r||(r={})).activate="activate",n.midpoint1="midpoint1",n.midpoint2="midpoint2",n.midpoint3="midpoint3",n.complete="complete";let s=new Map([["videoStartTrackers","activate"],["videoFirstQuartileTrackers","midpoint1"],["videoMidpointTrackers","midpoint2"],["videoThirdQuartileTrackers","midpoint3"],["videoCompleteTrackers","complete"]]),l="imdb-promoted-ad-trackers",d=(0,a.createLogger)()("AutorotateHero-AdTracker"),c=e=>Object.keys(e).reduce((t,i)=>{let n=e[i],r=s.get(i),a=n&&r&&n.map(e=>({track:e,when:r}));return a&&a.forEach(e=>t.push(e)),t},[]),g=e=>new Promise(t=>{let i=new Image;i.src=e,i.onload=()=>t(),i.onerror=()=>t()}),p=async e=>{e.length&&await Promise.all(e.map(e=>g(e)))},m=e=>{e?.formattedVideoTrackers&&window.sessionStorage&&window.sessionStorage.setItem(l,JSON.stringify(e.formattedVideoTrackers))},u=e=>{"undefined"!=typeof document&&document.location&&document.location.assign(e)},h=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(e){d.error("There was a problem decoding promotedVideoAd JSON",e)}else if(e&&e.id)return e};function f(){let e=(0,o.G)(l);if(e){(0,o.VV)(l);try{return JSON.parse(e)}catch(e){d.error("Error parsing trackers",e)}}}},54137:function(e,t,i){i.d(t,{Ec:function(){return g},$:function(){return p}});var n=i(52322),r=i(72779),a=i.n(r);i(2784);var o=i(19596),s=i(88169),l=i(86704),d=i(75824),c=i(47069);let g={SPONSORED_LINK:"sponsored-link",SPONSORED_TEXT:"sponsored-text",SPONSORED_DOT:"sponsored-dot",INHERIT_FONT:"sponsored-inherit-font",SPONSORED_ICON:"sponsored-icon"},p=e=>{let{adFeedbackUrl:t,includeSpacingDot:i,inheritFontSize:r}=e,o=(0,d.N)({id:"compliance_sponsored_ad_link",defaultMessage:"Sponsored"});return(0,n.jsxs)(u,{"aria-label":o,className:a()(g.SPONSORED_LINK,{[g.INHERIT_FONT]:r}),href:t,target:"_blank",onClick:m,children:[!!i&&(0,n.jsx)("span",{className:g.SPONSORED_DOT,children:"•"}),(0,n.jsx)("span",{className:g.SPONSORED_TEXT,children:o}),(0,n.jsx)(s.Icon,{className:g.SPONSORED_ICON,name:"info"})]})},m=e=>{e.stopPropagation(),(0,c.P)("SponsoredLink.PromotedVideo")},u=o.ZP.a.withConfig({componentId:"sc-7a5c1d1d-0"})(["font-size:11px;color:",";text-decoration:none;&:hover{opacity:0.85;}&.","{font-size:inherit;}.","{padding:0 ",";}.","{width:14px;height:14px;margin:-3px 0 0 2px;}"],(0,l.getColorVarValue)("ipt-on-baseAlt-textSecondary-color"),g.INHERIT_FONT,g.SPONSORED_DOT,l.spacing.xs,g.SPONSORED_ICON)},78893:function(e,t,i){i.d(t,{p:function(){return h}});var n=i(52322),r=i(2784),a=i(53665),o=i(19596),s=i(88169),l=i(86704),d=i(66724),c=i(11438),g=i(14438);let p={id:"eventHistoryWidget_title",defaultMessage:"Event history"},m={2030:{id:"eventHistoryWidget_decadeTabLabel_2030",defaultMessage:"2030s"},2020:{id:"eventHistoryWidget_decadeTabLabel_2020",defaultMessage:"2020s"},2010:{id:"eventHistoryWidget_decadeTabLabel_2010",defaultMessage:"2010s"},2e3:{id:"eventHistoryWidget_decadeTabLabel_2000",defaultMessage:"2000s"},1990:{id:"eventHistoryWidget_decadeTabLabel_1990",defaultMessage:"1990s"},1980:{id:"eventHistoryWidget_decadeTabLabel_1980",defaultMessage:"1980s"},1970:{id:"eventHistoryWidget_decadeTabLabel_1970",defaultMessage:"1970s"},1960:{id:"eventHistoryWidget_decadeTabLabel_1960",defaultMessage:"1960s"},1950:{id:"eventHistoryWidget_decadeTabLabel_1950",defaultMessage:"1950s"},1940:{id:"eventHistoryWidget_decadeTabLabel_1940",defaultMessage:"1940s"},1930:{id:"eventHistoryWidget_decadeTabLabel_1930",defaultMessage:"1930s"},1920:{id:"eventHistoryWidget_decadeTabLabel_1920",defaultMessage:"1920s"},1910:{id:"eventHistoryWidget_decadeTabLabel_1910",defaultMessage:"1910s"},1900:{id:"eventHistoryWidget_decadeTabLabel_1900",defaultMessage:"1900s"},1890:{id:"eventHistoryWidget_decadeTabLabel_1890",defaultMessage:"1890s"}},u={id:"eventHistoryWidget_decadeTabLabel_fallback",defaultMessage:"Other years"},h=e=>{let{eventId:t,eventEditions:i,headerText:o,hideHeader:l=!1,selectedEventEditionId:m}=e,u=(0,a.Z)(),{eventMainLinkBuilder:h,eventMainYearInstanceLinkBuilder:y}=(0,d.WOb)(),v=(0,g.EO)(),I=h({evconst:t,refSuffix:c.Cd.TEXT}),{decadeToEventMap:w,selectedDecade:E}=f(i,m),C=[];Object.keys(w).forEach(e=>{C.unshift({id:e,label:u.formatMessage(x(e))})});let[P,_]=(0,r.useState)(E||C[0]?.id);if(!i||!i.length)return null;let S=Object.keys(w).length>1;return(0,n.jsxs)(b,{"data-testid":"event-history-widget",sidePadding:"pageMargin",children:[!l&&(0,n.jsx)(s.SubSectionTitle,{padding:"none",href:I,children:o||u.formatMessage(p)}),(0,n.jsxs)(s.PageSection,{topPadding:"none",bottomPadding:"none",borderType:"responsiveLine",className:"event-history-tabs-container",children:[!!S&&(0,n.jsx)(s.Tabs,{tabs:C,disableUppercase:!0,value:P,backgroundColor:"shade1",onChange:(e,t)=>{_(e),v({refMarkerSuffix:[c.Cd.NAVIGATION,{t:c.Cd.TAB,n:t+1}],pageAction:"tab-select"})},onNextPage:()=>v({refMarkerSuffix:c.Cd.NAVIGATION,pageAction:"next-button-click"}),onPreviousPage:()=>v({refMarkerSuffix:c.Cd.NAVIGATION,pageAction:"prev-button-click"})}),!!w[P]&&(0,n.jsx)(s.PageSection,{topPadding:"none",bottomPadding:"none",children:(0,n.jsx)(T,{children:w[P].map((e,i)=>(0,n.jsx)(s.Chip,{id:`event-history-edition-${i}`,label:`${e.year}`,href:y({evconst:t,year:e.year,instance:e.instanceWithinYear,refSuffix:{t:c.Cd.YEAR,n:i+1}}),onColor:e.id===m?"accent1":"",filled:e.id===m},`event-history-edition-${i}`))})})]})]})},f=(e,t)=>{let i;if(!e)return{decadeToEventMap:{},selectedDecade:void 0};let n={};return e.forEach(e=>{let r=10*Math.floor(e.year/10);n[r]=n[r]||[],n[r].push(e),e.id===t&&(i=r.toString())}),{decadeToEventMap:n,selectedDecade:i}},x=e=>m[e]||u,b=(0,o.ZP)(s.PageSection).withConfig({componentId:"sc-c453816c-0"})(["&&{margin-bottom:",";}"],l.spacing.xs),T=(0,o.ZP)(s.ChipList).withConfig({componentId:"sc-c453816c-1"})(["margin-top:",";","{padding-left:",";padding-right:",";margin-bottom:",";}"],l.spacing.m,l.mediaQueries.breakpoints.above.l,l.spacing.m,l.spacing.m,l.spacing.xs)},42748:function(e,t,i){i.d(t,{X:function(){return o}});var n=i(52322);i(2784);var r=i(89105),a=i(10105);let o=e=>{let{children:t,componentId:i,hideLoader:o}=e,s=(0,r.OV)(i),l=o?null:(0,n.jsx)(a.ZP,{height:650,"data-testid":"delayed-loader"});return s?l:t}},38394:function(e,t,i){i.d(t,{U:function(){return u}});var n=i(52322),r=i(27722),a=i(2784),o=i(53665),s=i(41174),l=i(11438),d=i(14438),c=i(37179),g=i(40962),p=i(24216);let m=e=>{let{sendFailureSnack:t}=(0,s.c1)(),{formatMessage:i}=(0,o.Z)(),{makeRefMarker:n}=(0,l.Lz)(),r=(0,d.EO)(),{state:m,addToTrack:u,removeFromTrack:h,getIsInTrack:f}=(0,a.useContext)(g.S),x=void 0!==m.items[e],b=void 0!==m.pendingItems[e],[T,y]=(0,a.useState)({trackInfo:m.items[e],isPending:!x});(0,a.useEffect)(()=>{let t=x&&!!m.items[e].isTracking!==T.trackInfo?.isTracking,i=T.isPending&&x;b||x?(t||i)&&y({trackInfo:m.items[e],isPending:!1}):f(e)},[m.items[e],m.pendingItems[e]]);let v=i(p.T.IS_LOADING),I=T.trackInfo?.isTracking?i(p.T.IN_TRACK):i(p.T.NOT_TRACKED);return{...T,ariaLabel:T.isPending?v:I,onClick:async()=>{y({...T,isPending:!0}),T.trackInfo?.isTracking?await h(e)?r({refMarkerString:n(l.Cd.TRACK),pageAction:`${c.QJ.TRACK_OFF}-${e}`}):t(i(p.T.FAILED)):await u(e)?r({refMarkerString:n(l.Cd.TRACK),pageAction:`${c.QJ.TRACK_ON}-${e}`}):t(i(p.T.FAILED))}}},u=e=>{let{constId:t}=e,{trackInfo:i,ariaLabel:a,isPending:o,onClick:s}=m(t);return(0,n.jsx)(r.IconButton,{name:i?.isTracking?"notifications-add-check":"notifications-add",label:a,onSelect:s,disabled:o})}},24216:function(e,t,i){i.d(t,{B:function(){return r},T:function(){return n}});let n={IN_TRACK:{id:"common_buttons_track_label_inTrack",defaultMessage:"Tracking"},NOT_TRACKED:{id:"common_buttons_track_label_addToTrack",defaultMessage:"Track"},IS_LOADING:{id:"common_ariaLabel_loading",defaultMessage:"Loading"},FAILED:{id:"common_buttons_track_failure",defaultMessage:"Failed to update, please try again"}},r={pendingItems:{},items:{},isRequesting:!1}},40962:function(e,t,i){i.d(t,{S:function(){return T},Y:function(){return y}});var n=i(52322),r=i(2784);let a=(e,t)=>{switch(t.type){case"CHECK_IN_TRACK":if(void 0!==e.items[t.id])return e;return{...e,pendingItems:{...e.pendingItems,[t.id]:{isTracking:!0}}};case"SET_REQUESTING":if(e.isRequesting)return e;return{...e,isRequesting:!0};case"UPDATE_TRACK_STATE":{let i={...e,isRequesting:!1};return Object.keys(t.items).forEach(e=>{delete i.pendingItems[e],i.items[e]=t.items[e]}),i}case"ADD_TO_TRACK":{if(!t.id)return e;let i={...e,items:{...e.items,[t.id]:{isTracking:!0}}};return delete i.pendingItems[t.id],i}case"REMOVE_FROM_TRACK":{if(!t.id||"boolean"==typeof e.items[t.id]&&!e.items[t.id])return e;let i={...e,items:{...e.items,[t.id]:{isTracking:!1}}};return delete i.pendingItems[t.id],i}default:return e}};var o=i(24216),s=i(16189),l=i(91754),d=i(11602),c=i(30382),g=i.n(c);let p=g()`
    query IsNameTracked($ids: [ID!]!) {
        names(ids: $ids) {
            id
            trackNotificationPreferences {
                isTracking
            }
        }
    }
`,m=g()`
    query IsTitleTracked($ids: [ID!]!) {
        titles(ids: $ids) {
            id
            trackNotificationPreferences {
                isTracking
            }
        }
    }
`,u=(0,s.createLogger)()("ZukoTrackCalls"),h=()=>{let{queryWithContext:e}=(0,l.x)();return t=>e(m,{ids:t},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e,n={};return t?.titles.forEach(e=>{e&&(n[e.id]={isTracking:!!e?.trackNotificationPreferences?.isTracking})}),i&&u.error(i),n}).catch(e=>(u.error(e),{}))},f=()=>{let{queryWithContext:e}=(0,l.x)();return t=>e(p,{ids:t},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e,n={};return t?.names.forEach(e=>{e&&(n[e.id]={isTracking:!!e?.trackNotificationPreferences?.isTracking})}),i&&u.error(i),n}).catch(e=>(u.error(e),{}))},x=()=>{let{mutation:e}=(0,l.x)();return t=>e(d.qb,{input:{id:t}},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e;return i&&u.error(i),!!t?.trackConst?.success}).catch(e=>(u.error(e),!1))},b=()=>{let{mutation:e}=(0,l.x)();return t=>e(d.Vc,{input:{id:t}},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e;return i&&u.error(i),!!t?.untrackConst?.success}).catch(e=>(u.error(e),!1))},T=(0,r.createContext)({state:o.B,getIsInTrack:()=>Promise.resolve(void 0),addToTrack:()=>Promise.resolve(!1),removeFromTrack:()=>Promise.resolve(!1)}),y=e=>{let{children:t}=e,i=h(),s=f(),l=x(),d=b(),[c,g]=(0,r.useReducer)(a,o.B);(0,r.useEffect)(()=>{let e=Object.keys(c.pendingItems);if(e.length>0&&!c.isRequesting){g({type:"SET_REQUESTING"});let t=e.filter(e=>e.startsWith("nm")),n=e.filter(e=>e.startsWith("tt"));t.length>0&&s(t).then(e=>{g({type:"UPDATE_TRACK_STATE",items:e})}),n.length>0&&i(n).then(e=>{g({type:"UPDATE_TRACK_STATE",items:e})})}},[c.pendingItems,c.isRequesting]);let p=(0,r.useCallback)(e=>void 0!==c.items[e]?Promise.resolve(c.items[e]):(g({type:"CHECK_IN_TRACK",id:e}),Promise.resolve(void 0)),[c.pendingItems,c.items]),m=(0,r.useCallback)(async e=>{let t=await l(e);return t&&g({type:"ADD_TO_TRACK",id:e}),t},[]),u=(0,r.useCallback)(async e=>{let t=await d(e);return t&&g({type:"REMOVE_FROM_TRACK",id:e}),t},[]),y=(0,r.useMemo)(()=>({state:c,getIsInTrack:p,addToTrack:m,removeFromTrack:u}),[c]);return(0,n.jsx)(T.Provider,{value:y,children:t})}},68557:function(e,t,i){i.d(t,{i:function(){return o}});var n=i(52322),r=i(72779),a=i.n(r);i(2784);let o=e=>{let{children:t,displayStyle:i}=e,r=a()("grid w-full",{"grid-cols-1 m:grid-flow-col m:grid-cols-2 m:grid-rows-3":"dynamic"===i},{"grid-cols-1":"singleColumn"===i});return(0,n.jsx)("div",{className:r,children:t})}},65991:function(e,t,i){i.d(t,{p:function(){return s}});var n=i(52322),r=i(72779),a=i.n(r);i(2784);var o=i(72113);let s=e=>{let{color:t,type:i}=(0,o.G)(),r=e.condensedPadding?"py-xs":"py-s";return(0,n.jsxs)("div",{className:a()(e.titleClassName,r,"flex px-m items-center"),children:[!!e.rankNumber&&(0,n.jsx)("div",{className:"pr-m",children:e.rankNumber}),e.preElement,(0,n.jsxs)("div",{className:"flex justify-between min-w-[0] w-full",children:[(0,n.jsxs)("a",{className:"pl-s block overflow-hidden hover:opacity-80 no-underline grow",href:e.titlePageLink,children:[(0,n.jsx)("div",{className:a()(t("accent2"),i("body"),"text-nowrap overflow-hidden text-ellipsis"),children:e.titleName}),(0,n.jsx)("div",{className:a()(t("textSecondary"),i("bodySmall")),children:e.secondaryText})]}),e.postElement]})]})}},9707:function(e,t,i){i.d(t,{r:function(){return g}});var n=i(52322);i(2784);var r=i(53665),a=i(19596),o=i(88169),s=i(86704),l=i(22619),d=i(11947),c=i(43986);let g=e=>{let{scopedTitleIds:t,totalNumber:i,...a}=e,{watchedTitles:s}=(0,l.V)(),g=(0,r.Z)(),u=0,h=Math.min((u=t?.length?Object.keys(t?.reduce((e,t)=>s[t]?{...e,[t]:!0}:e,{})??{}).length:Object.keys(s).length)/i,1),f=g.formatMessage(c.TY.watchedProgress,{currentNumber:u,totalNumber:i});return(0,n.jsxs)(p,{...a,children:[(0,n.jsx)(o.ProgressBar,{ariaLabel:f,currentNumber:u,totalNumber:i}),(0,n.jsxs)(m,{"aria-hidden":!0,"data-testid":c.z7.WATCHED_PROGRESS_TEST_ID,children:[(0,n.jsx)("span",{children:f}),(0,n.jsx)("span",{children:(0,n.jsx)(d.A,{maximumFractionDigits:0,style:"percent",unit:"percent",value:h})})]})]})},p=a.ZP.div.withConfig({componentId:"sc-14c4aaa0-0"})(["margin-top:",";"],s.spacing.l),m=a.ZP.div.withConfig({componentId:"sc-14c4aaa0-1"})([""," display:flex;justify-content:space-between;margin-top:",";"],(0,s.setTypographyType)("overline"),s.spacing.xs)},67626:function(e,t,i){i.d(t,{Z:function(){return y}});var n=i(52322);i(2784);var r=i(59430),a=i.n(r),o=i(55634),s=i(59002),l=i(14438),d=i(11438),c=i(8e3),g=i(19596),p=i(88169),m=i(86704),u=i(55220);let h=e=>{let{videos:t,listId:i,logShovelerInteraction:r}=e;if(!t||0===t.length)return null;let a=t.slice(0,2),o=t.slice(1,6);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{"data-testid":"grid_first_row_video",children:(0,n.jsx)(b,{rowNumber:1,videos:a,listId:i})}),(0,n.jsx)(x,{"data-testid":"grid_second_row_video",children:(0,n.jsx)(b,{videos:o,listId:i,rowNumber:2,isShoveler:o.length>=3,logShovelerInteraction:r})})]})},f=g.ZP.div.withConfig({componentId:"sc-fd689d34-0"})([".video-display{display:none;","{display:flex;}}"],m.mediaQueries.breakpoints.above.m),x=g.ZP.div.withConfig({componentId:"sc-fd689d34-1"})(["padding-top:",";.video-item{grid-column:span 2;}.video-display{display:flex;","{display:none;}}"],m.spacing.xs,m.mediaQueries.breakpoints.above.m),b=e=>{let{videos:t,listId:i,isShoveler:r=!1,rowNumber:a,logShovelerInteraction:o=()=>{}}=e,s=r?p.Shoveler:p.SubGrid;return(0,n.jsx)(s,{wrapsAt:2===a?"above-m":void 0,onPageChange:r?o:void 0,children:t.map((e,t)=>(0,n.jsx)(u.Z,{video:e,index:t+(a-1),listId:i,className:`video-item ${2===a&&0===t||1===a&&1===t?"video-display":""}`,slateProps:{overlayProps:{lineClamp:1}},titleProps:{title:e.name.value}},`VideoItem--${e.id}--${t}`))})},T=e=>{let{videos:t,videoCount:i,videoSectionTitle:r,videoSectionSubTitle:g,refTagPrefixOverride:p,listId:m,videoSectionTitleLinkType:u}=e,{value:f}=(0,d.Lz)(),x=p||f,b=(0,l.EJ)(`${x}_vi`);return t?.length?(0,n.jsx)(s.wW,{componentId:o.NG.Videos,children:(0,n.jsxs)(a(),{baseColor:"base","data-testid":"videos-section",children:[(0,n.jsx)(c.G,{videoCount:i,videoSectionTitle:r,videoSectionSubTitle:g,refTagPrefixOverride:p,videoPlaylistId:m,videoSectionTitleLinkType:u}),(0,n.jsx)(h,{videos:t,listId:m,logShovelerInteraction:()=>b})]})}):(0,n.jsx)(n.Fragment,{})};var y=e=>(0,n.jsx)(d.xm,{value:d.Cd.VIDEOS,children:(0,n.jsx)(T,{...e})})},8e3:function(e,t,i){i.d(t,{G:function(){return p},o:function(){return r}});var n,r,a=i(52322);i(2784);var o=i(88169),s=i(75824),l=i(49996),d=i(66724),c=i(11438),g=i(1833);(n=r||(r={})).NAME_VIDEO_GALLERY="NAME_VIDEO_GALLERY",n.TITLE_VIDEO_GALLERY="TITLE_VIDEO_GALLERY",n.PLAYLIST="PLAYLIST";let p=e=>{let t,{videoCount:i,videoSectionTitle:n,videoSectionSubTitle:r,refTagPrefixOverride:p,videoSectionTitleLinkType:m,videoPlaylistId:u}=e,{nameVideoGalleryLinkBuilder:h,titleVideoGalleryLinkBuilder:f,listMainLinkBuilder:x}=(0,d.WOb)(),{pageConst:b="",pageType:T}=(0,l.y)(),y=(0,s.N)({id:"feature_videos_title",defaultMessage:"Videos"});"PLAYLIST"===m&&u?t=x({lsconst:u,refSuffix:c.Cd.SEE_MORE}):"TITLE_VIDEO_GALLERY"===m?t=f({tconst:b,refSuffix:c.Cd.SEE_MORE}):"NAME_VIDEO_GALLERY"===m&&(t=h({nconst:b,refSuffix:c.Cd.SEE_MORE}));let v=p?`${p}_${c.Cd.SEE_MORE}`:void 0,I=t&&v?(0,g.Lr)(t,v):t;return(0,a.jsx)(o.SectionTitle,{"data-testid":"videos-title",href:I,subText:i?.toString(),description:r,children:n||y})}},21915:function(e,t,i){i.d(t,{S:function(){return A}});var n=i(52322),r=i(14865),a=i(2784),o=i(19596),s=i(88169),l=i(86704),d=i(54588),c=i(75824),g=i(11438),p=i(50176);let m=e=>{if(!e)return{};let{awardId:t,eventEditionId:i,numWinners:n,winnersOffset:r}=(0,p.parse)(e.replace("?",""));return{overrideEvent:t&&i?{awardId:t.toString(),eventEditionId:i.toString()}:void 0,numWinners:n?parseInt(n.toString()):void 0,winnersOffset:r?parseInt(r.toString()):void 0}};var u=i(41174),h=i(66724),f=i(87801);let x=(e,t,i)=>(e||[]).map(e=>{let n,r;if(r=e.forEpisodes?e.forEpisodes[0].titleText?.text:void 0,r=e.forSongTitles?e.forSongTitles[0]:r,"AwardedNames"===e.awardedEntities.__typename){let i=e.awardedEntities,a=i.names[0];if(!a.primaryImage?.url||!a.primaryImage?.height||!a.primaryImage?.width||!a.primaryImage?.caption?.plainText||!e.award.category?.text||!a.nameText?.text)return;n={poster:{url:a.primaryImage.url,maxHeight:a.primaryImage.height,maxWidth:a.primaryImage.width,caption:a.primaryImage.caption.plainText},pageLink:t({nconst:a.id,refSuffix:f.C.EMPTY}),awardName:e.award.category.text,winnerName:a.nameText.text,constId:a.id,title:!1,secondaryWinners:(i.secondaryTitles||[]).map(e=>e.titleText?.text).filter(Boolean),notes:r}}else if("AwardedTitles"===e.awardedEntities.__typename){let t=e.awardedEntities,a=t.titles[0];if(!a.primaryImage?.url||!a.primaryImage?.height||!a.primaryImage?.width||!a.primaryImage?.caption?.plainText||!e.award.category?.text||!a.titleText?.text)return;n={poster:{url:a.primaryImage.url,maxHeight:a.primaryImage.height,maxWidth:a.primaryImage.width,caption:a.primaryImage.caption.plainText},pageLink:i({tconst:a.id,refSuffix:f.C.EMPTY}),awardName:e.award.category.text,winnerName:a.titleText.text,constId:a.id,title:!0,secondaryWinners:(t.secondaryNames||[]).map(e=>e.nameText?.text).filter(Boolean),notes:r}}return n}).filter(Boolean);var b=i(30382),T=i.n(b);let y=T()`
    query WinnersWidget(
        $enableOverride: Boolean!
        $overrideEvent: OverrideLiveEventInput
        $numWinners: Int!
    ) {
        eventLiveResults(
            override: {
                enableOverride: $enableOverride
                overrideEvent: $overrideEvent
            }
        ) {
            eventId
            noWinnersBlurb {
                value
            }
            eventPageUrl
            displayDescription {
                value
            }
            displayTitle {
                value
            }
            eventEditionAward {
                id
                awardName
                winners(limit: $numWinners) {
                    id
                    award {
                        category {
                            text
                        }
                    }
                    forEpisodes {
                        titleText {
                            text
                        }
                    }
                    forSongTitles
                    awardedEntities {
                        ... on AwardedNames {
                            __typename
                            names {
                                id
                                nameText {
                                    text
                                }
                                primaryImage {
                                    url
                                    height
                                    width
                                    caption {
                                        plainText
                                    }
                                }
                            }
                            secondaryTitles {
                                titleText {
                                    text
                                }
                            }
                            secondaryCompanies {
                                companyText {
                                    text
                                }
                            }
                        }
                        ... on AwardedTitles {
                            __typename
                            titles {
                                id
                                titleText {
                                    text
                                }
                                primaryImage {
                                    url
                                    height
                                    width
                                    caption {
                                        plainText
                                    }
                                }
                            }
                            secondaryNames {
                                nameText {
                                    text
                                }
                            }
                            secondaryCompanies {
                                companyText {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`,v=e=>{let{numWinners:t,winnersOffset:i,overrideEvent:n}=e,{nameMainLinkBuilder:o,titleMainLinkBuilder:s}=(0,h.WOb)(),l=(0,r.getIsBrowser)(),[d,c]=(0,a.useState)(l),[g,p]=(0,a.useState)(void 0),[m,f]=(0,a.useState)(void 0),[b,T]=(0,a.useState)(void 0),[v,I]=(0,a.useState)(void 0),[w,E]=(0,a.useState)(void 0),[C,P]=(0,a.useState)(void 0),[{data:_}]=(0,u.E8)({query:y,requestPolicy:"network-only",variables:{enableOverride:!!n,overrideEvent:n,numWinners:t},context:{personalized:!1,serverSideCacheable:!1},pause:!d});return(0,a.useEffect)(()=>{if(!_)return;if(!_.eventLiveResults){c(!1),setTimeout(()=>c(!0),9e5);return}p(_.eventLiveResults.displayTitle.value),f(_.eventLiveResults.displayDescription?.value),T(_.eventLiveResults.eventPageUrl),I(_.eventLiveResults.noWinnersBlurb.value);let e=x(_.eventLiveResults.eventEditionAward.winners,o,s);E(e?.slice(i,i+3)),P(_.eventLiveResults.eventId),c(!1),setTimeout(()=>c(!0),3e4)},[_,i]),{displayTitle:g,displayDescription:m,eventPageUrl:b,noWinnersBlurb:v,winners:w,eventId:C}};var I=i(82925),w=i(12563);let E=e=>{let{winner:t}=e,{title:i,constId:r,poster:o,pageLink:l,awardName:d,winnerName:p,secondaryWinners:m,notes:u}=t,{baseColor:h}=(0,a.useContext)(I.Theme).palette,{makeRefMarker:f,value:x}=(0,g.Lz)(),{isInWatchlist:b,isPending:T,onClick:y,ariaLabel:v}=(0,w.X)(r,x),E=`${l}?ref_=${f(i?g.Cd.TITLE:g.Cd.NAME)}`,M=(0,c.N)({id:"common_ariaLabel_goTo",defaultMessage:p},{target:p}),R=(0,c.N)({id:"feature_winnersWidget_signpost",defaultMessage:"WINNER"});return(0,n.jsxs)(C,{children:[(0,n.jsx)(s.Poster,{ariaLabel:M,href:E,imageProps:{imageModel:o,size:"s",imageType:i?"movie":"name",className:"poster"},watchlistRibbonProps:i?{inWatchlist:b,isLoading:T,onClick:y,ariaLabel:v}:void 0}),(0,n.jsxs)(j,{"data-testid":"winner-detail","aria-label":M,href:E,className:h,children:[(0,n.jsx)(s.Signpost,{text:R}),(0,n.jsx)(S,{children:d}),(0,n.jsx)(k,{children:p}),m?.length?(0,n.jsx)(P,{"data-testid":"winners-secondary",className:h,children:m.map((e,t)=>(0,n.jsxs)(_,{children:[e,t<m.length-1?", ":""]},t))}):null,void 0===u?null:(0,n.jsx)(L,{"data-testid":"winners-notes",children:u})]})]})},C=o.ZP.div.withConfig({componentId:"sc-c0364e9e-0"})(["display:flex;align-items:flex-start;padding-bottom:",";width:33%;","{padding-top:",";border-bottom:1px solid rgba(",",0.1);width:100%;}"],l.spacing.m,l.mediaQueries.breakpoints.below.l,l.spacing.m,(0,l.getColorVarValue)("ipt-base-rgb")),P=o.ZP.div.withConfig({componentId:"sc-c0364e9e-1"})(["",";max-width:85%;&.base{",";}&.baseAlt{",";}"],(0,l.setTypographyType)("body"),(0,l.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),_=o.ZP.span.withConfig({componentId:"sc-c0364e9e-2"})(["display:inline-block;white-space:pre-wrap;"]),S=o.ZP.div.withConfig({componentId:"sc-c0364e9e-3"})(["",";margin-top:",";margin-bottom:",";font-weight:bold;max-width:85%;"],(0,l.setTypographyType)("body"),l.spacing.xs,l.spacing.xs),k=o.ZP.div.withConfig({componentId:"sc-c0364e9e-4"})(["",";text-align:left;max-width:85%;"],(0,l.setTypographyType)("body")),L=o.ZP.div.withConfig({componentId:"sc-c0364e9e-5"})(["",";margin-bottom:",";max-width:85%;"],(0,l.setTypographyType)("bodySmall"),l.spacing.xxs),j=o.ZP.a.withConfig({componentId:"sc-c0364e9e-6"})(["",";padding-left:",";text-decoration:none;width:100%;&.base{",";}&.baseAlt{",";}"],(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),l.spacing.m,(0,l.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color")),M={SUBSECTION_TITLE:"winners-subsection-title",SECTION_CONTENT:"winners-section-content",EMPTY:"winners-empty",CONTENT:"winners-content"},R=(e,t)=>{if(!e)return!1;let{displayTitle:i,displayDescription:n,eventPageUrl:r,noWinnersBlurb:a,winners:o,eventId:s}=e;return(!t||s===t)&&!!e&&!!i&&!!n&&!!r&&!!a&&!!o},A=e=>{let{fallbackComponent:t,mustMatchEventId:i,headerText:r}=e;return(0,n.jsx)(d.Z,{name:"WinnersWidget",children:(0,n.jsx)(g.xm,{value:g.Cd.WINNERS_WIDGET,children:(0,n.jsx)(N,{fallbackComponent:t,mustMatchEventId:i,headerText:r})})})},N=e=>{let{fallbackComponent:t,mustMatchEventId:i,headerText:a}=e,{makeRefMarker:o}=(0,g.Lz)(),{overrideEvent:l,numWinners:d,winnersOffset:p}=m(r.isBrowser?window.location.search:void 0),{displayTitle:u,displayDescription:h,eventPageUrl:f,noWinnersBlurb:x,winners:b,eventId:T}=v({numWinners:d??3,winnersOffset:p??0,overrideEvent:l}),y=(0,c.N)({id:"winners_widget_see_all_link_text",defaultMessage:"See the full list of winners and nominees"}),I=R({displayTitle:u,displayDescription:h,eventPageUrl:f,noWinnersBlurb:x,winners:b,eventId:T},i);return I||t?(0,n.jsxs)(n.Fragment,{children:[I&&(0,n.jsxs)(s.PageSection,{topPadding:"none",bottomPadding:"none",children:[(0,n.jsx)(s.SubSectionTitle,{"data-testid":M.SUBSECTION_TITLE,description:h,href:`${f}?ref_=${o(g.Cd.TOP)}`,children:a||u}),(0,n.jsxs)($,{"data-testid":M.SECTION_CONTENT,children:[b&&0===b.length&&(0,n.jsx)(O,{"data-testid":M.EMPTY,children:x}),b&&b.length>0&&(0,n.jsx)(D,{"data-testid":M.CONTENT,children:b.map((e,t)=>(0,n.jsx)(E,{winner:e},t))}),(0,n.jsx)(V,{text:y,href:`${f}?ref_=${o(g.Cd.BOTTOM)}`})]})]}),!I&&t]}):null},O=o.ZP.div.withConfig({componentId:"sc-e5012e40-0"})(["padding-bottom:",";"],l.spacing.s),$=o.ZP.div.withConfig({componentId:"sc-e5012e40-1"})([""," ",""],(0,l.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,l.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),D=o.ZP.div.withConfig({componentId:"sc-e5012e40-2"})(["","{display:flex;}"],l.mediaQueries.breakpoints.above.l),V=(0,o.ZP)(s.TextLink).withConfig({componentId:"sc-e5012e40-3"})(["","{padding-top:",";}"],l.mediaQueries.breakpoints.below.l,l.spacing.m)},76857:function(e,t,i){var n,r;i.d(t,{Ei:function(){return o},NE:function(){return s},oM:function(){return a},wF:function(){return n}}),(r=n||(n={})).IMDB_TV="IMDbTV",r.IMDB_ORIGINAL="IMDbOriginal",r.VIDEO="Video";let a="video-hero",o="ls053181649",s={HERO_SLATE:"hero-slate",TITLE_POSTER:"title-poster"}},59899:function(e,t,i){i.d(t,{E:function(){return a},f:function(){return r}});var n=i(2784);let r=n.createContext({}),a=n.createContext({})},10913:function(e,t,i){i.d(t,{Z:function(){return iW}});var n,r,a,o,s,l,d=i(52322),c=i(2784),g=i(25436),p=i(54588),m=i(23906),u=i(55634),h=i(59002),f=i(11438),x=i(24391),b=i(88959),T=i(95746),y=i(88854),v=i(11778),I=i(19596),w=i(88169),E=i(86704),C=i(86958),P=i(2759);let _=/\/symphony\/preview\/\w+\/([\w\d-]+)\//,S=e=>{let t=(0,C.B)().context.queryParams,i=(0,P.Zl)();if(!t||!i)return;let n=t[`slot_${e}`]||void 0;return n&&"string"==typeof n?_.exec(n)?.[1]:void 0},k=e=>{let{slotName:t,slotData:i}=e,n=S(t),r=`https://${(0,v.isDevStage)()?"beta.":""}console.harmony.a2z.com/content-symphony/NA`,a=i&&i.symphonyMetadata?.creativeId||n,o=a&&i&&i.symphonyMetadata?.placementId,s=i&&i.componentName;return(0,d.jsxs)(L,{"data-testid":"slot-debug-bar",children:[!!s&&(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:"Component:"})," ",s," -"," "]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:"Symphony Slot:"})," ",t]}),!!(a||o)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:" - "}),!!a&&(0,d.jsx)(w.TextLink,{href:`${r}/creatives/summary/${a}/content`,text:"Campaign"}),!!o&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:" - "}),(0,d.jsx)(w.TextLink,{href:`${r}/creatives/summary/${a}/scheduling/edit/${o}`,text:"Placement"})]})]})]})},L=I.ZP.div.withConfig({componentId:"sc-dadf9052-0"})(["background-color:",";color:",";padding:0.25rem;b{font-weight:bolder;}"],(0,E.getColorVarValue)("ipt-accent1-bg"),(0,E.getColorVarValue)("ipt-on-accent1-color")),j=e=>{switch(e){case b.FO.MAIN:return 2;case b.FO.SIDE:return 1;default:return 3}},M=e=>{switch(e){case b.FO.MAIN:return w.SectionTitle;case b.FO.SIDE:return w.Title;default:return w.SubSectionTitle}};(n=o||(o={})).main="announcement-widget",n.grid="announcement-widget--grid",n.title="announcement-widget--title",n.image="announcement-widget--image",n.imageAspect="announcement-widget--image-aspect",n.description="announcement-widget--desc",n.cta="announcement-widget--cta",n.ctaFullWidth="announcement-widget--cta--full-width";let R=e=>{let{placementArgs:t,displayType:i}=e,{displayTitle:n,description:r,linkTargetLabel:a,linkTargetUrl:o,slateImageModel:s}=t,{makeRefMarker:l}=(0,f.Lz)(),c=i===b.FO.SIDE?"both":void 0,g=j(i),p=M(i);return(0,d.jsx)(A,{sidePadding:"",children:(0,d.jsx)(w.PageGridItem,{span:g,children:(0,d.jsxs)(N,{omitPageMargin:c,children:[(0,d.jsx)(p,{className:"announcement-widget--title",href:`${o}?ref_=${l(f.Cd.TITLE)}`,children:n}),(0,d.jsx)(O,{className:"announcement-widget--image-aspect",href:`${o}?ref_=${l(f.Cd.IMAGE)}`,ariaLabel:n,imageProps:{imageModel:s,aspectRatio:"16:9",loading:"eager",radius:"media"}}),(0,d.jsx)($,{className:"announcement-widget--desc",html:r}),a?(0,d.jsx)(D,{className:"announcement-widget--cta",postIcon:"chevron-right",href:`${o}?ref_=${l(f.Cd.SEE_MORE)}`,children:a}):(0,d.jsx)(d.Fragment,{})]})})})},A=(0,I.ZP)(w.PageSection).withConfig({componentId:"sc-75d0e8cb-0"})(["container:widget / inline-size;"]),N=(0,I.ZP)(w.SubGrid).withConfig({componentId:"sc-75d0e8cb-1"})(["width:100%;grid-template-rows:auto 1fr min-content min-content;row-gap:0;@container widget (min-width:"," ) and (max-width:","){grid-template-rows:auto 1fr min-content;}@container widget (min-width:"," ){grid-template-rows:auto min-content 1fr;}@supports not (container:inline-size){","{grid-template-rows:auto 1fr min-content;}","{grid-template-rows:auto min-content 1fr;}}.","{grid-area:1 / 1 / 2 / -1;padding:0;@container widget (min-width:"," ){grid-area:1 / 5 / 1 / -1;}@supports not (container:inline-size){","{grid-area:1 / 5 / 1 / -1;}}}"],E.breakpoints.sizes.m,E.breakpoints.sizes.l,E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.m,E.mediaQueries.breakpoints.above.l,"announcement-widget--title",E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.l),O=(0,I.ZP)(w.Slate).withConfig({componentId:"sc-75d0e8cb-2"})(["display:flex;position:relative;aspect-ratio:16/9;grid-area:2 / 1 / span 2 / span 2;@container widget (min-width:"," ){grid-area:2 / 1 / -1 / span 3;}@container widget (min-width:"," ){grid-area:1 / 1 / -1 / span 4;}@supports not (container:inline-size){","{grid-area:2 / 1 / -1 / span 3;}","{grid-area:1 / 1 / -1 / span 4;}}"],E.breakpoints.sizes.m,E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.m,E.mediaQueries.breakpoints.above.l),$=(0,I.ZP)(w.HTMLContent).withConfig({componentId:"sc-75d0e8cb-3"})(["grid-area:2 / 3 / -1 / -1;@container widget (min-width:"," ){grid-area:2 / 4 / 2 / -1;}@container widget (width >= 768px) and (max-width:","){grid-column:4 / -2;}@container widget (min-width:"," ){grid-column:5 / -3;margin-bottom:1rem;}@supports not (container:inline-size){","{grid-area:2 / 4 / 2 / -1;}@media (width >= 768px) and (max-width:","){grid-column:4 / -2;}","{grid-column:5 / -3;margin-bottom:1rem;}}"],E.breakpoints.sizes.m,E.breakpoints.breakpoints.l,E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.m,E.breakpoints.breakpoints.l,E.mediaQueries.breakpoints.above.l),D=(0,I.ZP)(w.SecondaryButton).withConfig({componentId:"sc-75d0e8cb-4"})(["grid-row:4;grid-column:1 / -1;margin-top:1rem;width:min-content;flex-shrink:0;display:flex;white-space:nowrap;@container widget (min-width:"," ){display:flex;margin-top:0;width:min-content;height:min-content;align-self:self-end;grid-row:3;grid-column:4 / -1;}@container widget (min-width:"," ){grid-column:5 / -1;}@supports not (container:inline-size){","{display:flex;margin-top:0;width:min-content;height:min-content;align-self:self-end;grid-row:3;grid-column:4 / -1;}","{grid-column:5 / -1;}}"],E.breakpoints.sizes.m,E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.m,E.mediaQueries.breakpoints.above.l);var V=i(54137),Z=i(69380),W=i(75824),Q=i(76857);let F=e=>{let{headingText:t,subHeadingText:i,runtime:n,children:r}=e;return(0,d.jsxs)(U,{children:[(0,d.jsxs)(Y,{children:[(0,d.jsx)(H,{children:t}),(0,d.jsx)(J,{children:n})]},"h2"),(0,d.jsx)(B,{children:i},"h3"),r]})},z=I.ZP.figcaption.withConfig({componentId:"sc-809ef538-0"})(["display:flex;flex-direction:row;min-width:0;margin:16px 16px 0;position:absolute;bottom:0;right:0;left:177px;","{align-items:flex-start;}","{left:148px;}","{left:165px;}","{left:90px;flex-direction:column;}"],E.mediaQueries.breakpoints.above.m,E.mediaQueries.breakpoints.only.l,E.mediaQueries.breakpoints.only.m,E.mediaQueries.breakpoints.below.m),U=I.ZP.div.withConfig({componentId:"sc-809ef538-1"})(["display:flex;flex-direction:column;min-width:0;justify-content:space-around;width:100%;"]),Y=I.ZP.div.withConfig({componentId:"sc-809ef538-2"})(["display:flex;align-items:flex-end;","{font-size:1.25rem;}","{font-size:34px;line-height:40px;}"],E.mediaQueries.breakpoints.below.s,E.mediaQueries.breakpoints.above.m),B=I.ZP.div.withConfig({componentId:"sc-809ef538-3"})(["","{"," font-weight:400;}","{"," font-weight:400;}","{","}color:",";font-weight:400;margin:0.25rem 0 0;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;"],E.mediaQueries.breakpoints.only.xl,(0,E.setTypographyType)("headline5"),E.mediaQueries.breakpoints.above.m,(0,E.setTypographyType)("headline6"),E.mediaQueries.breakpoints.below.s,(0,E.setTypographyType)("subtitle2"),(0,E.getColorVarValue)("ipt-on-baseAlt-textSecondary-color")),H=I.ZP.span.withConfig({componentId:"sc-809ef538-4"})(["color:",";","{","}","{"," font-weight:400;}","{"," font-weight:400;}","{"," font-weight:400;}display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;"],(0,E.getColorVarValue)("ipt-on-baseAlt-color"),E.mediaQueries.breakpoints.only.xs,(0,E.setTypographyType)("subtitle"),E.mediaQueries.breakpoints.above.s,(0,E.setTypographyType)("headline6"),E.mediaQueries.breakpoints.above.m,(0,E.setTypographyType)("headline5"),E.mediaQueries.breakpoints.above.xl,(0,E.setTypographyType)("headline4")),G=(0,I.iv)(["height:50px;margin:0 0 8px 0;width:50px;","{height:72px;margin:0 16px 0 0;width:72px;}g{","}"],E.mediaQueries.breakpoints.above.m,(0,E.setPropertyToColorVar)("color","ipt-on-baseAlt-color")),q=(0,I.ZP)(w.Icon).withConfig({componentId:"sc-809ef538-5"})(["",""],G),K=(0,I.ZP)(w.Icon).withConfig({componentId:"sc-809ef538-6"})(["color:#cf1f4a;",""],G),X=I.ZP.div.withConfig({componentId:"sc-809ef538-7"})(["align-items:center;display:flex;"]),J=I.ZP.span.withConfig({componentId:"sc-809ef538-8"})(["color:",";display:none;font-size:1rem;line-height:28px;margin-left:2rem;","{display:inline;font-size:1.25rem;align-self:flex-end;}"],(0,E.getColorVarValue)("ipt-on-baseAlt-textSecondary-color"),E.mediaQueries.breakpoints.above.m),ee=I.ZP.span.withConfig({componentId:"sc-809ef538-9"})(["display:block;margin-left:1rem;","{display:none;}"],E.mediaQueries.breakpoints.above.m);var et=e=>{let{subHeadingText:t,mainHeadingText:i,runtime:n,videoContentType:r,children:a}=e,o=(0,W.N)({id:"video_hero_watch_on_imdb_tv",defaultMessage:"Watch Now on IMDb TV!"});return(0,d.jsx)(z,{children:(()=>{switch(r){case Q.wF.IMDB_ORIGINAL:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(q,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:n})]}),(0,d.jsx)(F,{headingText:i,subHeadingText:t,runtime:n,children:a})]});case Q.wF.IMDB_TV:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(K,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:n})]}),(0,d.jsx)(F,{headingText:i,subHeadingText:o,runtime:n,children:a})]});default:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(q,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:n})]}),(0,d.jsx)(F,{headingText:i,subHeadingText:t,runtime:n,children:a})]})}})()})},ei=i(12563),en=i(3357),er=i(1833),ea=i(66724),eo=i(59899);let es=(0,I.ZP)(w.Slate).withConfig({componentId:"sc-763a1cd7-0"})(["cursor:pointer;text-align:left;padding-bottom:70px;position:relative;&&{outline:none;}&:hover:not(:has(.",":hover)){.slide-caption-play-icon{","}}"],V.Ec.SPONSORED_LINK,(0,E.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color")),el=(0,I.ZP)(w.Slate.Image).withConfig({componentId:"sc-763a1cd7-1"})(["align-items:center;"]);var ed=e=>{let{videoId:t,listId:i,videoTitle:n,titleText:r,slotName:a}=e.videoSlateMetadata,{children:o,imageProps:s,className:l}=e,{videoSingleLinkBuilder:g}=(0,ea.WOb)(),{makeRefMarker:p}=(0,f.Lz)(),m=(0,c.useContext)(eo.E).indexInCarousel||0,u=(0,c.useContext)(eo.f),h=g({viconst:t,refSuffix:f.Cd.EMPTY,query:i?{listId:i}:void 0}),x=(0,er.Lr)(h,p([f.Cd.VIDEO,(0,f.Qk)({refStr:a,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:m+1}])),b={...u?{onClick:()=>{(0,en.ih)(u),x&&(0,en.dS)(x)}}:{href:x}},T=(0,W.N)({id:"video_slate_ariaLabel_fallback",defaultMessage:"Video slide"});return(0,d.jsxs)(es,{...b,dynamicWidth:!0,ariaLabel:n||r||T,className:l,"data-testid":Q.NE.HERO_SLATE,children:[(0,d.jsx)(el,{imageModel:s?.imageModel,aspectRatio:"16:9",loading:0===m?"eager":"lazy"}),o]})};let ec=I.ZP.figure.withConfig({componentId:"sc-d199aea7-0"})(["height:100%;position:relative;"]),eg=I.ZP.div.withConfig({componentId:"sc-d199aea7-1"})(["display:flex;position:relative;"]),ep=(0,I.ZP)(e=>{let{titleId:t,titleText:i,clickThroughUri:n,slotName:r}=e.titlePosterMetadata,{className:a,dynamicWidth:o,watchlistRibbonSize:s,imageProps:l}=e,g=l?.imageModel||void 0,{titleMainLinkBuilder:p}=(0,ea.WOb)(),{makeRefMarker:m}=(0,f.Lz)(),u=(0,c.useContext)(eo.E),h=(0,c.useContext)(eo.f),x=u.indexInCarousel||0,b=m([f.Cd.CAP,f.Cd.PRI,(0,f.Qk)({refStr:r,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:x+1}]),T=m([f.Cd.VIDEO,f.Cd.WATCHLIST_RIBBON,(0,f.Qk)({refStr:r,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:x+1}]),{isInWatchlist:y,isPending:v,onClick:I,ariaLabel:E}=(0,ei.X)(t,T),C=n||p({tconst:t,refSuffix:f.Cd.POSTER}),P=(0,er.Lr)(C,b),_=async()=>{h&&await (0,en.Ew)(h),P&&(0,en.dS)(P)},S=(0,W.N)({id:"title_main_hero_media_ariaLabel_poster_fallback",defaultMessage:"Poster"}),k={...h?{onClick:_}:{href:P},ariaLabel:i||S,dynamicWidth:o};return(0,d.jsx)(w.Poster,{...k,className:a,"data-testid":Q.NE.TITLE_POSTER,imageProps:{imageModel:g,dynamicWidth:o,loading:0===x?"eager":"lazy"},watchlistRibbonProps:{inWatchlist:y,isLoading:v,onClick:I,ariaLabel:E,className:"ipc-poster__watchlist-ribbon",size:s,onImage:!0}})}).withConfig({componentId:"sc-d199aea7-2"})(["position:absolute;width:165px;z-index:100;bottom:0;left:16px;","{width:132px;}","{width:90px;left:0;}"],E.mediaQueries.breakpoints.below.xl,E.mediaQueries.breakpoints.below.m),em=(0,I.ZP)(w.Slate.Overlay).withConfig({componentId:"sc-d199aea7-3"})(["background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(0,0,0,0.7) 75%,rgba(0,0,0,1) 85%,rgba(0,0,0,1) 100% );background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(",",0.7) 77%,rgba(",",1) 85%,rgba(",",1) 100% );","{background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,1) 82%,rgba(0,0,0,1) 100% );background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(",",0.7) 70%,rgba(",",1) 82%,rgba(",",1) 100% );}"],(0,E.getColorVarValue)("ipt-baseAlt-rgb"),(0,E.getColorVarValue)("ipt-baseAlt-rgb"),(0,E.getColorVarValue)("ipt-baseAlt-rgb"),E.mediaQueries.breakpoints.below.s,(0,E.getColorVarValue)("ipt-baseAlt-rgb"),(0,E.getColorVarValue)("ipt-baseAlt-rgb"),(0,E.getColorVarValue)("ipt-baseAlt-rgb")),eu=(0,I.ZP)(Z.I).withConfig({componentId:"sc-d199aea7-4"})(["margin-top:",";"],E.spacing.xxs);var eh=e=>{let{titleText:t,titleId:i,headline:n,subHeadline:r,videoId:a,listId:o,runtime:s,videoContentType:l,posterImage:c,videoSlateImage:g,slotName:p,adData:m}=e;return(0,d.jsx)(ec,{children:(0,d.jsxs)(eg,{children:[(0,d.jsx)(ep,{titlePosterMetadata:{titleText:t,titleId:i,slotName:p},watchlistRibbonSize:"l",dynamicWidth:!0,imageProps:{imageModel:c}}),(0,d.jsx)(ed,{videoSlateMetadata:{videoTitle:n,videoId:a,listId:o,videoContentType:l,titleText:t,slotName:p},imageProps:{imageModel:g},children:(0,d.jsx)(em,{children:(0,d.jsx)(et,{subHeadingText:r,mainHeadingText:n,videoContentType:l,runtime:s,children:(0,d.jsx)(d.Fragment,{children:m?(0,d.jsx)("div",{children:(0,d.jsx)(V.$,{adFeedbackUrl:m.adFeedbackUrl})}):(0,d.jsx)(eu,{associatedConstId:a,entityType:"video"})})})})})]})})};i(22073);var ef=i(6935),ex=i(63370),eb=i(78893),eT=i(21915);i(16214);var ey=i(30382),ev=i.n(ey);ev()`
    query EventHistory($id: ID!) {
        eventMetadata {
            event(id: $id) {
                editions(first: 150) {
                    edges {
                        node {
                            id
                            instanceWithinYear
                            year
                        }
                    }
                }
            }
        }
    }
`;let eI=e=>e.replace(/ {2}\n/g,"<br>").replace(/\[image=([^\]]+)\](.*?)\[\/image\]/g,'<img src="$1" alt="$2">'),ew=(0,I.ZP)(w.PageSection).withConfig({componentId:"sc-68e0bffa-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),eE=(0,I.ZP)(w.HTMLContent).withConfig({componentId:"sc-68e0bffa-1"})([""," "," img{margin:0 auto;display:block;max-width:100%;}"],(0,E.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"));ev()`
    query images($ids: [ID!]!) {
        images(ids: $ids) {
            id
            width
            height
            url
            caption {
                plainText
            }
        }
    }
`,ev()`
    query imageGalleries($ids: [ID!]!) {
        imageGalleries(ids: $ids) {
            id
            galleryText
            images(first: 1) {
                edges {
                    node {
                        id
                        width
                        height
                        url
                        caption {
                            plainText
                        }
                    }
                }
            }
        }
    }
`,ev()`
    query videos($ids: [ID!]!) {
        videos(ids: $ids) {
            id
            runtime {
                value
                unit
            }
            thumbnail {
                width
                height
                url
            }
            name {
                value
            }
            primaryTitle {
                id
                titleText {
                    text
                    isOriginalTitle
                }
                originalTitleText {
                    text
                }
                primaryImage {
                    url
                    caption {
                        plainText
                    }
                    height
                    width
                }
                series {
                    series {
                        primaryImage {
                            url
                            caption {
                                plainText
                            }
                            height
                            width
                        }
                    }
                }
            }
        }
    }
`,ev()`
    query renderedMarkdown(
        $markdownString: String!
        $queryParams: String
        $showOriginalTitleText: Boolean
    ) {
        renderedMarkdown(markdownString: $markdownString) {
            markdown
            plaidHtml(
                queryParams: $queryParams
                showOriginalTitleText: $showOriginalTitleText
            )
        }
    }
`;var eC=i(49236);let eP=(0,I.ZP)(w.PageSection).withConfig({componentId:"sc-6fdee83c-0"})(["display:flex;justify-content:space-between;"," "," &&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"],(0,E.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),e_=I.ZP.div.withConfig({componentId:"sc-6fdee83c-1"})(["width:33%;text-align:center;"]),eS=I.ZP.a.withConfig({componentId:"sc-6fdee83c-2"})([""," display:block;&:hover{text-decoration:underline;}"],(0,E.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color")),ek=I.ZP.span.withConfig({componentId:"sc-6fdee83c-3"})(["display:block;"," ",""],(0,E.setTypographyType)("body"),(0,E.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color")),eL=I.ZP.span.withConfig({componentId:"sc-6fdee83c-4"})(["display:block;"," ",""],(0,E.setTypographyType)("bodySmall"),(0,E.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"));var ej=i(53665);function eM(e){let{prefix:t,suffix:i}=e;return t&&i?`${t}_${i}`:t||i}var eR=i(45455),eA=i.n(eR),eN=i(95441);let eO="editorial-single-main-column-image",e$=e=>{let{linkedImages:t,slateProps:i,children:n,refMarker:r}=e;if(!t)return null;if(1===t.length)return(0,d.jsx)(eZ,{children:(0,d.jsx)(eV,{"data-testid":"main-column-editorial-styled-slate",slateProps:i,dynamicWidth:!0,children:n})});let a=2===t.length?ez:eF;return(0,d.jsx)(eW,{"data-testid":"main-column-editorial-multiple-images",children:t.map((e,t)=>{let i=e.link&&r?(0,er.Lr)(e.link,`${r}_i`):e.link;return(0,d.jsx)(eQ,{className:eO,children:(0,d.jsx)(a,{children:(0,d.jsx)(w.Poster,{imageProps:{imageModel:e.imageModel},dynamicWidth:!0,href:i,ariaLabel:"editorial image"})})},`${eO}-${t}`)})})},eD=e=>{let{titleProps:t,actionProps:i,description:n,linkedImages:r}=e;return eA()(r)?(0,d.jsxs)(eU,{"data-testid":"main-column-editorial-single",children:[(0,d.jsx)(eK,{children:t?.title}),(0,d.jsx)(eX,{children:t?.title}),(0,d.jsx)(eJ,{html:n}),i?.children]}):(0,d.jsxs)(eU,{"data-testid":"main-column-editorial-single",children:[(0,d.jsx)(eK,{children:t?.title}),(0,d.jsxs)(eB,{"data-testid":"content-with-images",children:[(0,d.jsxs)(eY,{children:[(0,d.jsx)(eX,{children:t?.title}),(0,d.jsx)(eJ,{html:n}),i?.children]}),(0,d.jsx)(e$,{...e})]})]})},eV=(0,I.ZP)(w.SlateCard).withConfig({componentId:"sc-546ed1e8-0"})(["width:100%;"]),eZ=I.ZP.div.withConfig({componentId:"sc-546ed1e8-1"})(["width:100%;","{width:63%;}"],E.mediaQueries.breakpoints.above.m),eW=I.ZP.div.withConfig({componentId:"sc-546ed1e8-2"})(["display:flex;width:100%;& > .","{margin-right:",";}& > :last-child{margin-right:0;}","{width:63%;}.editorial-single-main-column-image{&:focus-within{outline:1px dashed currentColor;}}"],eO,E.spacing.s,E.mediaQueries.breakpoints.above.m),eQ=I.ZP.div.withConfig({componentId:"sc-546ed1e8-3"})(["overflow:hidden;display:inline-flex;position:relative;justify-content:center;align-items:center;width:100%;padding-bottom:calc(","% * 100);"],E.IMAGE_RATIOS["slate-16x9"]),eF=I.ZP.div.withConfig({componentId:"sc-546ed1e8-4"})(["position:absolute;height:100%;width:122%;top:0;"]),ez=I.ZP.div.withConfig({componentId:"sc-546ed1e8-5"})(["position:absolute;height:100%;width:100%;top:0;"]),eU=(0,I.ZP)(w.PageSection).withConfig({componentId:"sc-546ed1e8-6"})(["display:flex;flex-direction:column;"," "," &&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"],(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("padding-left","ipt-pageMargin")),eY=I.ZP.div.withConfig({componentId:"sc-546ed1e8-7"})(["display:flex;flex-direction:column;margin-top:",";z-index:1;","{width:37%;margin-right:",";margin-top:0;}"],E.spacing.m,E.mediaQueries.breakpoints.above.m,E.spacing.m),eB=I.ZP.div.withConfig({componentId:"sc-546ed1e8-8"})(["display:flex;flex-direction:column-reverse;","{flex-direction:row;}"],E.mediaQueries.breakpoints.above.m),eH=I.ZP.h2.withConfig({componentId:"sc-546ed1e8-9"})(["margin-top:0;font-size:1.25rem;font-weight:600;margin-bottom:",";"],E.spacing.l),eG=(0,I.iv)(["display:block;padding-left:",";position:relative;&:before{",";",";content:'';position:absolute;height:1.5rem;width:0.25rem;margin-left:-",";}"],E.spacing.m,(0,E.setPropertyToColorVar)("background","ipt-accent1-bg"),(0,E.setPropertyToShapeVar)("border-radius","ipt-cornerRadius"),E.spacing.m),eq=(0,I.iv)(["display:block;padding-top:",";position:relative;&:before{",";",";content:'';position:absolute;height:0.25rem;width:2.25rem;margin-top:-",";}"],E.spacing.l,(0,E.setPropertyToColorVar)("background","ipt-accent1-bg"),(0,E.setPropertyToShapeVar)("border-radius","ipt-cornerRadius"),E.spacing.l),eK=(0,I.ZP)(eH).withConfig({componentId:"sc-546ed1e8-10"})(["display:none;","{"," ","}","{"," ","}","{"," ","}","{"," ","}"],E.mediaQueries.breakpoints.only.l,eG,(0,eN.S)(1),E.mediaQueries.breakpoints.only.m,eG,(0,eN.S)(1),E.mediaQueries.breakpoints.only.s,eq,(0,eN.S)(2),E.mediaQueries.breakpoints.below.s,eq,(0,eN.S)(2)),eX=(0,I.ZP)(eH).withConfig({componentId:"sc-546ed1e8-11"})(["display:none;","{"," ","}"],E.mediaQueries.breakpoints.only.xl,eq,(0,eN.S)(2)),eJ=(0,I.ZP)(w.HTMLContent).withConfig({componentId:"sc-546ed1e8-12"})(["margin-bottom:1.75rem;"," ","{","}","{","}","{","}"],(0,eN.S)(5),E.mediaQueries.breakpoints.only.xl,(0,eN.S)(6),E.mediaQueries.breakpoints.only.l,(0,eN.S)(7),E.mediaQueries.breakpoints.only.m,(0,eN.S)(7));i(72579),i(14481),(r=s||(s={})).LARGE="large",r.LISTER_SIMPLE="lister_simple",r.LSC_CENTERWIDTH="lsc_centerwidth",r.LSC_LARGE="lsc_large",r.LSC_MEDIUM="lsc_medium",r.LSC_SMALL="lsc_small",r.LSC_XLARGE="lsc_xlarge",r.LSC_XSMALL="lsc_xsmall",r.MEDIUM="medium",r.METER_ITEM="meter_item",r.MOBILE="mobile",r.MOBILE_LIST="mobile_list",r.MOBILE_SUBPAGE="mobile_subpage",r.OG_IMAGE="og_image",r.PORTRAIT_LARGE="portrait_large",r.PORTRAIT_MEDIUM="portrait_medium",r.PORTRAIT_SMALL="portrait_small",r.PORTRAIT_SPECIAL="portrait_special",r.PORTRAIT_XLARGE="portrait_xlarge",r.PORTRAIT_XSMALL="portrait_xsmall",r.PS_105X105="ps_105x105",r.PS_122X176="ps_122x176",r.PS_150X150="ps_150x150",r.PS_38X38="ps_38x38",r.PS_86X86="ps_86x86",r.PS_90X90="ps_90x90",r.SMALL="small",r.SQUARE_LARGE="square_large",r.SQUARE_MEDIUM="square_medium",r.SQUARE_SMALL="square_small",r.SQUARE_XSMALL="square_xsmall",r.TINY="tiny";let e0={[b.Et.LIST]:"editorialSingle_label_list",[b.Et.GALLERY]:"editorialSingle_label_photos",[b.Et.IMAGE]:"editorialSingle_label_photos"};b.Et.VIDEO,b.LQ.PLAY_CIRCLE_OUTLINE,b.Et.GALLERY,b.LQ.COLLECTIONS,b.Et.LIST,b.LQ.LIST,b.LQ.COLLECTIONS;let e1=e=>{var t,i;let n,r,{placementArgs:a,refMarker:o,displayType:s}=e,l=(0,m.wL)("component_IMDbEditorialSingle"),c=(0,ej.Z)(),g=(t=a.refTag)&&o?o?.prefix&&o.prefix.indexOf(t)>=0?eM(o):(0,eC.z)(t,o):o?eM(o):t||void 0,p=(i=a.refTag)&&o?o?.prefix&&o.prefix.indexOf(i)>=0?eM(o):(0,eC.z)(`c_${i}`,o):o?(0,eC.z)("c",o):i?`${i}_c`:void 0;try{r=a.linkedImages?.map(e=>({fullRefMarker:g,link:e.link,imageModel:e.imageModel?{...e.imageModel,caption:e.imageModel?.caption||"Image caption not available"}:void 0}))??[];let e=a.callToActionUrl&&a.callToActionText&&{children:(0,d.jsx)(w.TextLink,{href:p&&!e5(a.callToActionUrl)?(0,er.Lr)(a.callToActionUrl,`${p}_cta`):a.callToActionUrl,text:a.callToActionText})};n=function(e,t,i,n,r,a,o){let s={[e0[b.Et.LIST]]:e.formatMessage({id:e0[b.Et.LIST],defaultMessage:"List"}),[e0[b.Et.GALLERY]]:e.formatMessage({id:e0[b.Et.GALLERY],defaultMessage:"Photos"})},l={iconName:i,text:a&&Object.keys(s).includes(a)?s[a]:a,gradientType:"linear"},d=r?.imageModel,c=r?.link,g=o&&c&&!e5(c)?(0,er.Lr)(c,`${o}_i`):c,p=o&&c&&!e5(c)?(0,er.Lr)(c,`${o}_t`):c;return{slateProps:{imageProps:{imageModel:d},overlayProps:l,onClick:()=>g,href:g,ariaLabel:l?.text?l.text:"editorial image"},titleProps:{title:t,href:p,lineClamp:"none"},actionProps:n}}(c,a.displayTitle,a.iconName,e,r[0],a.overlayCaption,g)}catch(e){return l.error("Exception rendering component IMDbEditorialSingle",{message:e.message,stack:e.stack}),null}let u=(0,b.zc)(a.constId??"")===b.Et.VIDEO?(0,d.jsx)(Z.Q,{associatedConstId:a.constId,entityType:"video"}):void 0;return n={...n,children:u},(0,d.jsx)(d.Fragment,{children:s===b.FO.MAIN?(0,d.jsx)(eD,{...n,description:a.description,linkedImages:r,refMarker:g}):(0,d.jsx)(e2,{className:"imdb-editorial-single",dynamicWidth:!0,size:"s",...n})})},e2=(0,I.ZP)(w.SlateCard).withConfig({componentId:"sc-73d1a9c6-0"})(["width:100%;"]),e5=e=>"https://"===e.substring(0,8)||"http://"===e.substring(0,7);var e8=i(31885);ev()`
    query AdvancedTitleSearchWidget(
        $titleTypeConstraint: TitleTypeSearchConstraint
        $userRatingsConstraint: UserRatingsSearchConstraint
        $keywordConstraint: KeywordSearchConstraint
        $genreConstraint: GenreSearchConstraint
        $sort: AdvancedTitleSearchSort
    ) {
        advancedTitleSearch(
            first: 3
            constraints: {
                titleTypeConstraint: $titleTypeConstraint
                userRatingsConstraint: $userRatingsConstraint
                keywordConstraint: $keywordConstraint
                genreConstraint: $genreConstraint
            }
            sort: $sort
        ) {
            edges {
                node {
                    title {
                        id
                        titleText {
                            text
                        }
                        originalTitleText {
                            text
                        }
                        primaryImage {
                            url
                            height
                            width
                            caption {
                                plainText
                            }
                        }
                    }
                }
            }
        }
    }
`;var e9=i(74095),e3=i(78267),e4=i(75785),e7=i(42748),e6=i(84314),te=i(49996),tt=i(14438);let ti=(e,t)=>{if(t?.[e]===void 0)return;let i=Object.entries(t[e]??{}).find(e=>{let[,t]=e;return t});return i?i[0]:void 0},tn=c.createContext({subscribeToRatingChange:void 0,subscribeToWatchlistChange:void 0});tn.Provider,tn.Consumer;var tr=i(44958),ta=i(3557);let to=()=>{let e=(0,c.useContext)(tn),t=(0,c.useContext)(tr.E5).ratings;(0,c.useEffect)(()=>{e.subscribeToRatingChange&&e.subscribeToRatingChange(t)},[t]);let i=(0,c.useContext)(ta.r).state.items;return(0,c.useEffect)(()=>{e.subscribeToWatchlistChange&&e.subscribeToWatchlistChange(i)},[i]),(0,d.jsx)(d.Fragment,{})};var ts=i(61139),tl=i(44115),td=i(43698),tc=i(51347),tg=i(36123),tp=i(23279),tm=i(55736);let tu=(e,t)=>{let i={};return t.forEach(t=>{let n=e.getPropertyValue(t);n&&(i[t]=n.trim())}),i};var th=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2?arguments[2]:void 0,n=i||Array.from(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.styleSheets,t=new Set;for(let i=0;i<e.length;i++)try{let n=e[i];for(let e=0;e<n.cssRules.length;e++)try{let i=n.cssRules[e];for(let e=0;e<i.style.length;e++){let n=i.style[e];n.startsWith("--")&&t.add(n)}}catch(e){continue}}catch(e){continue}return Array.from(t)}());return tu(window.getComputedStyle(e,t),n)};let tf={getIsReady:()=>!0,getWidgetSize:null,getSiteVariant:()=>"web",getPlatform:()=>"web",getPlacementData:null,getPageContext:null,getWeblabActivations:null,openTitlePrompt:null,openCreditPrompt:null,openRatingPrompt:null,recordMetric:null,setRating:null,setWatchlist:null,subscribeToRatingChange:null,subscribeToWatchlistChange:null,getScrollOffset:ts.default,getViewportSize:tl.ZP,getTheme:e=>th(e),getThemeVariables:e=>th(e),setWidgetAspectRatio:td.ZP,subscribeToIntersectionObserver:tc.IH,unsubscribeFromIntersectionObserver:tc.Od,subscribeToMediaQueries:tg.IH,unsubscribeFromMediaQueries:tg.Od,subscribeToResize:tp.IH,unsubscribeFromResize:tp.Od,subscribeToScrollChange:tm.IH,unsubscribeFromScrollChange:tm.Od},tx=e=>{let{title:t,url:i}=e;return{slotName:e.slotName||"",title:t,url:i,height:e.height||"400",generatedPrefix:e.generatedPrefix||"",isPageSection:e.isPageSection||"",disableLazyLoad:e.disableLazyLoad||""}},tb=(e,t,i)=>{let n=e.contentWindow;n&&(n.EmbeddableBridge?(n.EmbeddableBridge.pageContext=t,n.EmbeddableBridge.placementData=i,n.EmbeddableBridge.requests||(n.EmbeddableBridge.requests=[])):n.EmbeddableBridge={requests:[],pageContext:t,placementData:i},n.setEmbeddableReady?n.setEmbeddableReady():(0,e4.ZP)(n,{messageType:"embeddableReady"},"*"))},tT=(e,t)=>{if(!e)return!1;let{pageAction:i,refMarkerString:n,customPageMetadata:r}=e;if("string"==typeof i&&"string"==typeof n){let e={pageAction:i,refMarkerString:n};return r&&(e.customPageMetadata=r),t(e),!0}return!1},ty=/\/(m|www)?(\.)?((dev|preprod|beta|gamma|(([a-zA-Z]+\.)+)?desktop)+)?\.imdb\.com/,tv=e=>!!e&&!!e.match(ty),tI=(e,t)=>{let i=new URL(e),n=new URL(t);return tE(n.href)?(i.hostname=n.hostname,i.href):e},tw=/[0-9a-z-]+\.amazon\.com[:0-9]+?\/embeddable\//,tE=e=>tv(e)||tw.test(e),tC="IMDbEmbeddable",tP="embeddableMessage",t_=`component_${tC}`,tS=e=>{let{isPageSection:t,children:i}=e;return t?(0,d.jsx)(w.PageSection,{"data-testid":"embeddable-section",children:i}):(0,d.jsx)(tk,{children:i})},tk=I.ZP.div.withConfig({componentId:"sc-a0df6ef8-0"})(["position:relative;width:100%;line-height:0;"]),tL=I.ZP.iframe.withConfig({componentId:"sc-a0df6ef8-1"})(["width:100%;"]),tj=(0,I.ZP)(w.SlateCard).withConfig({componentId:"sc-19912bf7-0"})(["width:100%;"]),tM=(0,I.ZP)(w.TextLink).withConfig({componentId:"sc-19912bf7-1"})(["",""],(0,eN.S)(2)),tR=(0,I.ZP)(w.Slate).withConfig({componentId:"sc-19912bf7-2"})(["width:63%;"]),tA=(0,I.ZP)(w.Title).withConfig({componentId:"sc-19912bf7-3"})(["padding-left:0;"]),tN=I.ZP.div.withConfig({componentId:"sc-19912bf7-4"})(["","{display:none;}"],E.mediaQueries.breakpoints.only.m),tO=(0,I.ZP)(w.PageSection).withConfig({componentId:"sc-19912bf7-5"})(["display:none;","{display:flex;flex-direction:column;}"],E.mediaQueries.breakpoints.only.m),t$=(0,I.ZP)(w.HTMLContent).withConfig({componentId:"sc-19912bf7-6"})(["margin-bottom:",";",""],E.spacing.l,(0,eN.S)(7)),tD=I.ZP.div.withConfig({componentId:"sc-19912bf7-7"})(["width:37%;margin-right:",";"],E.spacing.m),tV=I.ZP.div.withConfig({componentId:"sc-19912bf7-8"})(["display:flex;flex-direction:row;"]);var tZ=i(11947),tW=i(15030),tQ=i(40981),tF=i(57708);let tz=e=>{let{rank:t,title:i,link:n,imageModel:r,rankChange:a,percentage:o,ratingData:s,refOverride:l}=e,c=o?o.weight/o.total:void 0,g=c&&c<.01,p=r?.type==="name"?w.AvatarImage:w.PosterImage;return(0,d.jsx)(w.MetaDataListItem,{labelLink:n,labelLinkAriaLabel:`${t}. ${i}`,display:"inline",preElement:r?(0,d.jsx)(tU,{children:(0,d.jsx)(p,{imageModel:r,size:"48px",dynamicWidth:!0,imageType:r.type||"movie",dynamicAspectRatio:!0})}):void 0,children:(0,d.jsxs)(tY,{children:[(0,d.jsxs)(tB,{children:[(0,d.jsxs)(tX,{"data-testid":"rank-list-item-title",children:[(0,d.jsx)(tJ,{children:t}),i]}),!!s?.aggregateRating&&(0,d.jsxs)(tq,{onClick:e=>e.stopPropagation(),children:[(0,d.jsx)(tH,{hideMaxIMDbRating:!0,canRate:s.canRate,titleId:s.titleId,titleText:i,ratingsSummary:{aggregateRating:s.aggregateRating},refOverride:l}),!!s?.canRate&&(0,d.jsx)(tG,{titleId:s?.titleId,titleText:i})]})]}),(0,d.jsxs)(tK,{children:[!!a&&!!a.direction&&"number"==typeof a.difference&&(0,d.jsx)(tW.x,{difference:a.difference,direction:a.direction}),!!c&&(0,d.jsxs)(d.Fragment,{children:[!!g&&"<",(0,d.jsx)(tZ.A,{value:g?.01:c,unit:"percent",style:"percent",maximumFractionDigits:g?0:1})]})]})]})})},tU=I.ZP.span.withConfig({componentId:"sc-29915307-0"})(["display:flex;width:3rem;flex-shrink:0;"]),tY=I.ZP.div.withConfig({componentId:"sc-29915307-1"})(["display:flex;flex-direction:row;margin-left:",";"," ",""],E.spacing.s,(0,E.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,E.setTypographyType)("bodySmall")),tB=I.ZP.div.withConfig({componentId:"sc-29915307-2"})(["display:flex;flex-direction:column;flex-grow:1;","{flex-direction:row;justify-content:space-between;align-items:center;margin-right:",";}"],E.mediaQueries.breakpoints.above.l,E.spacing.xs),tH=(0,I.ZP)(tQ.Nf).withConfig({componentId:"sc-29915307-3"})(["flex-wrap:nowrap;margin-left:-2px;min-height:1.75rem;width:fit-content;.","{padding:0 ",";span{",";}}"],tQ.z7.USER_RATING,E.spacing.s,(0,E.setTypographyType)("bodySmall")),tG=(0,I.ZP)(tF.$).withConfig({componentId:"sc-29915307-4"})(["","{margin-left:-",";padding-top:0;padding-bottom:0;min-height:auto;}"],E.mediaQueries.breakpoints.below.s,E.spacing.xs),tq=I.ZP.div.withConfig({componentId:"sc-29915307-5"})(["display:flex;align-items:center;flex-wrap:wrap;gap:0 ",";"],E.spacing.xxs),tK=I.ZP.div.withConfig({componentId:"sc-29915307-6"})(["display:flex;flex-direction:row;flex-grow:0;align-items:center;"]),tX=I.ZP.span.withConfig({componentId:"sc-29915307-7"})([""," "," ","{display:inline-flex;align-items:center;padding:0.75rem 0 0;}"],(0,E.setTypographyType)("body"),(0,E.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),E.mediaQueries.breakpoints.below.l),tJ=I.ZP.span.withConfig({componentId:"sc-29915307-8"})(["font-weight:bold;margin-right:",";"],E.spacing.s);var t0=i(9707),t1=i(86528),t2=i(41174);let t5=(0,I.ZP)(w.PageSection).withConfig({componentId:"sc-355af3ec-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),t8=(0,I.ZP)(e=>{let{items:t,...i}=e;return t&&0!==t.length?(0,d.jsx)(w.MetaDataList,{...i,display:"compact",children:t.map(e=>(0,c.createElement)(tz,{...e,refOverride:i.refOverride,key:`${e.rank}-${e.title}`}))}):null}).withConfig({componentId:"sc-355af3ec-1"})([""," ",""],(0,E.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("margin-right","ipt-pageMargin")),t9=I.ZP.div.withConfig({componentId:"sc-355af3ec-2"})(["align-items:center;display:flex;justify-content:center;min-height:2.25rem;"]),t3=I.ZP.div.withConfig({componentId:"sc-355af3ec-3"})(["margin-top:",";"," "," margin-bottom:",";min-height:2.25rem;"],E.spacing.l,(0,E.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("margin-right","ipt-pageMargin"),E.spacing.l);var t4=i(85018);(a=l||(l={})).TitleTrendsUpcoming="INDIA_TITLE_TRENDS_UPCOMING",a.TitleTrendsReleasedTamil="INDIA_TITLE_TRENDS_RELEASED_TAMIL",a.TitleTrendsReleasedTelugu="INDIA_TITLE_TRENDS_RELEASED_TELUGU",a.TitleRankingsTop250India="TOP_250_INDIA",a.TitleRankingsTop50Tamil="TOP_50_TAMIL",a.TitleRankingsTop50Telugu="TOP_50_TELUGU",a.TitleRankingsTop50Malayalam="TOP_50_MALAYALAM",e8._pv.IndiaTitleTrendsUpcoming,e8._pv.IndiaTitleTrendsReleasedTamil,e8._pv.IndiaTitleTrendsReleasedTelugu,e8.dO5.Top_250India,e8.dO5.Top_50Tamil,e8.dO5.Top_50Telugu,e8.dO5.Top_50Malayalam;let t7=ev()`
    fragment TitleItem on Title {
        ...BaseTitleCard
        ...TitleCardTrailer
    }
    ${t4.sq}
    ${t4.F4}
`,t6=ev()`
    fragment TrendingTitle on TrendingTitleNode {
        rank
        weightRank
        item {
            ...TitleItem
        }
    }
    ${t7}
`;ev()`
    query IndiaWidgetTrendingTitles(
        $numResults: Int!
        $input: TopTrendingPredefinedEnum!
    ) {
        topTrendingSetsPredefined(
            first: $numResults
            input: { topTrendingSetPredefined: $input }
        ) {
            edges {
                node {
                    ...TrendingTitle
                }
            }
        }
    }
    ${t6}
`;let ie=ev()`
    fragment RankTitle on TitleChartRankingsNode {
        item {
            ...TitleItem
        }
    }
    ${t7}
`;ev()`
    query IndiaWidgetTopRatedTitles(
        $numResults: Int!
        $input: TitleChartRankingsType!
    ) {
        titleChartRankings(
            first: $numResults
            input: { rankingsChartType: $input }
        ) {
            edges {
                node {
                    ...RankTitle
                }
            }
        }
    }
    ${ie}
`;var it=i(23842);let ii=(0,I.ZP)(w.PageSection).withConfig({componentId:"sc-7ab67fd6-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),ir=(0,I.ZP)(w.TextLink).withConfig({componentId:"sc-7ab67fd6-1"})([""," margin-top:1.75rem;"],(0,E.setPropertyToSpacingVar)("margin-left","ipt-pageMargin")),ia=(0,I.ZP)(w.PageSection).withConfig({componentId:"sc-eafbde39-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),io=(0,I.ZP)(w.ChipList).withConfig({componentId:"sc-eafbde39-1"})([""," ",""],(0,E.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"));var is=i(5632),il=i(31769);let id=I.ZP.div.withConfig({componentId:"sc-45354452-0"})(["display:flex;flex-direction:column;padding-top:",";"," ",""],E.spacing.m,e=>e.backgroundColor&&(0,I.iv)(["background-color:",";"],e.backgroundColor),e=>e.backgroundImage&&(0,I.iv)(["background:url(",");background-size:cover;"],e.backgroundImage)),ic=I.ZP.div.withConfig({componentId:"sc-45354452-1"})(["display:flex;flex-direction:row;"]),ig=(0,I.ZP)(w.PageTitle).withConfig({componentId:"sc-45354452-2"})([""," ",""],e=>e.headingColor&&(0,I.iv)(["h1{color:",";}"],e.headingColor),e=>e.href&&(0,I.iv)(["svg{display:none;}"])),ip=I.ZP.div.withConfig({componentId:"sc-45354452-3"})(["",""],(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),im=(0,I.ZP)(il.ZP).withConfig({componentId:"sc-45354452-4"})(["",""],e=>e.color&&(0,I.iv)(["color:",";&:hover{color:",";}"],e.color,e.color)),iu=(0,I.ZP)(w.Tabs).withConfig({componentId:"sc-45354452-5"})([""," "," ",""],e=>e.tabBackgroundColor&&(0,I.iv)(["background-color:",";"],e.tabBackgroundColor),e=>e.tabColor&&(0,I.iv)([".ipc-tab > span{color:",";}"],e.tabColor),e=>e.selectedTabColor&&(0,I.iv)([".ipc-tabs__indicator{background:",";}"],e.selectedTabColor));var ih=i(97729),ix=i.n(ih),ib=i(73286),iT=i(34231);let iy=e=>[e.section,e.subSection].filter(Boolean).join("."),iv=e=>{let{pageType:t,subPageType:i,queryParams:n}=e,r=iy(n||{});return(0,d.jsxs)(d.Fragment,{children:[!!t&&(0,d.jsx)("meta",{property:"imdb:pageType",content:t}),!!i&&(0,d.jsx)("meta",{property:"imdb:subPageType",content:i}),!!r&&(0,d.jsx)("meta",{property:"imdb:specialSectionPageId",content:r})]})},iI=()=>{let e=new URL((0,is.useRouter)().asPath,"https://www.imdb.com"),t=(0,er.ps)()??"";return`https://${e.hostname}${t}${e.pathname}${e.pathname.endsWith("/")?"":"/"}`},iw=e=>{let t={};e.forEach(e=>{Object.keys(e).forEach(i=>{let n=`background-${i}`,r=t[n]?t[n]:null;t[n]=`${null!==r?`${r}, `:""}${e[i]}`})});let i="";return Object.keys(t).forEach(e=>{i+=`
	${e}: ${t[e]}; `}),i},iE=e=>{let t=/^--/,i="";return Object.keys(e).forEach(n=>{let r=t.test(n)?n:`--${n}`;i+=`
	${r}: ${e[n]}; `}),i};var iC=i(68557),iP=i(83163),i_=i(48687);let iS=ev()`
    fragment RankedListNameMetadata on Name {
        id
        primaryImage {
            url
            caption {
                plainText
            }
            width
            height
        }
        nameText {
            text
        }
        primaryProfessions {
            category {
                text
            }
        }
        # IMDB_WEB_PACE_SPECIFIC_PROFESSIONS_DISPLAY_1112523
        professions {
            profession {
                text
            }
        }
        knownForV2(limit: 1) @include(if: $isInPace) {
            credits {
                title {
                    id
                    originalTitleText {
                        text
                    }
                    titleText {
                        text
                    }
                    titleType {
                        canHaveEpisodes
                    }
                    releaseYear {
                        year
                        endYear
                    }
                }
                episodeCredits(first: 0) {
                    yearRange {
                        year
                        endYear
                    }
                }
            }
        }
        knownFor(first: 1) {
            edges {
                node {
                    summary {
                        yearRange {
                            year
                            endYear
                        }
                    }
                    title {
                        id
                        originalTitleText {
                            text
                        }
                        titleText {
                            text
                        }
                        titleType {
                            canHaveEpisodes
                        }
                    }
                }
            }
        }
    }
`,ik=ev()`
    fragment RankedTitleListMetadata on Title {
        ...BaseTitleCard
        principalCredits {
            credits {
                category {
                    id
                    text
                }
                name {
                    id
                    nameText {
                        text
                    }
                }
            }
        }
    }

    ${t4.sq}
`,iL=ev()`
    query RankedList($lsConst: ID!, $first: Int!, $isInPace: Boolean!) {
        list(id: $lsConst) {
            id
            items(first: $first) {
                edges {
                    node {
                        listItem {
                            __typename
                            ... on Name {
                                ...RankedListNameMetadata
                            }
                            ... on Title {
                                ...RankedTitleListMetadata
                            }
                        }
                    }
                }
            }
        }
    }
    ${ik}
    ${iS}
`;var ij=i(27722),iM=i(38394),iR=i(65991);let iA=e=>{let t,i,{nameListData:n,rankNumber:r}=e,{nameMainLinkBuilder:a}=(0,ea.WOb)();(0,i_.hg)({weblabID:iP.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}})?(t=n.knownForV2?.credits[0]?.title,i=n.professions?.[0].profession?.text):(t=n.knownFor?.edges[0]?.node.title,i=n.primaryProfessions?.[0].category.text);let o=(0,ex.K)(t||{}),s=n.nameText?.text;if(!s)return null;let l=(0,ef.K0)(n.primaryImage,s),c={titleName:s,condensedPadding:!0,secondaryText:(0,d.jsxs)(ij.InlineList,{showDividers:!0,noWrap:!0,inline:!0,children:[(0,d.jsx)(ij.InlineListItem,{children:i}),!!o&&(0,d.jsx)(ij.InlineListItem,{children:o})]}),titlePageLink:a({nconst:n.id,refSuffix:[{t:f.Cd.LIST,n:r}]}),preElement:(0,d.jsx)(ij.PosterImage,{imageModel:l,size:"48",imageType:"name"}),rankNumber:r,postElement:(0,d.jsx)(iM.U,{constId:n.id})};return(0,d.jsx)(iR.p,{...c})},iN=e=>{let{titleListData:t,rankNumber:i}=e,{titleMainLinkBuilder:n}=(0,ea.WOb)(),r=(0,ex.K)(t||{}),a=t.principalCredits?.[0].credits[0].category.text,o=t.principalCredits?.[0].credits[0].name.nameText?.text;if(!r||!o)return null;let s=(0,ef.K0)(t.primaryImage,r),l={titleName:r,condensedPadding:!0,secondaryText:(0,d.jsxs)(d.Fragment,{children:[!!a&&`${a}, `,o]}),titlePageLink:n({tconst:t.id,refSuffix:[{t:f.Cd.LIST,n:i}]}),preElement:(0,d.jsx)(ij.PosterImage,{imageModel:s,size:"48",imageType:t.titleType?.id}),rankNumber:i,postElement:(0,d.jsx)(iM.U,{constId:t.id})};return(0,d.jsx)(iR.p,{...l})};var iO=i(8e3),i$=i(67626);i(35061),ev()`
    query VideoPlaylistWidgetList($id: ID!) {
        list(id: $id) {
            name {
                originalText
            }
            listType {
                id
            }
            listClass {
                id
            }
            description {
                originalText {
                    plaidHtml
                }
            }
            items(first: 100) {
                total
                edges {
                    cursor
                    position
                    node {
                        description {
                            originalText {
                                plaidHtml
                            }
                        }
                        listItem {
                            ... on Video {
                                id
                                contentType {
                                    displayName {
                                        value
                                    }
                                }
                                name {
                                    value
                                }
                                runtime {
                                    value
                                }
                                thumbnail {
                                    height
                                    url
                                    width
                                }
                                primaryTitle {
                                    originalTitleText {
                                        text
                                    }
                                    titleText {
                                        text
                                    }
                                    releaseYear {
                                        year
                                        endYear
                                    }
                                    titleType {
                                        canHaveEpisodes
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;let iD={AdvancedTitleSearchWidget:e=>{let t=e.refMarker?e.refMarker:{prefix:e.placementArgs.generatedPrefix};return(0,d.jsx)(e1,{...e,refMarker:t})},ChartWidget:e=>{let{placementArgs:{heading:t,subheading:i,items:n,generatedPrefix:r,voteTotal:a}}=e,{titleMainLinkBuilder:o}=(0,ea.WOb)(),s=(0,t2.nu)(),l=(0,t2.LI)({titleIds:n?.map(e=>e.item.id)??[]}),c=(0,C.B)().context;if(!n||0===n.length)return null;let g=n.some(e=>{let{item:t}=e;return t.canRate?.isRatable}),p=!!(l?.fetching&&s),m=n.map((e,t)=>{let i=e.item,n=(0,ex.L)(c,i.originalTitleText?.text,i.titleText?.text),s=e.rank||t+1,l=a?{weight:e.weightRank||0,total:a}:void 0,d=i.ratingsSummary?.aggregateRating?{aggregateRating:i.ratingsSummary.aggregateRating,voteCount:i.ratingsSummary.voteCount,titleId:i.id,canRate:!0}:void 0;if(n&&s)return{rank:s.toString(),title:n,imageModel:(0,ef.K0)(i.primaryImage,n),link:o({tconst:e.item.id,refSuffix:{t:(0,f.Qk)({refStr:r,explanation:"This ref marker is vended from the graph dynamically"}),n:t+1}}),percentage:l,ratingData:d}}).filter(Boolean);return(0,d.jsxs)(t5,{"data-testid":"symphony-IMDbChartWidget",children:[!!t&&(0,d.jsx)(w.SubSectionTitle,{description:i,children:t}),!!g&&(0,d.jsx)(t3,{children:(0,d.jsx)(t1.Z,{children:p&&s?(0,d.jsx)(t9,{children:(0,d.jsx)(w.Loader,{})}):(0,d.jsx)(t0.r,{totalNumber:m.length})})}),(0,d.jsx)(t8,{items:m,refOverride:r})]})},EventHistoryWidget:e=>{let{placementArgs:t}=e;return(0,d.jsx)(eT.S,{mustMatchEventId:t.eventId,fallbackComponent:(0,d.jsx)(f.xm,{value:(0,f.Qk)({refStr:t.generatedPrefix??"",explanation:`
                        We will continue to support ref strings provided
                        by the editorial team as well as the generated ref
                        prefix that includes the slot name.`}),children:(0,d.jsx)(eb.p,{...t})}),headerText:t.headerText})},FreeFormMarkdown:e=>{let{placementArgs:{heading:t,subheading:i,blurbHtml:n}}=e;return n?(0,d.jsxs)(ew,{"data-testid":"symphony-FreeFormMarkdown",children:[!!t&&(0,d.jsx)(w.SubSectionTitle,{description:i,children:t}),!!n&&(0,d.jsx)(eE,{html:eI(n)})]}):null},HeroWidget:e=>{let{placementArgs:t}=e,{imageLockups:i,generatedPrefix:n}=t,r={prefix:n};return(0,d.jsx)(d.Fragment,{children:!!i&&i.length>0&&(0,d.jsx)(eP,{"data-testid":"symphony-HeroWidget",children:i.map((e,t)=>{let i=t+1,n=`${e.imageUrl}?ref_=${(0,eC.z)(`${f.Cd.POSTER}_${i}`,r)}`,a=`${e.primaryTextUrl||e.imageUrl}?ref_=${(0,eC.z)(`${f.Cd.TEXT}_${i}`,r)}`,o=e.primaryText||e.secondaryText||e.image?.caption;return(0,d.jsxs)(e_,{children:[(0,d.jsx)(w.Poster,{imageProps:{imageModel:e.image,imageType:"movie"},href:n,ariaLabel:o,dynamicWidth:!0}),!!a&&!!(e.primaryText||e.secondaryText)&&(0,d.jsxs)(eS,{href:a,children:[!!e.primaryText&&(0,d.jsx)(ek,{children:e.primaryText}),!!e.secondaryText&&(0,d.jsx)(eL,{children:e.secondaryText})]})]},`hero-widget-lockup-${i}`)})})})},IMDbAutorotatePromotedVideoAd:e=>{let{placementArgs:t}=e,i=(0,en.gd)(t.promotedVideoAd),n=(0,ex.K)({originalTitleText:t.promotedVideoData.originalTitleText,titleText:t.promotedVideoData.title})||t.promotedVideoData.headline,r=i?.impressionTrackers,a=i?.titlePageClickTrackers,o={...i},s=(0,en.DA)(o),l={...t.promotedVideoData,titleText:n},g=async()=>{r?.length&&await (0,en.Ew)(r)};return(0,c.useEffect)(()=>{g()},[]),(0,d.jsx)(eo.f.Provider,{value:{titlePageClickTrackers:a,formattedVideoTrackers:s},children:(0,d.jsx)(eh,{...l})})},IMDbAutorotateVideo:e=>{let{placementArgs:t}=e;return(0,d.jsx)(eh,{...t})},IMDbEditorialAnnouncement:e=>{let{refTag:t}=e.placementArgs;return(0,d.jsx)(f.xm,{value:(0,f.Qk)({refStr:`${f.Cd.ANNOUNCEMENT}_${t}`,explanation:`
                        We will continue to support ref strings provided
                        by the editorial team as well as the generated ref
                        prefix that includes the slot name.`}),children:(0,d.jsx)(R,{...e})})},IMDbEditorialSingle:e1,IMDbEmbeddableWidget:e=>{let{placementArgs:t}=e,{url:i,title:n,height:r,slotName:a,generatedPrefix:o,isPageSection:s,disableLazyLoad:l}=tx(t),{context:g}=(0,C.B)(),{isDebug:p=!1}=(0,y.kp)(),u=g.headers?.host,h=u?`https://${u}`:i,f=tI(i,h),x=tE(f),b=(0,m.wL)(t_),T=(0,e6.n)(),v=(0,te.y)(),I=(0,c.createRef)(),w=(0,c.useContext)(tn),E=(0,tt.EO)(),P=(0,c.useMemo)(()=>({...v,isUserLoggedIn:T,isDebug:!!p,slotId:a,siteVariant:"web"}),[v,T,a,p]),_={...tf,getPageContext:()=>P,getPlacementData:()=>t,getWeblabActivations:(e,t)=>{let i={};return("string"==typeof t?[t]:t).forEach(e=>{let t=ti(e);t&&(i[e]=t)}),i},recordMetric:(e,t)=>tT(t,E),subscribeToWatchlistChange:(e,t,i)=>(w.subscribeToWatchlistChange=e=>{(0,e4.ZP)(i.source,{...t,messageType:tP,subscribeKey:e3.hP.watchlist,subscribeData:e},i.origin)},null),subscribeToRatingChange:(e,t,i)=>(w.subscribeToRatingChange=e=>{(0,e4.ZP)(i.source,{...t,messageType:tP,subscribeKey:e3.hP.rating,subscribeData:e},i.origin)},null)},S=(0,c.useCallback)(e=>{let t=e.origin,i=e.source,{messageType:n,requestKey:r,requestData:a}=e.data,o={...e.data};if(n===tP){try{let e=i.frameElement,n=_[r];if(n){let r=n(e,a,{source:i,origin:t});o.responseData=r||o.responseData}else throw(0,e9.UnknownRequestError)(r)}catch(e){b.info(`IMDbEmbeddableBridge requestKey ${r} has no bridgeResponseMethod defined`,e.message,e.stack),o.responseError=e}(0,e4.ZP)(i,o,t)}},[b]);if((0,c.useEffect)(()=>{I.current&&P&&t&&tb(I.current,P,t)},[I,P,t]),(0,c.useEffect)(()=>(window?.addEventListener("message",S),()=>window?.removeEventListener("message",S)),[S]),!x)return b.error(`IMDbEmbeddableWidget[${a}] has invalid url [${f}] defined in creative configuration`),null;let k=(0,d.jsxs)(tS,{isPageSection:"true"===s,children:[(0,d.jsx)(tL,{"data-testid":"embeddable-iframe","data-slotid":a,"data-refprefix":o,ref:I,height:r,title:n,src:f}),(0,d.jsx)(to,{})]});return"true"!==l?(0,d.jsx)(e7.X,{componentId:`${tC}_${a}`,children:k}):k},IMDbProSidebarWidget:e=>{let t,i,n,{placementArgs:r}=e,a=(0,m.wL)("component_IMDbProSidebarWidget"),{blurbContent:o,blurbLink:s,ctaText:l,ctaLink:c,heading:g,imageUrl:p,imageCaption:u,imageMaxWidth:h,imageMaxHeight:f,imageLink:x}=r;try{t={children:(0,d.jsx)(tM,{href:c,text:l})},i={...(n={slateProps:{imageProps:{imageModel:{url:p,maxHeight:f,maxWidth:h,caption:u}},onClick:()=>x,href:x,ariaLabel:u},titleProps:{title:o,href:s,lineClamp:"none"},actionProps:t,dynamicWidth:!0}).slateProps,dynamicWidth:!0}}catch(e){return a.error("Exception rendering component IMDbProSidebarWidget",{message:e.message,stack:e.stack}),null}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(tN,{"data-testid":"imdb-pro-sidebar-widget",children:[(0,d.jsx)(tA,{children:g}),(0,d.jsx)(tj,{size:"s",...n})]}),(0,d.jsx)(tO,{baseColor:"none","data-testid":"imdb-pro-sidebar-widget-m",children:(0,d.jsxs)(tV,{children:[(0,d.jsxs)(tD,{children:[(0,d.jsx)(tA,{children:g}),(0,d.jsx)(t$,{html:o}),t?.children]}),(0,d.jsx)(tR,{...i})]})})]})},IMDbRankedList:e=>{let{placementArgs:t}=e,{listId:i,widgetTitle:n,widgetTitleUrl:r,description:a,subListText:o,subListTextUrl:s}=t,l=(0,i_.hg)({weblabID:iP.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}}),[{data:c,fetching:g,error:p}]=(0,t2.E8)({query:iL,variables:{lsConst:i,first:5,isInPace:l},context:{personalized:!1,serverSideCacheable:!0}});if(p||g||0>=(c?.list?.items?.edges.length||0))return null;let m=c?.list?.items?.edges[0].node.listItem?.__typename==="Name",u=c?.list?.items?.edges[0].node.listItem?.__typename==="Title";return m||u?(0,d.jsxs)("div",{children:[(0,d.jsx)(w.SubSectionTitle,{description:a,href:r,children:n}),(0,d.jsx)(iC.i,{displayStyle:"singleColumn",children:(0,d.jsxs)(d.Fragment,{children:[!!m&&c?.list?.items?.edges.map((e,t)=>{let{node:i}=e,n=i.listItem;return d.jsx(iA,{nameListData:n,rankNumber:t+1},n.id)}),!!u&&c?.list?.items?.edges.map((e,t)=>{let{node:i}=e,n=i.listItem;return d.jsx(iN,{titleListData:n,rankNumber:t+1},n.id)})]})}),!!o&&!!s&&(0,d.jsx)("div",{className:"pl-pageMargin pt-s",children:(0,d.jsx)(w.TextLink,{text:o,href:s})})]}):null},IMDbSectionHeader:e=>{let{placementArgs:t}=e;return t&&t.headerText?(0,d.jsx)("div",{children:(0,d.jsx)(w.SubSectionTitle,{tag:"h2",description:t.subHeaderText,children:t.headerText})}):null},LinksWidget:e=>{let{placementArgs:t}=e,{heading:i,subheading:n,generatedPrefix:r}=t,a=[],o=1;for(let e=0;e<100;e++){let i=e<10?`0${e}_url`:`${e}_url`,n=e<10?`0${e}_urllabel`:`${e}_urllabel`;t[i]&&t[n]&&(a.push((0,d.jsx)(w.Chip,{label:t[n],href:`${t[i]}?ref_=${(0,eC.z)(o.toString(),{prefix:r})}`},i)),o+=1)}return a.length?(0,d.jsxs)(ia,{"data-testid":"symphony-LinksWidget",children:[!!i&&(0,d.jsx)(w.SubSectionTitle,{description:n,children:i}),(0,d.jsx)(io,{wrap:!0,children:a})]}):null},NavigationWidget:e=>{let{placementArgs:t}=e,i=t.heading?(0,d.jsx)(ig,{headingColor:t.headingcolor,href:t.targeturl,tag:"h1",children:t.heading}):null,n=t.showsocialsharingwidget?(0,d.jsx)(ip,{children:(0,d.jsx)(im,{color:t.socialsharingwidgetcolor,shareProps:{label:t.socialsharingtext}})}):null,r=[],a=1;for(let e=0;e<100;e++){let i=e<10?`0${e}_url`:`${e}_url`,n=e<10?`0${e}_urllabel`:`${e}_urllabel`;t[i]&&t[n]&&(r.push({id:i,label:t[n],href:`${t[i]}?ref_=${(0,eC.z)(a.toString(),{prefix:t.generatedPrefix})}`}),a+=1)}let o=(0,is.useRouter)(),s=r.find(e=>t[e.id]===o.asPath.split("?")?.[0]),l=s?.id;return r.length?(0,d.jsxs)(id,{"data-testid":"symphony-NavigationWidget",backgroundColor:t.backgroundcolor,backgroundImage:t.backgroundimageid,children:[(0,d.jsxs)(ic,{children:[i,n]}),(0,d.jsx)(iu,{tabs:r,tabBackgroundColor:t.tabbackgroundcolor,tabColor:t.tabtextcolor,selectedTabColor:t.tabkeycolor,value:l})]}):null},NinjaWidget:e=>{let t=e.refMarker?e.refMarker:{prefix:e.placementArgs.generatedPrefix};return(0,d.jsx)(e1,{...e,refMarker:t})},PageDetailsWidget:e=>{let{placementArgs:t}=e,{context:i,update:n}=(0,C.B)(),r=iI(),a=(0,iT.z)(r),{makeRefMarker:o}=(0,f.Lz)();if((0,c.useEffect)(()=>{t?.baseref&&n({...i,refTagPrefix:o((0,f.Qk)({refStr:t.baseref,explanation:"This ref marker comes from symphony content."}))})},[]),!t||!Object.keys(t).length)return null;let s=[],l=[],g=null;t.title&&(g=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("title",{children:[t.title," - IMDb"]}),(0,d.jsx)("meta",{name:"title",content:`${t.title} - IMDb`})]}),s.push((0,d.jsx)("meta",{property:"og:title",content:`${t.title} - IMDb`},"og-title")),l.push((0,d.jsx)("meta",{property:"twitter:title",content:`${t.title} - IMDb`},"tw-title")));let p=null;t.description&&(p=(0,d.jsx)("meta",{name:"description",content:t.description}),s.push((0,d.jsx)("meta",{property:"og:description",content:t.description},"og-desc")),l.push((0,d.jsx)("meta",{property:"twitter:description",content:t.description},"tw-desc")));let m=null;t.keywords&&(m=(0,d.jsx)("meta",{name:"keywords",content:t.keywords}));let u=[];if(t.backgroundimageid&&(u.push(`background-image: url(${t.backgroundimageid});`,"background-position: center top;","background-repeat: no-repeat;"),t.backgroundscroll)){let e="true"===t.backgroundscroll?"scroll":"fixed";u.push(`background-attachment: ${e};`)}if(t.backgroundcolor&&u.push(`background-color: ${t.backgroundcolor};`),t.backgroundstyles)try{let e=JSON.parse(t.backgroundstyles),i=iw(e);u.push(i)}catch(e){}let h=null;t.socialimageid&&(h=(0,d.jsx)("link",{rel:"image_src",href:t.socialimageid}),s.push((0,d.jsx)("meta",{property:"og:image",content:t.socialimageid},"og-img"),(0,d.jsx)("meta",{property:"og:image:secure_url",content:t.socialimageid},"og-imgsecureurl")),l.push((0,d.jsx)("meta",{property:"twitter:image",content:t.socialimageid},"tw-img"))),t.socialimageheight&&s.push((0,d.jsx)("meta",{property:"og:image:height",content:t.socialimageheight},"og-imgheight")),t.socialimagewidth&&s.push((0,d.jsx)("meta",{property:"og:image:width",content:t.socialimagewidth},"og-imgwidth"));let x="";if(t.stylevars)try{let e=iE(JSON.parse(t.stylevars));x=`${e}`}catch(e){}s.push((0,d.jsx)("meta",{property:"og:type",content:"website"},"og-type")),l.push((0,d.jsx)("meta",{property:"twitter:card",content:"summary_large_image"},"tw-card")),s.push((0,d.jsx)("meta",{property:"og:url",content:r},"og-url")),l.push((0,d.jsx)("meta",{property:"twitter:url",content:r},"tw-url"));let b=[];return x.length&&b.push(`:root {
	${x}
}`),u.length&&b.push(`#ipc-wrap-background-id {
	${u.join("\n	")}
}`),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(ix(),{children:[g,(0,d.jsx)(d.Fragment,{children:p}),(0,d.jsx)(d.Fragment,{children:m}),(0,d.jsx)(d.Fragment,{children:h}),(0,d.jsx)("link",{rel:"canonical",href:r}),(0,ib.W)(a),(0,d.jsx)(d.Fragment,{children:iv(i)}),s,l]}),(0,d.jsx)("style",{id:"symphony-custom-stylings",dangerouslySetInnerHTML:{__html:`${b.join("\n")}`}})]})},popular_shoveler:e=>{let{placementArgs:{heading:t,subheading:i,urlLabel:n,targetURL:r,titleCards:a=[],generatedPrefix:o}}=e;return a.length?(0,d.jsx)(ii,{"data-testid":"symphony-IMDbIndiaShoveler",children:(0,d.jsxs)(f.xm,{value:(0,f.Qk)({refStr:o??"",explanation:`
                    We will continue to support ref strings provided
                    by the editorial team as well as the generated ref
                    prefix that includes the slot name.`}),children:[!!t&&(0,d.jsx)(w.SubSectionTitle,{description:i,children:t}),(0,d.jsx)(w.Shoveler,{wraps:!1,children:(0,d.jsx)(d.Fragment,{children:a.map((e,t)=>(0,d.jsx)(it.c,{data:e,index:t+1},e.id))})}),!!n&&!!r&&(0,d.jsx)(ir,{text:n,href:(0,er.Lr)(r,(0,eC.z)("cta",{prefix:o}))})]})}):null},VideoPlaylistWidget:e=>{let{placementArgs:{lsconst:t,heading:i,subheading:n,videos:r,generatedPrefix:a}}=e;return(0,d.jsx)(i$.Z,{videoSectionTitle:i,videoSectionSubTitle:n,videos:r,refTagPrefixOverride:a,listId:t,videoSectionTitleLinkType:iO.o.PLAYLIST})}},iV=e=>{let{slotName:t}=e,i=(0,m.wL)("component_Slot"),[n]=(0,x.i)();try{let r=(0,y.kp)(),a=r.transformedPlacements[t],o=r.isDebug;if(!a){if(Object.keys(r?.transformedPlacements).length>0&&o&&i.debug({context:t,code:b.SM.SLOT_NAME_UNAVAILABLE,message:`${t} is not on CMS Context`}),o)return(0,d.jsx)(k,{slotName:t});return null}if(!(a.componentName in iD))return o&&a.componentName!==b.h4&&i.error({context:a.componentName,code:b.SM.UNREGISTERED_COMPONENT_NAME,message:`${a.componentName} is not a registered component`}),null;let s=a.transformedArguments?.errors;if(s&&s.length>0){if(n(i,g.NextMetrics.EDITORIAL_ERROR,1),s.map(e=>{((0,T.X)(e)||o)&&i.error({code:e.code,creativeId:a.symphonyMetadata?.creativeId,placementId:a.symphonyMetadata?.placementId,componentName:a.componentName,context:e.context})}),(0,T.J)(s))return null}else n(i,g.NextMetrics.EDITORIAL_ERROR,0);let l=`${u.NG.ContentSymphony}_${e.slotName}`;return(0,d.jsx)(h.wW,{componentId:l,children:(0,d.jsx)(iZ,{...e,slotData:a,isDebug:!!o})})}catch(e){return i.error(`Exception rendering Symphony slot with name ${t}`,{message:e.message,stack:e.stack}),null}},iZ=e=>{let{slotData:t,slotName:i,isDebug:n,refMarker:r,displayType:a}=e,{value:o}=(0,f.Lz)(),s=iD[t.componentName];return(0,d.jsxs)(d.Fragment,{children:[!!n&&(0,d.jsx)(k,{slotName:i,slotData:t}),(0,d.jsx)(s,{placementArgs:t.transformedArguments||t.arguments,refMarker:r??{prefix:o},displayType:a})]})};var iW=e=>(0,d.jsx)(p.Z,{name:e.slotName,parent:"Slot",children:(0,d.jsx)(iV,{...e})})},88959:function(e,t,i){var n,r,a,o,s,l,d,c;i.d(t,{Et:function(){return n},FO:function(){return a},LQ:function(){return o},SM:function(){return r},h4:function(){return m},zc:function(){return p}}),(s=n||(n={})).TITLE="title",s.VIDEO="video",s.IMAGE="image",s.LIST="list",s.GALLERY="gallery",(l=r||(r={})).SLOT_NAME_UNAVAILABLE="SlotNameUnavailable",l.UNREGISTERED_COMPONENT_NAME="UnregisteredComponentName",l.CONST_TYPE_UNAVAILABLE="ConstTypeUnavailable",l.IMAGE_UNAVAILABLE="ImageUnavailable",l.CAPTION_UNAVAILABLE="CaptionUnavailable",l.LINK_UNAVAILABLE="LinkUnavailable",l.NO_DESCRIPTION="NoDescription",l.NO_TITLE="NoTitle",l.INVALID_IMAGE_SIZE="InvalidImageSize",l.VIDEO_NOT_FOUND="VideoIdNotFound",l.UNEXPECTED_ERROR="UnexpectedError",l.GRAPHQL_ERROR="GraphQLError",l.MISSING_REQUIRED_FIELDS="MissingRequiredFields",(d=a||(a={})).MAIN="main",d.SIDE="side",d.FULL="full";let g={tt:"title",rm:"image",vi:"video",rg:"gallery",ls:"list"};function p(e){return g[e.substr(0,2)]}(c=o||(o={})).PLAY_CIRCLE_OUTLINE="play-circle-outline",c.DASHBOARD="dashboard",c.LIST="list",c.COLLECTIONS="collections";let m="ZergnetWidget"},95746:function(e,t,i){i.d(t,{J:function(){return o},X:function(){return a}});var n=i(88959);let r=[n.SM.NO_TITLE,n.SM.VIDEO_NOT_FOUND,n.SM.UNEXPECTED_ERROR,n.SM.MISSING_REQUIRED_FIELDS],a=e=>!!r.includes(e.code),o=e=>!!e&&0!==e.length&&!!e.find(a)},72113:function(e,t,i){i.d(t,{G:function(){return g}});var n=i(27722),r=i(72779),a=i.n(r),o=i(2784);let s=(e,t,i)=>{let n="default"===t?e:`${e}-${t}`,r=`text-on-${n}`,o="default"===i?e:`${e}-${i}`,s=i?`bg-${o}`:void 0;return a()(r,s)},l=e=>`border-${e}-border`,d=e=>`type-${e}`,c=e=>{let t,i,{type:n,color:r,bg:o,themeName:l}=e;return r&&(t=s(l,r,o)),n&&(i=d(n)),a()(t,i)},g=()=>{let{palette:{name:e}}=(0,o.useContext)(n.Theme);return{type:e=>d(e),color:(t,i)=>s(e,t,i),borderColor:()=>l(e),classes:t=>{let{type:i,color:n,bg:r}=t;return c({type:i,color:n,bg:r,themeName:e})}}}},14481:function(e,t,i){i.d(t,{E5:function(){return y},HL:function(){return f},Kz:function(){return b},PY:function(){return v},Q0:function(){return d},ax:function(){return u},hc:function(){return o},iZ:function(){return p},p$:function(){return c},pU:function(){return I},qM:function(){return w},v_:function(){return T},zF:function(){return x}});let n="[0-9]{7,19}",r=`[a-z]{2}${n}`,a=`ch${n}`,o=`co${n}`,s=`in${n}`,l=`li${n}`,d=`ls${n}`,c=`nm${n}`,g=`rg${n}`,p=`rm${n}`,m=`rw${n}`,u=`tt${n}`,h=`ev${n}`,f="ur[0-9]{7,}",x=`vi${n}`;new RegExp(n);let b=new RegExp(r);new RegExp(a),new RegExp(o),new RegExp(s),new RegExp(l);let T=new RegExp(d);new RegExp(c),RegExp("[\\w-]{11,22}");let y=new RegExp(g),v=new RegExp(p);new RegExp(m);let I=new RegExp(u);new RegExp(h),new RegExp(f);let w=new RegExp(x);RegExp(`.*/title/${u}/`)},17708:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(53665),r=i(25436),a=i(5651),o=i(82338),s=i(63370),l=i(49996);let d=e=>{let{videoName:t,contentTypeId:i,originalTitleText:d,titleText:c,releaseYear:g,canHaveEpisodes:p,shouldRemoveTrailerTitleForTitlePages:m=!0}=e,u=(0,n.Z)(),{pageType:h}=(0,l.y)(),f=i===a.sd.Trailer,x=(0,s.K)({originalTitleText:d,titleText:c}),b=t,T=h===r.PageType.NAME,y=h===r.PageType.TITLE;if(T&&f||f&&y&&!m){let e=(0,o.y)(g,p);b=`${x} (${e})`}else h===r.PageType.TITLE&&(b=f?"":u.formatMessage({id:"common_video_watch_text",defaultMessage:"Watch {videoTitle}"},{videoTitle:t}));return b}},89105:function(e,t,i){i.d(t,{OV:function(){return g}});var n,r,a=i(66898),o=i(14865),s=i(2784),l=i(56044),d=i(8531),c=i(58306);(n=r||(r={})).NotDelayed="NOT_DELAYED",n.DelayCompleted="DELAYED",n.Fallback="DELAYED_FALLBACK";let g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"UNDECLARED_DELAYED_FEATURE",t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[i,n]=(0,s.useState)(!0),r=(0,s.useRef)([]),g=(0,s.useCallback)(i=>{t&&((0,d.XK)(`${e}_${i}`),(0,a.insertCSAWidgetLoad)(`${e}_${i}`,Date.now())),r.current.forEach(e=>e()),n(!1)},[e]);return(0,s.useEffect)(()=>{if((0,o.getIsBrowser)()){let e=(0,c.Y)(l.x.PRIMARY_ADS_LOADED_EVENT_NAME,()=>g("DELAYED"));e&&r.current.push(e);let t=(0,c.Y)(l.x.NO_PRIMARY_ADS_TO_LOAD_EVENT_NAME,()=>g("NOT_DELAYED"));t&&r.current.push(t)}},[g]),(0,s.useEffect)(()=>{let e=setTimeout(()=>g("DELAYED_FALLBACK"),9e3);return()=>clearTimeout(e)},[g]),i}},58306:function(e,t,i){i.d(t,{Y:function(){return n}}),i(2784),i(56044),i(64461),i(37706);let n=(e,t)=>window.mediaOrchestrator?.subscribe(e,t).remove},55220:function(e,t,i){i.d(t,{Z:function(){return f}});var n=i(52322),r=i(88169),a=i(72779),o=i.n(a);i(2784);var s=i(19596),l=i(69380),d=i(22073),c=i(17708),g=i(66724),p=i(11438);let m=e=>`videos-slate-card-title-${e+1}`,u=e=>`videos-slate-overlay-${e+1}`,h=e=>{let{video:t,index:i,onClick:r,description:a,className:s,listId:h,onFocus:f,reactionData:b,shouldRemoveTrailerTitleForTitlePages:T=!0,videoTitle:y,videoSubtitle:v,...I}=e,{videoSingleLinkBuilder:w}=(0,g.WOb)(),E={url:t.thumbnail.url,maxHeight:t.thumbnail.height,maxWidth:t.thumbnail.width,caption:t.name.value},C=(0,c.Z)({videoName:t.name.value,contentTypeId:t.contentType?.id,originalTitleText:t.primaryTitle?.originalTitleText?.text,titleText:t.primaryTitle?.titleText?.text,releaseYear:t.primaryTitle?.releaseYear,canHaveEpisodes:t.primaryTitle?.titleType?.canHaveEpisodes,shouldRemoveTrailerTitleForTitlePages:T}),P=t.contentType?.displayName?.value,_=[P,t.runtime?.value?(0,d.L)(t.runtime?.value):""].filter(e=>!!e).join(" "),S=`${P?`${P}`:""}${t.name.value}`,k=h?{listId:h}:void 0,L=w({viconst:t.id,refSuffix:{t:p.Cd.EMPTY,n:i+1},query:k}),j=w({viconst:t.id,refSuffix:{t:p.Cd.TEXT,n:i+1},query:k}),M={"data-testid":u(i),iconName:"play-circle-outline",text:_,gradientType:"linear",...I.slateProps?.overlayProps},R={ariaLabel:S,"data-testid":m(i),href:j,onClick:r,title:y||C,subtitle2:v||a,lineClamp:2,className:"VideoSlate__title",...I.titleProps},A=(0,n.jsx)(l.Q,{associatedConstId:t.id,initialAggregateData:b?.aggregate,initialUserData:b?.user,entityType:"video"}),N={...I,className:o()("videos-slate-card",s),dynamicWidth:!0,slateProps:{ariaLabel:S,href:L,onClick:r,imageProps:{imageModel:E},overlayProps:M},titleProps:R,children:A};return(0,n.jsx)(x,{...N,onFocus:f})};var f=e=>(0,n.jsx)(p.xm,{value:p.Cd.VIDEO,children:(0,n.jsx)(h,{...e})});let x=(0,s.ZP)(r.SlateCard).withConfig({componentId:"sc-73491412-0"})([".VideoSlate__title div:first-of-type{height:unset;}"])},5651:function(e,t,i){var n,r,a,o;i.d(t,{Je:function(){return l},LU:function(){return d},XW:function(){return s},mB:function(){return n},sd:function(){return r}});let s="W7zSm81+mmIsg7F+fyHRKhF3ggLkTqtGMhvI92kbqf/ysE99",l="imdbnext-vp-jw-",d="imdbnext-vp-container";(a=n||(n={})).playerReadyMessage="VIDEO_PLAYER--READY",a.playerPlaybackStartedMessage="VIDEO_PLAYER--PLAYBACK_STARTED",a.playerPlaybackStoppedMessage="VIDEO_PLAYER--PLAYBACK_STOPPED",a.playerPlaybackCompletedMessage="VIDEO_PLAYER--PLAYBACK_COMPLETED",a.signalPlayMessage="VIDEO_PLAYER--PLAY",a.signalPauseMessage="VIDEO_PLAYER--PAUSE",a.signalStopMessage="VIDEO_PLAYER--STOP",(o=r||(r={})).Trailer="amzn1.imdb.video.contenttype.trailer",o.Clip="amzn1.imdb.video.contenttype.clip"},37706:function(e,t,i){i(14865),i(22431),i(64461),i(56044)},35061:function(e,t){t.Z=e=>({id:e.id,name:{value:e.name.value},thumbnail:{url:e.thumbnail.url,height:e.thumbnail.height,width:e.thumbnail.width},primaryTitle:{titleText:{text:e.primaryTitle?.titleText?.text},originalTitleText:{text:e.primaryTitle?.originalTitleText?.text},titleType:{canHaveEpisodes:e.primaryTitle?.titleType?.canHaveEpisodes},releaseYear:{endYear:e.primaryTitle?.releaseYear?.endYear||void 0,year:e.primaryTitle?.releaseYear?.year||void 0}},contentType:{id:e.contentType?.id,displayName:{value:e.contentType?.displayName.value}},runtime:{value:e.runtime?.value||void 0}})}}]);