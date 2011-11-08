/*!
 * jQuery dragNscale plug In
 * e-mail : balral99@nate.com
 * http://lab.koism.com/
 *
 * Copyright 2011, Jin-han Kim
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
;(function(k){k.fn.dragNscale=function(e){function i(d){d.preventDefault();var b,l;if(d.type=="touchstart"){a.zIndex>0&&c.css({"z-index":a.zIndex});a.opacity!=""&&c.css("opacity",a.opacity);a.start&&a.start();y=d.touches.length;b=d.touches[0];r=b.pageX;s=b.pageY}else if(d.type=="gesturestart"){if(a.imageScale==1&&f.size()>0)for(b=0;b<f.size();b++)if(m[b]==0||n[b]==0){m[b]=f.eq(b).width()/c.width();n[b]=f.eq(b).height()/c.height()}g=c.width();h=c.height();t=0}else if(d.type=="touchmove"){if(y==1){b=
d.touches[0];if(a.axis==""||a.axis=="x"){d=b.pageX;o=c.offset().left;l=d-r+o;c.offset({left:l});r=d}if(a.axis==""||a.axis=="y"){d=b.pageY;p=c.offset().top;b=d-s+p;c.offset({top:b});s=d}a.drag&&a.drag()}}else if(d.type=="gesturechange"){if(a.scaleOrRotate==1&&t==0&&(d.scale!=1||d.rotation!=0)){b=Math.abs(d.scale);u=b>1+a.scaleStartVal||b<1-a.scaleStartVal?"s":"r";t=1}if(a.useScale>0&&(u=="s"||a.scaleOrRotate==0)){b=0;l=d.scale;b=l-v+1;pWidth=g;pHeight=h;g*=b;h*=b;g=Math.round(g);h=Math.round(h);v=
l;if(a.centre==1&&w==0){b=(h-pHeight)/2;o-=(g-pWidth)/2;p-=b;c.css({width:g,height:h,top:p,left:o})}else c.css({width:g,height:h});if(a.imageScale==1||a.scaleWith!="")for(b=0;b<f.size();b++){f.eq(b).width(g*m[b]);f.eq(b).height(h*n[b])}if(a.fontScale!=0)for(b=0;b<q.size();b++)q.eq(b).css("font-size",g*z[b]);a.scale&&a.scale()}if(a.useRotate>0&&(u=="r"||a.scaleOrRotate==0)){A=d.rotation;x=w+A;c.css({"-webkit-transform":"rotate("+x+"deg)"});a.rotate&&a.rotate()}}else if(d.type=="touchend"||d.type==
"touchcancel"||d.type=="gestureend"){v=1;w=x;a.zIndex>0&&a.zIndexKeep<1&&c.css({"z-index":C});a.opacity!=""&&c.css("opacity",B);a.stop&&a.stop()}}var a=k.extend({},k.fn.dragNscale.defaults,e),y=0,r,s,v=1,g,h,o,p,w=0,A,x=0,t=0,u,c=k(this),f;if(a.imageScale==1||a.scaleWith!=""){f=a.imageScale==1&&a.scaleWith!=""?c.find("img ,"+a.scaleWith):a.imageScale==1?c.find("img"):c.find(a.scaleWith);var m=[],n=[];for(e=0;e<f.size();e++){m[e]=f.eq(e).width()/c.width();n[e]=f.eq(e).height()/c.height()}}if(a.fontScale!=
0){var q=a.fontScale==1?c:c.find(a.fontScale),j,z=[];for(e=0;e<q.size();e++){j=q.eq(e).css("font-size");j=j.replace("px","");j=Number(j);z[e]=j/c.width()}}e=c[0];if(a.zIndex>0)var C=c.css("z-index");if(a.opacity!="")var B=c.css("opacity");B=c.css("opacity");e.addEventListener("touchstart",i,false);e.addEventListener("touchmove",i,false);e.addEventListener("touchend",i,false);e.addEventListener("touchcancel",i,false);e.addEventListener("gesturestart",i,false);e.addEventListener("gesturechange",i,false);
e.addEventListener("gestureend",i,false)};k.fn.dragNscale.defaults={zIndex:0,zIndexKeep:0,useScale:1,useRotate:1,centre:1,imageScale:1,fontScale:0,scaleWith:"",scaleStartVal:0.05,scaleOrRotate:1,axis:"",opacity:"",start:"",drag:"",scale:"",rotate:"",stop:""}})(jQuery);


