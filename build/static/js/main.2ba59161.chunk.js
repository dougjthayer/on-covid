(this["webpackJsonpon-covid"]=this["webpackJsonpon-covid"]||[]).push([[0],{33:function(e,s,t){},66:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){"use strict";t.r(s);var a=t(0),C=t(1),n=t.n(C),c=t(25),i=t.n(c),l=(t(33),t(6)),r=t(7),d=t(3),L=t(9),o=t(8),j=t(26),h=t.n(j),p=t(11),b=t(27),x=t.n(b),O=(t(23),t(24),function(e){Object(L.a)(t,e);var s=Object(o.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props&&this.props.countyData.length>0&&"#N/A"!==this.props.countyData[1].cases?this.props.countyData.map((function(e){var s=e.countyName.replace(/_/g," ");return Object(a.jsxs)("li",{className:"county-list",children:[Object(a.jsx)("span",{className:"county-rank",children:e.rank}),Object(a.jsx)("span",{className:"county-name",children:s}),Object(a.jsx)("span",{className:"county-cases",children:e.cases})]})})):Object(a.jsx)("span",{children:"Today's data not available yet :("});return Object(a.jsx)("div",{children:Object(a.jsxs)(x.a,Object(p.a)(Object(p.a)({},{arrows:!0,dots:!0,infinite:!0,fade:!0,speed:500,slidesToShow:1,slidesToScroll:1,className:"slider",adaptiveHeight:!0}),{},{children:[Object(a.jsx)("div",{className:"slider-slide slide-1",children:Object(a.jsxs)("div",{className:"slide-text",children:[Object(a.jsx)("span",{className:"report-date",children:this.props.generalData.date}),Object(a.jsxs)("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(a.jsx)("path",{d:"M31.2159 16.8447C30.6855 16.1674 29.9846 15.7195 29.1652 15.5751C28.3459 15.4306 27.5341 15.6117 26.867 16.0778C26.8367 14.7753 26.5321 13.5542 26.0274 12.3626C27.8033 12.6109 29.3819 11.3975 29.6814 9.69919C29.9289 7.92682 28.7122 6.35027 27.0105 6.0502C25.2976 5.81304 23.7411 6.9006 23.3786 8.58784C22.4292 7.70699 21.3204 6.99261 20.1672 6.52985C21.5866 5.48297 21.8785 3.459 20.8286 2.04159C19.7788 0.624184 17.7508 0.331454 16.3315 1.37834C14.9863 2.37343 14.6535 4.26049 15.5662 5.71857C14.2613 5.7479 13.038 6.05108 11.8446 6.55407C12.0921 4.7817 10.8754 3.20515 9.17363 2.90509C7.40886 2.59391 5.76715 3.79616 5.51962 5.56852C5.28318 7.27799 6.37385 8.83231 8.0645 9.19528C7.18265 10.1424 6.46769 11.2486 6.00484 12.3993C4.95503 10.9819 2.92705 10.6891 1.5077 11.736C0.0883442 12.7829 -0.20355 14.8069 0.846269 16.2243C1.84415 17.5677 3.73498 17.9011 5.19518 16.9911C5.22546 18.2936 5.53004 19.5147 6.03479 20.7063C4.25893 20.4581 2.68025 21.6714 2.38078 23.3698C2.08132 25.0681 3.34997 26.7187 5.05172 27.0187C6.76456 27.2559 8.32106 26.1683 8.68355 24.4811C9.63302 25.362 10.7418 26.0763 11.895 26.5391C10.4756 27.586 10.1837 29.61 11.2335 31.0274C12.2834 32.4448 14.3113 32.7375 15.7307 31.6906C17.0759 30.6955 17.4087 28.8085 16.496 27.3504C17.8009 27.321 19.0241 27.0179 20.2176 26.5149C19.9701 28.2872 21.1868 29.8638 22.8886 30.1639C24.6644 30.4121 26.2431 29.1988 26.5426 27.5004C26.779 25.791 25.6883 24.2366 23.9977 23.8737C24.8795 22.9266 25.5945 21.8204 26.0573 20.6697C27.1072 22.0871 29.1351 22.3798 30.5545 21.3329C31.9738 20.286 32.2657 18.2621 31.2159 16.8447ZM28.2779 20.6072C27.5846 20.485 27.0209 19.9964 26.8056 19.3747C26.7128 19.1638 26.5459 19.0047 26.2938 18.9602L25.8526 18.8824L22.8903 18.3601C23.0093 19.1594 23.6139 19.7848 24.4332 19.9293L24.8744 20.0071C24.4116 21.1578 23.7707 22.2122 22.9 23.0964L22.6403 22.7263C22.1729 22.0602 21.3127 21.7788 20.5639 21.9711L21.6026 23.4514L21.9662 23.9695L22.5375 24.7836C22.5894 24.8577 22.6414 24.9317 22.7044 24.9428C22.8194 25.0279 22.9454 25.0501 23.0826 25.0095C23.7461 24.9319 24.4061 25.2428 24.8216 25.835C25.4449 26.7232 25.2341 27.9183 24.3558 28.4768C23.4775 29.0354 22.2688 28.8872 21.7086 28.0101C21.2931 27.418 21.2891 26.7038 21.5261 26.097C21.6224 25.9194 21.6037 25.6567 21.4479 25.4347L21.3551 25.2237L19.6412 22.7812C19.2041 23.4176 19.1748 24.3204 19.6423 24.9866L19.902 25.3566C18.7715 25.8707 17.5594 26.111 16.3175 26.1515L16.4062 25.6483C16.5504 24.8305 16.1682 24.0497 15.4562 23.6647L15.1456 25.426L14.9349 26.6211L14.8573 27.0614C14.8129 27.313 14.9057 27.524 15.0726 27.6831C15.5844 28.0976 15.7886 28.7822 15.6777 29.4113C15.4891 30.4806 14.5256 31.1538 13.4541 30.9649C12.3827 30.776 11.7075 29.8138 11.896 28.7444C12.018 28.0525 12.5071 27.4902 13.1298 27.2757C13.3411 27.1832 13.5004 27.0168 13.5448 26.7651L13.6224 26.3248L13.8221 25.1926L14.1326 23.4313C13.3319 23.5496 12.7057 24.1526 12.5615 24.9703L12.4839 25.4106C11.3307 24.9479 10.2739 24.3075 9.38742 23.4378L9.75801 23.1788C10.4251 22.7127 10.7064 21.8543 10.5133 21.1069L8.05626 22.8788L7.69676 23.0748C7.53743 23.2413 7.44113 23.4189 7.39676 23.6705C7.47493 24.3329 7.16385 24.9914 6.57089 25.4057C5.68147 26.0272 4.48394 25.816 3.92373 24.939C3.36352 24.0619 3.51123 22.8557 4.38957 22.2971C4.98252 21.8828 5.698 21.8792 6.3061 22.1162C6.48409 22.2124 6.74729 22.194 6.96965 22.0386L7.78496 21.4689L8.30379 21.1064L9.78617 20.0706C9.14832 19.6339 8.25484 19.5412 7.57668 20.0702L7.20609 20.3291C6.69024 19.2005 6.44869 17.9904 6.40732 16.7508L6.84851 16.8286C7.66787 16.9731 8.44991 16.5921 8.83511 15.8818L5.93584 15.3706L5.49464 15.2928C5.24253 15.2483 5.03127 15.3408 4.87194 15.5072C4.44589 16.0807 3.76015 16.2841 3.06685 16.1618C1.99538 15.9729 1.32021 15.0107 1.50876 13.9414C1.69731 12.872 2.66086 12.1988 3.73233 12.3877C4.42563 12.51 4.98936 12.9985 5.20468 13.6202C5.29746 13.8311 5.46436 13.9903 5.71647 14.0347L7.29216 14.3126L7.35519 14.3237L9.05694 14.6237C8.93792 13.8245 8.33335 13.199 7.51399 13.0545L7.0728 12.9767C7.53564 11.826 8.17648 10.7716 9.04724 9.88742L9.30693 10.2575C9.77435 10.9236 10.6346 11.205 11.3833 11.0128L9.66942 8.57026L9.40974 8.20019C9.25393 7.97814 9.07594 7.8819 8.81273 7.90034C8.14918 7.97792 7.48915 7.66696 7.07366 7.07484C6.45042 6.18665 6.66116 4.99152 7.5395 4.43296C8.42892 3.8115 9.62645 4.02265 10.1867 4.89972C10.6021 5.49185 10.6062 6.206 10.3692 6.81279C10.2729 6.99038 10.2916 7.2531 10.4474 7.47515L11.0187 8.28932L11.3823 8.80742L12.421 10.2877C12.8581 9.65138 12.9504 8.75964 12.4199 8.08239L12.1602 7.71231C13.2907 7.1982 14.5028 6.95793 15.7447 6.91748L15.6671 7.3578C15.5229 8.17552 15.9051 8.95635 16.6171 9.34132L16.9276 7.58007L17.1273 6.44783L17.2049 6.00752C17.2493 5.75591 17.1565 5.54498 16.9896 5.38583C16.4778 4.9713 16.2106 4.2756 16.3326 3.58368C16.5211 2.51435 17.4847 1.8411 18.5561 2.03003C19.6276 2.21896 20.3028 3.18116 20.1142 4.25049C19.9922 4.94241 19.5031 5.50475 18.8804 5.71924C18.6692 5.8117 18.5098 5.97818 18.4655 6.22979L18.3878 6.6701L18.1882 7.80233L17.8776 9.56359C18.6783 9.44534 19.3046 8.84233 19.4487 8.0246L19.5264 7.58429C20.6795 8.04706 21.7364 8.68741 22.6228 9.55715L22.2522 9.81609C21.5852 10.2822 21.3038 11.1406 21.497 11.8881L22.9794 10.8523L23.4982 10.4898L24.3135 9.92011C24.4728 9.75364 24.5691 9.57604 24.6135 9.32444C24.5388 8.27355 25.2836 7.36714 26.3475 7.23045C27.011 7.15288 27.671 7.46383 28.0865 8.05595C28.7098 8.94414 28.499 10.1393 27.6207 10.6978C27.0277 11.1121 26.3123 11.1157 25.7042 10.8788C25.5262 10.7825 25.263 10.801 25.0406 10.9563L24.733 11.2264L22.2871 12.9354C22.925 13.3722 23.8295 13.4019 24.4966 12.9358L24.8672 12.6769C25.383 13.8056 25.6246 15.0156 25.666 16.2552L25.1617 16.1663C24.3424 16.0218 23.5603 16.4028 23.1751 17.1132L24.9399 17.4243L25.0029 17.4354L26.6417 17.7244C26.8938 17.7689 27.105 17.6764 27.2644 17.5099C27.6163 16.9882 28.3131 16.722 28.9434 16.8331C30.0149 17.022 30.69 17.9842 30.5015 19.0536C30.3129 20.1229 29.3494 20.7961 28.2779 20.6072Z",fill:"#E1643A"}),Object(a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.8861 17.9974C17.4449 17.9196 17.1964 17.4866 17.2629 17.1092L17.5069 15.7254C17.5846 15.2851 18.0182 15.0372 18.3963 15.1039C18.7745 15.1706 19.0861 15.6147 19.0196 15.9921L18.7756 17.3759C18.6979 17.8163 18.3273 18.0752 17.8861 17.9974ZM17.9992 21.7791C17.8101 21.7458 17.6321 21.6495 17.5282 21.5015C16.4154 20.073 14.4615 19.7285 12.9272 20.6902C12.5566 20.9491 12.0635 20.7973 11.8038 20.4273C11.5441 20.0572 11.6959 19.5651 12.0665 19.3061C14.2679 17.8783 17.1671 18.3895 18.8104 20.4953C19.0701 20.8654 18.9814 21.3686 18.6738 21.6386C18.4626 21.7311 18.2513 21.8236 17.9992 21.7791ZM13.1661 16.3868C13.0995 16.7643 13.3481 17.1972 13.7893 17.275C14.2305 17.3528 14.6011 17.0939 14.6788 16.6536L14.9228 15.2697C14.9893 14.8923 14.6777 14.4482 14.2995 14.3815C13.9214 14.3149 13.4877 14.5627 13.4101 15.003L13.1661 16.3868Z",fill:"#E1643A"})]}),Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:"clip0",children:Object(a.jsx)("rect",{width:"32",height:"32",fill:"white",transform:"translate(0 0.535294)"})})})]}),Object(a.jsx)("span",{className:"small-stat",children:this.props.generalData.newInfectionsPercentChange}),Object(a.jsx)("span",{className:"small-title",children:this.props.newInfectionsChangeText}),Object(a.jsx)("span",{className:"big-stat",children:this.props.generalData.newInfectionsToday}),Object(a.jsx)("h2",{children:"New Infections"}),Object(a.jsxs)("div",{className:"graph",children:[Object(a.jsx)("span",{className:"bar-1 bar-today",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-2",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-3",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-4",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-5",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-6",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-7",children:"\xa0"})]})]})}),Object(a.jsx)("div",{className:"slider-slide slide-2",children:Object(a.jsxs)("div",{className:"slide-text",children:[Object(a.jsx)("span",{className:"report-date",children:this.props.generalData.date}),Object(a.jsxs)("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(a.jsx)("path",{d:"M31.2159 16.8447C30.6855 16.1674 29.9846 15.7195 29.1652 15.5751C28.3459 15.4306 27.5341 15.6117 26.867 16.0778C26.8367 14.7753 26.5321 13.5542 26.0274 12.3626C27.8033 12.6109 29.3819 11.3975 29.6814 9.69919C29.9289 7.92682 28.7122 6.35027 27.0105 6.0502C25.2976 5.81304 23.7411 6.9006 23.3786 8.58784C22.4292 7.70699 21.3204 6.99261 20.1672 6.52985C21.5866 5.48297 21.8785 3.459 20.8286 2.04159C19.7788 0.624184 17.7508 0.331454 16.3315 1.37834C14.9863 2.37343 14.6535 4.26049 15.5662 5.71857C14.2613 5.7479 13.038 6.05108 11.8446 6.55407C12.0921 4.7817 10.8754 3.20515 9.17363 2.90509C7.40886 2.59391 5.76715 3.79616 5.51962 5.56852C5.28318 7.27799 6.37385 8.83231 8.0645 9.19528C7.18265 10.1424 6.46769 11.2486 6.00484 12.3993C4.95503 10.9819 2.92705 10.6891 1.5077 11.736C0.0883442 12.7829 -0.20355 14.8069 0.846269 16.2243C1.84415 17.5677 3.73498 17.9011 5.19518 16.9911C5.22546 18.2936 5.53004 19.5147 6.03479 20.7063C4.25893 20.4581 2.68025 21.6714 2.38078 23.3698C2.08132 25.0681 3.34997 26.7187 5.05172 27.0187C6.76456 27.2559 8.32106 26.1683 8.68355 24.4811C9.63302 25.362 10.7418 26.0763 11.895 26.5391C10.4756 27.586 10.1837 29.61 11.2335 31.0274C12.2834 32.4448 14.3113 32.7375 15.7307 31.6906C17.0759 30.6955 17.4087 28.8085 16.496 27.3504C17.8009 27.321 19.0241 27.0179 20.2176 26.5149C19.9701 28.2872 21.1868 29.8638 22.8886 30.1639C24.6644 30.4121 26.2431 29.1988 26.5426 27.5004C26.779 25.791 25.6883 24.2366 23.9977 23.8737C24.8795 22.9266 25.5945 21.8204 26.0573 20.6697C27.1072 22.0871 29.1351 22.3798 30.5545 21.3329C31.9738 20.286 32.2657 18.2621 31.2159 16.8447ZM28.2779 20.6072C27.5846 20.485 27.0209 19.9964 26.8056 19.3747C26.7128 19.1638 26.5459 19.0047 26.2938 18.9602L25.8526 18.8824L22.8903 18.3601C23.0093 19.1594 23.6139 19.7848 24.4332 19.9293L24.8744 20.0071C24.4116 21.1578 23.7707 22.2122 22.9 23.0964L22.6403 22.7263C22.1729 22.0602 21.3127 21.7788 20.5639 21.9711L21.6026 23.4514L21.9662 23.9695L22.5375 24.7836C22.5894 24.8577 22.6414 24.9317 22.7044 24.9428C22.8194 25.0279 22.9454 25.0501 23.0826 25.0095C23.7461 24.9319 24.4061 25.2428 24.8216 25.835C25.4449 26.7232 25.2341 27.9183 24.3558 28.4768C23.4775 29.0354 22.2688 28.8872 21.7086 28.0101C21.2931 27.418 21.2891 26.7038 21.5261 26.097C21.6224 25.9194 21.6037 25.6567 21.4479 25.4347L21.3551 25.2237L19.6412 22.7812C19.2041 23.4176 19.1748 24.3204 19.6423 24.9866L19.902 25.3566C18.7715 25.8707 17.5594 26.111 16.3175 26.1515L16.4062 25.6483C16.5504 24.8305 16.1682 24.0497 15.4562 23.6647L15.1456 25.426L14.9349 26.6211L14.8573 27.0614C14.8129 27.313 14.9057 27.524 15.0726 27.6831C15.5844 28.0976 15.7886 28.7822 15.6777 29.4113C15.4891 30.4806 14.5256 31.1538 13.4541 30.9649C12.3827 30.776 11.7075 29.8138 11.896 28.7444C12.018 28.0525 12.5071 27.4902 13.1298 27.2757C13.3411 27.1832 13.5004 27.0168 13.5448 26.7651L13.6224 26.3248L13.8221 25.1926L14.1326 23.4313C13.3319 23.5496 12.7057 24.1526 12.5615 24.9703L12.4839 25.4106C11.3307 24.9479 10.2739 24.3075 9.38742 23.4378L9.75801 23.1788C10.4251 22.7127 10.7064 21.8543 10.5133 21.1069L8.05626 22.8788L7.69676 23.0748C7.53743 23.2413 7.44113 23.4189 7.39676 23.6705C7.47493 24.3329 7.16385 24.9914 6.57089 25.4057C5.68147 26.0272 4.48394 25.816 3.92373 24.939C3.36352 24.0619 3.51123 22.8557 4.38957 22.2971C4.98252 21.8828 5.698 21.8792 6.3061 22.1162C6.48409 22.2124 6.74729 22.194 6.96965 22.0386L7.78496 21.4689L8.30379 21.1064L9.78617 20.0706C9.14832 19.6339 8.25484 19.5412 7.57668 20.0702L7.20609 20.3291C6.69024 19.2005 6.44869 17.9904 6.40732 16.7508L6.84851 16.8286C7.66787 16.9731 8.44991 16.5921 8.83511 15.8818L5.93584 15.3706L5.49464 15.2928C5.24253 15.2483 5.03127 15.3408 4.87194 15.5072C4.44589 16.0807 3.76015 16.2841 3.06685 16.1618C1.99538 15.9729 1.32021 15.0107 1.50876 13.9414C1.69731 12.872 2.66086 12.1988 3.73233 12.3877C4.42563 12.51 4.98936 12.9985 5.20468 13.6202C5.29746 13.8311 5.46436 13.9903 5.71647 14.0347L7.29216 14.3126L7.35519 14.3237L9.05694 14.6237C8.93792 13.8245 8.33335 13.199 7.51399 13.0545L7.0728 12.9767C7.53564 11.826 8.17648 10.7716 9.04724 9.88742L9.30693 10.2575C9.77435 10.9236 10.6346 11.205 11.3833 11.0128L9.66942 8.57026L9.40974 8.20019C9.25393 7.97814 9.07594 7.8819 8.81273 7.90034C8.14918 7.97792 7.48915 7.66696 7.07366 7.07484C6.45042 6.18665 6.66116 4.99152 7.5395 4.43296C8.42892 3.8115 9.62645 4.02265 10.1867 4.89972C10.6021 5.49185 10.6062 6.206 10.3692 6.81279C10.2729 6.99038 10.2916 7.2531 10.4474 7.47515L11.0187 8.28932L11.3823 8.80742L12.421 10.2877C12.8581 9.65138 12.9504 8.75964 12.4199 8.08239L12.1602 7.71231C13.2907 7.1982 14.5028 6.95793 15.7447 6.91748L15.6671 7.3578C15.5229 8.17552 15.9051 8.95635 16.6171 9.34132L16.9276 7.58007L17.1273 6.44783L17.2049 6.00752C17.2493 5.75591 17.1565 5.54498 16.9896 5.38583C16.4778 4.9713 16.2106 4.2756 16.3326 3.58368C16.5211 2.51435 17.4847 1.8411 18.5561 2.03003C19.6276 2.21896 20.3028 3.18116 20.1142 4.25049C19.9922 4.94241 19.5031 5.50475 18.8804 5.71924C18.6692 5.8117 18.5098 5.97818 18.4655 6.22979L18.3878 6.6701L18.1882 7.80233L17.8776 9.56359C18.6783 9.44534 19.3046 8.84233 19.4487 8.0246L19.5264 7.58429C20.6795 8.04706 21.7364 8.68741 22.6228 9.55715L22.2522 9.81609C21.5852 10.2822 21.3038 11.1406 21.497 11.8881L22.9794 10.8523L23.4982 10.4898L24.3135 9.92011C24.4728 9.75364 24.5691 9.57604 24.6135 9.32444C24.5388 8.27355 25.2836 7.36714 26.3475 7.23045C27.011 7.15288 27.671 7.46383 28.0865 8.05595C28.7098 8.94414 28.499 10.1393 27.6207 10.6978C27.0277 11.1121 26.3123 11.1157 25.7042 10.8788C25.5262 10.7825 25.263 10.801 25.0406 10.9563L24.733 11.2264L22.2871 12.9354C22.925 13.3722 23.8295 13.4019 24.4966 12.9358L24.8672 12.6769C25.383 13.8056 25.6246 15.0156 25.666 16.2552L25.1617 16.1663C24.3424 16.0218 23.5603 16.4028 23.1751 17.1132L24.9399 17.4243L25.0029 17.4354L26.6417 17.7244C26.8938 17.7689 27.105 17.6764 27.2644 17.5099C27.6163 16.9882 28.3131 16.722 28.9434 16.8331C30.0149 17.022 30.69 17.9842 30.5015 19.0536C30.3129 20.1229 29.3494 20.7961 28.2779 20.6072Z",fill:"#E1643A"}),Object(a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.8861 17.9974C17.4449 17.9196 17.1964 17.4866 17.2629 17.1092L17.5069 15.7254C17.5846 15.2851 18.0182 15.0372 18.3963 15.1039C18.7745 15.1706 19.0861 15.6147 19.0196 15.9921L18.7756 17.3759C18.6979 17.8163 18.3273 18.0752 17.8861 17.9974ZM17.9992 21.7791C17.8101 21.7458 17.6321 21.6495 17.5282 21.5015C16.4154 20.073 14.4615 19.7285 12.9272 20.6902C12.5566 20.9491 12.0635 20.7973 11.8038 20.4273C11.5441 20.0572 11.6959 19.5651 12.0665 19.3061C14.2679 17.8783 17.1671 18.3895 18.8104 20.4953C19.0701 20.8654 18.9814 21.3686 18.6738 21.6386C18.4626 21.7311 18.2513 21.8236 17.9992 21.7791ZM13.1661 16.3868C13.0995 16.7643 13.3481 17.1972 13.7893 17.275C14.2305 17.3528 14.6011 17.0939 14.6788 16.6536L14.9228 15.2697C14.9893 14.8923 14.6777 14.4482 14.2995 14.3815C13.9214 14.3149 13.4877 14.5627 13.4101 15.003L13.1661 16.3868Z",fill:"#E1643A"})]}),Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:"clip0",children:Object(a.jsx)("rect",{width:"32",height:"32",fill:"white",transform:"translate(0 0.535294)"})})})]}),Object(a.jsxs)("span",{className:"small-stat",children:[this.props.generalData.testsPositivity," %"]}),Object(a.jsx)("span",{className:"small-title",children:"Positive Today"}),Object(a.jsx)("span",{className:"big-stat",children:this.props.generalData.testsCompleted}),Object(a.jsx)("h2",{children:"Tests Completed"}),Object(a.jsxs)("div",{className:"graph",children:[Object(a.jsx)("span",{className:"bar-1 bar-today",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-2",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-3",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-4",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-5",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-6",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-7",children:"\xa0"})]})]})}),Object(a.jsx)("div",{className:"slider-slide slide-3",children:Object(a.jsxs)("div",{className:"slide-text",children:[Object(a.jsx)("span",{className:"report-date",children:this.props.generalData.date}),Object(a.jsxs)("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(a.jsx)("path",{d:"M31.2159 16.8447C30.6855 16.1674 29.9846 15.7195 29.1652 15.5751C28.3459 15.4306 27.5341 15.6117 26.867 16.0778C26.8367 14.7753 26.5321 13.5542 26.0274 12.3626C27.8033 12.6109 29.3819 11.3975 29.6814 9.69919C29.9289 7.92682 28.7122 6.35027 27.0105 6.0502C25.2976 5.81304 23.7411 6.9006 23.3786 8.58784C22.4292 7.70699 21.3204 6.99261 20.1672 6.52985C21.5866 5.48297 21.8785 3.459 20.8286 2.04159C19.7788 0.624184 17.7508 0.331454 16.3315 1.37834C14.9863 2.37343 14.6535 4.26049 15.5662 5.71857C14.2613 5.7479 13.038 6.05108 11.8446 6.55407C12.0921 4.7817 10.8754 3.20515 9.17363 2.90509C7.40886 2.59391 5.76715 3.79616 5.51962 5.56852C5.28318 7.27799 6.37385 8.83231 8.0645 9.19528C7.18265 10.1424 6.46769 11.2486 6.00484 12.3993C4.95503 10.9819 2.92705 10.6891 1.5077 11.736C0.0883442 12.7829 -0.20355 14.8069 0.846269 16.2243C1.84415 17.5677 3.73498 17.9011 5.19518 16.9911C5.22546 18.2936 5.53004 19.5147 6.03479 20.7063C4.25893 20.4581 2.68025 21.6714 2.38078 23.3698C2.08132 25.0681 3.34997 26.7187 5.05172 27.0187C6.76456 27.2559 8.32106 26.1683 8.68355 24.4811C9.63302 25.362 10.7418 26.0763 11.895 26.5391C10.4756 27.586 10.1837 29.61 11.2335 31.0274C12.2834 32.4448 14.3113 32.7375 15.7307 31.6906C17.0759 30.6955 17.4087 28.8085 16.496 27.3504C17.8009 27.321 19.0241 27.0179 20.2176 26.5149C19.9701 28.2872 21.1868 29.8638 22.8886 30.1639C24.6644 30.4121 26.2431 29.1988 26.5426 27.5004C26.779 25.791 25.6883 24.2366 23.9977 23.8737C24.8795 22.9266 25.5945 21.8204 26.0573 20.6697C27.1072 22.0871 29.1351 22.3798 30.5545 21.3329C31.9738 20.286 32.2657 18.2621 31.2159 16.8447ZM28.2779 20.6072C27.5846 20.485 27.0209 19.9964 26.8056 19.3747C26.7128 19.1638 26.5459 19.0047 26.2938 18.9602L25.8526 18.8824L22.8903 18.3601C23.0093 19.1594 23.6139 19.7848 24.4332 19.9293L24.8744 20.0071C24.4116 21.1578 23.7707 22.2122 22.9 23.0964L22.6403 22.7263C22.1729 22.0602 21.3127 21.7788 20.5639 21.9711L21.6026 23.4514L21.9662 23.9695L22.5375 24.7836C22.5894 24.8577 22.6414 24.9317 22.7044 24.9428C22.8194 25.0279 22.9454 25.0501 23.0826 25.0095C23.7461 24.9319 24.4061 25.2428 24.8216 25.835C25.4449 26.7232 25.2341 27.9183 24.3558 28.4768C23.4775 29.0354 22.2688 28.8872 21.7086 28.0101C21.2931 27.418 21.2891 26.7038 21.5261 26.097C21.6224 25.9194 21.6037 25.6567 21.4479 25.4347L21.3551 25.2237L19.6412 22.7812C19.2041 23.4176 19.1748 24.3204 19.6423 24.9866L19.902 25.3566C18.7715 25.8707 17.5594 26.111 16.3175 26.1515L16.4062 25.6483C16.5504 24.8305 16.1682 24.0497 15.4562 23.6647L15.1456 25.426L14.9349 26.6211L14.8573 27.0614C14.8129 27.313 14.9057 27.524 15.0726 27.6831C15.5844 28.0976 15.7886 28.7822 15.6777 29.4113C15.4891 30.4806 14.5256 31.1538 13.4541 30.9649C12.3827 30.776 11.7075 29.8138 11.896 28.7444C12.018 28.0525 12.5071 27.4902 13.1298 27.2757C13.3411 27.1832 13.5004 27.0168 13.5448 26.7651L13.6224 26.3248L13.8221 25.1926L14.1326 23.4313C13.3319 23.5496 12.7057 24.1526 12.5615 24.9703L12.4839 25.4106C11.3307 24.9479 10.2739 24.3075 9.38742 23.4378L9.75801 23.1788C10.4251 22.7127 10.7064 21.8543 10.5133 21.1069L8.05626 22.8788L7.69676 23.0748C7.53743 23.2413 7.44113 23.4189 7.39676 23.6705C7.47493 24.3329 7.16385 24.9914 6.57089 25.4057C5.68147 26.0272 4.48394 25.816 3.92373 24.939C3.36352 24.0619 3.51123 22.8557 4.38957 22.2971C4.98252 21.8828 5.698 21.8792 6.3061 22.1162C6.48409 22.2124 6.74729 22.194 6.96965 22.0386L7.78496 21.4689L8.30379 21.1064L9.78617 20.0706C9.14832 19.6339 8.25484 19.5412 7.57668 20.0702L7.20609 20.3291C6.69024 19.2005 6.44869 17.9904 6.40732 16.7508L6.84851 16.8286C7.66787 16.9731 8.44991 16.5921 8.83511 15.8818L5.93584 15.3706L5.49464 15.2928C5.24253 15.2483 5.03127 15.3408 4.87194 15.5072C4.44589 16.0807 3.76015 16.2841 3.06685 16.1618C1.99538 15.9729 1.32021 15.0107 1.50876 13.9414C1.69731 12.872 2.66086 12.1988 3.73233 12.3877C4.42563 12.51 4.98936 12.9985 5.20468 13.6202C5.29746 13.8311 5.46436 13.9903 5.71647 14.0347L7.29216 14.3126L7.35519 14.3237L9.05694 14.6237C8.93792 13.8245 8.33335 13.199 7.51399 13.0545L7.0728 12.9767C7.53564 11.826 8.17648 10.7716 9.04724 9.88742L9.30693 10.2575C9.77435 10.9236 10.6346 11.205 11.3833 11.0128L9.66942 8.57026L9.40974 8.20019C9.25393 7.97814 9.07594 7.8819 8.81273 7.90034C8.14918 7.97792 7.48915 7.66696 7.07366 7.07484C6.45042 6.18665 6.66116 4.99152 7.5395 4.43296C8.42892 3.8115 9.62645 4.02265 10.1867 4.89972C10.6021 5.49185 10.6062 6.206 10.3692 6.81279C10.2729 6.99038 10.2916 7.2531 10.4474 7.47515L11.0187 8.28932L11.3823 8.80742L12.421 10.2877C12.8581 9.65138 12.9504 8.75964 12.4199 8.08239L12.1602 7.71231C13.2907 7.1982 14.5028 6.95793 15.7447 6.91748L15.6671 7.3578C15.5229 8.17552 15.9051 8.95635 16.6171 9.34132L16.9276 7.58007L17.1273 6.44783L17.2049 6.00752C17.2493 5.75591 17.1565 5.54498 16.9896 5.38583C16.4778 4.9713 16.2106 4.2756 16.3326 3.58368C16.5211 2.51435 17.4847 1.8411 18.5561 2.03003C19.6276 2.21896 20.3028 3.18116 20.1142 4.25049C19.9922 4.94241 19.5031 5.50475 18.8804 5.71924C18.6692 5.8117 18.5098 5.97818 18.4655 6.22979L18.3878 6.6701L18.1882 7.80233L17.8776 9.56359C18.6783 9.44534 19.3046 8.84233 19.4487 8.0246L19.5264 7.58429C20.6795 8.04706 21.7364 8.68741 22.6228 9.55715L22.2522 9.81609C21.5852 10.2822 21.3038 11.1406 21.497 11.8881L22.9794 10.8523L23.4982 10.4898L24.3135 9.92011C24.4728 9.75364 24.5691 9.57604 24.6135 9.32444C24.5388 8.27355 25.2836 7.36714 26.3475 7.23045C27.011 7.15288 27.671 7.46383 28.0865 8.05595C28.7098 8.94414 28.499 10.1393 27.6207 10.6978C27.0277 11.1121 26.3123 11.1157 25.7042 10.8788C25.5262 10.7825 25.263 10.801 25.0406 10.9563L24.733 11.2264L22.2871 12.9354C22.925 13.3722 23.8295 13.4019 24.4966 12.9358L24.8672 12.6769C25.383 13.8056 25.6246 15.0156 25.666 16.2552L25.1617 16.1663C24.3424 16.0218 23.5603 16.4028 23.1751 17.1132L24.9399 17.4243L25.0029 17.4354L26.6417 17.7244C26.8938 17.7689 27.105 17.6764 27.2644 17.5099C27.6163 16.9882 28.3131 16.722 28.9434 16.8331C30.0149 17.022 30.69 17.9842 30.5015 19.0536C30.3129 20.1229 29.3494 20.7961 28.2779 20.6072Z",fill:"#E1643A"}),Object(a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.8861 17.9974C17.4449 17.9196 17.1964 17.4866 17.2629 17.1092L17.5069 15.7254C17.5846 15.2851 18.0182 15.0372 18.3963 15.1039C18.7745 15.1706 19.0861 15.6147 19.0196 15.9921L18.7756 17.3759C18.6979 17.8163 18.3273 18.0752 17.8861 17.9974ZM17.9992 21.7791C17.8101 21.7458 17.6321 21.6495 17.5282 21.5015C16.4154 20.073 14.4615 19.7285 12.9272 20.6902C12.5566 20.9491 12.0635 20.7973 11.8038 20.4273C11.5441 20.0572 11.6959 19.5651 12.0665 19.3061C14.2679 17.8783 17.1671 18.3895 18.8104 20.4953C19.0701 20.8654 18.9814 21.3686 18.6738 21.6386C18.4626 21.7311 18.2513 21.8236 17.9992 21.7791ZM13.1661 16.3868C13.0995 16.7643 13.3481 17.1972 13.7893 17.275C14.2305 17.3528 14.6011 17.0939 14.6788 16.6536L14.9228 15.2697C14.9893 14.8923 14.6777 14.4482 14.2995 14.3815C13.9214 14.3149 13.4877 14.5627 13.4101 15.003L13.1661 16.3868Z",fill:"#E1643A"})]}),Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:"clip0",children:Object(a.jsx)("rect",{width:"32",height:"32",fill:"white",transform:"translate(0 0.535294)"})})})]}),Object(a.jsx)("span",{className:"small-stat",children:this.props.generalData.deathsToday}),Object(a.jsx)("span",{className:"small-title",children:"Deaths Today"}),Object(a.jsx)("span",{className:"big-stat",children:this.props.generalData.deathsTotal}),Object(a.jsx)("h2",{children:"Total Deaths"}),Object(a.jsxs)("div",{className:"graph",children:[Object(a.jsx)("span",{className:"bar-1 bar-today",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-2",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-3",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-4",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-5",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-6",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-7",children:"\xa0"})]})]})}),Object(a.jsx)("div",{className:"slider-slide slide-4",children:Object(a.jsxs)("div",{className:"slide-text",children:[Object(a.jsx)("span",{className:"report-date",children:this.props.generalData.date}),Object(a.jsxs)("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(a.jsx)("path",{d:"M31.2159 16.8447C30.6855 16.1674 29.9846 15.7195 29.1652 15.5751C28.3459 15.4306 27.5341 15.6117 26.867 16.0778C26.8367 14.7753 26.5321 13.5542 26.0274 12.3626C27.8033 12.6109 29.3819 11.3975 29.6814 9.69919C29.9289 7.92682 28.7122 6.35027 27.0105 6.0502C25.2976 5.81304 23.7411 6.9006 23.3786 8.58784C22.4292 7.70699 21.3204 6.99261 20.1672 6.52985C21.5866 5.48297 21.8785 3.459 20.8286 2.04159C19.7788 0.624184 17.7508 0.331454 16.3315 1.37834C14.9863 2.37343 14.6535 4.26049 15.5662 5.71857C14.2613 5.7479 13.038 6.05108 11.8446 6.55407C12.0921 4.7817 10.8754 3.20515 9.17363 2.90509C7.40886 2.59391 5.76715 3.79616 5.51962 5.56852C5.28318 7.27799 6.37385 8.83231 8.0645 9.19528C7.18265 10.1424 6.46769 11.2486 6.00484 12.3993C4.95503 10.9819 2.92705 10.6891 1.5077 11.736C0.0883442 12.7829 -0.20355 14.8069 0.846269 16.2243C1.84415 17.5677 3.73498 17.9011 5.19518 16.9911C5.22546 18.2936 5.53004 19.5147 6.03479 20.7063C4.25893 20.4581 2.68025 21.6714 2.38078 23.3698C2.08132 25.0681 3.34997 26.7187 5.05172 27.0187C6.76456 27.2559 8.32106 26.1683 8.68355 24.4811C9.63302 25.362 10.7418 26.0763 11.895 26.5391C10.4756 27.586 10.1837 29.61 11.2335 31.0274C12.2834 32.4448 14.3113 32.7375 15.7307 31.6906C17.0759 30.6955 17.4087 28.8085 16.496 27.3504C17.8009 27.321 19.0241 27.0179 20.2176 26.5149C19.9701 28.2872 21.1868 29.8638 22.8886 30.1639C24.6644 30.4121 26.2431 29.1988 26.5426 27.5004C26.779 25.791 25.6883 24.2366 23.9977 23.8737C24.8795 22.9266 25.5945 21.8204 26.0573 20.6697C27.1072 22.0871 29.1351 22.3798 30.5545 21.3329C31.9738 20.286 32.2657 18.2621 31.2159 16.8447ZM28.2779 20.6072C27.5846 20.485 27.0209 19.9964 26.8056 19.3747C26.7128 19.1638 26.5459 19.0047 26.2938 18.9602L25.8526 18.8824L22.8903 18.3601C23.0093 19.1594 23.6139 19.7848 24.4332 19.9293L24.8744 20.0071C24.4116 21.1578 23.7707 22.2122 22.9 23.0964L22.6403 22.7263C22.1729 22.0602 21.3127 21.7788 20.5639 21.9711L21.6026 23.4514L21.9662 23.9695L22.5375 24.7836C22.5894 24.8577 22.6414 24.9317 22.7044 24.9428C22.8194 25.0279 22.9454 25.0501 23.0826 25.0095C23.7461 24.9319 24.4061 25.2428 24.8216 25.835C25.4449 26.7232 25.2341 27.9183 24.3558 28.4768C23.4775 29.0354 22.2688 28.8872 21.7086 28.0101C21.2931 27.418 21.2891 26.7038 21.5261 26.097C21.6224 25.9194 21.6037 25.6567 21.4479 25.4347L21.3551 25.2237L19.6412 22.7812C19.2041 23.4176 19.1748 24.3204 19.6423 24.9866L19.902 25.3566C18.7715 25.8707 17.5594 26.111 16.3175 26.1515L16.4062 25.6483C16.5504 24.8305 16.1682 24.0497 15.4562 23.6647L15.1456 25.426L14.9349 26.6211L14.8573 27.0614C14.8129 27.313 14.9057 27.524 15.0726 27.6831C15.5844 28.0976 15.7886 28.7822 15.6777 29.4113C15.4891 30.4806 14.5256 31.1538 13.4541 30.9649C12.3827 30.776 11.7075 29.8138 11.896 28.7444C12.018 28.0525 12.5071 27.4902 13.1298 27.2757C13.3411 27.1832 13.5004 27.0168 13.5448 26.7651L13.6224 26.3248L13.8221 25.1926L14.1326 23.4313C13.3319 23.5496 12.7057 24.1526 12.5615 24.9703L12.4839 25.4106C11.3307 24.9479 10.2739 24.3075 9.38742 23.4378L9.75801 23.1788C10.4251 22.7127 10.7064 21.8543 10.5133 21.1069L8.05626 22.8788L7.69676 23.0748C7.53743 23.2413 7.44113 23.4189 7.39676 23.6705C7.47493 24.3329 7.16385 24.9914 6.57089 25.4057C5.68147 26.0272 4.48394 25.816 3.92373 24.939C3.36352 24.0619 3.51123 22.8557 4.38957 22.2971C4.98252 21.8828 5.698 21.8792 6.3061 22.1162C6.48409 22.2124 6.74729 22.194 6.96965 22.0386L7.78496 21.4689L8.30379 21.1064L9.78617 20.0706C9.14832 19.6339 8.25484 19.5412 7.57668 20.0702L7.20609 20.3291C6.69024 19.2005 6.44869 17.9904 6.40732 16.7508L6.84851 16.8286C7.66787 16.9731 8.44991 16.5921 8.83511 15.8818L5.93584 15.3706L5.49464 15.2928C5.24253 15.2483 5.03127 15.3408 4.87194 15.5072C4.44589 16.0807 3.76015 16.2841 3.06685 16.1618C1.99538 15.9729 1.32021 15.0107 1.50876 13.9414C1.69731 12.872 2.66086 12.1988 3.73233 12.3877C4.42563 12.51 4.98936 12.9985 5.20468 13.6202C5.29746 13.8311 5.46436 13.9903 5.71647 14.0347L7.29216 14.3126L7.35519 14.3237L9.05694 14.6237C8.93792 13.8245 8.33335 13.199 7.51399 13.0545L7.0728 12.9767C7.53564 11.826 8.17648 10.7716 9.04724 9.88742L9.30693 10.2575C9.77435 10.9236 10.6346 11.205 11.3833 11.0128L9.66942 8.57026L9.40974 8.20019C9.25393 7.97814 9.07594 7.8819 8.81273 7.90034C8.14918 7.97792 7.48915 7.66696 7.07366 7.07484C6.45042 6.18665 6.66116 4.99152 7.5395 4.43296C8.42892 3.8115 9.62645 4.02265 10.1867 4.89972C10.6021 5.49185 10.6062 6.206 10.3692 6.81279C10.2729 6.99038 10.2916 7.2531 10.4474 7.47515L11.0187 8.28932L11.3823 8.80742L12.421 10.2877C12.8581 9.65138 12.9504 8.75964 12.4199 8.08239L12.1602 7.71231C13.2907 7.1982 14.5028 6.95793 15.7447 6.91748L15.6671 7.3578C15.5229 8.17552 15.9051 8.95635 16.6171 9.34132L16.9276 7.58007L17.1273 6.44783L17.2049 6.00752C17.2493 5.75591 17.1565 5.54498 16.9896 5.38583C16.4778 4.9713 16.2106 4.2756 16.3326 3.58368C16.5211 2.51435 17.4847 1.8411 18.5561 2.03003C19.6276 2.21896 20.3028 3.18116 20.1142 4.25049C19.9922 4.94241 19.5031 5.50475 18.8804 5.71924C18.6692 5.8117 18.5098 5.97818 18.4655 6.22979L18.3878 6.6701L18.1882 7.80233L17.8776 9.56359C18.6783 9.44534 19.3046 8.84233 19.4487 8.0246L19.5264 7.58429C20.6795 8.04706 21.7364 8.68741 22.6228 9.55715L22.2522 9.81609C21.5852 10.2822 21.3038 11.1406 21.497 11.8881L22.9794 10.8523L23.4982 10.4898L24.3135 9.92011C24.4728 9.75364 24.5691 9.57604 24.6135 9.32444C24.5388 8.27355 25.2836 7.36714 26.3475 7.23045C27.011 7.15288 27.671 7.46383 28.0865 8.05595C28.7098 8.94414 28.499 10.1393 27.6207 10.6978C27.0277 11.1121 26.3123 11.1157 25.7042 10.8788C25.5262 10.7825 25.263 10.801 25.0406 10.9563L24.733 11.2264L22.2871 12.9354C22.925 13.3722 23.8295 13.4019 24.4966 12.9358L24.8672 12.6769C25.383 13.8056 25.6246 15.0156 25.666 16.2552L25.1617 16.1663C24.3424 16.0218 23.5603 16.4028 23.1751 17.1132L24.9399 17.4243L25.0029 17.4354L26.6417 17.7244C26.8938 17.7689 27.105 17.6764 27.2644 17.5099C27.6163 16.9882 28.3131 16.722 28.9434 16.8331C30.0149 17.022 30.69 17.9842 30.5015 19.0536C30.3129 20.1229 29.3494 20.7961 28.2779 20.6072Z",fill:"#E1643A"}),Object(a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.8861 17.9974C17.4449 17.9196 17.1964 17.4866 17.2629 17.1092L17.5069 15.7254C17.5846 15.2851 18.0182 15.0372 18.3963 15.1039C18.7745 15.1706 19.0861 15.6147 19.0196 15.9921L18.7756 17.3759C18.6979 17.8163 18.3273 18.0752 17.8861 17.9974ZM17.9992 21.7791C17.8101 21.7458 17.6321 21.6495 17.5282 21.5015C16.4154 20.073 14.4615 19.7285 12.9272 20.6902C12.5566 20.9491 12.0635 20.7973 11.8038 20.4273C11.5441 20.0572 11.6959 19.5651 12.0665 19.3061C14.2679 17.8783 17.1671 18.3895 18.8104 20.4953C19.0701 20.8654 18.9814 21.3686 18.6738 21.6386C18.4626 21.7311 18.2513 21.8236 17.9992 21.7791ZM13.1661 16.3868C13.0995 16.7643 13.3481 17.1972 13.7893 17.275C14.2305 17.3528 14.6011 17.0939 14.6788 16.6536L14.9228 15.2697C14.9893 14.8923 14.6777 14.4482 14.2995 14.3815C13.9214 14.3149 13.4877 14.5627 13.4101 15.003L13.1661 16.3868Z",fill:"#E1643A"})]}),Object(a.jsx)("defs",{children:Object(a.jsx)("clipPath",{id:"clip0",children:Object(a.jsx)("rect",{width:"32",height:"32",fill:"white",transform:"translate(0 0.535294)"})})})]}),Object(a.jsxs)("span",{className:"small-stat",children:[this.props.generalData.icu," ",Object(a.jsx)("em",{children:this.props.generalData.ventilator})]}),Object(a.jsx)("span",{className:"small-title",children:"ICU / Ventilator"}),Object(a.jsx)("span",{className:"big-stat",children:this.props.generalData.hospitalized}),Object(a.jsx)("h2",{children:"Hospitalized"}),Object(a.jsxs)("div",{className:"graph",children:[Object(a.jsx)("span",{className:"bar-1 bar-today",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-2",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-3",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-4",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-5",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-6",children:"\xa0"}),Object(a.jsx)("span",{className:"bar-7",children:"\xa0"})]})]})}),Object(a.jsx)("div",{className:"slider-slide slide-5",children:Object(a.jsxs)("div",{className:"slide-text",children:[Object(a.jsx)("span",{className:"report-date",children:this.props.generalData.date}),Object(a.jsx)("h2",{children:"Cases by County"}),Object(a.jsx)("ul",{className:"county-list",children:e})]})})]}))})}}]),t}(n.a.Component)),m=(t(66),function(e){Object(L.a)(t,e);var s=Object(o.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={loading:!1,newInfectionsChangeText:"",generalData:{date:"one sec pls",newInfectionsToday:0,newInfectionsYesterday:0,newInfectionsPercentChange:0,deathsToday:0,deathsTotal:0,testsCompleted:0,testPositivity:0,hospitalized:0,icu:0,icuPercent:0,ventilator:0,ventilatorPercent:0},countyData:"",pastWeekInfections:""},a.init=a.init.bind(Object(d.a)(a)),a.populateData=a.populateData.bind(Object(d.a)(a)),a.getUserLocation=a.getUserLocation.bind(Object(d.a)(a)),a.displayLocation=a.displayLocation.bind(Object(d.a)(a)),a}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){}},{key:"init",value:function(){var e=this;this.setState({loading:!0});var s=h.a.init({key:"14L2_NpdD9oJaHVeGSBNDnmYqdgmakbbscUIsXP-fUic",simpleSheet:!0,callback:this.populateData,orderby:"rank"}).then((function(t){return e.populateData(t,s)})).catch((function(e){return console.warn(e)}))}},{key:"populateData",value:function(e,s){var t=s.sheets("stats").elements[0],a=s.sheets("countyRank").all(),C=s.sheets("dataSnapshot").all();console.log(t),console.log(a),console.log(C),this.setState({generalData:{date:t.date,newInfectionsToday:t.newInfectionsToday,newInfectionsYesterday:t.newInfectionsYesterday,newInfectionsPercentChange:t.newInfectionsPercentChange,deathsToday:t.deathsToday,deathsTotal:t.deathsTotal,testsCompleted:t.testsCompleted,testsPositivity:t.testsPositivity,hospitalized:t.hospitalized,icu:t.icu,icuPercent:t.icuPercent,ventilator:t.ventilator,ventilatorPercent:t.ventilatorPercent},countyData:a,pastWeekInfections:C}),1===Math.sign(parseInt(t.newInfectionsPercentChange))?this.setState({newInfectionsChangeText:"Increase today"}):this.setState({newInfectionsChangeText:"Decrease today"}),this.setState({loading:!1})}},{key:"getUserLocation",value:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.displayLocation):console.log("Geolocation not supported")}},{key:"displayLocation",value:function(e){console.log("Lat: "+e.coords.latitude+" Long: "+e.coords.longitude)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"main-text",children:[this.getUserLocation(),Object(a.jsx)(O,{generalData:this.state.generalData,countyData:this.state.countyData,pastWeekInfections:this.state.pastWeekInfections,newInfectionsChangeText:this.state.newInfectionsChangeText})]})})}}]),t}(n.a.Component));t(67);var u=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(m,{})})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2ba59161.chunk.js.map