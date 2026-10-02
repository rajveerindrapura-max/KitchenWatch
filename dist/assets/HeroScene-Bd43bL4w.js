var NS=Object.defineProperty;var OS=(r,e,t)=>e in r?NS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var on=(r,e,t)=>OS(r,typeof e!="symbol"?e+"":e,t);import{r as me,g as FS,j as ke,R as BS}from"./index-CaMhV_vt.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="164",zS={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kS={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},J0=0,Md=1,K0=2,HS=3,Q0=0,Hu=1,Yo=2,Gi=3,Rr=0,ti=1,Xi=2,or=0,zs=1,wd=2,Ed=3,Ad=4,$0=5,es=100,e_=101,t_=102,n_=103,i_=104,r_=200,s_=201,a_=202,o_=203,Du=204,Nu=205,l_=206,c_=207,u_=208,h_=209,f_=210,d_=211,p_=212,m_=213,g_=214,v_=0,__=1,y_=2,Qo=3,x_=4,S_=5,M_=6,w_=7,Ml=0,E_=1,A_=2,lr=0,T_=1,b_=2,C_=3,mp=4,R_=5,P_=6,I_=7,Td="attached",L_="detached",ns=300,ur=301,is=302,Xa=303,$o=304,$a=306,el=1e3,Sn=1001,tl=1002,In=1003,gp=1004,VS=1004,Fa=1005,GS=1005,Xt=1006,qo=1007,WS=1007,sr=1008,bd=1008,Mi=1009,vp=1010,_p=1011,yp=1012,Vu=1013,rs=1014,mn=1015,Bn=1016,xp=1017,Sp=1018,eo=1020,U_=35902,D_=1021,N_=1022,wn=1023,O_=1024,F_=1025,ks=1026,Ya=1027,Gu=1028,Mp=1029,B_=1030,wp=1031,Ep=1033,Tu=33776,bu=33777,Cu=33778,Ru=33779,Cd=35840,Rd=35841,Pd=35842,Id=35843,Ld=36196,Ud=37492,Dd=37496,Nd=37808,Od=37809,Fd=37810,Bd=37811,zd=37812,kd=37813,Hd=37814,Vd=37815,Gd=37816,Wd=37817,Xd=37818,Yd=37819,qd=37820,Zd=37821,Pu=36492,jd=36494,Jd=36495,z_=36283,Kd=36284,Qd=36285,$d=36286,k_=2200,H_=2201,V_=2202,nl=2300,il=2301,Iu=2302,Us=2400,Ds=2401,rl=2402,Wu=2500,Ap=2501,XS=0,YS=1,qS=2,G_=3200,W_=3201,as=0,X_=1,Ar="",vi="srgb",Oi="srgb-linear",Xu="display-p3",wl="display-p3-linear",sl="linear",Qt="srgb",al="rec709",ol="p3",ZS=0,Ps=7680,jS=7681,JS=7682,KS=7683,QS=34055,$S=34056,eM=5386,tM=512,nM=513,iM=514,rM=515,sM=516,aM=517,oM=518,ep=519,Y_=512,q_=513,Z_=514,Tp=515,j_=516,J_=517,K_=518,Q_=519,ll=35044,lM=35048,cM=35040,uM=35045,hM=35049,fM=35041,dM=35046,pM=35050,mM=35042,gM="100",tp="300 es",ar=2e3,cl=2001;class Ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jg=1234567;const Hs=Math.PI/180,qa=180/Math.PI;function xi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function hn(r,e,t){return Math.max(e,Math.min(t,r))}function bp(r,e){return(r%e+e)%e}function vM(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function _M(r,e,t){return r!==e?(t-r)/(e-r):0}function Zo(r,e,t){return(1-t)*r+t*e}function yM(r,e,t,n){return Zo(r,e,1-Math.exp(-t*n))}function xM(r,e=1){return e-Math.abs(bp(r,e*2)-e)}function SM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function MM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function wM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function EM(r,e){return r+Math.random()*(e-r)}function AM(r){return r*(.5-Math.random())}function TM(r){r!==void 0&&(Jg=r);let e=Jg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bM(r){return r*Hs}function CM(r){return r*qa}function RM(r){return(r&r-1)===0&&r!==0}function PM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function IM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function LM(r,e,t,n,i){const s=Math.cos,o=Math.sin,c=s(t/2),u=o(t/2),h=s((e+n)/2),f=o((e+n)/2),p=s((e-n)/2),m=o((e-n)/2),g=s((n-e)/2),y=o((n-e)/2);switch(i){case"XYX":r.set(c*f,u*p,u*m,c*h);break;case"YZY":r.set(u*m,c*f,u*p,c*h);break;case"ZXZ":r.set(u*p,u*m,c*f,c*h);break;case"XZX":r.set(c*f,u*y,u*g,c*h);break;case"YXY":r.set(u*g,c*f,u*y,c*h);break;case"ZYZ":r.set(u*y,u*g,c*f,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Cp={DEG2RAD:Hs,RAD2DEG:qa,generateUUID:xi,clamp:hn,euclideanModulo:bp,mapLinear:vM,inverseLerp:_M,lerp:Zo,damp:yM,pingpong:xM,smoothstep:SM,smootherstep:MM,randInt:wM,randFloat:EM,randFloatSpread:AM,seededRandom:TM,degToRad:bM,radToDeg:CM,isPowerOfTwo:RM,ceilPowerOfTwo:PM,floorPowerOfTwo:IM,setQuaternionFromProperEuler:LM,normalize:Mt,denormalize:ei};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e,t,n,i,s,o,c,u,h){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h)}set(e,t,n,i,s,o,c,u,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=c,f[3]=t,f[4]=s,f[5]=u,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],f=n[4],p=n[7],m=n[2],g=n[5],y=n[8],S=i[0],x=i[3],_=i[6],A=i[1],E=i[4],b=i[7],O=i[2],I=i[5],D=i[8];return s[0]=o*S+c*A+u*O,s[3]=o*x+c*E+u*I,s[6]=o*_+c*b+u*D,s[1]=h*S+f*A+p*O,s[4]=h*x+f*E+p*I,s[7]=h*_+f*b+p*D,s[2]=m*S+g*A+y*O,s[5]=m*x+g*E+y*I,s[8]=m*_+g*b+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*c*h-n*s*f+n*c*u+i*s*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=f*o-c*h,m=c*u-f*s,g=h*s-o*u,y=t*p+n*m+i*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=p*S,e[1]=(i*h-f*n)*S,e[2]=(c*n-i*o)*S,e[3]=m*S,e[4]=(f*t-i*u)*S,e[5]=(i*s-c*t)*S,e[6]=g*S,e[7]=(n*u-h*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*c)+o+e,-i*h,i*u,-i*(-h*o+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Mf.makeScale(e,t)),this}rotate(e){return this.premultiply(Mf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mf=new St;function $_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const UM={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Ba(r,e){return new UM[r](e)}function ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ey(){const r=ul("canvas");return r.style.display="block",r}const Kg={};function ty(r){r in Kg||(Kg[r]=!0,console.warn(r))}const Qg=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$g=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bc={[Oi]:{transfer:sl,primaries:al,toReference:r=>r,fromReference:r=>r},[vi]:{transfer:Qt,primaries:al,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[wl]:{transfer:sl,primaries:ol,toReference:r=>r.applyMatrix3($g),fromReference:r=>r.applyMatrix3(Qg)},[Xu]:{transfer:Qt,primaries:ol,toReference:r=>r.convertSRGBToLinear().applyMatrix3($g),fromReference:r=>r.applyMatrix3(Qg).convertLinearToSRGB()}},DM=new Set([Oi,wl]),qt={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!DM.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=bc[e].toReference,i=bc[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return bc[r].primaries},getTransfer:function(r){return r===Ar?sl:bc[r].transfer}};function Ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wf(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fa;class ny{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fa===void 0&&(fa=ul("canvas")),fa.width=e.width,fa.height=e.height;const n=fa.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ga(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ga(t[n]/255)*255):t[n]=Ga(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NM=0;class Ns{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?s.push(Ef(i[o].image)):s.push(Ef(i[o]))}else s=Ef(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ef(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ny.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OM=0;class jt extends Ir{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Sn,i=Sn,s=Xt,o=sr,c=wn,u=Mi,h=jt.DEFAULT_ANISOTROPY,f=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=xi(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ns)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case el:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case el:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=ns;jt.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,i=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],f=u[4],p=u[8],m=u[1],g=u[5],y=u[9],S=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-S)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+S)<.1&&Math.abs(y+x)<.1&&Math.abs(h+g+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,b=(g+1)/2,O=(_+1)/2,I=(f+m)/4,D=(p+S)/4,N=(y+x)/4;return E>b&&E>O?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=I/n,s=D/n):b>O?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=I/i,s=N/i):O<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(O),n=D/s,i=N/s),this.set(n,i,s,t),this}let A=Math.sqrt((x-y)*(x-y)+(p-S)*(p-S)+(m-f)*(m-f));return Math.abs(A)<.001&&(A=1),this.x=(x-y)/A,this.y=(p-S)/A,this.z=(m-f)/A,this.w=Math.acos((h+g+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iy extends Ir{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ns(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends iy{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yu extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class FM extends ni{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Yu(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Rp extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=In,this.minFilter=In,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class BM extends ni{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Rp(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class ui{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,c){let u=n[i+0],h=n[i+1],f=n[i+2],p=n[i+3];const m=s[o+0],g=s[o+1],y=s[o+2],S=s[o+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p;return}if(c===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=S;return}if(p!==S||u!==m||h!==g||f!==y){let x=1-c;const _=u*m+h*g+f*y+p*S,A=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const O=Math.sqrt(E),I=Math.atan2(O,_*A);x=Math.sin(x*I)/O,c=Math.sin(c*I)/O}const b=c*A;if(u=u*x+m*b,h=h*x+g*b,f=f*x+y*b,p=p*x+S*b,x===1-c){const O=1/Math.sqrt(u*u+h*h+f*f+p*p);u*=O,h*=O,f*=O,p*=O}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,i,s,o){const c=n[i],u=n[i+1],h=n[i+2],f=n[i+3],p=s[o],m=s[o+1],g=s[o+2],y=s[o+3];return e[t]=c*y+f*p+u*g-h*m,e[t+1]=u*y+f*m+h*p-c*g,e[t+2]=h*y+f*g+c*m-u*p,e[t+3]=f*y-c*p-u*m-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,u=Math.sin,h=c(n/2),f=c(i/2),p=c(s/2),m=u(n/2),g=u(i/2),y=u(s/2);switch(o){case"XYZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"YXZ":this._x=m*f*p+h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"ZXY":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p-m*g*y;break;case"ZYX":this._x=m*f*p-h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p+m*g*y;break;case"YZX":this._x=m*f*p+h*g*y,this._y=h*g*p+m*f*y,this._z=h*f*y-m*g*p,this._w=h*f*p-m*g*y;break;case"XZY":this._x=m*f*p-h*g*y,this._y=h*g*p-m*f*y,this._z=h*f*y+m*g*p,this._w=h*f*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],c=t[5],u=t[9],h=t[2],f=t[6],p=t[10],m=n+c+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-h)*g,this._z=(o-i)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(f-u)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(u+f)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(o-i)/g,this._x=(s+h)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,c=t._x,u=t._y,h=t._z,f=t._w;return this._x=n*f+o*c+i*h-s*u,this._y=i*f+o*u+s*c-n*h,this._z=s*f+o*h+n*u-i*c,this._w=o*f-n*c-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let c=o*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),f=Math.atan2(h,c),p=Math.sin((1-t)*f)/h,m=Math.sin(t*f)/h;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ev.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ev.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,c=e.z,u=e.w,h=2*(o*i-c*n),f=2*(c*t-s*i),p=2*(s*n-o*t);return this.x=t+u*h+o*p-c*f,this.y=n+u*f+c*h-s*p,this.z=i+u*p+s*f-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,c=t.y,u=t.z;return this.x=i*u-s*c,this.y=s*o-n*u,this.z=n*c-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Af.copy(this).projectOnVector(e),this.sub(Af)}reflect(e){return this.sub(Af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Af=new F,ev=new ui;class Ln{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(s,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cc.copy(n.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),Rc.subVectors(this.max,Co),da.subVectors(e.a,Co),pa.subVectors(e.b,Co),ma.subVectors(e.c,Co),Gr.subVectors(pa,da),Wr.subVectors(ma,pa),_s.subVectors(da,ma);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-_s.z,_s.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,_s.z,0,-_s.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-_s.y,_s.x,0];return!Tf(t,da,pa,ma,Rc)||(t=[1,0,0,0,1,0,0,0,1],!Tf(t,da,pa,ma,Rc))?!1:(Pc.crossVectors(Gr,Wr),t=[Pc.x,Pc.y,Pc.z],Tf(t,da,pa,ma,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yr=[new F,new F,new F,new F,new F,new F,new F,new F],zi=new F,Cc=new Ln,da=new F,pa=new F,ma=new F,Gr=new F,Wr=new F,_s=new F,Co=new F,Rc=new F,Pc=new F,ys=new F;function Tf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ys.fromArray(r,s);const c=i.x*Math.abs(ys.x)+i.y*Math.abs(ys.y)+i.z*Math.abs(ys.z),u=e.dot(ys),h=t.dot(ys),f=n.dot(ys);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>c)return!1}return!0}const zM=new Ln,Ro=new F,bf=new F;class Un{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zM.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ro,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(bf)),this.expandByPoint(Ro.copy(e.center).sub(bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xr=new F,Cf=new F,Ic=new F,Xr=new F,Rf=new F,Lc=new F,Pf=new F;class to{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cf.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Cf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ic),c=Xr.dot(this.direction),u=-Xr.dot(Ic),h=Xr.lengthSq(),f=Math.abs(1-o*o);let p,m,g,y;if(f>0)if(p=o*u-c,m=o*c-u,y=s*f,p>=0)if(m>=-y)if(m<=y){const S=1/f;p*=S,m*=S,g=p*(p+o*m+2*c)+m*(o*p+m+2*u)+h}else m=s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;else m<=-y?(p=Math.max(0,-(-o*s+c)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(o*s+c)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=o>0?-s:s,p=Math.max(0,-(o*m+c)),g=-p*p+m*(m+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Cf).addScaledVector(Ic,m),g}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const n=xr.dot(this.direction),i=xr.dot(xr)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,c,u;const h=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,i=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,i=(e.min.x-m.x)*h),f>=0?(s=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),p>=0?(c=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(c=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,n,i,s){Rf.subVectors(t,e),Lc.subVectors(n,e),Pf.crossVectors(Rf,Lc);let o=this.direction.dot(Pf),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Xr.subVectors(this.origin,e);const u=c*this.direction.dot(Lc.crossVectors(Xr,Lc));if(u<0)return null;const h=c*this.direction.dot(Rf.cross(Xr));if(h<0||u+h>o)return null;const f=-c*Xr.dot(Pf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,i,s,o,c,u,h,f,p,m,g,y,S,x){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,u,h,f,p,m,g,y,S,x)}set(e,t,n,i,s,o,c,u,h,f,p,m,g,y,S,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=c,_[13]=u,_[2]=h,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=y,_[11]=S,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ga.setFromMatrixColumn(e,0).length(),s=1/ga.setFromMatrixColumn(e,1).length(),o=1/ga.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*f,g=o*p,y=c*f,S=c*p;t[0]=u*f,t[4]=-u*p,t[8]=h,t[1]=g+y*h,t[5]=m-S*h,t[9]=-c*u,t[2]=S-m*h,t[6]=y+g*h,t[10]=o*u}else if(e.order==="YXZ"){const m=u*f,g=u*p,y=h*f,S=h*p;t[0]=m+S*c,t[4]=y*c-g,t[8]=o*h,t[1]=o*p,t[5]=o*f,t[9]=-c,t[2]=g*c-y,t[6]=S+m*c,t[10]=o*u}else if(e.order==="ZXY"){const m=u*f,g=u*p,y=h*f,S=h*p;t[0]=m-S*c,t[4]=-o*p,t[8]=y+g*c,t[1]=g+y*c,t[5]=o*f,t[9]=S-m*c,t[2]=-o*h,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const m=o*f,g=o*p,y=c*f,S=c*p;t[0]=u*f,t[4]=y*h-g,t[8]=m*h+S,t[1]=u*p,t[5]=S*h+m,t[9]=g*h-y,t[2]=-h,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const m=o*u,g=o*h,y=c*u,S=c*h;t[0]=u*f,t[4]=S-m*p,t[8]=y*p+g,t[1]=p,t[5]=o*f,t[9]=-c*f,t[2]=-h*f,t[6]=g*p+y,t[10]=m-S*p}else if(e.order==="XZY"){const m=o*u,g=o*h,y=c*u,S=c*h;t[0]=u*f,t[4]=-p,t[8]=h*f,t[1]=m*p+S,t[5]=o*f,t[9]=g*p-y,t[2]=y*p-g,t[6]=c*f,t[10]=S*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kM,e,HM)}lookAt(e,t,n){const i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Yr.crossVectors(n,mi),Yr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Yr.crossVectors(n,mi)),Yr.normalize(),Uc.crossVectors(mi,Yr),i[0]=Yr.x,i[4]=Uc.x,i[8]=mi.x,i[1]=Yr.y,i[5]=Uc.y,i[9]=mi.y,i[2]=Yr.z,i[6]=Uc.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],f=n[1],p=n[5],m=n[9],g=n[13],y=n[2],S=n[6],x=n[10],_=n[14],A=n[3],E=n[7],b=n[11],O=n[15],I=i[0],D=i[4],N=i[8],R=i[12],C=i[1],H=i[5],q=i[9],W=i[13],Y=i[2],ie=i[6],te=i[10],Ae=i[14],X=i[3],re=i[7],K=i[11],de=i[15];return s[0]=o*I+c*C+u*Y+h*X,s[4]=o*D+c*H+u*ie+h*re,s[8]=o*N+c*q+u*te+h*K,s[12]=o*R+c*W+u*Ae+h*de,s[1]=f*I+p*C+m*Y+g*X,s[5]=f*D+p*H+m*ie+g*re,s[9]=f*N+p*q+m*te+g*K,s[13]=f*R+p*W+m*Ae+g*de,s[2]=y*I+S*C+x*Y+_*X,s[6]=y*D+S*H+x*ie+_*re,s[10]=y*N+S*q+x*te+_*K,s[14]=y*R+S*W+x*Ae+_*de,s[3]=A*I+E*C+b*Y+O*X,s[7]=A*D+E*H+b*ie+O*re,s[11]=A*N+E*q+b*te+O*K,s[15]=A*R+E*W+b*Ae+O*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],c=e[5],u=e[9],h=e[13],f=e[2],p=e[6],m=e[10],g=e[14],y=e[3],S=e[7],x=e[11],_=e[15];return y*(+s*u*p-i*h*p-s*c*m+n*h*m+i*c*g-n*u*g)+S*(+t*u*g-t*h*m+s*o*m-i*o*g+i*h*f-s*u*f)+x*(+t*h*p-t*c*g-s*o*p+n*o*g+s*c*f-n*h*f)+_*(-i*c*f-t*u*p+t*c*m+i*o*p-n*o*m+n*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],u=e[6],h=e[7],f=e[8],p=e[9],m=e[10],g=e[11],y=e[12],S=e[13],x=e[14],_=e[15],A=p*x*h-S*m*h+S*u*g-c*x*g-p*u*_+c*m*_,E=y*m*h-f*x*h-y*u*g+o*x*g+f*u*_-o*m*_,b=f*S*h-y*p*h+y*c*g-o*S*g-f*c*_+o*p*_,O=y*p*u-f*S*u-y*c*m+o*S*m+f*c*x-o*p*x,I=t*A+n*E+i*b+s*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=A*D,e[1]=(S*m*s-p*x*s-S*i*g+n*x*g+p*i*_-n*m*_)*D,e[2]=(c*x*s-S*u*s+S*i*h-n*x*h-c*i*_+n*u*_)*D,e[3]=(p*u*s-c*m*s-p*i*h+n*m*h+c*i*g-n*u*g)*D,e[4]=E*D,e[5]=(f*x*s-y*m*s+y*i*g-t*x*g-f*i*_+t*m*_)*D,e[6]=(y*u*s-o*x*s-y*i*h+t*x*h+o*i*_-t*u*_)*D,e[7]=(o*m*s-f*u*s+f*i*h-t*m*h-o*i*g+t*u*g)*D,e[8]=b*D,e[9]=(y*p*s-f*S*s-y*n*g+t*S*g+f*n*_-t*p*_)*D,e[10]=(o*S*s-y*c*s+y*n*h-t*S*h-o*n*_+t*c*_)*D,e[11]=(f*c*s-o*p*s-f*n*h+t*p*h+o*n*g-t*c*g)*D,e[12]=O*D,e[13]=(f*S*i-y*p*i+y*n*m-t*S*m-f*n*x+t*p*x)*D,e[14]=(y*c*i-o*S*i-y*n*u+t*S*u+o*n*x-t*c*x)*D,e[15]=(o*p*i-f*c*i+f*n*u-t*p*u-o*n*m+t*c*m)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,c=e.y,u=e.z,h=s*o,f=s*c;return this.set(h*o+n,h*c-i*u,h*u+i*c,0,h*c+i*u,f*c+n,f*u-i*o,0,h*u-i*c,f*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,c=t._z,u=t._w,h=s+s,f=o+o,p=c+c,m=s*h,g=s*f,y=s*p,S=o*f,x=o*p,_=c*p,A=u*h,E=u*f,b=u*p,O=n.x,I=n.y,D=n.z;return i[0]=(1-(S+_))*O,i[1]=(g+b)*O,i[2]=(y-E)*O,i[3]=0,i[4]=(g-b)*I,i[5]=(1-(m+_))*I,i[6]=(x+A)*I,i[7]=0,i[8]=(y+E)*D,i[9]=(x-A)*D,i[10]=(1-(m+S))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ga.set(i[0],i[1],i[2]).length();const o=ga.set(i[4],i[5],i[6]).length(),c=ga.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ki.copy(this);const h=1/s,f=1/o,p=1/c;return ki.elements[0]*=h,ki.elements[1]*=h,ki.elements[2]*=h,ki.elements[4]*=f,ki.elements[5]*=f,ki.elements[6]*=f,ki.elements[8]*=p,ki.elements[9]*=p,ki.elements[10]*=p,t.setFromRotationMatrix(ki),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,o,c=ar){const u=this.elements,h=2*s/(t-e),f=2*s/(n-i),p=(t+e)/(t-e),m=(n+i)/(n-i);let g,y;if(c===ar)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(c===cl)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,o,c=ar){const u=this.elements,h=1/(t-e),f=1/(n-i),p=1/(o-s),m=(t+e)*h,g=(n+i)*f;let y,S;if(c===ar)y=(o+s)*p,S=-2*p;else if(c===cl)y=s*p,S=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*f,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=S,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ga=new F,ki=new ft,kM=new F(0,0,0),HM=new F(1,1,1),Yr=new F,Uc=new F,mi=new F,tv=new ft,nv=new ui;class wi{constructor(e=0,t=0,n=0,i=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],c=i[8],u=i[1],h=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(hn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-hn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tv,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nv.setFromEuler(this),this.setFromQuaternion(nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class Vs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const iv=new F,va=new ui,Sr=new ft,Dc=new F,Po=new F,GM=new F,WM=new ui,rv=new F(1,0,0),sv=new F(0,1,0),av=new F(0,0,1),ov={type:"added"},XM={type:"removed"},_a={type:"childadded",child:null},If={type:"childremoved",child:null};class zt extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new F,t=new wi,n=new ui,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new St}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.multiply(va),this}rotateOnWorldAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.premultiply(va),this}rotateX(e){return this.rotateOnAxis(rv,e)}rotateY(e){return this.rotateOnAxis(sv,e)}rotateZ(e){return this.rotateOnAxis(av,e)}translateOnAxis(e,t){return iv.copy(e).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rv,e)}translateY(e){return this.translateOnAxis(sv,e)}translateZ(e){return this.translateOnAxis(av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dc.copy(e):Dc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(Po,Dc,this.up):Sr.lookAt(Dc,Po,this.up),this.quaternion.setFromRotationMatrix(Sr),i&&(Sr.extractRotation(i.matrixWorld),va.setFromRotationMatrix(Sr),this.quaternion.premultiply(va.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ov),_a.child=e,this.dispatchEvent(_a),_a.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XM),If.child=e,this.dispatchEvent(If),If.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ov),_a.child=e,this.dispatchEvent(_a),_a.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,GM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,WM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const c=i[s];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));i.material=c}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(s(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),y=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=i,n;function o(c){const u=[];for(const h in c){const f=c[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new F(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new F,Mr=new F,Lf=new F,wr=new F,ya=new F,xa=new F,lv=new F,Uf=new F,Df=new F,Nf=new F;class _i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Hi.subVectors(e,t),i.cross(Hi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Hi.subVectors(i,t),Mr.subVectors(n,t),Lf.subVectors(e,t);const o=Hi.dot(Hi),c=Hi.dot(Mr),u=Hi.dot(Lf),h=Mr.dot(Mr),f=Mr.dot(Lf),p=o*h-c*c;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-c*f)*m,y=(o*f-c*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,n,i,s,o,c,u){return this.getBarycoord(e,t,n,i,wr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,wr.x),u.addScaledVector(o,wr.y),u.addScaledVector(c,wr.z),u)}static isFrontFacing(e,t,n,i){return Hi.subVectors(n,t),Mr.subVectors(e,t),Hi.cross(Mr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),Hi.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,c;ya.subVectors(i,n),xa.subVectors(s,n),Uf.subVectors(e,n);const u=ya.dot(Uf),h=xa.dot(Uf);if(u<=0&&h<=0)return t.copy(n);Df.subVectors(e,i);const f=ya.dot(Df),p=xa.dot(Df);if(f>=0&&p<=f)return t.copy(i);const m=u*p-f*h;if(m<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(n).addScaledVector(ya,o);Nf.subVectors(e,s);const g=ya.dot(Nf),y=xa.dot(Nf);if(y>=0&&g<=y)return t.copy(s);const S=g*h-u*y;if(S<=0&&h>=0&&y<=0)return c=h/(h-y),t.copy(n).addScaledVector(xa,c);const x=f*y-g*p;if(x<=0&&p-f>=0&&g-y>=0)return lv.subVectors(s,i),c=(p-f)/(p-f+(g-y)),t.copy(i).addScaledVector(lv,c);const _=1/(x+S+m);return o=S*_,c=m*_,t.copy(n).addScaledVector(ya,o).addScaledVector(xa,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ry={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Of(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qt.workingColorSpace){if(e=bp(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Of(o,s,e+1/3),this.g=Of(o,s,e),this.b=Of(o,s,e-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(e,t=vi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vi){const n=ry[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=wf(e.r),this.g=wf(e.g),this.b=wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return qt.fromWorkingColorSpace(Xn.copy(this),e),Math.round(hn(Xn.r*255,0,255))*65536+Math.round(hn(Xn.g*255,0,255))*256+Math.round(hn(Xn.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Xn.copy(this),t);const n=Xn.r,i=Xn.g,s=Xn.b,o=Math.max(n,i,s),c=Math.min(n,i,s);let u,h;const f=(c+o)/2;if(c===o)u=0,h=0;else{const p=o-c;switch(h=f<=.5?p/(o+c):p/(2-o-c),o){case n:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-n)/p+2;break;case s:u=(n-i)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=vi){qt.fromWorkingColorSpace(Xn.copy(this),e);const t=Xn.r,n=Xn.g,i=Xn.b;return e!==vi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Nc);const n=Zo(qr.h,Nc.h,t),i=Zo(qr.s,Nc.s,t),s=Zo(qr.l,Nc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Ye;Ye.NAMES=ry;let YM=0;class qn extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=zs,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Nu,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Rr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Du&&(n.blendSrc=this.blendSrc),this.blendDst!==Nu&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ep&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const c in s){const u=s[c];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lr extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tr=qM();function qM(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let u=0;u<256;++u){const h=u-127;h<-27?(n[u]=0,n[u|256]=32768,i[u]=24,i[u|256]=24):h<-14?(n[u]=1024>>-h-14,n[u|256]=1024>>-h-14|32768,i[u]=-h-1,i[u|256]=-h-1):h<=15?(n[u]=h+15<<10,n[u|256]=h+15<<10|32768,i[u]=13,i[u|256]=13):h<128?(n[u]=31744,n[u|256]=64512,i[u]=24,i[u|256]=24):(n[u]=31744,n[u|256]=64512,i[u]=13,i[u|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),c=new Uint32Array(64);for(let u=1;u<1024;++u){let h=u<<13,f=0;for(;!(h&8388608);)h<<=1,f-=8388608;h&=-8388609,f+=947912704,s[u]=h|f}for(let u=1024;u<2048;++u)s[u]=939524096+(u-1024<<13);for(let u=1;u<31;++u)o[u]=u<<23;o[31]=1199570944,o[32]=2147483648;for(let u=33;u<63;++u)o[u]=2147483648+(u-32<<23);o[63]=3347054592;for(let u=1;u<64;++u)u!==32&&(c[u]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:c}}function ci(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=hn(r,-65504,65504),Tr.floatView[0]=r;const e=Tr.uint32View[0],t=e>>23&511;return Tr.baseTable[t]+((e&8388607)>>Tr.shiftTable[t])}function Wo(r){const e=r>>10;return Tr.uint32View[0]=Tr.mantissaTable[Tr.offsetTable[e]+(r&1023)]+Tr.exponentTable[e],Tr.floatView[0]}const Os={toHalfFloat:ci,fromHalfFloat:Wo},xn=new F,Oc=new ye;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ty("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oc.fromBufferAttribute(this,t),Oc.applyMatrix3(e),this.setXY(t,Oc.x,Oc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class ZM extends Zt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class jM extends Zt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class JM extends Zt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class KM extends Zt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Pp extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class QM extends Zt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Ip extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $M extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Wo(this.array[e*this.itemSize]);return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=ci(t),this}getY(e){let t=Wo(this.array[e*this.itemSize+1]);return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=ci(t),this}getZ(e){let t=Wo(this.array[e*this.itemSize+2]);return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=ci(t),this}getW(e){let t=Wo(this.array[e*this.itemSize+3]);return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=ci(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=ci(t),this.array[e+1]=ci(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=ci(t),this.array[e+1]=ci(n),this.array[e+2]=ci(i),this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=ci(t),this.array[e+1]=ci(n),this.array[e+2]=ci(i),this.array[e+3]=ci(s),this}}class Qe extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let e1=0;const Di=new ft,Ff=new zt,Sa=new F,gi=new Ln,Io=new Ln,Rn=new F;class Ct extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($_(e)?Ip:Pp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new St().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return Ff.lookAt(e),Ff.updateMatrix(),this.applyMatrix4(Ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sa).negate(),this.translate(Sa.x,Sa.y,Sa.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];Io.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(gi.min,Io.min),gi.expandByPoint(Rn),Rn.addVectors(gi.max,Io.max),gi.expandByPoint(Rn)):(gi.expandByPoint(Io.min),gi.expandByPoint(Io.max))}gi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rn));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,f=c.count;h<f;h++)Rn.fromBufferAttribute(c,h),u&&(Sa.fromBufferAttribute(e,h),Rn.add(Sa)),i=Math.max(i,n.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],u=[];for(let N=0;N<n.count;N++)c[N]=new F,u[N]=new F;const h=new F,f=new F,p=new F,m=new ye,g=new ye,y=new ye,S=new F,x=new F;function _(N,R,C){h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,R),p.fromBufferAttribute(n,C),m.fromBufferAttribute(s,N),g.fromBufferAttribute(s,R),y.fromBufferAttribute(s,C),f.sub(h),p.sub(h),g.sub(m),y.sub(m);const H=1/(g.x*y.y-y.x*g.y);isFinite(H)&&(S.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(H),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(H),c[N].add(S),c[R].add(S),c[C].add(S),u[N].add(x),u[R].add(x),u[C].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,R=A.length;N<R;++N){const C=A[N],H=C.start,q=C.count;for(let W=H,Y=H+q;W<Y;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new F,b=new F,O=new F,I=new F;function D(N){O.fromBufferAttribute(i,N),I.copy(O);const R=c[N];E.copy(R),E.sub(O.multiplyScalar(O.dot(R))).normalize(),b.crossVectors(I,R);const H=b.dot(u[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,H)}for(let N=0,R=A.length;N<R;++N){const C=A[N],H=C.start,q=C.count;for(let W=H,Y=H+q;W<Y;W+=3)D(e.getX(W+0)),D(e.getX(W+1)),D(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const i=new F,s=new F,o=new F,c=new F,u=new F,h=new F,f=new F,p=new F;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),S=e.getX(m+1),x=e.getX(m+2);i.fromBufferAttribute(t,y),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,x),f.subVectors(o,s),p.subVectors(i,s),f.cross(p),c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),c.add(f),u.add(f),h.add(f),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,g=t.count;m<g;m+=3)i.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,s),p.subVectors(i,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(c,u){const h=c.array,f=c.itemSize,p=c.normalized,m=new h.constructor(u.length*f);let g=0,y=0;for(let S=0,x=u.length;S<x;S++){c.isInterleavedBufferAttribute?g=u[S]*c.data.stride+c.offset:g=u[S]*f;for(let _=0;_<f;_++)m[y++]=h[g++]}return new Zt(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=e(m,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];f.push(g.toJSON(e.data))}f.length>0&&(i[u]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],p=s[h];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new ft,xs=new to,Fc=new Un,uv=new F,Ma=new F,wa=new F,Ea=new F,Bf=new F,Bc=new F,zc=new ye,kc=new ye,Hc=new ye,hv=new F,fv=new F,dv=new F,Vc=new F,Gc=new F;class tn extends zt{constructor(e=new Ct,t=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(s&&c){Bc.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=c[u],p=s[u];f!==0&&(Bf.fromBufferAttribute(p,e),o?Bc.addScaledVector(Bf,f):Bc.addScaledVector(Bf.sub(t),f))}t.add(Bc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(s),xs.copy(e.ray).recast(e.near),!(Fc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Fc,uv)===null||xs.origin.distanceToSquared(uv)>(e.far-e.near)**2))&&(cv.copy(s).invert(),xs.copy(e.ray).applyMatrix4(cv),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,c=s.index,u=s.attributes.position,h=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(o))for(let y=0,S=m.length;y<S;y++){const x=m[y],_=o[x.materialIndex],A=Math.max(x.start,g.start),E=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let b=A,O=E;b<O;b+=3){const I=c.getX(b),D=c.getX(b+1),N=c.getX(b+2);i=Wc(this,_,e,n,h,f,p,I,D,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let x=y,_=S;x<_;x+=3){const A=c.getX(x),E=c.getX(x+1),b=c.getX(x+2);i=Wc(this,o,e,n,h,f,p,A,E,b),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let y=0,S=m.length;y<S;y++){const x=m[y],_=o[x.materialIndex],A=Math.max(x.start,g.start),E=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let b=A,O=E;b<O;b+=3){const I=b,D=b+1,N=b+2;i=Wc(this,_,e,n,h,f,p,I,D,N),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const y=Math.max(0,g.start),S=Math.min(u.count,g.start+g.count);for(let x=y,_=S;x<_;x+=3){const A=x,E=x+1,b=x+2;i=Wc(this,o,e,n,h,f,p,A,E,b),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function t1(r,e,t,n,i,s,o,c){let u;if(e.side===ti?u=n.intersectTriangle(o,s,i,!0,c):u=n.intersectTriangle(i,s,o,e.side===Rr,c),u===null)return null;Gc.copy(c),Gc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Gc);return h<t.near||h>t.far?null:{distance:h,point:Gc.clone(),object:r}}function Wc(r,e,t,n,i,s,o,c,u,h){r.getVertexPosition(c,Ma),r.getVertexPosition(u,wa),r.getVertexPosition(h,Ea);const f=t1(r,e,t,n,Ma,wa,Ea,Vc);if(f){i&&(zc.fromBufferAttribute(i,c),kc.fromBufferAttribute(i,u),Hc.fromBufferAttribute(i,h),f.uv=_i.getInterpolation(Vc,Ma,wa,Ea,zc,kc,Hc,new ye)),s&&(zc.fromBufferAttribute(s,c),kc.fromBufferAttribute(s,u),Hc.fromBufferAttribute(s,h),f.uv1=_i.getInterpolation(Vc,Ma,wa,Ea,zc,kc,Hc,new ye)),o&&(hv.fromBufferAttribute(o,c),fv.fromBufferAttribute(o,u),dv.fromBufferAttribute(o,h),f.normal=_i.getInterpolation(Vc,Ma,wa,Ea,hv,fv,dv,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:c,b:u,c:h,normal:new F,materialIndex:0};_i.getNormal(Ma,wa,Ea,p.normal),f.face=p}return f}class Ys extends Ct{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,o,s,0),y("z","y","x",1,-1,n,t,-e,o,s,1),y("x","z","y",1,1,e,n,t,i,o,2),y("x","z","y",1,-1,e,n,-t,i,o,3),y("x","y","z",1,-1,e,t,n,i,s,4),y("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(p,2));function y(S,x,_,A,E,b,O,I,D,N,R){const C=b/D,H=O/N,q=b/2,W=O/2,Y=I/2,ie=D+1,te=N+1;let Ae=0,X=0;const re=new F;for(let K=0;K<te;K++){const de=K*H-W;for(let Re=0;Re<ie;Re++){const Be=Re*C-q;re[S]=Be*A,re[x]=de*E,re[_]=Y,h.push(re.x,re.y,re.z),re[S]=0,re[x]=0,re[_]=I>0?1:-1,f.push(re.x,re.y,re.z),p.push(Re/D),p.push(1-K/N),Ae+=1}}for(let K=0;K<N;K++)for(let de=0;de<D;de++){const Re=m+de+ie*K,Be=m+de+ie*(K+1),oe=m+(de+1)+ie*(K+1),Ee=m+(de+1)+ie*K;u.push(Re,Be,Ee),u.push(Be,oe,Ee),X+=6}c.addGroup(g,X,R),g+=X,m+=Ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $n(r){const e={};for(let t=0;t<r.length;t++){const n=Za(r[t]);for(const i in n)e[i]=n[i]}return e}function n1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sy(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qt.workingColorSpace}const Ou={clone:Za,merge:$n};var i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=r1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=n1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class El extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=ar}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new F,pv=new ye,mv=new ye;class Pn extends El{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,pv,mv),t.subVectors(mv,pv)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Aa=-90,Ta=1;class ay extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pn(Aa,Ta,e,t);i.layers=this.layers,this.add(i);const s=new Pn(Aa,Ta,e,t);s.layers=this.layers,this.add(s);const o=new Pn(Aa,Ta,e,t);o.layers=this.layers,this.add(o);const c=new Pn(Aa,Ta,e,t);c.layers=this.layers,this.add(c);const u=new Pn(Aa,Ta,e,t);u.layers=this.layers,this.add(u);const h=new Pn(Aa,Ta,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,c,u]=t;for(const h of t)this.remove(h);if(e===ar)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===cl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,u,h,f]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Al extends jt{constructor(e,t,n,i,s,o,c,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,n,i,s,o,c,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lp extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Al(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ys(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:Za(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:or});s.uniforms.tEquirect.value=t;const o=new tn(i,s),c=t.minFilter;return t.minFilter===sr&&(t.minFilter=Xt),new ay(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const zf=new F,s1=new F,a1=new St;class Qr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zf.subVectors(n,t).cross(s1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||a1.getNormalMatrix(e),i=this.coplanarPoint(zf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Un,Xc=new F;class Tl{constructor(e=new Qr,t=new Qr,n=new Qr,i=new Qr,s=new Qr,o=new Qr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ar){const n=this.planes,i=e.elements,s=i[0],o=i[1],c=i[2],u=i[3],h=i[4],f=i[5],p=i[6],m=i[7],g=i[8],y=i[9],S=i[10],x=i[11],_=i[12],A=i[13],E=i[14],b=i[15];if(n[0].setComponents(u-s,m-h,x-g,b-_).normalize(),n[1].setComponents(u+s,m+h,x+g,b+_).normalize(),n[2].setComponents(u+o,m+f,x+y,b+A).normalize(),n[3].setComponents(u-o,m-f,x-y,b-A).normalize(),n[4].setComponents(u-c,m-p,x-S,b-E).normalize(),t===ar)n[5].setComponents(u+c,m+p,x+S,b+E).normalize();else if(t===cl)n[5].setComponents(c,p,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xc.x=i.normal.x>0?e.max.x:e.min.x,Xc.y=i.normal.y>0?e.max.y:e.min.y,Xc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oy(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function o1(r){const e=new WeakMap;function t(c,u){const h=c.array,f=c.usage,p=h.byteLength,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?g=r.HALF_FLOAT:g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function n(c,u,h){const f=u.array,p=u._updateRange,m=u.updateRanges;if(r.bindBuffer(h,c),p.count===-1&&m.length===0&&r.bufferSubData(h,0,f),m.length!==0){for(let g=0,y=m.length;g<y;g++){const S=m[g];r.bufferSubData(h,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}u.clearUpdateRanges()}p.count!==-1&&(r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count),p.count=-1),u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(r.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isGLBufferAttribute){const f=e.get(c);(!f||f.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:s,update:o}}class Ur extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,f=u+1,p=e/c,m=t/u,g=[],y=[],S=[],x=[];for(let _=0;_<f;_++){const A=_*m-o;for(let E=0;E<h;E++){const b=E*p-s;y.push(b,-A,0),S.push(0,0,1),x.push(E/c),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let A=0;A<c;A++){const E=A+h*_,b=A+h*(_+1),O=A+1+h*(_+1),I=A+1+h*_;g.push(E,b,I),g.push(b,O,I)}this.setIndex(g),this.setAttribute("position",new Qe(y,3)),this.setAttribute("normal",new Qe(S,3)),this.setAttribute("uv",new Qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var l1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,I1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B1="gl_FragColor = linearToOutputTexel( gl_FragColor );",z1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,k1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ew=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ow=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_w=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ww=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ow=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ww=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:l1,alphahash_pars_fragment:c1,alphamap_fragment:u1,alphamap_pars_fragment:h1,alphatest_fragment:f1,alphatest_pars_fragment:d1,aomap_fragment:p1,aomap_pars_fragment:m1,batching_pars_vertex:g1,batching_vertex:v1,begin_vertex:_1,beginnormal_vertex:y1,bsdfs:x1,iridescence_fragment:S1,bumpmap_pars_fragment:M1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:E1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:T1,color_fragment:b1,color_pars_fragment:C1,color_pars_vertex:R1,color_vertex:P1,common:I1,cube_uv_reflection_fragment:L1,defaultnormal_vertex:U1,displacementmap_pars_vertex:D1,displacementmap_vertex:N1,emissivemap_fragment:O1,emissivemap_pars_fragment:F1,colorspace_fragment:B1,colorspace_pars_fragment:z1,envmap_fragment:k1,envmap_common_pars_fragment:H1,envmap_pars_fragment:V1,envmap_pars_vertex:G1,envmap_physical_pars_fragment:ew,envmap_vertex:W1,fog_vertex:X1,fog_pars_vertex:Y1,fog_fragment:q1,fog_pars_fragment:Z1,gradientmap_pars_fragment:j1,lightmap_pars_fragment:J1,lights_lambert_fragment:K1,lights_lambert_pars_fragment:Q1,lights_pars_begin:$1,lights_toon_fragment:tw,lights_toon_pars_fragment:nw,lights_phong_fragment:iw,lights_phong_pars_fragment:rw,lights_physical_fragment:sw,lights_physical_pars_fragment:aw,lights_fragment_begin:ow,lights_fragment_maps:lw,lights_fragment_end:cw,logdepthbuf_fragment:uw,logdepthbuf_pars_fragment:hw,logdepthbuf_pars_vertex:fw,logdepthbuf_vertex:dw,map_fragment:pw,map_pars_fragment:mw,map_particle_fragment:gw,map_particle_pars_fragment:vw,metalnessmap_fragment:_w,metalnessmap_pars_fragment:yw,morphinstance_vertex:xw,morphcolor_vertex:Sw,morphnormal_vertex:Mw,morphtarget_pars_vertex:ww,morphtarget_vertex:Ew,normal_fragment_begin:Aw,normal_fragment_maps:Tw,normal_pars_fragment:bw,normal_pars_vertex:Cw,normal_vertex:Rw,normalmap_pars_fragment:Pw,clearcoat_normal_fragment_begin:Iw,clearcoat_normal_fragment_maps:Lw,clearcoat_pars_fragment:Uw,iridescence_pars_fragment:Dw,opaque_fragment:Nw,packing:Ow,premultiplied_alpha_fragment:Fw,project_vertex:Bw,dithering_fragment:zw,dithering_pars_fragment:kw,roughnessmap_fragment:Hw,roughnessmap_pars_fragment:Vw,shadowmap_pars_fragment:Gw,shadowmap_pars_vertex:Ww,shadowmap_vertex:Xw,shadowmask_pars_fragment:Yw,skinbase_vertex:qw,skinning_pars_vertex:Zw,skinning_vertex:jw,skinnormal_vertex:Jw,specularmap_fragment:Kw,specularmap_pars_fragment:Qw,tonemapping_fragment:$w,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:aE,background_vert:oE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:hE,cube_frag:fE,depth_vert:dE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:gE,equirect_vert:vE,equirect_frag:_E,linedashed_vert:yE,linedashed_frag:xE,meshbasic_vert:SE,meshbasic_frag:ME,meshlambert_vert:wE,meshlambert_frag:EE,meshmatcap_vert:AE,meshmatcap_frag:TE,meshnormal_vert:bE,meshnormal_frag:CE,meshphong_vert:RE,meshphong_frag:PE,meshphysical_vert:IE,meshphysical_frag:LE,meshtoon_vert:UE,meshtoon_frag:DE,points_vert:NE,points_frag:OE,shadow_vert:FE,shadow_frag:BE,sprite_vert:zE,sprite_frag:kE},Fe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Wi={basic:{uniforms:$n([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:$n([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:$n([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:$n([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:$n([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:$n([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:$n([Fe.points,Fe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:$n([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:$n([Fe.common,Fe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:$n([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:$n([Fe.sprite,Fe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:$n([Fe.common,Fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:$n([Fe.lights,Fe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Wi.physical={uniforms:$n([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Yc={r:0,b:0,g:0},Ms=new wi,HE=new ft;function VE(r,e,t,n,i,s,o){const c=new Ye(0);let u=s===!0?0:1,h,f,p=null,m=0,g=null;function y(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function S(A){let E=!1;const b=y(A);b===null?_(c,u):b&&b.isColor&&(_(b,1),E=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function x(A,E){const b=y(E);b&&(b.isCubeTexture||b.mapping===$a)?(f===void 0&&(f=new tn(new Ys(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Za(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(O,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Ms.copy(E.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(Ms)),f.material.toneMapped=qt.getTransfer(b.colorSpace)!==Qt,(p!==b||m!==b.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,p=b,m=b.version,g=r.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new tn(new Ur(2,2),new zn({name:"BackgroundMaterial",uniforms:Za(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=qt.getTransfer(b.colorSpace)!==Qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||m!==b.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,p=b,m=b.version,g=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function _(A,E){A.getRGB(Yc,sy(r)),n.buffers.color.setClear(Yc.r,Yc.g,Yc.b,E,o)}return{getClearColor:function(){return c},setClearColor:function(A,E=1){c.set(A),u=E,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(A){u=A,_(c,u)},render:S,addToRenderList:x}}function GE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=m(null);let s=i,o=!1;function c(C,H,q,W,Y){let ie=!1;const te=p(W,q,H);s!==te&&(s=te,h(s.object)),ie=g(C,W,q,Y),ie&&y(C,W,q,Y),Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,b(C,H,q,W),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function u(){return r.createVertexArray()}function h(C){return r.bindVertexArray(C)}function f(C){return r.deleteVertexArray(C)}function p(C,H,q){const W=q.wireframe===!0;let Y=n[C.id];Y===void 0&&(Y={},n[C.id]=Y);let ie=Y[H.id];ie===void 0&&(ie={},Y[H.id]=ie);let te=ie[W];return te===void 0&&(te=m(u()),ie[W]=te),te}function m(C){const H=[],q=[],W=[];for(let Y=0;Y<t;Y++)H[Y]=0,q[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:W,object:C,attributes:{},index:null}}function g(C,H,q,W){const Y=s.attributes,ie=H.attributes;let te=0;const Ae=q.getAttributes();for(const X in Ae)if(Ae[X].location>=0){const K=Y[X];let de=ie[X];if(de===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),K===void 0||K.attribute!==de||de&&K.data!==de.data)return!0;te++}return s.attributesNum!==te||s.index!==W}function y(C,H,q,W){const Y={},ie=H.attributes;let te=0;const Ae=q.getAttributes();for(const X in Ae)if(Ae[X].location>=0){let K=ie[X];K===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(K=C.instanceColor));const de={};de.attribute=K,K&&K.data&&(de.data=K.data),Y[X]=de,te++}s.attributes=Y,s.attributesNum=te,s.index=W}function S(){const C=s.newAttributes;for(let H=0,q=C.length;H<q;H++)C[H]=0}function x(C){_(C,0)}function _(C,H){const q=s.newAttributes,W=s.enabledAttributes,Y=s.attributeDivisors;q[C]=1,W[C]===0&&(r.enableVertexAttribArray(C),W[C]=1),Y[C]!==H&&(r.vertexAttribDivisor(C,H),Y[C]=H)}function A(){const C=s.newAttributes,H=s.enabledAttributes;for(let q=0,W=H.length;q<W;q++)H[q]!==C[q]&&(r.disableVertexAttribArray(q),H[q]=0)}function E(C,H,q,W,Y,ie,te){te===!0?r.vertexAttribIPointer(C,H,q,Y,ie):r.vertexAttribPointer(C,H,q,W,Y,ie)}function b(C,H,q,W){S();const Y=W.attributes,ie=q.getAttributes(),te=H.defaultAttributeValues;for(const Ae in ie){const X=ie[Ae];if(X.location>=0){let re=Y[Ae];if(re===void 0&&(Ae==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),Ae==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),re!==void 0){const K=re.normalized,de=re.itemSize,Re=e.get(re);if(Re===void 0)continue;const Be=Re.buffer,oe=Re.type,Ee=Re.bytesPerElement,Te=oe===r.INT||oe===r.UNSIGNED_INT||re.gpuType===Vu;if(re.isInterleavedBufferAttribute){const be=re.data,ot=be.stride,gt=re.offset;if(be.isInstancedInterleavedBuffer){for(let $=0;$<X.locationSize;$++)_(X.location+$,be.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let $=0;$<X.locationSize;$++)x(X.location+$);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let $=0;$<X.locationSize;$++)E(X.location+$,de/X.locationSize,oe,K,ot*Ee,(gt+de/X.locationSize*$)*Ee,Te)}else{if(re.isInstancedBufferAttribute){for(let be=0;be<X.locationSize;be++)_(X.location+be,re.meshPerAttribute);C.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let be=0;be<X.locationSize;be++)x(X.location+be);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let be=0;be<X.locationSize;be++)E(X.location+be,de/X.locationSize,oe,K,de*Ee,de/X.locationSize*be*Ee,Te)}}else if(te!==void 0){const K=te[Ae];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(X.location,K);break;case 3:r.vertexAttrib3fv(X.location,K);break;case 4:r.vertexAttrib4fv(X.location,K);break;default:r.vertexAttrib1fv(X.location,K)}}}}A()}function O(){N();for(const C in n){const H=n[C];for(const q in H){const W=H[q];for(const Y in W)f(W[Y].object),delete W[Y];delete H[q]}delete n[C]}}function I(C){if(n[C.id]===void 0)return;const H=n[C.id];for(const q in H){const W=H[q];for(const Y in W)f(W[Y].object),delete W[Y];delete H[q]}delete n[C.id]}function D(C){for(const H in n){const q=n[H];if(q[C.id]===void 0)continue;const W=q[C.id];for(const Y in W)f(W[Y].object),delete W[Y];delete q[C.id]}}function N(){R(),o=!0,s!==i&&(s=i,h(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:N,resetDefaultState:R,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:x,disableUnusedAttributes:A}}function WE(r,e,t){let n;function i(h){n=h}function s(h,f){r.drawArrays(n,h,f),t.update(f,n,1)}function o(h,f,p){p!==0&&(r.drawArraysInstanced(n,h,f,p),t.update(f,n,p))}function c(h,f,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],f[g]);else{m.multiDrawArraysWEBGL(n,h,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];t.update(g,n,1)}}function u(h,f,p,m){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h.length;y++)o(h[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,m,0,p);let y=0;for(let S=0;S<p;S++)y+=f[S];for(let S=0;S<m.length;S++)t.update(y,n,m[S])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function XE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==wn&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const D=I===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Mi&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==mn&&!D)}function u(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=u(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const p=t.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:_,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:b,maxSamples:O}}function YE(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Qr,c=new St,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||i;return i=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=f(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,S=p.clipIntersection,x=p.clipShadows,_=r.get(p);if(!i||y===null||y.length===0||s&&!x)s?f(null):h();else{const A=s?0:n,E=A*4;let b=_.clippingState||null;u.value=b,b=f(y,m,E,g);for(let O=0;O!==E;++O)b[O]=t[O];_.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,m,g,y){const S=p!==null?p.length:0;let x=null;if(S!==0){if(x=u.value,y!==!0||x===null){const _=g+S*4,A=m.matrixWorldInverse;c.getNormalMatrix(A),(x===null||x.length<_)&&(x=new Float32Array(_));for(let E=0,b=g;E!==S;++E,b+=4)o.copy(p[E]).applyMatrix4(A,c),o.normal.toArray(x,b),x[b+3]=o.constant}u.value=x,u.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function qE(r){let e=new WeakMap;function t(o,c){return c===Xa?o.mapping=ur:c===$o&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===Xa||c===$o)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new Lp(u.height);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const c=o.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class no extends El{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,c-=f*this.view.offsetY,u=c-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const za=4,gv=[.125,.215,.35,.446,.526,.582],Ls=20,kf=new no,vv=new Ye;let Hf=null,Vf=0,Gf=0,Wf=!1;const Is=(1+Math.sqrt(5))/2,ba=1/Is,_v=[new F(-Is,ba,0),new F(Is,ba,0),new F(-ba,0,Is),new F(ba,0,Is),new F(0,Is,-ba),new F(0,Is,ba),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hf,Vf,Gf),this._renderer.xr.enabled=Wf,e.scissorTest=!1,qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),Gf=this._renderer.getActiveMipmapLevel(),Wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Bn,format:wn,colorSpace:Oi,depthBuffer:!1},i=yv(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yv(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZE(s)),this._blurMaterial=jE(s,e,t)}return i}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,kf)}_sceneToCubeUV(e,t,n,i){const c=new Pn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(vv),f.toneMapping=lr,f.autoClear=!1;const g=new Lr({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),y=new tn(new Ys,g);let S=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,S=!0):(g.color.copy(vv),S=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(c.up.set(0,u[_],0),c.lookAt(h[_],0,0)):A===1?(c.up.set(0,0,u[_]),c.lookAt(0,h[_],0)):(c.up.set(0,u[_],0),c.lookAt(0,0,h[_]));const E=this._cubeSize;qc(i,A*E,_>2?E:0,E,E),f.setRenderTarget(i),S&&f.render(y,c),f.render(e,c)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ur||e.mapping===is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;qc(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,kf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=_v[(i-s-1)%_v.length];this._blur(e,s-1,s,o,c)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,c){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new tn(this._lodPlanes[i],h),m=h.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ls-1),S=s/y,x=isFinite(s)?1+Math.floor(f*S):Ls;x>Ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ls}`);const _=[];let A=0;for(let D=0;D<Ls;++D){const N=D/S,R=Math.exp(-N*N/2);_.push(R),D===0?A+=R:D<x&&(A+=2*R)}for(let D=0;D<_.length;D++)_[D]=_[D]/A;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=o==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:E}=this;m.dTheta.value=y,m.mipInt.value=E-n;const b=this._sizeLods[i],O=3*b*(i>E-za?i-E+za:0),I=4*(this._cubeSize-b);qc(t,O,I,3*b,2*b),u.setRenderTarget(t),u.render(p,kf)}}function ZE(r){const e=[],t=[],n=[];let i=r;const s=r-za+1+gv.length;for(let o=0;o<s;o++){const c=Math.pow(2,i);t.push(c);let u=1/c;o>r-za?u=gv[o-r+za-1]:o===0&&(u=0),n.push(u);const h=1/(c-2),f=-h,p=1+h,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,y=6,S=3,x=2,_=1,A=new Float32Array(S*y*g),E=new Float32Array(x*y*g),b=new Float32Array(_*y*g);for(let I=0;I<g;I++){const D=I%3*2/3-1,N=I>2?0:-1,R=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];A.set(R,S*y*I),E.set(m,x*y*I);const C=[I,I,I,I,I,I];b.set(C,_*y*I)}const O=new Ct;O.setAttribute("position",new Zt(A,S)),O.setAttribute("uv",new Zt(E,x)),O.setAttribute("faceIndex",new Zt(b,_)),e.push(O),i>za&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yv(r,e,t){const n=new ni(r,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qc(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jE(r,e,t){const n=new Float32Array(Ls),i=new F(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function xv(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Sv(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JE(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Xa||u===$o,f=u===ur||u===is;if(h||f){let p=e.get(c);const m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return t===null&&(t=new np(r)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),p.texture;if(p!==void 0)return p.texture;{const g=c.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new np(r)),p=h?t.fromEquirectangular(c):t.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,e.set(c,p),c.addEventListener("dispose",s),p.texture):null}}}return c}function i(c){let u=0;const h=6;for(let f=0;f<h;f++)c[f]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function KE(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function QE(r,e,t,n){const i={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const S=m.morphAttributes[y];for(let x=0,_=S.length;x<_;x++)e.remove(S[x])}m.removeEventListener("dispose",o),delete i[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(p,m){return i[m.id]===!0||(m.addEventListener("dispose",o),i[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const S=g[y];for(let x=0,_=S.length;x<_;x++)e.update(S[x],r.ARRAY_BUFFER)}}function h(p){const m=[],g=p.index,y=p.attributes.position;let S=0;if(g!==null){const A=g.array;S=g.version;for(let E=0,b=A.length;E<b;E+=3){const O=A[E+0],I=A[E+1],D=A[E+2];m.push(O,I,I,D,D,O)}}else if(y!==void 0){const A=y.array;S=y.version;for(let E=0,b=A.length/3-1;E<b;E+=3){const O=E+0,I=E+1,D=E+2;m.push(O,I,I,D,D,O)}}else return;const x=new($_(m)?Ip:Pp)(m,1);x.version=S;const _=s.get(p);_&&e.remove(_),s.set(p,x)}function f(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:f}}function $E(r,e,t){let n;function i(m){n=m}let s,o;function c(m){s=m.type,o=m.bytesPerElement}function u(m,g){r.drawElements(n,g,s,m*o),t.update(g,n,1)}function h(m,g,y){y!==0&&(r.drawElementsInstanced(n,g,s,m*o,y),t.update(g,n,y))}function f(m,g,y){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y;x++)this.render(m[x]/o,g[x]);else{S.multiDrawElementsWEBGL(n,g,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];t.update(x,n,1)}}function p(m,g,y,S){if(y===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)h(m[_]/o,g[_],S[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,S,0,y);let _=0;for(let A=0;A<y;A++)_+=g[A];for(let A=0;A<S.length;A++)t.update(_,n,S[A])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function eA(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=c*(s/3);break;case r.LINES:t.lines+=c*(s/2);break;case r.LINE_STRIP:t.lines+=c*(s-1);break;case r.LINE_LOOP:t.lines+=c*s;break;case r.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tA(r,e,t){const n=new WeakMap,i=new Lt;function s(o,c,u){const h=o.morphTargetInfluences,f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=f!==void 0?f.length:0;let m=n.get(c);if(m===void 0||m.count!==p){let R=function(){D.dispose(),n.delete(c),c.removeEventListener("dispose",R)};m!==void 0&&m.texture.dispose();const g=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let E=0;g===!0&&(E=1),y===!0&&(E=2),S===!0&&(E=3);let b=c.attributes.position.count*E,O=1;b>e.maxTextureSize&&(O=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const I=new Float32Array(b*O*4*p),D=new Yu(I,b,O,p);D.type=mn,D.needsUpdate=!0;const N=E*4;for(let C=0;C<p;C++){const H=x[C],q=_[C],W=A[C],Y=b*O*4*C;for(let ie=0;ie<H.count;ie++){const te=ie*N;g===!0&&(i.fromBufferAttribute(H,ie),I[Y+te+0]=i.x,I[Y+te+1]=i.y,I[Y+te+2]=i.z,I[Y+te+3]=0),y===!0&&(i.fromBufferAttribute(q,ie),I[Y+te+4]=i.x,I[Y+te+5]=i.y,I[Y+te+6]=i.z,I[Y+te+7]=0),S===!0&&(i.fromBufferAttribute(W,ie),I[Y+te+8]=i.x,I[Y+te+9]=i.y,I[Y+te+10]=i.z,I[Y+te+11]=W.itemSize===4?i.w:1)}}m={count:p,texture:D,size:new ye(b,O)},n.set(c,m),c.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let S=0;S<h.length;S++)g+=h[S];const y=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:s}}function nA(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,f=u.geometry,p=e.get(u,f);if(i.get(p)!==h&&(e.update(p),i.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;i.get(m)!==h&&(m.update(),i.set(m,h))}return p}function o(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}class Dp extends jt{constructor(e,t,n,i,s,o,c,u,h,f){if(f=f!==void 0?f:ks,f!==ks&&f!==Ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ks&&(n=rs),n===void 0&&f===Ya&&(n=eo),super(null,i,s,o,c,u,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:In,this.minFilter=u!==void 0?u:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ly=new jt,cy=new Dp(1,1);cy.compareFunction=Tp;const uy=new Yu,hy=new Rp,fy=new Al,Mv=[],wv=[],Ev=new Float32Array(16),Av=new Float32Array(9),Tv=new Float32Array(4);function io(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Mv[i];if(s===void 0&&(s=new Float32Array(i),Mv[i]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,r[o].toArray(s,c)}return s}function En(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function An(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qu(r,e){let t=wv[e];t===void 0&&(t=new Int32Array(e),wv[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function iA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;r.uniform2fv(this.addr,e),An(t,e)}}function sA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;r.uniform3fv(this.addr,e),An(t,e)}}function aA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;r.uniform4fv(this.addr,e),An(t,e)}}function oA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(En(t,n))return;Tv.set(n),r.uniformMatrix2fv(this.addr,!1,Tv),An(t,n)}}function lA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(En(t,n))return;Av.set(n),r.uniformMatrix3fv(this.addr,!1,Av),An(t,n)}}function cA(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(En(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(En(t,n))return;Ev.set(n),r.uniformMatrix4fv(this.addr,!1,Ev),An(t,n)}}function uA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;r.uniform2iv(this.addr,e),An(t,e)}}function fA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;r.uniform3iv(this.addr,e),An(t,e)}}function dA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;r.uniform4iv(this.addr,e),An(t,e)}}function pA(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;r.uniform2uiv(this.addr,e),An(t,e)}}function gA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;r.uniform3uiv(this.addr,e),An(t,e)}}function vA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;r.uniform4uiv(this.addr,e),An(t,e)}}function _A(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?cy:ly;t.setTexture2D(e||s,i)}function yA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hy,i)}function xA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fy,i)}function SA(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uy,i)}function MA(r){switch(r){case 5126:return iA;case 35664:return rA;case 35665:return sA;case 35666:return aA;case 35674:return oA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return hA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}function wA(r,e){r.uniform1fv(this.addr,e)}function EA(r,e){const t=io(e,this.size,2);r.uniform2fv(this.addr,t)}function AA(r,e){const t=io(e,this.size,3);r.uniform3fv(this.addr,t)}function TA(r,e){const t=io(e,this.size,4);r.uniform4fv(this.addr,t)}function bA(r,e){const t=io(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function CA(r,e){const t=io(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function RA(r,e){const t=io(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function PA(r,e){r.uniform1iv(this.addr,e)}function IA(r,e){r.uniform2iv(this.addr,e)}function LA(r,e){r.uniform3iv(this.addr,e)}function UA(r,e){r.uniform4iv(this.addr,e)}function DA(r,e){r.uniform1uiv(this.addr,e)}function NA(r,e){r.uniform2uiv(this.addr,e)}function OA(r,e){r.uniform3uiv(this.addr,e)}function FA(r,e){r.uniform4uiv(this.addr,e)}function BA(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);En(n,s)||(r.uniform1iv(this.addr,s),An(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ly,s[o])}function zA(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);En(n,s)||(r.uniform1iv(this.addr,s),An(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hy,s[o])}function kA(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);En(n,s)||(r.uniform1iv(this.addr,s),An(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||fy,s[o])}function HA(r,e,t){const n=this.cache,i=e.length,s=qu(t,i);En(n,s)||(r.uniform1iv(this.addr,s),An(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||uy,s[o])}function VA(r){switch(r){case 5126:return wA;case 35664:return EA;case 35665:return AA;case 35666:return TA;case 35674:return bA;case 35675:return CA;case 35676:return RA;case 5124:case 35670:return PA;case 35667:case 35671:return IA;case 35668:case 35672:return LA;case 35669:case 35673:return UA;case 5125:return DA;case 36294:return NA;case 36295:return OA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return HA}}class GA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=MA(t.type)}}class WA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VA(t.type)}}class XA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const c=i[s];c.setValue(e,t[c.id],n)}}}const Xf=/(\w+)(\])?(\[|\.)?/g;function bv(r,e){r.seq.push(e),r.map[e.id]=e}function YA(r,e,t){const n=r.name,i=n.length;for(Xf.lastIndex=0;;){const s=Xf.exec(n),o=Xf.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===i){bv(t,h===void 0?new GA(c,r,e):new WA(c,r,e));break}else{let p=t.map[c];p===void 0&&(p=new XA(c),bv(t,p)),t=p}}}class Lu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);YA(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Cv(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qA=37297;let ZA=0;function jA(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}function JA(r){const e=qt.getPrimaries(qt.workingColorSpace),t=qt.getPrimaries(r);let n;switch(e===t?n="":e===ol&&t===al?n="LinearDisplayP3ToLinearSRGB":e===al&&t===ol&&(n="LinearSRGBToLinearDisplayP3"),r){case Oi:case wl:return[n,"LinearTransferOETF"];case vi:case Xu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Rv(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+jA(r.getShaderSource(e),o)}else return i}function KA(r,e){const t=JA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function QA(r,e){let t;switch(e){case T_:t="Linear";break;case b_:t="Reinhard";break;case C_:t="OptimizedCineon";break;case mp:t="ACESFilmic";break;case P_:t="AgX";break;case I_:t="Neutral";break;case R_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $A(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function eT(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tT(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let c=1;s.type===r.FLOAT_MAT2&&(c=2),s.type===r.FLOAT_MAT3&&(c=3),s.type===r.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:c}}return t}function Xo(r){return r!==""}function Pv(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(r){return r.replace(nT,rT)}const iT=new Map;function rT(r,e){let t=wt[e];if(t===void 0){const n=iT.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ip(t)}const sT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(r){return r.replace(sT,aT)}function aT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Yo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function lT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ur:case is:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function uT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ml:e="ENVMAP_BLENDING_MULTIPLY";break;case E_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function hT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fT(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=oT(t),h=lT(t),f=cT(t),p=uT(t),m=hT(t),g=$A(t),y=eT(s),S=i.createProgram();let x,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(x=[Uv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[Uv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?wt.tonemapping_pars_fragment:"",t.toneMapping!==lr?QA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,KA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=ip(o),o=Pv(o,t),o=Iv(o,t),c=ip(c),c=Pv(c,t),c=Iv(c,t),o=Lv(o),c=Lv(c),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=A+x+o,b=A+_+c,O=Cv(i,i.VERTEX_SHADER,E),I=Cv(i,i.FRAGMENT_SHADER,b);i.attachShader(S,O),i.attachShader(S,I),t.index0AttributeName!==void 0?i.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function D(H){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(S).trim(),W=i.getShaderInfoLog(O).trim(),Y=i.getShaderInfoLog(I).trim();let ie=!0,te=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(ie=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,S,O,I);else{const Ae=Rv(i,O,"vertex"),X=Rv(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+Ae+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||Y==="")&&(te=!1);te&&(H.diagnostics={runnable:ie,programLog:q,vertexShader:{log:W,prefix:x},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(O),i.deleteShader(I),N=new Lu(i,S),R=tT(i,S)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let R;this.getAttributes=function(){return R===void 0&&D(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(S,qA)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZA++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=O,this.fragmentShader=I,this}let dT=0;class pT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mT(e),t.set(e,n)),n}}class mT{constructor(e){this.id=dT++,this.code=e,this.usedTimes=0}}function gT(r,e,t,n,i,s,o){const c=new Vs,u=new pT,h=new Set,f=[],p=i.logarithmicDepthBuffer,m=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(R){return h.add(R),R===0?"uv":`uv${R}`}function x(R,C,H,q,W){const Y=q.fog,ie=W.geometry,te=R.isMeshStandardMaterial?q.environment:null,Ae=(R.isMeshStandardMaterial?t:e).get(R.envMap||te),X=Ae&&Ae.mapping===$a?Ae.image.height:null,re=y[R.type];R.precision!==null&&(g=i.getMaxPrecision(R.precision),g!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));const K=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,de=K!==void 0?K.length:0;let Re=0;ie.morphAttributes.position!==void 0&&(Re=1),ie.morphAttributes.normal!==void 0&&(Re=2),ie.morphAttributes.color!==void 0&&(Re=3);let Be,oe,Ee,Te;if(re){const Ut=Wi[re];Be=Ut.vertexShader,oe=Ut.fragmentShader}else Be=R.vertexShader,oe=R.fragmentShader,u.update(R),Ee=u.getVertexShaderID(R),Te=u.getFragmentShaderID(R);const be=r.getRenderTarget(),ot=W.isInstancedMesh===!0,gt=W.isBatchedMesh===!0,$=!!R.map,dt=!!R.matcap,pe=!!Ae,Se=!!R.aoMap,_e=!!R.lightMap,Le=!!R.bumpMap,Ce=!!R.normalMap,qe=!!R.displacementMap,rt=!!R.emissiveMap,G=!!R.metalnessMap,U=!!R.roughnessMap,se=R.anisotropy>0,ve=R.clearcoat>0,we=R.dispersion>0,xe=R.iridescence>0,$e=R.sheen>0,ze=R.transmission>0,Ne=se&&!!R.anisotropyMap,pt=ve&&!!R.clearcoatMap,Ie=ve&&!!R.clearcoatNormalMap,et=ve&&!!R.clearcoatRoughnessMap,Et=xe&&!!R.iridescenceMap,lt=xe&&!!R.iridescenceThicknessMap,We=$e&&!!R.sheenColorMap,st=$e&&!!R.sheenRoughnessMap,At=!!R.specularMap,Ht=!!R.specularColorMap,at=!!R.specularIntensityMap,Z=ze&&!!R.transmissionMap,Me=ze&&!!R.thicknessMap,J=!!R.gradientMap,De=!!R.alphaMap,Xe=R.alphaTest>0,Pt=!!R.alphaHash,Vt=!!R.extensions;let Jt=lr;R.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Jt=r.toneMapping);const gn={shaderID:re,shaderType:R.type,shaderName:R.name,vertexShader:Be,fragmentShader:oe,defines:R.defines,customVertexShaderID:Ee,customFragmentShaderID:Te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:gt,instancing:ot,instancingColor:ot&&W.instanceColor!==null,instancingMorph:ot&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:be===null?r.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Oi,alphaToCoverage:!!R.alphaToCoverage,map:$,matcap:dt,envMap:pe,envMapMode:pe&&Ae.mapping,envMapCubeUVHeight:X,aoMap:Se,lightMap:_e,bumpMap:Le,normalMap:Ce,displacementMap:m&&qe,emissiveMap:rt,normalMapObjectSpace:Ce&&R.normalMapType===X_,normalMapTangentSpace:Ce&&R.normalMapType===as,metalnessMap:G,roughnessMap:U,anisotropy:se,anisotropyMap:Ne,clearcoat:ve,clearcoatMap:pt,clearcoatNormalMap:Ie,clearcoatRoughnessMap:et,dispersion:we,iridescence:xe,iridescenceMap:Et,iridescenceThicknessMap:lt,sheen:$e,sheenColorMap:We,sheenRoughnessMap:st,specularMap:At,specularColorMap:Ht,specularIntensityMap:at,transmission:ze,transmissionMap:Z,thicknessMap:Me,gradientMap:J,opaque:R.transparent===!1&&R.blending===zs&&R.alphaToCoverage===!1,alphaMap:De,alphaTest:Xe,alphaHash:Pt,combine:R.combine,mapUv:$&&S(R.map.channel),aoMapUv:Se&&S(R.aoMap.channel),lightMapUv:_e&&S(R.lightMap.channel),bumpMapUv:Le&&S(R.bumpMap.channel),normalMapUv:Ce&&S(R.normalMap.channel),displacementMapUv:qe&&S(R.displacementMap.channel),emissiveMapUv:rt&&S(R.emissiveMap.channel),metalnessMapUv:G&&S(R.metalnessMap.channel),roughnessMapUv:U&&S(R.roughnessMap.channel),anisotropyMapUv:Ne&&S(R.anisotropyMap.channel),clearcoatMapUv:pt&&S(R.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&S(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&S(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&S(R.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&S(R.iridescenceThicknessMap.channel),sheenColorMapUv:We&&S(R.sheenColorMap.channel),sheenRoughnessMapUv:st&&S(R.sheenRoughnessMap.channel),specularMapUv:At&&S(R.specularMap.channel),specularColorMapUv:Ht&&S(R.specularColorMap.channel),specularIntensityMapUv:at&&S(R.specularIntensityMap.channel),transmissionMapUv:Z&&S(R.transmissionMap.channel),thicknessMapUv:Me&&S(R.thicknessMap.channel),alphaMapUv:De&&S(R.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ce||se),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ie.attributes.uv&&($||De),fog:!!Y,useFog:R.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:W.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Jt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:$&&R.map.isVideoTexture===!0&&qt.getTransfer(R.map.colorSpace)===Qt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Xi,flipSided:R.side===ti,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Vt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Vt&&R.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return gn.vertexUv1s=h.has(1),gn.vertexUv2s=h.has(2),gn.vertexUv3s=h.has(3),h.clear(),gn}function _(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)C.push(H),C.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(A(C,R),E(C,R),C.push(r.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function A(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function E(R,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),R.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.skinning&&c.enable(4),C.morphTargets&&c.enable(5),C.morphNormals&&c.enable(6),C.morphColors&&c.enable(7),C.premultipliedAlpha&&c.enable(8),C.shadowMapEnabled&&c.enable(9),C.useLegacyLights&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.alphaToCoverage&&c.enable(20),R.push(c.mask)}function b(R){const C=y[R.type];let H;if(C){const q=Wi[C];H=Ou.clone(q.uniforms)}else H=R.uniforms;return H}function O(R,C){let H;for(let q=0,W=f.length;q<W;q++){const Y=f[q];if(Y.cacheKey===C){H=Y,++H.usedTimes;break}}return H===void 0&&(H=new fT(r,C,R,s),f.push(H)),H}function I(R){if(--R.usedTimes===0){const C=f.indexOf(R);f[C]=f[f.length-1],f.pop(),R.destroy()}}function D(R){u.remove(R)}function N(){u.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:b,acquireProgram:O,releaseProgram:I,releaseShaderCache:D,programs:f,dispose:N}}function vT(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,c){r.get(s)[o]=c}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _T(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Dv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Nv(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(p,m,g,y,S,x){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:S,group:x},r[e]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=S,_.group=x),e++,_}function c(p,m,g,y,S,x){const _=o(p,m,g,y,S,x);g.transmission>0?n.push(_):g.transparent===!0?i.push(_):t.push(_)}function u(p,m,g,y,S,x){const _=o(p,m,g,y,S,x);g.transmission>0?n.unshift(_):g.transparent===!0?i.unshift(_):t.unshift(_)}function h(p,m){t.length>1&&t.sort(p||_T),n.length>1&&n.sort(m||Dv),i.length>1&&i.sort(m||Dv)}function f(){for(let p=e,m=r.length;p<m;p++){const g=r[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:u,finish:f,sort:h}}function yT(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Nv,r.set(n,[o])):i>=s.length?(o=new Nv,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function xT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ye};break;case"SpotLight":t={position:new F,direction:new F,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function ST(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let MT=0;function wT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ET(r){const e=new xT,t=ST(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new F);const i=new F,s=new ft,o=new ft;function c(h,f){let p=0,m=0,g=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let y=0,S=0,x=0,_=0,A=0,E=0,b=0,O=0,I=0,D=0,N=0;h.sort(wT);const R=f===!0?Math.PI:1;for(let H=0,q=h.length;H<q;H++){const W=h[H],Y=W.color,ie=W.intensity,te=W.distance,Ae=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)p+=Y.r*ie*R,m+=Y.g*ie*R,g+=Y.b*ie*R;else if(W.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(W.sh.coefficients[X],ie);N++}else if(W.isDirectionalLight){const X=e.get(W);if(X.color.copy(W.color).multiplyScalar(W.intensity*R),W.castShadow){const re=W.shadow,K=t.get(W);K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,n.directionalShadow[y]=K,n.directionalShadowMap[y]=Ae,n.directionalShadowMatrix[y]=W.shadow.matrix,E++}n.directional[y]=X,y++}else if(W.isSpotLight){const X=e.get(W);X.position.setFromMatrixPosition(W.matrixWorld),X.color.copy(Y).multiplyScalar(ie*R),X.distance=te,X.coneCos=Math.cos(W.angle),X.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),X.decay=W.decay,n.spot[x]=X;const re=W.shadow;if(W.map&&(n.spotLightMap[I]=W.map,I++,re.updateMatrices(W),W.castShadow&&D++),n.spotLightMatrix[x]=re.matrix,W.castShadow){const K=t.get(W);K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=Ae,O++}x++}else if(W.isRectAreaLight){const X=e.get(W);X.color.copy(Y).multiplyScalar(ie),X.halfWidth.set(W.width*.5,0,0),X.halfHeight.set(0,W.height*.5,0),n.rectArea[_]=X,_++}else if(W.isPointLight){const X=e.get(W);if(X.color.copy(W.color).multiplyScalar(W.intensity*R),X.distance=W.distance,X.decay=W.decay,W.castShadow){const re=W.shadow,K=t.get(W);K.shadowBias=re.bias,K.shadowNormalBias=re.normalBias,K.shadowRadius=re.radius,K.shadowMapSize=re.mapSize,K.shadowCameraNear=re.camera.near,K.shadowCameraFar=re.camera.far,n.pointShadow[S]=K,n.pointShadowMap[S]=Ae,n.pointShadowMatrix[S]=W.shadow.matrix,b++}n.point[S]=X,S++}else if(W.isHemisphereLight){const X=e.get(W);X.skyColor.copy(W.color).multiplyScalar(ie*R),X.groundColor.copy(W.groundColor).multiplyScalar(ie*R),n.hemi[A]=X,A++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const C=n.hash;(C.directionalLength!==y||C.pointLength!==S||C.spotLength!==x||C.rectAreaLength!==_||C.hemiLength!==A||C.numDirectionalShadows!==E||C.numPointShadows!==b||C.numSpotShadows!==O||C.numSpotMaps!==I||C.numLightProbes!==N)&&(n.directional.length=y,n.spot.length=x,n.rectArea.length=_,n.point.length=S,n.hemi.length=A,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=O,n.spotShadowMap.length=O,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=O+I-D,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=N,C.directionalLength=y,C.pointLength=S,C.spotLength=x,C.rectAreaLength=_,C.hemiLength=A,C.numDirectionalShadows=E,C.numPointShadows=b,C.numSpotShadows=O,C.numSpotMaps=I,C.numLightProbes=N,n.version=MT++)}function u(h,f){let p=0,m=0,g=0,y=0,S=0;const x=f.matrixWorldInverse;for(let _=0,A=h.length;_<A;_++){const E=h[_];if(E.isDirectionalLight){const b=n.directional[p];b.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),p++}else if(E.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(x),g++}else if(E.isRectAreaLight){const b=n.rectArea[y];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),o.identity(),s.copy(E.matrixWorld),s.premultiply(x),o.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){const b=n.point[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(x),m++}else if(E.isHemisphereLight){const b=n.hemi[S];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(x),S++}}}return{setup:c,setupView:u,state:n}}function Ov(r){const e=new ET(r),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function c(f){e.setup(t,f)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o}}function AT(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let c;return o===void 0?(c=new Ov(r),e.set(i,[c])):s>=o.length?(c=new Ov(r),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Zu extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Np extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function CT(r,e,t){let n=new Tl;const i=new ye,s=new ye,o=new Lt,c=new Zu({depthPacking:W_}),u=new Np,h={},f=t.maxTextureSize,p={[Rr]:ti,[ti]:Rr,[Xi]:Xi},m=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:TT,fragmentShader:bT}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new Ct;y.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new tn(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let _=this.type;this.render=function(I,D,N){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const R=r.getRenderTarget(),C=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),q=r.state;q.setBlending(or),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=_!==Gi&&this.type===Gi,Y=_===Gi&&this.type!==Gi;for(let ie=0,te=I.length;ie<te;ie++){const Ae=I[ie],X=Ae.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Ae,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const re=X.getFrameExtents();if(i.multiply(re),s.copy(X.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/re.x),i.x=s.x*re.x,X.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/re.y),i.y=s.y*re.y,X.mapSize.y=s.y)),X.map===null||W===!0||Y===!0){const de=this.type!==Gi?{minFilter:In,magFilter:In}:{};X.map!==null&&X.map.dispose(),X.map=new ni(i.x,i.y,de),X.map.texture.name=Ae.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const K=X.getViewportCount();for(let de=0;de<K;de++){const Re=X.getViewport(de);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),q.viewport(o),X.updateMatrices(Ae,de),n=X.getFrustum(),b(D,N,X.camera,Ae,this.type)}X.isPointLightShadow!==!0&&this.type===Gi&&A(X,N),X.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(R,C,H)};function A(I,D){const N=e.update(S);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,g.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ni(i.x,i.y)),m.uniforms.shadow_pass.value=I.map.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(D,null,N,m,S,null),g.uniforms.shadow_pass.value=I.mapPass.texture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(D,null,N,g,S,null)}function E(I,D,N,R){let C=null;const H=N.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)C=H;else if(C=N.isPointLight===!0?u:c,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const q=C.uuid,W=D.uuid;let Y=h[q];Y===void 0&&(Y={},h[q]=Y);let ie=Y[W];ie===void 0&&(ie=C.clone(),Y[W]=ie,D.addEventListener("dispose",O)),C=ie}if(C.visible=D.visible,C.wireframe=D.wireframe,R===Gi?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:p[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,N.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=r.properties.get(C);q.light=N}return C}function b(I,D,N,R,C){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Gi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,I.matrixWorld);const W=e.update(I),Y=I.material;if(Array.isArray(Y)){const ie=W.groups;for(let te=0,Ae=ie.length;te<Ae;te++){const X=ie[te],re=Y[X.materialIndex];if(re&&re.visible){const K=E(I,re,R,C);I.onBeforeShadow(r,I,D,N,W,K,X),r.renderBufferDirect(N,null,W,K,I,X),I.onAfterShadow(r,I,D,N,W,K,X)}}}else if(Y.visible){const ie=E(I,Y,R,C);I.onBeforeShadow(r,I,D,N,W,ie,null),r.renderBufferDirect(N,null,W,ie,I,null),I.onAfterShadow(r,I,D,N,W,ie,null)}}const q=I.children;for(let W=0,Y=q.length;W<Y;W++)b(q[W],D,N,R,C)}function O(I){I.target.removeEventListener("dispose",O);for(const N in h){const R=h[N],C=I.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function RT(r){function e(){let Z=!1;const Me=new Lt;let J=null;const De=new Lt(0,0,0,0);return{setMask:function(Xe){J!==Xe&&!Z&&(r.colorMask(Xe,Xe,Xe,Xe),J=Xe)},setLocked:function(Xe){Z=Xe},setClear:function(Xe,Pt,Vt,Jt,gn){gn===!0&&(Xe*=Jt,Pt*=Jt,Vt*=Jt),Me.set(Xe,Pt,Vt,Jt),De.equals(Me)===!1&&(r.clearColor(Xe,Pt,Vt,Jt),De.copy(Me))},reset:function(){Z=!1,J=null,De.set(-1,0,0,0)}}}function t(){let Z=!1,Me=null,J=null,De=null;return{setTest:function(Xe){Xe?Te(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(Xe){Me!==Xe&&!Z&&(r.depthMask(Xe),Me=Xe)},setFunc:function(Xe){if(J!==Xe){switch(Xe){case v_:r.depthFunc(r.NEVER);break;case __:r.depthFunc(r.ALWAYS);break;case y_:r.depthFunc(r.LESS);break;case Qo:r.depthFunc(r.LEQUAL);break;case x_:r.depthFunc(r.EQUAL);break;case S_:r.depthFunc(r.GEQUAL);break;case M_:r.depthFunc(r.GREATER);break;case w_:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=Xe}},setLocked:function(Xe){Z=Xe},setClear:function(Xe){De!==Xe&&(r.clearDepth(Xe),De=Xe)},reset:function(){Z=!1,Me=null,J=null,De=null}}}function n(){let Z=!1,Me=null,J=null,De=null,Xe=null,Pt=null,Vt=null,Jt=null,gn=null;return{setTest:function(Ut){Z||(Ut?Te(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(Ut){Me!==Ut&&!Z&&(r.stencilMask(Ut),Me=Ut)},setFunc:function(Ut,Zn,vn){(J!==Ut||De!==Zn||Xe!==vn)&&(r.stencilFunc(Ut,Zn,vn),J=Ut,De=Zn,Xe=vn)},setOp:function(Ut,Zn,vn){(Pt!==Ut||Vt!==Zn||Jt!==vn)&&(r.stencilOp(Ut,Zn,vn),Pt=Ut,Vt=Zn,Jt=vn)},setLocked:function(Ut){Z=Ut},setClear:function(Ut){gn!==Ut&&(r.clearStencil(Ut),gn=Ut)},reset:function(){Z=!1,Me=null,J=null,De=null,Xe=null,Pt=null,Vt=null,Jt=null,gn=null}}}const i=new e,s=new t,o=new n,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],g=null,y=!1,S=null,x=null,_=null,A=null,E=null,b=null,O=null,I=new Ye(0,0,0),D=0,N=!1,R=null,C=null,H=null,q=null,W=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,te=0;const Ae=r.getParameter(r.VERSION);Ae.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(Ae)[1]),ie=te>=1):Ae.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(Ae)[1]),ie=te>=2);let X=null,re={};const K=r.getParameter(r.SCISSOR_BOX),de=r.getParameter(r.VIEWPORT),Re=new Lt().fromArray(K),Be=new Lt().fromArray(de);function oe(Z,Me,J,De){const Xe=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(Z,Pt),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<J;Vt++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Me,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Xe):r.texImage2D(Me+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Xe);return Pt}const Ee={};Ee[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Te(r.DEPTH_TEST),s.setFunc(Qo),Le(!1),Ce(Md),Te(r.CULL_FACE),Se(or);function Te(Z){h[Z]!==!0&&(r.enable(Z),h[Z]=!0)}function be(Z){h[Z]!==!1&&(r.disable(Z),h[Z]=!1)}function ot(Z,Me){return f[Z]!==Me?(r.bindFramebuffer(Z,Me),f[Z]=Me,Z===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=Me),Z===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=Me),!0):!1}function gt(Z,Me){let J=m,De=!1;if(Z){J=p.get(Me),J===void 0&&(J=[],p.set(Me,J));const Xe=Z.textures;if(J.length!==Xe.length||J[0]!==r.COLOR_ATTACHMENT0){for(let Pt=0,Vt=Xe.length;Pt<Vt;Pt++)J[Pt]=r.COLOR_ATTACHMENT0+Pt;J.length=Xe.length,De=!0}}else J[0]!==r.BACK&&(J[0]=r.BACK,De=!0);De&&r.drawBuffers(J)}function $(Z){return g!==Z?(r.useProgram(Z),g=Z,!0):!1}const dt={[es]:r.FUNC_ADD,[e_]:r.FUNC_SUBTRACT,[t_]:r.FUNC_REVERSE_SUBTRACT};dt[n_]=r.MIN,dt[i_]=r.MAX;const pe={[r_]:r.ZERO,[s_]:r.ONE,[a_]:r.SRC_COLOR,[Du]:r.SRC_ALPHA,[f_]:r.SRC_ALPHA_SATURATE,[u_]:r.DST_COLOR,[l_]:r.DST_ALPHA,[o_]:r.ONE_MINUS_SRC_COLOR,[Nu]:r.ONE_MINUS_SRC_ALPHA,[h_]:r.ONE_MINUS_DST_COLOR,[c_]:r.ONE_MINUS_DST_ALPHA,[d_]:r.CONSTANT_COLOR,[p_]:r.ONE_MINUS_CONSTANT_COLOR,[m_]:r.CONSTANT_ALPHA,[g_]:r.ONE_MINUS_CONSTANT_ALPHA};function Se(Z,Me,J,De,Xe,Pt,Vt,Jt,gn,Ut){if(Z===or){y===!0&&(be(r.BLEND),y=!1);return}if(y===!1&&(Te(r.BLEND),y=!0),Z!==$0){if(Z!==S||Ut!==N){if((x!==es||E!==es)&&(r.blendEquation(r.FUNC_ADD),x=es,E=es),Ut)switch(Z){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wd:r.blendFunc(r.ONE,r.ONE);break;case Ed:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ad:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case wd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ed:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ad:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}_=null,A=null,b=null,O=null,I.set(0,0,0),D=0,S=Z,N=Ut}return}Xe=Xe||Me,Pt=Pt||J,Vt=Vt||De,(Me!==x||Xe!==E)&&(r.blendEquationSeparate(dt[Me],dt[Xe]),x=Me,E=Xe),(J!==_||De!==A||Pt!==b||Vt!==O)&&(r.blendFuncSeparate(pe[J],pe[De],pe[Pt],pe[Vt]),_=J,A=De,b=Pt,O=Vt),(Jt.equals(I)===!1||gn!==D)&&(r.blendColor(Jt.r,Jt.g,Jt.b,gn),I.copy(Jt),D=gn),S=Z,N=!1}function _e(Z,Me){Z.side===Xi?be(r.CULL_FACE):Te(r.CULL_FACE);let J=Z.side===ti;Me&&(J=!J),Le(J),Z.blending===zs&&Z.transparent===!1?Se(or):Se(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),s.setFunc(Z.depthFunc),s.setTest(Z.depthTest),s.setMask(Z.depthWrite),i.setMask(Z.colorWrite);const De=Z.stencilWrite;o.setTest(De),De&&(o.setMask(Z.stencilWriteMask),o.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),o.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),rt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function Le(Z){R!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),R=Z)}function Ce(Z){Z!==J0?(Te(r.CULL_FACE),Z!==C&&(Z===Md?r.cullFace(r.BACK):Z===K0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),C=Z}function qe(Z){Z!==H&&(ie&&r.lineWidth(Z),H=Z)}function rt(Z,Me,J){Z?(Te(r.POLYGON_OFFSET_FILL),(q!==Me||W!==J)&&(r.polygonOffset(Me,J),q=Me,W=J)):be(r.POLYGON_OFFSET_FILL)}function G(Z){Z?Te(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function U(Z){Z===void 0&&(Z=r.TEXTURE0+Y-1),X!==Z&&(r.activeTexture(Z),X=Z)}function se(Z,Me,J){J===void 0&&(X===null?J=r.TEXTURE0+Y-1:J=X);let De=re[J];De===void 0&&(De={type:void 0,texture:void 0},re[J]=De),(De.type!==Z||De.texture!==Me)&&(X!==J&&(r.activeTexture(J),X=J),r.bindTexture(Z,Me||Ee[Z]),De.type=Z,De.texture=Me)}function ve(){const Z=re[X];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function we(){try{r.compressedTexImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function $e(){try{r.texSubImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ze(){try{r.texSubImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ie(){try{r.texStorage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function et(){try{r.texStorage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Et(){try{r.texImage2D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function lt(){try{r.texImage3D.apply(r,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function We(Z){Re.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),Re.copy(Z))}function st(Z){Be.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),Be.copy(Z))}function At(Z,Me){let J=u.get(Me);J===void 0&&(J=new WeakMap,u.set(Me,J));let De=J.get(Z);De===void 0&&(De=r.getUniformBlockIndex(Me,Z.name),J.set(Z,De))}function Ht(Z,Me){const De=u.get(Me).get(Z);c.get(Me)!==De&&(r.uniformBlockBinding(Me,De,Z.__bindingPointIndex),c.set(Me,De))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},X=null,re={},f={},p=new WeakMap,m=[],g=null,y=!1,S=null,x=null,_=null,A=null,E=null,b=null,O=null,I=new Ye(0,0,0),D=0,N=!1,R=null,C=null,H=null,q=null,W=null,Re.set(0,0,r.canvas.width,r.canvas.height),Be.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:Te,disable:be,bindFramebuffer:ot,drawBuffers:gt,useProgram:$,setBlending:Se,setMaterial:_e,setFlipSided:Le,setCullFace:Ce,setLineWidth:qe,setPolygonOffset:rt,setScissorTest:G,activeTexture:U,bindTexture:se,unbindTexture:ve,compressedTexImage2D:we,compressedTexImage3D:xe,texImage2D:Et,texImage3D:lt,updateUBOMapping:At,uniformBlockBinding:Ht,texStorage2D:Ie,texStorage3D:et,texSubImage2D:$e,texSubImage3D:ze,compressedTexSubImage2D:Ne,compressedTexSubImage3D:pt,scissor:We,viewport:st,reset:at}}function PT(r,e,t,n,i,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ye,f=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(G,U){return g?new OffscreenCanvas(G,U):ul("canvas")}function S(G,U,se){let ve=1;const we=rt(G);if((we.width>se||we.height>se)&&(ve=se/Math.max(we.width,we.height)),ve<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const xe=Math.floor(ve*we.width),$e=Math.floor(ve*we.height);p===void 0&&(p=y(xe,$e));const ze=U?y(xe,$e):p;return ze.width=xe,ze.height=$e,ze.getContext("2d").drawImage(G,0,0,xe,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+xe+"x"+$e+")."),ze}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),G;return G}function x(G){return G.generateMipmaps&&G.minFilter!==In&&G.minFilter!==Xt}function _(G){r.generateMipmap(G)}function A(G,U,se,ve,we=!1){if(G!==null){if(r[G]!==void 0)return r[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let xe=U;if(U===r.RED&&(se===r.FLOAT&&(xe=r.R32F),se===r.HALF_FLOAT&&(xe=r.R16F),se===r.UNSIGNED_BYTE&&(xe=r.R8)),U===r.RED_INTEGER&&(se===r.UNSIGNED_BYTE&&(xe=r.R8UI),se===r.UNSIGNED_SHORT&&(xe=r.R16UI),se===r.UNSIGNED_INT&&(xe=r.R32UI),se===r.BYTE&&(xe=r.R8I),se===r.SHORT&&(xe=r.R16I),se===r.INT&&(xe=r.R32I)),U===r.RG&&(se===r.FLOAT&&(xe=r.RG32F),se===r.HALF_FLOAT&&(xe=r.RG16F),se===r.UNSIGNED_BYTE&&(xe=r.RG8)),U===r.RG_INTEGER&&(se===r.UNSIGNED_BYTE&&(xe=r.RG8UI),se===r.UNSIGNED_SHORT&&(xe=r.RG16UI),se===r.UNSIGNED_INT&&(xe=r.RG32UI),se===r.BYTE&&(xe=r.RG8I),se===r.SHORT&&(xe=r.RG16I),se===r.INT&&(xe=r.RG32I)),U===r.RGB&&se===r.UNSIGNED_INT_5_9_9_9_REV&&(xe=r.RGB9_E5),U===r.RGBA){const $e=we?sl:qt.getTransfer(ve);se===r.FLOAT&&(xe=r.RGBA32F),se===r.HALF_FLOAT&&(xe=r.RGBA16F),se===r.UNSIGNED_BYTE&&(xe=$e===Qt?r.SRGB8_ALPHA8:r.RGBA8),se===r.UNSIGNED_SHORT_4_4_4_4&&(xe=r.RGBA4),se===r.UNSIGNED_SHORT_5_5_5_1&&(xe=r.RGB5_A1)}return(xe===r.R16F||xe===r.R32F||xe===r.RG16F||xe===r.RG32F||xe===r.RGBA16F||xe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function E(G,U){return x(G)===!0||G.isFramebufferTexture&&G.minFilter!==In&&G.minFilter!==Xt?Math.log2(Math.max(U.width,U.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?U.mipmaps.length:1}function b(G){const U=G.target;U.removeEventListener("dispose",b),I(U),U.isVideoTexture&&f.delete(U)}function O(G){const U=G.target;U.removeEventListener("dispose",O),N(U)}function I(G){const U=n.get(G);if(U.__webglInit===void 0)return;const se=G.source,ve=m.get(se);if(ve){const we=ve[U.__cacheKey];we.usedTimes--,we.usedTimes===0&&D(G),Object.keys(ve).length===0&&m.delete(se)}n.remove(G)}function D(G){const U=n.get(G);r.deleteTexture(U.__webglTexture);const se=G.source,ve=m.get(se);delete ve[U.__cacheKey],o.memory.textures--}function N(G){const U=n.get(G);if(G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(U.__webglFramebuffer[ve]))for(let we=0;we<U.__webglFramebuffer[ve].length;we++)r.deleteFramebuffer(U.__webglFramebuffer[ve][we]);else r.deleteFramebuffer(U.__webglFramebuffer[ve]);U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer[ve])}else{if(Array.isArray(U.__webglFramebuffer))for(let ve=0;ve<U.__webglFramebuffer.length;ve++)r.deleteFramebuffer(U.__webglFramebuffer[ve]);else r.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&r.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&r.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ve=0;ve<U.__webglColorRenderbuffer.length;ve++)U.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(U.__webglColorRenderbuffer[ve]);U.__webglDepthRenderbuffer&&r.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const se=G.textures;for(let ve=0,we=se.length;ve<we;ve++){const xe=n.get(se[ve]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(se[ve])}n.remove(G)}let R=0;function C(){R=0}function H(){const G=R;return G>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+i.maxTextures),R+=1,G}function q(G){const U=[];return U.push(G.wrapS),U.push(G.wrapT),U.push(G.wrapR||0),U.push(G.magFilter),U.push(G.minFilter),U.push(G.anisotropy),U.push(G.internalFormat),U.push(G.format),U.push(G.type),U.push(G.generateMipmaps),U.push(G.premultiplyAlpha),U.push(G.flipY),U.push(G.unpackAlignment),U.push(G.colorSpace),U.join()}function W(G,U){const se=n.get(G);if(G.isVideoTexture&&Ce(G),G.isRenderTargetTexture===!1&&G.version>0&&se.__version!==G.version){const ve=G.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(se,G,U);return}}t.bindTexture(r.TEXTURE_2D,se.__webglTexture,r.TEXTURE0+U)}function Y(G,U){const se=n.get(G);if(G.version>0&&se.__version!==G.version){Re(se,G,U);return}t.bindTexture(r.TEXTURE_2D_ARRAY,se.__webglTexture,r.TEXTURE0+U)}function ie(G,U){const se=n.get(G);if(G.version>0&&se.__version!==G.version){Re(se,G,U);return}t.bindTexture(r.TEXTURE_3D,se.__webglTexture,r.TEXTURE0+U)}function te(G,U){const se=n.get(G);if(G.version>0&&se.__version!==G.version){Be(se,G,U);return}t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture,r.TEXTURE0+U)}const Ae={[el]:r.REPEAT,[Sn]:r.CLAMP_TO_EDGE,[tl]:r.MIRRORED_REPEAT},X={[In]:r.NEAREST,[gp]:r.NEAREST_MIPMAP_NEAREST,[Fa]:r.NEAREST_MIPMAP_LINEAR,[Xt]:r.LINEAR,[qo]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},re={[Y_]:r.NEVER,[Q_]:r.ALWAYS,[q_]:r.LESS,[Tp]:r.LEQUAL,[Z_]:r.EQUAL,[K_]:r.GEQUAL,[j_]:r.GREATER,[J_]:r.NOTEQUAL};function K(G,U){if(U.type===mn&&e.has("OES_texture_float_linear")===!1&&(U.magFilter===Xt||U.magFilter===qo||U.magFilter===Fa||U.magFilter===sr||U.minFilter===Xt||U.minFilter===qo||U.minFilter===Fa||U.minFilter===sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(G,r.TEXTURE_WRAP_S,Ae[U.wrapS]),r.texParameteri(G,r.TEXTURE_WRAP_T,Ae[U.wrapT]),(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)&&r.texParameteri(G,r.TEXTURE_WRAP_R,Ae[U.wrapR]),r.texParameteri(G,r.TEXTURE_MAG_FILTER,X[U.magFilter]),r.texParameteri(G,r.TEXTURE_MIN_FILTER,X[U.minFilter]),U.compareFunction&&(r.texParameteri(G,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(G,r.TEXTURE_COMPARE_FUNC,re[U.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===In||U.minFilter!==Fa&&U.minFilter!==sr||U.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||n.get(U).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");r.texParameterf(G,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,i.getMaxAnisotropy())),n.get(U).__currentAnisotropy=U.anisotropy}}}function de(G,U){let se=!1;G.__webglInit===void 0&&(G.__webglInit=!0,U.addEventListener("dispose",b));const ve=U.source;let we=m.get(ve);we===void 0&&(we={},m.set(ve,we));const xe=q(U);if(xe!==G.__cacheKey){we[xe]===void 0&&(we[xe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,se=!0),we[xe].usedTimes++;const $e=we[G.__cacheKey];$e!==void 0&&(we[G.__cacheKey].usedTimes--,$e.usedTimes===0&&D(U)),G.__cacheKey=xe,G.__webglTexture=we[xe].texture}return se}function Re(G,U,se){let ve=r.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),U.isData3DTexture&&(ve=r.TEXTURE_3D);const we=de(G,U),xe=U.source;t.bindTexture(ve,G.__webglTexture,r.TEXTURE0+se);const $e=n.get(xe);if(xe.version!==$e.__version||we===!0){t.activeTexture(r.TEXTURE0+se);const ze=qt.getPrimaries(qt.workingColorSpace),Ne=U.colorSpace===Ar?null:qt.getPrimaries(U.colorSpace),pt=U.colorSpace===Ar||ze===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,U.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,U.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ie=S(U.image,!1,i.maxTextureSize);Ie=qe(U,Ie);const et=s.convert(U.format,U.colorSpace),Et=s.convert(U.type);let lt=A(U.internalFormat,et,Et,U.colorSpace,U.isVideoTexture);K(ve,U);let We;const st=U.mipmaps,At=U.isVideoTexture!==!0,Ht=$e.__version===void 0||we===!0,at=xe.dataReady,Z=E(U,Ie);if(U.isDepthTexture)lt=r.DEPTH_COMPONENT16,U.type===mn?lt=r.DEPTH_COMPONENT32F:U.type===rs?lt=r.DEPTH_COMPONENT24:U.type===eo&&(lt=r.DEPTH24_STENCIL8),Ht&&(At?t.texStorage2D(r.TEXTURE_2D,1,lt,Ie.width,Ie.height):t.texImage2D(r.TEXTURE_2D,0,lt,Ie.width,Ie.height,0,et,Et,null));else if(U.isDataTexture)if(st.length>0){At&&Ht&&t.texStorage2D(r.TEXTURE_2D,Z,lt,st[0].width,st[0].height);for(let Me=0,J=st.length;Me<J;Me++)We=st[Me],At?at&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,We.width,We.height,et,Et,We.data):t.texImage2D(r.TEXTURE_2D,Me,lt,We.width,We.height,0,et,Et,We.data);U.generateMipmaps=!1}else At?(Ht&&t.texStorage2D(r.TEXTURE_2D,Z,lt,Ie.width,Ie.height),at&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie.width,Ie.height,et,Et,Ie.data)):t.texImage2D(r.TEXTURE_2D,0,lt,Ie.width,Ie.height,0,et,Et,Ie.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){At&&Ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Z,lt,st[0].width,st[0].height,Ie.depth);for(let Me=0,J=st.length;Me<J;Me++)We=st[Me],U.format!==wn?et!==null?At?at&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,We.width,We.height,Ie.depth,et,We.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,lt,We.width,We.height,Ie.depth,0,We.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?at&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,We.width,We.height,Ie.depth,et,Et,We.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,lt,We.width,We.height,Ie.depth,0,et,Et,We.data)}else{At&&Ht&&t.texStorage2D(r.TEXTURE_2D,Z,lt,st[0].width,st[0].height);for(let Me=0,J=st.length;Me<J;Me++)We=st[Me],U.format!==wn?et!==null?At?at&&t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,We.width,We.height,et,We.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,lt,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?at&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,We.width,We.height,et,Et,We.data):t.texImage2D(r.TEXTURE_2D,Me,lt,We.width,We.height,0,et,Et,We.data)}else if(U.isDataArrayTexture)At?(Ht&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Z,lt,Ie.width,Ie.height,Ie.depth),at&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ie.width,Ie.height,Ie.depth,et,Et,Ie.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,lt,Ie.width,Ie.height,Ie.depth,0,et,Et,Ie.data);else if(U.isData3DTexture)At?(Ht&&t.texStorage3D(r.TEXTURE_3D,Z,lt,Ie.width,Ie.height,Ie.depth),at&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ie.width,Ie.height,Ie.depth,et,Et,Ie.data)):t.texImage3D(r.TEXTURE_3D,0,lt,Ie.width,Ie.height,Ie.depth,0,et,Et,Ie.data);else if(U.isFramebufferTexture){if(Ht)if(At)t.texStorage2D(r.TEXTURE_2D,Z,lt,Ie.width,Ie.height);else{let Me=Ie.width,J=Ie.height;for(let De=0;De<Z;De++)t.texImage2D(r.TEXTURE_2D,De,lt,Me,J,0,et,Et,null),Me>>=1,J>>=1}}else if(st.length>0){if(At&&Ht){const Me=rt(st[0]);t.texStorage2D(r.TEXTURE_2D,Z,lt,Me.width,Me.height)}for(let Me=0,J=st.length;Me<J;Me++)We=st[Me],At?at&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,et,Et,We):t.texImage2D(r.TEXTURE_2D,Me,lt,et,Et,We);U.generateMipmaps=!1}else if(At){if(Ht){const Me=rt(Ie);t.texStorage2D(r.TEXTURE_2D,Z,lt,Me.width,Me.height)}at&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,et,Et,Ie)}else t.texImage2D(r.TEXTURE_2D,0,lt,et,Et,Ie);x(U)&&_(ve),$e.__version=xe.version,U.onUpdate&&U.onUpdate(U)}G.__version=U.version}function Be(G,U,se){if(U.image.length!==6)return;const ve=de(G,U),we=U.source;t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+se);const xe=n.get(we);if(we.version!==xe.__version||ve===!0){t.activeTexture(r.TEXTURE0+se);const $e=qt.getPrimaries(qt.workingColorSpace),ze=U.colorSpace===Ar?null:qt.getPrimaries(U.colorSpace),Ne=U.colorSpace===Ar||$e===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,U.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,U.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const pt=U.isCompressedTexture||U.image[0].isCompressedTexture,Ie=U.image[0]&&U.image[0].isDataTexture,et=[];for(let J=0;J<6;J++)!pt&&!Ie?et[J]=S(U.image[J],!0,i.maxCubemapSize):et[J]=Ie?U.image[J].image:U.image[J],et[J]=qe(U,et[J]);const Et=et[0],lt=s.convert(U.format,U.colorSpace),We=s.convert(U.type),st=A(U.internalFormat,lt,We,U.colorSpace),At=U.isVideoTexture!==!0,Ht=xe.__version===void 0||ve===!0,at=we.dataReady;let Z=E(U,Et);K(r.TEXTURE_CUBE_MAP,U);let Me;if(pt){At&&Ht&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Z,st,Et.width,Et.height);for(let J=0;J<6;J++){Me=et[J].mipmaps;for(let De=0;De<Me.length;De++){const Xe=Me[De];U.format!==wn?lt!==null?At?at&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,De,0,0,Xe.width,Xe.height,lt,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,De,st,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,De,0,0,Xe.width,Xe.height,lt,We,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,De,st,Xe.width,Xe.height,0,lt,We,Xe.data)}}}else{if(Me=U.mipmaps,At&&Ht){Me.length>0&&Z++;const J=rt(et[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Z,st,J.width,J.height)}for(let J=0;J<6;J++)if(Ie){At?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,et[J].width,et[J].height,lt,We,et[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,st,et[J].width,et[J].height,0,lt,We,et[J].data);for(let De=0;De<Me.length;De++){const Pt=Me[De].image[J].image;At?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,De+1,0,0,Pt.width,Pt.height,lt,We,Pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,De+1,st,Pt.width,Pt.height,0,lt,We,Pt.data)}}else{At?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,lt,We,et[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,st,lt,We,et[J]);for(let De=0;De<Me.length;De++){const Xe=Me[De];At?at&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,De+1,0,0,lt,We,Xe.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,De+1,st,lt,We,Xe.image[J])}}}x(U)&&_(r.TEXTURE_CUBE_MAP),xe.__version=we.version,U.onUpdate&&U.onUpdate(U)}G.__version=U.version}function oe(G,U,se,ve,we,xe){const $e=s.convert(se.format,se.colorSpace),ze=s.convert(se.type),Ne=A(se.internalFormat,$e,ze,se.colorSpace);if(!n.get(U).__hasExternalTextures){const Ie=Math.max(1,U.width>>xe),et=Math.max(1,U.height>>xe);we===r.TEXTURE_3D||we===r.TEXTURE_2D_ARRAY?t.texImage3D(we,xe,Ne,Ie,et,U.depth,0,$e,ze,null):t.texImage2D(we,xe,Ne,Ie,et,0,$e,ze,null)}t.bindFramebuffer(r.FRAMEBUFFER,G),Le(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,we,n.get(se).__webglTexture,0,_e(U)):(we===r.TEXTURE_2D||we>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,we,n.get(se).__webglTexture,xe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(G,U,se){if(r.bindRenderbuffer(r.RENDERBUFFER,G),U.depthBuffer&&!U.stencilBuffer){let ve=r.DEPTH_COMPONENT24;if(se||Le(U)){const we=U.depthTexture;we&&we.isDepthTexture&&(we.type===mn?ve=r.DEPTH_COMPONENT32F:we.type===rs&&(ve=r.DEPTH_COMPONENT24));const xe=_e(U);Le(U)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,ve,U.width,U.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,ve,U.width,U.height)}else r.renderbufferStorage(r.RENDERBUFFER,ve,U.width,U.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,G)}else if(U.depthBuffer&&U.stencilBuffer){const ve=_e(U);se&&Le(U)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,r.DEPTH24_STENCIL8,U.width,U.height):Le(U)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,r.DEPTH24_STENCIL8,U.width,U.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,G)}else{const ve=U.textures;for(let we=0;we<ve.length;we++){const xe=ve[we],$e=s.convert(xe.format,xe.colorSpace),ze=s.convert(xe.type),Ne=A(xe.internalFormat,$e,ze,xe.colorSpace),pt=_e(U);se&&Le(U)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,pt,Ne,U.width,U.height):Le(U)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,pt,Ne,U.width,U.height):r.renderbufferStorage(r.RENDERBUFFER,Ne,U.width,U.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(G,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,G),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(U.depthTexture).__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),W(U.depthTexture,0);const ve=n.get(U.depthTexture).__webglTexture,we=_e(U);if(U.depthTexture.format===ks)Le(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(U.depthTexture.format===Ya)Le(U)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,we):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function be(G){const U=n.get(G),se=G.isWebGLCubeRenderTarget===!0;if(G.depthTexture&&!U.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");Te(U.__webglFramebuffer,G)}else if(se){U.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer[ve]),U.__webglDepthbuffer[ve]=r.createRenderbuffer(),Ee(U.__webglDepthbuffer[ve],G,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer=r.createRenderbuffer(),Ee(U.__webglDepthbuffer,G,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ot(G,U,se){const ve=n.get(G);U!==void 0&&oe(ve.__webglFramebuffer,G,G.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),se!==void 0&&be(G)}function gt(G){const U=G.texture,se=n.get(G),ve=n.get(U);G.addEventListener("dispose",O);const we=G.textures,xe=G.isWebGLCubeRenderTarget===!0,$e=we.length>1;if($e||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=U.version,o.memory.textures++),xe){se.__webglFramebuffer=[];for(let ze=0;ze<6;ze++)if(U.mipmaps&&U.mipmaps.length>0){se.__webglFramebuffer[ze]=[];for(let Ne=0;Ne<U.mipmaps.length;Ne++)se.__webglFramebuffer[ze][Ne]=r.createFramebuffer()}else se.__webglFramebuffer[ze]=r.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){se.__webglFramebuffer=[];for(let ze=0;ze<U.mipmaps.length;ze++)se.__webglFramebuffer[ze]=r.createFramebuffer()}else se.__webglFramebuffer=r.createFramebuffer();if($e)for(let ze=0,Ne=we.length;ze<Ne;ze++){const pt=n.get(we[ze]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),o.memory.textures++)}if(G.samples>0&&Le(G)===!1){se.__webglMultisampledFramebuffer=r.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ze=0;ze<we.length;ze++){const Ne=we[ze];se.__webglColorRenderbuffer[ze]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,se.__webglColorRenderbuffer[ze]);const pt=s.convert(Ne.format,Ne.colorSpace),Ie=s.convert(Ne.type),et=A(Ne.internalFormat,pt,Ie,Ne.colorSpace,G.isXRRenderTarget===!0),Et=_e(G);r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,et,G.width,G.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,se.__webglColorRenderbuffer[ze])}r.bindRenderbuffer(r.RENDERBUFFER,null),G.depthBuffer&&(se.__webglDepthRenderbuffer=r.createRenderbuffer(),Ee(se.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xe){t.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),K(r.TEXTURE_CUBE_MAP,U);for(let ze=0;ze<6;ze++)if(U.mipmaps&&U.mipmaps.length>0)for(let Ne=0;Ne<U.mipmaps.length;Ne++)oe(se.__webglFramebuffer[ze][Ne],G,U,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,Ne);else oe(se.__webglFramebuffer[ze],G,U,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0);x(U)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let ze=0,Ne=we.length;ze<Ne;ze++){const pt=we[ze],Ie=n.get(pt);t.bindTexture(r.TEXTURE_2D,Ie.__webglTexture),K(r.TEXTURE_2D,pt),oe(se.__webglFramebuffer,G,pt,r.COLOR_ATTACHMENT0+ze,r.TEXTURE_2D,0),x(pt)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let ze=r.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ze=G.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ze,ve.__webglTexture),K(ze,U),U.mipmaps&&U.mipmaps.length>0)for(let Ne=0;Ne<U.mipmaps.length;Ne++)oe(se.__webglFramebuffer[Ne],G,U,r.COLOR_ATTACHMENT0,ze,Ne);else oe(se.__webglFramebuffer,G,U,r.COLOR_ATTACHMENT0,ze,0);x(U)&&_(ze),t.unbindTexture()}G.depthBuffer&&be(G)}function $(G){const U=G.textures;for(let se=0,ve=U.length;se<ve;se++){const we=U[se];if(x(we)){const xe=G.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,$e=n.get(we).__webglTexture;t.bindTexture(xe,$e),_(xe),t.unbindTexture()}}}const dt=[],pe=[];function Se(G){if(G.samples>0){if(Le(G)===!1){const U=G.textures,se=G.width,ve=G.height;let we=r.COLOR_BUFFER_BIT;const xe=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=n.get(G),ze=U.length>1;if(ze)for(let Ne=0;Ne<U.length;Ne++)t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let Ne=0;Ne<U.length;Ne++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(we|=r.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(we|=r.STENCIL_BUFFER_BIT)),ze){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[Ne]);const pt=n.get(U[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,pt,0)}r.blitFramebuffer(0,0,se,ve,0,0,se,ve,we,r.NEAREST),u===!0&&(dt.length=0,pe.length=0,dt.push(r.COLOR_ATTACHMENT0+Ne),G.depthBuffer&&G.resolveDepthBuffer===!1&&(dt.push(xe),pe.push(xe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ze)for(let Ne=0;Ne<U.length;Ne++){t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,$e.__webglColorRenderbuffer[Ne]);const pt=n.get(U[Ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,pt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&u){const U=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[U])}}}function _e(G){return Math.min(i.maxSamples,G.samples)}function Le(G){const U=n.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function Ce(G){const U=o.render.frame;f.get(G)!==U&&(f.set(G,U),G.update())}function qe(G,U){const se=G.colorSpace,ve=G.format,we=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||se!==Oi&&se!==Ar&&(qt.getTransfer(se)===Qt?(ve!==wn||we!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),U}function rt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(h.width=G.naturalWidth||G.width,h.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(h.width=G.displayWidth,h.height=G.displayHeight):(h.width=G.width,h.height=G.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=C,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=te,this.rebindTextures=ot,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Le}function dy(r,e){function t(n,i=Ar){let s;const o=qt.getTransfer(i);if(n===Mi)return r.UNSIGNED_BYTE;if(n===xp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===U_)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===vp)return r.BYTE;if(n===_p)return r.SHORT;if(n===yp)return r.UNSIGNED_SHORT;if(n===Vu)return r.INT;if(n===rs)return r.UNSIGNED_INT;if(n===mn)return r.FLOAT;if(n===Bn)return r.HALF_FLOAT;if(n===D_)return r.ALPHA;if(n===N_)return r.RGB;if(n===wn)return r.RGBA;if(n===O_)return r.LUMINANCE;if(n===F_)return r.LUMINANCE_ALPHA;if(n===ks)return r.DEPTH_COMPONENT;if(n===Ya)return r.DEPTH_STENCIL;if(n===Gu)return r.RED;if(n===Mp)return r.RED_INTEGER;if(n===B_)return r.RG;if(n===wp)return r.RG_INTEGER;if(n===Ep)return r.RGBA_INTEGER;if(n===Tu||n===bu||n===Cu||n===Ru)if(o===Qt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Tu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Tu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ru)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cd||n===Rd||n===Pd||n===Id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ld||n===Ud||n===Dd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ld||n===Ud)return o===Qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Dd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nd||n===Od||n===Fd||n===Bd||n===zd||n===kd||n===Hd||n===Vd||n===Gd||n===Wd||n===Xd||n===Yd||n===qd||n===Zd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Od)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zd)return o===Qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pu||n===jd||n===Jd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Pu)return o===Qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===z_||n===Kd||n===Qd||n===$d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Pu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class py extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ka extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IT={type:"move"};class Yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const S of e.hand.values()){const x=t.getJointPose(S,n),_=this._getHandJoint(h,S);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const f=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,y=.005;h.inputState.pinching&&m>g+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=g-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(IT)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ka;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const LT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new jt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new zn({vertexShader:LT,fragmentShader:UT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new Ur(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class NT extends Ir{constructor(e,t){super();const n=this;let i=null,s=1,o=null,c="local-floor",u=1,h=null,f=null,p=null,m=null,g=null,y=null;const S=new DT,x=t.getContextAttributes();let _=null,A=null;const E=[],b=[],O=new ye;let I=null;const D=new Pn;D.layers.enable(1),D.viewport=new Lt;const N=new Pn;N.layers.enable(2),N.viewport=new Lt;const R=[D,N],C=new py;C.layers.enable(1),C.layers.enable(2);let H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let Ee=E[oe];return Ee===void 0&&(Ee=new Yf,E[oe]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(oe){let Ee=E[oe];return Ee===void 0&&(Ee=new Yf,E[oe]=Ee),Ee.getGripSpace()},this.getHand=function(oe){let Ee=E[oe];return Ee===void 0&&(Ee=new Yf,E[oe]=Ee),Ee.getHandSpace()};function W(oe){const Ee=b.indexOf(oe.inputSource);if(Ee===-1)return;const Te=E[Ee];Te!==void 0&&(Te.update(oe.inputSource,oe.frame,h||o),Te.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Y(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",ie);for(let oe=0;oe<E.length;oe++){const Ee=b[oe];Ee!==null&&(b[oe]=null,E[oe].disconnect(Ee))}H=null,q=null,S.reset(),e.setRenderTarget(_),g=null,m=null,p=null,i=null,A=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){c=oe,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return i},this.setSession=async function(oe){if(i=oe,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",ie),x.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(O),i.renderState.layers===void 0){const Ee={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new ni(g.framebufferWidth,g.framebufferHeight,{format:wn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Ee=null,Te=null,be=null;x.depth&&(be=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=x.stencil?Ya:ks,Te=x.stencil?eo:rs);const ot={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};p=new XRWebGLBinding(i,t),m=p.createProjectionLayer(ot),i.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new ni(m.textureWidth,m.textureHeight,{format:wn,type:Mi,depthTexture:new Dp(m.textureWidth,m.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(c),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function ie(oe){for(let Ee=0;Ee<oe.removed.length;Ee++){const Te=oe.removed[Ee],be=b.indexOf(Te);be>=0&&(b[be]=null,E[be].disconnect(Te))}for(let Ee=0;Ee<oe.added.length;Ee++){const Te=oe.added[Ee];let be=b.indexOf(Te);if(be===-1){for(let gt=0;gt<E.length;gt++)if(gt>=b.length){b.push(Te),be=gt;break}else if(b[gt]===null){b[gt]=Te,be=gt;break}if(be===-1)break}const ot=E[be];ot&&ot.connect(Te)}}const te=new F,Ae=new F;function X(oe,Ee,Te){te.setFromMatrixPosition(Ee.matrixWorld),Ae.setFromMatrixPosition(Te.matrixWorld);const be=te.distanceTo(Ae),ot=Ee.projectionMatrix.elements,gt=Te.projectionMatrix.elements,$=ot[14]/(ot[10]-1),dt=ot[14]/(ot[10]+1),pe=(ot[9]+1)/ot[5],Se=(ot[9]-1)/ot[5],_e=(ot[8]-1)/ot[0],Le=(gt[8]+1)/gt[0],Ce=$*_e,qe=$*Le,rt=be/(-_e+Le),G=rt*-_e;Ee.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(G),oe.translateZ(rt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const U=$+rt,se=dt+rt,ve=Ce-G,we=qe+(be-G),xe=pe*dt/se*U,$e=Se*dt/se*U;oe.projectionMatrix.makePerspective(ve,we,xe,$e,U,se),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}function re(oe,Ee){Ee===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(Ee.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(i===null)return;S.texture!==null&&(oe.near=S.depthNear,oe.far=S.depthFar),C.near=N.near=D.near=oe.near,C.far=N.far=D.far=oe.far,(H!==C.near||q!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,q=C.far,D.near=H,D.far=q,N.near=H,N.far=q,D.updateProjectionMatrix(),N.updateProjectionMatrix(),oe.updateProjectionMatrix());const Ee=oe.parent,Te=C.cameras;re(C,Ee);for(let be=0;be<Te.length;be++)re(Te[be],Ee);Te.length===2?X(C,D,N):C.projectionMatrix.copy(D.projectionMatrix),K(oe,C,Ee)};function K(oe,Ee,Te){Te===null?oe.matrix.copy(Ee.matrixWorld):(oe.matrix.copy(Te.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(Ee.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(Ee.projectionMatrix),oe.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=qa*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(oe){u=oe,m!==null&&(m.fixedFoveation=oe),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null};let de=null;function Re(oe,Ee){if(f=Ee.getViewerPose(h||o),y=Ee,f!==null){const Te=f.views;g!==null&&(e.setRenderTargetFramebuffer(A,g.framebuffer),e.setRenderTarget(A));let be=!1;Te.length!==C.cameras.length&&(C.cameras.length=0,be=!0);for(let gt=0;gt<Te.length;gt++){const $=Te[gt];let dt=null;if(g!==null)dt=g.getViewport($);else{const Se=p.getViewSubImage(m,$);dt=Se.viewport,gt===0&&(e.setRenderTargetTextures(A,Se.colorTexture,m.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(A))}let pe=R[gt];pe===void 0&&(pe=new Pn,pe.layers.enable(gt),pe.viewport=new Lt,R[gt]=pe),pe.matrix.fromArray($.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray($.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(dt.x,dt.y,dt.width,dt.height),gt===0&&(C.matrix.copy(pe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),be===!0&&C.cameras.push(pe)}const ot=i.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const gt=p.getDepthInformation(Te[0]);gt&&gt.isValid&&gt.texture&&S.init(e,gt,i.renderState)}}for(let Te=0;Te<E.length;Te++){const be=b[Te],ot=E[Te];be!==null&&ot!==void 0&&ot.update(be,Ee,h||o)}S.render(e,C),de&&de(oe,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),y=null}const Be=new oy;Be.setAnimationLoop(Re),this.setAnimationLoop=function(oe){de=oe},this.dispose=function(){}}}const ws=new wi,OT=new ft;function FT(r,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,sy(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function i(x,_,A,E,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&g(x,_,b)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),S(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&c(x,_)):_.isPointsMaterial?u(x,_,A,E):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===ti&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===ti&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const A=e.get(_),E=A.envMap,b=A.envMapRotation;if(E&&(x.envMap.value=E,ws.copy(b),ws.x*=-1,ws.y*=-1,ws.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),x.envMapRotation.value.setFromMatrix4(OT.makeRotationFromEuler(ws)),x.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap){x.lightMap.value=_.lightMap;const O=r._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=_.lightMapIntensity*O,t(_.lightMap,x.lightMapTransform)}_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function c(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,A,E){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*A,x.scale.value=E*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,A){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ti&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function S(x,_){const A=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function BT(r,e,t,n){let i={},s={},o=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(A,E){const b=E.program;n.uniformBlockBinding(A,b)}function h(A,E){let b=i[A.id];b===void 0&&(y(A),b=f(A),i[A.id]=b,A.addEventListener("dispose",x));const O=E.program;n.updateUBOMapping(A,O);const I=e.render.frame;s[A.id]!==I&&(m(A),s[A.id]=I)}function f(A){const E=p();A.__bindingPointIndex=E;const b=r.createBuffer(),O=A.__size,I=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,O,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,b),b}function p(){for(let A=0;A<c;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const E=i[A.id],b=A.uniforms,O=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let I=0,D=b.length;I<D;I++){const N=Array.isArray(b[I])?b[I]:[b[I]];for(let R=0,C=N.length;R<C;R++){const H=N[R];if(g(H,I,R,O)===!0){const q=H.__offset,W=Array.isArray(H.value)?H.value:[H.value];let Y=0;for(let ie=0;ie<W.length;ie++){const te=W[ie],Ae=S(te);typeof te=="number"||typeof te=="boolean"?(H.__data[0]=te,r.bufferSubData(r.UNIFORM_BUFFER,q+Y,H.__data)):te.isMatrix3?(H.__data[0]=te.elements[0],H.__data[1]=te.elements[1],H.__data[2]=te.elements[2],H.__data[3]=0,H.__data[4]=te.elements[3],H.__data[5]=te.elements[4],H.__data[6]=te.elements[5],H.__data[7]=0,H.__data[8]=te.elements[6],H.__data[9]=te.elements[7],H.__data[10]=te.elements[8],H.__data[11]=0):(te.toArray(H.__data,Y),Y+=Ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function g(A,E,b,O){const I=A.value,D=E+"_"+b;if(O[D]===void 0)return typeof I=="number"||typeof I=="boolean"?O[D]=I:O[D]=I.clone(),!0;{const N=O[D];if(typeof I=="number"||typeof I=="boolean"){if(N!==I)return O[D]=I,!0}else if(N.equals(I)===!1)return N.copy(I),!0}return!1}function y(A){const E=A.uniforms;let b=0;const O=16;for(let D=0,N=E.length;D<N;D++){const R=Array.isArray(E[D])?E[D]:[E[D]];for(let C=0,H=R.length;C<H;C++){const q=R[C],W=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,ie=W.length;Y<ie;Y++){const te=W[Y],Ae=S(te),X=b%O;X!==0&&O-X<Ae.boundary&&(b+=O-X),q.__data=new Float32Array(Ae.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=Ae.storage}}}const I=b%O;return I>0&&(b+=O-I),A.__size=b,A.__cache={},this}function S(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function x(A){const E=A.target;E.removeEventListener("dispose",x);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function _(){for(const A in i)r.deleteBuffer(i[A]);o=[],i={},s={}}return{bind:u,update:h,dispose:_}}class Op{constructor(e={}){const{canvas:t=ey(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),y=new Int32Array(4);let S=null,x=null;const _=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this._useLegacyLights=!1,this.toneMapping=lr,this.toneMappingExposure=1;const E=this;let b=!1,O=0,I=0,D=null,N=-1,R=null;const C=new Lt,H=new Lt;let q=null;const W=new Ye(0);let Y=0,ie=t.width,te=t.height,Ae=1,X=null,re=null;const K=new Lt(0,0,ie,te),de=new Lt(0,0,ie,te);let Re=!1;const Be=new Tl;let oe=!1,Ee=!1;const Te=new ft,be=new F,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return D===null?Ae:1}let $=n;function dt(w,L){return t.getContext(w,L)}try{const w={alpha:!0,depth:i,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",J,!1),$===null){const L="webgl2";if($=dt(L,w),$===null)throw dt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pe,Se,_e,Le,Ce,qe,rt,G,U,se,ve,we,xe,$e,ze,Ne,pt,Ie,et,Et,lt,We,st,At;function Ht(){pe=new KE($),pe.init(),We=new dy($,pe),Se=new XE($,pe,e,We),_e=new RT($),Le=new eA($),Ce=new vT,qe=new PT($,pe,_e,Ce,Se,We,Le),rt=new qE(E),G=new JE(E),U=new o1($),st=new GE($,U),se=new QE($,U,Le,st),ve=new nA($,se,U,Le),et=new tA($,Se,qe),Ne=new YE(Ce),we=new gT(E,rt,G,pe,Se,st,Ne),xe=new FT(E,Ce),$e=new yT,ze=new AT(pe),Ie=new VE(E,rt,G,_e,ve,m,u),pt=new CT(E,ve,Se),At=new BT($,Le,Se,_e),Et=new WE($,pe,Le),lt=new $E($,pe,Le),Le.programs=we.programs,E.capabilities=Se,E.extensions=pe,E.properties=Ce,E.renderLists=$e,E.shadowMap=pt,E.state=_e,E.info=Le}Ht();const at=new NT(E,$);this.xr=at,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const w=pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(w){w!==void 0&&(Ae=w,this.setSize(ie,te,!1))},this.getSize=function(w){return w.set(ie,te)},this.setSize=function(w,L,B=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=w,te=L,t.width=Math.floor(w*Ae),t.height=Math.floor(L*Ae),B===!0&&(t.style.width=w+"px",t.style.height=L+"px"),this.setViewport(0,0,w,L)},this.getDrawingBufferSize=function(w){return w.set(ie*Ae,te*Ae).floor()},this.setDrawingBufferSize=function(w,L,B){ie=w,te=L,Ae=B,t.width=Math.floor(w*B),t.height=Math.floor(L*B),this.setViewport(0,0,w,L)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,L,B,z){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,L,B,z),_e.viewport(C.copy(K).multiplyScalar(Ae).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,L,B,z){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,L,B,z),_e.scissor(H.copy(de).multiplyScalar(Ae).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){_e.setScissorTest(Re=w)},this.setOpaqueSort=function(w){X=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(w=!0,L=!0,B=!0){let z=0;if(w){let k=!1;if(D!==null){const ee=D.texture.format;k=ee===Ep||ee===wp||ee===Mp}if(k){const ee=D.texture.type,ne=ee===Mi||ee===rs||ee===yp||ee===eo||ee===xp||ee===Sp,le=Ie.getClearColor(),ue=Ie.getClearAlpha(),ge=le.r,fe=le.g,Ze=le.b;ne?(g[0]=ge,g[1]=fe,g[2]=Ze,g[3]=ue,$.clearBufferuiv($.COLOR,0,g)):(y[0]=ge,y[1]=fe,y[2]=Ze,y[3]=ue,$.clearBufferiv($.COLOR,0,y))}else z|=$.COLOR_BUFFER_BIT}L&&(z|=$.DEPTH_BUFFER_BIT),B&&(z|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",J,!1),$e.dispose(),ze.dispose(),Ce.dispose(),rt.dispose(),G.dispose(),ve.dispose(),st.dispose(),At.dispose(),we.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ut),at.removeEventListener("sessionend",Zn),vn.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=Le.autoReset,L=pt.enabled,B=pt.autoUpdate,z=pt.needsUpdate,k=pt.type;Ht(),Le.autoReset=w,pt.enabled=L,pt.autoUpdate=B,pt.needsUpdate=z,pt.type=k}function J(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function De(w){const L=w.target;L.removeEventListener("dispose",De),Xe(L)}function Xe(w){Pt(w),Ce.remove(w)}function Pt(w){const L=Ce.get(w).programs;L!==void 0&&(L.forEach(function(B){we.releaseProgram(B)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,L,B,z,k,ee){L===null&&(L=ot);const ne=k.isMesh&&k.matrixWorld.determinant()<0,le=$s(w,L,B,z,k);_e.setMaterial(z,ne);let ue=B.index,ge=1;if(z.wireframe===!0){if(ue=se.getWireframeAttribute(B),ue===void 0)return;ge=2}const fe=B.drawRange,Ze=B.attributes.position;let Ue=fe.start*ge,He=(fe.start+fe.count)*ge;ee!==null&&(Ue=Math.max(Ue,ee.start*ge),He=Math.min(He,(ee.start+ee.count)*ge)),ue!==null?(Ue=Math.max(Ue,0),He=Math.min(He,ue.count)):Ze!=null&&(Ue=Math.max(Ue,0),He=Math.min(He,Ze.count));const tt=He-Ue;if(tt<0||tt===1/0)return;st.setup(k,z,le,B,ue);let ct,Je=Et;if(ue!==null&&(ct=U.get(ue),Je=lt,Je.setIndex(ct)),k.isMesh)z.wireframe===!0?(_e.setLineWidth(z.wireframeLinewidth*gt()),Je.setMode($.LINES)):Je.setMode($.TRIANGLES);else if(k.isLine){let Oe=z.linewidth;Oe===void 0&&(Oe=1),_e.setLineWidth(Oe*gt()),k.isLineSegments?Je.setMode($.LINES):k.isLineLoop?Je.setMode($.LINE_LOOP):Je.setMode($.LINE_STRIP)}else k.isPoints?Je.setMode($.POINTS):k.isSprite&&Je.setMode($.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Je.renderInstances(Ue,tt,k.count);else if(B.isInstancedBufferGeometry){const Oe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ht=Math.min(B.instanceCount,Oe);Je.renderInstances(Ue,tt,ht)}else Je.render(Ue,tt)};function Vt(w,L,B){w.transparent===!0&&w.side===Xi&&w.forceSinglePass===!1?(w.side=ti,w.needsUpdate=!0,Ai(w,L,B),w.side=Rr,w.needsUpdate=!0,Ai(w,L,B),w.side=Xi):Ai(w,L,B)}this.compile=function(w,L,B=null){B===null&&(B=w),x=ze.get(B),x.init(L),A.push(x),B.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(x.pushLight(k),k.castShadow&&x.pushShadow(k))}),w!==B&&w.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(x.pushLight(k),k.castShadow&&x.pushShadow(k))}),x.setupLights(E._useLegacyLights);const z=new Set;return w.traverse(function(k){const ee=k.material;if(ee)if(Array.isArray(ee))for(let ne=0;ne<ee.length;ne++){const le=ee[ne];Vt(le,B,k),z.add(le)}else Vt(ee,B,k),z.add(ee)}),A.pop(),x=null,z},this.compileAsync=function(w,L,B=null){const z=this.compile(w,L,B);return new Promise(k=>{function ee(){if(z.forEach(function(ne){Ce.get(ne).currentProgram.isReady()&&z.delete(ne)}),z.size===0){k(w);return}setTimeout(ee,10)}pe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Jt=null;function gn(w){Jt&&Jt(w)}function Ut(){vn.stop()}function Zn(){vn.start()}const vn=new oy;vn.setAnimationLoop(gn),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(w){Jt=w,at.setAnimationLoop(w),w===null?vn.stop():vn.start()},at.addEventListener("sessionstart",Ut),at.addEventListener("sessionend",Zn),this.render=function(w,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(L),L=at.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,L,D),x=ze.get(w,A.length),x.init(L),A.push(x),Te.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Be.setFromProjectionMatrix(Te),Ee=this.localClippingEnabled,oe=Ne.init(this.clippingPlanes,Ee),S=$e.get(w,_.length),S.init(),_.push(S),Js(w,L,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(X,re);const B=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1;B&&Ie.addToRenderList(S,w),this.info.render.frame++,oe===!0&&Ne.beginShadows();const z=x.state.shadowsArray;pt.render(z,w,L),oe===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=S.opaque,ee=S.transmissive;if(x.setupLights(E._useLegacyLights),L.isArrayCamera){const ne=L.cameras;if(ee.length>0)for(let le=0,ue=ne.length;le<ue;le++){const ge=ne[le];Qs(k,ee,w,ge)}B&&Ie.render(w);for(let le=0,ue=ne.length;le<ue;le++){const ge=ne[le];Ks(S,w,ge,ge.viewport)}}else ee.length>0&&Qs(k,ee,w,L),B&&Ie.render(w),Ks(S,w,L);D!==null&&(qe.updateMultisampleRenderTarget(D),qe.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(E,w,L),st.resetDefaultState(),N=-1,R=null,A.pop(),A.length>0?(x=A[A.length-1],oe===!0&&Ne.setGlobalState(E.clippingPlanes,x.state.camera)):x=null,_.pop(),_.length>0?S=_[_.length-1]:S=null};function Js(w,L,B,z){if(w.visible===!1)return;if(w.layers.test(L.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(L);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Be.intersectsSprite(w)){z&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const ne=ve.update(w),le=w.material;le.visible&&S.push(w,ne,le,B,be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Be.intersectsObject(w))){const ne=ve.update(w),le=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),be.copy(ne.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(le)){const ue=ne.groups;for(let ge=0,fe=ue.length;ge<fe;ge++){const Ze=ue[ge],Ue=le[Ze.materialIndex];Ue&&Ue.visible&&S.push(w,ne,Ue,B,be.z,Ze)}}else le.visible&&S.push(w,ne,le,B,be.z,null)}}const ee=w.children;for(let ne=0,le=ee.length;ne<le;ne++)Js(ee[ne],L,B,z)}function Ks(w,L,B,z){const k=w.opaque,ee=w.transmissive,ne=w.transparent;x.setupLightsView(B),oe===!0&&Ne.setGlobalState(E.clippingPlanes,B),z&&_e.viewport(C.copy(z)),k.length>0&&Ei(k,L,B),ee.length>0&&Ei(ee,L,B),ne.length>0&&Ei(ne,L,B),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Qs(w,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[z.id]===void 0&&(x.state.transmissionRenderTarget[z.id]=new ni(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Bn:Mi,minFilter:sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ee=x.state.transmissionRenderTarget[z.id],ne=z.viewport||C;ee.setSize(ne.z,ne.w);const le=E.getRenderTarget();E.setRenderTarget(ee),E.getClearColor(W),Y=E.getClearAlpha(),Y<1&&E.setClearColor(16777215,.5),E.clear();const ue=E.toneMapping;E.toneMapping=lr;const ge=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),x.setupLightsView(z),oe===!0&&Ne.setGlobalState(E.clippingPlanes,z),Ei(w,B,z),qe.updateMultisampleRenderTarget(ee),qe.updateRenderTargetMipmap(ee),pe.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ze=0,Ue=L.length;Ze<Ue;Ze++){const He=L[Ze],tt=He.object,ct=He.geometry,Je=He.material,Oe=He.group;if(Je.side===Xi&&tt.layers.test(z.layers)){const ht=Je.side;Je.side=ti,Je.needsUpdate=!0,Dr(tt,B,z,ct,Je,Oe),Je.side=ht,Je.needsUpdate=!0,fe=!0}}fe===!0&&(qe.updateMultisampleRenderTarget(ee),qe.updateRenderTargetMipmap(ee))}E.setRenderTarget(le),E.setClearColor(W,Y),ge!==void 0&&(z.viewport=ge),E.toneMapping=ue}function Ei(w,L,B){const z=L.isScene===!0?L.overrideMaterial:null;for(let k=0,ee=w.length;k<ee;k++){const ne=w[k],le=ne.object,ue=ne.geometry,ge=z===null?ne.material:z,fe=ne.group;le.layers.test(B.layers)&&Dr(le,L,B,ue,ge,fe)}}function Dr(w,L,B,z,k,ee){w.onBeforeRender(E,L,B,z,k,ee),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(E,L,B,z,w,ee),k.transparent===!0&&k.side===Xi&&k.forceSinglePass===!1?(k.side=ti,k.needsUpdate=!0,E.renderBufferDirect(B,L,z,k,w,ee),k.side=Rr,k.needsUpdate=!0,E.renderBufferDirect(B,L,z,k,w,ee),k.side=Xi):E.renderBufferDirect(B,L,z,k,w,ee),w.onAfterRender(E,L,B,z,k,ee)}function Ai(w,L,B){L.isScene!==!0&&(L=ot);const z=Ce.get(w),k=x.state.lights,ee=x.state.shadowsArray,ne=k.state.version,le=we.getParameters(w,k.state,ee,L,B),ue=we.getProgramCacheKey(le);let ge=z.programs;z.environment=w.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(w.isMeshStandardMaterial?G:rt).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?L.environmentRotation:w.envMapRotation,ge===void 0&&(w.addEventListener("dispose",De),ge=new Map,z.programs=ge);let fe=ge.get(ue);if(fe!==void 0){if(z.currentProgram===fe&&z.lightsStateVersion===ne)return Tt(w,le),fe}else le.uniforms=we.getUniforms(w),w.onBuild(B,le,E),w.onBeforeCompile(le,E),fe=we.acquireProgram(le,ue),ge.set(ue,fe),z.uniforms=le.uniforms;const Ze=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=Ne.uniform),Tt(w,le),z.needsLights=P(w),z.lightsStateVersion=ne,z.needsLights&&(Ze.ambientLightColor.value=k.state.ambient,Ze.lightProbe.value=k.state.probe,Ze.directionalLights.value=k.state.directional,Ze.directionalLightShadows.value=k.state.directionalShadow,Ze.spotLights.value=k.state.spot,Ze.spotLightShadows.value=k.state.spotShadow,Ze.rectAreaLights.value=k.state.rectArea,Ze.ltc_1.value=k.state.rectAreaLTC1,Ze.ltc_2.value=k.state.rectAreaLTC2,Ze.pointLights.value=k.state.point,Ze.pointLightShadows.value=k.state.pointShadow,Ze.hemisphereLights.value=k.state.hemi,Ze.directionalShadowMap.value=k.state.directionalShadowMap,Ze.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ze.spotShadowMap.value=k.state.spotShadowMap,Ze.spotLightMatrix.value=k.state.spotLightMatrix,Ze.spotLightMap.value=k.state.spotLightMap,Ze.pointShadowMap.value=k.state.pointShadowMap,Ze.pointShadowMatrix.value=k.state.pointShadowMatrix),z.currentProgram=fe,z.uniformsList=null,fe}function si(w){if(w.uniformsList===null){const L=w.currentProgram.getUniforms();w.uniformsList=Lu.seqWithValue(L.seq,w.uniforms)}return w.uniformsList}function Tt(w,L){const B=Ce.get(w);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function $s(w,L,B,z,k){L.isScene!==!0&&(L=ot),qe.resetTextureUnits();const ee=L.fog,ne=z.isMeshStandardMaterial?L.environment:null,le=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Oi,ue=(z.isMeshStandardMaterial?G:rt).get(z.envMap||ne),ge=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,fe=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ze=!!B.morphAttributes.position,Ue=!!B.morphAttributes.normal,He=!!B.morphAttributes.color;let tt=lr;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(tt=E.toneMapping);const ct=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=ct!==void 0?ct.length:0,Oe=Ce.get(z),ht=x.state.lights;if(oe===!0&&(Ee===!0||w!==R)){const _t=w===R&&z.id===N;Ne.setState(z,w,_t)}let je=!1;z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ht.state.version||Oe.outputColorSpace!==le||k.isBatchedMesh&&Oe.batching===!1||!k.isBatchedMesh&&Oe.batching===!0||k.isInstancedMesh&&Oe.instancing===!1||!k.isInstancedMesh&&Oe.instancing===!0||k.isSkinnedMesh&&Oe.skinning===!1||!k.isSkinnedMesh&&Oe.skinning===!0||k.isInstancedMesh&&Oe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Oe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Oe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Oe.instancingMorph===!1&&k.morphTexture!==null||Oe.envMap!==ue||z.fog===!0&&Oe.fog!==ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ne.numPlanes||Oe.numIntersection!==Ne.numIntersection)||Oe.vertexAlphas!==ge||Oe.vertexTangents!==fe||Oe.morphTargets!==Ze||Oe.morphNormals!==Ue||Oe.morphColors!==He||Oe.toneMapping!==tt||Oe.morphTargetsCount!==Je)&&(je=!0):(je=!0,Oe.__version=z.version);let vt=Oe.currentProgram;je===!0&&(vt=Ai(z,L,k));let Gt=!1,mt=!1,Wt=!1;const Dt=vt.getUniforms(),Yt=Oe.uniforms;if(_e.useProgram(vt.program)&&(Gt=!0,mt=!0,Wt=!0),z.id!==N&&(N=z.id,mt=!0),Gt||R!==w){Dt.setValue($,"projectionMatrix",w.projectionMatrix),Dt.setValue($,"viewMatrix",w.matrixWorldInverse);const _t=Dt.map.cameraPosition;_t!==void 0&&_t.setValue($,be.setFromMatrixPosition(w.matrixWorld)),Se.logarithmicDepthBuffer&&Dt.setValue($,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Dt.setValue($,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,mt=!0,Wt=!0)}if(k.isSkinnedMesh){Dt.setOptional($,k,"bindMatrix"),Dt.setOptional($,k,"bindMatrixInverse");const _t=k.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),Dt.setValue($,"boneTexture",_t.boneTexture,qe))}k.isBatchedMesh&&(Dt.setOptional($,k,"batchingTexture"),Dt.setValue($,"batchingTexture",k._matricesTexture,qe));const fn=B.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&et.update(k,B,vt),(mt||Oe.receiveShadow!==k.receiveShadow)&&(Oe.receiveShadow=k.receiveShadow,Dt.setValue($,"receiveShadow",k.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Yt.envMap.value=ue,Yt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(Yt.envMapIntensity.value=L.environmentIntensity),mt&&(Dt.setValue($,"toneMappingExposure",E.toneMappingExposure),Oe.needsLights&&oo(Yt,Wt),ee&&z.fog===!0&&xe.refreshFogUniforms(Yt,ee),xe.refreshMaterialUniforms(Yt,z,Ae,te,x.state.transmissionRenderTarget[w.id]),Lu.upload($,si(Oe),Yt,qe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Lu.upload($,si(Oe),Yt,qe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Dt.setValue($,"center",k.center),Dt.setValue($,"modelViewMatrix",k.modelViewMatrix),Dt.setValue($,"normalMatrix",k.normalMatrix),Dt.setValue($,"modelMatrix",k.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const _t=z.uniformsGroups;for(let sn=0,kt=_t.length;sn<kt;sn++){const It=_t[sn];At.update(It,vt),At.bind(It,vt)}}return vt}function oo(w,L){w.ambientLightColor.needsUpdate=L,w.lightProbe.needsUpdate=L,w.directionalLights.needsUpdate=L,w.directionalLightShadows.needsUpdate=L,w.pointLights.needsUpdate=L,w.pointLightShadows.needsUpdate=L,w.spotLights.needsUpdate=L,w.spotLightShadows.needsUpdate=L,w.rectAreaLights.needsUpdate=L,w.hemisphereLights.needsUpdate=L}function P(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,L,B){Ce.get(w.texture).__webglTexture=L,Ce.get(w.depthTexture).__webglTexture=B;const z=Ce.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,L){const B=Ce.get(w);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(w,L=0,B=0){D=w,O=L,I=B;let z=!0,k=null,ee=!1,ne=!1;if(w){const ue=Ce.get(w);ue.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer($.FRAMEBUFFER,null),z=!1):ue.__webglFramebuffer===void 0?qe.setupRenderTarget(w):ue.__hasExternalTextures&&qe.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);const ge=w.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ne=!0);const fe=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(fe[L])?k=fe[L][B]:k=fe[L],ee=!0):w.samples>0&&qe.useMultisampledRTT(w)===!1?k=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(fe)?k=fe[B]:k=fe,C.copy(w.viewport),H.copy(w.scissor),q=w.scissorTest}else C.copy(K).multiplyScalar(Ae).floor(),H.copy(de).multiplyScalar(Ae).floor(),q=Re;if(_e.bindFramebuffer($.FRAMEBUFFER,k)&&z&&_e.drawBuffers(w,k),_e.viewport(C),_e.scissor(H),_e.setScissorTest(q),ee){const ue=Ce.get(w.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,B)}else if(ne){const ue=Ce.get(w.texture),ge=L||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,ue.__webglTexture,B||0,ge)}N=-1},this.readRenderTargetPixels=function(w,L,B,z,k,ee,ne){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ne!==void 0&&(le=le[ne]),le){_e.bindFramebuffer($.FRAMEBUFFER,le);try{const ue=w.texture,ge=ue.format,fe=ue.type;if(!Se.textureFormatReadable(ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=w.width-z&&B>=0&&B<=w.height-k&&$.readPixels(L,B,z,k,We.convert(ge),We.convert(fe),ee)}finally{const ue=D!==null?Ce.get(D).__webglFramebuffer:null;_e.bindFramebuffer($.FRAMEBUFFER,ue)}}},this.copyFramebufferToTexture=function(w,L,B=0){const z=Math.pow(2,-B),k=Math.floor(L.image.width*z),ee=Math.floor(L.image.height*z);qe.setTexture2D(L,0),$.copyTexSubImage2D($.TEXTURE_2D,B,0,0,w.x,w.y,k,ee),_e.unbindTexture()},this.copyTextureToTexture=function(w,L,B,z=0){const k=L.image.width,ee=L.image.height,ne=We.convert(B.format),le=We.convert(B.type);qe.setTexture2D(B,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,B.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,B.unpackAlignment),L.isDataTexture?$.texSubImage2D($.TEXTURE_2D,z,w.x,w.y,k,ee,ne,le,L.image.data):L.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,z,w.x,w.y,L.mipmaps[0].width,L.mipmaps[0].height,ne,L.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,z,w.x,w.y,ne,le,L.image),z===0&&B.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,L,B,z,k=0){const ee=w.max.x-w.min.x,ne=w.max.y-w.min.y,le=w.max.z-w.min.z,ue=We.convert(z.format),ge=We.convert(z.type);let fe;if(z.isData3DTexture)qe.setTexture3D(z,0),fe=$.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)qe.setTexture2DArray(z,0),fe=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,z.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,z.unpackAlignment);const Ze=$.getParameter($.UNPACK_ROW_LENGTH),Ue=$.getParameter($.UNPACK_IMAGE_HEIGHT),He=$.getParameter($.UNPACK_SKIP_PIXELS),tt=$.getParameter($.UNPACK_SKIP_ROWS),ct=$.getParameter($.UNPACK_SKIP_IMAGES),Je=B.isCompressedTexture?B.mipmaps[k]:B.image;$.pixelStorei($.UNPACK_ROW_LENGTH,Je.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Je.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,w.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,w.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,w.min.z),B.isDataTexture||B.isData3DTexture?$.texSubImage3D(fe,k,L.x,L.y,L.z,ee,ne,le,ue,ge,Je.data):z.isCompressedArrayTexture?$.compressedTexSubImage3D(fe,k,L.x,L.y,L.z,ee,ne,le,ue,Je.data):$.texSubImage3D(fe,k,L.x,L.y,L.z,ee,ne,le,ue,ge,Je),$.pixelStorei($.UNPACK_ROW_LENGTH,Ze),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Ue),$.pixelStorei($.UNPACK_SKIP_PIXELS,He),$.pixelStorei($.UNPACK_SKIP_ROWS,tt),$.pixelStorei($.UNPACK_SKIP_IMAGES,ct),k===0&&z.generateMipmaps&&$.generateMipmap(fe),_e.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?qe.setTextureCube(w,0):w.isData3DTexture?qe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?qe.setTexture2DArray(w,0):qe.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){O=0,I=0,D=null,_e.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xu?"display-p3":"srgb",t.unpackColorSpace=qt.workingColorSpace===wl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ju{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new ju(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ju{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new Ju(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let bl=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Ku{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ty("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qn=new F;class yi{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix4(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyNormalMatrix(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.transformDirection(e),this.setXYZ(t,Qn.x,Qn.y,Qn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fp extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ca;const Lo=new F,Ra=new F,Pa=new F,Ia=new ye,Uo=new ye,my=new ft,Zc=new F,Do=new F,jc=new F,Fv=new ye,qf=new ye,Bv=new ye;class gy extends zt{constructor(e=new Fp){if(super(),this.isSprite=!0,this.type="Sprite",Ca===void 0){Ca=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ku(t,5);Ca.setIndex([0,1,2,0,2,3]),Ca.setAttribute("position",new yi(n,3,0,!1)),Ca.setAttribute("uv",new yi(n,2,3,!1))}this.geometry=Ca,this.material=e,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ra.setFromMatrixScale(this.matrixWorld),my.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ra.multiplyScalar(-Pa.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Jc(Zc.set(-.5,-.5,0),Pa,o,Ra,i,s),Jc(Do.set(.5,-.5,0),Pa,o,Ra,i,s),Jc(jc.set(.5,.5,0),Pa,o,Ra,i,s),Fv.set(0,0),qf.set(1,0),Bv.set(1,1);let c=e.ray.intersectTriangle(Zc,Do,jc,!1,Lo);if(c===null&&(Jc(Do.set(-.5,.5,0),Pa,o,Ra,i,s),qf.set(0,1),c=e.ray.intersectTriangle(Zc,jc,Do,!1,Lo),c===null))return;const u=e.ray.origin.distanceTo(Lo);u<e.near||u>e.far||t.push({distance:u,point:Lo.clone(),uv:_i.getInterpolation(Lo,Zc,Do,jc,Fv,qf,Bv,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Jc(r,e,t,n,i,s){Ia.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Uo.x=s*Ia.x-i*Ia.y,Uo.y=i*Ia.x+s*Ia.y):Uo.copy(Ia),r.copy(e),r.x+=Uo.x,r.y+=Uo.y,r.applyMatrix4(my)}const Kc=new F,zv=new F;class vy extends zt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let s;for(s=0;s<i.length&&!(t<i[s].distance);s++);return i.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Kc.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Kc);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Kc.setFromMatrixPosition(e.matrixWorld),zv.setFromMatrixPosition(this.matrixWorld);const n=Kc.distanceTo(zv)/e.zoom;t[0].object.visible=!0;let i,s;for(i=1,s=t.length;i<s;i++){let o=t[i].distance;if(t[i].object.visible&&(o-=o*t[i].hysteresis),n>=o)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,s=n.length;i<s;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}const kv=new F,Hv=new Lt,Vv=new Lt,zT=new F,Gv=new ft,Qc=new F,Zf=new Un,Wv=new ft,jf=new to;class _y extends tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Td,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qc),this.boundingBox.expandByPoint(Qc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qc),this.boundingSphere.expandByPoint(Qc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zf.copy(this.boundingSphere),Zf.applyMatrix4(i),e.ray.intersectsSphere(Zf)!==!1&&(Wv.copy(i).invert(),jf.copy(e.ray).applyMatrix4(Wv),!(this.boundingBox!==null&&jf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===L_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Hv.fromBufferAttribute(i.attributes.skinIndex,e),Vv.fromBufferAttribute(i.attributes.skinWeight,e),kv.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Vv.getComponent(s);if(o!==0){const c=Hv.getComponent(s);Gv.multiplyMatrices(n.bones[c].matrixWorld,n.boneInverses[c]),t.addScaledVector(zT.copy(kv).applyMatrix4(Gv),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bp extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cr extends jt{constructor(e=null,t=1,n=1,i,s,o,c,u,h=In,f=In,p,m){super(null,o,c,u,h,f,i,s,p,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xv=new ft,kT=new ft;class Qu{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const c=e[s]?e[s].matrixWorld:kT;Xv.multiplyMatrices(c,t[s]),Xv.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Cr(t,e,e,wn,mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Bp),this.bones.push(o),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const c=n[i];e.boneInverses.push(c.toArray())}return e}}class ja extends Zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const La=new ft,Yv=new ft,$c=[],qv=new Ln,HT=new ft,No=new tn,Oo=new Un;class yy extends tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ja(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,HT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,La),qv.copy(e.boundingBox).applyMatrix4(La),this.boundingBox.union(qv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,La),Oo.copy(e.boundingSphere).applyMatrix4(La),this.boundingSphere.union(Oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let c=0;c<n.length;c++)n[c]=i[o+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(n),e.ray.intersectsSphere(Oo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,La),Yv.multiplyMatrices(n,La),No.matrixWorld=Yv,No.raycast(e,$c);for(let o=0,c=$c.length;o<c;o++){const u=$c[o];u.instanceId=s,u.object=this,t.push(u)}$c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ja(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cr(new Float32Array(i*this.count),i,this.count,Gu,mn));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const c=this.geometry.morphTargetsRelative?1:1-o,u=i*e;s[u]=c,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function VT(r,e){return r.z-e.z}function GT(r,e){return e.z-r.z}class WT{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const Ua="batchId",jr=new ft,Zv=new ft,XT=new ft,jv=new ft,Jf=new Tl,eu=new Ln,Es=new Un,Fo=new F,Kf=new WT,Yn=new tn,tu=[];function YT(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}class xy extends tn{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new Ct,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Cr(t,e,e,wn,mn);this._matricesTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const c in e.attributes){const u=e.getAttribute(c),{array:h,itemSize:f,normalized:p}=u,m=new h.constructor(n*f),g=new Zt(m,f,p);t.setAttribute(c,g)}if(e.getIndex()!==null){const c=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Zt(c,1))}const o=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Ua,new Zt(o,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Ua))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Ua}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Ua)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,jr),this.getBoundingBoxAt(i,eu).applyMatrix4(jr),t.union(eu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,jr),this.getBoundingSphereAt(i,Es).applyMatrix4(jr),t.union(Es))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const o=this._reservedRanges,c=this._drawRanges,u=this._bounds;this._geometryCount!==0&&(s=o[o.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,s===null?i.vertexStart=0:i.vertexStart=s.vertexStart+s.vertexCount;const h=e.getIndex(),f=h!==null;if(f&&(n===-1?i.indexCount=h.count:i.indexCount=n,s===null?i.indexStart=0:i.indexStart=s.indexStart+s.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const p=this._visibility,m=this._active,g=this._matricesTexture,y=this._matricesTexture.image.data;p.push(!0),m.push(!0);const S=this._geometryCount;this._geometryCount++,XT.toArray(y,S*16),g.needsUpdate=!0,o.push(i),c.push({start:f?i.indexStart:i.vertexStart,count:-1}),u.push({boxInitialized:!1,box:new Ln,sphereInitialized:!1,sphere:new Un});const x=this.geometry.getAttribute(Ua);for(let _=0;_<i.vertexCount;_++)x.setX(i.vertexStart+_,S);return x.needsUpdate=!0,this.setGeometryAt(S,e),S}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),c=this._reservedRanges[e];if(i&&o.count>c.indexCount||t.attributes.position.count>c.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const u=c.vertexStart,h=c.vertexCount;for(const g in n.attributes){if(g===Ua)continue;const y=t.getAttribute(g),S=n.getAttribute(g);YT(y,S,u);const x=y.itemSize;for(let _=y.count,A=h;_<A;_++){const E=u+_;for(let b=0;b<x;b++)S.setComponent(E,b,0)}S.needsUpdate=!0,S.addUpdateRange(u*x,h*x)}if(i){const g=c.indexStart;for(let y=0;y<o.count;y++)s.setX(g+y,u+o.getX(y));for(let y=o.count,S=c.indexCount;y<S;y++)s.setX(g+y,u);s.needsUpdate=!0,s.addUpdateRange(g,c.indexCount)}const f=this._bounds[e];t.boundingBox!==null?(f.box.copy(t.boundingBox),f.boxInitialized=!0):f.boxInitialized=!1,t.boundingSphere!==null?(f.sphere.copy(t.boundingSphere),f.sphereInitialized=!0):f.sphereInitialized=!1;const p=this._drawRanges[e],m=t.getAttribute("position");return p.count=i?o.count:m.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(e){return this._multiDrawInstances===null?null:this._multiDrawInstances[e]}setInstanceCountAt(e,t){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[e]=t,e}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],s=i.box,o=this.geometry;if(i.boxInitialized===!1){s.makeEmpty();const c=o.index,u=o.attributes.position,h=this._drawRanges[e];for(let f=h.start,p=h.start+h.count;f<p;f++){let m=f;c&&(m=c.getX(m)),s.expandByPoint(Fo.fromBufferAttribute(u,m))}i.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const i=this._bounds[e],s=i.sphere,o=this.geometry;if(i.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,eu),eu.getCenter(s.center);const c=o.index,u=o.attributes.position,h=this._drawRanges[e];let f=0;for(let p=h.start,m=h.start+h.count;p<m;p++){let g=p;c&&(g=c.getX(g)),Fo.fromBufferAttribute(u,g),f=Math.max(f,s.center.distanceToSquared(Fo))}s.radius=Math.sqrt(f),i.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,i=this._matricesTexture,s=this._matricesTexture.image.data,o=this._geometryCount;return e>=o||n[e]===!1?this:(t.toArray(s,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,i=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){const n=this._visibility,i=this._active,s=this._geometryCount;return e>=s||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,i=this._active,s=this._drawRanges,o=this._geometryCount,c=this.matrixWorld,u=this.geometry;Yn.material=this.material,Yn.geometry.index=u.index,Yn.geometry.attributes=u.attributes,Yn.geometry.boundingBox===null&&(Yn.geometry.boundingBox=new Ln),Yn.geometry.boundingSphere===null&&(Yn.geometry.boundingSphere=new Un);for(let h=0;h<o;h++){if(!n[h]||!i[h])continue;const f=s[h];Yn.geometry.setDrawRange(f.start,f.count),this.getMatrixAt(h,Yn.matrixWorld).premultiply(c),this.getBoundingBoxAt(h,Yn.geometry.boundingBox),this.getBoundingSphereAt(h,Yn.geometry.boundingSphere),Yn.raycast(e,tu);for(let p=0,m=tu.length;p<m;p++){const g=tu[p];g.object=this,g.batchId=h,t.push(g)}tu.length=0}Yn.material=null,Yn.geometry.index=null,Yn.geometry.attributes={},Yn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),c=o===null?1:o.array.BYTES_PER_ELEMENT,u=this._active,h=this._visibility,f=this._multiDrawStarts,p=this._multiDrawCounts,m=this._drawRanges,g=this.perObjectFrustumCulled;g&&(jv.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Jf.setFromProjectionMatrix(jv,e.coordinateSystem));let y=0;if(this.sortObjects){Zv.copy(this.matrixWorld).invert(),Fo.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Zv);for(let _=0,A=h.length;_<A;_++)if(h[_]&&u[_]){this.getMatrixAt(_,jr),this.getBoundingSphereAt(_,Es).applyMatrix4(jr);let E=!1;if(g&&(E=!Jf.intersectsSphere(Es)),!E){const b=Fo.distanceTo(Es.center);Kf.push(m[_],b)}}const S=Kf.list,x=this.customSort;x===null?S.sort(s.transparent?GT:VT):x.call(this,S,n);for(let _=0,A=S.length;_<A;_++){const E=S[_];f[y]=E.start*c,p[y]=E.count,y++}Kf.reset()}else for(let S=0,x=h.length;S<x;S++)if(h[S]&&u[S]){let _=!1;if(g&&(this.getMatrixAt(S,jr),this.getBoundingSphereAt(S,Es).applyMatrix4(jr),_=!Jf.intersectsSphere(Es)),!_){const A=m[S];f[y]=A.start*c,p[y]=A.count,y++}}this._multiDrawCount=y,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class ii extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fu=new F,Bu=new F,Jv=new ft,Bo=new to,nu=new Un,Qf=new F,Kv=new F;let ss=class extends zt{constructor(e=new Ct,t=new ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Fu.fromBufferAttribute(t,i-1),Bu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fu.distanceTo(Bu);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nu.copy(n.boundingSphere),nu.applyMatrix4(i),nu.radius+=s,e.ray.intersectsSphere(nu)===!1)return;Jv.copy(i).invert(),Bo.copy(e.ray).applyMatrix4(Jv);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const g=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let S=g,x=y-1;S<x;S+=h){const _=f.getX(S),A=f.getX(S+1),E=iu(this,e,Bo,u,_,A);E&&t.push(E)}if(this.isLineLoop){const S=f.getX(y-1),x=f.getX(g),_=iu(this,e,Bo,u,S,x);_&&t.push(_)}}else{const g=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let S=g,x=y-1;S<x;S+=h){const _=iu(this,e,Bo,u,S,S+1);_&&t.push(_)}if(this.isLineLoop){const S=iu(this,e,Bo,u,y-1,g);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}};function iu(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Fu.fromBufferAttribute(o,i),Bu.fromBufferAttribute(o,s),t.distanceSqToSegment(Fu,Bu,Qf,Kv)>n)return;Qf.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(Qf);if(!(u<e.near||u>e.far))return{distance:u,point:Kv.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Qv=new F,$v=new F;class hr extends ss{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qv.fromBufferAttribute(t,i),$v.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qv.distanceTo($v);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sy extends ss{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class zp extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const e0=new ft,rp=new to,ru=new Un,su=new F;class My extends zt{constructor(e=new Ct,t=new zp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ru.copy(n.boundingSphere),ru.applyMatrix4(i),ru.radius+=s,e.ray.intersectsSphere(ru)===!1)return;e0.copy(i).invert(),rp.copy(e.ray).applyMatrix4(e0);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=m,S=g;y<S;y++){const x=h.getX(y);su.fromBufferAttribute(p,x),t0(su,x,u,i,e,t,this)}}else{const m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let y=m,S=g;y<S;y++)su.fromBufferAttribute(p,y),t0(su,y,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function t0(r,e,t,n,i,s,o){const c=rp.distanceSqToPoint(r);if(c<t){const u=new F;rp.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,object:o})}}class qT extends jt{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Xt,this.magFilter=s!==void 0?s:Xt,this.generateMipmaps=!1;const f=this;function p(){f.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ZT extends jt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=In,this.minFilter=In,this.generateMipmaps=!1,this.needsUpdate=!0}}class $u extends jt{constructor(e,t,n,i,s,o,c,u,h,f,p,m){super(null,o,c,u,h,f,i,s,p,m),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class jT extends $u{constructor(e,t,n,i,s,o){super(e,t,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Sn}}class JT extends $u{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ur),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class KT extends jt{constructor(e,t,n,i,s,o,c,u,h){super(e,t,n,i,s,o,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let c=0,u=s-1,h;for(;c<=u;)if(i=Math.floor(c+(u-c)/2),h=n[i]-o,h<0)c=i+1;else if(h>0)u=i-1;else{u=i;break}if(i=u,n[i]===o)return i/(s-1);const f=n[i],m=n[i+1]-f,g=(o-f)/m;return(i+g)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),c=this.getPoint(s),u=t||(o.isVector2?new ye:new F);return u.copy(c).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new F,i=[],s=[],o=[],c=new F,u=new ft;for(let g=0;g<=e;g++){const y=g/e;i[g]=this.getTangentAt(y,new F)}s[0]=new F,o[0]=new F;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),m<=h&&n.set(0,0,1),c.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],c),o[0].crossVectors(i[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),c.crossVectors(i[g-1],i[g]),c.length()>Number.EPSILON){c.normalize();const y=Math.acos(hn(i[g-1].dot(i[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(c,y))}o[g].crossVectors(i[g],s[g])}if(t===!0){let g=Math.acos(hn(s[0].dot(s[e]),-1,1));g/=e,i[0].dot(c.crossVectors(s[0],s[e]))>0&&(g=-g);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(i[y],g*y)),o[y].crossVectors(i[y],s[y])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class eh extends Yi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,c=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=c,this.aRotation=u}getPoint(e,t=new ye){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const c=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(c),h=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=h-this.aY;u=m*f-g*p+this.aX,h=m*p+g*f+this.aY}return n.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wy extends eh{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kp(){let r=0,e=0,t=0,n=0;function i(s,o,c,u){r=s,e=c,t=-3*s+3*o-2*c-u,n=2*s-2*o+c+u}return{initCatmullRom:function(s,o,c,u,h){i(o,c,h*(c-s),h*(u-o))},initNonuniformCatmullRom:function(s,o,c,u,h,f,p){let m=(o-s)/h-(c-s)/(h+f)+(c-o)/f,g=(c-o)/f-(u-o)/(f+p)+(u-c)/p;m*=f,g*=f,i(o,c,m,g)},calc:function(s){const o=s*s,c=o*s;return r+e*s+t*o+n*c}}}const au=new F,$f=new kp,ed=new kp,td=new kp;class Ey extends Yi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let c=Math.floor(o),u=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:u===0&&c===s-1&&(c=s-2,u=1);let h,f;this.closed||c>0?h=i[(c-1)%s]:(au.subVectors(i[0],i[1]).add(i[0]),h=au);const p=i[c%s],m=i[(c+1)%s];if(this.closed||c+2<s?f=i[(c+2)%s]:(au.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=au),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(p),g),S=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);S<1e-4&&(S=1),y<1e-4&&(y=S),x<1e-4&&(x=S),$f.initNonuniformCatmullRom(h.x,p.x,m.x,f.x,y,S,x),ed.initNonuniformCatmullRom(h.y,p.y,m.y,f.y,y,S,x),td.initNonuniformCatmullRom(h.z,p.z,m.z,f.z,y,S,x)}else this.curveType==="catmullrom"&&($f.initCatmullRom(h.x,p.x,m.x,f.x,this.tension),ed.initCatmullRom(h.y,p.y,m.y,f.y,this.tension),td.initCatmullRom(h.z,p.z,m.z,f.z,this.tension));return n.set($f.calc(u),ed.calc(u),td.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function n0(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,c=r*r,u=r*c;return(2*t-2*n+s+o)*u+(-3*t+3*n-2*s-o)*c+s*r+t}function QT(r,e){const t=1-r;return t*t*e}function $T(r,e){return 2*(1-r)*r*e}function eb(r,e){return r*r*e}function jo(r,e,t,n){return QT(r,e)+$T(r,t)+eb(r,n)}function tb(r,e){const t=1-r;return t*t*t*e}function nb(r,e){const t=1-r;return 3*t*t*r*e}function ib(r,e){return 3*(1-r)*r*r*e}function rb(r,e){return r*r*r*e}function Jo(r,e,t,n,i){return tb(r,e)+nb(r,t)+ib(r,n)+rb(r,i)}class Hp extends Yi{constructor(e=new ye,t=new ye,n=new ye,i=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ye){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(Jo(e,i.x,s.x,o.x,c.x),Jo(e,i.y,s.y,o.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ay extends Yi{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,o=this.v2,c=this.v3;return n.set(Jo(e,i.x,s.x,o.x,c.x),Jo(e,i.y,s.y,o.y,c.y),Jo(e,i.z,s.z,o.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vp extends Yi{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ty extends Yi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gp extends Yi{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(jo(e,i.x,s.x,o.x),jo(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wp extends Yi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(jo(e,i.x,s.x,o.x),jo(e,i.y,s.y,o.y),jo(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xp extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),c=s-o,u=i[o===0?o:o-1],h=i[o],f=i[o>i.length-2?i.length-1:o+1],p=i[o>i.length-3?i.length-1:o+2];return n.set(n0(c,u.x,h.x,f.x,p.x),n0(c,u.y,h.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ye().fromArray(i))}return this}}var zu=Object.freeze({__proto__:null,ArcCurve:wy,CatmullRomCurve3:Ey,CubicBezierCurve:Hp,CubicBezierCurve3:Ay,EllipseCurve:eh,LineCurve:Vp,LineCurve3:Ty,QuadraticBezierCurve:Gp,QuadraticBezierCurve3:Wp,SplineCurve:Xp});class by extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,c=this.curves[s],u=c.getLength(),h=u===0?0:1-o/u;return c.getPointAt(h,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],c=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,u=o.getPoints(c);for(let h=0;h<u.length;h++){const f=u[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zu[i.type]().fromJSON(i))}return this}}class hl extends by{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Vp(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Gp(this.currentPoint.clone(),new ye(e,t),new ye(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const c=new Hp(this.currentPoint.clone(),new ye(e,t),new ye(n,i),new ye(s,o));return this.curves.push(c),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Xp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+c,t+u,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,c,u){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,s,o,c,u),this}absellipse(e,t,n,i,s,o,c,u){const h=new eh(e,t,n,i,s,o,c,u);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cl extends Ct{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=hn(i,0,Math.PI*2);const s=[],o=[],c=[],u=[],h=[],f=1/t,p=new F,m=new ye,g=new F,y=new F,S=new F;let x=0,_=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:x=e[A+1].x-e[A].x,_=e[A+1].y-e[A].y,g.x=_*1,g.y=-x,g.z=_*0,S.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case e.length-1:u.push(S.x,S.y,S.z);break;default:x=e[A+1].x-e[A].x,_=e[A+1].y-e[A].y,g.x=_*1,g.y=-x,g.z=_*0,y.copy(g),g.x+=S.x,g.y+=S.y,g.z+=S.z,g.normalize(),u.push(g.x,g.y,g.z),S.copy(y)}for(let A=0;A<=t;A++){const E=n+A*f*i,b=Math.sin(E),O=Math.cos(E);for(let I=0;I<=e.length-1;I++){p.x=e[I].x*b,p.y=e[I].y,p.z=e[I].x*O,o.push(p.x,p.y,p.z),m.x=A/t,m.y=I/(e.length-1),c.push(m.x,m.y);const D=u[3*I+0]*b,N=u[3*I+1],R=u[3*I+0]*O;h.push(D,N,R)}}for(let A=0;A<t;A++)for(let E=0;E<e.length-1;E++){const b=E+A*e.length,O=b,I=b+e.length,D=b+e.length+1,N=b+1;s.push(O,I,N),s.push(D,N,I)}this.setIndex(s),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(c,2)),this.setAttribute("normal",new Qe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.points,e.segments,e.phiStart,e.phiLength)}}class th extends Cl{constructor(e=1,t=1,n=4,i=8){const s=new hl;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new th(e.radius,e.length,e.capSegments,e.radialSegments)}}class nh extends Ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],c=[],u=[],h=new F,f=new ye;o.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let p=0,m=3;p<=t;p++,m+=3){const g=n+p/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),o.push(h.x,h.y,h.z),c.push(0,0,1),f.x=(o[m]/e+1)/2,f.y=(o[m+1]/e+1)/2,u.push(f.x,f.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ro extends Ct{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),s=Math.floor(s);const f=[],p=[],m=[],g=[];let y=0;const S=[],x=n/2;let _=0;A(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(m,3)),this.setAttribute("uv",new Qe(g,2));function A(){const b=new F,O=new F;let I=0;const D=(t-e)/n;for(let N=0;N<=s;N++){const R=[],C=N/s,H=C*(t-e)+e;for(let q=0;q<=i;q++){const W=q/i,Y=W*u+c,ie=Math.sin(Y),te=Math.cos(Y);O.x=H*ie,O.y=-C*n+x,O.z=H*te,p.push(O.x,O.y,O.z),b.set(ie,D,te).normalize(),m.push(b.x,b.y,b.z),g.push(W,1-C),R.push(y++)}S.push(R)}for(let N=0;N<i;N++)for(let R=0;R<s;R++){const C=S[R][N],H=S[R+1][N],q=S[R+1][N+1],W=S[R][N+1];f.push(C,H,W),f.push(H,q,W),I+=6}h.addGroup(_,I,0),_+=I}function E(b){const O=y,I=new ye,D=new F;let N=0;const R=b===!0?e:t,C=b===!0?1:-1;for(let q=1;q<=i;q++)p.push(0,x*C,0),m.push(0,C,0),g.push(.5,.5),y++;const H=y;for(let q=0;q<=i;q++){const Y=q/i*u+c,ie=Math.cos(Y),te=Math.sin(Y);D.x=R*te,D.y=x*C,D.z=R*ie,p.push(D.x,D.y,D.z),m.push(0,C,0),I.x=ie*.5+.5,I.y=te*.5*C+.5,g.push(I.x,I.y),y++}for(let q=0;q<i;q++){const W=O+q,Y=H+q;b===!0?f.push(Y,Y+1,W):f.push(Y+1,Y,W),N+=3}h.addGroup(_,N,b===!0?1:2),_+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ih extends ro{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,c=Math.PI*2){super(0,e,t,n,i,s,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:c}}static fromJSON(e){return new ih(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class os extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];c(i),h(n),f(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(A){const E=new F,b=new F,O=new F;for(let I=0;I<t.length;I+=3)g(t[I+0],E),g(t[I+1],b),g(t[I+2],O),u(E,b,O,A)}function u(A,E,b,O){const I=O+1,D=[];for(let N=0;N<=I;N++){D[N]=[];const R=A.clone().lerp(b,N/I),C=E.clone().lerp(b,N/I),H=I-N;for(let q=0;q<=H;q++)q===0&&N===I?D[N][q]=R:D[N][q]=R.clone().lerp(C,q/H)}for(let N=0;N<I;N++)for(let R=0;R<2*(I-N)-1;R++){const C=Math.floor(R/2);R%2===0?(m(D[N][C+1]),m(D[N+1][C]),m(D[N][C])):(m(D[N][C+1]),m(D[N+1][C+1]),m(D[N+1][C]))}}function h(A){const E=new F;for(let b=0;b<s.length;b+=3)E.x=s[b+0],E.y=s[b+1],E.z=s[b+2],E.normalize().multiplyScalar(A),s[b+0]=E.x,s[b+1]=E.y,s[b+2]=E.z}function f(){const A=new F;for(let E=0;E<s.length;E+=3){A.x=s[E+0],A.y=s[E+1],A.z=s[E+2];const b=x(A)/2/Math.PI+.5,O=_(A)/Math.PI+.5;o.push(b,1-O)}y(),p()}function p(){for(let A=0;A<o.length;A+=6){const E=o[A+0],b=o[A+2],O=o[A+4],I=Math.max(E,b,O),D=Math.min(E,b,O);I>.9&&D<.1&&(E<.2&&(o[A+0]+=1),b<.2&&(o[A+2]+=1),O<.2&&(o[A+4]+=1))}}function m(A){s.push(A.x,A.y,A.z)}function g(A,E){const b=A*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function y(){const A=new F,E=new F,b=new F,O=new F,I=new ye,D=new ye,N=new ye;for(let R=0,C=0;R<s.length;R+=9,C+=6){A.set(s[R+0],s[R+1],s[R+2]),E.set(s[R+3],s[R+4],s[R+5]),b.set(s[R+6],s[R+7],s[R+8]),I.set(o[C+0],o[C+1]),D.set(o[C+2],o[C+3]),N.set(o[C+4],o[C+5]),O.copy(A).add(E).add(b).divideScalar(3);const H=x(O);S(I,C+0,A,H),S(D,C+2,E,H),S(N,C+4,b,H)}}function S(A,E,b,O){O<0&&A.x===1&&(o[E]=A.x-1),b.x===0&&b.z===0&&(o[E]=O/2/Math.PI+.5)}function x(A){return Math.atan2(A.z,-A.x)}function _(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.vertices,e.indices,e.radius,e.details)}}class rh extends os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rh(e.radius,e.detail)}}const ou=new F,lu=new F,nd=new F,cu=new _i;class Cy extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Hs*t),o=e.getIndex(),c=e.getAttribute("position"),u=o?o.count:c.count,h=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let y=0;y<u;y+=3){o?(h[0]=o.getX(y),h[1]=o.getX(y+1),h[2]=o.getX(y+2)):(h[0]=y,h[1]=y+1,h[2]=y+2);const{a:S,b:x,c:_}=cu;if(S.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),_.fromBufferAttribute(c,h[2]),cu.getNormal(nd),p[0]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,p[1]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,p[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let A=0;A<3;A++){const E=(A+1)%3,b=p[A],O=p[E],I=cu[f[A]],D=cu[f[E]],N=`${b}_${O}`,R=`${O}_${b}`;R in m&&m[R]?(nd.dot(m[R].normal)<=s&&(g.push(I.x,I.y,I.z),g.push(D.x,D.y,D.z)),m[R]=null):N in m||(m[N]={index0:h[A],index1:h[E],normal:nd.clone()})}}for(const y in m)if(m[y]){const{index0:S,index1:x}=m[y];ou.fromBufferAttribute(c,S),lu.fromBufferAttribute(c,x),g.push(ou.x,ou.y,ou.z),g.push(lu.x,lu.y,lu.z)}this.setAttribute("position",new Qe(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Gs extends hl{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new hl().fromJSON(i))}return this}}const sb={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Ry(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let c,u,h,f,p,m,g;if(n&&(s=ub(r,e,s,t)),r.length>80*t){c=h=r[0],u=f=r[1];for(let y=t;y<i;y+=t)p=r[y],m=r[y+1],p<c&&(c=p),m<u&&(u=m),p>h&&(h=p),m>f&&(f=m);g=Math.max(h-c,f-u),g=g!==0?32767/g:0}return fl(s,o,t,c,u,g,0),o}};function Ry(r,e,t,n,i){let s,o;if(i===Sb(r,e,t,n)>0)for(s=e;s<t;s+=n)o=i0(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=i0(s,r[s],r[s+1],o);return o&&sh(o,o.next)&&(pl(o),o=o.next),o}function Xs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(sh(t,t.next)||ln(t.prev,t,t.next)===0)){if(pl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fl(r,e,t,n,i,s,o){if(!r)return;!o&&s&&mb(r,n,i,s);let c=r,u,h;for(;r.prev!==r.next;){if(u=r.prev,h=r.next,s?ob(r,n,i,s):ab(r)){e.push(u.i/t|0),e.push(r.i/t|0),e.push(h.i/t|0),pl(r),r=h.next,c=h.next;continue}if(r=h,r===c){o?o===1?(r=lb(Xs(r),e,t),fl(r,e,t,n,i,s,2)):o===2&&cb(r,e,t,n,i,s):fl(Xs(r),e,t,n,i,s,1);break}}}function ab(r){const e=r.prev,t=r,n=r.next;if(ln(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,c=e.y,u=t.y,h=n.y,f=i<s?i<o?i:o:s<o?s:o,p=c<u?c<h?c:h:u<h?u:h,m=i>s?i>o?i:o:s>o?s:o,g=c>u?c>h?c:h:u>h?u:h;let y=n.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=g&&Ha(i,c,s,u,o,h,y.x,y.y)&&ln(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function ob(r,e,t,n){const i=r.prev,s=r,o=r.next;if(ln(i,s,o)>=0)return!1;const c=i.x,u=s.x,h=o.x,f=i.y,p=s.y,m=o.y,g=c<u?c<h?c:h:u<h?u:h,y=f<p?f<m?f:m:p<m?p:m,S=c>u?c>h?c:h:u>h?u:h,x=f>p?f>m?f:m:p>m?p:m,_=sp(g,y,e,t,n),A=sp(S,x,e,t,n);let E=r.prevZ,b=r.nextZ;for(;E&&E.z>=_&&b&&b.z<=A;){if(E.x>=g&&E.x<=S&&E.y>=y&&E.y<=x&&E!==i&&E!==o&&Ha(c,f,u,p,h,m,E.x,E.y)&&ln(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=g&&b.x<=S&&b.y>=y&&b.y<=x&&b!==i&&b!==o&&Ha(c,f,u,p,h,m,b.x,b.y)&&ln(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=_;){if(E.x>=g&&E.x<=S&&E.y>=y&&E.y<=x&&E!==i&&E!==o&&Ha(c,f,u,p,h,m,E.x,E.y)&&ln(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=A;){if(b.x>=g&&b.x<=S&&b.y>=y&&b.y<=x&&b!==i&&b!==o&&Ha(c,f,u,p,h,m,b.x,b.y)&&ln(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function lb(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!sh(i,s)&&Py(i,n,n.next,s)&&dl(i,s)&&dl(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),pl(n),pl(n.next),n=r=s),n=n.next}while(n!==r);return Xs(n)}function cb(r,e,t,n,i,s){let o=r;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&_b(o,c)){let u=Iy(o,c);o=Xs(o,o.next),u=Xs(u,u.next),fl(o,e,t,n,i,s,0),fl(u,e,t,n,i,s,0);return}c=c.next}o=o.next}while(o!==r)}function ub(r,e,t,n){const i=[];let s,o,c,u,h;for(s=0,o=e.length;s<o;s++)c=e[s]*n,u=s<o-1?e[s+1]*n:r.length,h=Ry(r,c,u,n,!1),h===h.next&&(h.steiner=!0),i.push(vb(h));for(i.sort(hb),s=0;s<i.length;s++)t=fb(i[s],t);return t}function hb(r,e){return r.x-e.x}function fb(r,e){const t=db(r,e);if(!t)return e;const n=Iy(t,r);return Xs(n,n.next),Xs(t,t.next)}function db(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const m=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>n&&(n=m,i=t.x<t.next.x?t:t.next,m===s))return i}t=t.next}while(t!==e);if(!i)return null;const c=i,u=i.x,h=i.y;let f=1/0,p;t=i;do s>=t.x&&t.x>=u&&s!==t.x&&Ha(o<h?s:n,o,u,h,o<h?n:s,o,t.x,t.y)&&(p=Math.abs(o-t.y)/(s-t.x),dl(t,r)&&(p<f||p===f&&(t.x>i.x||t.x===i.x&&pb(i,t)))&&(i=t,f=p)),t=t.next;while(t!==c);return i}function pb(r,e){return ln(r.prev,r,e.prev)<0&&ln(e.next,r,r.next)<0}function mb(r,e,t,n){let i=r;do i.z===0&&(i.z=sp(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,gb(i)}function gb(r){let e,t,n,i,s,o,c,u,h=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,c=0,e=0;e<h&&(c++,n=n.nextZ,!!n);e++);for(u=h;c>0||u>0&&n;)c!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,c--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,h*=2}while(o>1);return r}function sp(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function vb(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ha(r,e,t,n,i,s,o,c){return(i-o)*(e-c)>=(r-o)*(s-c)&&(r-o)*(n-c)>=(t-o)*(e-c)&&(t-o)*(s-c)>=(i-o)*(n-c)}function _b(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!yb(r,e)&&(dl(r,e)&&dl(e,r)&&xb(r,e)&&(ln(r.prev,r,e.prev)||ln(r,e.prev,e))||sh(r,e)&&ln(r.prev,r,r.next)>0&&ln(e.prev,e,e.next)>0)}function ln(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function sh(r,e){return r.x===e.x&&r.y===e.y}function Py(r,e,t,n){const i=hu(ln(r,e,t)),s=hu(ln(r,e,n)),o=hu(ln(t,n,r)),c=hu(ln(t,n,e));return!!(i!==s&&o!==c||i===0&&uu(r,t,e)||s===0&&uu(r,n,e)||o===0&&uu(t,r,n)||c===0&&uu(t,e,n))}function uu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function hu(r){return r>0?1:r<0?-1:0}function yb(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Py(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function dl(r,e){return ln(r.prev,r,r.next)<0?ln(r,e,r.next)>=0&&ln(r,r.prev,e)>=0:ln(r,e,r.prev)<0||ln(r,r.next,e)<0}function xb(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Iy(r,e){const t=new ap(r.i,r.x,r.y),n=new ap(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function i0(r,e,t,n){const i=new ap(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ap(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sb(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class cr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];r0(e),s0(n,e);let o=e.length;t.forEach(r0);for(let u=0;u<t.length;u++)i.push(o),o+=t[u].length,s0(n,t[u]);const c=sb.triangulate(n,i);for(let u=0;u<c.length;u+=3)s.push(c.slice(u,u+3));return s}}function r0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function s0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ah extends Ct{constructor(e=new Gs([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];o(h)}this.setAttribute("position",new Qe(i,3)),this.setAttribute("uv",new Qe(s,2)),this.computeVertexNormals();function o(c){const u=[],h=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:g-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:Mb;let E,b=!1,O,I,D,N;_&&(E=_.getSpacedPoints(f),b=!0,m=!1,O=_.computeFrenetFrames(f,!1),I=new F,D=new F,N=new F),m||(x=0,g=0,y=0,S=0);const R=c.extractPoints(h);let C=R.shape;const H=R.holes;if(!cr.isClockWise(C)){C=C.reverse();for(let pe=0,Se=H.length;pe<Se;pe++){const _e=H[pe];cr.isClockWise(_e)&&(H[pe]=_e.reverse())}}const W=cr.triangulateShape(C,H),Y=C;for(let pe=0,Se=H.length;pe<Se;pe++){const _e=H[pe];C=C.concat(_e)}function ie(pe,Se,_e){return Se||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(Se,_e)}const te=C.length,Ae=W.length;function X(pe,Se,_e){let Le,Ce,qe;const rt=pe.x-Se.x,G=pe.y-Se.y,U=_e.x-pe.x,se=_e.y-pe.y,ve=rt*rt+G*G,we=rt*se-G*U;if(Math.abs(we)>Number.EPSILON){const xe=Math.sqrt(ve),$e=Math.sqrt(U*U+se*se),ze=Se.x-G/xe,Ne=Se.y+rt/xe,pt=_e.x-se/$e,Ie=_e.y+U/$e,et=((pt-ze)*se-(Ie-Ne)*U)/(rt*se-G*U);Le=ze+rt*et-pe.x,Ce=Ne+G*et-pe.y;const Et=Le*Le+Ce*Ce;if(Et<=2)return new ye(Le,Ce);qe=Math.sqrt(Et/2)}else{let xe=!1;rt>Number.EPSILON?U>Number.EPSILON&&(xe=!0):rt<-Number.EPSILON?U<-Number.EPSILON&&(xe=!0):Math.sign(G)===Math.sign(se)&&(xe=!0),xe?(Le=-G,Ce=rt,qe=Math.sqrt(ve)):(Le=rt,Ce=G,qe=Math.sqrt(ve/2))}return new ye(Le/qe,Ce/qe)}const re=[];for(let pe=0,Se=Y.length,_e=Se-1,Le=pe+1;pe<Se;pe++,_e++,Le++)_e===Se&&(_e=0),Le===Se&&(Le=0),re[pe]=X(Y[pe],Y[_e],Y[Le]);const K=[];let de,Re=re.concat();for(let pe=0,Se=H.length;pe<Se;pe++){const _e=H[pe];de=[];for(let Le=0,Ce=_e.length,qe=Ce-1,rt=Le+1;Le<Ce;Le++,qe++,rt++)qe===Ce&&(qe=0),rt===Ce&&(rt=0),de[Le]=X(_e[Le],_e[qe],_e[rt]);K.push(de),Re=Re.concat(de)}for(let pe=0;pe<x;pe++){const Se=pe/x,_e=g*Math.cos(Se*Math.PI/2),Le=y*Math.sin(Se*Math.PI/2)+S;for(let Ce=0,qe=Y.length;Ce<qe;Ce++){const rt=ie(Y[Ce],re[Ce],Le);be(rt.x,rt.y,-_e)}for(let Ce=0,qe=H.length;Ce<qe;Ce++){const rt=H[Ce];de=K[Ce];for(let G=0,U=rt.length;G<U;G++){const se=ie(rt[G],de[G],Le);be(se.x,se.y,-_e)}}}const Be=y+S;for(let pe=0;pe<te;pe++){const Se=m?ie(C[pe],Re[pe],Be):C[pe];b?(D.copy(O.normals[0]).multiplyScalar(Se.x),I.copy(O.binormals[0]).multiplyScalar(Se.y),N.copy(E[0]).add(D).add(I),be(N.x,N.y,N.z)):be(Se.x,Se.y,0)}for(let pe=1;pe<=f;pe++)for(let Se=0;Se<te;Se++){const _e=m?ie(C[Se],Re[Se],Be):C[Se];b?(D.copy(O.normals[pe]).multiplyScalar(_e.x),I.copy(O.binormals[pe]).multiplyScalar(_e.y),N.copy(E[pe]).add(D).add(I),be(N.x,N.y,N.z)):be(_e.x,_e.y,p/f*pe)}for(let pe=x-1;pe>=0;pe--){const Se=pe/x,_e=g*Math.cos(Se*Math.PI/2),Le=y*Math.sin(Se*Math.PI/2)+S;for(let Ce=0,qe=Y.length;Ce<qe;Ce++){const rt=ie(Y[Ce],re[Ce],Le);be(rt.x,rt.y,p+_e)}for(let Ce=0,qe=H.length;Ce<qe;Ce++){const rt=H[Ce];de=K[Ce];for(let G=0,U=rt.length;G<U;G++){const se=ie(rt[G],de[G],Le);b?be(se.x,se.y+E[f-1].y,E[f-1].x+_e):be(se.x,se.y,p+_e)}}}oe(),Ee();function oe(){const pe=i.length/3;if(m){let Se=0,_e=te*Se;for(let Le=0;Le<Ae;Le++){const Ce=W[Le];ot(Ce[2]+_e,Ce[1]+_e,Ce[0]+_e)}Se=f+x*2,_e=te*Se;for(let Le=0;Le<Ae;Le++){const Ce=W[Le];ot(Ce[0]+_e,Ce[1]+_e,Ce[2]+_e)}}else{for(let Se=0;Se<Ae;Se++){const _e=W[Se];ot(_e[2],_e[1],_e[0])}for(let Se=0;Se<Ae;Se++){const _e=W[Se];ot(_e[0]+te*f,_e[1]+te*f,_e[2]+te*f)}}n.addGroup(pe,i.length/3-pe,0)}function Ee(){const pe=i.length/3;let Se=0;Te(Y,Se),Se+=Y.length;for(let _e=0,Le=H.length;_e<Le;_e++){const Ce=H[_e];Te(Ce,Se),Se+=Ce.length}n.addGroup(pe,i.length/3-pe,1)}function Te(pe,Se){let _e=pe.length;for(;--_e>=0;){const Le=_e;let Ce=_e-1;Ce<0&&(Ce=pe.length-1);for(let qe=0,rt=f+x*2;qe<rt;qe++){const G=te*qe,U=te*(qe+1),se=Se+Le+G,ve=Se+Ce+G,we=Se+Ce+U,xe=Se+Le+U;gt(se,ve,we,xe)}}}function be(pe,Se,_e){u.push(pe),u.push(Se),u.push(_e)}function ot(pe,Se,_e){$(pe),$(Se),$(_e);const Le=i.length/3,Ce=A.generateTopUV(n,i,Le-3,Le-2,Le-1);dt(Ce[0]),dt(Ce[1]),dt(Ce[2])}function gt(pe,Se,_e,Le){$(pe),$(Se),$(Le),$(Se),$(_e),$(Le);const Ce=i.length/3,qe=A.generateSideWallUV(n,i,Ce-6,Ce-3,Ce-2,Ce-1);dt(qe[0]),dt(qe[1]),dt(qe[3]),dt(qe[1]),dt(qe[2]),dt(qe[3])}function $(pe){i.push(u[pe*3+0]),i.push(u[pe*3+1]),i.push(u[pe*3+2])}function dt(pe){s.push(pe.x),s.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wb(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const c=t[e.shapes[s]];n.push(c)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new zu[i.type]().fromJSON(i)),new ah(n,e.options)}}const Mb={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],c=e[n*3],u=e[n*3+1],h=e[i*3],f=e[i*3+1];return[new ye(s,o),new ye(c,u),new ye(h,f)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],c=e[t*3+1],u=e[t*3+2],h=e[n*3],f=e[n*3+1],p=e[n*3+2],m=e[i*3],g=e[i*3+1],y=e[i*3+2],S=e[s*3],x=e[s*3+1],_=e[s*3+2];return Math.abs(c-f)<Math.abs(o-h)?[new ye(o,1-u),new ye(h,1-p),new ye(m,1-y),new ye(S,1-_)]:[new ye(c,1-u),new ye(f,1-p),new ye(g,1-y),new ye(x,1-_)]}};function wb(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Rl extends os{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rl(e.radius,e.detail)}}class Pl extends os{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pl(e.radius,e.detail)}}class oh extends Ct{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const c=[],u=[],h=[],f=[];let p=e;const m=(t-e)/i,g=new F,y=new ye;for(let S=0;S<=i;S++){for(let x=0;x<=n;x++){const _=s+x/n*o;g.x=p*Math.cos(_),g.y=p*Math.sin(_),u.push(g.x,g.y,g.z),h.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,f.push(y.x,y.y)}p+=m}for(let S=0;S<i;S++){const x=S*(n+1);for(let _=0;_<n;_++){const A=_+x,E=A,b=A+n+1,O=A+n+2,I=A+1;c.push(E,b,I),c.push(b,O,I)}}this.setIndex(c),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class lh extends Ct{constructor(e=new Gs([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let c=0,u=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(c,u,f),c+=u,u=0;this.setIndex(n),this.setAttribute("position",new Qe(i,3)),this.setAttribute("normal",new Qe(s,3)),this.setAttribute("uv",new Qe(o,2));function h(f){const p=i.length/3,m=f.extractPoints(t);let g=m.shape;const y=m.holes;cr.isClockWise(g)===!1&&(g=g.reverse());for(let x=0,_=y.length;x<_;x++){const A=y[x];cr.isClockWise(A)===!0&&(y[x]=A.reverse())}const S=cr.triangulateShape(g,y);for(let x=0,_=y.length;x<_;x++){const A=y[x];g=g.concat(A)}for(let x=0,_=g.length;x<_;x++){const A=g[x];i.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let x=0,_=S.length;x<_;x++){const A=S[x],E=A[0]+p,b=A[1]+p,O=A[2]+p;n.push(E,b,O),u+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Eb(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new lh(n,e.curveSegments)}}function Eb(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Il extends Ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+c,Math.PI);let h=0;const f=[],p=new F,m=new F,g=[],y=[],S=[],x=[];for(let _=0;_<=n;_++){const A=[],E=_/n;let b=0;_===0&&o===0?b=.5/t:_===n&&u===Math.PI&&(b=-.5/t);for(let O=0;O<=t;O++){const I=O/t;p.x=-e*Math.cos(i+I*s)*Math.sin(o+E*c),p.y=e*Math.cos(o+E*c),p.z=e*Math.sin(i+I*s)*Math.sin(o+E*c),y.push(p.x,p.y,p.z),m.copy(p).normalize(),S.push(m.x,m.y,m.z),x.push(I+b,1-E),A.push(h++)}f.push(A)}for(let _=0;_<n;_++)for(let A=0;A<t;A++){const E=f[_][A+1],b=f[_][A],O=f[_+1][A],I=f[_+1][A+1];(_!==0||o>0)&&g.push(E,b,I),(_!==n-1||u<Math.PI)&&g.push(b,O,I)}this.setIndex(g),this.setAttribute("position",new Qe(y,3)),this.setAttribute("normal",new Qe(S,3)),this.setAttribute("uv",new Qe(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ch extends os{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ch(e.radius,e.detail)}}class uh extends Ct{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],u=[],h=[],f=new F,p=new F,m=new F;for(let g=0;g<=n;g++)for(let y=0;y<=i;y++){const S=y/i*s,x=g/n*Math.PI*2;p.x=(e+t*Math.cos(x))*Math.cos(S),p.y=(e+t*Math.cos(x))*Math.sin(S),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),h.push(y/i),h.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){const S=(i+1)*g+y-1,x=(i+1)*(g-1)+y-1,_=(i+1)*(g-1)+y,A=(i+1)*g+y;o.push(S,x,A),o.push(x,_,A)}this.setIndex(o),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hh extends Ct{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);const c=[],u=[],h=[],f=[],p=new F,m=new F,g=new F,y=new F,S=new F,x=new F,_=new F;for(let E=0;E<=n;++E){const b=E/n*s*Math.PI*2;A(b,s,o,e,g),A(b+.01,s,o,e,y),x.subVectors(y,g),_.addVectors(y,g),S.crossVectors(x,_),_.crossVectors(S,x),S.normalize(),_.normalize();for(let O=0;O<=i;++O){const I=O/i*Math.PI*2,D=-t*Math.cos(I),N=t*Math.sin(I);p.x=g.x+(D*_.x+N*S.x),p.y=g.y+(D*_.y+N*S.y),p.z=g.z+(D*_.z+N*S.z),u.push(p.x,p.y,p.z),m.subVectors(p,g).normalize(),h.push(m.x,m.y,m.z),f.push(E/n),f.push(O/i)}}for(let E=1;E<=n;E++)for(let b=1;b<=i;b++){const O=(i+1)*(E-1)+(b-1),I=(i+1)*E+(b-1),D=(i+1)*E+b,N=(i+1)*(E-1)+b;c.push(O,I,N),c.push(I,D,N)}this.setIndex(c),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(f,2));function A(E,b,O,I,D){const N=Math.cos(E),R=Math.sin(E),C=O/b*E,H=Math.cos(C);D.x=I*(2+H)*.5*N,D.y=I*(2+H)*R*.5,D.z=I*Math.sin(C)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class fh extends Ct{constructor(e=new Wp(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const c=new F,u=new F,h=new ye;let f=new F;const p=[],m=[],g=[],y=[];S(),this.setIndex(y),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(m,3)),this.setAttribute("uv",new Qe(g,2));function S(){for(let E=0;E<t;E++)x(E);x(s===!1?t:0),A(),_()}function x(E){f=e.getPointAt(E/t,f);const b=o.normals[E],O=o.binormals[E];for(let I=0;I<=i;I++){const D=I/i*Math.PI*2,N=Math.sin(D),R=-Math.cos(D);u.x=R*b.x+N*O.x,u.y=R*b.y+N*O.y,u.z=R*b.z+N*O.z,u.normalize(),m.push(u.x,u.y,u.z),c.x=f.x+n*u.x,c.y=f.y+n*u.y,c.z=f.z+n*u.z,p.push(c.x,c.y,c.z)}}function _(){for(let E=1;E<=t;E++)for(let b=1;b<=i;b++){const O=(i+1)*(E-1)+(b-1),I=(i+1)*E+(b-1),D=(i+1)*E+b,N=(i+1)*(E-1)+b;y.push(O,I,N),y.push(I,D,N)}}function A(){for(let E=0;E<=t;E++)for(let b=0;b<=i;b++)h.x=E/t,h.y=b/i,g.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new fh(new zu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Yp extends Ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new F,s=new F;if(e.index!==null){const o=e.attributes.position,c=e.index;let u=e.groups;u.length===0&&(u=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,f=u.length;h<f;++h){const p=u[h],m=p.start,g=p.count;for(let y=m,S=m+g;y<S;y+=3)for(let x=0;x<3;x++){const _=c.getX(y+x),A=c.getX(y+(x+1)%3);i.fromBufferAttribute(o,_),s.fromBufferAttribute(o,A),a0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let c=0,u=o.count/3;c<u;c++)for(let h=0;h<3;h++){const f=3*c+h,p=3*c+(h+1)%3;i.fromBufferAttribute(o,f),s.fromBufferAttribute(o,p),a0(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Qe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function a0(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var o0=Object.freeze({__proto__:null,BoxGeometry:Ys,CapsuleGeometry:th,CircleGeometry:nh,ConeGeometry:ih,CylinderGeometry:ro,DodecahedronGeometry:rh,EdgesGeometry:Cy,ExtrudeGeometry:ah,IcosahedronGeometry:Rl,LatheGeometry:Cl,OctahedronGeometry:Pl,PlaneGeometry:Ur,PolyhedronGeometry:os,RingGeometry:oh,ShapeGeometry:lh,SphereGeometry:Il,TetrahedronGeometry:ch,TorusGeometry:uh,TorusKnotGeometry:hh,TubeGeometry:fh,WireframeGeometry:Yp});class Ly extends qn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Uy extends zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qp extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dy extends qp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ny extends qn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oy extends qn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Fy extends qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class By extends qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zy extends qn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=as,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ky extends ii{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Fs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Hy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Vy(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function op(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const c=t[s]*e;for(let u=0;u!==e;++u)i[o++]=r[c+u]}return i}function Zp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}function Ab(r,e,t,n,i=30){const s=r.clone();s.name=e;const o=[];for(let u=0;u<s.tracks.length;++u){const h=s.tracks[u],f=h.getValueSize(),p=[],m=[];for(let g=0;g<h.times.length;++g){const y=h.times[g]*i;if(!(y<t||y>=n)){p.push(h.times[g]);for(let S=0;S<f;++S)m.push(h.values[g*f+S])}}p.length!==0&&(h.times=Fs(p,h.times.constructor),h.values=Fs(m,h.values.constructor),o.push(h))}s.tracks=o;let c=1/0;for(let u=0;u<s.tracks.length;++u)c>s.tracks[u].times[0]&&(c=s.tracks[u].times[0]);for(let u=0;u<s.tracks.length;++u)s.tracks[u].shift(-1*c);return s.resetDuration(),s}function Tb(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let o=0;o<i;++o){const c=t.tracks[o],u=c.ValueTypeName;if(u==="bool"||u==="string")continue;const h=r.tracks.find(function(_){return _.name===c.name&&_.ValueTypeName===u});if(h===void 0)continue;let f=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);let m=0;const g=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(m=g/3);const y=c.times.length-1;let S;if(s<=c.times[0]){const _=f,A=p-f;S=c.values.slice(_,A)}else if(s>=c.times[y]){const _=y*p+f,A=_+p-f;S=c.values.slice(_,A)}else{const _=c.createInterpolant(),A=f,E=p-f;_.evaluate(s),S=_.resultBuffer.slice(A,E)}u==="quaternion"&&new ui().fromArray(S).normalize().conjugate().toArray(S);const x=h.times.length;for(let _=0;_<x;++_){const A=_*g+m;if(u==="quaternion")ui.multiplyQuaternionsFlat(h.values,A,S,0,h.values,A);else{const E=g-m*2;for(let b=0;b<E;++b)h.values[A+b]-=S[b]}}}return r.blendMode=Ap,r}const bb={convertArray:Fs,isTypedArray:Hy,getKeyframeOrder:Vy,sortedArray:op,flattenJSON:Zp,subclip:Ab,makeClipAdditive:Tb};class Ll{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const c=t[1];e<c&&(n=2,s=c);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const c=n+o>>>1;e<t[c]?o=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gy extends Ll{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Us,endingEnd:Us}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,c=i[s],u=i[o];if(c===void 0)switch(this.getSettings_().endingStart){case Ds:s=e,c=2*t-n;break;case rl:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Ds:o=e,u=2*n-t;break;case rl:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const h=(n-t)*.5,f=this.valueSize;this._weightPrev=h/(t-c),this._weightNext=h/(u-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-t)/(i-t),S=y*y,x=S*y,_=-m*x+2*m*S-m*y,A=(1+m)*x+(-1.5-2*m)*S+(-.5+m)*y+1,E=(-1-g)*x+(1.5+g)*S+.5*y,b=g*x-g*S;for(let O=0;O!==c;++O)s[O]=_*o[f+O]+A*o[h+O]+E*o[u+O]+b*o[p+O];return s}}class jp extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=e*c,h=u-c,f=(n-t)/(i-t),p=1-f;for(let m=0;m!==c;++m)s[m]=o[h+m]*p+o[u+m]*f;return s}}class Wy extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class qi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nl:t=this.InterpolantFactoryMethodDiscrete;break;case il:t=this.InterpolantFactoryMethodLinear;break;case Iu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nl;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return Iu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){const u=n[c];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,u,o),e=!1;break}o=u}if(i!==void 0&&Hy(i))for(let c=0,u=i.length;c!==u;++c){const h=i[c];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Iu,s=e.length-1;let o=1;for(let c=1;c<s;++c){let u=!1;const h=e[c],f=e[c+1];if(h!==f&&(c!==1||h!==e[0]))if(i)u=!0;else{const p=c*n,m=p-n,g=p+n;for(let y=0;y!==n;++y){const S=t[p+y];if(S!==t[m+y]||S!==t[g+y]){u=!0;break}}}if(u){if(c!==o){e[o]=e[c];const p=c*n,m=o*n;for(let g=0;g!==n;++g)t[m+g]=t[p+g]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,u=o*n,h=0;h!==n;++h)t[u+h]=t[c+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=il;class qs extends qi{}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=nl;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Jp extends qi{}Jp.prototype.ValueTypeName="color";class ml extends qi{}ml.prototype.ValueTypeName="number";class Xy extends Ll{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,u=(n-t)/(i-t);let h=e*c;for(let f=h+c;h!==f;h+=4)ui.slerpFlat(s,0,o,h-c,o,h,u);return s}}class so extends qi{InterpolantFactoryMethodLinear(e){return new Xy(this.times,this.values,this.getValueSize(),e)}}so.prototype.ValueTypeName="quaternion";so.prototype.DefaultInterpolation=il;so.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends qi{}Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=nl;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class gl extends qi{}gl.prototype.ValueTypeName="vector";class vl{constructor(e="",t=-1,n=[],i=Wu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,c=n.length;o!==c;++o)t.push(Rb(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(qi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let c=0;c<s;c++){let u=[],h=[];u.push((c+s-1)%s,c,(c+1)%s),h.push(0,1,0);const f=Vy(u);u=op(u,1,f),h=op(h,1,f),!i&&u[0]===0&&(u.push(s),h.push(h[0])),o.push(new ml(".morphTargetInfluences["+t[c].name+"]",u,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let c=0,u=e.length;c<u;c++){const h=e[c],f=h.name.match(s);if(f&&f.length>1){const p=f[1];let m=i[p];m||(i[p]=m=[]),m.push(h)}}const o=[];for(const c in i)o.push(this.CreateFromMorphTargetSequence(c,i[c],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,m,g,y,S){if(g.length!==0){const x=[],_=[];Zp(g,x,_,y),x.length!==0&&S.push(new p(m,x,_))}},i=[],s=e.name||"default",o=e.fps||30,c=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let p=0;p<h.length;p++){const m=h[p].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const g={};let y;for(y=0;y<m.length;y++)if(m[y].morphTargets)for(let S=0;S<m[y].morphTargets.length;S++)g[m[y].morphTargets[S]]=-1;for(const S in g){const x=[],_=[];for(let A=0;A!==m[y].morphTargets.length;++A){const E=m[y];x.push(E.time),_.push(E.morphTarget===S?1:0)}i.push(new ml(".morphTargetInfluence["+S+"]",x,_))}u=g.length*o}else{const g=".bones["+t[p].name+"]";n(gl,g+".position",m,"pos",i),n(so,g+".quaternion",m,"rot",i),n(gl,g+".scale",m,"scl",i)}}return i.length===0?null:new this(s,u,i,c)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ml;case"vector":case"vector2":case"vector3":case"vector4":return gl;case"color":return Jp;case"quaternion":return so;case"bool":case"boolean":return qs;case"string":return Zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Rb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cb(r.type);if(r.times===void 0){const t=[],n=[];Zp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const br={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class dh{constructor(e,t,n){const i=this;let s=!1,o=0,c=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){c++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,c),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return h.push(f,p),this},this.removeHandler=function(f){const p=h.indexOf(f);return p!==-1&&h.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=h.length;p<m;p+=2){const g=h[p],y=h[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null}}}const Yy=new dh;class ri{constructor(e){this.manager=e!==void 0?e:Yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ri.DEFAULT_MATERIAL_NAME="__DEFAULT";const Er={};class Pb extends Error{constructor(e,t){super(e),this.response=t}}class Si extends ri{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=br.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Er[e]!==void 0){Er[e].push({onLoad:t,onProgress:n,onError:i});return}Er[e]=[],Er[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const f=Er[e],p=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0;let S=0;const x=new ReadableStream({start(_){A();function A(){p.read().then(({done:E,value:b})=>{if(E)_.close();else{S+=b.byteLength;const O=new ProgressEvent("progress",{lengthComputable:y,loaded:S,total:g});for(let I=0,D=f.length;I<D;I++){const N=f[I];N.onProgress&&N.onProgress(O)}_.enqueue(b),A()}})}}});return new Response(x)}else throw new Pb(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(f=>new DOMParser().parseFromString(f,c));case"json":return h.json();default:if(c===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(c),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return h.arrayBuffer().then(y=>g.decode(y))}}}).then(h=>{br.add(e,h);const f=Er[e];delete Er[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onLoad&&g.onLoad(h)}}).catch(h=>{const f=Er[e];if(f===void 0)throw this.manager.itemError(e),h;delete Er[e];for(let p=0,m=f.length;p<m;p++){const g=f[p];g.onError&&g.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ib extends ri{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Si(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=vl.parse(e[n]);t.push(i)}return t}}class Lb extends ri{constructor(e){super(e)}load(e,t,n,i){const s=this,o=[],c=new $u,u=new Si(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(s.withCredentials);let h=0;function f(p){u.load(e[p],function(m){const g=s.parse(m,!0);o[p]={width:g.width,height:g.height,format:g.format,mipmaps:g.mipmaps},h+=1,h===6&&(g.mipmapCount===1&&(c.minFilter=Xt),c.image=o,c.format=g.format,c.needsUpdate=!0,t&&t(c))},n,i)}if(Array.isArray(e))for(let p=0,m=e.length;p<m;++p)f(p);else u.load(e,function(p){const m=s.parse(p,!0);if(m.isCubemap){const g=m.mipmaps.length/m.mipmapCount;for(let y=0;y<g;y++){o[y]={mipmaps:[]};for(let S=0;S<m.mipmapCount;S++)o[y].mipmaps.push(m.mipmaps[y*m.mipmapCount+S]),o[y].format=m.format,o[y].width=m.width,o[y].height=m.height}c.image=o}else c.image.width=m.width,c.image.height=m.height,c.mipmaps=m.mipmaps;m.mipmapCount===1&&(c.minFilter=Xt),c.format=m.format,c.needsUpdate=!0,t&&t(c)},n,i);return c}}class _l extends ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=br.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const c=ul("img");function u(){f(),br.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(p){f(),i&&i(p),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){c.removeEventListener("load",u,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),s.manager.itemStart(e),c.src=e,c}}class qy extends ri{constructor(e){super(e)}load(e,t,n,i){const s=new Al;s.colorSpace=vi;const o=new _l(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let c=0;function u(h){o.load(e[h],function(f){s.images[h]=f,c++,c===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class Kp extends ri{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Cr,c=new Si(this.manager);return c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setPath(this.path),c.setWithCredentials(s.withCredentials),c.load(e,function(u){let h;try{h=s.parse(u)}catch(f){if(i!==void 0)i(f);else{console.error(f);return}}h.image!==void 0?o.image=h.image:h.data!==void 0&&(o.image.width=h.width,o.image.height=h.height,o.image.data=h.data),o.wrapS=h.wrapS!==void 0?h.wrapS:Sn,o.wrapT=h.wrapT!==void 0?h.wrapT:Sn,o.magFilter=h.magFilter!==void 0?h.magFilter:Xt,o.minFilter=h.minFilter!==void 0?h.minFilter:Xt,o.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(o.colorSpace=h.colorSpace),h.flipY!==void 0&&(o.flipY=h.flipY),h.format!==void 0&&(o.format=h.format),h.type!==void 0&&(o.type=h.type),h.mipmaps!==void 0&&(o.mipmaps=h.mipmaps,o.minFilter=sr),h.mipmapCount===1&&(o.minFilter=Xt),h.generateMipmaps!==void 0&&(o.generateMipmaps=h.generateMipmaps),o.needsUpdate=!0,t&&t(o,h)},n,i),o}}class Ub extends ri{constructor(e){super(e)}load(e,t,n,i){const s=new jt,o=new _l(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){s.image=c,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ls extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Zy extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const id=new ft,l0=new F,c0=new F;class Qp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;l0.setFromMatrixPosition(e.matrixWorld),t.position.copy(l0),c0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(c0),t.updateMatrixWorld(),id.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Db extends Qp{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=qa*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jy extends ls{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Db}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const u0=new ft,zo=new F,rd=new F;class Nb extends Qp{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zo.setFromMatrixPosition(e.matrixWorld),n.position.copy(zo),rd.copy(n.position),rd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rd),n.updateMatrixWorld(),i.makeTranslation(-zo.x,-zo.y,-zo.z),u0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(u0)}}class Jy extends ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ob extends Qp{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ky extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Ob}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qy extends ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $y extends ls{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class ex{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new F)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class tx extends ls{constructor(e=new ex,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ph extends ri{constructor(e){super(e),this.textures={}}load(e,t,n,i){const s=this,o=new Si(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const i=ph.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(i.uniforms[s]={},o.type){case"t":i.uniforms[s].value=n(o.value);break;case"c":i.uniforms[s].value=new Ye().setHex(o.value);break;case"v2":i.uniforms[s].value=new ye().fromArray(o.value);break;case"v3":i.uniforms[s].value=new F().fromArray(o.value);break;case"v4":i.uniforms[s].value=new Lt().fromArray(o.value);break;case"m3":i.uniforms[s].value=new St().fromArray(o.value);break;case"m4":i.uniforms[s].value=new ft().fromArray(o.value);break;default:i.uniforms[s].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)i.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new ye().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Ly,SpriteMaterial:Fp,RawShaderMaterial:Uy,ShaderMaterial:zn,PointsMaterial:zp,MeshPhysicalMaterial:Dy,MeshStandardMaterial:qp,MeshPhongMaterial:Ny,MeshToonMaterial:Oy,MeshNormalMaterial:Fy,MeshLambertMaterial:By,MeshDepthMaterial:Zu,MeshDistanceMaterial:Np,MeshBasicMaterial:Lr,MeshMatcapMaterial:zy,LineDashedMaterial:ky,LineBasicMaterial:ii,Material:qn};return new t[e]}}class lp{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $p extends Ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class nx extends ri{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Si(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(c){try{t(s.parse(JSON.parse(c)))}catch(u){i?i(u):console.error(u),s.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(g,y){if(t[y]!==void 0)return t[y];const x=g.interleavedBuffers[y],_=s(g,x.buffer),A=Ba(x.type,_),E=new Ku(A,x.stride);return E.uuid=x.uuid,t[y]=E,E}function s(g,y){if(n[y]!==void 0)return n[y];const x=g.arrayBuffers[y],_=new Uint32Array(x).buffer;return n[y]=_,_}const o=e.isInstancedBufferGeometry?new $p:new Ct,c=e.data.index;if(c!==void 0){const g=Ba(c.type,c.array);o.setIndex(new Zt(g,1))}const u=e.data.attributes;for(const g in u){const y=u[g];let S;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);S=new yi(x,y.itemSize,y.offset,y.normalized)}else{const x=Ba(y.type,y.array),_=y.isInstancedBufferAttribute?ja:Zt;S=new _(x,y.itemSize,y.normalized)}y.name!==void 0&&(S.name=y.name),y.usage!==void 0&&S.setUsage(y.usage),o.setAttribute(g,S)}const h=e.data.morphAttributes;if(h)for(const g in h){const y=h[g],S=[];for(let x=0,_=y.length;x<_;x++){const A=y[x];let E;if(A.isInterleavedBufferAttribute){const b=i(e.data,A.data);E=new yi(b,A.itemSize,A.offset,A.normalized)}else{const b=Ba(A.type,A.array);E=new Zt(b,A.itemSize,A.normalized)}A.name!==void 0&&(E.name=A.name),S.push(E)}o.morphAttributes[g]=S}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const p=e.data.groups||e.data.drawcalls||e.data.offsets;if(p!==void 0)for(let g=0,y=p.length;g!==y;++g){const S=p[g];o.addGroup(S.start,S.count,S.materialIndex)}const m=e.data.boundingSphere;if(m!==void 0){const g=new F;m.center!==void 0&&g.fromArray(m.center),o.boundingSphere=new Un(g,m.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Fb extends ri{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?lp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const c=new Si(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){let h=null;try{h=JSON.parse(u)}catch(p){i!==void 0&&i(p),console.error("THREE:ObjectLoader: Can't parse "+e+".",p.message);return}const f=h.metadata;if(f===void 0||f.type===void 0||f.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(h,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?lp.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const s=new Si(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const o=await s.loadAsync(e,t),c=JSON.parse(o),u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(c)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(h)}),c=this.parseTextures(e.textures,o),u=this.parseMaterials(e.materials,c),h=this.parseObject(e.object,s,u,c,n),f=this.parseSkeletons(e.skeletons,h);if(this.bindSkeletons(h,f),t!==void 0){let p=!1;for(const m in o)if(o[m].data instanceof HTMLImageElement){p=!0;break}p===!1&&t(h)}return h}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,s),c=this.parseMaterials(e.materials,o),u=this.parseObject(e.object,i,c,o,t),h=this.parseSkeletons(e.skeletons,u);return this.bindSkeletons(u,h),u}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const s=new Gs().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=new Qu().fromJSON(e[s],i);n[c.uuid]=c}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new nx;for(let s=0,o=e.length;s<o;s++){let c;const u=e[s];switch(u.type){case"BufferGeometry":case"InstancedBufferGeometry":c=i.parse(u);break;default:u.type in o0?c=o0[u.type].fromJSON(u,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${u.type}"`)}c.uuid=u.uuid,u.name!==void 0&&(c.name=u.name),u.userData!==void 0&&(c.userData=u.userData),n[u.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const s=new ph;s.setTextures(t);for(let o=0,c=e.length;o<c;o++){const u=e[o];n[u.uuid]===void 0&&(n[u.uuid]=s.parse(u)),i[u.uuid]=n[u.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],s=vl.parse(i);t[s.uuid]=s}return t}parseImages(e,t){const n=this,i={};let s;function o(u){return n.manager.itemStart(u),s.load(u,function(){n.manager.itemEnd(u)},void 0,function(){n.manager.itemError(u),n.manager.itemEnd(u)})}function c(u){if(typeof u=="string"){const h=u,f=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h)?h:n.resourcePath+h;return o(f)}else return u.data?{data:Ba(u.type,u.data),width:u.width,height:u.height}:null}if(e!==void 0&&e.length>0){const u=new dh(t);s=new _l(u),s.setCrossOrigin(this.crossOrigin);for(let h=0,f=e.length;h<f;h++){const p=e[h],m=p.url;if(Array.isArray(m)){const g=[];for(let y=0,S=m.length;y<S;y++){const x=m[y],_=c(x);_!==null&&(_ instanceof HTMLImageElement?g.push(_):g.push(new Cr(_.data,_.width,_.height)))}i[p.uuid]=new Ns(g)}else{const g=c(p.url);i[p.uuid]=new Ns(g)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function s(o){if(typeof o=="string"){const c=o,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:t.resourcePath+c;return await i.loadAsync(u)}else return o.data?{data:Ba(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){i=new _l(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,c=e.length;o<c;o++){const u=e[o],h=u.url;if(Array.isArray(h)){const f=[];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=await s(g);y!==null&&(y instanceof HTMLImageElement?f.push(y):f.push(new Cr(y.data,y.width,y.height)))}n[u.uuid]=new Ns(f)}else{const f=await s(u.url);n[u.uuid]=new Ns(f)}}}return n}parseTextures(e,t){function n(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const i={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const c=e[s];c.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',c.uuid),t[c.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",c.image);const u=t[c.image],h=u.data;let f;Array.isArray(h)?(f=new Al,h.length===6&&(f.needsUpdate=!0)):(h&&h.data?f=new Cr:f=new jt,h&&(f.needsUpdate=!0)),f.source=u,f.uuid=c.uuid,c.name!==void 0&&(f.name=c.name),c.mapping!==void 0&&(f.mapping=n(c.mapping,Bb)),c.channel!==void 0&&(f.channel=c.channel),c.offset!==void 0&&f.offset.fromArray(c.offset),c.repeat!==void 0&&f.repeat.fromArray(c.repeat),c.center!==void 0&&f.center.fromArray(c.center),c.rotation!==void 0&&(f.rotation=c.rotation),c.wrap!==void 0&&(f.wrapS=n(c.wrap[0],h0),f.wrapT=n(c.wrap[1],h0)),c.format!==void 0&&(f.format=c.format),c.internalFormat!==void 0&&(f.internalFormat=c.internalFormat),c.type!==void 0&&(f.type=c.type),c.colorSpace!==void 0&&(f.colorSpace=c.colorSpace),c.minFilter!==void 0&&(f.minFilter=n(c.minFilter,f0)),c.magFilter!==void 0&&(f.magFilter=n(c.magFilter,f0)),c.anisotropy!==void 0&&(f.anisotropy=c.anisotropy),c.flipY!==void 0&&(f.flipY=c.flipY),c.generateMipmaps!==void 0&&(f.generateMipmaps=c.generateMipmaps),c.premultiplyAlpha!==void 0&&(f.premultiplyAlpha=c.premultiplyAlpha),c.unpackAlignment!==void 0&&(f.unpackAlignment=c.unpackAlignment),c.compareFunction!==void 0&&(f.compareFunction=c.compareFunction),c.userData!==void 0&&(f.userData=c.userData),i[c.uuid]=f}return i}parseObject(e,t,n,i,s){let o;function c(m){return t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",m),t[m]}function u(m){if(m!==void 0){if(Array.isArray(m)){const g=[];for(let y=0,S=m.length;y<S;y++){const x=m[y];n[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),g.push(n[x])}return g}return n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),n[m]}}function h(m){return i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",m),i[m]}let f,p;switch(e.type){case"Scene":o=new bl,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new Ye(e.background):o.background=h(e.background)),e.environment!==void 0&&(o.environment=h(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Ju(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new ju(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new Pn(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new no(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new Qy(e.color,e.intensity);break;case"DirectionalLight":o=new Ky(e.color,e.intensity);break;case"PointLight":o=new Jy(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new $y(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new jy(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":o=new Zy(e.color,e.groundColor,e.intensity);break;case"LightProbe":o=new tx().fromJSON(e);break;case"SkinnedMesh":f=c(e.geometry),p=u(e.material),o=new _y(f,p),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":f=c(e.geometry),p=u(e.material),o=new tn(f,p);break;case"InstancedMesh":f=c(e.geometry),p=u(e.material);const m=e.count,g=e.instanceMatrix,y=e.instanceColor;o=new yy(f,p,m),o.instanceMatrix=new ja(new Float32Array(g.array),16),y!==void 0&&(o.instanceColor=new ja(new Float32Array(y.array),y.itemSize));break;case"BatchedMesh":f=c(e.geometry),p=u(e.material),o=new xy(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,p),o.geometry=f,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._visibility=e.visibility,o._active=e.active,o._bounds=e.bounds.map(S=>{const x=new Ln;x.min.fromArray(S.boxMin),x.max.fromArray(S.boxMax);const _=new Un;return _.radius=S.sphereRadius,_.center.fromArray(S.sphereCenter),{boxInitialized:S.boxInitialized,box:x,sphereInitialized:S.sphereInitialized,sphere:_}}),o._maxGeometryCount=e.maxGeometryCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._geometryCount=e.geometryCount,o._matricesTexture=h(e.matricesTexture.uuid);break;case"LOD":o=new vy;break;case"Line":o=new ss(c(e.geometry),u(e.material));break;case"LineLoop":o=new Sy(c(e.geometry),u(e.material));break;case"LineSegments":o=new hr(c(e.geometry),u(e.material));break;case"PointCloud":case"Points":o=new My(c(e.geometry),u(e.material));break;case"Sprite":o=new gy(u(e.material));break;case"Group":o=new ka;break;case"Bone":o=new Bp;break;default:o=new zt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){const m=e.children;for(let g=0;g<m.length;g++)o.add(this.parseObject(m[g],t,n,i,s))}if(e.animations!==void 0){const m=e.animations;for(let g=0;g<m.length;g++){const y=m[g];o.animations.push(s[y])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);const m=e.levels;for(let g=0;g<m.length;g++){const y=m[g],S=o.getObjectByProperty("uuid",y.object);S!==void 0&&o.addLevel(S,y.distance,y.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}}const Bb={UVMapping:ns,CubeReflectionMapping:ur,CubeRefractionMapping:is,EquirectangularReflectionMapping:Xa,EquirectangularRefractionMapping:$o,CubeUVReflectionMapping:$a},h0={RepeatWrapping:el,ClampToEdgeWrapping:Sn,MirroredRepeatWrapping:tl},f0={NearestFilter:In,NearestMipmapNearestFilter:gp,NearestMipmapLinearFilter:Fa,LinearFilter:Xt,LinearMipmapNearestFilter:qo,LinearMipmapLinearFilter:sr};class zb extends ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=br.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const u=fetch(e,c).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return br.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),br.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});br.add(e,u),s.manager.itemStart(e)}}let fu;class em{static getContext(){return fu===void 0&&(fu=new(window.AudioContext||window.webkitAudioContext)),fu}static setContext(e){fu=e}}class kb extends ri{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Si(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(u){try{const h=u.slice(0);em.getContext().decodeAudioData(h,function(p){t(p)}).catch(c)}catch(h){c(h)}},n,i);function c(u){i?i(u):console.error(u),s.manager.itemError(e)}}}const d0=new ft,p0=new ft,As=new ft;class Hb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Pn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Pn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,As.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,o=t.near*Math.tan(Hs*t.fov*.5)/t.zoom;let c,u;p0.elements[12]=-i,d0.elements[12]=i,c=-o*t.aspect+s,u=o*t.aspect+s,As.elements[0]=2*t.near/(u-c),As.elements[8]=(u+c)/(u-c),this.cameraL.projectionMatrix.copy(As),c=-o*t.aspect-s,u=o*t.aspect-s,As.elements[0]=2*t.near/(u-c),As.elements[8]=(u+c)/(u-c),this.cameraR.projectionMatrix.copy(As)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(p0),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(d0)}}class tm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=m0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=m0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function m0(){return(typeof performance>"u"?Date:performance).now()}const Ts=new F,g0=new ui,Vb=new F,bs=new F;class Gb extends zt{constructor(){super(),this.type="AudioListener",this.context=em.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new tm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ts,g0,Vb),bs.set(0,0,-1).applyQuaternion(g0),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ts.x,i),t.positionY.linearRampToValueAtTime(Ts.y,i),t.positionZ.linearRampToValueAtTime(Ts.z,i),t.forwardX.linearRampToValueAtTime(bs.x,i),t.forwardY.linearRampToValueAtTime(bs.y,i),t.forwardZ.linearRampToValueAtTime(bs.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Ts.x,Ts.y,Ts.z),t.setOrientation(bs.x,bs.y,bs.z,n.x,n.y,n.z)}}class ix extends zt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Cs=new F,v0=new ui,Wb=new F,Rs=new F;class Xb extends ix{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cs,v0,Wb),Rs.set(0,0,1).applyQuaternion(v0);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Cs.x,n),t.positionY.linearRampToValueAtTime(Cs.y,n),t.positionZ.linearRampToValueAtTime(Cs.z,n),t.orientationX.linearRampToValueAtTime(Rs.x,n),t.orientationY.linearRampToValueAtTime(Rs.y,n),t.orientationZ.linearRampToValueAtTime(Rs.z,n)}else t.setPosition(Cs.x,Cs.y,Cs.z),t.setOrientation(Rs.x,Rs.y,Rs.z)}}class Yb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class rx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let c=0;c!==i;++c)n[s+c]=n[c];o=t}else{o+=t;const c=t/o;this._mixBufferRegion(n,s,0,c,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,c=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const u=t*this._origIndex;this._mixBufferRegion(n,i,u,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let u=t,h=t+t;u!==h;++u)if(n[u]!==n[u+t]){c.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){ui.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;ui.multiplyQuaternionsFlat(e,o,e,t,e,n),ui.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let c=0;c!==s;++c){const u=t+c;e[u]=e[u]*o+e[n+c]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]+e[n+o]*i}}}const nm="\\[\\]\\.:\\/",qb=new RegExp("["+nm+"]","g"),im="[^"+nm+"]",Zb="[^"+nm.replace("\\.","")+"]",jb=/((?:WC+[\/:])*)/.source.replace("WC",im),Jb=/(WCOD+)?/.source.replace("WCOD",Zb),Kb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",im),Qb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",im),$b=new RegExp("^"+jb+Jb+Kb+Qb+"$"),eC=["material","materials","bones","map"];class tC{constructor(e,t,n){const i=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Nt{constructor(e,t,n){this.path=t,this.parsedPath=n||Nt.parseTrackName(t),this.node=Nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Nt.Composite(e,t,n):new Nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qb,"")}static parseTrackName(e){const t=$b.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);eC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const c=s[o];if(c.name===t||c.uuid===t)return c;const u=n(c.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Nt.Composite=tC;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nC{constructor(){this.isAnimationObjectGroup=!0,this.uuid=xi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length;let c,u=e.length,h=this.nCachedObjects_;for(let f=0,p=arguments.length;f!==p;++f){const m=arguments[f],g=m.uuid;let y=t[g];if(y===void 0){y=u++,t[g]=y,e.push(m);for(let S=0,x=o;S!==x;++S)s[S].push(new Nt(m,n[S],i[S]))}else if(y<h){c=e[y];const S=--h,x=e[S];t[x.uuid]=y,e[y]=x,t[g]=S,e[S]=m;for(let _=0,A=o;_!==A;++_){const E=s[_],b=E[S];let O=E[y];E[y]=b,O===void 0&&(O=new Nt(m,n[_],i[_])),E[S]=O}}else e[y]!==c&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=h}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_;for(let o=0,c=arguments.length;o!==c;++o){const u=arguments[o],h=u.uuid,f=t[h];if(f!==void 0&&f>=s){const p=s++,m=e[p];t[m.uuid]=f,e[f]=m,t[h]=p,e[p]=u;for(let g=0,y=i;g!==y;++g){const S=n[g],x=S[p],_=S[f];S[f]=x,S[p]=_}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let s=this.nCachedObjects_,o=e.length;for(let c=0,u=arguments.length;c!==u;++c){const h=arguments[c],f=h.uuid,p=t[f];if(p!==void 0)if(delete t[f],p<s){const m=--s,g=e[m],y=--o,S=e[y];t[g.uuid]=p,e[p]=g,t[S.uuid]=m,e[m]=S,e.pop();for(let x=0,_=i;x!==_;++x){const A=n[x],E=A[m],b=A[y];A[p]=E,A[m]=b,A.pop()}}else{const m=--o,g=e[m];m>0&&(t[g.uuid]=p),e[p]=g,e.pop();for(let y=0,S=i;y!==S;++y){const x=n[y];x[p]=x[m],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const s=this._bindings;if(i!==void 0)return s[i];const o=this._paths,c=this._parsedPaths,u=this._objects,h=u.length,f=this.nCachedObjects_,p=new Array(h);i=s.length,n[e]=i,o.push(e),c.push(t),s.push(p);for(let m=f,g=u.length;m!==g;++m){const y=u[m];p[m]=new Nt(y,e,t)}return p}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,s=this._parsedPaths,o=this._bindings,c=o.length-1,u=o[c],h=e[c];t[h]=n,o[n]=u,o.pop(),s[n]=s[c],s.pop(),i[n]=i[c],i.pop()}}}class sx{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,c=new Array(o),u={endingStart:Us,endingEnd:Us};for(let h=0;h!==o;++h){const f=s[h].createInterpolant(null);c[h]=f,f.settings=u}this._interpolantSettings=u,this._interpolants=c,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=H_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,c=i/s;e.warp(1,o,t),this.warp(c,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let c=this._timeScaleInterpolant;c===null&&(c=i._lendControlInterpolant(),this._timeScaleInterpolant=c);const u=c.parameterPositions,h=c.sampleValues;return u[0]=s,u[1]=s+n,h[0]=e/o,h[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const u=(e-s)*n;u<0||n===0?t=0:(this._startTime=null,t=n*u)}t*=this._updateTimeScale(e);const o=this._updateTime(t),c=this._updateWeight(e);if(c>0){const u=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Ap:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(o),h[f].accumulateAdditive(c);break;case Wu:default:for(let f=0,p=u.length;f!==p;++f)u[f].evaluate(o),h[f].accumulate(i,c)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===V_;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===k_){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const c=Math.floor(i/t);i-=t*c,s+=Math.abs(c);const u=this.repetitions-s;if(u<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(u===1){const h=e<0;this._setEndings(h,!h,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:c})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ds,i.endingEnd=Ds):(e?i.endingStart=this.zeroSlopeAtStart?Ds:Us:i.endingStart=rl,t?i.endingEnd=this.zeroSlopeAtEnd?Ds:Us:i.endingEnd=rl)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const c=o.parameterPositions,u=o.sampleValues;return c[0]=s,u[0]=t,c[1]=s+e,u[1]=n,this}}const iC=new Float32Array(1);class rC extends Ir{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,c=e._interpolants,u=n.uuid,h=this._bindingsByRootAndName;let f=h[u];f===void 0&&(f={},h[u]=f);for(let p=0;p!==s;++p){const m=i[p],g=m.name;let y=f[g];if(y!==void 0)++y.referenceCount,o[p]=y;else{if(y=o[p],y!==void 0){y._cacheIndex===null&&(++y.referenceCount,this._addInactiveBinding(y,u,g));continue}const S=t&&t._propertyBindings[p].binding.parsedPath;y=new rx(Nt.create(n,g,S),m.ValueTypeName,m.getValueSize()),++y.referenceCount,this._addInactiveBinding(y,u,g),o[p]=y}c[p].resultBuffer=y.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const c=o.knownActions;e._byClipCacheIndex=c.length,c.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,c=o[s],u=c.knownActions,h=u[u.length-1],f=e._byClipCacheIndex;h._byClipCacheIndex=f,u[f]=h,u.pop(),e._byClipCacheIndex=null;const p=c.actionByRoot,m=(e._localRoot||this._root).uuid;delete p[m],u.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,c=o[i],u=t[t.length-1],h=e._cacheIndex;u._cacheIndex=h,t[h]=u,t.pop(),delete c[s],Object.keys(c).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new jp(new Float32Array(2),new Float32Array(2),1,iC),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?vl.findByName(i,e):e;const c=o!==null?o.uuid:e,u=this._actionsByClip[c];let h=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wu),u!==void 0){const p=u.actionByRoot[s];if(p!==void 0&&p.blendMode===n)return p;h=u.knownActions[0],o===null&&(o=h._clip)}if(o===null)return null;const f=new sx(this,o,t,n);return this._bindAction(f,h),this._addInactiveAction(f,c,s),f}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?vl.findByName(n,e):e,o=s?s.uuid:e,c=this._actionsByClip[o];return c!==void 0&&c.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,s,o);const c=this._bindings,u=this._nActiveBindings;for(let h=0;h!==u;++h)c[h].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let c=0,u=o.length;c!==u;++c){const h=o[c];this._deactivateAction(h);const f=h._cacheIndex,p=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,p._cacheIndex=f,t[f]=p,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const c=n[o].actionByRoot,u=c[t];u!==void 0&&(this._deactivateAction(u),this._removeInactiveAction(u))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const c=s[o];c.restoreOriginalState(),this._removeInactiveBinding(c)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class rm{constructor(e){this.value=e}clone(){return new rm(this.value.clone===void 0?this.value:this.value.clone())}}let sC=0;class aC extends Ir{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:sC++}),this.name="",this.usage=ll,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class ku extends Ku{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class oC{constructor(e,t,n,i,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const _0=new ft;class sm{constructor(e,t,n=0,i=1/0){this.ray=new to(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_0),this}intersectObject(e,t=!0,n=[]){return cp(e,this,n,t),n.sort(y0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)cp(e[i],this,n,t);return n.sort(y0),n}}function y0(r,e){return r.distance-e.distance}function cp(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)cp(i[s],e,t,!0)}}class lC{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(hn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cC{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const x0=new ye;class uC{constructor(e=new ye(1/0,1/0),t=new ye(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=x0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,x0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const S0=new F,du=new F;class ax{constructor(e=new F,t=new F){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){S0.subVectors(e,this.start),du.subVectors(this.end,this.start);const n=du.dot(du);let s=du.dot(S0)/n;return t&&(s=hn(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const M0=new F;class hC extends zt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Ct,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,c=1,u=32;o<u;o++,c++){const h=o/u*Math.PI*2,f=c/u*Math.PI*2;i.push(Math.cos(h),Math.sin(h),1,Math.cos(f),Math.sin(f),1)}n.setAttribute("position",new Qe(i,3));const s=new ii({fog:!1,toneMapped:!1});this.cone=new hr(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),M0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(M0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Jr=new F,pu=new ft,sd=new ft;class fC extends hr{constructor(e){const t=ox(e),n=new Ct,i=[],s=[],o=new Ye(0,0,1),c=new Ye(0,1,0);for(let h=0;h<t.length;h++){const f=t[h];f.parent&&f.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(c.r,c.g,c.b))}n.setAttribute("position",new Qe(i,3)),n.setAttribute("color",new Qe(s,3));const u=new ii({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,u),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");sd.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const c=t[s];c.parent&&c.parent.isBone&&(pu.multiplyMatrices(sd,c.matrixWorld),Jr.setFromMatrixPosition(pu),i.setXYZ(o,Jr.x,Jr.y,Jr.z),pu.multiplyMatrices(sd,c.parent.matrixWorld),Jr.setFromMatrixPosition(pu),i.setXYZ(o+1,Jr.x,Jr.y,Jr.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function ox(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,ox(r.children[t]));return e}class dC extends tn{constructor(e,t,n){const i=new Il(t,4,2),s=new Lr({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const pC=new F,w0=new Ye,E0=new Ye;class mC extends zt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Pl(t);i.rotateY(Math.PI*.5),this.material=new Lr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new Zt(o,3)),this.add(new tn(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");w0.copy(this.light.color),E0.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const s=n<i/2?w0:E0;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(pC.setFromMatrixPosition(this.light.matrixWorld).negate())}}class gC extends hr{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ye(n),i=new Ye(i);const s=t/2,o=e/t,c=e/2,u=[],h=[];for(let m=0,g=0,y=-c;m<=t;m++,y+=o){u.push(-c,0,y,c,0,y),u.push(y,0,-c,y,0,c);const S=m===s?n:i;S.toArray(h,g),g+=3,S.toArray(h,g),g+=3,S.toArray(h,g),g+=3,S.toArray(h,g),g+=3}const f=new Ct;f.setAttribute("position",new Qe(u,3)),f.setAttribute("color",new Qe(h,3));const p=new ii({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class vC extends hr{constructor(e=10,t=16,n=8,i=64,s=4473924,o=8947848){s=new Ye(s),o=new Ye(o);const c=[],u=[];if(t>1)for(let p=0;p<t;p++){const m=p/t*(Math.PI*2),g=Math.sin(m)*e,y=Math.cos(m)*e;c.push(0,0,0),c.push(g,0,y);const S=p&1?s:o;u.push(S.r,S.g,S.b),u.push(S.r,S.g,S.b)}for(let p=0;p<n;p++){const m=p&1?s:o,g=e-e/n*p;for(let y=0;y<i;y++){let S=y/i*(Math.PI*2),x=Math.sin(S)*g,_=Math.cos(S)*g;c.push(x,0,_),u.push(m.r,m.g,m.b),S=(y+1)/i*(Math.PI*2),x=Math.sin(S)*g,_=Math.cos(S)*g,c.push(x,0,_),u.push(m.r,m.g,m.b)}}const h=new Ct;h.setAttribute("position",new Qe(c,3)),h.setAttribute("color",new Qe(u,3));const f=new ii({vertexColors:!0,toneMapped:!1});super(h,f),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const A0=new F,mu=new F,T0=new F;class _C extends zt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ct;i.setAttribute("position",new Qe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new ii({fog:!1,toneMapped:!1});this.lightPlane=new ss(i,s),this.add(this.lightPlane),i=new Ct,i.setAttribute("position",new Qe([0,0,0,0,0,1],3)),this.targetLine=new ss(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),A0.setFromMatrixPosition(this.light.matrixWorld),mu.setFromMatrixPosition(this.light.target.matrixWorld),T0.subVectors(mu,A0),this.lightPlane.lookAt(mu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(mu),this.targetLine.scale.z=T0.length()}}const gu=new F,un=new El;class yC extends hr{constructor(e){const t=new Ct,n=new ii({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};c("n1","n2"),c("n2","n4"),c("n4","n3"),c("n3","n1"),c("f1","f2"),c("f2","f4"),c("f4","f3"),c("f3","f1"),c("n1","f1"),c("n2","f2"),c("n3","f3"),c("n4","f4"),c("p","n1"),c("p","n2"),c("p","n3"),c("p","n4"),c("u1","u2"),c("u2","u3"),c("u3","u1"),c("c","t"),c("p","c"),c("cn1","cn2"),c("cn3","cn4"),c("cf1","cf2"),c("cf3","cf4");function c(y,S){u(y),u(S)}function u(y){i.push(0,0,0),s.push(0,0,0),o[y]===void 0&&(o[y]=[]),o[y].push(i.length/3-1)}t.setAttribute("position",new Qe(i,3)),t.setAttribute("color",new Qe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const h=new Ye(16755200),f=new Ye(16711680),p=new Ye(43775),m=new Ye(16777215),g=new Ye(3355443);this.setColors(h,f,p,m,g)}setColors(e,t,n,i,s){const c=this.geometry.getAttribute("color");c.setXYZ(0,e.r,e.g,e.b),c.setXYZ(1,e.r,e.g,e.b),c.setXYZ(2,e.r,e.g,e.b),c.setXYZ(3,e.r,e.g,e.b),c.setXYZ(4,e.r,e.g,e.b),c.setXYZ(5,e.r,e.g,e.b),c.setXYZ(6,e.r,e.g,e.b),c.setXYZ(7,e.r,e.g,e.b),c.setXYZ(8,e.r,e.g,e.b),c.setXYZ(9,e.r,e.g,e.b),c.setXYZ(10,e.r,e.g,e.b),c.setXYZ(11,e.r,e.g,e.b),c.setXYZ(12,e.r,e.g,e.b),c.setXYZ(13,e.r,e.g,e.b),c.setXYZ(14,e.r,e.g,e.b),c.setXYZ(15,e.r,e.g,e.b),c.setXYZ(16,e.r,e.g,e.b),c.setXYZ(17,e.r,e.g,e.b),c.setXYZ(18,e.r,e.g,e.b),c.setXYZ(19,e.r,e.g,e.b),c.setXYZ(20,e.r,e.g,e.b),c.setXYZ(21,e.r,e.g,e.b),c.setXYZ(22,e.r,e.g,e.b),c.setXYZ(23,e.r,e.g,e.b),c.setXYZ(24,t.r,t.g,t.b),c.setXYZ(25,t.r,t.g,t.b),c.setXYZ(26,t.r,t.g,t.b),c.setXYZ(27,t.r,t.g,t.b),c.setXYZ(28,t.r,t.g,t.b),c.setXYZ(29,t.r,t.g,t.b),c.setXYZ(30,t.r,t.g,t.b),c.setXYZ(31,t.r,t.g,t.b),c.setXYZ(32,n.r,n.g,n.b),c.setXYZ(33,n.r,n.g,n.b),c.setXYZ(34,n.r,n.g,n.b),c.setXYZ(35,n.r,n.g,n.b),c.setXYZ(36,n.r,n.g,n.b),c.setXYZ(37,n.r,n.g,n.b),c.setXYZ(38,i.r,i.g,i.b),c.setXYZ(39,i.r,i.g,i.b),c.setXYZ(40,s.r,s.g,s.b),c.setXYZ(41,s.r,s.g,s.b),c.setXYZ(42,s.r,s.g,s.b),c.setXYZ(43,s.r,s.g,s.b),c.setXYZ(44,s.r,s.g,s.b),c.setXYZ(45,s.r,s.g,s.b),c.setXYZ(46,s.r,s.g,s.b),c.setXYZ(47,s.r,s.g,s.b),c.setXYZ(48,s.r,s.g,s.b),c.setXYZ(49,s.r,s.g,s.b),c.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;un.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),pn("c",t,e,un,0,0,-1),pn("t",t,e,un,0,0,1),pn("n1",t,e,un,-n,-i,-1),pn("n2",t,e,un,n,-i,-1),pn("n3",t,e,un,-n,i,-1),pn("n4",t,e,un,n,i,-1),pn("f1",t,e,un,-n,-i,1),pn("f2",t,e,un,n,-i,1),pn("f3",t,e,un,-n,i,1),pn("f4",t,e,un,n,i,1),pn("u1",t,e,un,n*.7,i*1.1,-1),pn("u2",t,e,un,-n*.7,i*1.1,-1),pn("u3",t,e,un,0,i*2,-1),pn("cf1",t,e,un,-n,0,1),pn("cf2",t,e,un,n,0,1),pn("cf3",t,e,un,0,-i,1),pn("cf4",t,e,un,0,i,1),pn("cn1",t,e,un,-n,0,-1),pn("cn2",t,e,un,n,0,-1),pn("cn3",t,e,un,0,-i,-1),pn("cn4",t,e,un,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function pn(r,e,t,n,i,s,o){gu.set(i,s,o).unproject(n);const c=e[r];if(c!==void 0){const u=t.getAttribute("position");for(let h=0,f=c.length;h<f;h++)u.setXYZ(c[h],gu.x,gu.y,gu.z)}}const vu=new Ln;class xC extends hr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),s=new Ct;s.setIndex(new Zt(n,1)),s.setAttribute("position",new Zt(i,3)),super(s,new ii({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&vu.setFromObject(this.object),vu.isEmpty())return;const t=vu.min,n=vu.max,i=this.geometry.attributes.position,s=i.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class SC extends hr{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new Ct;s.setIndex(new Zt(n,1)),s.setAttribute("position",new Qe(i,3)),super(s,new ii({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class MC extends ss{constructor(e,t=1,n=16776960){const i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Ct;o.setAttribute("position",new Qe(s,3)),o.computeBoundingSphere(),super(o,new ii({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const c=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],u=new Ct;u.setAttribute("position",new Qe(c,3)),u.computeBoundingSphere(),this.add(new tn(u,new Lr({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const b0=new F;let _u,ad;class wC extends zt{constructor(e=new F(0,0,1),t=new F(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",_u===void 0&&(_u=new Ct,_u.setAttribute("position",new Qe([0,0,0,0,1,0],3)),ad=new ro(0,.5,1,5,1),ad.translate(0,-.5,0)),this.position.copy(t),this.line=new ss(_u,new ii({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new tn(ad,new Lr({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{b0.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(b0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class EC extends hr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ct;i.setAttribute("position",new Qe(t,3)),i.setAttribute("color",new Qe(n,3));const s=new ii({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Ye,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class AC{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new hl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const A=[];for(let E=0,b=_.length;E<b;E++){const O=_[E],I=new Gs;I.curves=O.curves,A.push(I)}return A}function n(_,A){const E=A.length;let b=!1;for(let O=E-1,I=0;I<E;O=I++){let D=A[O],N=A[I],R=N.x-D.x,C=N.y-D.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(D=A[I],R=-R,N=A[O],C=-C),_.y<D.y||_.y>N.y)continue;if(_.y===D.y){if(_.x===D.x)return!0}else{const H=C*(_.x-D.x)-R*(_.y-D.y);if(H===0)return!0;if(H<0)continue;b=!b}}else{if(_.y!==D.y)continue;if(N.x<=_.x&&_.x<=D.x||D.x<=_.x&&_.x<=N.x)return!0}}return b}const i=cr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,c,u;const h=[];if(s.length===1)return c=s[0],u=new Gs,u.curves=c.curves,h.push(u),h;let f=!i(s[0].getPoints());f=e?!f:f;const p=[],m=[];let g=[],y=0,S;m[y]=void 0,g[y]=[];for(let _=0,A=s.length;_<A;_++)c=s[_],S=c.getPoints(),o=i(S),o=e?!o:o,o?(!f&&m[y]&&y++,m[y]={s:new Gs,p:S},m[y].s.curves=c.curves,f&&y++,g[y]=[]):g[y].push({h:c,p:S[0]});if(!m[0])return t(s);if(m.length>1){let _=!1,A=0;for(let E=0,b=m.length;E<b;E++)p[E]=[];for(let E=0,b=m.length;E<b;E++){const O=g[E];for(let I=0;I<O.length;I++){const D=O[I];let N=!0;for(let R=0;R<m.length;R++)n(D.p,m[R].p)&&(E!==R&&A++,N?(N=!1,p[R].push(D)):_=!0);N&&p[E].push(D)}}A>0&&_===!1&&(g=p)}let x;for(let _=0,A=m.length;_<A;_++){u=m[_].s,h.push(u),x=g[_];for(let E=0,b=x.length;E<b;E++)u.holes.push(x[E].h)}return h}}class TC extends ni{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);const bC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:mp,AddEquation:es,AddOperation:A_,AdditiveAnimationBlendMode:Ap,AdditiveBlending:wd,AgXToneMapping:P_,AlphaFormat:D_,AlwaysCompare:Q_,AlwaysDepth:__,AlwaysStencilFunc:ep,AmbientLight:Qy,AnimationAction:sx,AnimationClip:vl,AnimationLoader:Ib,AnimationMixer:rC,AnimationObjectGroup:nC,AnimationUtils:bb,ArcCurve:wy,ArrayCamera:py,ArrowHelper:wC,AttachedBindMode:Td,Audio:ix,AudioAnalyser:Yb,AudioContext:em,AudioListener:Gb,AudioLoader:kb,AxesHelper:EC,BackSide:ti,BasicDepthPacking:G_,BasicShadowMap:Q0,BatchedMesh:xy,Bone:Bp,BooleanKeyframeTrack:qs,Box2:uC,Box3:Ln,Box3Helper:SC,BoxGeometry:Ys,BoxHelper:xC,BufferAttribute:Zt,BufferGeometry:Ct,BufferGeometryLoader:nx,ByteType:vp,Cache:br,Camera:El,CameraHelper:yC,CanvasTexture:KT,CapsuleGeometry:th,CatmullRomCurve3:Ey,CineonToneMapping:C_,CircleGeometry:nh,ClampToEdgeWrapping:Sn,Clock:tm,Color:Ye,ColorKeyframeTrack:Jp,ColorManagement:qt,CompressedArrayTexture:jT,CompressedCubeTexture:JT,CompressedTexture:$u,CompressedTextureLoader:Lb,ConeGeometry:ih,ConstantAlphaFactor:m_,ConstantColorFactor:d_,CubeCamera:ay,CubeReflectionMapping:ur,CubeRefractionMapping:is,CubeTexture:Al,CubeTextureLoader:qy,CubeUVReflectionMapping:$a,CubicBezierCurve:Hp,CubicBezierCurve3:Ay,CubicInterpolant:Gy,CullFaceBack:Md,CullFaceFront:K0,CullFaceFrontBack:HS,CullFaceNone:J0,Curve:Yi,CurvePath:by,CustomBlending:$0,CustomToneMapping:R_,CylinderGeometry:ro,Cylindrical:cC,Data3DTexture:Rp,DataArrayTexture:Yu,DataTexture:Cr,DataTextureLoader:Kp,DataUtils:Os,DecrementStencilOp:KS,DecrementWrapStencilOp:$S,DefaultLoadingManager:Yy,DepthFormat:ks,DepthStencilFormat:Ya,DepthTexture:Dp,DetachedBindMode:L_,DirectionalLight:Ky,DirectionalLightHelper:_C,DiscreteInterpolant:Wy,DisplayP3ColorSpace:Xu,DodecahedronGeometry:rh,DoubleSide:Xi,DstAlphaFactor:l_,DstColorFactor:u_,DynamicCopyUsage:pM,DynamicDrawUsage:lM,DynamicReadUsage:hM,EdgesGeometry:Cy,EllipseCurve:eh,EqualCompare:Z_,EqualDepth:x_,EqualStencilFunc:iM,EquirectangularReflectionMapping:Xa,EquirectangularRefractionMapping:$o,Euler:wi,EventDispatcher:Ir,ExtrudeGeometry:ah,FileLoader:Si,Float16BufferAttribute:$M,Float32BufferAttribute:Qe,FloatType:mn,Fog:Ju,FogExp2:ju,FramebufferTexture:ZT,FrontSide:Rr,Frustum:Tl,GLBufferAttribute:oC,GLSL1:gM,GLSL3:tp,GreaterCompare:j_,GreaterDepth:M_,GreaterEqualCompare:K_,GreaterEqualDepth:S_,GreaterEqualStencilFunc:oM,GreaterStencilFunc:sM,GridHelper:gC,Group:ka,HalfFloatType:Bn,HemisphereLight:Zy,HemisphereLightHelper:mC,IcosahedronGeometry:Rl,ImageBitmapLoader:zb,ImageLoader:_l,ImageUtils:ny,IncrementStencilOp:JS,IncrementWrapStencilOp:QS,InstancedBufferAttribute:ja,InstancedBufferGeometry:$p,InstancedInterleavedBuffer:ku,InstancedMesh:yy,Int16BufferAttribute:KM,Int32BufferAttribute:QM,Int8BufferAttribute:ZM,IntType:Vu,InterleavedBuffer:Ku,InterleavedBufferAttribute:yi,Interpolant:Ll,InterpolateDiscrete:nl,InterpolateLinear:il,InterpolateSmooth:Iu,InvertStencilOp:eM,KeepStencilOp:Ps,KeyframeTrack:qi,LOD:vy,LatheGeometry:Cl,Layers:Vs,LessCompare:q_,LessDepth:y_,LessEqualCompare:Tp,LessEqualDepth:Qo,LessEqualStencilFunc:rM,LessStencilFunc:nM,Light:ls,LightProbe:tx,Line:ss,Line3:ax,LineBasicMaterial:ii,LineCurve:Vp,LineCurve3:Ty,LineDashedMaterial:ky,LineLoop:Sy,LineSegments:hr,LinearDisplayP3ColorSpace:wl,LinearFilter:Xt,LinearInterpolant:jp,LinearMipMapLinearFilter:bd,LinearMipMapNearestFilter:WS,LinearMipmapLinearFilter:sr,LinearMipmapNearestFilter:qo,LinearSRGBColorSpace:Oi,LinearToneMapping:T_,LinearTransfer:sl,Loader:ri,LoaderUtils:lp,LoadingManager:dh,LoopOnce:k_,LoopPingPong:V_,LoopRepeat:H_,LuminanceAlphaFormat:F_,LuminanceFormat:O_,MOUSE:zS,Material:qn,MaterialLoader:ph,MathUtils:Cp,Matrix3:St,Matrix4:ft,MaxEquation:i_,Mesh:tn,MeshBasicMaterial:Lr,MeshDepthMaterial:Zu,MeshDistanceMaterial:Np,MeshLambertMaterial:By,MeshMatcapMaterial:zy,MeshNormalMaterial:Fy,MeshPhongMaterial:Ny,MeshPhysicalMaterial:Dy,MeshStandardMaterial:qp,MeshToonMaterial:Oy,MinEquation:n_,MirroredRepeatWrapping:tl,MixOperation:E_,MultiplyBlending:Ad,MultiplyOperation:Ml,NearestFilter:In,NearestMipMapLinearFilter:GS,NearestMipMapNearestFilter:VS,NearestMipmapLinearFilter:Fa,NearestMipmapNearestFilter:gp,NeutralToneMapping:I_,NeverCompare:Y_,NeverDepth:v_,NeverStencilFunc:tM,NoBlending:or,NoColorSpace:Ar,NoToneMapping:lr,NormalAnimationBlendMode:Wu,NormalBlending:zs,NotEqualCompare:J_,NotEqualDepth:w_,NotEqualStencilFunc:aM,NumberKeyframeTrack:ml,Object3D:zt,ObjectLoader:Fb,ObjectSpaceNormalMap:X_,OctahedronGeometry:Pl,OneFactor:s_,OneMinusConstantAlphaFactor:g_,OneMinusConstantColorFactor:p_,OneMinusDstAlphaFactor:c_,OneMinusDstColorFactor:h_,OneMinusSrcAlphaFactor:Nu,OneMinusSrcColorFactor:o_,OrthographicCamera:no,P3Primaries:ol,PCFShadowMap:Hu,PCFSoftShadowMap:Yo,PMREMGenerator:np,Path:hl,PerspectiveCamera:Pn,Plane:Qr,PlaneGeometry:Ur,PlaneHelper:MC,PointLight:Jy,PointLightHelper:dC,Points:My,PointsMaterial:zp,PolarGridHelper:vC,PolyhedronGeometry:os,PositionalAudio:Xb,PropertyBinding:Nt,PropertyMixer:rx,QuadraticBezierCurve:Gp,QuadraticBezierCurve3:Wp,Quaternion:ui,QuaternionKeyframeTrack:so,QuaternionLinearInterpolant:Xy,RED_GREEN_RGTC2_Format:Qd,RED_RGTC1_Format:z_,REVISION:Sl,RGBADepthPacking:W_,RGBAFormat:wn,RGBAIntegerFormat:Ep,RGBA_ASTC_10x10_Format:Yd,RGBA_ASTC_10x5_Format:Gd,RGBA_ASTC_10x6_Format:Wd,RGBA_ASTC_10x8_Format:Xd,RGBA_ASTC_12x10_Format:qd,RGBA_ASTC_12x12_Format:Zd,RGBA_ASTC_4x4_Format:Nd,RGBA_ASTC_5x4_Format:Od,RGBA_ASTC_5x5_Format:Fd,RGBA_ASTC_6x5_Format:Bd,RGBA_ASTC_6x6_Format:zd,RGBA_ASTC_8x5_Format:kd,RGBA_ASTC_8x6_Format:Hd,RGBA_ASTC_8x8_Format:Vd,RGBA_BPTC_Format:Pu,RGBA_ETC2_EAC_Format:Dd,RGBA_PVRTC_2BPPV1_Format:Id,RGBA_PVRTC_4BPPV1_Format:Pd,RGBA_S3TC_DXT1_Format:bu,RGBA_S3TC_DXT3_Format:Cu,RGBA_S3TC_DXT5_Format:Ru,RGBFormat:N_,RGB_BPTC_SIGNED_Format:jd,RGB_BPTC_UNSIGNED_Format:Jd,RGB_ETC1_Format:Ld,RGB_ETC2_Format:Ud,RGB_PVRTC_2BPPV1_Format:Rd,RGB_PVRTC_4BPPV1_Format:Cd,RGB_S3TC_DXT1_Format:Tu,RGFormat:B_,RGIntegerFormat:wp,RawShaderMaterial:Uy,Ray:to,Raycaster:sm,Rec709Primaries:al,RectAreaLight:$y,RedFormat:Gu,RedIntegerFormat:Mp,ReinhardToneMapping:b_,RenderTarget:iy,RepeatWrapping:el,ReplaceStencilOp:jS,ReverseSubtractEquation:t_,RingGeometry:oh,SIGNED_RED_GREEN_RGTC2_Format:$d,SIGNED_RED_RGTC1_Format:Kd,SRGBColorSpace:vi,SRGBTransfer:Qt,Scene:bl,ShaderChunk:wt,ShaderLib:Wi,ShaderMaterial:zn,ShadowMaterial:Ly,Shape:Gs,ShapeGeometry:lh,ShapePath:AC,ShapeUtils:cr,ShortType:_p,Skeleton:Qu,SkeletonHelper:fC,SkinnedMesh:_y,Source:Ns,Sphere:Un,SphereGeometry:Il,Spherical:lC,SphericalHarmonics3:ex,SplineCurve:Xp,SpotLight:jy,SpotLightHelper:hC,Sprite:gy,SpriteMaterial:Fp,SrcAlphaFactor:Du,SrcAlphaSaturateFactor:f_,SrcColorFactor:a_,StaticCopyUsage:dM,StaticDrawUsage:ll,StaticReadUsage:uM,StereoCamera:Hb,StreamCopyUsage:mM,StreamDrawUsage:cM,StreamReadUsage:fM,StringKeyframeTrack:Zs,SubtractEquation:e_,SubtractiveBlending:Ed,TOUCH:kS,TangentSpaceNormalMap:as,TetrahedronGeometry:ch,Texture:jt,TextureLoader:Ub,TorusGeometry:uh,TorusKnotGeometry:hh,Triangle:_i,TriangleFanDrawMode:qS,TriangleStripDrawMode:YS,TrianglesDrawMode:XS,TubeGeometry:fh,UVMapping:ns,Uint16BufferAttribute:Pp,Uint32BufferAttribute:Ip,Uint8BufferAttribute:jM,Uint8ClampedBufferAttribute:JM,Uniform:rm,UniformsGroup:aC,UniformsLib:Fe,UniformsUtils:Ou,UnsignedByteType:Mi,UnsignedInt248Type:eo,UnsignedInt5999Type:U_,UnsignedIntType:rs,UnsignedShort4444Type:xp,UnsignedShort5551Type:Sp,UnsignedShortType:yp,VSMShadowMap:Gi,Vector2:ye,Vector3:F,Vector4:Lt,VectorKeyframeTrack:gl,VideoTexture:qT,WebGL3DRenderTarget:BM,WebGLArrayRenderTarget:FM,WebGLCoordinateSystem:ar,WebGLCubeRenderTarget:Lp,WebGLMultipleRenderTargets:TC,WebGLRenderTarget:ni,WebGLRenderer:Op,WebGLUtils:dy,WebGPUCoordinateSystem:cl,WireframeGeometry:Yp,WrapAroundEnding:rl,ZeroCurvatureEnding:Us,ZeroFactor:r_,ZeroSlopeEnding:Ds,ZeroStencilOp:ZS,createCanvasElement:ey},Symbol.toStringTag,{value:"Module"}));var lx={exports:{}},js={};/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */js.ConcurrentRoot=1;js.ContinuousEventPriority=4;js.DefaultEventPriority=16;js.DiscreteEventPriority=1;js.IdleEventPriority=536870912;js.LegacyRoot=0;lx.exports=js;var Va=lx.exports;function CC(r){let e;const t=new Set,n=(h,f)=>{const p=typeof h=="function"?h(e):h;if(p!==e){const m=e;e=f?p:Object.assign({},e,p),t.forEach(g=>g(e,m))}},i=()=>e,s=(h,f=i,p=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let m=f(e);function g(){const y=f(e);if(!p(m,y)){const S=m;h(m=y,S)}}return t.add(g),()=>t.delete(g)},u={setState:n,getState:i,subscribe:(h,f,p)=>f||p?s(h,f,p):(t.add(h),()=>t.delete(h)),destroy:()=>t.clear()};return e=r(n,i,u),u}const RC=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),C0=RC?me.useEffect:me.useLayoutEffect;function cx(r){const e=typeof r=="function"?CC(r):r,t=(n=e.getState,i=Object.is)=>{const[,s]=me.useReducer(x=>x+1,0),o=e.getState(),c=me.useRef(o),u=me.useRef(n),h=me.useRef(i),f=me.useRef(!1),p=me.useRef();p.current===void 0&&(p.current=n(o));let m,g=!1;(c.current!==o||u.current!==n||h.current!==i||f.current)&&(m=n(o),g=!i(p.current,m)),C0(()=>{g&&(p.current=m),c.current=o,u.current=n,h.current=i,f.current=!1});const y=me.useRef(o);C0(()=>{const x=()=>{try{const A=e.getState(),E=u.current(A);h.current(p.current,E)||(c.current=A,p.current=E,s())}catch{f.current=!0,s()}},_=e.subscribe(x);return e.getState()!==y.current&&x(),_},[]);const S=g?m:p.current;return me.useDebugValue(S),S};return Object.assign(t,e),t[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[t,e];return{next(){const i=n.length<=0;return{value:n.shift(),done:i}}}},t}const PC=r=>typeof r=="object"&&typeof r.then=="function",Bs=[];function ux(r,e,t=(n,i)=>n===i){if(r===e)return!0;if(!r||!e)return!1;const n=r.length;if(e.length!==n)return!1;for(let i=0;i<n;i++)if(!t(r[i],e[i]))return!1;return!0}function hx(r,e=null,t=!1,n={}){e===null&&(e=[r]);for(const s of Bs)if(ux(e,s.keys,s.equal)){if(t)return;if(Object.prototype.hasOwnProperty.call(s,"error"))throw s.error;if(Object.prototype.hasOwnProperty.call(s,"response"))return n.lifespan&&n.lifespan>0&&(s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout(s.remove,n.lifespan)),s.response;if(!t)throw s.promise}const i={keys:e,equal:n.equal,remove:()=>{const s=Bs.indexOf(i);s!==-1&&Bs.splice(s,1)},promise:(PC(r)?r:r(...e)).then(s=>{i.response=s,n.lifespan&&n.lifespan>0&&(i.timeout=setTimeout(i.remove,n.lifespan))}).catch(s=>i.error=s)};if(Bs.push(i),!t)throw i.promise}const IC=(r,e,t)=>hx(r,e,!1,t),LC=(r,e,t)=>void hx(r,e,!0,t),UC=r=>{if(r===void 0||r.length===0)Bs.splice(0,Bs.length);else{const e=Bs.find(t=>ux(r,t.keys,t.equal));e&&e.remove()}};var fx={exports:{}},dx={exports:{}},px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(r){function e(X,re){var K=X.length;X.push(re);e:for(;0<K;){var de=K-1>>>1,Re=X[de];if(0<i(Re,re))X[de]=re,X[K]=Re,K=de;else break e}}function t(X){return X.length===0?null:X[0]}function n(X){if(X.length===0)return null;var re=X[0],K=X.pop();if(K!==re){X[0]=K;e:for(var de=0,Re=X.length,Be=Re>>>1;de<Be;){var oe=2*(de+1)-1,Ee=X[oe],Te=oe+1,be=X[Te];if(0>i(Ee,K))Te<Re&&0>i(be,Ee)?(X[de]=be,X[Te]=K,de=Te):(X[de]=Ee,X[oe]=K,de=oe);else if(Te<Re&&0>i(be,K))X[de]=be,X[Te]=K,de=Te;else break e}}return re}function i(X,re){var K=X.sortIndex-re.sortIndex;return K!==0?K:X.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;r.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();r.unstable_now=function(){return o.now()-c}}var u=[],h=[],f=1,p=null,m=3,g=!1,y=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(X){for(var re=t(h);re!==null;){if(re.callback===null)n(h);else if(re.startTime<=X)n(h),re.sortIndex=re.expirationTime,e(u,re);else break;re=t(h)}}function b(X){if(S=!1,E(X),!y)if(t(u)!==null)y=!0,te(O);else{var re=t(h);re!==null&&Ae(b,re.startTime-X)}}function O(X,re){y=!1,S&&(S=!1,_(N),N=-1),g=!0;var K=m;try{for(E(re),p=t(u);p!==null&&(!(p.expirationTime>re)||X&&!H());){var de=p.callback;if(typeof de=="function"){p.callback=null,m=p.priorityLevel;var Re=de(p.expirationTime<=re);re=r.unstable_now(),typeof Re=="function"?p.callback=Re:p===t(u)&&n(u),E(re)}else n(u);p=t(u)}if(p!==null)var Be=!0;else{var oe=t(h);oe!==null&&Ae(b,oe.startTime-re),Be=!1}return Be}finally{p=null,m=K,g=!1}}var I=!1,D=null,N=-1,R=5,C=-1;function H(){return!(r.unstable_now()-C<R)}function q(){if(D!==null){var X=r.unstable_now();C=X;var re=!0;try{re=D(!0,X)}finally{re?W():(I=!1,D=null)}}else I=!1}var W;if(typeof A=="function")W=function(){A(q)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ie=Y.port2;Y.port1.onmessage=q,W=function(){ie.postMessage(null)}}else W=function(){x(q,0)};function te(X){D=X,I||(I=!0,W())}function Ae(X,re){N=x(function(){X(r.unstable_now())},re)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){y||g||(y=!0,te(O))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(u)},r.unstable_next=function(X){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var K=m;m=re;try{return X()}finally{m=K}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,re){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var K=m;m=X;try{return re()}finally{m=K}},r.unstable_scheduleCallback=function(X,re,K){var de=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?de+K:de):K=de,X){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=K+Re,X={id:f++,callback:re,priorityLevel:X,startTime:K,expirationTime:Re,sortIndex:-1},K>de?(X.sortIndex=K,e(h,X),t(u)===null&&X===t(h)&&(S?(_(N),N=-1):S=!0,Ae(b,K-de))):(X.sortIndex=Re,e(u,X),y||g||(y=!0,te(O))),X},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(X){var re=m;return function(){var K=m;m=re;try{return X.apply(this,arguments)}finally{m=K}}}})(px);dx.exports=px;var up=dx.exports;/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DC=function(e){var t={},n=me,i=up,s=Object.assign;function o(a){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=1;d<arguments.length;d++)l+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=Symbol.for("react.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),y=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),O=Symbol.iterator;function I(a){return a===null||typeof a!="object"?null:(a=O&&a[O]||a["@@iterator"],typeof a=="function"?a:null)}function D(a){if(a==null)return null;if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case f:return"Fragment";case h:return"Portal";case m:return"Profiler";case p:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList"}if(typeof a=="object")switch(a.$$typeof){case y:return(a.displayName||"Context")+".Consumer";case g:return(a._context.displayName||"Context")+".Provider";case S:var l=a.render;return a=a.displayName,a||(a=l.displayName||l.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case A:return l=a.displayName||null,l!==null?l:D(a.type)||"Memo";case E:l=a._payload,a=a._init;try{return D(a(l))}catch{}}return null}function N(a){var l=a.type;switch(a.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=l.render,a=a.displayName||a.name||"",l.displayName||(a!==""?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return D(l);case 8:return l===p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function R(a){var l=a,d=a;if(a.alternate)for(;l.return;)l=l.return;else{a=l;do l=a,l.flags&4098&&(d=l.return),a=l.return;while(a)}return l.tag===3?d:null}function C(a){if(R(a)!==a)throw Error(o(188))}function H(a){var l=a.alternate;if(!l){if(l=R(a),l===null)throw Error(o(188));return l!==a?null:a}for(var d=a,v=l;;){var M=d.return;if(M===null)break;var T=M.alternate;if(T===null){if(v=M.return,v!==null){d=v;continue}break}if(M.child===T.child){for(T=M.child;T;){if(T===d)return C(M),a;if(T===v)return C(M),l;T=T.sibling}throw Error(o(188))}if(d.return!==v.return)d=M,v=T;else{for(var V=!1,j=M.child;j;){if(j===d){V=!0,d=M,v=T;break}if(j===v){V=!0,v=M,d=T;break}j=j.sibling}if(!V){for(j=T.child;j;){if(j===d){V=!0,d=T,v=M;break}if(j===v){V=!0,v=T,d=M;break}j=j.sibling}if(!V)throw Error(o(189))}}if(d.alternate!==v)throw Error(o(190))}if(d.tag!==3)throw Error(o(188));return d.stateNode.current===d?a:l}function q(a){return a=H(a),a!==null?W(a):null}function W(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){var l=W(a);if(l!==null)return l;a=a.sibling}return null}function Y(a){if(a.tag===5||a.tag===6)return a;for(a=a.child;a!==null;){if(a.tag!==4){var l=Y(a);if(l!==null)return l}a=a.sibling}return null}var ie=Array.isArray,te=e.getPublicInstance,Ae=e.getRootHostContext,X=e.getChildHostContext,re=e.prepareForCommit,K=e.resetAfterCommit,de=e.createInstance,Re=e.appendInitialChild,Be=e.finalizeInitialChildren,oe=e.prepareUpdate,Ee=e.shouldSetTextContent,Te=e.createTextInstance,be=e.scheduleTimeout,ot=e.cancelTimeout,gt=e.noTimeout,$=e.isPrimaryRenderer,dt=e.supportsMutation,pe=e.supportsPersistence,Se=e.supportsHydration,_e=e.getInstanceFromNode,Le=e.preparePortalMount,Ce=e.getCurrentEventPriority,qe=e.detachDeletedInstance,rt=e.supportsMicrotasks,G=e.scheduleMicrotask,U=e.supportsTestSelectors,se=e.findFiberRoot,ve=e.getBoundingRect,we=e.getTextContent,xe=e.isHiddenSubtree,$e=e.matchAccessibilityRole,ze=e.setFocusIfFocusable,Ne=e.setupIntersectionObserver,pt=e.appendChild,Ie=e.appendChildToContainer,et=e.commitTextUpdate,Et=e.commitMount,lt=e.commitUpdate,We=e.insertBefore,st=e.insertInContainerBefore,At=e.removeChild,Ht=e.removeChildFromContainer,at=e.resetTextContent,Z=e.hideInstance,Me=e.hideTextInstance,J=e.unhideInstance,De=e.unhideTextInstance,Xe=e.clearContainer,Pt=e.cloneInstance,Vt=e.createContainerChildSet,Jt=e.appendChildToContainerChildSet,gn=e.finalizeContainerChildren,Ut=e.replaceContainerChildren,Zn=e.cloneHiddenInstance,vn=e.cloneHiddenTextInstance,Js=e.canHydrateInstance,Ks=e.canHydrateTextInstance,Qs=e.canHydrateSuspenseInstance,Ei=e.isSuspenseInstancePending,Dr=e.isSuspenseInstanceFallback,Ai=e.registerSuspenseInstanceRetry,si=e.getNextHydratableSibling,Tt=e.getFirstHydratableChild,$s=e.getFirstHydratableChildWithinContainer,oo=e.getFirstHydratableChildWithinSuspenseInstance,P=e.hydrateInstance,w=e.hydrateTextInstance,L=e.hydrateSuspenseInstance,B=e.getNextHydratableInstanceAfterSuspenseInstance,z=e.commitHydratedContainer,k=e.commitHydratedSuspenseInstance,ee=e.clearSuspenseBoundary,ne=e.clearSuspenseBoundaryFromContainer,le=e.shouldDeleteUnhydratedTailInstances,ue=e.didNotMatchHydratedContainerTextInstance,ge=e.didNotMatchHydratedTextInstance,fe;function Ze(a){if(fe===void 0)try{throw Error()}catch(d){var l=d.stack.trim().match(/\n( *(at )?)/);fe=l&&l[1]||""}return`
`+fe+a}var Ue=!1;function He(a,l){if(!a||Ue)return"";Ue=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(Pe){var v=Pe}Reflect.construct(a,[],l)}else{try{l.call()}catch(Pe){v=Pe}a.call(l.prototype)}else{try{throw Error()}catch(Pe){v=Pe}a()}}catch(Pe){if(Pe&&v&&typeof Pe.stack=="string"){for(var M=Pe.stack.split(`
`),T=v.stack.split(`
`),V=M.length-1,j=T.length-1;1<=V&&0<=j&&M[V]!==T[j];)j--;for(;1<=V&&0<=j;V--,j--)if(M[V]!==T[j]){if(V!==1||j!==1)do if(V--,j--,0>j||M[V]!==T[j]){var he=`
`+M[V].replace(" at new "," at ");return a.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",a.displayName)),he}while(1<=V&&0<=j);break}}}finally{Ue=!1,Error.prepareStackTrace=d}return(a=a?a.displayName||a.name:"")?Ze(a):""}var tt=Object.prototype.hasOwnProperty,ct=[],Je=-1;function Oe(a){return{current:a}}function ht(a){0>Je||(a.current=ct[Je],ct[Je]=null,Je--)}function je(a,l){Je++,ct[Je]=a.current,a.current=l}var vt={},Gt=Oe(vt),mt=Oe(!1),Wt=vt;function Dt(a,l){var d=a.type.contextTypes;if(!d)return vt;var v=a.stateNode;if(v&&v.__reactInternalMemoizedUnmaskedChildContext===l)return v.__reactInternalMemoizedMaskedChildContext;var M={},T;for(T in d)M[T]=l[T];return v&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=l,a.__reactInternalMemoizedMaskedChildContext=M),M}function Yt(a){return a=a.childContextTypes,a!=null}function fn(){ht(mt),ht(Gt)}function _t(a,l,d){if(Gt.current!==vt)throw Error(o(168));je(Gt,l),je(mt,d)}function sn(a,l,d){var v=a.stateNode;if(l=l.childContextTypes,typeof v.getChildContext!="function")return d;v=v.getChildContext();for(var M in v)if(!(M in l))throw Error(o(108,N(a)||"Unknown",M));return s({},d,v)}function kt(a){return a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||vt,Wt=Gt.current,je(Gt,a),je(mt,mt.current),!0}function It(a,l,d){var v=a.stateNode;if(!v)throw Error(o(169));d?(a=sn(a,l,Wt),v.__reactInternalMemoizedMergedChildContext=a,ht(mt),ht(Gt),je(Gt,a)):ht(mt),je(mt,d)}var nn=Math.clz32?Math.clz32:Zi,fr=Math.log,jn=Math.LN2;function Zi(a){return a>>>=0,a===0?32:31-(fr(a)/jn|0)|0}var Nl=64,Ol=4194304;function lo(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return a}}function Fl(a,l){var d=a.pendingLanes;if(d===0)return 0;var v=0,M=a.suspendedLanes,T=a.pingedLanes,V=d&268435455;if(V!==0){var j=V&~M;j!==0?v=lo(j):(T&=V,T!==0&&(v=lo(T)))}else V=d&~M,V!==0?v=lo(V):T!==0&&(v=lo(T));if(v===0)return 0;if(l!==0&&l!==v&&!(l&M)&&(M=v&-v,T=l&-l,M>=T||M===16&&(T&4194240)!==0))return l;if(v&4&&(v|=d&16),l=a.entangledLanes,l!==0)for(a=a.entanglements,l&=v;0<l;)d=31-nn(l),M=1<<d,v|=a[d],l&=~M;return v}function qx(a,l){switch(a){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zx(a,l){for(var d=a.suspendedLanes,v=a.pingedLanes,M=a.expirationTimes,T=a.pendingLanes;0<T;){var V=31-nn(T),j=1<<V,he=M[V];he===-1?(!(j&d)||j&v)&&(M[V]=qx(j,l)):he<=l&&(a.expiredLanes|=j),T&=~j}}function vh(a){return a=a.pendingLanes&-1073741825,a!==0?a:a&1073741824?1073741824:0}function _h(a){for(var l=[],d=0;31>d;d++)l.push(a);return l}function co(a,l,d){a.pendingLanes|=l,l!==536870912&&(a.suspendedLanes=0,a.pingedLanes=0),a=a.eventTimes,l=31-nn(l),a[l]=d}function jx(a,l){var d=a.pendingLanes&~l;a.pendingLanes=l,a.suspendedLanes=0,a.pingedLanes=0,a.expiredLanes&=l,a.mutableReadLanes&=l,a.entangledLanes&=l,l=a.entanglements;var v=a.eventTimes;for(a=a.expirationTimes;0<d;){var M=31-nn(d),T=1<<M;l[M]=0,v[M]=-1,a[M]=-1,d&=~T}}function yh(a,l){var d=a.entangledLanes|=l;for(a=a.entanglements;d;){var v=31-nn(d),M=1<<v;M&l|a[v]&l&&(a[v]|=l),d&=~M}}var Ot=0;function ym(a){return a&=-a,1<a?4<a?a&268435455?16:536870912:4:1}var xh=i.unstable_scheduleCallback,xm=i.unstable_cancelCallback,Jx=i.unstable_shouldYield,Kx=i.unstable_requestPaint,Tn=i.unstable_now,Sh=i.unstable_ImmediatePriority,Qx=i.unstable_UserBlockingPriority,Mh=i.unstable_NormalPriority,$x=i.unstable_IdlePriority,Bl=null,ji=null;function eS(a){if(ji&&typeof ji.onCommitFiberRoot=="function")try{ji.onCommitFiberRoot(Bl,a,void 0,(a.current.flags&128)===128)}catch{}}function tS(a,l){return a===l&&(a!==0||1/a===1/l)||a!==a&&l!==l}var Ji=typeof Object.is=="function"?Object.is:tS,dr=null,zl=!1,wh=!1;function Sm(a){dr===null?dr=[a]:dr.push(a)}function nS(a){zl=!0,Sm(a)}function Ki(){if(!wh&&dr!==null){wh=!0;var a=0,l=Ot;try{var d=dr;for(Ot=1;a<d.length;a++){var v=d[a];do v=v(!0);while(v!==null)}dr=null,zl=!1}catch(M){throw dr!==null&&(dr=dr.slice(a+1)),xh(Sh,Ki),M}finally{Ot=l,wh=!1}}return null}var iS=c.ReactCurrentBatchConfig;function kl(a,l){if(Ji(a,l))return!0;if(typeof a!="object"||a===null||typeof l!="object"||l===null)return!1;var d=Object.keys(a),v=Object.keys(l);if(d.length!==v.length)return!1;for(v=0;v<d.length;v++){var M=d[v];if(!tt.call(l,M)||!Ji(a[M],l[M]))return!1}return!0}function rS(a){switch(a.tag){case 5:return Ze(a.type);case 16:return Ze("Lazy");case 13:return Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 2:case 15:return a=He(a.type,!1),a;case 11:return a=He(a.type.render,!1),a;case 1:return a=He(a.type,!0),a;default:return""}}function Fi(a,l){if(a&&a.defaultProps){l=s({},l),a=a.defaultProps;for(var d in a)l[d]===void 0&&(l[d]=a[d]);return l}return l}var Hl=Oe(null),Vl=null,ea=null,Eh=null;function Ah(){Eh=ea=Vl=null}function Mm(a,l,d){$?(je(Hl,l._currentValue),l._currentValue=d):(je(Hl,l._currentValue2),l._currentValue2=d)}function Th(a){var l=Hl.current;ht(Hl),$?a._currentValue=l:a._currentValue2=l}function bh(a,l,d){for(;a!==null;){var v=a.alternate;if((a.childLanes&l)!==l?(a.childLanes|=l,v!==null&&(v.childLanes|=l)):v!==null&&(v.childLanes&l)!==l&&(v.childLanes|=l),a===d)break;a=a.return}}function ta(a,l){Vl=a,Eh=ea=null,a=a.dependencies,a!==null&&a.firstContext!==null&&(a.lanes&l&&(di=!0),a.firstContext=null)}function Ti(a){var l=$?a._currentValue:a._currentValue2;if(Eh!==a)if(a={context:a,memoizedValue:l,next:null},ea===null){if(Vl===null)throw Error(o(308));ea=a,Vl.dependencies={lanes:0,firstContext:a}}else ea=ea.next=a;return l}var Qi=null,Nr=!1;function Ch(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(a,l){a=a.updateQueue,l.updateQueue===a&&(l.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function pr(a,l){return{eventTime:a,lane:l,tag:0,payload:null,callback:null,next:null}}function Or(a,l){var d=a.updateQueue;d!==null&&(d=d.shared,_n!==null&&a.mode&1&&!(Rt&2)?(a=d.interleaved,a===null?(l.next=l,Qi===null?Qi=[d]:Qi.push(d)):(l.next=a.next,a.next=l),d.interleaved=l):(a=d.pending,a===null?l.next=l:(l.next=a.next,a.next=l),d.pending=l))}function Gl(a,l,d){if(l=l.updateQueue,l!==null&&(l=l.shared,(d&4194240)!==0)){var v=l.lanes;v&=a.pendingLanes,d|=v,l.lanes=d,yh(a,d)}}function Em(a,l){var d=a.updateQueue,v=a.alternate;if(v!==null&&(v=v.updateQueue,d===v)){var M=null,T=null;if(d=d.firstBaseUpdate,d!==null){do{var V={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};T===null?M=T=V:T=T.next=V,d=d.next}while(d!==null);T===null?M=T=l:T=T.next=l}else M=T=l;d={baseState:v.baseState,firstBaseUpdate:M,lastBaseUpdate:T,shared:v.shared,effects:v.effects},a.updateQueue=d;return}a=d.lastBaseUpdate,a===null?d.firstBaseUpdate=l:a.next=l,d.lastBaseUpdate=l}function Wl(a,l,d,v){var M=a.updateQueue;Nr=!1;var T=M.firstBaseUpdate,V=M.lastBaseUpdate,j=M.shared.pending;if(j!==null){M.shared.pending=null;var he=j,Pe=he.next;he.next=null,V===null?T=Pe:V.next=Pe,V=he;var Ke=a.alternate;Ke!==null&&(Ke=Ke.updateQueue,j=Ke.lastBaseUpdate,j!==V&&(j===null?Ke.firstBaseUpdate=Pe:j.next=Pe,Ke.lastBaseUpdate=he))}if(T!==null){var yt=M.baseState;V=0,Ke=Pe=he=null,j=T;do{var ut=j.lane,Kt=j.eventTime;if((v&ut)===ut){Ke!==null&&(Ke=Ke.next={eventTime:Kt,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var it=a,Gn=j;switch(ut=l,Kt=d,Gn.tag){case 1:if(it=Gn.payload,typeof it=="function"){yt=it.call(Kt,yt,ut);break e}yt=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=Gn.payload,ut=typeof it=="function"?it.call(Kt,yt,ut):it,ut==null)break e;yt=s({},yt,ut);break e;case 2:Nr=!0}}j.callback!==null&&j.lane!==0&&(a.flags|=64,ut=M.effects,ut===null?M.effects=[j]:ut.push(j))}else Kt={eventTime:Kt,lane:ut,tag:j.tag,payload:j.payload,callback:j.callback,next:null},Ke===null?(Pe=Ke=Kt,he=yt):Ke=Ke.next=Kt,V|=ut;if(j=j.next,j===null){if(j=M.shared.pending,j===null)break;ut=j,j=ut.next,ut.next=null,M.lastBaseUpdate=ut,M.shared.pending=null}}while(!0);if(Ke===null&&(he=yt),M.baseState=he,M.firstBaseUpdate=Pe,M.lastBaseUpdate=Ke,l=M.shared.interleaved,l!==null){M=l;do V|=M.lane,M=M.next;while(M!==l)}else T===null&&(M.shared.lanes=0);ua|=V,a.lanes=V,a.memoizedState=yt}}function Am(a,l,d){if(a=l.effects,l.effects=null,a!==null)for(l=0;l<a.length;l++){var v=a[l],M=v.callback;if(M!==null){if(v.callback=null,v=d,typeof M!="function")throw Error(o(191,M));M.call(v)}}}var Tm=new n.Component().refs;function Rh(a,l,d,v){l=a.memoizedState,d=d(v,l),d=d==null?l:s({},l,d),a.memoizedState=d,a.lanes===0&&(a.updateQueue.baseState=d)}var Xl={isMounted:function(a){return(a=a._reactInternals)?R(a)===a:!1},enqueueSetState:function(a,l,d){a=a._reactInternals;var v=Kn(),M=zr(a),T=pr(v,M);T.payload=l,d!=null&&(T.callback=d),Or(a,T),l=Ii(a,M,v),l!==null&&Gl(l,a,M)},enqueueReplaceState:function(a,l,d){a=a._reactInternals;var v=Kn(),M=zr(a),T=pr(v,M);T.tag=1,T.payload=l,d!=null&&(T.callback=d),Or(a,T),l=Ii(a,M,v),l!==null&&Gl(l,a,M)},enqueueForceUpdate:function(a,l){a=a._reactInternals;var d=Kn(),v=zr(a),M=pr(d,v);M.tag=2,l!=null&&(M.callback=l),Or(a,M),l=Ii(a,v,d),l!==null&&Gl(l,a,v)}};function bm(a,l,d,v,M,T,V){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(v,T,V):l.prototype&&l.prototype.isPureReactComponent?!kl(d,v)||!kl(M,T):!0}function Cm(a,l,d){var v=!1,M=vt,T=l.contextType;return typeof T=="object"&&T!==null?T=Ti(T):(M=Yt(l)?Wt:Gt.current,v=l.contextTypes,T=(v=v!=null)?Dt(a,M):vt),l=new l(d,T),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Xl,a.stateNode=l,l._reactInternals=a,v&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=M,a.__reactInternalMemoizedMaskedChildContext=T),l}function Rm(a,l,d,v){a=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(d,v),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(d,v),l.state!==a&&Xl.enqueueReplaceState(l,l.state,null)}function Ph(a,l,d,v){var M=a.stateNode;M.props=d,M.state=a.memoizedState,M.refs=Tm,Ch(a);var T=l.contextType;typeof T=="object"&&T!==null?M.context=Ti(T):(T=Yt(l)?Wt:Gt.current,M.context=Dt(a,T)),M.state=a.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(Rh(a,l,T,d),M.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof M.getSnapshotBeforeUpdate=="function"||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(l=M.state,typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount(),l!==M.state&&Xl.enqueueReplaceState(M,M.state,null),Wl(a,d,M,v),M.state=a.memoizedState),typeof M.componentDidMount=="function"&&(a.flags|=4194308)}var na=[],ia=0,Yl=null,ql=0,bi=[],Ci=0,cs=null,mr=1,gr="";function us(a,l){na[ia++]=ql,na[ia++]=Yl,Yl=a,ql=l}function Pm(a,l,d){bi[Ci++]=mr,bi[Ci++]=gr,bi[Ci++]=cs,cs=a;var v=mr;a=gr;var M=32-nn(v)-1;v&=~(1<<M),d+=1;var T=32-nn(l)+M;if(30<T){var V=M-M%5;T=(v&(1<<V)-1).toString(32),v>>=V,M-=V,mr=1<<32-nn(l)+M|d<<M|v,gr=T+a}else mr=1<<T|d<<M|v,gr=a}function Ih(a){a.return!==null&&(us(a,1),Pm(a,1,0))}function Lh(a){for(;a===Yl;)Yl=na[--ia],na[ia]=null,ql=na[--ia],na[ia]=null;for(;a===cs;)cs=bi[--Ci],bi[Ci]=null,gr=bi[--Ci],bi[Ci]=null,mr=bi[--Ci],bi[Ci]=null}var hi=null,fi=null,rn=!1,uo=!1,Bi=null;function Im(a,l){var d=Li(5,null,null,0);d.elementType="DELETED",d.stateNode=l,d.return=a,l=a.deletions,l===null?(a.deletions=[d],a.flags|=16):l.push(d)}function Lm(a,l){switch(a.tag){case 5:return l=Js(l,a.type,a.pendingProps),l!==null?(a.stateNode=l,hi=a,fi=Tt(l),!0):!1;case 6:return l=Ks(l,a.pendingProps),l!==null?(a.stateNode=l,hi=a,fi=null,!0):!1;case 13:if(l=Qs(l),l!==null){var d=cs!==null?{id:mr,overflow:gr}:null;return a.memoizedState={dehydrated:l,treeContext:d,retryLane:1073741824},d=Li(18,null,null,0),d.stateNode=l,d.return=a,a.child=d,hi=a,fi=null,!0}return!1;default:return!1}}function Uh(a){return(a.mode&1)!==0&&(a.flags&128)===0}function Dh(a){if(rn){var l=fi;if(l){var d=l;if(!Lm(a,l)){if(Uh(a))throw Error(o(418));l=si(d);var v=hi;l&&Lm(a,l)?Im(v,d):(a.flags=a.flags&-4097|2,rn=!1,hi=a)}}else{if(Uh(a))throw Error(o(418));a.flags=a.flags&-4097|2,rn=!1,hi=a}}}function Um(a){for(a=a.return;a!==null&&a.tag!==5&&a.tag!==3&&a.tag!==13;)a=a.return;hi=a}function ho(a){if(!Se||a!==hi)return!1;if(!rn)return Um(a),rn=!0,!1;if(a.tag!==3&&(a.tag!==5||le(a.type)&&!Ee(a.type,a.memoizedProps))){var l=fi;if(l){if(Uh(a)){for(a=fi;a;)a=si(a);throw Error(o(418))}for(;l;)Im(a,l),l=si(l)}}if(Um(a),a.tag===13){if(!Se)throw Error(o(316));if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));fi=B(a)}else fi=hi?si(a.stateNode):null;return!0}function ra(){Se&&(fi=hi=null,uo=rn=!1)}function Nh(a){Bi===null?Bi=[a]:Bi.push(a)}function fo(a,l,d){if(a=d.ref,a!==null&&typeof a!="function"&&typeof a!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(o(309));var v=d.stateNode}if(!v)throw Error(o(147,a));var M=v,T=""+a;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===T?l.ref:(l=function(V){var j=M.refs;j===Tm&&(j=M.refs={}),V===null?delete j[T]:j[T]=V},l._stringRef=T,l)}if(typeof a!="string")throw Error(o(284));if(!d._owner)throw Error(o(290,a))}return a}function Zl(a,l){throw a=Object.prototype.toString.call(l),Error(o(31,a==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":a))}function Dm(a){var l=a._init;return l(a._payload)}function Nm(a){function l(ae,Q){if(a){var ce=ae.deletions;ce===null?(ae.deletions=[Q],ae.flags|=16):ce.push(Q)}}function d(ae,Q){if(!a)return null;for(;Q!==null;)l(ae,Q),Q=Q.sibling;return null}function v(ae,Q){for(ae=new Map;Q!==null;)Q.key!==null?ae.set(Q.key,Q):ae.set(Q.index,Q),Q=Q.sibling;return ae}function M(ae,Q){return ae=Hr(ae,Q),ae.index=0,ae.sibling=null,ae}function T(ae,Q,ce){return ae.index=ce,a?(ce=ae.alternate,ce!==null?(ce=ce.index,ce<Q?(ae.flags|=2,Q):ce):(ae.flags|=2,Q)):(ae.flags|=1048576,Q)}function V(ae){return a&&ae.alternate===null&&(ae.flags|=2),ae}function j(ae,Q,ce,Ge){return Q===null||Q.tag!==6?(Q=yf(ce,ae.mode,Ge),Q.return=ae,Q):(Q=M(Q,ce),Q.return=ae,Q)}function he(ae,Q,ce,Ge){var nt=ce.type;return nt===f?Ke(ae,Q,ce.props.children,Ge,ce.key):Q!==null&&(Q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===E&&Dm(nt)===Q.type)?(Ge=M(Q,ce.props),Ge.ref=fo(ae,Q,ce),Ge.return=ae,Ge):(Ge=Ac(ce.type,ce.key,ce.props,null,ae.mode,Ge),Ge.ref=fo(ae,Q,ce),Ge.return=ae,Ge)}function Pe(ae,Q,ce,Ge){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ce.containerInfo||Q.stateNode.implementation!==ce.implementation?(Q=xf(ce,ae.mode,Ge),Q.return=ae,Q):(Q=M(Q,ce.children||[]),Q.return=ae,Q)}function Ke(ae,Q,ce,Ge,nt){return Q===null||Q.tag!==7?(Q=vs(ce,ae.mode,Ge,nt),Q.return=ae,Q):(Q=M(Q,ce),Q.return=ae,Q)}function yt(ae,Q,ce){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=yf(""+Q,ae.mode,ce),Q.return=ae,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case u:return ce=Ac(Q.type,Q.key,Q.props,null,ae.mode,ce),ce.ref=fo(ae,null,Q),ce.return=ae,ce;case h:return Q=xf(Q,ae.mode,ce),Q.return=ae,Q;case E:var Ge=Q._init;return yt(ae,Ge(Q._payload),ce)}if(ie(Q)||I(Q))return Q=vs(Q,ae.mode,ce,null),Q.return=ae,Q;Zl(ae,Q)}return null}function ut(ae,Q,ce,Ge){var nt=Q!==null?Q.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return nt!==null?null:j(ae,Q,""+ce,Ge);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case u:return ce.key===nt?he(ae,Q,ce,Ge):null;case h:return ce.key===nt?Pe(ae,Q,ce,Ge):null;case E:return nt=ce._init,ut(ae,Q,nt(ce._payload),Ge)}if(ie(ce)||I(ce))return nt!==null?null:Ke(ae,Q,ce,Ge,null);Zl(ae,ce)}return null}function Kt(ae,Q,ce,Ge,nt){if(typeof Ge=="string"&&Ge!==""||typeof Ge=="number")return ae=ae.get(ce)||null,j(Q,ae,""+Ge,nt);if(typeof Ge=="object"&&Ge!==null){switch(Ge.$$typeof){case u:return ae=ae.get(Ge.key===null?ce:Ge.key)||null,he(Q,ae,Ge,nt);case h:return ae=ae.get(Ge.key===null?ce:Ge.key)||null,Pe(Q,ae,Ge,nt);case E:var bt=Ge._init;return Kt(ae,Q,ce,bt(Ge._payload),nt)}if(ie(Ge)||I(Ge))return ae=ae.get(ce)||null,Ke(Q,ae,Ge,nt,null);Zl(Q,Ge)}return null}function it(ae,Q,ce,Ge){for(var nt=null,bt=null,xt=Q,Ft=Q=0,Cn=null;xt!==null&&Ft<ce.length;Ft++){xt.index>Ft?(Cn=xt,xt=null):Cn=xt.sibling;var Bt=ut(ae,xt,ce[Ft],Ge);if(Bt===null){xt===null&&(xt=Cn);break}a&&xt&&Bt.alternate===null&&l(ae,xt),Q=T(Bt,Q,Ft),bt===null?nt=Bt:bt.sibling=Bt,bt=Bt,xt=Cn}if(Ft===ce.length)return d(ae,xt),rn&&us(ae,Ft),nt;if(xt===null){for(;Ft<ce.length;Ft++)xt=yt(ae,ce[Ft],Ge),xt!==null&&(Q=T(xt,Q,Ft),bt===null?nt=xt:bt.sibling=xt,bt=xt);return rn&&us(ae,Ft),nt}for(xt=v(ae,xt);Ft<ce.length;Ft++)Cn=Kt(xt,ae,Ft,ce[Ft],Ge),Cn!==null&&(a&&Cn.alternate!==null&&xt.delete(Cn.key===null?Ft:Cn.key),Q=T(Cn,Q,Ft),bt===null?nt=Cn:bt.sibling=Cn,bt=Cn);return a&&xt.forEach(function(Vr){return l(ae,Vr)}),rn&&us(ae,Ft),nt}function Gn(ae,Q,ce,Ge){var nt=I(ce);if(typeof nt!="function")throw Error(o(150));if(ce=nt.call(ce),ce==null)throw Error(o(151));for(var bt=nt=null,xt=Q,Ft=Q=0,Cn=null,Bt=ce.next();xt!==null&&!Bt.done;Ft++,Bt=ce.next()){xt.index>Ft?(Cn=xt,xt=null):Cn=xt.sibling;var Vr=ut(ae,xt,Bt.value,Ge);if(Vr===null){xt===null&&(xt=Cn);break}a&&xt&&Vr.alternate===null&&l(ae,xt),Q=T(Vr,Q,Ft),bt===null?nt=Vr:bt.sibling=Vr,bt=Vr,xt=Cn}if(Bt.done)return d(ae,xt),rn&&us(ae,Ft),nt;if(xt===null){for(;!Bt.done;Ft++,Bt=ce.next())Bt=yt(ae,Bt.value,Ge),Bt!==null&&(Q=T(Bt,Q,Ft),bt===null?nt=Bt:bt.sibling=Bt,bt=Bt);return rn&&us(ae,Ft),nt}for(xt=v(ae,xt);!Bt.done;Ft++,Bt=ce.next())Bt=Kt(xt,ae,Ft,Bt.value,Ge),Bt!==null&&(a&&Bt.alternate!==null&&xt.delete(Bt.key===null?Ft:Bt.key),Q=T(Bt,Q,Ft),bt===null?nt=Bt:bt.sibling=Bt,bt=Bt);return a&&xt.forEach(function(DS){return l(ae,DS)}),rn&&us(ae,Ft),nt}function Ui(ae,Q,ce,Ge){if(typeof ce=="object"&&ce!==null&&ce.type===f&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case u:e:{for(var nt=ce.key,bt=Q;bt!==null;){if(bt.key===nt){if(nt=ce.type,nt===f){if(bt.tag===7){d(ae,bt.sibling),Q=M(bt,ce.props.children),Q.return=ae,ae=Q;break e}}else if(bt.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===E&&Dm(nt)===bt.type){d(ae,bt.sibling),Q=M(bt,ce.props),Q.ref=fo(ae,bt,ce),Q.return=ae,ae=Q;break e}d(ae,bt);break}else l(ae,bt);bt=bt.sibling}ce.type===f?(Q=vs(ce.props.children,ae.mode,Ge,ce.key),Q.return=ae,ae=Q):(Ge=Ac(ce.type,ce.key,ce.props,null,ae.mode,Ge),Ge.ref=fo(ae,Q,ce),Ge.return=ae,ae=Ge)}return V(ae);case h:e:{for(bt=ce.key;Q!==null;){if(Q.key===bt)if(Q.tag===4&&Q.stateNode.containerInfo===ce.containerInfo&&Q.stateNode.implementation===ce.implementation){d(ae,Q.sibling),Q=M(Q,ce.children||[]),Q.return=ae,ae=Q;break e}else{d(ae,Q);break}else l(ae,Q);Q=Q.sibling}Q=xf(ce,ae.mode,Ge),Q.return=ae,ae=Q}return V(ae);case E:return bt=ce._init,Ui(ae,Q,bt(ce._payload),Ge)}if(ie(ce))return it(ae,Q,ce,Ge);if(I(ce))return Gn(ae,Q,ce,Ge);Zl(ae,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Q!==null&&Q.tag===6?(d(ae,Q.sibling),Q=M(Q,ce),Q.return=ae,ae=Q):(d(ae,Q),Q=yf(ce,ae.mode,Ge),Q.return=ae,ae=Q),V(ae)):d(ae,Q)}return Ui}var sa=Nm(!0),Om=Nm(!1),po={},Ri=Oe(po),mo=Oe(po),aa=Oe(po);function $i(a){if(a===po)throw Error(o(174));return a}function Oh(a,l){je(aa,l),je(mo,a),je(Ri,po),a=Ae(l),ht(Ri),je(Ri,a)}function oa(){ht(Ri),ht(mo),ht(aa)}function Fm(a){var l=$i(aa.current),d=$i(Ri.current);l=X(d,a.type,l),d!==l&&(je(mo,a),je(Ri,l))}function Fh(a){mo.current===a&&(ht(Ri),ht(mo))}var an=Oe(0);function jl(a){for(var l=a;l!==null;){if(l.tag===13){var d=l.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||Ei(d)||Dr(d)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Bh=[];function zh(){for(var a=0;a<Bh.length;a++){var l=Bh[a];$?l._workInProgressVersionPrimary=null:l._workInProgressVersionSecondary=null}Bh.length=0}var Jl=c.ReactCurrentDispatcher,Pi=c.ReactCurrentBatchConfig,la=0,cn=null,kn=null,bn=null,Kl=!1,go=!1,vo=0,sS=0;function Hn(){throw Error(o(321))}function kh(a,l){if(l===null)return!1;for(var d=0;d<l.length&&d<a.length;d++)if(!Ji(a[d],l[d]))return!1;return!0}function Hh(a,l,d,v,M,T){if(la=T,cn=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,Jl.current=a===null||a.memoizedState===null?cS:uS,a=d(v,M),go){T=0;do{if(go=!1,vo=0,25<=T)throw Error(o(301));T+=1,bn=kn=null,l.updateQueue=null,Jl.current=hS,a=d(v,M)}while(go)}if(Jl.current=nc,l=kn!==null&&kn.next!==null,la=0,bn=kn=cn=null,Kl=!1,l)throw Error(o(300));return a}function Vh(){var a=vo!==0;return vo=0,a}function vr(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?cn.memoizedState=bn=a:bn=bn.next=a,bn}function er(){if(kn===null){var a=cn.alternate;a=a!==null?a.memoizedState:null}else a=kn.next;var l=bn===null?cn.memoizedState:bn.next;if(l!==null)bn=l,kn=a;else{if(a===null)throw Error(o(310));kn=a,a={memoizedState:kn.memoizedState,baseState:kn.baseState,baseQueue:kn.baseQueue,queue:kn.queue,next:null},bn===null?cn.memoizedState=bn=a:bn=bn.next=a}return bn}function hs(a,l){return typeof l=="function"?l(a):l}function Ql(a){var l=er(),d=l.queue;if(d===null)throw Error(o(311));d.lastRenderedReducer=a;var v=kn,M=v.baseQueue,T=d.pending;if(T!==null){if(M!==null){var V=M.next;M.next=T.next,T.next=V}v.baseQueue=M=T,d.pending=null}if(M!==null){T=M.next,v=v.baseState;var j=V=null,he=null,Pe=T;do{var Ke=Pe.lane;if((la&Ke)===Ke)he!==null&&(he=he.next={lane:0,action:Pe.action,hasEagerState:Pe.hasEagerState,eagerState:Pe.eagerState,next:null}),v=Pe.hasEagerState?Pe.eagerState:a(v,Pe.action);else{var yt={lane:Ke,action:Pe.action,hasEagerState:Pe.hasEagerState,eagerState:Pe.eagerState,next:null};he===null?(j=he=yt,V=v):he=he.next=yt,cn.lanes|=Ke,ua|=Ke}Pe=Pe.next}while(Pe!==null&&Pe!==T);he===null?V=v:he.next=j,Ji(v,l.memoizedState)||(di=!0),l.memoizedState=v,l.baseState=V,l.baseQueue=he,d.lastRenderedState=v}if(a=d.interleaved,a!==null){M=a;do T=M.lane,cn.lanes|=T,ua|=T,M=M.next;while(M!==a)}else M===null&&(d.lanes=0);return[l.memoizedState,d.dispatch]}function $l(a){var l=er(),d=l.queue;if(d===null)throw Error(o(311));d.lastRenderedReducer=a;var v=d.dispatch,M=d.pending,T=l.memoizedState;if(M!==null){d.pending=null;var V=M=M.next;do T=a(T,V.action),V=V.next;while(V!==M);Ji(T,l.memoizedState)||(di=!0),l.memoizedState=T,l.baseQueue===null&&(l.baseState=T),d.lastRenderedState=T}return[T,v]}function Bm(){}function zm(a,l){var d=cn,v=er(),M=l(),T=!Ji(v.memoizedState,M);if(T&&(v.memoizedState=M,di=!0),v=v.queue,yo(Vm.bind(null,d,v,a),[a]),v.getSnapshot!==l||T||bn!==null&&bn.memoizedState.tag&1){if(d.flags|=2048,_o(9,Hm.bind(null,d,v,M,l),void 0,null),_n===null)throw Error(o(349));la&30||km(d,l,M)}return M}function km(a,l,d){a.flags|=16384,a={getSnapshot:l,value:d},l=cn.updateQueue,l===null?(l={lastEffect:null,stores:null},cn.updateQueue=l,l.stores=[a]):(d=l.stores,d===null?l.stores=[a]:d.push(a))}function Hm(a,l,d,v){l.value=d,l.getSnapshot=v,Gm(l)&&Ii(a,1,-1)}function Vm(a,l,d){return d(function(){Gm(l)&&Ii(a,1,-1)})}function Gm(a){var l=a.getSnapshot;a=a.value;try{var d=l();return!Ji(a,d)}catch{return!0}}function Gh(a){var l=vr();return typeof a=="function"&&(a=a()),l.memoizedState=l.baseState=a,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:a},l.queue=a,a=a.dispatch=lS.bind(null,cn,a),[l.memoizedState,a]}function _o(a,l,d,v){return a={tag:a,create:l,destroy:d,deps:v,next:null},l=cn.updateQueue,l===null?(l={lastEffect:null,stores:null},cn.updateQueue=l,l.lastEffect=a.next=a):(d=l.lastEffect,d===null?l.lastEffect=a.next=a:(v=d.next,d.next=a,a.next=v,l.lastEffect=a)),a}function Wm(){return er().memoizedState}function ec(a,l,d,v){var M=vr();cn.flags|=a,M.memoizedState=_o(1|l,d,void 0,v===void 0?null:v)}function tc(a,l,d,v){var M=er();v=v===void 0?null:v;var T=void 0;if(kn!==null){var V=kn.memoizedState;if(T=V.destroy,v!==null&&kh(v,V.deps)){M.memoizedState=_o(l,d,T,v);return}}cn.flags|=a,M.memoizedState=_o(1|l,d,T,v)}function Wh(a,l){return ec(8390656,8,a,l)}function yo(a,l){return tc(2048,8,a,l)}function Xm(a,l){return tc(4,2,a,l)}function Ym(a,l){return tc(4,4,a,l)}function qm(a,l){if(typeof l=="function")return a=a(),l(a),function(){l(null)};if(l!=null)return a=a(),l.current=a,function(){l.current=null}}function Zm(a,l,d){return d=d!=null?d.concat([a]):null,tc(4,4,qm.bind(null,l,a),d)}function Xh(){}function jm(a,l){var d=er();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&kh(l,v[1])?v[0]:(d.memoizedState=[a,l],a)}function Jm(a,l){var d=er();l=l===void 0?null:l;var v=d.memoizedState;return v!==null&&l!==null&&kh(l,v[1])?v[0]:(a=a(),d.memoizedState=[a,l],a)}function aS(a,l){var d=Ot;Ot=d!==0&&4>d?d:4,a(!0);var v=Pi.transition;Pi.transition={};try{a(!1),l()}finally{Ot=d,Pi.transition=v}}function Km(){return er().memoizedState}function oS(a,l,d){var v=zr(a);d={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null},Qm(a)?$m(l,d):(eg(a,l,d),d=Kn(),a=Ii(a,v,d),a!==null&&tg(a,l,v))}function lS(a,l,d){var v=zr(a),M={lane:v,action:d,hasEagerState:!1,eagerState:null,next:null};if(Qm(a))$m(l,M);else{eg(a,l,M);var T=a.alternate;if(a.lanes===0&&(T===null||T.lanes===0)&&(T=l.lastRenderedReducer,T!==null))try{var V=l.lastRenderedState,j=T(V,d);if(M.hasEagerState=!0,M.eagerState=j,Ji(j,V))return}catch{}finally{}d=Kn(),a=Ii(a,v,d),a!==null&&tg(a,l,v)}}function Qm(a){var l=a.alternate;return a===cn||l!==null&&l===cn}function $m(a,l){go=Kl=!0;var d=a.pending;d===null?l.next=l:(l.next=d.next,d.next=l),a.pending=l}function eg(a,l,d){_n!==null&&a.mode&1&&!(Rt&2)?(a=l.interleaved,a===null?(d.next=d,Qi===null?Qi=[l]:Qi.push(l)):(d.next=a.next,a.next=d),l.interleaved=d):(a=l.pending,a===null?d.next=d:(d.next=a.next,a.next=d),l.pending=d)}function tg(a,l,d){if(d&4194240){var v=l.lanes;v&=a.pendingLanes,d|=v,l.lanes=d,yh(a,d)}}var nc={readContext:Ti,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},cS={readContext:Ti,useCallback:function(a,l){return vr().memoizedState=[a,l===void 0?null:l],a},useContext:Ti,useEffect:Wh,useImperativeHandle:function(a,l,d){return d=d!=null?d.concat([a]):null,ec(4194308,4,qm.bind(null,l,a),d)},useLayoutEffect:function(a,l){return ec(4194308,4,a,l)},useInsertionEffect:function(a,l){return ec(4,2,a,l)},useMemo:function(a,l){var d=vr();return l=l===void 0?null:l,a=a(),d.memoizedState=[a,l],a},useReducer:function(a,l,d){var v=vr();return l=d!==void 0?d(l):l,v.memoizedState=v.baseState=l,a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:l},v.queue=a,a=a.dispatch=oS.bind(null,cn,a),[v.memoizedState,a]},useRef:function(a){var l=vr();return a={current:a},l.memoizedState=a},useState:Gh,useDebugValue:Xh,useDeferredValue:function(a){var l=Gh(a),d=l[0],v=l[1];return Wh(function(){var M=Pi.transition;Pi.transition={};try{v(a)}finally{Pi.transition=M}},[a]),d},useTransition:function(){var a=Gh(!1),l=a[0];return a=aS.bind(null,a[1]),vr().memoizedState=a,[l,a]},useMutableSource:function(){},useSyncExternalStore:function(a,l,d){var v=cn,M=vr();if(rn){if(d===void 0)throw Error(o(407));d=d()}else{if(d=l(),_n===null)throw Error(o(349));la&30||km(v,l,d)}M.memoizedState=d;var T={value:d,getSnapshot:l};return M.queue=T,Wh(Vm.bind(null,v,T,a),[a]),v.flags|=2048,_o(9,Hm.bind(null,v,T,d,l),void 0,null),d},useId:function(){var a=vr(),l=_n.identifierPrefix;if(rn){var d=gr,v=mr;d=(v&~(1<<32-nn(v)-1)).toString(32)+d,l=":"+l+"R"+d,d=vo++,0<d&&(l+="H"+d.toString(32)),l+=":"}else d=sS++,l=":"+l+"r"+d.toString(32)+":";return a.memoizedState=l},unstable_isNewReconciler:!1},uS={readContext:Ti,useCallback:jm,useContext:Ti,useEffect:yo,useImperativeHandle:Zm,useInsertionEffect:Xm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Ql,useRef:Wm,useState:function(){return Ql(hs)},useDebugValue:Xh,useDeferredValue:function(a){var l=Ql(hs),d=l[0],v=l[1];return yo(function(){var M=Pi.transition;Pi.transition={};try{v(a)}finally{Pi.transition=M}},[a]),d},useTransition:function(){var a=Ql(hs)[0],l=er().memoizedState;return[a,l]},useMutableSource:Bm,useSyncExternalStore:zm,useId:Km,unstable_isNewReconciler:!1},hS={readContext:Ti,useCallback:jm,useContext:Ti,useEffect:yo,useImperativeHandle:Zm,useInsertionEffect:Xm,useLayoutEffect:Ym,useMemo:Jm,useReducer:$l,useRef:Wm,useState:function(){return $l(hs)},useDebugValue:Xh,useDeferredValue:function(a){var l=$l(hs),d=l[0],v=l[1];return yo(function(){var M=Pi.transition;Pi.transition={};try{v(a)}finally{Pi.transition=M}},[a]),d},useTransition:function(){var a=$l(hs)[0],l=er().memoizedState;return[a,l]},useMutableSource:Bm,useSyncExternalStore:zm,useId:Km,unstable_isNewReconciler:!1};function Yh(a,l){try{var d="",v=l;do d+=rS(v),v=v.return;while(v);var M=d}catch(T){M=`
Error generating stack: `+T.message+`
`+T.stack}return{value:a,source:l,stack:M}}function qh(a,l){try{console.error(l.value)}catch(d){setTimeout(function(){throw d})}}var fS=typeof WeakMap=="function"?WeakMap:Map;function ng(a,l,d){d=pr(-1,d),d.tag=3,d.payload={element:null};var v=l.value;return d.callback=function(){_c||(_c=!0,ff=v),qh(a,l)},d}function ig(a,l,d){d=pr(-1,d),d.tag=3;var v=a.type.getDerivedStateFromError;if(typeof v=="function"){var M=l.value;d.payload=function(){return v(M)},d.callback=function(){qh(a,l)}}var T=a.stateNode;return T!==null&&typeof T.componentDidCatch=="function"&&(d.callback=function(){qh(a,l),typeof v!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var V=l.stack;this.componentDidCatch(l.value,{componentStack:V!==null?V:""})}),d}function rg(a,l,d){var v=a.pingCache;if(v===null){v=a.pingCache=new fS;var M=new Set;v.set(l,M)}else M=v.get(l),M===void 0&&(M=new Set,v.set(l,M));M.has(d)||(M.add(d),a=TS.bind(null,a,l,d),l.then(a,a))}function sg(a){do{var l;if((l=a.tag===13)&&(l=a.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return a;a=a.return}while(a!==null);return null}function ag(a,l,d,v,M){return a.mode&1?(a.flags|=65536,a.lanes=M,a):(a===l?a.flags|=65536:(a.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(l=pr(-1,1),l.tag=2,Or(d,l))),d.lanes|=1),a)}function tr(a){a.flags|=4}function og(a,l){if(a!==null&&a.child===l.child)return!0;if(l.flags&16)return!1;for(a=l.child;a!==null;){if(a.flags&12854||a.subtreeFlags&12854)return!1;a=a.sibling}return!0}var xo,So,ic,rc;if(dt)xo=function(a,l){for(var d=l.child;d!==null;){if(d.tag===5||d.tag===6)Re(a,d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===l)break;for(;d.sibling===null;){if(d.return===null||d.return===l)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},So=function(){},ic=function(a,l,d,v,M){if(a=a.memoizedProps,a!==v){var T=l.stateNode,V=$i(Ri.current);d=oe(T,d,a,v,M,V),(l.updateQueue=d)&&tr(l)}},rc=function(a,l,d,v){d!==v&&tr(l)};else if(pe){xo=function(a,l,d,v){for(var M=l.child;M!==null;){if(M.tag===5){var T=M.stateNode;d&&v&&(T=Zn(T,M.type,M.memoizedProps,M)),Re(a,T)}else if(M.tag===6)T=M.stateNode,d&&v&&(T=vn(T,M.memoizedProps,M)),Re(a,T);else if(M.tag!==4){if(M.tag===22&&M.memoizedState!==null)T=M.child,T!==null&&(T.return=M),xo(a,M,!0,!0);else if(M.child!==null){M.child.return=M,M=M.child;continue}}if(M===l)break;for(;M.sibling===null;){if(M.return===null||M.return===l)return;M=M.return}M.sibling.return=M.return,M=M.sibling}};var lg=function(a,l,d,v){for(var M=l.child;M!==null;){if(M.tag===5){var T=M.stateNode;d&&v&&(T=Zn(T,M.type,M.memoizedProps,M)),Jt(a,T)}else if(M.tag===6)T=M.stateNode,d&&v&&(T=vn(T,M.memoizedProps,M)),Jt(a,T);else if(M.tag!==4){if(M.tag===22&&M.memoizedState!==null)T=M.child,T!==null&&(T.return=M),lg(a,M,!0,!0);else if(M.child!==null){M.child.return=M,M=M.child;continue}}if(M===l)break;for(;M.sibling===null;){if(M.return===null||M.return===l)return;M=M.return}M.sibling.return=M.return,M=M.sibling}};So=function(a,l){var d=l.stateNode;if(!og(a,l)){a=d.containerInfo;var v=Vt(a);lg(v,l,!1,!1),d.pendingChildren=v,tr(l),gn(a,v)}},ic=function(a,l,d,v,M){var T=a.stateNode,V=a.memoizedProps;if((a=og(a,l))&&V===v)l.stateNode=T;else{var j=l.stateNode,he=$i(Ri.current),Pe=null;V!==v&&(Pe=oe(j,d,V,v,M,he)),a&&Pe===null?l.stateNode=T:(T=Pt(T,Pe,d,V,v,l,a,j),Be(T,d,v,M,he)&&tr(l),l.stateNode=T,a?tr(l):xo(T,l,!1,!1))}},rc=function(a,l,d,v){d!==v?(a=$i(aa.current),d=$i(Ri.current),l.stateNode=Te(v,a,d,l),tr(l)):l.stateNode=a.stateNode}}else So=function(){},ic=function(){},rc=function(){};function Mo(a,l){if(!rn)switch(a.tailMode){case"hidden":l=a.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?a.tail=null:d.sibling=null;break;case"collapsed":d=a.tail;for(var v=null;d!==null;)d.alternate!==null&&(v=d),d=d.sibling;v===null?l||a.tail===null?a.tail=null:a.tail.sibling=null:v.sibling=null}}function Vn(a){var l=a.alternate!==null&&a.alternate.child===a.child,d=0,v=0;if(l)for(var M=a.child;M!==null;)d|=M.lanes|M.childLanes,v|=M.subtreeFlags&14680064,v|=M.flags&14680064,M.return=a,M=M.sibling;else for(M=a.child;M!==null;)d|=M.lanes|M.childLanes,v|=M.subtreeFlags,v|=M.flags,M.return=a,M=M.sibling;return a.subtreeFlags|=v,a.childLanes=d,l}function dS(a,l,d){var v=l.pendingProps;switch(Lh(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(l),null;case 1:return Yt(l.type)&&fn(),Vn(l),null;case 3:return v=l.stateNode,oa(),ht(mt),ht(Gt),zh(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(a===null||a.child===null)&&(ho(l)?tr(l):a===null||a.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,Bi!==null&&(mf(Bi),Bi=null))),So(a,l),Vn(l),null;case 5:Fh(l),d=$i(aa.current);var M=l.type;if(a!==null&&l.stateNode!=null)ic(a,l,M,v,d),a.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!v){if(l.stateNode===null)throw Error(o(166));return Vn(l),null}if(a=$i(Ri.current),ho(l)){if(!Se)throw Error(o(175));a=P(l.stateNode,l.type,l.memoizedProps,d,a,l,!uo),l.updateQueue=a,a!==null&&tr(l)}else{var T=de(M,v,d,a,l);xo(T,l,!1,!1),l.stateNode=T,Be(T,M,v,d,a)&&tr(l)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Vn(l),null;case 6:if(a&&l.stateNode!=null)rc(a,l,a.memoizedProps,v);else{if(typeof v!="string"&&l.stateNode===null)throw Error(o(166));if(a=$i(aa.current),d=$i(Ri.current),ho(l)){if(!Se)throw Error(o(176));if(a=l.stateNode,v=l.memoizedProps,(d=w(a,v,l,!uo))&&(M=hi,M!==null))switch(T=(M.mode&1)!==0,M.tag){case 3:ue(M.stateNode.containerInfo,a,v,T);break;case 5:ge(M.type,M.memoizedProps,M.stateNode,a,v,T)}d&&tr(l)}else l.stateNode=Te(v,a,d,l)}return Vn(l),null;case 13:if(ht(an),v=l.memoizedState,rn&&fi!==null&&l.mode&1&&!(l.flags&128)){for(a=fi;a;)a=si(a);return ra(),l.flags|=98560,l}if(v!==null&&v.dehydrated!==null){if(v=ho(l),a===null){if(!v)throw Error(o(318));if(!Se)throw Error(o(344));if(a=l.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));L(a,l)}else ra(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;return Vn(l),null}return Bi!==null&&(mf(Bi),Bi=null),l.flags&128?(l.lanes=d,l):(v=v!==null,d=!1,a===null?ho(l):d=a.memoizedState!==null,v&&!d&&(l.child.flags|=8192,l.mode&1&&(a===null||an.current&1?Mn===0&&(Mn=3):vf())),l.updateQueue!==null&&(l.flags|=4),Vn(l),null);case 4:return oa(),So(a,l),a===null&&Le(l.stateNode.containerInfo),Vn(l),null;case 10:return Th(l.type._context),Vn(l),null;case 17:return Yt(l.type)&&fn(),Vn(l),null;case 19:if(ht(an),M=l.memoizedState,M===null)return Vn(l),null;if(v=(l.flags&128)!==0,T=M.rendering,T===null)if(v)Mo(M,!1);else{if(Mn!==0||a!==null&&a.flags&128)for(a=l.child;a!==null;){if(T=jl(a),T!==null){for(l.flags|=128,Mo(M,!1),a=T.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),l.subtreeFlags=0,a=d,v=l.child;v!==null;)d=v,M=a,d.flags&=14680066,T=d.alternate,T===null?(d.childLanes=0,d.lanes=M,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=T.childLanes,d.lanes=T.lanes,d.child=T.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=T.memoizedProps,d.memoizedState=T.memoizedState,d.updateQueue=T.updateQueue,d.type=T.type,M=T.dependencies,d.dependencies=M===null?null:{lanes:M.lanes,firstContext:M.firstContext}),v=v.sibling;return je(an,an.current&1|2),l.child}a=a.sibling}M.tail!==null&&Tn()>hf&&(l.flags|=128,v=!0,Mo(M,!1),l.lanes=4194304)}else{if(!v)if(a=jl(T),a!==null){if(l.flags|=128,v=!0,a=a.updateQueue,a!==null&&(l.updateQueue=a,l.flags|=4),Mo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!T.alternate&&!rn)return Vn(l),null}else 2*Tn()-M.renderingStartTime>hf&&d!==1073741824&&(l.flags|=128,v=!0,Mo(M,!1),l.lanes=4194304);M.isBackwards?(T.sibling=l.child,l.child=T):(a=M.last,a!==null?a.sibling=T:l.child=T,M.last=T)}return M.tail!==null?(l=M.tail,M.rendering=l,M.tail=l.sibling,M.renderingStartTime=Tn(),l.sibling=null,a=an.current,je(an,v?a&1|2:a&1),l):(Vn(l),null);case 22:case 23:return gf(),v=l.memoizedState!==null,a!==null&&a.memoizedState!==null!==v&&(l.flags|=8192),v&&l.mode&1?pi&1073741824&&(Vn(l),dt&&l.subtreeFlags&6&&(l.flags|=8192)):Vn(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}var pS=c.ReactCurrentOwner,di=!1;function Jn(a,l,d,v){l.child=a===null?Om(l,null,d,v):sa(l,a.child,d,v)}function cg(a,l,d,v,M){d=d.render;var T=l.ref;return ta(l,M),v=Hh(a,l,d,v,T,M),d=Vh(),a!==null&&!di?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~M,_r(a,l,M)):(rn&&d&&Ih(l),l.flags|=1,Jn(a,l,v,M),l.child)}function ug(a,l,d,v,M){if(a===null){var T=d.type;return typeof T=="function"&&!_f(T)&&T.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(l.tag=15,l.type=T,hg(a,l,T,v,M)):(a=Ac(d.type,null,v,l,l.mode,M),a.ref=l.ref,a.return=l,l.child=a)}if(T=a.child,!(a.lanes&M)){var V=T.memoizedProps;if(d=d.compare,d=d!==null?d:kl,d(V,v)&&a.ref===l.ref)return _r(a,l,M)}return l.flags|=1,a=Hr(T,v),a.ref=l.ref,a.return=l,l.child=a}function hg(a,l,d,v,M){if(a!==null&&kl(a.memoizedProps,v)&&a.ref===l.ref)if(di=!1,(a.lanes&M)!==0)a.flags&131072&&(di=!0);else return l.lanes=a.lanes,_r(a,l,M);return Zh(a,l,d,v,M)}function fg(a,l,d){var v=l.pendingProps,M=v.children,T=a!==null?a.memoizedState:null;if(v.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null},je(ca,pi),pi|=d;else if(d&1073741824)l.memoizedState={baseLanes:0,cachePool:null},v=T!==null?T.baseLanes:d,je(ca,pi),pi|=v;else return a=T!==null?T.baseLanes|d:d,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:a,cachePool:null},l.updateQueue=null,je(ca,pi),pi|=a,null;else T!==null?(v=T.baseLanes|d,l.memoizedState=null):v=d,je(ca,pi),pi|=v;return Jn(a,l,M,d),l.child}function dg(a,l){var d=l.ref;(a===null&&d!==null||a!==null&&a.ref!==d)&&(l.flags|=512,l.flags|=2097152)}function Zh(a,l,d,v,M){var T=Yt(d)?Wt:Gt.current;return T=Dt(l,T),ta(l,M),d=Hh(a,l,d,v,T,M),v=Vh(),a!==null&&!di?(l.updateQueue=a.updateQueue,l.flags&=-2053,a.lanes&=~M,_r(a,l,M)):(rn&&v&&Ih(l),l.flags|=1,Jn(a,l,d,M),l.child)}function pg(a,l,d,v,M){if(Yt(d)){var T=!0;kt(l)}else T=!1;if(ta(l,M),l.stateNode===null)a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),Cm(l,d,v),Ph(l,d,v,M),v=!0;else if(a===null){var V=l.stateNode,j=l.memoizedProps;V.props=j;var he=V.context,Pe=d.contextType;typeof Pe=="object"&&Pe!==null?Pe=Ti(Pe):(Pe=Yt(d)?Wt:Gt.current,Pe=Dt(l,Pe));var Ke=d.getDerivedStateFromProps,yt=typeof Ke=="function"||typeof V.getSnapshotBeforeUpdate=="function";yt||typeof V.UNSAFE_componentWillReceiveProps!="function"&&typeof V.componentWillReceiveProps!="function"||(j!==v||he!==Pe)&&Rm(l,V,v,Pe),Nr=!1;var ut=l.memoizedState;V.state=ut,Wl(l,v,V,M),he=l.memoizedState,j!==v||ut!==he||mt.current||Nr?(typeof Ke=="function"&&(Rh(l,d,Ke,v),he=l.memoizedState),(j=Nr||bm(l,d,j,v,ut,he,Pe))?(yt||typeof V.UNSAFE_componentWillMount!="function"&&typeof V.componentWillMount!="function"||(typeof V.componentWillMount=="function"&&V.componentWillMount(),typeof V.UNSAFE_componentWillMount=="function"&&V.UNSAFE_componentWillMount()),typeof V.componentDidMount=="function"&&(l.flags|=4194308)):(typeof V.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=v,l.memoizedState=he),V.props=v,V.state=he,V.context=Pe,v=j):(typeof V.componentDidMount=="function"&&(l.flags|=4194308),v=!1)}else{V=l.stateNode,wm(a,l),j=l.memoizedProps,Pe=l.type===l.elementType?j:Fi(l.type,j),V.props=Pe,yt=l.pendingProps,ut=V.context,he=d.contextType,typeof he=="object"&&he!==null?he=Ti(he):(he=Yt(d)?Wt:Gt.current,he=Dt(l,he));var Kt=d.getDerivedStateFromProps;(Ke=typeof Kt=="function"||typeof V.getSnapshotBeforeUpdate=="function")||typeof V.UNSAFE_componentWillReceiveProps!="function"&&typeof V.componentWillReceiveProps!="function"||(j!==yt||ut!==he)&&Rm(l,V,v,he),Nr=!1,ut=l.memoizedState,V.state=ut,Wl(l,v,V,M);var it=l.memoizedState;j!==yt||ut!==it||mt.current||Nr?(typeof Kt=="function"&&(Rh(l,d,Kt,v),it=l.memoizedState),(Pe=Nr||bm(l,d,Pe,v,ut,it,he)||!1)?(Ke||typeof V.UNSAFE_componentWillUpdate!="function"&&typeof V.componentWillUpdate!="function"||(typeof V.componentWillUpdate=="function"&&V.componentWillUpdate(v,it,he),typeof V.UNSAFE_componentWillUpdate=="function"&&V.UNSAFE_componentWillUpdate(v,it,he)),typeof V.componentDidUpdate=="function"&&(l.flags|=4),typeof V.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof V.componentDidUpdate!="function"||j===a.memoizedProps&&ut===a.memoizedState||(l.flags|=4),typeof V.getSnapshotBeforeUpdate!="function"||j===a.memoizedProps&&ut===a.memoizedState||(l.flags|=1024),l.memoizedProps=v,l.memoizedState=it),V.props=v,V.state=it,V.context=he,v=Pe):(typeof V.componentDidUpdate!="function"||j===a.memoizedProps&&ut===a.memoizedState||(l.flags|=4),typeof V.getSnapshotBeforeUpdate!="function"||j===a.memoizedProps&&ut===a.memoizedState||(l.flags|=1024),v=!1)}return jh(a,l,d,v,T,M)}function jh(a,l,d,v,M,T){dg(a,l);var V=(l.flags&128)!==0;if(!v&&!V)return M&&It(l,d,!1),_r(a,l,T);v=l.stateNode,pS.current=l;var j=V&&typeof d.getDerivedStateFromError!="function"?null:v.render();return l.flags|=1,a!==null&&V?(l.child=sa(l,a.child,null,T),l.child=sa(l,null,j,T)):Jn(a,l,j,T),l.memoizedState=v.state,M&&It(l,d,!0),l.child}function mg(a){var l=a.stateNode;l.pendingContext?_t(a,l.pendingContext,l.pendingContext!==l.context):l.context&&_t(a,l.context,!1),Oh(a,l.containerInfo)}function gg(a,l,d,v,M){return ra(),Nh(M),l.flags|=256,Jn(a,l,d,v),l.child}var sc={dehydrated:null,treeContext:null,retryLane:0};function ac(a){return{baseLanes:a,cachePool:null}}function vg(a,l,d){var v=l.pendingProps,M=an.current,T=!1,V=(l.flags&128)!==0,j;if((j=V)||(j=a!==null&&a.memoizedState===null?!1:(M&2)!==0),j?(T=!0,l.flags&=-129):(a===null||a.memoizedState!==null)&&(M|=1),je(an,M&1),a===null)return Dh(l),a=l.memoizedState,a!==null&&(a=a.dehydrated,a!==null)?(l.mode&1?Dr(a)?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(M=v.children,a=v.fallback,T?(v=l.mode,T=l.child,M={mode:"hidden",children:M},!(v&1)&&T!==null?(T.childLanes=0,T.pendingProps=M):T=Tc(M,v,0,null),a=vs(a,v,d,null),T.return=l,a.return=l,T.sibling=a,l.child=T,l.child.memoizedState=ac(d),l.memoizedState=sc,a):Jh(l,M));if(M=a.memoizedState,M!==null){if(j=M.dehydrated,j!==null){if(V)return l.flags&256?(l.flags&=-257,oc(a,l,d,Error(o(422)))):l.memoizedState!==null?(l.child=a.child,l.flags|=128,null):(T=v.fallback,M=l.mode,v=Tc({mode:"visible",children:v.children},M,0,null),T=vs(T,M,d,null),T.flags|=2,v.return=l,T.return=l,v.sibling=T,l.child=v,l.mode&1&&sa(l,a.child,null,d),l.child.memoizedState=ac(d),l.memoizedState=sc,T);if(!(l.mode&1))l=oc(a,l,d,null);else if(Dr(j))l=oc(a,l,d,Error(o(419)));else if(v=(d&a.childLanes)!==0,di||v){if(v=_n,v!==null){switch(d&-d){case 4:T=2;break;case 16:T=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:T=32;break;case 536870912:T=268435456;break;default:T=0}v=T&(v.suspendedLanes|d)?0:T,v!==0&&v!==M.retryLane&&(M.retryLane=v,Ii(a,v,-1))}vf(),l=oc(a,l,d,Error(o(421)))}else Ei(j)?(l.flags|=128,l.child=a.child,l=bS.bind(null,a),Ai(j,l),l=null):(d=M.treeContext,Se&&(fi=oo(j),hi=l,rn=!0,Bi=null,uo=!1,d!==null&&(bi[Ci++]=mr,bi[Ci++]=gr,bi[Ci++]=cs,mr=d.id,gr=d.overflow,cs=l)),l=Jh(l,l.pendingProps.children),l.flags|=4096);return l}return T?(v=yg(a,l,v.children,v.fallback,d),T=l.child,M=a.child.memoizedState,T.memoizedState=M===null?ac(d):{baseLanes:M.baseLanes|d,cachePool:null},T.childLanes=a.childLanes&~d,l.memoizedState=sc,v):(d=_g(a,l,v.children,d),l.memoizedState=null,d)}return T?(v=yg(a,l,v.children,v.fallback,d),T=l.child,M=a.child.memoizedState,T.memoizedState=M===null?ac(d):{baseLanes:M.baseLanes|d,cachePool:null},T.childLanes=a.childLanes&~d,l.memoizedState=sc,v):(d=_g(a,l,v.children,d),l.memoizedState=null,d)}function Jh(a,l){return l=Tc({mode:"visible",children:l},a.mode,0,null),l.return=a,a.child=l}function _g(a,l,d,v){var M=a.child;return a=M.sibling,d=Hr(M,{mode:"visible",children:d}),!(l.mode&1)&&(d.lanes=v),d.return=l,d.sibling=null,a!==null&&(v=l.deletions,v===null?(l.deletions=[a],l.flags|=16):v.push(a)),l.child=d}function yg(a,l,d,v,M){var T=l.mode;a=a.child;var V=a.sibling,j={mode:"hidden",children:d};return!(T&1)&&l.child!==a?(d=l.child,d.childLanes=0,d.pendingProps=j,l.deletions=null):(d=Hr(a,j),d.subtreeFlags=a.subtreeFlags&14680064),V!==null?v=Hr(V,v):(v=vs(v,T,M,null),v.flags|=2),v.return=l,d.return=l,d.sibling=v,l.child=d,v}function oc(a,l,d,v){return v!==null&&Nh(v),sa(l,a.child,null,d),a=Jh(l,l.pendingProps.children),a.flags|=2,l.memoizedState=null,a}function xg(a,l,d){a.lanes|=l;var v=a.alternate;v!==null&&(v.lanes|=l),bh(a.return,l,d)}function Kh(a,l,d,v,M){var T=a.memoizedState;T===null?a.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:v,tail:d,tailMode:M}:(T.isBackwards=l,T.rendering=null,T.renderingStartTime=0,T.last=v,T.tail=d,T.tailMode=M)}function Sg(a,l,d){var v=l.pendingProps,M=v.revealOrder,T=v.tail;if(Jn(a,l,v.children,d),v=an.current,v&2)v=v&1|2,l.flags|=128;else{if(a!==null&&a.flags&128)e:for(a=l.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&xg(a,d,l);else if(a.tag===19)xg(a,d,l);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===l)break e;for(;a.sibling===null;){if(a.return===null||a.return===l)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}v&=1}if(je(an,v),!(l.mode&1))l.memoizedState=null;else switch(M){case"forwards":for(d=l.child,M=null;d!==null;)a=d.alternate,a!==null&&jl(a)===null&&(M=d),d=d.sibling;d=M,d===null?(M=l.child,l.child=null):(M=d.sibling,d.sibling=null),Kh(l,!1,M,d,T);break;case"backwards":for(d=null,M=l.child,l.child=null;M!==null;){if(a=M.alternate,a!==null&&jl(a)===null){l.child=M;break}a=M.sibling,M.sibling=d,d=M,M=a}Kh(l,!0,d,null,T);break;case"together":Kh(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function _r(a,l,d){if(a!==null&&(l.dependencies=a.dependencies),ua|=l.lanes,!(d&l.childLanes))return null;if(a!==null&&l.child!==a.child)throw Error(o(153));if(l.child!==null){for(a=l.child,d=Hr(a,a.pendingProps),l.child=d,d.return=l;a.sibling!==null;)a=a.sibling,d=d.sibling=Hr(a,a.pendingProps),d.return=l;d.sibling=null}return l.child}function mS(a,l,d){switch(l.tag){case 3:mg(l),ra();break;case 5:Fm(l);break;case 1:Yt(l.type)&&kt(l);break;case 4:Oh(l,l.stateNode.containerInfo);break;case 10:Mm(l,l.type._context,l.memoizedProps.value);break;case 13:var v=l.memoizedState;if(v!==null)return v.dehydrated!==null?(je(an,an.current&1),l.flags|=128,null):d&l.child.childLanes?vg(a,l,d):(je(an,an.current&1),a=_r(a,l,d),a!==null?a.sibling:null);je(an,an.current&1);break;case 19:if(v=(d&l.childLanes)!==0,a.flags&128){if(v)return Sg(a,l,d);l.flags|=128}var M=l.memoizedState;if(M!==null&&(M.rendering=null,M.tail=null,M.lastEffect=null),je(an,an.current),v)break;return null;case 22:case 23:return l.lanes=0,fg(a,l,d)}return _r(a,l,d)}function gS(a,l){switch(Lh(l),l.tag){case 1:return Yt(l.type)&&fn(),a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 3:return oa(),ht(mt),ht(Gt),zh(),a=l.flags,a&65536&&!(a&128)?(l.flags=a&-65537|128,l):null;case 5:return Fh(l),null;case 13:if(ht(an),a=l.memoizedState,a!==null&&a.dehydrated!==null){if(l.alternate===null)throw Error(o(340));ra()}return a=l.flags,a&65536?(l.flags=a&-65537|128,l):null;case 19:return ht(an),null;case 4:return oa(),null;case 10:return Th(l.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var lc=!1,fs=!1,vS=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function cc(a,l){var d=a.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(v){li(a,l,v)}else d.current=null}function Qh(a,l,d){try{d()}catch(v){li(a,l,v)}}var Mg=!1;function _S(a,l){for(re(a.containerInfo),Ve=l;Ve!==null;)if(a=Ve,l=a.child,(a.subtreeFlags&1028)!==0&&l!==null)l.return=a,Ve=l;else for(;Ve!==null;){a=Ve;try{var d=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var v=d.memoizedProps,M=d.memoizedState,T=a.stateNode,V=T.getSnapshotBeforeUpdate(a.elementType===a.type?v:Fi(a.type,v),M);T.__reactInternalSnapshotBeforeUpdate=V}break;case 3:dt&&Xe(a.stateNode.containerInfo);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(j){li(a,a.return,j)}if(l=a.sibling,l!==null){l.return=a.return,Ve=l;break}Ve=a.return}return d=Mg,Mg=!1,d}function ds(a,l,d){var v=l.updateQueue;if(v=v!==null?v.lastEffect:null,v!==null){var M=v=v.next;do{if((M.tag&a)===a){var T=M.destroy;M.destroy=void 0,T!==void 0&&Qh(l,d,T)}M=M.next}while(M!==v)}}function wo(a,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&a)===a){var v=d.create;d.destroy=v()}d=d.next}while(d!==l)}}function $h(a){var l=a.ref;if(l!==null){var d=a.stateNode;switch(a.tag){case 5:a=te(d);break;default:a=d}typeof l=="function"?l(a):l.current=a}}function wg(a,l,d){if(ji&&typeof ji.onCommitFiberUnmount=="function")try{ji.onCommitFiberUnmount(Bl,l)}catch{}switch(l.tag){case 0:case 11:case 14:case 15:if(a=l.updateQueue,a!==null&&(a=a.lastEffect,a!==null)){var v=a=a.next;do{var M=v,T=M.destroy;M=M.tag,T!==void 0&&(M&2||M&4)&&Qh(l,d,T),v=v.next}while(v!==a)}break;case 1:if(cc(l,d),a=l.stateNode,typeof a.componentWillUnmount=="function")try{a.props=l.memoizedProps,a.state=l.memoizedState,a.componentWillUnmount()}catch(V){li(l,d,V)}break;case 5:cc(l,d);break;case 4:dt?Rg(a,l,d):pe&&pe&&(l=l.stateNode.containerInfo,d=Vt(l),Ut(l,d))}}function Eg(a,l,d){for(var v=l;;)if(wg(a,v,d),v.child===null||dt&&v.tag===4){if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return}v.sibling.return=v.return,v=v.sibling}else v.child.return=v,v=v.child}function Ag(a){var l=a.alternate;l!==null&&(a.alternate=null,Ag(l)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(l=a.stateNode,l!==null&&qe(l)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}function Tg(a){return a.tag===5||a.tag===3||a.tag===4}function bg(a){e:for(;;){for(;a.sibling===null;){if(a.return===null||Tg(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue e;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Cg(a){if(dt){e:{for(var l=a.return;l!==null;){if(Tg(l))break e;l=l.return}throw Error(o(160))}var d=l;switch(d.tag){case 5:l=d.stateNode,d.flags&32&&(at(l),d.flags&=-33),d=bg(a),tf(a,d,l);break;case 3:case 4:l=d.stateNode.containerInfo,d=bg(a),ef(a,d,l);break;default:throw Error(o(161))}}}function ef(a,l,d){var v=a.tag;if(v===5||v===6)a=a.stateNode,l?st(d,a,l):Ie(d,a);else if(v!==4&&(a=a.child,a!==null))for(ef(a,l,d),a=a.sibling;a!==null;)ef(a,l,d),a=a.sibling}function tf(a,l,d){var v=a.tag;if(v===5||v===6)a=a.stateNode,l?We(d,a,l):pt(d,a);else if(v!==4&&(a=a.child,a!==null))for(tf(a,l,d),a=a.sibling;a!==null;)tf(a,l,d),a=a.sibling}function Rg(a,l,d){for(var v=l,M=!1,T,V;;){if(!M){M=v.return;e:for(;;){if(M===null)throw Error(o(160));switch(T=M.stateNode,M.tag){case 5:V=!1;break e;case 3:T=T.containerInfo,V=!0;break e;case 4:T=T.containerInfo,V=!0;break e}M=M.return}M=!0}if(v.tag===5||v.tag===6)Eg(a,v,d),V?Ht(T,v.stateNode):At(T,v.stateNode);else if(v.tag===18)V?ne(T,v.stateNode):ee(T,v.stateNode);else if(v.tag===4){if(v.child!==null){T=v.stateNode.containerInfo,V=!0,v.child.return=v,v=v.child;continue}}else if(wg(a,v,d),v.child!==null){v.child.return=v,v=v.child;continue}if(v===l)break;for(;v.sibling===null;){if(v.return===null||v.return===l)return;v=v.return,v.tag===4&&(M=!1)}v.sibling.return=v.return,v=v.sibling}}function nf(a,l){if(dt){switch(l.tag){case 0:case 11:case 14:case 15:ds(3,l,l.return),wo(3,l),ds(5,l,l.return);return;case 1:return;case 5:var d=l.stateNode;if(d!=null){var v=l.memoizedProps;a=a!==null?a.memoizedProps:v;var M=l.type,T=l.updateQueue;l.updateQueue=null,T!==null&&lt(d,T,M,a,v,l)}return;case 6:if(l.stateNode===null)throw Error(o(162));d=l.memoizedProps,et(l.stateNode,a!==null?a.memoizedProps:d,d);return;case 3:Se&&a!==null&&a.memoizedState.isDehydrated&&z(l.stateNode.containerInfo);return;case 12:return;case 13:uc(l);return;case 19:uc(l);return;case 17:return}throw Error(o(163))}switch(l.tag){case 0:case 11:case 14:case 15:ds(3,l,l.return),wo(3,l),ds(5,l,l.return);return;case 12:return;case 13:uc(l);return;case 19:uc(l);return;case 3:Se&&a!==null&&a.memoizedState.isDehydrated&&z(l.stateNode.containerInfo);break;case 22:case 23:return}e:if(pe){switch(l.tag){case 1:case 5:case 6:break e;case 3:case 4:l=l.stateNode,Ut(l.containerInfo,l.pendingChildren);break e}throw Error(o(163))}}function uc(a){var l=a.updateQueue;if(l!==null){a.updateQueue=null;var d=a.stateNode;d===null&&(d=a.stateNode=new vS),l.forEach(function(v){var M=CS.bind(null,a,v);d.has(v)||(d.add(v),v.then(M,M))})}}function yS(a,l){for(Ve=l;Ve!==null;){l=Ve;var d=l.deletions;if(d!==null)for(var v=0;v<d.length;v++){var M=d[v];try{var T=a;dt?Rg(T,M,l):Eg(T,M,l);var V=M.alternate;V!==null&&(V.return=null),M.return=null}catch(nt){li(M,l,nt)}}if(d=l.child,l.subtreeFlags&12854&&d!==null)d.return=l,Ve=d;else for(;Ve!==null;){l=Ve;try{var j=l.flags;if(j&32&&dt&&at(l.stateNode),j&512){var he=l.alternate;if(he!==null){var Pe=he.ref;Pe!==null&&(typeof Pe=="function"?Pe(null):Pe.current=null)}}if(j&8192)switch(l.tag){case 13:if(l.memoizedState!==null){var Ke=l.alternate;(Ke===null||Ke.memoizedState===null)&&(uf=Tn())}break;case 22:var yt=l.memoizedState!==null,ut=l.alternate,Kt=ut!==null&&ut.memoizedState!==null;if(d=l,dt){e:if(v=d,M=yt,T=null,dt)for(var it=v;;){if(it.tag===5){if(T===null){T=it;var Gn=it.stateNode;M?Z(Gn):J(it.stateNode,it.memoizedProps)}}else if(it.tag===6){if(T===null){var Ui=it.stateNode;M?Me(Ui):De(Ui,it.memoizedProps)}}else if((it.tag!==22&&it.tag!==23||it.memoizedState===null||it===v)&&it.child!==null){it.child.return=it,it=it.child;continue}if(it===v)break;for(;it.sibling===null;){if(it.return===null||it.return===v)break e;T===it&&(T=null),it=it.return}T===it&&(T=null),it.sibling.return=it.return,it=it.sibling}}if(yt&&!Kt&&d.mode&1){Ve=d;for(var ae=d.child;ae!==null;){for(d=Ve=ae;Ve!==null;){v=Ve;var Q=v.child;switch(v.tag){case 0:case 11:case 14:case 15:ds(4,v,v.return);break;case 1:cc(v,v.return);var ce=v.stateNode;if(typeof ce.componentWillUnmount=="function"){var Ge=v.return;try{ce.props=v.memoizedProps,ce.state=v.memoizedState,ce.componentWillUnmount()}catch(nt){li(v,Ge,nt)}}break;case 5:cc(v,v.return);break;case 22:if(v.memoizedState!==null){Lg(d);continue}}Q!==null?(Q.return=v,Ve=Q):Lg(d)}ae=ae.sibling}}}switch(j&4102){case 2:Cg(l),l.flags&=-3;break;case 6:Cg(l),l.flags&=-3,nf(l.alternate,l);break;case 4096:l.flags&=-4097;break;case 4100:l.flags&=-4097,nf(l.alternate,l);break;case 4:nf(l.alternate,l)}}catch(nt){li(l,l.return,nt)}if(d=l.sibling,d!==null){d.return=l.return,Ve=d;break}Ve=l.return}}}function xS(a,l,d){Ve=a,Pg(a)}function Pg(a,l,d){for(var v=(a.mode&1)!==0;Ve!==null;){var M=Ve,T=M.child;if(M.tag===22&&v){var V=M.memoizedState!==null||lc;if(!V){var j=M.alternate,he=j!==null&&j.memoizedState!==null||fs;j=lc;var Pe=fs;if(lc=V,(fs=he)&&!Pe)for(Ve=M;Ve!==null;)V=Ve,he=V.child,V.tag===22&&V.memoizedState!==null?Ug(M):he!==null?(he.return=V,Ve=he):Ug(M);for(;T!==null;)Ve=T,Pg(T),T=T.sibling;Ve=M,lc=j,fs=Pe}Ig(a)}else M.subtreeFlags&8772&&T!==null?(T.return=M,Ve=T):Ig(a)}}function Ig(a){for(;Ve!==null;){var l=Ve;if(l.flags&8772){var d=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:fs||wo(5,l);break;case 1:var v=l.stateNode;if(l.flags&4&&!fs)if(d===null)v.componentDidMount();else{var M=l.elementType===l.type?d.memoizedProps:Fi(l.type,d.memoizedProps);v.componentDidUpdate(M,d.memoizedState,v.__reactInternalSnapshotBeforeUpdate)}var T=l.updateQueue;T!==null&&Am(l,T,v);break;case 3:var V=l.updateQueue;if(V!==null){if(d=null,l.child!==null)switch(l.child.tag){case 5:d=te(l.child.stateNode);break;case 1:d=l.child.stateNode}Am(l,V,d)}break;case 5:var j=l.stateNode;d===null&&l.flags&4&&Et(j,l.type,l.memoizedProps,l);break;case 6:break;case 4:break;case 12:break;case 13:if(Se&&l.memoizedState===null){var he=l.alternate;if(he!==null){var Pe=he.memoizedState;if(Pe!==null){var Ke=Pe.dehydrated;Ke!==null&&k(Ke)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(o(163))}fs||l.flags&512&&$h(l)}catch(yt){li(l,l.return,yt)}}if(l===a){Ve=null;break}if(d=l.sibling,d!==null){d.return=l.return,Ve=d;break}Ve=l.return}}function Lg(a){for(;Ve!==null;){var l=Ve;if(l===a){Ve=null;break}var d=l.sibling;if(d!==null){d.return=l.return,Ve=d;break}Ve=l.return}}function Ug(a){for(;Ve!==null;){var l=Ve;try{switch(l.tag){case 0:case 11:case 15:var d=l.return;try{wo(4,l)}catch(he){li(l,d,he)}break;case 1:var v=l.stateNode;if(typeof v.componentDidMount=="function"){var M=l.return;try{v.componentDidMount()}catch(he){li(l,M,he)}}var T=l.return;try{$h(l)}catch(he){li(l,T,he)}break;case 5:var V=l.return;try{$h(l)}catch(he){li(l,V,he)}}}catch(he){li(l,l.return,he)}if(l===a){Ve=null;break}var j=l.sibling;if(j!==null){j.return=l.return,Ve=j;break}Ve=l.return}}var hc=0,fc=1,dc=2,pc=3,mc=4;if(typeof Symbol=="function"&&Symbol.for){var Eo=Symbol.for;hc=Eo("selector.component"),fc=Eo("selector.has_pseudo_class"),dc=Eo("selector.role"),pc=Eo("selector.test_id"),mc=Eo("selector.text")}function rf(a){var l=_e(a);if(l!=null){if(typeof l.memoizedProps["data-testname"]!="string")throw Error(o(364));return l}if(a=se(a),a===null)throw Error(o(362));return a.stateNode.current}function sf(a,l){switch(l.$$typeof){case hc:if(a.type===l.value)return!0;break;case fc:e:{l=l.value,a=[a,0];for(var d=0;d<a.length;){var v=a[d++],M=a[d++],T=l[M];if(v.tag!==5||!xe(v)){for(;T!=null&&sf(v,T);)M++,T=l[M];if(M===l.length){l=!0;break e}else for(v=v.child;v!==null;)a.push(v,M),v=v.sibling}}l=!1}return l;case dc:if(a.tag===5&&$e(a.stateNode,l.value))return!0;break;case mc:if((a.tag===5||a.tag===6)&&(a=we(a),a!==null&&0<=a.indexOf(l.value)))return!0;break;case pc:if(a.tag===5&&(a=a.memoizedProps["data-testname"],typeof a=="string"&&a.toLowerCase()===l.value.toLowerCase()))return!0;break;default:throw Error(o(365))}return!1}function af(a){switch(a.$$typeof){case hc:return"<"+(D(a.value)||"Unknown")+">";case fc:return":has("+(af(a)||"")+")";case dc:return'[role="'+a.value+'"]';case mc:return'"'+a.value+'"';case pc:return'[data-testname="'+a.value+'"]';default:throw Error(o(365))}}function Dg(a,l){var d=[];a=[a,0];for(var v=0;v<a.length;){var M=a[v++],T=a[v++],V=l[T];if(M.tag!==5||!xe(M)){for(;V!=null&&sf(M,V);)T++,V=l[T];if(T===l.length)d.push(M);else for(M=M.child;M!==null;)a.push(M,T),M=M.sibling}}return d}function of(a,l){if(!U)throw Error(o(363));a=rf(a),a=Dg(a,l),l=[],a=Array.from(a);for(var d=0;d<a.length;){var v=a[d++];if(v.tag===5)xe(v)||l.push(v.stateNode);else for(v=v.child;v!==null;)a.push(v),v=v.sibling}return l}var SS=Math.ceil,gc=c.ReactCurrentDispatcher,lf=c.ReactCurrentOwner,dn=c.ReactCurrentBatchConfig,Rt=0,_n=null,yn=null,Dn=0,pi=0,ca=Oe(0),Mn=0,Ao=null,ua=0,vc=0,cf=0,To=null,ai=null,uf=0,hf=1/0;function ha(){hf=Tn()+500}var _c=!1,ff=null,Fr=null,yc=!1,Br=null,xc=0,bo=0,df=null,Sc=-1,Mc=0;function Kn(){return Rt&6?Tn():Sc!==-1?Sc:Sc=Tn()}function zr(a){return a.mode&1?Rt&2&&Dn!==0?Dn&-Dn:iS.transition!==null?(Mc===0&&(a=Nl,Nl<<=1,!(Nl&4194240)&&(Nl=64),Mc=a),Mc):(a=Ot,a!==0?a:Ce()):1}function Ii(a,l,d){if(50<bo)throw bo=0,df=null,Error(o(185));var v=wc(a,l);return v===null?null:(co(v,l,d),(!(Rt&2)||v!==_n)&&(v===_n&&(!(Rt&2)&&(vc|=l),Mn===4&&kr(v,Dn)),oi(v,d),l===1&&Rt===0&&!(a.mode&1)&&(ha(),zl&&Ki())),v)}function wc(a,l){a.lanes|=l;var d=a.alternate;for(d!==null&&(d.lanes|=l),d=a,a=a.return;a!==null;)a.childLanes|=l,d=a.alternate,d!==null&&(d.childLanes|=l),d=a,a=a.return;return d.tag===3?d.stateNode:null}function oi(a,l){var d=a.callbackNode;Zx(a,l);var v=Fl(a,a===_n?Dn:0);if(v===0)d!==null&&xm(d),a.callbackNode=null,a.callbackPriority=0;else if(l=v&-v,a.callbackPriority!==l){if(d!=null&&xm(d),l===1)a.tag===0?nS(Og.bind(null,a)):Sm(Og.bind(null,a)),rt?G(function(){Rt===0&&Ki()}):xh(Sh,Ki),d=null;else{switch(ym(v)){case 1:d=Sh;break;case 4:d=Qx;break;case 16:d=Mh;break;case 536870912:d=$x;break;default:d=Mh}d=Xg(d,Ng.bind(null,a))}a.callbackPriority=l,a.callbackNode=d}}function Ng(a,l){if(Sc=-1,Mc=0,Rt&6)throw Error(o(327));var d=a.callbackNode;if(gs()&&a.callbackNode!==d)return null;var v=Fl(a,a===_n?Dn:0);if(v===0)return null;if(v&30||v&a.expiredLanes||l)l=Ec(a,v);else{l=v;var M=Rt;Rt|=2;var T=zg();(_n!==a||Dn!==l)&&(ha(),ps(a,l));do try{ES();break}catch(j){Bg(a,j)}while(!0);Ah(),gc.current=T,Rt=M,yn!==null?l=0:(_n=null,Dn=0,l=Mn)}if(l!==0){if(l===2&&(M=vh(a),M!==0&&(v=M,l=pf(a,M))),l===1)throw d=Ao,ps(a,0),kr(a,v),oi(a,Tn()),d;if(l===6)kr(a,v);else{if(M=a.current.alternate,!(v&30)&&!MS(M)&&(l=Ec(a,v),l===2&&(T=vh(a),T!==0&&(v=T,l=pf(a,T))),l===1))throw d=Ao,ps(a,0),kr(a,v),oi(a,Tn()),d;switch(a.finishedWork=M,a.finishedLanes=v,l){case 0:case 1:throw Error(o(345));case 2:ms(a,ai);break;case 3:if(kr(a,v),(v&130023424)===v&&(l=uf+500-Tn(),10<l)){if(Fl(a,0)!==0)break;if(M=a.suspendedLanes,(M&v)!==v){Kn(),a.pingedLanes|=a.suspendedLanes&M;break}a.timeoutHandle=be(ms.bind(null,a,ai),l);break}ms(a,ai);break;case 4:if(kr(a,v),(v&4194240)===v)break;for(l=a.eventTimes,M=-1;0<v;){var V=31-nn(v);T=1<<V,V=l[V],V>M&&(M=V),v&=~T}if(v=M,v=Tn()-v,v=(120>v?120:480>v?480:1080>v?1080:1920>v?1920:3e3>v?3e3:4320>v?4320:1960*SS(v/1960))-v,10<v){a.timeoutHandle=be(ms.bind(null,a,ai),v);break}ms(a,ai);break;case 5:ms(a,ai);break;default:throw Error(o(329))}}}return oi(a,Tn()),a.callbackNode===d?Ng.bind(null,a):null}function pf(a,l){var d=To;return a.current.memoizedState.isDehydrated&&(ps(a,l).flags|=256),a=Ec(a,l),a!==2&&(l=ai,ai=d,l!==null&&mf(l)),a}function mf(a){ai===null?ai=a:ai.push.apply(ai,a)}function MS(a){for(var l=a;;){if(l.flags&16384){var d=l.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var v=0;v<d.length;v++){var M=d[v],T=M.getSnapshot;M=M.value;try{if(!Ji(T(),M))return!1}catch{return!1}}}if(d=l.child,l.subtreeFlags&16384&&d!==null)d.return=l,l=d;else{if(l===a)break;for(;l.sibling===null;){if(l.return===null||l.return===a)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function kr(a,l){for(l&=~cf,l&=~vc,a.suspendedLanes|=l,a.pingedLanes&=~l,a=a.expirationTimes;0<l;){var d=31-nn(l),v=1<<d;a[d]=-1,l&=~v}}function Og(a){if(Rt&6)throw Error(o(327));gs();var l=Fl(a,0);if(!(l&1))return oi(a,Tn()),null;var d=Ec(a,l);if(a.tag!==0&&d===2){var v=vh(a);v!==0&&(l=v,d=pf(a,v))}if(d===1)throw d=Ao,ps(a,0),kr(a,l),oi(a,Tn()),d;if(d===6)throw Error(o(345));return a.finishedWork=a.current.alternate,a.finishedLanes=l,ms(a,ai),oi(a,Tn()),null}function Fg(a){Br!==null&&Br.tag===0&&!(Rt&6)&&gs();var l=Rt;Rt|=1;var d=dn.transition,v=Ot;try{if(dn.transition=null,Ot=1,a)return a()}finally{Ot=v,dn.transition=d,Rt=l,!(Rt&6)&&Ki()}}function gf(){pi=ca.current,ht(ca)}function ps(a,l){a.finishedWork=null,a.finishedLanes=0;var d=a.timeoutHandle;if(d!==gt&&(a.timeoutHandle=gt,ot(d)),yn!==null)for(d=yn.return;d!==null;){var v=d;switch(Lh(v),v.tag){case 1:v=v.type.childContextTypes,v!=null&&fn();break;case 3:oa(),ht(mt),ht(Gt),zh();break;case 5:Fh(v);break;case 4:oa();break;case 13:ht(an);break;case 19:ht(an);break;case 10:Th(v.type._context);break;case 22:case 23:gf()}d=d.return}if(_n=a,yn=a=Hr(a.current,null),Dn=pi=l,Mn=0,Ao=null,cf=vc=ua=0,ai=To=null,Qi!==null){for(l=0;l<Qi.length;l++)if(d=Qi[l],v=d.interleaved,v!==null){d.interleaved=null;var M=v.next,T=d.pending;if(T!==null){var V=T.next;T.next=M,v.next=V}d.pending=v}Qi=null}return a}function Bg(a,l){do{var d=yn;try{if(Ah(),Jl.current=nc,Kl){for(var v=cn.memoizedState;v!==null;){var M=v.queue;M!==null&&(M.pending=null),v=v.next}Kl=!1}if(la=0,bn=kn=cn=null,go=!1,vo=0,lf.current=null,d===null||d.return===null){Mn=1,Ao=l,yn=null;break}e:{var T=a,V=d.return,j=d,he=l;if(l=Dn,j.flags|=32768,he!==null&&typeof he=="object"&&typeof he.then=="function"){var Pe=he,Ke=j,yt=Ke.tag;if(!(Ke.mode&1)&&(yt===0||yt===11||yt===15)){var ut=Ke.alternate;ut?(Ke.updateQueue=ut.updateQueue,Ke.memoizedState=ut.memoizedState,Ke.lanes=ut.lanes):(Ke.updateQueue=null,Ke.memoizedState=null)}var Kt=sg(V);if(Kt!==null){Kt.flags&=-257,ag(Kt,V,j,T,l),Kt.mode&1&&rg(T,Pe,l),l=Kt,he=Pe;var it=l.updateQueue;if(it===null){var Gn=new Set;Gn.add(he),l.updateQueue=Gn}else it.add(he);break e}else{if(!(l&1)){rg(T,Pe,l),vf();break e}he=Error(o(426))}}else if(rn&&j.mode&1){var Ui=sg(V);if(Ui!==null){!(Ui.flags&65536)&&(Ui.flags|=256),ag(Ui,V,j,T,l),Nh(he);break e}}T=he,Mn!==4&&(Mn=2),To===null?To=[T]:To.push(T),he=Yh(he,j),j=V;do{switch(j.tag){case 3:j.flags|=65536,l&=-l,j.lanes|=l;var ae=ng(j,he,l);Em(j,ae);break e;case 1:T=he;var Q=j.type,ce=j.stateNode;if(!(j.flags&128)&&(typeof Q.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Fr===null||!Fr.has(ce)))){j.flags|=65536,l&=-l,j.lanes|=l;var Ge=ig(j,T,l);Em(j,Ge);break e}}j=j.return}while(j!==null)}Hg(d)}catch(nt){l=nt,yn===d&&d!==null&&(yn=d=d.return);continue}break}while(!0)}function zg(){var a=gc.current;return gc.current=nc,a===null?nc:a}function vf(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),_n===null||!(ua&268435455)&&!(vc&268435455)||kr(_n,Dn)}function Ec(a,l){var d=Rt;Rt|=2;var v=zg();_n===a&&Dn===l||ps(a,l);do try{wS();break}catch(M){Bg(a,M)}while(!0);if(Ah(),Rt=d,gc.current=v,yn!==null)throw Error(o(261));return _n=null,Dn=0,Mn}function wS(){for(;yn!==null;)kg(yn)}function ES(){for(;yn!==null&&!Jx();)kg(yn)}function kg(a){var l=Wg(a.alternate,a,pi);a.memoizedProps=a.pendingProps,l===null?Hg(a):yn=l,lf.current=null}function Hg(a){var l=a;do{var d=l.alternate;if(a=l.return,l.flags&32768){if(d=gS(d,l),d!==null){d.flags&=32767,yn=d;return}if(a!==null)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{Mn=6,yn=null;return}}else if(d=dS(d,l,pi),d!==null){yn=d;return}if(l=l.sibling,l!==null){yn=l;return}yn=l=a}while(l!==null);Mn===0&&(Mn=5)}function ms(a,l){var d=Ot,v=dn.transition;try{dn.transition=null,Ot=1,AS(a,l,d)}finally{dn.transition=v,Ot=d}return null}function AS(a,l,d){do gs();while(Br!==null);if(Rt&6)throw Error(o(327));var v=a.finishedWork,M=a.finishedLanes;if(v===null)return null;if(a.finishedWork=null,a.finishedLanes=0,v===a.current)throw Error(o(177));a.callbackNode=null,a.callbackPriority=0;var T=v.lanes|v.childLanes;if(jx(a,T),a===_n&&(yn=_n=null,Dn=0),!(v.subtreeFlags&2064)&&!(v.flags&2064)||yc||(yc=!0,Xg(Mh,function(){return gs(),null})),T=(v.flags&15990)!==0,v.subtreeFlags&15990||T){T=dn.transition,dn.transition=null;var V=Ot;Ot=1;var j=Rt;Rt|=4,lf.current=null,_S(a,v),yS(a,v),K(a.containerInfo),a.current=v,xS(v),Kx(),Rt=j,Ot=V,dn.transition=T}else a.current=v;if(yc&&(yc=!1,Br=a,xc=M),T=a.pendingLanes,T===0&&(Fr=null),eS(v.stateNode),oi(a,Tn()),l!==null)for(d=a.onRecoverableError,v=0;v<l.length;v++)d(l[v]);if(_c)throw _c=!1,a=ff,ff=null,a;return xc&1&&a.tag!==0&&gs(),T=a.pendingLanes,T&1?a===df?bo++:(bo=0,df=a):bo=0,Ki(),null}function gs(){if(Br!==null){var a=ym(xc),l=dn.transition,d=Ot;try{if(dn.transition=null,Ot=16>a?16:a,Br===null)var v=!1;else{if(a=Br,Br=null,xc=0,Rt&6)throw Error(o(331));var M=Rt;for(Rt|=4,Ve=a.current;Ve!==null;){var T=Ve,V=T.child;if(Ve.flags&16){var j=T.deletions;if(j!==null){for(var he=0;he<j.length;he++){var Pe=j[he];for(Ve=Pe;Ve!==null;){var Ke=Ve;switch(Ke.tag){case 0:case 11:case 15:ds(8,Ke,T)}var yt=Ke.child;if(yt!==null)yt.return=Ke,Ve=yt;else for(;Ve!==null;){Ke=Ve;var ut=Ke.sibling,Kt=Ke.return;if(Ag(Ke),Ke===Pe){Ve=null;break}if(ut!==null){ut.return=Kt,Ve=ut;break}Ve=Kt}}}var it=T.alternate;if(it!==null){var Gn=it.child;if(Gn!==null){it.child=null;do{var Ui=Gn.sibling;Gn.sibling=null,Gn=Ui}while(Gn!==null)}}Ve=T}}if(T.subtreeFlags&2064&&V!==null)V.return=T,Ve=V;else e:for(;Ve!==null;){if(T=Ve,T.flags&2048)switch(T.tag){case 0:case 11:case 15:ds(9,T,T.return)}var ae=T.sibling;if(ae!==null){ae.return=T.return,Ve=ae;break e}Ve=T.return}}var Q=a.current;for(Ve=Q;Ve!==null;){V=Ve;var ce=V.child;if(V.subtreeFlags&2064&&ce!==null)ce.return=V,Ve=ce;else e:for(V=Q;Ve!==null;){if(j=Ve,j.flags&2048)try{switch(j.tag){case 0:case 11:case 15:wo(9,j)}}catch(nt){li(j,j.return,nt)}if(j===V){Ve=null;break e}var Ge=j.sibling;if(Ge!==null){Ge.return=j.return,Ve=Ge;break e}Ve=j.return}}if(Rt=M,Ki(),ji&&typeof ji.onPostCommitFiberRoot=="function")try{ji.onPostCommitFiberRoot(Bl,a)}catch{}v=!0}return v}finally{Ot=d,dn.transition=l}}return!1}function Vg(a,l,d){l=Yh(d,l),l=ng(a,l,1),Or(a,l),l=Kn(),a=wc(a,1),a!==null&&(co(a,1,l),oi(a,l))}function li(a,l,d){if(a.tag===3)Vg(a,a,d);else for(;l!==null;){if(l.tag===3){Vg(l,a,d);break}else if(l.tag===1){var v=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof v.componentDidCatch=="function"&&(Fr===null||!Fr.has(v))){a=Yh(d,a),a=ig(l,a,1),Or(l,a),a=Kn(),l=wc(l,1),l!==null&&(co(l,1,a),oi(l,a));break}}l=l.return}}function TS(a,l,d){var v=a.pingCache;v!==null&&v.delete(l),l=Kn(),a.pingedLanes|=a.suspendedLanes&d,_n===a&&(Dn&d)===d&&(Mn===4||Mn===3&&(Dn&130023424)===Dn&&500>Tn()-uf?ps(a,0):cf|=d),oi(a,l)}function Gg(a,l){l===0&&(a.mode&1?(l=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):l=1);var d=Kn();a=wc(a,l),a!==null&&(co(a,l,d),oi(a,d))}function bS(a){var l=a.memoizedState,d=0;l!==null&&(d=l.retryLane),Gg(a,d)}function CS(a,l){var d=0;switch(a.tag){case 13:var v=a.stateNode,M=a.memoizedState;M!==null&&(d=M.retryLane);break;case 19:v=a.stateNode;break;default:throw Error(o(314))}v!==null&&v.delete(l),Gg(a,d)}var Wg;Wg=function(a,l,d){if(a!==null)if(a.memoizedProps!==l.pendingProps||mt.current)di=!0;else{if(!(a.lanes&d)&&!(l.flags&128))return di=!1,mS(a,l,d);di=!!(a.flags&131072)}else di=!1,rn&&l.flags&1048576&&Pm(l,ql,l.index);switch(l.lanes=0,l.tag){case 2:var v=l.type;a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps;var M=Dt(l,Gt.current);ta(l,d),M=Hh(null,l,v,a,M,d);var T=Vh();return l.flags|=1,typeof M=="object"&&M!==null&&typeof M.render=="function"&&M.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Yt(v)?(T=!0,kt(l)):T=!1,l.memoizedState=M.state!==null&&M.state!==void 0?M.state:null,Ch(l),M.updater=Xl,l.stateNode=M,M._reactInternals=l,Ph(l,v,a,d),l=jh(null,l,v,!0,T,d)):(l.tag=0,rn&&T&&Ih(l),Jn(null,l,M,d),l=l.child),l;case 16:v=l.elementType;e:{switch(a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),a=l.pendingProps,M=v._init,v=M(v._payload),l.type=v,M=l.tag=PS(v),a=Fi(v,a),M){case 0:l=Zh(null,l,v,a,d);break e;case 1:l=pg(null,l,v,a,d);break e;case 11:l=cg(null,l,v,a,d);break e;case 14:l=ug(null,l,v,Fi(v.type,a),d);break e}throw Error(o(306,v,""))}return l;case 0:return v=l.type,M=l.pendingProps,M=l.elementType===v?M:Fi(v,M),Zh(a,l,v,M,d);case 1:return v=l.type,M=l.pendingProps,M=l.elementType===v?M:Fi(v,M),pg(a,l,v,M,d);case 3:e:{if(mg(l),a===null)throw Error(o(387));v=l.pendingProps,T=l.memoizedState,M=T.element,wm(a,l),Wl(l,v,null,d);var V=l.memoizedState;if(v=V.element,Se&&T.isDehydrated)if(T={element:v,isDehydrated:!1,cache:V.cache,transitions:V.transitions},l.updateQueue.baseState=T,l.memoizedState=T,l.flags&256){M=Error(o(423)),l=gg(a,l,v,d,M);break e}else if(v!==M){M=Error(o(424)),l=gg(a,l,v,d,M);break e}else for(Se&&(fi=$s(l.stateNode.containerInfo),hi=l,rn=!0,Bi=null,uo=!1),d=Om(l,null,v,d),l.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(ra(),v===M){l=_r(a,l,d);break e}Jn(a,l,v,d)}l=l.child}return l;case 5:return Fm(l),a===null&&Dh(l),v=l.type,M=l.pendingProps,T=a!==null?a.memoizedProps:null,V=M.children,Ee(v,M)?V=null:T!==null&&Ee(v,T)&&(l.flags|=32),dg(a,l),Jn(a,l,V,d),l.child;case 6:return a===null&&Dh(l),null;case 13:return vg(a,l,d);case 4:return Oh(l,l.stateNode.containerInfo),v=l.pendingProps,a===null?l.child=sa(l,null,v,d):Jn(a,l,v,d),l.child;case 11:return v=l.type,M=l.pendingProps,M=l.elementType===v?M:Fi(v,M),cg(a,l,v,M,d);case 7:return Jn(a,l,l.pendingProps,d),l.child;case 8:return Jn(a,l,l.pendingProps.children,d),l.child;case 12:return Jn(a,l,l.pendingProps.children,d),l.child;case 10:e:{if(v=l.type._context,M=l.pendingProps,T=l.memoizedProps,V=M.value,Mm(l,v,V),T!==null)if(Ji(T.value,V)){if(T.children===M.children&&!mt.current){l=_r(a,l,d);break e}}else for(T=l.child,T!==null&&(T.return=l);T!==null;){var j=T.dependencies;if(j!==null){V=T.child;for(var he=j.firstContext;he!==null;){if(he.context===v){if(T.tag===1){he=pr(-1,d&-d),he.tag=2;var Pe=T.updateQueue;if(Pe!==null){Pe=Pe.shared;var Ke=Pe.pending;Ke===null?he.next=he:(he.next=Ke.next,Ke.next=he),Pe.pending=he}}T.lanes|=d,he=T.alternate,he!==null&&(he.lanes|=d),bh(T.return,d,l),j.lanes|=d;break}he=he.next}}else if(T.tag===10)V=T.type===l.type?null:T.child;else if(T.tag===18){if(V=T.return,V===null)throw Error(o(341));V.lanes|=d,j=V.alternate,j!==null&&(j.lanes|=d),bh(V,d,l),V=T.sibling}else V=T.child;if(V!==null)V.return=T;else for(V=T;V!==null;){if(V===l){V=null;break}if(T=V.sibling,T!==null){T.return=V.return,V=T;break}V=V.return}T=V}Jn(a,l,M.children,d),l=l.child}return l;case 9:return M=l.type,v=l.pendingProps.children,ta(l,d),M=Ti(M),v=v(M),l.flags|=1,Jn(a,l,v,d),l.child;case 14:return v=l.type,M=Fi(v,l.pendingProps),M=Fi(v.type,M),ug(a,l,v,M,d);case 15:return hg(a,l,l.type,l.pendingProps,d);case 17:return v=l.type,M=l.pendingProps,M=l.elementType===v?M:Fi(v,M),a!==null&&(a.alternate=null,l.alternate=null,l.flags|=2),l.tag=1,Yt(v)?(a=!0,kt(l)):a=!1,ta(l,d),Cm(l,v,M),Ph(l,v,M,d),jh(null,l,v,!0,a,d);case 19:return Sg(a,l,d);case 22:return fg(a,l,d)}throw Error(o(156,l.tag))};function Xg(a,l){return xh(a,l)}function RS(a,l,d,v){this.tag=a,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=v,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(a,l,d,v){return new RS(a,l,d,v)}function _f(a){return a=a.prototype,!(!a||!a.isReactComponent)}function PS(a){if(typeof a=="function")return _f(a)?1:0;if(a!=null){if(a=a.$$typeof,a===S)return 11;if(a===A)return 14}return 2}function Hr(a,l){var d=a.alternate;return d===null?(d=Li(a.tag,l,a.key,a.mode),d.elementType=a.elementType,d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.pendingProps=l,d.type=a.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=a.flags&14680064,d.childLanes=a.childLanes,d.lanes=a.lanes,d.child=a.child,d.memoizedProps=a.memoizedProps,d.memoizedState=a.memoizedState,d.updateQueue=a.updateQueue,l=a.dependencies,d.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},d.sibling=a.sibling,d.index=a.index,d.ref=a.ref,d}function Ac(a,l,d,v,M,T){var V=2;if(v=a,typeof a=="function")_f(a)&&(V=1);else if(typeof a=="string")V=5;else e:switch(a){case f:return vs(d.children,M,T,l);case p:V=8,M|=8;break;case m:return a=Li(12,d,l,M|2),a.elementType=m,a.lanes=T,a;case x:return a=Li(13,d,l,M),a.elementType=x,a.lanes=T,a;case _:return a=Li(19,d,l,M),a.elementType=_,a.lanes=T,a;case b:return Tc(d,M,T,l);default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case g:V=10;break e;case y:V=9;break e;case S:V=11;break e;case A:V=14;break e;case E:V=16,v=null;break e}throw Error(o(130,a==null?a:typeof a,""))}return l=Li(V,d,l,M),l.elementType=a,l.type=v,l.lanes=T,l}function vs(a,l,d,v){return a=Li(7,a,v,l),a.lanes=d,a}function Tc(a,l,d,v){return a=Li(22,a,v,l),a.elementType=b,a.lanes=d,a.stateNode={},a}function yf(a,l,d){return a=Li(6,a,null,l),a.lanes=d,a}function xf(a,l,d){return l=Li(4,a.children!==null?a.children:[],a.key,l),l.lanes=d,l.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},l}function IS(a,l,d,v,M){this.tag=l,this.containerInfo=a,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=gt,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_h(0),this.expirationTimes=_h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_h(0),this.identifierPrefix=v,this.onRecoverableError=M,Se&&(this.mutableSourceEagerHydrationData=null)}function Yg(a,l,d,v,M,T,V,j,he){return a=new IS(a,l,d,j,he),l===1?(l=1,T===!0&&(l|=8)):l=0,T=Li(3,null,null,l),a.current=T,T.stateNode=a,T.memoizedState={element:v,isDehydrated:d,cache:null,transitions:null},Ch(T),a}function qg(a){if(!a)return vt;a=a._reactInternals;e:{if(R(a)!==a||a.tag!==1)throw Error(o(170));var l=a;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Yt(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(a.tag===1){var d=a.type;if(Yt(d))return sn(a,d,l)}return l}function Zg(a){var l=a._reactInternals;if(l===void 0)throw typeof a.render=="function"?Error(o(188)):(a=Object.keys(a).join(","),Error(o(268,a)));return a=q(l),a===null?null:a.stateNode}function jg(a,l){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var d=a.retryLane;a.retryLane=d!==0&&d<l?d:l}}function Sf(a,l){jg(a,l),(a=a.alternate)&&jg(a,l)}function LS(a){return a=q(a),a===null?null:a.stateNode}function US(){return null}return t.attemptContinuousHydration=function(a){if(a.tag===13){var l=Kn();Ii(a,134217728,l),Sf(a,134217728)}},t.attemptHydrationAtCurrentPriority=function(a){if(a.tag===13){var l=Kn(),d=zr(a);Ii(a,d,l),Sf(a,d)}},t.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var l=a.stateNode;if(l.current.memoizedState.isDehydrated){var d=lo(l.pendingLanes);d!==0&&(yh(l,d|1),oi(l,Tn()),!(Rt&6)&&(ha(),Ki()))}break;case 13:var v=Kn();Fg(function(){return Ii(a,1,v)}),Sf(a,1)}},t.batchedUpdates=function(a,l){var d=Rt;Rt|=1;try{return a(l)}finally{Rt=d,Rt===0&&(ha(),zl&&Ki())}},t.createComponentSelector=function(a){return{$$typeof:hc,value:a}},t.createContainer=function(a,l,d,v,M,T,V){return Yg(a,l,!1,null,d,v,M,T,V)},t.createHasPseudoClassSelector=function(a){return{$$typeof:fc,value:a}},t.createHydrationContainer=function(a,l,d,v,M,T,V,j,he){return a=Yg(d,v,!0,a,M,T,V,j,he),a.context=qg(null),d=a.current,v=Kn(),M=zr(d),T=pr(v,M),T.callback=l??null,Or(d,T),a.current.lanes=M,co(a,M,v),oi(a,v),a},t.createPortal=function(a,l,d){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:v==null?null:""+v,children:a,containerInfo:l,implementation:d}},t.createRoleSelector=function(a){return{$$typeof:dc,value:a}},t.createTestNameSelector=function(a){return{$$typeof:pc,value:a}},t.createTextSelector=function(a){return{$$typeof:mc,value:a}},t.deferredUpdates=function(a){var l=Ot,d=dn.transition;try{return dn.transition=null,Ot=16,a()}finally{Ot=l,dn.transition=d}},t.discreteUpdates=function(a,l,d,v,M){var T=Ot,V=dn.transition;try{return dn.transition=null,Ot=1,a(l,d,v,M)}finally{Ot=T,dn.transition=V,Rt===0&&ha()}},t.findAllNodes=of,t.findBoundingRects=function(a,l){if(!U)throw Error(o(363));l=of(a,l),a=[];for(var d=0;d<l.length;d++)a.push(ve(l[d]));for(l=a.length-1;0<l;l--){d=a[l];for(var v=d.x,M=v+d.width,T=d.y,V=T+d.height,j=l-1;0<=j;j--)if(l!==j){var he=a[j],Pe=he.x,Ke=Pe+he.width,yt=he.y,ut=yt+he.height;if(v>=Pe&&T>=yt&&M<=Ke&&V<=ut){a.splice(l,1);break}else if(v!==Pe||d.width!==he.width||ut<T||yt>V){if(!(T!==yt||d.height!==he.height||Ke<v||Pe>M)){Pe>v&&(he.width+=Pe-v,he.x=v),Ke<M&&(he.width=M-Pe),a.splice(l,1);break}}else{yt>T&&(he.height+=yt-T,he.y=T),ut<V&&(he.height=V-yt),a.splice(l,1);break}}}return a},t.findHostInstance=Zg,t.findHostInstanceWithNoPortals=function(a){return a=H(a),a=a!==null?Y(a):null,a===null?null:a.stateNode},t.findHostInstanceWithWarning=function(a){return Zg(a)},t.flushControlled=function(a){var l=Rt;Rt|=1;var d=dn.transition,v=Ot;try{dn.transition=null,Ot=1,a()}finally{Ot=v,dn.transition=d,Rt=l,Rt===0&&(ha(),Ki())}},t.flushPassiveEffects=gs,t.flushSync=Fg,t.focusWithin=function(a,l){if(!U)throw Error(o(363));for(a=rf(a),l=Dg(a,l),l=Array.from(l),a=0;a<l.length;){var d=l[a++];if(!xe(d)){if(d.tag===5&&ze(d.stateNode))return!0;for(d=d.child;d!==null;)l.push(d),d=d.sibling}}return!1},t.getCurrentUpdatePriority=function(){return Ot},t.getFindAllNodesFailureDescription=function(a,l){if(!U)throw Error(o(363));var d=0,v=[];a=[rf(a),0];for(var M=0;M<a.length;){var T=a[M++],V=a[M++],j=l[V];if((T.tag!==5||!xe(T))&&(sf(T,j)&&(v.push(af(j)),V++,V>d&&(d=V)),V<l.length))for(T=T.child;T!==null;)a.push(T,V),T=T.sibling}if(d<l.length){for(a=[];d<l.length;d++)a.push(af(l[d]));return`findAllNodes was able to match part of the selector:
  `+(v.join(" > ")+`

No matching component was found for:
  `)+a.join(" > ")}return null},t.getPublicRootInstance=function(a){if(a=a.current,!a.child)return null;switch(a.child.tag){case 5:return te(a.child.stateNode);default:return a.child.stateNode}},t.injectIntoDevTools=function(a){if(a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:c.ReactCurrentDispatcher,findHostInstanceByFiber:LS,findFiberByHostInstance:a.findFiberByHostInstance||US,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.0.0-fc46dba67-20220329"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")a=!1;else{var l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(l.isDisabled||!l.supportsFiber)a=!0;else{try{Bl=l.inject(a),ji=l}catch{}a=!!l.checkDCE}}return a},t.isAlreadyRendering=function(){return!1},t.observeVisibleRects=function(a,l,d,v){if(!U)throw Error(o(363));a=of(a,l);var M=Ne(a,d,v).disconnect;return{disconnect:function(){M()}}},t.registerMutableSourceForHydration=function(a,l){var d=l._getVersion;d=d(l._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[l,d]:a.mutableSourceEagerHydrationData.push(l,d)},t.runWithPriority=function(a,l){var d=Ot;try{return Ot=a,l()}finally{Ot=d}},t.shouldError=function(){return null},t.shouldSuspend=function(){return!1},t.updateContainer=function(a,l,d,v){var M=l.current,T=Kn(),V=zr(M);return d=qg(d),l.context===null?l.context=d:l.pendingContext=d,l=pr(T,V),l.payload={element:a},v=v===void 0?null:v,v!==null&&(l.callback=v),Or(M,l),a=Ii(M,V,T),a!==null&&Gl(a,M,V),V},t};fx.exports=DC;var NC=fx.exports;const OC=FS(NC),am={},mx=r=>void Object.assign(am,r);function FC(r,e){function t(f,{args:p=[],attach:m,...g},y){let S=`${f[0].toUpperCase()}${f.slice(1)}`,x;if(f==="primitive"){if(g.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const _=g.object;x=Na(_,{type:f,root:y,attach:m,primitive:!0})}else{const _=am[S];if(!_)throw new Error(`R3F: ${S} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(p))throw new Error("R3F: The args prop must be an array!");x=Na(new _(...p),{type:f,root:y,attach:m,memoizedProps:{args:p}})}return x.__r3f.attach===void 0&&(x.isBufferGeometry?x.__r3f.attach="geometry":x.isMaterial&&(x.__r3f.attach="material")),S!=="inject"&&cd(x,g),x}function n(f,p){let m=!1;if(p){var g,y;(g=p.__r3f)!=null&&g.attach?ld(f,p,p.__r3f.attach):p.isObject3D&&f.isObject3D&&(f.add(p),m=!0),m||(y=f.__r3f)==null||y.objects.push(p),p.__r3f||Na(p,{}),p.__r3f.parent=f,fp(p),Oa(p)}}function i(f,p,m){let g=!1;if(p){var y,S;if((y=p.__r3f)!=null&&y.attach)ld(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){p.parent=f,p.dispatchEvent({type:"added"}),f.dispatchEvent({type:"childadded",child:p});const x=f.children.filter(A=>A!==p),_=x.indexOf(m);f.children=[...x.slice(0,_),p,...x.slice(_)],g=!0}g||(S=f.__r3f)==null||S.objects.push(p),p.__r3f||Na(p,{}),p.__r3f.parent=f,fp(p),Oa(p)}}function s(f,p,m=!1){f&&[...f].forEach(g=>o(p,g,m))}function o(f,p,m){if(p){var g,y,S;if(p.__r3f&&(p.__r3f.parent=null),(g=f.__r3f)!=null&&g.objects&&(f.__r3f.objects=f.__r3f.objects.filter(b=>b!==p)),(y=p.__r3f)!=null&&y.attach)U0(f,p,p.__r3f.attach);else if(p.isObject3D&&f.isObject3D){var x;f.remove(p),(x=p.__r3f)!=null&&x.root&&WC(Uu(p),p)}const A=(S=p.__r3f)==null?void 0:S.primitive,E=!A&&(m===void 0?p.dispose!==null:m);if(!A){var _;s((_=p.__r3f)==null?void 0:_.objects,p,E),s(p.children,p,E)}if(delete p.__r3f,E&&p.dispose&&p.type!=="Scene"){const b=()=>{try{p.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?up.unstable_scheduleCallback(up.unstable_IdlePriority,b):b()}Oa(f)}}function c(f,p,m,g){var y;const S=(y=f.__r3f)==null?void 0:y.parent;if(!S)return;const x=t(p,m,f.__r3f.root);if(f.children){for(const _ of f.children)_.__r3f&&n(x,_);f.children=f.children.filter(_=>!_.__r3f)}f.__r3f.objects.forEach(_=>n(x,_)),f.__r3f.objects=[],f.__r3f.autoRemovedBeforeAppend||o(S,f),x.parent&&(x.__r3f.autoRemovedBeforeAppend=!0),n(S,x),x.raycast&&x.__r3f.eventCount&&Uu(x).getState().internal.interaction.push(x),[g,g.alternate].forEach(_=>{_!==null&&(_.stateNode=x,_.ref&&(typeof _.ref=="function"?_.ref(x):_.ref.current=x))})}const u=()=>{};return{reconciler:OC({createInstance:t,removeChild:o,appendChild:n,appendInitialChild:n,insertBefore:i,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(f,p)=>{if(!p)return;const m=f.getState().scene;m.__r3f&&(m.__r3f.root=f,n(m,p))},removeChildFromContainer:(f,p)=>{p&&o(f.getState().scene,p)},insertInContainerBefore:(f,p,m)=>{if(!p||!m)return;const g=f.getState().scene;g.__r3f&&i(g,p,m)},getRootHostContext:()=>null,getChildHostContext:f=>f,finalizeInitialChildren(f){var p;return!!((p=f==null?void 0:f.__r3f)!=null?p:{}).handlers},prepareUpdate(f,p,m,g){var y;if(((y=f==null?void 0:f.__r3f)!=null?y:{}).primitive&&g.object&&g.object!==f)return[!0];{const{args:x=[],children:_,...A}=g,{args:E=[],children:b,...O}=m;if(!Array.isArray(x))throw new Error("R3F: the args prop must be an array!");if(x.some((D,N)=>D!==E[N]))return[!0];const I=Mx(f,A,O,!0);return I.changes.length?[!1,I]:null}},commitUpdate(f,[p,m],g,y,S,x){p?c(f,g,S,x):cd(f,m)},commitMount(f,p,m,g){var y;const S=(y=f.__r3f)!=null?y:{};f.raycast&&S.handlers&&S.eventCount&&Uu(f).getState().internal.interaction.push(f)},getPublicInstance:f=>f,prepareForCommit:()=>null,preparePortalMount:f=>Na(f.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(f){var p;const{attach:m,parent:g}=(p=f.__r3f)!=null?p:{};m&&g&&U0(g,f,m),f.isObject3D&&(f.visible=!1),Oa(f)},unhideInstance(f,p){var m;const{attach:g,parent:y}=(m=f.__r3f)!=null?m:{};g&&y&&ld(y,f,g),(f.isObject3D&&p.visible==null||p.visible)&&(f.visible=!0),Oa(f)},createTextInstance:u,hideTextInstance:u,unhideTextInstance:u,getCurrentEventPriority:()=>e?e():Va.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&$t.fun(performance.now)?performance.now:$t.fun(Date.now)?Date.now:()=>0,scheduleTimeout:$t.fun(setTimeout)?setTimeout:void 0,cancelTimeout:$t.fun(clearTimeout)?clearTimeout:void 0}),applyProps:cd}}var R0,P0;const od=r=>"colorSpace"in r||"outputColorSpace"in r,gx=()=>{var r;return(r=am.ColorManagement)!=null?r:null},vx=r=>r&&r.isOrthographicCamera,BC=r=>r&&r.hasOwnProperty("current"),Ul=typeof window<"u"&&((R0=window.document)!=null&&R0.createElement||((P0=window.navigator)==null?void 0:P0.product)==="ReactNative")?me.useLayoutEffect:me.useEffect;function _x(r){const e=me.useRef(r);return Ul(()=>void(e.current=r),[r]),e}function zC({set:r}){return Ul(()=>(r(new Promise(()=>null)),()=>r(!1)),[r]),null}let yx=class extends me.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}};yx.getDerivedStateFromError=()=>({error:!0});const xx="__default",I0=new Map,kC=r=>r&&!!r.memoized&&!!r.changes;function Sx(r){var e;const t=typeof window<"u"?(e=window.devicePixelRatio)!=null?e:2:1;return Array.isArray(r)?Math.min(Math.max(r[0],t),r[1]):r}const ko=r=>{var e;return(e=r.__r3f)==null?void 0:e.root.getState()};function Uu(r){let e=r.__r3f.root;for(;e.getState().previousRoot;)e=e.getState().previousRoot;return e}const $t={obj:r=>r===Object(r)&&!$t.arr(r)&&typeof r!="function",fun:r=>typeof r=="function",str:r=>typeof r=="string",num:r=>typeof r=="number",boo:r=>typeof r=="boolean",und:r=>r===void 0,arr:r=>Array.isArray(r),equ(r,e,{arrays:t="shallow",objects:n="reference",strict:i=!0}={}){if(typeof r!=typeof e||!!r!=!!e)return!1;if($t.str(r)||$t.num(r)||$t.boo(r))return r===e;const s=$t.obj(r);if(s&&n==="reference")return r===e;const o=$t.arr(r);if(o&&t==="reference")return r===e;if((o||s)&&r===e)return!0;let c;for(c in r)if(!(c in e))return!1;if(s&&t==="shallow"&&n==="shallow"){for(c in i?e:r)if(!$t.equ(r[c],e[c],{strict:i,objects:"reference"}))return!1}else for(c in i?e:r)if(r[c]!==e[c])return!1;if($t.und(c)){if(o&&r.length===0&&e.length===0||s&&Object.keys(r).length===0&&Object.keys(e).length===0)return!0;if(r!==e)return!1}return!0}};function HC(r){const e={nodes:{},materials:{}};return r&&r.traverse(t=>{t.name&&(e.nodes[t.name]=t),t.material&&!e.materials[t.material.name]&&(e.materials[t.material.name]=t.material)}),e}function VC(r){r.dispose&&r.type!=="Scene"&&r.dispose();for(const e in r)e.dispose==null||e.dispose(),delete r[e]}function Na(r,e){const t=r;return t.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...e},r}function hp(r,e){let t=r;if(e.includes("-")){const n=e.split("-"),i=n.pop();return t=n.reduce((s,o)=>s[o],r),{target:t,key:i}}else return{target:t,key:e}}const L0=/-\d+$/;function ld(r,e,t){if($t.str(t)){if(L0.test(t)){const s=t.replace(L0,""),{target:o,key:c}=hp(r,s);Array.isArray(o[c])||(o[c]=[])}const{target:n,key:i}=hp(r,t);e.__r3f.previousAttach=n[i],n[i]=e}else e.__r3f.previousAttach=t(r,e)}function U0(r,e,t){var n,i;if($t.str(t)){const{target:s,key:o}=hp(r,t),c=e.__r3f.previousAttach;c===void 0?delete s[o]:s[o]=c}else(n=e.__r3f)==null||n.previousAttach==null||n.previousAttach(r,e);(i=e.__r3f)==null||delete i.previousAttach}function Mx(r,{children:e,key:t,ref:n,...i},{children:s,key:o,ref:c,...u}={},h=!1){const f=r.__r3f,p=Object.entries(i),m=[];if(h){const y=Object.keys(u);for(let S=0;S<y.length;S++)i.hasOwnProperty(y[S])||p.unshift([y[S],xx+"remove"])}p.forEach(([y,S])=>{var x;if((x=r.__r3f)!=null&&x.primitive&&y==="object"||$t.equ(S,u[y]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(y))return m.push([y,S,!0,[]]);let _=[];y.includes("-")&&(_=y.split("-")),m.push([y,S,!1,_]);for(const A in i){const E=i[A];A.startsWith(`${y}-`)&&m.push([A,E,!1,A.split("-")])}});const g={...i};return f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.args&&(g.args=f.memoizedProps.args),f!=null&&f.memoizedProps&&f!=null&&f.memoizedProps.attach&&(g.attach=f.memoizedProps.attach),{memoized:g,changes:m}}function cd(r,e){var t;const n=r.__r3f,i=n==null?void 0:n.root,s=i==null||i.getState==null?void 0:i.getState(),{memoized:o,changes:c}=kC(e)?e:Mx(r,e),u=n==null?void 0:n.eventCount;r.__r3f&&(r.__r3f.memoizedProps=o);for(let m=0;m<c.length;m++){let[g,y,S,x]=c[m];if(od(r)){const b="srgb",O="srgb-linear";g==="encoding"?(g="colorSpace",y=y===3001?b:O):g==="outputEncoding"&&(g="outputColorSpace",y=y===3001?b:O)}let _=r,A=_[g];if(x.length&&(A=x.reduce((E,b)=>E[b],r),!(A&&A.set))){const[E,...b]=x.reverse();_=b.reverse().reduce((O,I)=>O[I],r),g=E}if(y===xx+"remove")if(_.constructor){let E=I0.get(_.constructor);E||(E=new _.constructor,I0.set(_.constructor,E)),y=E[g]}else y=0;if(S&&n)y?n.handlers[g]=y:delete n.handlers[g],n.eventCount=Object.keys(n.handlers).length;else if(A&&A.set&&(A.copy||A instanceof Vs)){if(Array.isArray(y))A.fromArray?A.fromArray(y):A.set(...y);else if(A.copy&&y&&y.constructor&&A.constructor===y.constructor)A.copy(y);else if(y!==void 0){var h;const E=(h=A)==null?void 0:h.isColor;!E&&A.setScalar?A.setScalar(y):A instanceof Vs&&y instanceof Vs?A.mask=y.mask:A.set(y),!gx()&&s&&!s.linear&&E&&A.convertSRGBToLinear()}}else{var f;if(_[g]=y,(f=_[g])!=null&&f.isTexture&&_[g].format===wn&&_[g].type===Mi&&s){const E=_[g];od(E)&&od(s.gl)?E.colorSpace=s.gl.outputColorSpace:E.encoding=s.gl.outputEncoding}}Oa(r)}if(n&&n.parent&&r.raycast&&u!==n.eventCount){const m=Uu(r).getState().internal,g=m.interaction.indexOf(r);g>-1&&m.interaction.splice(g,1),n.eventCount&&m.interaction.push(r)}return!(c.length===1&&c[0][0]==="onUpdate")&&c.length&&(t=r.__r3f)!=null&&t.parent&&fp(r),r}function Oa(r){var e,t;const n=(e=r.__r3f)==null||(t=e.root)==null||t.getState==null?void 0:t.getState();n&&n.internal.frames===0&&n.invalidate()}function fp(r){r.onUpdate==null||r.onUpdate(r)}function wx(r,e){r.manual||(vx(r)?(r.left=e.width/-2,r.right=e.width/2,r.top=e.height/2,r.bottom=e.height/-2):r.aspect=e.width/e.height,r.updateProjectionMatrix(),r.updateMatrixWorld())}function yu(r){return(r.eventObject||r.object).uuid+"/"+r.index+r.instanceId}function GC(){var r;const e=typeof self<"u"&&self||typeof window<"u"&&window;if(!e)return Va.DefaultEventPriority;switch((r=e.event)==null?void 0:r.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Va.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Va.ContinuousEventPriority;default:return Va.DefaultEventPriority}}function Ex(r,e,t,n){const i=t.get(e);i&&(t.delete(e),t.size===0&&(r.delete(n),i.target.releasePointerCapture(n)))}function WC(r,e){const{internal:t}=r.getState();t.interaction=t.interaction.filter(n=>n!==e),t.initialHits=t.initialHits.filter(n=>n!==e),t.hovered.forEach((n,i)=>{(n.eventObject===e||n.object===e)&&t.hovered.delete(i)}),t.capturedMap.forEach((n,i)=>{Ex(t.capturedMap,e,n,i)})}function XC(r){function e(u){const{internal:h}=r.getState(),f=u.offsetX-h.initialClick[0],p=u.offsetY-h.initialClick[1];return Math.round(Math.sqrt(f*f+p*p))}function t(u){return u.filter(h=>["Move","Over","Enter","Out","Leave"].some(f=>{var p;return(p=h.__r3f)==null?void 0:p.handlers["onPointer"+f]}))}function n(u,h){const f=r.getState(),p=new Set,m=[],g=h?h(f.internal.interaction):f.internal.interaction;for(let _=0;_<g.length;_++){const A=ko(g[_]);A&&(A.raycaster.camera=void 0)}f.previousRoot||f.events.compute==null||f.events.compute(u,f);function y(_){const A=ko(_);if(!A||!A.events.enabled||A.raycaster.camera===null)return[];if(A.raycaster.camera===void 0){var E;A.events.compute==null||A.events.compute(u,A,(E=A.previousRoot)==null?void 0:E.getState()),A.raycaster.camera===void 0&&(A.raycaster.camera=null)}return A.raycaster.camera?A.raycaster.intersectObject(_,!0):[]}let S=g.flatMap(y).sort((_,A)=>{const E=ko(_.object),b=ko(A.object);return!E||!b?_.distance-A.distance:b.events.priority-E.events.priority||_.distance-A.distance}).filter(_=>{const A=yu(_);return p.has(A)?!1:(p.add(A),!0)});f.events.filter&&(S=f.events.filter(S,f));for(const _ of S){let A=_.object;for(;A;){var x;(x=A.__r3f)!=null&&x.eventCount&&m.push({..._,eventObject:A}),A=A.parent}}if("pointerId"in u&&f.internal.capturedMap.has(u.pointerId))for(let _ of f.internal.capturedMap.get(u.pointerId).values())p.has(yu(_.intersection))||m.push(_.intersection);return m}function i(u,h,f,p){const m=r.getState();if(u.length){const g={stopped:!1};for(const y of u){const S=ko(y.object)||m,{raycaster:x,pointer:_,camera:A,internal:E}=S,b=new F(_.x,_.y,0).unproject(A),O=C=>{var H,q;return(H=(q=E.capturedMap.get(C))==null?void 0:q.has(y.eventObject))!=null?H:!1},I=C=>{const H={intersection:y,target:h.target};E.capturedMap.has(C)?E.capturedMap.get(C).set(y.eventObject,H):E.capturedMap.set(C,new Map([[y.eventObject,H]])),h.target.setPointerCapture(C)},D=C=>{const H=E.capturedMap.get(C);H&&Ex(E.capturedMap,y.eventObject,H,C)};let N={};for(let C in h){let H=h[C];typeof H!="function"&&(N[C]=H)}let R={...y,...N,pointer:_,intersections:u,stopped:g.stopped,delta:f,unprojectedPoint:b,ray:x.ray,camera:A,stopPropagation(){const C="pointerId"in h&&E.capturedMap.get(h.pointerId);if((!C||C.has(y.eventObject))&&(R.stopped=g.stopped=!0,E.hovered.size&&Array.from(E.hovered.values()).find(H=>H.eventObject===y.eventObject))){const H=u.slice(0,u.indexOf(y));s([...H,y])}},target:{hasPointerCapture:O,setPointerCapture:I,releasePointerCapture:D},currentTarget:{hasPointerCapture:O,setPointerCapture:I,releasePointerCapture:D},nativeEvent:h};if(p(R),g.stopped===!0)break}}return u}function s(u){const{internal:h}=r.getState();for(const f of h.hovered.values())if(!u.length||!u.find(p=>p.object===f.object&&p.index===f.index&&p.instanceId===f.instanceId)){const m=f.eventObject.__r3f,g=m==null?void 0:m.handlers;if(h.hovered.delete(yu(f)),m!=null&&m.eventCount){const y={...f,intersections:u};g.onPointerOut==null||g.onPointerOut(y),g.onPointerLeave==null||g.onPointerLeave(y)}}}function o(u,h){for(let f=0;f<h.length;f++){const p=h[f].__r3f;p==null||p.handlers.onPointerMissed==null||p.handlers.onPointerMissed(u)}}function c(u){switch(u){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return h=>{const{internal:f}=r.getState();"pointerId"in h&&f.capturedMap.has(h.pointerId)&&requestAnimationFrame(()=>{f.capturedMap.has(h.pointerId)&&(f.capturedMap.delete(h.pointerId),s([]))})}}return function(f){const{onPointerMissed:p,internal:m}=r.getState();m.lastEvent.current=f;const g=u==="onPointerMove",y=u==="onClick"||u==="onContextMenu"||u==="onDoubleClick",x=n(f,g?t:void 0),_=y?e(f):0;u==="onPointerDown"&&(m.initialClick=[f.offsetX,f.offsetY],m.initialHits=x.map(E=>E.eventObject)),y&&!x.length&&_<=2&&(o(f,m.interaction),p&&p(f)),g&&s(x);function A(E){const b=E.eventObject,O=b.__r3f,I=O==null?void 0:O.handlers;if(O!=null&&O.eventCount)if(g){if(I.onPointerOver||I.onPointerEnter||I.onPointerOut||I.onPointerLeave){const D=yu(E),N=m.hovered.get(D);N?N.stopped&&E.stopPropagation():(m.hovered.set(D,E),I.onPointerOver==null||I.onPointerOver(E),I.onPointerEnter==null||I.onPointerEnter(E))}I.onPointerMove==null||I.onPointerMove(E)}else{const D=I[u];D?(!y||m.initialHits.includes(b))&&(o(f,m.interaction.filter(N=>!m.initialHits.includes(N))),D(E)):y&&m.initialHits.includes(b)&&o(f,m.interaction.filter(N=>!m.initialHits.includes(N)))}}i(x,f,_,A)}}return{handlePointer:c}}const YC=["set","get","setSize","setFrameloop","setDpr","events","invalidate","advance","size","viewport"],Ax=r=>!!(r!=null&&r.render),om=me.createContext(null),qC=(r,e)=>{const t=cx((c,u)=>{const h=new F,f=new F,p=new F;function m(_=u().camera,A=f,E=u().size){const{width:b,height:O,top:I,left:D}=E,N=b/O;A.isVector3?p.copy(A):p.set(...A);const R=_.getWorldPosition(h).distanceTo(p);if(vx(_))return{width:b/_.zoom,height:O/_.zoom,top:I,left:D,factor:1,distance:R,aspect:N};{const C=_.fov*Math.PI/180,H=2*Math.tan(C/2)*R,q=H*(b/O);return{width:q,height:H,top:I,left:D,factor:b/q,distance:R,aspect:N}}}let g;const y=_=>c(A=>({performance:{...A.performance,current:_}})),S=new ye;return{set:c,get:u,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(_=1)=>r(u(),_),advance:(_,A)=>e(_,A,u()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new tm,pointer:S,mouse:S,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const _=u();g&&clearTimeout(g),_.performance.current!==_.performance.min&&y(_.performance.min),g=setTimeout(()=>y(u().performance.max),_.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:m},setEvents:_=>c(A=>({...A,events:{...A.events,..._}})),setSize:(_,A,E,b,O)=>{const I=u().camera,D={width:_,height:A,top:b||0,left:O||0,updateStyle:E};c(N=>({size:D,viewport:{...N.viewport,...m(I,f,D)}}))},setDpr:_=>c(A=>{const E=Sx(_);return{viewport:{...A.viewport,dpr:E,initialDpr:A.viewport.initialDpr||E}}}),setFrameloop:(_="always")=>{const A=u().clock;A.stop(),A.elapsedTime=0,_!=="never"&&(A.start(),A.elapsedTime=0),c(()=>({frameloop:_}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:me.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(_,A,E)=>{const b=u().internal;return b.priority=b.priority+(A>0?1:0),b.subscribers.push({ref:_,priority:A,store:E}),b.subscribers=b.subscribers.sort((O,I)=>O.priority-I.priority),()=>{const O=u().internal;O!=null&&O.subscribers&&(O.priority=O.priority-(A>0?1:0),O.subscribers=O.subscribers.filter(I=>I.ref!==_))}}}}}),n=t.getState();let i=n.size,s=n.viewport.dpr,o=n.camera;return t.subscribe(()=>{const{camera:c,size:u,viewport:h,gl:f,set:p}=t.getState();if(u.width!==i.width||u.height!==i.height||h.dpr!==s){var m;i=u,s=h.dpr,wx(c,u),f.setPixelRatio(h.dpr);const g=(m=u.updateStyle)!=null?m:typeof HTMLCanvasElement<"u"&&f.domElement instanceof HTMLCanvasElement;f.setSize(u.width,u.height,g)}c!==o&&(o=c,p(g=>({viewport:{...g.viewport,...g.viewport.getCurrentViewport(c)}})))}),t.subscribe(c=>r(c)),t};let xu,ZC=new Set,jC=new Set,JC=new Set;function ud(r,e){if(r.size)for(const{callback:t}of r.values())t(e)}function Ho(r,e){switch(r){case"before":return ud(ZC,e);case"after":return ud(jC,e);case"tail":return ud(JC,e)}}let hd,fd;function dd(r,e,t){let n=e.clock.getDelta();for(e.frameloop==="never"&&typeof r=="number"&&(n=r-e.clock.elapsedTime,e.clock.oldTime=e.clock.elapsedTime,e.clock.elapsedTime=r),hd=e.internal.subscribers,xu=0;xu<hd.length;xu++)fd=hd[xu],fd.ref.current(fd.store.getState(),n,t);return!e.internal.priority&&e.gl.render&&e.gl.render(e.scene,e.camera),e.internal.frames=Math.max(0,e.internal.frames-1),e.frameloop==="always"?1:e.internal.frames}function KC(r){let e=!1,t=!1,n,i,s;function o(h){i=requestAnimationFrame(o),e=!0,n=0,Ho("before",h),t=!0;for(const p of r.values()){var f;s=p.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((f=s.gl.xr)!=null&&f.isPresenting)&&(n+=dd(h,s))}if(t=!1,Ho("after",h),n===0)return Ho("tail",h),e=!1,cancelAnimationFrame(i)}function c(h,f=1){var p;if(!h)return r.forEach(m=>c(m.store.getState(),f));(p=h.gl.xr)!=null&&p.isPresenting||!h.internal.active||h.frameloop==="never"||(f>1?h.internal.frames=Math.min(60,h.internal.frames+f):t?h.internal.frames=2:h.internal.frames=1,e||(e=!0,requestAnimationFrame(o)))}function u(h,f=!0,p,m){if(f&&Ho("before",h),p)dd(h,p,m);else for(const g of r.values())dd(h,g.store.getState());f&&Ho("after",h)}return{loop:o,invalidate:c,advance:u}}function lm(){const r=me.useContext(om);if(!r)throw new Error("R3F: Hooks can only be used within the Canvas component!");return r}function Pr(r=t=>t,e){return lm()(r,e)}function ao(r,e=0){const t=lm(),n=t.getState().internal.subscribe,i=_x(r);return Ul(()=>n(i,e,t),[e,n,t]),null}const D0=new WeakMap;function Tx(r,e){return function(t,...n){let i=D0.get(t);return i||(i=new t,D0.set(t,i)),r&&r(i),Promise.all(n.map(s=>new Promise((o,c)=>i.load(s,u=>{u.scene&&Object.assign(u,HC(u.scene)),o(u)},e,u=>c(new Error(`Could not load ${s}: ${u==null?void 0:u.message}`))))))}}function Ja(r,e,t,n){const i=Array.isArray(e)?e:[e],s=IC(Tx(t,n),[r,...i],{equal:$t.equ});return Array.isArray(e)?s:s[0]}Ja.preload=function(r,e,t){const n=Array.isArray(e)?e:[e];return LC(Tx(t),[r,...n])};Ja.clear=function(r,e){const t=Array.isArray(e)?e:[e];return UC([r,...t])};const Ka=new Map,{invalidate:N0,advance:O0}=KC(Ka),{reconciler:yl,applyProps:$r}=FC(Ka,GC),Da={objects:"shallow",strict:!1},QC=(r,e)=>{const t=typeof r=="function"?r(e):r;return Ax(t)?t:new Op({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...r})};function $C(r,e){const t=typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement;if(e){const{width:n,height:i,top:s,left:o,updateStyle:c=t}=e;return{width:n,height:i,top:s,left:o,updateStyle:c}}else if(typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement&&r.parentElement){const{width:n,height:i,top:s,left:o}=r.parentElement.getBoundingClientRect();return{width:n,height:i,top:s,left:o,updateStyle:t}}else if(typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas)return{width:r.width,height:r.height,top:0,left:0,updateStyle:t};return{width:0,height:0,top:0,left:0}}function eR(r){const e=Ka.get(r),t=e==null?void 0:e.fiber,n=e==null?void 0:e.store;e&&console.warn("R3F.createRoot should only be called once!");const i=typeof reportError=="function"?reportError:console.error,s=n||qC(N0,O0),o=t||yl.createContainer(s,Va.ConcurrentRoot,null,!1,null,"",i,null);e||Ka.set(r,{fiber:o,store:s});let c,u=!1,h;return{configure(f={}){let{gl:p,size:m,scene:g,events:y,onCreated:S,shadows:x=!1,linear:_=!1,flat:A=!1,legacy:E=!1,orthographic:b=!1,frameloop:O="always",dpr:I=[1,2],performance:D,raycaster:N,camera:R,onPointerMissed:C}=f,H=s.getState(),q=H.gl;H.gl||H.set({gl:q=QC(p,r)});let W=H.raycaster;W||H.set({raycaster:W=new sm});const{params:Y,...ie}=N||{};if($t.equ(ie,W,Da)||$r(W,{...ie}),$t.equ(Y,W.params,Da)||$r(W,{params:{...W.params,...Y}}),!H.camera||H.camera===h&&!$t.equ(h,R,Da)){h=R;const K=R instanceof El,de=K?R:b?new no(0,0,0,0,.1,1e3):new Pn(75,0,.1,1e3);K||(de.position.z=5,R&&($r(de,R),("aspect"in R||"left"in R||"right"in R||"bottom"in R||"top"in R)&&(de.manual=!0,de.updateProjectionMatrix())),!H.camera&&!(R!=null&&R.rotation)&&de.lookAt(0,0,0)),H.set({camera:de}),W.camera=de}if(!H.scene){let K;g!=null&&g.isScene?K=g:(K=new bl,g&&$r(K,g)),H.set({scene:Na(K)})}if(!H.xr){var te;const K=(Be,oe)=>{const Ee=s.getState();Ee.frameloop!=="never"&&O0(Be,!0,Ee,oe)},de=()=>{const Be=s.getState();Be.gl.xr.enabled=Be.gl.xr.isPresenting,Be.gl.xr.setAnimationLoop(Be.gl.xr.isPresenting?K:null),Be.gl.xr.isPresenting||N0(Be)},Re={connect(){const Be=s.getState().gl;Be.xr.addEventListener("sessionstart",de),Be.xr.addEventListener("sessionend",de)},disconnect(){const Be=s.getState().gl;Be.xr.removeEventListener("sessionstart",de),Be.xr.removeEventListener("sessionend",de)}};typeof((te=q.xr)==null?void 0:te.addEventListener)=="function"&&Re.connect(),H.set({xr:Re})}if(q.shadowMap){const K=q.shadowMap.enabled,de=q.shadowMap.type;if(q.shadowMap.enabled=!!x,$t.boo(x))q.shadowMap.type=Yo;else if($t.str(x)){var Ae;const Re={basic:Q0,percentage:Hu,soft:Yo,variance:Gi};q.shadowMap.type=(Ae=Re[x])!=null?Ae:Yo}else $t.obj(x)&&Object.assign(q.shadowMap,x);(K!==q.shadowMap.enabled||de!==q.shadowMap.type)&&(q.shadowMap.needsUpdate=!0)}const X=gx();X&&("enabled"in X?X.enabled=!E:"legacyMode"in X&&(X.legacyMode=E)),u||$r(q,{outputEncoding:_?3e3:3001,toneMapping:A?lr:mp}),H.legacy!==E&&H.set(()=>({legacy:E})),H.linear!==_&&H.set(()=>({linear:_})),H.flat!==A&&H.set(()=>({flat:A})),p&&!$t.fun(p)&&!Ax(p)&&!$t.equ(p,q,Da)&&$r(q,p),y&&!H.events.handlers&&H.set({events:y(s)});const re=$C(r,m);return $t.equ(re,H.size,Da)||H.setSize(re.width,re.height,re.updateStyle,re.top,re.left),I&&H.viewport.dpr!==Sx(I)&&H.setDpr(I),H.frameloop!==O&&H.setFrameloop(O),H.onPointerMissed||H.set({onPointerMissed:C}),D&&!$t.equ(D,H.performance,Da)&&H.set(K=>({performance:{...K.performance,...D}})),c=S,u=!0,this},render(f){return u||this.configure(),yl.updateContainer(ke.jsx(tR,{store:s,children:f,onCreated:c,rootElement:r}),o,null,()=>{}),s},unmount(){bx(r)}}}function tR({store:r,children:e,onCreated:t,rootElement:n}){return Ul(()=>{const i=r.getState();i.set(s=>({internal:{...s.internal,active:!0}})),t&&t(i),r.getState().events.connected||i.events.connect==null||i.events.connect(n)},[]),ke.jsx(om.Provider,{value:r,children:e})}function bx(r,e){const t=Ka.get(r),n=t==null?void 0:t.fiber;if(n){const i=t==null?void 0:t.store.getState();i&&(i.internal.active=!1),yl.updateContainer(null,n,null,()=>{i&&setTimeout(()=>{try{var s,o,c,u;i.events.disconnect==null||i.events.disconnect(),(s=i.gl)==null||(o=s.renderLists)==null||o.dispose==null||o.dispose(),(c=i.gl)==null||c.forceContextLoss==null||c.forceContextLoss(),(u=i.gl)!=null&&u.xr&&i.xr.disconnect(),VC(i),Ka.delete(r)}catch{}},500)})}}function nR(r,e,t){return ke.jsx(iR,{children:r,container:e,state:t},e.uuid)}function iR({state:r={},children:e,container:t}){const{events:n,size:i,...s}=r,o=lm(),[c]=me.useState(()=>new sm),[u]=me.useState(()=>new ye),h=me.useCallback((p,m)=>{const g={...p};Object.keys(p).forEach(S=>{(YC.includes(S)||p[S]!==m[S]&&m[S])&&delete g[S]});let y;if(m&&i){const S=m.camera;y=p.viewport.getCurrentViewport(S,new F,i),S!==p.camera&&wx(S,i)}return{...g,scene:t,raycaster:c,pointer:u,mouse:u,previousRoot:o,events:{...p.events,...m==null?void 0:m.events,...n},size:{...p.size,...i},viewport:{...p.viewport,...y},...s}},[r]),[f]=me.useState(()=>{const p=o.getState();return cx((g,y)=>({...p,scene:t,raycaster:c,pointer:u,mouse:u,previousRoot:o,events:{...p.events,...n},size:{...p.size,...i},...s,set:g,get:y,setEvents:S=>g(x=>({...x,events:{...x.events,...S}}))}))});return me.useEffect(()=>{const p=o.subscribe(m=>f.setState(g=>h(m,g)));return()=>{p()}},[h]),me.useEffect(()=>{f.setState(p=>h(o.getState(),p))},[h]),me.useEffect(()=>()=>{f.destroy()},[]),ke.jsx(ke.Fragment,{children:yl.createPortal(ke.jsx(om.Provider,{value:f,children:e}),f,null)})}yl.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:me.version});const pd={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function rR(r){const{handlePointer:e}=XC(r);return{priority:1,enabled:!0,compute(t,n,i){n.pointer.set(t.offsetX/n.size.width*2-1,-(t.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(pd).reduce((t,n)=>({...t,[n]:e(n)}),{}),update:()=>{var t;const{events:n,internal:i}=r.getState();(t=i.lastEvent)!=null&&t.current&&n.handlers&&n.handlers.onPointerMove(i.lastEvent.current)},connect:t=>{var n;const{set:i,events:s}=r.getState();s.disconnect==null||s.disconnect(),i(o=>({events:{...o.events,connected:t}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([o,c])=>{const[u,h]=pd[o];t.addEventListener(u,c,{passive:h})})},disconnect:()=>{const{set:t,events:n}=r.getState();if(n.connected){var i;Object.entries((i=n.handlers)!=null?i:[]).forEach(([s,o])=>{if(n&&n.connected instanceof HTMLElement){const[c]=pd[s];n.connected.removeEventListener(c,o)}}),t(s=>({events:{...s.events,connected:void 0}}))}}}}function F0(r,e){let t;return(...n)=>{window.clearTimeout(t),t=window.setTimeout(()=>r(...n),e)}}function sR({debounce:r,scroll:e,polyfill:t,offsetSize:n}={debounce:0,scroll:!1,offsetSize:!1}){const i=t||(typeof window>"u"?class{}:window.ResizeObserver);if(!i)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[s,o]=me.useState({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),c=me.useRef({element:null,scrollContainers:null,resizeObserver:null,lastBounds:s,orientationHandler:null}),u=r?typeof r=="number"?r:r.scroll:null,h=r?typeof r=="number"?r:r.resize:null,f=me.useRef(!1);me.useEffect(()=>(f.current=!0,()=>void(f.current=!1)));const[p,m,g]=me.useMemo(()=>{const _=()=>{if(!c.current.element)return;const{left:A,top:E,width:b,height:O,bottom:I,right:D,x:N,y:R}=c.current.element.getBoundingClientRect(),C={left:A,top:E,width:b,height:O,bottom:I,right:D,x:N,y:R};c.current.element instanceof HTMLElement&&n&&(C.height=c.current.element.offsetHeight,C.width=c.current.element.offsetWidth),Object.freeze(C),f.current&&!cR(c.current.lastBounds,C)&&o(c.current.lastBounds=C)};return[_,h?F0(_,h):_,u?F0(_,u):_]},[o,n,u,h]);function y(){c.current.scrollContainers&&(c.current.scrollContainers.forEach(_=>_.removeEventListener("scroll",g,!0)),c.current.scrollContainers=null),c.current.resizeObserver&&(c.current.resizeObserver.disconnect(),c.current.resizeObserver=null),c.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",c.current.orientationHandler))}function S(){c.current.element&&(c.current.resizeObserver=new i(g),c.current.resizeObserver.observe(c.current.element),e&&c.current.scrollContainers&&c.current.scrollContainers.forEach(_=>_.addEventListener("scroll",g,{capture:!0,passive:!0})),c.current.orientationHandler=()=>{g()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",c.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",c.current.orientationHandler))}const x=_=>{!_||_===c.current.element||(y(),c.current.element=_,c.current.scrollContainers=Cx(_),S())};return oR(g,!!e),aR(m),me.useEffect(()=>{y(),S()},[e,g,m]),me.useEffect(()=>y,[]),[x,s,p]}function aR(r){me.useEffect(()=>{const e=r;return window.addEventListener("resize",e),()=>void window.removeEventListener("resize",e)},[r])}function oR(r,e){me.useEffect(()=>{if(e){const t=r;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",t,!0)}},[r,e])}function Cx(r){const e=[];if(!r||r===document.body)return e;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(r);return[t,n,i].some(s=>s==="auto"||s==="scroll")&&e.push(r),[...e,...Cx(r.parentElement)]}const lR=["x","y","top","bottom","left","right","width","height"],cR=(r,e)=>lR.every(t=>r[t]===e[t]);var uR=Object.defineProperty,hR=Object.defineProperties,fR=Object.getOwnPropertyDescriptors,B0=Object.getOwnPropertySymbols,dR=Object.prototype.hasOwnProperty,pR=Object.prototype.propertyIsEnumerable,z0=(r,e,t)=>e in r?uR(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,k0=(r,e)=>{for(var t in e||(e={}))dR.call(e,t)&&z0(r,t,e[t]);if(B0)for(var t of B0(e))pR.call(e,t)&&z0(r,t,e[t]);return r},mR=(r,e)=>hR(r,fR(e)),H0,V0;typeof window<"u"&&((H0=window.document)!=null&&H0.createElement||((V0=window.navigator)==null?void 0:V0.product)==="ReactNative")?me.useLayoutEffect:me.useEffect;function Rx(r,e,t){if(!r)return;if(t(r)===!0)return r;let n=r.child;for(;n;){const i=Rx(n,e,t);if(i)return i;n=n.sibling}}function Px(r){try{return Object.defineProperties(r,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return r}}const G0=console.error;console.error=function(){const r=[...arguments].join("");if(r!=null&&r.startsWith("Warning:")&&r.includes("useContext")){console.error=G0;return}return G0.apply(this,arguments)};const cm=Px(me.createContext(null));class Ix extends me.Component{render(){return me.createElement(cm.Provider,{value:this._reactInternals},this.props.children)}}function gR(){const r=me.useContext(cm);if(r===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const e=me.useId();return me.useMemo(()=>{for(const n of[r,r==null?void 0:r.alternate]){if(!n)continue;const i=Rx(n,!1,s=>{let o=s.memoizedState;for(;o;){if(o.memoizedState===e)return!0;o=o.next}});if(i)return i}},[r,e])}function vR(){const r=gR(),[e]=me.useState(()=>new Map);e.clear();let t=r;for(;t;){if(t.type&&typeof t.type=="object"){const i=t.type._context===void 0&&t.type.Provider===t.type?t.type:t.type._context;i&&i!==cm&&!e.has(i)&&e.set(i,me.useContext(Px(i)))}t=t.return}return e}function _R(){const r=vR();return me.useMemo(()=>Array.from(r.keys()).reduce((e,t)=>n=>me.createElement(e,null,me.createElement(t.Provider,mR(k0({},n),{value:r.get(t)}))),e=>me.createElement(Ix,k0({},e))),[r])}const yR=me.forwardRef(function({children:e,fallback:t,resize:n,style:i,gl:s,events:o=rR,eventSource:c,eventPrefix:u,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:S,performance:x,raycaster:_,camera:A,scene:E,onPointerMissed:b,onCreated:O,...I},D){me.useMemo(()=>mx(bC),[]);const N=_R(),[R,C]=sR({scroll:!0,debounce:{scroll:50,resize:0},...n}),H=me.useRef(null),q=me.useRef(null);me.useImperativeHandle(D,()=>H.current);const W=_x(b),[Y,ie]=me.useState(!1),[te,Ae]=me.useState(!1);if(Y)throw Y;if(te)throw te;const X=me.useRef(null);Ul(()=>{const K=H.current;C.width>0&&C.height>0&&K&&(X.current||(X.current=eR(K)),X.current.configure({gl:s,events:o,shadows:h,linear:f,flat:p,legacy:m,orthographic:g,frameloop:y,dpr:S,performance:x,raycaster:_,camera:A,scene:E,size:C,onPointerMissed:(...de)=>W.current==null?void 0:W.current(...de),onCreated:de=>{de.events.connect==null||de.events.connect(c?BC(c)?c.current:c:q.current),u&&de.setEvents({compute:(Re,Be)=>{const oe=Re[u+"X"],Ee=Re[u+"Y"];Be.pointer.set(oe/Be.size.width*2-1,-(Ee/Be.size.height)*2+1),Be.raycaster.setFromCamera(Be.pointer,Be.camera)}}),O==null||O(de)}}),X.current.render(ke.jsx(N,{children:ke.jsx(yx,{set:Ae,children:ke.jsx(me.Suspense,{fallback:ke.jsx(zC,{set:ie}),children:e??null})})})))}),me.useEffect(()=>{const K=H.current;if(K)return()=>bx(K)},[]);const re=c?"none":"auto";return ke.jsx("div",{ref:q,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:re,...i},...I,children:ke.jsx("div",{ref:R,style:{width:"100%",height:"100%"},children:ke.jsx("canvas",{ref:H,style:{display:"block"},children:t})})})}),xR=me.forwardRef(function(e,t){return ke.jsx(Ix,{children:ke.jsx(yR,{...e,ref:t})})});function Qa(){return Qa=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Qa.apply(null,arguments)}const mh=parseInt(Sl.replace(/\D+/g,"")),Lx=mh>=125?"uv1":"uv2";var Ni=Uint8Array,ts=Uint16Array,dp=Uint32Array,Ux=new Ni([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Dx=new Ni([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),SR=new Ni([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Nx=function(r,e){for(var t=new ts(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new dp(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},Ox=Nx(Ux,2),Fx=Ox[0],MR=Ox[1];Fx[28]=258,MR[258]=28;var wR=Nx(Dx,0),ER=wR[0],pp=new ts(32768);for(var en=0;en<32768;++en){var Kr=(en&43690)>>>1|(en&21845)<<1;Kr=(Kr&52428)>>>2|(Kr&13107)<<2,Kr=(Kr&61680)>>>4|(Kr&3855)<<4,pp[en]=((Kr&65280)>>>8|(Kr&255)<<8)>>>1}var Ko=function(r,e,t){for(var n=r.length,i=0,s=new ts(e);i<n;++i)++s[r[i]-1];var o=new ts(e);for(i=0;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var c;if(t){c=new ts(1<<e);var u=15-e;for(i=0;i<n;++i)if(r[i])for(var h=i<<4|r[i],f=e-r[i],p=o[r[i]-1]++<<f,m=p|(1<<f)-1;p<=m;++p)c[pp[p]>>>u]=h}else for(c=new ts(n),i=0;i<n;++i)r[i]&&(c[i]=pp[o[r[i]-1]++]>>>15-r[i]);return c},Dl=new Ni(288);for(var en=0;en<144;++en)Dl[en]=8;for(var en=144;en<256;++en)Dl[en]=9;for(var en=256;en<280;++en)Dl[en]=7;for(var en=280;en<288;++en)Dl[en]=8;var Bx=new Ni(32);for(var en=0;en<32;++en)Bx[en]=5;var AR=Ko(Dl,9,1),TR=Ko(Bx,5,1),md=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Vi=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},gd=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},bR=function(r){return(r/8|0)+(r&7&&1)},CR=function(r,e,t){(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof ts?ts:r instanceof dp?dp:Ni)(t-e);return n.set(r.subarray(e,t)),n},RR=function(r,e,t){var n=r.length;if(!n||t&&!t.l&&n<5)return e||new Ni(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new Ni(n*3));var o=function(Te){var be=e.length;if(Te>be){var ot=new Ni(Math.max(be*2,Te));ot.set(e),e=ot}},c=t.f||0,u=t.p||0,h=t.b||0,f=t.l,p=t.d,m=t.m,g=t.n,y=n*8;do{if(!f){t.f=c=Vi(r,u,1);var S=Vi(r,u+1,3);if(u+=3,S)if(S==1)f=AR,p=TR,m=9,g=5;else if(S==2){var E=Vi(r,u,31)+257,b=Vi(r,u+10,15)+4,O=E+Vi(r,u+5,31)+1;u+=14;for(var I=new Ni(O),D=new Ni(19),N=0;N<b;++N)D[SR[N]]=Vi(r,u+N*3,7);u+=b*3;for(var R=md(D),C=(1<<R)-1,H=Ko(D,R,1),N=0;N<O;){var q=H[Vi(r,u,C)];u+=q&15;var x=q>>>4;if(x<16)I[N++]=x;else{var W=0,Y=0;for(x==16?(Y=3+Vi(r,u,3),u+=2,W=I[N-1]):x==17?(Y=3+Vi(r,u,7),u+=3):x==18&&(Y=11+Vi(r,u,127),u+=7);Y--;)I[N++]=W}}var ie=I.subarray(0,E),te=I.subarray(E);m=md(ie),g=md(te),f=Ko(ie,m,1),p=Ko(te,g,1)}else throw"invalid block type";else{var x=bR(u)+4,_=r[x-4]|r[x-3]<<8,A=x+_;if(A>n){if(s)throw"unexpected EOF";break}i&&o(h+_),e.set(r.subarray(x,A),h),t.b=h+=_,t.p=u=A*8;continue}if(u>y){if(s)throw"unexpected EOF";break}}i&&o(h+131072);for(var Ae=(1<<m)-1,X=(1<<g)-1,re=u;;re=u){var W=f[gd(r,u)&Ae],K=W>>>4;if(u+=W&15,u>y){if(s)throw"unexpected EOF";break}if(!W)throw"invalid length/literal";if(K<256)e[h++]=K;else if(K==256){re=u,f=null;break}else{var de=K-254;if(K>264){var N=K-257,Re=Ux[N];de=Vi(r,u,(1<<Re)-1)+Fx[N],u+=Re}var Be=p[gd(r,u)&X],oe=Be>>>4;if(!Be)throw"invalid distance";u+=Be&15;var te=ER[oe];if(oe>3){var Re=Dx[oe];te+=gd(r,u)&(1<<Re)-1,u+=Re}if(u>y){if(s)throw"unexpected EOF";break}i&&o(h+131072);for(var Ee=h+de;h<Ee;h+=4)e[h]=e[h-te],e[h+1]=e[h+1-te],e[h+2]=e[h+2-te],e[h+3]=e[h+3-te];h=Ee}}t.l=f,t.p=re,t.b=h,f&&(c=1,t.m=m,t.d=p,t.n=g)}while(!c);return h==e.length?e:CR(e,0,h)},PR=new Ni(0),IR=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Su(r,e){return RR((IR(r),r.subarray(2,-4)),e)}var LR=typeof TextDecoder<"u"&&new TextDecoder,UR=0;try{LR.decode(PR,{stream:!0}),UR=1}catch{}const DR=r=>r&&r.isCubeTexture;class NR extends tn{constructor(e,t){var n,i;const s=DR(e),c=((i=s?(n=e.image[0])==null?void 0:n.width:e.image.width)!=null?i:1024)/4,u=Math.floor(Math.log2(c)),h=Math.pow(2,u),f=3*Math.max(h,16*7),p=4*h,m=[s?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/f}`,`#define CUBEUV_TEXEL_HEIGHT ${1/p}`,`#define CUBEUV_MAX_MIP ${u}.0`],g=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,y=m.join(`
`)+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${mh>=154?"colorspace_fragment":"encodings_fragment"}>
        }
        `,S={map:{value:e},height:{value:(t==null?void 0:t.height)||15},radius:{value:(t==null?void 0:t.radius)||100}},x=new Rl(1,16),_=new zn({uniforms:S,fragmentShader:y,vertexShader:g,side:Xi});super(x,_)}set radius(e){this.material.uniforms.radius.value=e}get radius(){return this.material.uniforms.radius.value}set height(e){this.material.uniforms.height.value=e}get height(){return this.material.uniforms.height.value}}const OR={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},FR={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `};class BR extends Kp{constructor(e){super(e),this.type=Bn}parse(e){const o=function(N,R){switch(N){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(R||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(R||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(R||""))}},f=`
`,p=function(N,R,C){R=R||1024;let q=N.pos,W=-1,Y=0,ie="",te=String.fromCharCode.apply(null,new Uint16Array(N.subarray(q,q+128)));for(;0>(W=te.indexOf(f))&&Y<R&&q<N.byteLength;)ie+=te,Y+=te.length,q+=128,te+=String.fromCharCode.apply(null,new Uint16Array(N.subarray(q,q+128)));return-1<W?(N.pos+=Y+W+1,ie+te.slice(0,W)):!1},m=function(N){const R=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,H=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,q=/^\s*FORMAT=(\S+)\s*$/,W=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,Y={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let ie,te;for((N.pos>=N.byteLength||!(ie=p(N)))&&o(1,"no header found"),(te=ie.match(R))||o(3,"bad initial token"),Y.valid|=1,Y.programtype=te[1],Y.string+=ie+`
`;ie=p(N),ie!==!1;){if(Y.string+=ie+`
`,ie.charAt(0)==="#"){Y.comments+=ie+`
`;continue}if((te=ie.match(C))&&(Y.gamma=parseFloat(te[1])),(te=ie.match(H))&&(Y.exposure=parseFloat(te[1])),(te=ie.match(q))&&(Y.valid|=2,Y.format=te[1]),(te=ie.match(W))&&(Y.valid|=4,Y.height=parseInt(te[1],10),Y.width=parseInt(te[2],10)),Y.valid&2&&Y.valid&4)break}return Y.valid&2||o(3,"missing format specifier"),Y.valid&4||o(3,"missing image size specifier"),Y},g=function(N,R,C){const H=R;if(H<8||H>32767||N[0]!==2||N[1]!==2||N[2]&128)return new Uint8Array(N);H!==(N[2]<<8|N[3])&&o(3,"wrong scanline width");const q=new Uint8Array(4*R*C);q.length||o(4,"unable to allocate buffer space");let W=0,Y=0;const ie=4*H,te=new Uint8Array(4),Ae=new Uint8Array(ie);let X=C;for(;X>0&&Y<N.byteLength;){Y+4>N.byteLength&&o(1),te[0]=N[Y++],te[1]=N[Y++],te[2]=N[Y++],te[3]=N[Y++],(te[0]!=2||te[1]!=2||(te[2]<<8|te[3])!=H)&&o(3,"bad rgbe scanline format");let re=0,K;for(;re<ie&&Y<N.byteLength;){K=N[Y++];const Re=K>128;if(Re&&(K-=128),(K===0||re+K>ie)&&o(3,"bad scanline data"),Re){const Be=N[Y++];for(let oe=0;oe<K;oe++)Ae[re++]=Be}else Ae.set(N.subarray(Y,Y+K),re),re+=K,Y+=K}const de=H;for(let Re=0;Re<de;Re++){let Be=0;q[W]=Ae[Re+Be],Be+=H,q[W+1]=Ae[Re+Be],Be+=H,q[W+2]=Ae[Re+Be],Be+=H,q[W+3]=Ae[Re+Be],W+=4}X--}return q},y=function(N,R,C,H){const q=N[R+3],W=Math.pow(2,q-128)/255;C[H+0]=N[R+0]*W,C[H+1]=N[R+1]*W,C[H+2]=N[R+2]*W,C[H+3]=1},S=function(N,R,C,H){const q=N[R+3],W=Math.pow(2,q-128)/255;C[H+0]=Os.toHalfFloat(Math.min(N[R+0]*W,65504)),C[H+1]=Os.toHalfFloat(Math.min(N[R+1]*W,65504)),C[H+2]=Os.toHalfFloat(Math.min(N[R+2]*W,65504)),C[H+3]=Os.toHalfFloat(1)},x=new Uint8Array(e);x.pos=0;const _=m(x),A=_.width,E=_.height,b=g(x.subarray(x.pos),A,E);let O,I,D;switch(this.type){case mn:D=b.length/4;const N=new Float32Array(D*4);for(let C=0;C<D;C++)y(b,C*4,N,C*4);O=N,I=mn;break;case Bn:D=b.length/4;const R=new Uint16Array(D*4);for(let C=0;C<D;C++)S(b,C*4,R,C*4);O=R,I=Bn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:A,height:E,data:O,header:_.string,gamma:_.gamma,exposure:_.exposure,type:I}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,c){switch(o.type){case mn:case Bn:"colorSpace"in o?o.colorSpace="srgb-linear":o.encoding=3e3,o.minFilter=Xt,o.magFilter=Xt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,c)}return super.load(e,s,n,i)}}const Vo=mh>=152;class zR extends Kp{constructor(e){super(e),this.type=Bn}parse(e){const R=Math.pow(2.7182818,2.2);function C(P,w){for(var L=0,B=0;B<65536;++B)(B==0||P[B>>3]&1<<(B&7))&&(w[L++]=B);for(var z=L-1;L<65536;)w[L++]=0;return z}function H(P){for(var w=0;w<16384;w++)P[w]={},P[w].len=0,P[w].lit=0,P[w].p=null}const q={l:0,c:0,lc:0};function W(P,w,L,B,z){for(;L<P;)w=w<<8|At(B,z),L+=8;L-=P,q.l=w>>L&(1<<P)-1,q.c=w,q.lc=L}const Y=new Array(59);function ie(P){for(var w=0;w<=58;++w)Y[w]=0;for(var w=0;w<65537;++w)Y[P[w]]+=1;for(var L=0,w=58;w>0;--w){var B=L+Y[w]>>1;Y[w]=L,L=B}for(var w=0;w<65537;++w){var z=P[w];z>0&&(P[w]=z|Y[z]++<<6)}}function te(P,w,L,B,z,k,ee){for(var ne=L,le=0,ue=0;z<=k;z++){if(ne.value-L.value>B)return!1;W(6,le,ue,P,ne);var ge=q.l;if(le=q.c,ue=q.lc,ee[z]=ge,ge==63){if(ne.value-L.value>B)throw"Something wrong with hufUnpackEncTable";W(8,le,ue,P,ne);var fe=q.l+6;if(le=q.c,ue=q.lc,z+fe>k+1)throw"Something wrong with hufUnpackEncTable";for(;fe--;)ee[z++]=0;z--}else if(ge>=59){var fe=ge-59+2;if(z+fe>k+1)throw"Something wrong with hufUnpackEncTable";for(;fe--;)ee[z++]=0;z--}}ie(ee)}function Ae(P){return P&63}function X(P){return P>>6}function re(P,w,L,B){for(;w<=L;w++){var z=X(P[w]),k=Ae(P[w]);if(z>>k)throw"Invalid table entry";if(k>14){var ee=B[z>>k-14];if(ee.len)throw"Invalid table entry";if(ee.lit++,ee.p){var ne=ee.p;ee.p=new Array(ee.lit);for(var le=0;le<ee.lit-1;++le)ee.p[le]=ne[le]}else ee.p=new Array(1);ee.p[ee.lit-1]=w}else if(k)for(var ue=0,le=1<<14-k;le>0;le--){var ee=B[(z<<14-k)+ue];if(ee.len||ee.p)throw"Invalid table entry";ee.len=k,ee.lit=w,ue++}}return!0}const K={c:0,lc:0};function de(P,w,L,B){P=P<<8|At(L,B),w+=8,K.c=P,K.lc=w}const Re={c:0,lc:0};function Be(P,w,L,B,z,k,ee,ne,le,ue){if(P==w){B<8&&(de(L,B,z,ee),L=K.c,B=K.lc),B-=8;var ge=L>>B,ge=new Uint8Array([ge])[0];if(le.value+ge>ue)return!1;for(var fe=ne[le.value-1];ge-- >0;)ne[le.value++]=fe}else if(le.value<ue)ne[le.value++]=P;else return!1;Re.c=L,Re.lc=B}function oe(P){return P&65535}function Ee(P){var w=oe(P);return w>32767?w-65536:w}const Te={a:0,b:0};function be(P,w){var L=Ee(P),B=Ee(w),z=B,k=L+(z&1)+(z>>1),ee=k,ne=k-z;Te.a=ee,Te.b=ne}function ot(P,w){var L=oe(P),B=oe(w),z=L-(B>>1)&65535,k=B+z-32768&65535;Te.a=k,Te.b=z}function gt(P,w,L,B,z,k,ee){for(var ne=ee<16384,le=L>z?z:L,ue=1,ge;ue<=le;)ue<<=1;for(ue>>=1,ge=ue,ue>>=1;ue>=1;){for(var fe=0,Ze=fe+k*(z-ge),Ue=k*ue,He=k*ge,tt=B*ue,ct=B*ge,Je,Oe,ht,je;fe<=Ze;fe+=He){for(var vt=fe,Gt=fe+B*(L-ge);vt<=Gt;vt+=ct){var mt=vt+tt,Wt=vt+Ue,Dt=Wt+tt;ne?(be(P[vt+w],P[Wt+w]),Je=Te.a,ht=Te.b,be(P[mt+w],P[Dt+w]),Oe=Te.a,je=Te.b,be(Je,Oe),P[vt+w]=Te.a,P[mt+w]=Te.b,be(ht,je),P[Wt+w]=Te.a,P[Dt+w]=Te.b):(ot(P[vt+w],P[Wt+w]),Je=Te.a,ht=Te.b,ot(P[mt+w],P[Dt+w]),Oe=Te.a,je=Te.b,ot(Je,Oe),P[vt+w]=Te.a,P[mt+w]=Te.b,ot(ht,je),P[Wt+w]=Te.a,P[Dt+w]=Te.b)}if(L&ue){var Wt=vt+Ue;ne?be(P[vt+w],P[Wt+w]):ot(P[vt+w],P[Wt+w]),Je=Te.a,P[Wt+w]=Te.b,P[vt+w]=Je}}if(z&ue)for(var vt=fe,Gt=fe+B*(L-ge);vt<=Gt;vt+=ct){var mt=vt+tt;ne?be(P[vt+w],P[mt+w]):ot(P[vt+w],P[mt+w]),Je=Te.a,P[mt+w]=Te.b,P[vt+w]=Je}ge=ue,ue>>=1}return fe}function $(P,w,L,B,z,k,ee,ne,le,ue){for(var ge=0,fe=0,Ze=ne,Ue=Math.trunc(z.value+(k+7)/8);z.value<Ue;)for(de(ge,fe,L,z),ge=K.c,fe=K.lc;fe>=14;){var He=ge>>fe-14&16383,tt=w[He];if(tt.len)fe-=tt.len,Be(tt.lit,ee,ge,fe,L,B,z,le,ue,Ze),ge=Re.c,fe=Re.lc;else{if(!tt.p)throw"hufDecode issues";var ct;for(ct=0;ct<tt.lit;ct++){for(var Je=Ae(P[tt.p[ct]]);fe<Je&&z.value<Ue;)de(ge,fe,L,z),ge=K.c,fe=K.lc;if(fe>=Je&&X(P[tt.p[ct]])==(ge>>fe-Je&(1<<Je)-1)){fe-=Je,Be(tt.p[ct],ee,ge,fe,L,B,z,le,ue,Ze),ge=Re.c,fe=Re.lc;break}}if(ct==tt.lit)throw"hufDecode issues"}}var Oe=8-k&7;for(ge>>=Oe,fe-=Oe;fe>0;){var tt=w[ge<<14-fe&16383];if(tt.len)fe-=tt.len,Be(tt.lit,ee,ge,fe,L,B,z,le,ue,Ze),ge=Re.c,fe=Re.lc;else throw"hufDecode issues"}return!0}function dt(P,w,L,B,z,k){var ee={value:0},ne=L.value,le=st(w,L),ue=st(w,L);L.value+=4;var ge=st(w,L);if(L.value+=4,le<0||le>=65537||ue<0||ue>=65537)throw"Something wrong with HUF_ENCSIZE";var fe=new Array(65537),Ze=new Array(16384);H(Ze);var Ue=B-(L.value-ne);if(te(P,w,L,Ue,le,ue,fe),ge>8*(B-(L.value-ne)))throw"Something wrong with hufUncompress";re(fe,le,ue,Ze),$(fe,Ze,P,w,L,ge,ue,k,z,ee)}function pe(P,w,L){for(var B=0;B<L;++B)w[B]=P[w[B]]}function Se(P){for(var w=1;w<P.length;w++){var L=P[w-1]+P[w]-128;P[w]=L}}function _e(P,w){for(var L=0,B=Math.floor((P.length+1)/2),z=0,k=P.length-1;!(z>k||(w[z++]=P[L++],z>k));)w[z++]=P[B++]}function Le(P){for(var w=P.byteLength,L=new Array,B=0,z=new DataView(P);w>0;){var k=z.getInt8(B++);if(k<0){var ee=-k;w-=ee+1;for(var ne=0;ne<ee;ne++)L.push(z.getUint8(B++))}else{var ee=k;w-=2;for(var le=z.getUint8(B++),ne=0;ne<ee+1;ne++)L.push(le)}}return L}function Ce(P,w,L,B,z,k){var mt=new DataView(k.buffer),ee=L[P.idx[0]].width,ne=L[P.idx[0]].height,le=3,ue=Math.floor(ee/8),ge=Math.ceil(ee/8),fe=Math.ceil(ne/8),Ze=ee-(ge-1)*8,Ue=ne-(fe-1)*8,He={value:0},tt=new Array(le),ct=new Array(le),Je=new Array(le),Oe=new Array(le),ht=new Array(le);for(let _t=0;_t<le;++_t)ht[_t]=w[P.idx[_t]],tt[_t]=_t<1?0:tt[_t-1]+ge*fe,ct[_t]=new Float32Array(64),Je[_t]=new Uint16Array(64),Oe[_t]=new Uint16Array(ge*64);for(let _t=0;_t<fe;++_t){var je=8;_t==fe-1&&(je=Ue);var vt=8;for(let kt=0;kt<ge;++kt){kt==ge-1&&(vt=Ze);for(let It=0;It<le;++It)Je[It].fill(0),Je[It][0]=z[tt[It]++],qe(He,B,Je[It]),rt(Je[It],ct[It]),G(ct[It]);U(ct);for(let It=0;It<le;++It)se(ct[It],Oe[It],kt*64)}let sn=0;for(let kt=0;kt<le;++kt){const It=L[P.idx[kt]].type;for(let nn=8*_t;nn<8*_t+je;++nn){sn=ht[kt][nn];for(let fr=0;fr<ue;++fr){const jn=fr*64+(nn&7)*8;mt.setUint16(sn+0*2*It,Oe[kt][jn+0],!0),mt.setUint16(sn+1*2*It,Oe[kt][jn+1],!0),mt.setUint16(sn+2*2*It,Oe[kt][jn+2],!0),mt.setUint16(sn+3*2*It,Oe[kt][jn+3],!0),mt.setUint16(sn+4*2*It,Oe[kt][jn+4],!0),mt.setUint16(sn+5*2*It,Oe[kt][jn+5],!0),mt.setUint16(sn+6*2*It,Oe[kt][jn+6],!0),mt.setUint16(sn+7*2*It,Oe[kt][jn+7],!0),sn+=8*2*It}}if(ue!=ge)for(let nn=8*_t;nn<8*_t+je;++nn){const fr=ht[kt][nn]+8*ue*2*It,jn=ue*64+(nn&7)*8;for(let Zi=0;Zi<vt;++Zi)mt.setUint16(fr+Zi*2*It,Oe[kt][jn+Zi],!0)}}}for(var Gt=new Uint16Array(ee),mt=new DataView(k.buffer),Wt=0;Wt<le;++Wt){L[P.idx[Wt]].decoded=!0;var Dt=L[P.idx[Wt]].type;if(L[Wt].type==2)for(var Yt=0;Yt<ne;++Yt){const _t=ht[Wt][Yt];for(var fn=0;fn<ee;++fn)Gt[fn]=mt.getUint16(_t+fn*2*Dt,!0);for(var fn=0;fn<ee;++fn)mt.setFloat32(_t+fn*2*Dt,J(Gt[fn]),!0)}}}function qe(P,w,L){for(var B,z=1;z<64;)B=w[P.value],B==65280?z=64:B>>8==255?z+=B&255:(L[z]=B,z++),P.value++}function rt(P,w){w[0]=J(P[0]),w[1]=J(P[1]),w[2]=J(P[5]),w[3]=J(P[6]),w[4]=J(P[14]),w[5]=J(P[15]),w[6]=J(P[27]),w[7]=J(P[28]),w[8]=J(P[2]),w[9]=J(P[4]),w[10]=J(P[7]),w[11]=J(P[13]),w[12]=J(P[16]),w[13]=J(P[26]),w[14]=J(P[29]),w[15]=J(P[42]),w[16]=J(P[3]),w[17]=J(P[8]),w[18]=J(P[12]),w[19]=J(P[17]),w[20]=J(P[25]),w[21]=J(P[30]),w[22]=J(P[41]),w[23]=J(P[43]),w[24]=J(P[9]),w[25]=J(P[11]),w[26]=J(P[18]),w[27]=J(P[24]),w[28]=J(P[31]),w[29]=J(P[40]),w[30]=J(P[44]),w[31]=J(P[53]),w[32]=J(P[10]),w[33]=J(P[19]),w[34]=J(P[23]),w[35]=J(P[32]),w[36]=J(P[39]),w[37]=J(P[45]),w[38]=J(P[52]),w[39]=J(P[54]),w[40]=J(P[20]),w[41]=J(P[22]),w[42]=J(P[33]),w[43]=J(P[38]),w[44]=J(P[46]),w[45]=J(P[51]),w[46]=J(P[55]),w[47]=J(P[60]),w[48]=J(P[21]),w[49]=J(P[34]),w[50]=J(P[37]),w[51]=J(P[47]),w[52]=J(P[50]),w[53]=J(P[56]),w[54]=J(P[59]),w[55]=J(P[61]),w[56]=J(P[35]),w[57]=J(P[36]),w[58]=J(P[48]),w[59]=J(P[49]),w[60]=J(P[57]),w[61]=J(P[58]),w[62]=J(P[62]),w[63]=J(P[63])}function G(P){const w=.5*Math.cos(.7853975),L=.5*Math.cos(3.14159/16),B=.5*Math.cos(3.14159/8),z=.5*Math.cos(3*3.14159/16),k=.5*Math.cos(5*3.14159/16),ee=.5*Math.cos(3*3.14159/8),ne=.5*Math.cos(7*3.14159/16);for(var le=new Array(4),ue=new Array(4),ge=new Array(4),fe=new Array(4),Ze=0;Ze<8;++Ze){var Ue=Ze*8;le[0]=B*P[Ue+2],le[1]=ee*P[Ue+2],le[2]=B*P[Ue+6],le[3]=ee*P[Ue+6],ue[0]=L*P[Ue+1]+z*P[Ue+3]+k*P[Ue+5]+ne*P[Ue+7],ue[1]=z*P[Ue+1]-ne*P[Ue+3]-L*P[Ue+5]-k*P[Ue+7],ue[2]=k*P[Ue+1]-L*P[Ue+3]+ne*P[Ue+5]+z*P[Ue+7],ue[3]=ne*P[Ue+1]-k*P[Ue+3]+z*P[Ue+5]-L*P[Ue+7],ge[0]=w*(P[Ue+0]+P[Ue+4]),ge[3]=w*(P[Ue+0]-P[Ue+4]),ge[1]=le[0]+le[3],ge[2]=le[1]-le[2],fe[0]=ge[0]+ge[1],fe[1]=ge[3]+ge[2],fe[2]=ge[3]-ge[2],fe[3]=ge[0]-ge[1],P[Ue+0]=fe[0]+ue[0],P[Ue+1]=fe[1]+ue[1],P[Ue+2]=fe[2]+ue[2],P[Ue+3]=fe[3]+ue[3],P[Ue+4]=fe[3]-ue[3],P[Ue+5]=fe[2]-ue[2],P[Ue+6]=fe[1]-ue[1],P[Ue+7]=fe[0]-ue[0]}for(var He=0;He<8;++He)le[0]=B*P[16+He],le[1]=ee*P[16+He],le[2]=B*P[48+He],le[3]=ee*P[48+He],ue[0]=L*P[8+He]+z*P[24+He]+k*P[40+He]+ne*P[56+He],ue[1]=z*P[8+He]-ne*P[24+He]-L*P[40+He]-k*P[56+He],ue[2]=k*P[8+He]-L*P[24+He]+ne*P[40+He]+z*P[56+He],ue[3]=ne*P[8+He]-k*P[24+He]+z*P[40+He]-L*P[56+He],ge[0]=w*(P[He]+P[32+He]),ge[3]=w*(P[He]-P[32+He]),ge[1]=le[0]+le[3],ge[2]=le[1]-le[2],fe[0]=ge[0]+ge[1],fe[1]=ge[3]+ge[2],fe[2]=ge[3]-ge[2],fe[3]=ge[0]-ge[1],P[0+He]=fe[0]+ue[0],P[8+He]=fe[1]+ue[1],P[16+He]=fe[2]+ue[2],P[24+He]=fe[3]+ue[3],P[32+He]=fe[3]-ue[3],P[40+He]=fe[2]-ue[2],P[48+He]=fe[1]-ue[1],P[56+He]=fe[0]-ue[0]}function U(P){for(var w=0;w<64;++w){var L=P[0][w],B=P[1][w],z=P[2][w];P[0][w]=L+1.5747*z,P[1][w]=L-.1873*B-.4682*z,P[2][w]=L+1.8556*B}}function se(P,w,L){for(var B=0;B<64;++B)w[L+B]=Os.toHalfFloat(ve(P[B]))}function ve(P){return P<=1?Math.sign(P)*Math.pow(Math.abs(P),2.2):Math.sign(P)*Math.pow(R,Math.abs(P)-1)}function we(P){return new DataView(P.array.buffer,P.offset.value,P.size)}function xe(P){var w=P.viewer.buffer.slice(P.offset.value,P.offset.value+P.size),L=new Uint8Array(Le(w)),B=new Uint8Array(L.length);return Se(L),_e(L,B),new DataView(B.buffer)}function $e(P){var w=P.array.slice(P.offset.value,P.offset.value+P.size),L=Su(w),B=new Uint8Array(L.length);return Se(L),_e(L,B),new DataView(B.buffer)}function ze(P){for(var w=P.viewer,L={value:P.offset.value},B=new Uint16Array(P.width*P.scanlineBlockSize*(P.channels*P.type)),z=new Uint8Array(8192),k=0,ee=new Array(P.channels),ne=0;ne<P.channels;ne++)ee[ne]={},ee[ne].start=k,ee[ne].end=ee[ne].start,ee[ne].nx=P.width,ee[ne].ny=P.lines,ee[ne].size=P.type,k+=ee[ne].nx*ee[ne].ny*ee[ne].size;var le=De(w,L),ue=De(w,L);if(ue>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(le<=ue)for(var ne=0;ne<ue-le+1;ne++)z[ne+le]=Ht(w,L);var ge=new Uint16Array(65536),fe=C(z,ge),Ze=st(w,L);dt(P.array,w,L,Ze,B,k);for(var ne=0;ne<P.channels;++ne)for(var Ue=ee[ne],He=0;He<ee[ne].size;++He)gt(B,Ue.start+He,Ue.nx,Ue.size,Ue.ny,Ue.nx*Ue.size,fe);pe(ge,B,k);for(var tt=0,ct=new Uint8Array(B.buffer.byteLength),Je=0;Je<P.lines;Je++)for(var Oe=0;Oe<P.channels;Oe++){var Ue=ee[Oe],ht=Ue.nx*Ue.size,je=new Uint8Array(B.buffer,Ue.end*2,ht*2);ct.set(je,tt),tt+=ht*2,Ue.end+=ht}return new DataView(ct.buffer)}function Ne(P){var w=P.array.slice(P.offset.value,P.offset.value+P.size),L=Su(w);const B=P.lines*P.channels*P.width,z=P.type==1?new Uint16Array(B):new Uint32Array(B);let k=0,ee=0;const ne=new Array(4);for(let le=0;le<P.lines;le++)for(let ue=0;ue<P.channels;ue++){let ge=0;switch(P.type){case 1:ne[0]=k,ne[1]=ne[0]+P.width,k=ne[1]+P.width;for(let fe=0;fe<P.width;++fe){const Ze=L[ne[0]++]<<8|L[ne[1]++];ge+=Ze,z[ee]=ge,ee++}break;case 2:ne[0]=k,ne[1]=ne[0]+P.width,ne[2]=ne[1]+P.width,k=ne[2]+P.width;for(let fe=0;fe<P.width;++fe){const Ze=L[ne[0]++]<<24|L[ne[1]++]<<16|L[ne[2]++]<<8;ge+=Ze,z[ee]=ge,ee++}break}}return new DataView(z.buffer)}function pt(P){var w=P.viewer,L={value:P.offset.value},B=new Uint8Array(P.width*P.lines*(P.channels*P.type*2)),z={version:at(w,L),unknownUncompressedSize:at(w,L),unknownCompressedSize:at(w,L),acCompressedSize:at(w,L),dcCompressedSize:at(w,L),rleCompressedSize:at(w,L),rleUncompressedSize:at(w,L),rleRawSize:at(w,L),totalAcUncompressedCount:at(w,L),totalDcUncompressedCount:at(w,L),acCompression:at(w,L)};if(z.version<2)throw"EXRLoader.parse: "+si.compression+" version "+z.version+" is unsupported";for(var k=new Array,ee=De(w,L)-2;ee>0;){var ne=Ie(w.buffer,L),le=Ht(w,L),ue=le>>2&3,ge=(le>>4)-1,fe=new Int8Array([ge])[0],Ze=Ht(w,L);k.push({name:ne,index:fe,type:Ze,compression:ue}),ee-=ne.length+3}for(var Ue=si.channels,He=new Array(P.channels),tt=0;tt<P.channels;++tt){var ct=He[tt]={},Je=Ue[tt];ct.name=Je.name,ct.compression=0,ct.decoded=!1,ct.type=Je.pixelType,ct.pLinear=Je.pLinear,ct.width=P.width,ct.height=P.lines}for(var Oe={idx:new Array(3)},ht=0;ht<P.channels;++ht)for(var ct=He[ht],tt=0;tt<k.length;++tt){var je=k[tt];ct.name==je.name&&(ct.compression=je.compression,je.index>=0&&(Oe.idx[je.index]=ht),ct.offset=ht)}if(z.acCompressedSize>0)switch(z.acCompression){case 0:var mt=new Uint16Array(z.totalAcUncompressedCount);dt(P.array,w,L,z.acCompressedSize,mt,z.totalAcUncompressedCount);break;case 1:var vt=P.array.slice(L.value,L.value+z.totalAcUncompressedCount),Gt=Su(vt),mt=new Uint16Array(Gt.buffer);L.value+=z.totalAcUncompressedCount;break}if(z.dcCompressedSize>0){var Wt={array:P.array,offset:L,size:z.dcCompressedSize},Dt=new Uint16Array($e(Wt).buffer);L.value+=z.dcCompressedSize}if(z.rleRawSize>0){var vt=P.array.slice(L.value,L.value+z.rleCompressedSize),Gt=Su(vt),Yt=Le(Gt.buffer);L.value+=z.rleCompressedSize}for(var fn=0,_t=new Array(He.length),tt=0;tt<_t.length;++tt)_t[tt]=new Array;for(var sn=0;sn<P.lines;++sn)for(var kt=0;kt<He.length;++kt)_t[kt].push(fn),fn+=He[kt].width*P.type*2;Ce(Oe,_t,He,mt,Dt,B);for(var tt=0;tt<He.length;++tt){var ct=He[tt];if(!ct.decoded)switch(ct.compression){case 2:for(var It=0,nn=0,sn=0;sn<P.lines;++sn){for(var fr=_t[tt][It],jn=0;jn<ct.width;++jn){for(var Zi=0;Zi<2*ct.type;++Zi)B[fr++]=Yt[nn+Zi*ct.width*ct.height];nn++}It++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(B.buffer)}function Ie(P,w){for(var L=new Uint8Array(P),B=0;L[w.value+B]!=0;)B+=1;var z=new TextDecoder().decode(L.slice(w.value,w.value+B));return w.value=w.value+B+1,z}function et(P,w,L){var B=new TextDecoder().decode(new Uint8Array(P).slice(w.value,w.value+L));return w.value=w.value+L,B}function Et(P,w){var L=We(P,w),B=st(P,w);return[L,B]}function lt(P,w){var L=st(P,w),B=st(P,w);return[L,B]}function We(P,w){var L=P.getInt32(w.value,!0);return w.value=w.value+4,L}function st(P,w){var L=P.getUint32(w.value,!0);return w.value=w.value+4,L}function At(P,w){var L=P[w.value];return w.value=w.value+1,L}function Ht(P,w){var L=P.getUint8(w.value);return w.value=w.value+1,L}const at=function(P,w){let L;return"getBigInt64"in DataView.prototype?L=Number(P.getBigInt64(w.value,!0)):L=P.getUint32(w.value+4,!0)+Number(P.getUint32(w.value,!0)<<32),w.value+=8,L};function Z(P,w){var L=P.getFloat32(w.value,!0);return w.value+=4,L}function Me(P,w){return Os.toHalfFloat(Z(P,w))}function J(P){var w=(P&31744)>>10,L=P&1023;return(P>>15?-1:1)*(w?w===31?L?NaN:1/0:Math.pow(2,w-15)*(1+L/1024):6103515625e-14*(L/1024))}function De(P,w){var L=P.getUint16(w.value,!0);return w.value+=2,L}function Xe(P,w){return J(De(P,w))}function Pt(P,w,L,B){for(var z=L.value,k=[];L.value<z+B-1;){var ee=Ie(w,L),ne=We(P,L),le=Ht(P,L);L.value+=3;var ue=We(P,L),ge=We(P,L);k.push({name:ee,pixelType:ne,pLinear:le,xSampling:ue,ySampling:ge})}return L.value+=1,k}function Vt(P,w){var L=Z(P,w),B=Z(P,w),z=Z(P,w),k=Z(P,w),ee=Z(P,w),ne=Z(P,w),le=Z(P,w),ue=Z(P,w);return{redX:L,redY:B,greenX:z,greenY:k,blueX:ee,blueY:ne,whiteX:le,whiteY:ue}}function Jt(P,w){var L=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],B=Ht(P,w);return L[B]}function gn(P,w){var L=st(P,w),B=st(P,w),z=st(P,w),k=st(P,w);return{xMin:L,yMin:B,xMax:z,yMax:k}}function Ut(P,w){var L=["INCREASING_Y"],B=Ht(P,w);return L[B]}function Zn(P,w){var L=Z(P,w),B=Z(P,w);return[L,B]}function vn(P,w){var L=Z(P,w),B=Z(P,w),z=Z(P,w);return[L,B,z]}function Js(P,w,L,B,z){if(B==="string"||B==="stringvector"||B==="iccProfile")return et(w,L,z);if(B==="chlist")return Pt(P,w,L,z);if(B==="chromaticities")return Vt(P,L);if(B==="compression")return Jt(P,L);if(B==="box2i")return gn(P,L);if(B==="lineOrder")return Ut(P,L);if(B==="float")return Z(P,L);if(B==="v2f")return Zn(P,L);if(B==="v3f")return vn(P,L);if(B==="int")return We(P,L);if(B==="rational")return Et(P,L);if(B==="timecode")return lt(P,L);if(B==="preview")return L.value+=z,"skipped";L.value+=z}function Ks(P,w,L){const B={};if(P.getUint32(0,!0)!=20000630)throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";B.version=P.getUint8(4);const z=P.getUint8(5);B.spec={singleTile:!!(z&2),longName:!!(z&4),deepFormat:!!(z&8),multiPart:!!(z&16)},L.value=8;for(var k=!0;k;){var ee=Ie(w,L);if(ee==0)k=!1;else{var ne=Ie(w,L),le=st(P,L),ue=Js(P,w,L,ne,le);ue===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${ne}'.`):B[ee]=ue}}if(z&-5)throw console.error("EXRHeader:",B),"THREE.EXRLoader: provided file is currently unsupported.";return B}function Qs(P,w,L,B,z){const k={size:0,viewer:w,array:L,offset:B,width:P.dataWindow.xMax-P.dataWindow.xMin+1,height:P.dataWindow.yMax-P.dataWindow.yMin+1,channels:P.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:P.channels[0].pixelType,uncompress:null,getter:null,format:null,[Vo?"colorSpace":"encoding"]:null};switch(P.compression){case"NO_COMPRESSION":k.lines=1,k.uncompress=we;break;case"RLE_COMPRESSION":k.lines=1,k.uncompress=xe;break;case"ZIPS_COMPRESSION":k.lines=1,k.uncompress=$e;break;case"ZIP_COMPRESSION":k.lines=16,k.uncompress=$e;break;case"PIZ_COMPRESSION":k.lines=32,k.uncompress=ze;break;case"PXR24_COMPRESSION":k.lines=16,k.uncompress=Ne;break;case"DWAA_COMPRESSION":k.lines=32,k.uncompress=pt;break;case"DWAB_COMPRESSION":k.lines=256,k.uncompress=pt;break;default:throw"EXRLoader.parse: "+P.compression+" is unsupported"}if(k.scanlineBlockSize=k.lines,k.type==1)switch(z){case mn:k.getter=Xe,k.inputSize=2;break;case Bn:k.getter=De,k.inputSize=2;break}else if(k.type==2)switch(z){case mn:k.getter=Z,k.inputSize=4;break;case Bn:k.getter=Me,k.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+k.type+" for "+P.compression+".";k.blockCount=(P.dataWindow.yMax+1)/k.scanlineBlockSize;for(var ee=0;ee<k.blockCount;ee++)at(w,B);k.outputChannels=k.channels==3?4:k.channels;const ne=k.width*k.height*k.outputChannels;switch(z){case mn:k.byteArray=new Float32Array(ne),k.channels<k.outputChannels&&k.byteArray.fill(1,0,ne);break;case Bn:k.byteArray=new Uint16Array(ne),k.channels<k.outputChannels&&k.byteArray.fill(15360,0,ne);break;default:console.error("THREE.EXRLoader: unsupported type: ",z);break}return k.bytesPerLine=k.width*k.inputSize*k.channels,k.outputChannels==4?k.format=wn:k.format=Gu,Vo?k.colorSpace="srgb-linear":k.encoding=3e3,k}const Ei=new DataView(e),Dr=new Uint8Array(e),Ai={value:0},si=Ks(Ei,e,Ai),Tt=Qs(si,Ei,Dr,Ai,this.type),$s={value:0},oo={R:0,G:1,B:2,A:3,Y:0};for(let P=0;P<Tt.height/Tt.scanlineBlockSize;P++){const w=st(Ei,Ai);Tt.size=st(Ei,Ai),Tt.lines=w+Tt.scanlineBlockSize>Tt.height?Tt.height-w:Tt.scanlineBlockSize;const B=Tt.size<Tt.lines*Tt.bytesPerLine?Tt.uncompress(Tt):we(Tt);Ai.value+=Tt.size;for(let z=0;z<Tt.scanlineBlockSize;z++){const k=z+P*Tt.scanlineBlockSize;if(k>=Tt.height)break;for(let ee=0;ee<Tt.channels;ee++){const ne=oo[si.channels[ee].name];for(let le=0;le<Tt.width;le++){$s.value=(z*(Tt.channels*Tt.width)+ee*Tt.width+le)*Tt.inputSize;const ue=(Tt.height-1-k)*(Tt.width*Tt.outputChannels)+le*Tt.outputChannels+ne;Tt.byteArray[ue]=Tt.getter(B,$s)}}}}return{header:si,width:Tt.width,height:Tt.height,data:Tt.byteArray,format:Tt.format,[Vo?"colorSpace":"encoding"]:Tt[Vo?"colorSpace":"encoding"],type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,c){Vo?o.colorSpace=c.colorSpace:o.encoding=c.encoding,o.minFilter=Xt,o.magFilter=Xt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,c)}return super.load(e,s,n,i)}}const W0=new Ln,Mu=new F;class um extends $p{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Qe(e,3)),this.setAttribute("uv",new Qe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new ku(t,6,1);return this.setAttribute("instanceStart",new yi(n,3,0)),this.setAttribute("instanceEnd",new yi(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new ku(n,t*2,1);return this.setAttribute("instanceColorStart",new yi(i,t,0)),this.setAttribute("instanceColorEnd",new yi(i,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Yp(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),W0.setFromBufferAttribute(t),this.boundingBox.union(W0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Mu.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mu)),Mu.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Mu));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class zx extends um{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e,t=3){const n=e.length-t,i=new Float32Array(2*n);if(t===3)for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];else for(let s=0;s<n;s+=t)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5],i[2*s+6]=e[s+6],i[2*s+7]=e[s+7];return super.setColors(i,t),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class hm extends zn{constructor(e){super({type:"LineMaterial",uniforms:Ou.clone(Ou.merge([Fe.common,Fe.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ye(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${mh>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(t){!!t!="USE_DASH"in this.defines&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(t){!!t!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const vd=new Lt,X0=new F,Y0=new F,Nn=new Lt,On=new Lt,nr=new Lt,_d=new F,yd=new ft,Fn=new ax,q0=new F,wu=new Ln,Eu=new Un,ir=new Lt;let rr,Ws;function Z0(r,e,t){return ir.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),ir.multiplyScalar(1/ir.w),ir.x=Ws/t.width,ir.y=Ws/t.height,ir.applyMatrix4(r.projectionMatrixInverse),ir.multiplyScalar(1/ir.w),Math.abs(Math.max(ir.x,ir.y))}function kR(r,e){const t=r.matrixWorld,n=r.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let c=0,u=o;c<u;c++){Fn.start.fromBufferAttribute(i,c),Fn.end.fromBufferAttribute(s,c),Fn.applyMatrix4(t);const h=new F,f=new F;rr.distanceSqToSegment(Fn.start,Fn.end,f,h),f.distanceTo(h)<Ws*.5&&e.push({point:f,pointOnLine:h,distance:rr.origin.distanceTo(f),object:r,face:null,faceIndex:c,uv:null,[Lx]:null})}}function HR(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,c=r.geometry,u=c.attributes.instanceStart,h=c.attributes.instanceEnd,f=Math.min(c.instanceCount,u.count),p=-e.near;rr.at(1,nr),nr.w=1,nr.applyMatrix4(e.matrixWorldInverse),nr.applyMatrix4(n),nr.multiplyScalar(1/nr.w),nr.x*=s.x/2,nr.y*=s.y/2,nr.z=0,_d.copy(nr),yd.multiplyMatrices(e.matrixWorldInverse,o);for(let m=0,g=f;m<g;m++){if(Nn.fromBufferAttribute(u,m),On.fromBufferAttribute(h,m),Nn.w=1,On.w=1,Nn.applyMatrix4(yd),On.applyMatrix4(yd),Nn.z>p&&On.z>p)continue;if(Nn.z>p){const E=Nn.z-On.z,b=(Nn.z-p)/E;Nn.lerp(On,b)}else if(On.z>p){const E=On.z-Nn.z,b=(On.z-p)/E;On.lerp(Nn,b)}Nn.applyMatrix4(n),On.applyMatrix4(n),Nn.multiplyScalar(1/Nn.w),On.multiplyScalar(1/On.w),Nn.x*=s.x/2,Nn.y*=s.y/2,On.x*=s.x/2,On.y*=s.y/2,Fn.start.copy(Nn),Fn.start.z=0,Fn.end.copy(On),Fn.end.z=0;const S=Fn.closestPointToPointParameter(_d,!0);Fn.at(S,q0);const x=Cp.lerp(Nn.z,On.z,S),_=x>=-1&&x<=1,A=_d.distanceTo(q0)<Ws*.5;if(_&&A){Fn.start.fromBufferAttribute(u,m),Fn.end.fromBufferAttribute(h,m),Fn.start.applyMatrix4(o),Fn.end.applyMatrix4(o);const E=new F,b=new F;rr.distanceSqToSegment(Fn.start,Fn.end,b,E),t.push({point:b,pointOnLine:E,distance:rr.origin.distanceTo(b),object:r,face:null,faceIndex:m,uv:null,[Lx]:null})}}}class kx extends tn{constructor(e=new um,t=new hm({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,c=0,u=t.count;o<u;o++,c+=2)X0.fromBufferAttribute(t,o),Y0.fromBufferAttribute(n,o),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+X0.distanceTo(Y0);const s=new ku(i,2,1);return e.setAttribute("instanceDistanceStart",new yi(s,1,0)),e.setAttribute("instanceDistanceEnd",new yi(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;rr=e.ray;const o=this.matrixWorld,c=this.geometry,u=this.material;Ws=u.linewidth+s,c.boundingSphere===null&&c.computeBoundingSphere(),Eu.copy(c.boundingSphere).applyMatrix4(o);let h;if(n)h=Ws*.5;else{const p=Math.max(i.near,Eu.distanceToPoint(rr.origin));h=Z0(i,p,u.resolution)}if(Eu.radius+=h,rr.intersectsSphere(Eu)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),wu.copy(c.boundingBox).applyMatrix4(o);let f;if(n)f=Ws*.5;else{const p=Math.max(i.near,wu.distanceToPoint(rr.origin));f=Z0(i,p,u.resolution)}wu.expandByScalar(f),rr.intersectsBox(wu)!==!1&&(n?kR(this,t):HR(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(vd),this.material.uniforms.resolution.value.set(vd.z,vd.w))}}class VR extends kx{constructor(e=new zx,t=new hm({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const GR=me.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:i,lineWidth:s,segments:o,dashed:c,...u},h){var f,p;const m=Pr(_=>_.size),g=me.useMemo(()=>o?new kx:new VR,[o]),[y]=me.useState(()=>new hm),S=(n==null||(f=n[0])==null?void 0:f.length)===4?4:3,x=me.useMemo(()=>{const _=o?new um:new zx,A=e.map(E=>{const b=Array.isArray(E);return E instanceof F||E instanceof Lt?[E.x,E.y,E.z]:E instanceof ye?[E.x,E.y,0]:b&&E.length===3?[E[0],E[1],E[2]]:b&&E.length===2?[E[0],E[1],0]:E});if(_.setPositions(A.flat()),n){t=16777215;const E=n.map(b=>b instanceof Ye?b.toArray():b);_.setColors(E.flat(),S)}return _},[e,o,n,S]);return me.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),me.useLayoutEffect(()=>{c?y.defines.USE_DASH="":delete y.defines.USE_DASH,y.needsUpdate=!0},[c,y]),me.useEffect(()=>()=>{x.dispose(),y.dispose()},[x]),me.createElement("primitive",Qa({object:g,ref:h},u),me.createElement("primitive",{object:x,attach:"geometry"}),me.createElement("primitive",Qa({object:y,attach:"material",color:t,vertexColors:!!n,resolution:[m.width,m.height],linewidth:(p=i??s)!==null&&p!==void 0?p:1,dashed:c,transparent:S===4},u)))}),WR=3e3,XR=3001,xd=me.forwardRef(({children:r,enabled:e=!0,speed:t=1,rotationIntensity:n=1,floatIntensity:i=1,floatingRange:s=[-.1,.1],autoInvalidate:o=!1,...c},u)=>{const h=me.useRef(null);me.useImperativeHandle(u,()=>h.current,[]);const f=me.useRef(Math.random()*1e4);return ao(p=>{var m,g;if(!e||t===0)return;o&&p.invalidate();const y=f.current+p.clock.elapsedTime;h.current.rotation.x=Math.cos(y/4*t)/8*n,h.current.rotation.y=Math.sin(y/4*t)/8*n,h.current.rotation.z=Math.sin(y/4*t)/20*n;let S=Math.sin(y/4*t)/10;S=Cp.mapLinear(S,-.1,.1,(m=s==null?void 0:s[0])!==null&&m!==void 0?m:-.1,(g=s==null?void 0:s[1])!==null&&g!==void 0?g:.1),h.current.position.y=S*i,h.current.updateMatrix()}),me.createElement("group",c,me.createElement("group",{ref:h,matrixAutoUpdate:!1},r))}),Hx=(r,e,t)=>{let n;switch(r){case Mi:n=new Uint8ClampedArray(e*t*4);break;case Bn:n=new Uint16Array(e*t*4);break;case rs:n=new Uint32Array(e*t*4);break;case vp:n=new Int8Array(e*t*4);break;case _p:n=new Int16Array(e*t*4);break;case Vu:n=new Int32Array(e*t*4);break;case mn:n=new Float32Array(e*t*4);break;default:throw new Error("Unsupported data type")}return n};let Au;const YR=(r,e,t,n)=>{if(Au!==void 0)return Au;const i=new ni(1,1,n);e.setRenderTarget(i);const s=new tn(new Ur,new Lr({color:16777215}));e.render(s,t),e.setRenderTarget(null);const o=Hx(r,i.width,i.height);return e.readRenderTargetPixels(i,0,0,i.width,i.height,o),i.dispose(),s.geometry.dispose(),s.material.dispose(),Au=o[0]!==0,Au};class fm{constructor(e){on(this,"_renderer");on(this,"_rendererIsDisposable",!1);on(this,"_material");on(this,"_scene");on(this,"_camera");on(this,"_quad");on(this,"_renderTarget");on(this,"_width");on(this,"_height");on(this,"_type");on(this,"_colorSpace");on(this,"_supportsReadPixels",!0);on(this,"render",()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(e){throw this._renderer.setRenderTarget(null),e}this._renderer.setRenderTarget(null)});var n,i,s,o,c,u,h,f,p,m,g,y,S,x,_,A;this._width=e.width,this._height=e.height,this._type=e.type,this._colorSpace=e.colorSpace;const t={format:wn,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((n=e.renderTargetOptions)==null?void 0:n.anisotropy)!==void 0?(i=e.renderTargetOptions)==null?void 0:i.anisotropy:1,generateMipmaps:((s=e.renderTargetOptions)==null?void 0:s.generateMipmaps)!==void 0?(o=e.renderTargetOptions)==null?void 0:o.generateMipmaps:!1,magFilter:((c=e.renderTargetOptions)==null?void 0:c.magFilter)!==void 0?(u=e.renderTargetOptions)==null?void 0:u.magFilter:Xt,minFilter:((h=e.renderTargetOptions)==null?void 0:h.minFilter)!==void 0?(f=e.renderTargetOptions)==null?void 0:f.minFilter:Xt,samples:((p=e.renderTargetOptions)==null?void 0:p.samples)!==void 0?(m=e.renderTargetOptions)==null?void 0:m.samples:void 0,wrapS:((g=e.renderTargetOptions)==null?void 0:g.wrapS)!==void 0?(y=e.renderTargetOptions)==null?void 0:y.wrapS:Sn,wrapT:((S=e.renderTargetOptions)==null?void 0:S.wrapT)!==void 0?(x=e.renderTargetOptions)==null?void 0:x.wrapT:Sn};if(this._material=e.material,e.renderer?this._renderer=e.renderer:(this._renderer=fm.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new bl,this._camera=new no,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!YR(this._type,this._renderer,this._camera,t)){let E;switch(this._type){case Bn:E=this._renderer.extensions.has("EXT_color_buffer_float")?mn:void 0;break}E!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${mn}`),this._type=E):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new tn(new Ur,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new ni(this.width,this.height,t),this._renderTarget.texture.mapping=((_=e.renderTargetOptions)==null?void 0:_.mapping)!==void 0?(A=e.renderTargetOptions)==null?void 0:A.mapping:ns}static instantiateRenderer(){const e=new Op;return e.setSize(128,128),e}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const e=Hx(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){const t=new Cr(this.toArray(),this.width,this.height,wn,this._type,(e==null?void 0:e.mapping)||ns,(e==null?void 0:e.wrapS)||Sn,(e==null?void 0:e.wrapT)||Sn,(e==null?void 0:e.magFilter)||Xt,(e==null?void 0:e.minFilter)||Xt,(e==null?void 0:e.anisotropy)||1,Oi);return t.generateMipmaps=(e==null?void 0:e.generateMipmaps)!==void 0?e==null?void 0:e.generateMipmaps:!1,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof zn&&Object.values(this.material.uniforms).forEach(t=>{t.value instanceof jt&&t.value.dispose()}),Object.values(this.material).forEach(t=>{t instanceof jt&&t.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}class Vx extends Error{}class Gx extends Error{}const Go=(r,e,t)=>{const n=new RegExp(`${e}="([^"]*)"`,"i").exec(r);if(n)return n[1];const i=new RegExp(`<${e}[^>]*>([\\s\\S]*?)</${e}>`,"i").exec(r);if(i){const s=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return s&&s.length===3?s.map(o=>o.replace(/<\/?rdf:li>/g,"")):i[1].trim()}if(t!==void 0)return t;throw new Error(`Can't find ${e} in gainmap metadata`)},qR=r=>{let e;typeof TextDecoder<"u"?e=new TextDecoder().decode(r):e=r.toString();let t=e.indexOf("<x:xmpmeta");for(;t!==-1;){const n=e.indexOf("x:xmpmeta>",t),i=e.slice(t,n+10);try{const s=Go(i,"hdrgm:GainMapMin","0"),o=Go(i,"hdrgm:GainMapMax"),c=Go(i,"hdrgm:Gamma","1"),u=Go(i,"hdrgm:OffsetSDR","0.015625"),h=Go(i,"hdrgm:OffsetHDR","0.015625"),f=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(i),p=f?f[1]:"0",m=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(i);if(!m)throw new Error("Incomplete gainmap metadata");const g=m[1];return{gainMapMin:Array.isArray(s)?s.map(y=>parseFloat(y)):[parseFloat(s),parseFloat(s),parseFloat(s)],gainMapMax:Array.isArray(o)?o.map(y=>parseFloat(y)):[parseFloat(o),parseFloat(o),parseFloat(o)],gamma:Array.isArray(c)?c.map(y=>parseFloat(y)):[parseFloat(c),parseFloat(c),parseFloat(c)],offsetSdr:Array.isArray(u)?u.map(y=>parseFloat(y)):[parseFloat(u),parseFloat(u),parseFloat(u)],offsetHdr:Array.isArray(h)?h.map(y=>parseFloat(y)):[parseFloat(h),parseFloat(h),parseFloat(h)],hdrCapacityMin:parseFloat(p),hdrCapacityMax:parseFloat(g)}}catch{}t=e.indexOf("<x:xmpmeta",n)}};class ZR{constructor(e){on(this,"options");this.options={debug:e&&e.debug!==void 0?e.debug:!1,extractFII:e&&e.extractFII!==void 0?e.extractFII:!0,extractNonFII:e&&e.extractNonFII!==void 0?e.extractNonFII:!0}}extract(e){return new Promise((t,n)=>{const i=this.options.debug,s=new DataView(e.buffer);if(s.getUint16(0)!==65496){n(new Error("Not a valid jpeg"));return}const o=s.byteLength;let c=2,u=0,h;for(;c<o;){if(++u>250){n(new Error(`Found no marker after ${u} loops 😵`));return}if(s.getUint8(c)!==255){n(new Error(`Not a valid marker at offset 0x${c.toString(16)}, found: 0x${s.getUint8(c).toString(16)}`));return}if(h=s.getUint8(c+1),i&&console.log(`Marker: ${h.toString(16)}`),h===226){i&&console.log("Found APP2 marker (0xffe2)");const f=c+4;if(s.getUint32(f)===1297106432){const p=f+4;let m;if(s.getUint16(p)===18761)m=!1;else if(s.getUint16(p)===19789)m=!0;else{n(new Error("No valid endianness marker found in TIFF header"));return}if(s.getUint16(p+2,!m)!==42){n(new Error("Not valid TIFF data! (no 0x002A marker)"));return}const g=s.getUint32(p+4,!m);if(g<8){n(new Error("Not valid TIFF data! (First offset less than 8)"));return}const y=p+g,S=s.getUint16(y,!m),x=y+2;let _=0;for(let O=x;O<x+12*S;O+=12)s.getUint16(O,!m)===45057&&(_=s.getUint32(O+8,!m));const E=y+2+S*12+4,b=[];for(let O=E;O<E+_*16;O+=16){const I={MPType:s.getUint32(O,!m),size:s.getUint32(O+4,!m),dataOffset:s.getUint32(O+8,!m),dependantImages:s.getUint32(O+12,!m),start:-1,end:-1,isFII:!1};I.dataOffset?(I.start=p+I.dataOffset,I.isFII=!1):(I.start=0,I.isFII=!0),I.end=I.start+I.size,b.push(I)}if(this.options.extractNonFII&&b.length){const O=new Blob([s]),I=[];for(const D of b){if(D.isFII&&!this.options.extractFII)continue;const N=O.slice(D.start,D.end+1,"image/jpeg");I.push(N)}t(I)}}}c+=2+s.getUint16(c+2)}})}}const jR=async r=>{const e=qR(r);if(!e)throw new Gx("Gain map XMP metadata not found");const n=await new ZR({extractFII:!0,extractNonFII:!0}).extract(r);if(n.length!==2)throw new Vx("Gain map recovery image not found");return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:e}},j0=r=>new Promise((e,t)=>{const n=document.createElement("img");n.onload=()=>{e(n)},n.onerror=i=>{t(i)},n.src=URL.createObjectURL(r)});class JR extends ri{constructor(t,n){super(n);on(this,"_renderer");on(this,"_renderTargetOptions");on(this,"_internalLoadingManager");on(this,"_config");this._config=t,t.renderer&&(this._renderer=t.renderer),this._internalLoadingManager=new dh}setRenderer(t){return this._renderer=t,this}setRenderTargetOptions(t){return this._renderTargetOptions=t,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const t=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new jt,sdr:new jt});return this._config.createQuadRenderer({width:16,height:16,type:Bn,colorSpace:Oi,material:t,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async processImages(t,n,i){const s=n?new Blob([n],{type:"image/jpeg"}):void 0,o=new Blob([t],{type:"image/jpeg"});let c,u,h=!1;if(typeof createImageBitmap>"u"){const f=await Promise.all([s?j0(s):Promise.resolve(void 0),j0(o)]);u=f[0],c=f[1],h=i==="flipY"}else{const f=await Promise.all([s?createImageBitmap(s,{imageOrientation:i||"flipY"}):Promise.resolve(void 0),createImageBitmap(o,{imageOrientation:i||"flipY"})]);u=f[0],c=f[1]}return{sdrImage:c,gainMapImage:u,needsFlip:h}}createTextures(t,n,i){const s=new jt(n||new ImageData(2,2),ns,Sn,Sn,Xt,bd,wn,Mi,1,Oi);s.flipY=i,s.needsUpdate=!0;const o=new jt(t,ns,Sn,Sn,Xt,bd,wn,Mi,1,vi);return o.flipY=i,o.needsUpdate=!0,{gainMap:s,sdr:o}}updateQuadRenderer(t,n,i,s,o){t.width=n.width,t.height=n.height,t.material.gainMap=i,t.material.sdr=s,t.material.gainMapMin=o.gainMapMin,t.material.gainMapMax=o.gainMapMax,t.material.offsetHdr=o.offsetHdr,t.material.offsetSdr=o.offsetSdr,t.material.gamma=o.gamma,t.material.hdrCapacityMin=o.hdrCapacityMin,t.material.hdrCapacityMax=o.hdrCapacityMax,t.material.maxDisplayBoost=Math.pow(2,o.hdrCapacityMax),t.material.needsUpdate=!0}}const KR=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,QR=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class $R extends zn{constructor({gamma:t,offsetHdr:n,offsetSdr:i,gainMapMin:s,gainMapMax:o,maxDisplayBoost:c,hdrCapacityMin:u,hdrCapacityMax:h,sdr:f,gainMap:p}){super({name:"GainMapDecoderMaterial",vertexShader:KR,fragmentShader:QR,uniforms:{sdr:{value:f},gainMap:{value:p},gamma:{value:new F(1/t[0],1/t[1],1/t[2])},offsetHdr:{value:new F().fromArray(n)},offsetSdr:{value:new F().fromArray(i)},gainMapMin:{value:new F().fromArray(s)},gainMapMax:{value:new F().fromArray(o)},weightFactor:{value:(Math.log2(c)-u)/(h-u)}},blending:or,depthTest:!1,depthWrite:!1});on(this,"_maxDisplayBoost");on(this,"_hdrCapacityMin");on(this,"_hdrCapacityMax");this._maxDisplayBoost=c,this._hdrCapacityMin=u,this._hdrCapacityMax=h,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(t){this.uniforms.sdr.value=t}get gainMap(){return this.uniforms.gainMap.value}set gainMap(t){this.uniforms.gainMap.value=t}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(t){this.uniforms.offsetHdr.value.fromArray(t)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(t){this.uniforms.offsetSdr.value.fromArray(t)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(t){this.uniforms.gainMapMin.value.fromArray(t)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(t){this.uniforms.gainMapMax.value.fromArray(t)}get gamma(){const t=this.uniforms.gamma.value;return[1/t.x,1/t.y,1/t.z]}set gamma(t){const n=this.uniforms.gamma.value;n.x=1/t[0],n.y=1/t[1],n.z=1/t[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(t){this._hdrCapacityMin=t,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(t){this._hdrCapacityMax=t,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(t){this._maxDisplayBoost=Math.max(1,Math.min(65504,t)),this.calculateWeight()}calculateWeight(){const t=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,t))}}class Wx extends JR{constructor(e,t){super({renderer:e,createMaterial:n=>new $R(n),createQuadRenderer:n=>new fm(n)},t)}async render(e,t,n,i){const{sdrImage:s,gainMapImage:o,needsFlip:c}=await this.processImages(n,i,"flipY"),{gainMap:u,sdr:h}=this.createTextures(s,o,c);this.updateQuadRenderer(e,s,u,h,t),e.render()}}class e2 extends Wx{load([e,t,n],i,s,o){const c=this.prepareQuadRenderer();let u,h,f;const p=async()=>{if(u&&h&&f){try{await this.render(c,f,u,h)}catch(R){this.manager.itemError(e),this.manager.itemError(t),this.manager.itemError(n),typeof o=="function"&&o(R),c.disposeOnDemandRenderer();return}typeof i=="function"&&i(c),this.manager.itemEnd(e),this.manager.itemEnd(t),this.manager.itemEnd(n),c.disposeOnDemandRenderer()}};let m=!0,g=0,y=0,S=!0,x=0,_=0,A=!0,E=0,b=0;const O=()=>{if(typeof s=="function"){const R=g+x+E,C=y+_+b,H=m&&S&&A;s(new ProgressEvent("progress",{lengthComputable:H,loaded:C,total:R}))}};this.manager.itemStart(e),this.manager.itemStart(t),this.manager.itemStart(n);const I=new Si(this._internalLoadingManager);I.setResponseType("arraybuffer"),I.setRequestHeader(this.requestHeader),I.setPath(this.path),I.setWithCredentials(this.withCredentials),I.load(e,async R=>{if(typeof R=="string")throw new Error("Invalid sdr buffer");u=R,await p()},R=>{m=R.lengthComputable,y=R.loaded,g=R.total,O()},R=>{this.manager.itemError(e),typeof o=="function"&&o(R)});const D=new Si(this._internalLoadingManager);D.setResponseType("arraybuffer"),D.setRequestHeader(this.requestHeader),D.setPath(this.path),D.setWithCredentials(this.withCredentials),D.load(t,async R=>{if(typeof R=="string")throw new Error("Invalid gainmap buffer");h=R,await p()},R=>{S=R.lengthComputable,_=R.loaded,x=R.total,O()},R=>{this.manager.itemError(t),typeof o=="function"&&o(R)});const N=new Si(this._internalLoadingManager);return N.setRequestHeader(this.requestHeader),N.setPath(this.path),N.setWithCredentials(this.withCredentials),N.load(n,async R=>{if(typeof R!="string")throw new Error("Invalid metadata string");f=JSON.parse(R),await p()},R=>{A=R.lengthComputable,b=R.loaded,E=R.total,O()},R=>{this.manager.itemError(n),typeof o=="function"&&o(R)}),c}}class t2 extends Wx{load(e,t,n,i){const s=this.prepareQuadRenderer(),o=new Si(this._internalLoadingManager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),this.manager.itemStart(e),o.load(e,async c=>{if(typeof c=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const u=new Uint8Array(c);let h,f,p;try{const m=await jR(u);h=m.sdr,f=m.gainMap,p=m.metadata}catch(m){if(m instanceof Gx||m instanceof Vx)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),p={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},h=u;else throw m}try{await this.render(s,p,h.buffer,f==null?void 0:f.buffer)}catch(m){this.manager.itemError(e),typeof i=="function"&&i(m),s.disposeOnDemandRenderer();return}typeof t=="function"&&t(s),this.manager.itemEnd(e),s.disposeOnDemandRenderer()},n,c=>{this.manager.itemError(e),typeof i=="function"&&i(c)}),s}}const xl={apartment:"lebombo_1k.hdr",city:"potsdamer_platz_1k.hdr",dawn:"kiara_1_dawn_1k.hdr",forest:"forest_slope_1k.hdr",lobby:"st_fagans_interior_1k.hdr",night:"dikhololo_night_1k.hdr",park:"rooitou_park_1k.hdr",studio:"studio_small_03_1k.hdr",sunset:"venice_sunset_1k.hdr",warehouse:"empty_warehouse_01_1k.hdr"},Xx="https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/",Wa=r=>Array.isArray(r),dm=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"];function gh({files:r=dm,path:e="",preset:t=void 0,encoding:n=void 0,extensions:i}={}){let s=null,o=!1;t&&(pm(t),r=xl[t],e=Xx),o=Wa(r);const{extension:c,isCubemap:u}=mm(r);if(s=gm(c),!s)throw new Error("useEnvironment: Unrecognized file extension: "+r);const h=Pr(g=>g.gl);me.useLayoutEffect(()=>{if(c!=="webp"&&c!=="jpg"&&c!=="jpeg")return;function g(){Ja.clear(s,o?[r]:r)}h.domElement.addEventListener("webglcontextlost",g,{once:!0})},[r,h.domElement]);const f=Ja(s,o?[r]:r,g=>{(c==="webp"||c==="jpg"||c==="jpeg")&&g.setRenderer(h),g.setPath==null||g.setPath(e),i&&i(g)});let p=o?f[0]:f;if(c==="jpg"||c==="jpeg"||c==="webp"){var m;p=(m=p.renderTarget)==null?void 0:m.texture}return p.mapping=u?ur:Xa,"colorSpace"in p?p.colorSpace=n??u?"srgb":"srgb-linear":p.encoding=n??u?XR:WR,p}const n2={files:dm,path:"",preset:void 0,extensions:void 0};gh.preload=r=>{const e={...n2,...r};let{files:t,path:n=""}=e;const{preset:i,extensions:s}=e;i&&(pm(i),t=xl[i],n=Xx);const{extension:o}=mm(t);if(o==="webp"||o==="jpg"||o==="jpeg")throw new Error("useEnvironment: Preloading gainmaps is not supported");const c=gm(o);if(!c)throw new Error("useEnvironment: Unrecognized file extension: "+t);Ja.preload(c,Wa(t)?[t]:t,u=>{u.setPath==null||u.setPath(n),s&&s(u)})};const i2={files:dm,preset:void 0};gh.clear=r=>{const e={...i2,...r};let{files:t}=e;const{preset:n}=e;n&&(pm(n),t=xl[n]);const{extension:i}=mm(t),s=gm(i);if(!s)throw new Error("useEnvironment: Unrecognized file extension: "+t);Ja.clear(s,Wa(t)?[t]:t)};function pm(r){if(!(r in xl))throw new Error("Preset must be one of: "+Object.keys(xl).join(", "))}function mm(r){var e;const t=Wa(r)&&r.length===6,n=Wa(r)&&r.length===3&&r.some(o=>o.endsWith("json")),i=Wa(r)?r[0]:r;return{extension:t?"cube":n?"webp":i.startsWith("data:application/exr")?"exr":i.startsWith("data:application/hdr")?"hdr":i.startsWith("data:image/jpeg")?"jpg":(e=i.split(".").pop())==null||(e=e.split("?"))==null||(e=e.shift())==null?void 0:e.toLowerCase(),isCubemap:t,isGainmap:n}}function gm(r){return r==="cube"?qy:r==="hdr"?BR:r==="exr"?zR:r==="jpg"||r==="jpeg"?t2:r==="webp"?e2:null}const r2=r=>r.current&&r.current.isScene,s2=r=>r2(r)?r.current:r;function vm(r,e,t,n,i={}){var s,o,c,u;i={backgroundBlurriness:0,backgroundIntensity:1,backgroundRotation:[0,0,0],environmentIntensity:1,environmentRotation:[0,0,0],...i};const h=s2(e||t),f=h.background,p=h.environment,m={backgroundBlurriness:h.backgroundBlurriness,backgroundIntensity:h.backgroundIntensity,backgroundRotation:(s=(o=h.backgroundRotation)==null||o.clone==null?void 0:o.clone())!==null&&s!==void 0?s:[0,0,0],environmentIntensity:h.environmentIntensity,environmentRotation:(c=(u=h.environmentRotation)==null||u.clone==null?void 0:u.clone())!==null&&c!==void 0?c:[0,0,0]};return r!=="only"&&(h.environment=n),r&&(h.background=n),$r(h,i),()=>{r!=="only"&&(h.environment=p),r&&(h.background=f),$r(h,m)}}function _m({scene:r,background:e=!1,map:t,...n}){const i=Pr(s=>s.scene);return me.useLayoutEffect(()=>{if(t)return vm(e,r,i,t,n)}),null}function Yx({background:r=!1,scene:e,blur:t,backgroundBlurriness:n,backgroundIntensity:i,backgroundRotation:s,environmentIntensity:o,environmentRotation:c,...u}){const h=gh(u),f=Pr(p=>p.scene);return me.useLayoutEffect(()=>vm(r,e,f,h,{backgroundBlurriness:t??n,backgroundIntensity:i,backgroundRotation:s,environmentIntensity:o,environmentRotation:c})),me.useEffect(()=>()=>{h.dispose()},[h]),null}function a2({children:r,near:e=.1,far:t=1e3,resolution:n=256,frames:i=1,map:s,background:o=!1,blur:c,backgroundBlurriness:u,backgroundIntensity:h,backgroundRotation:f,environmentIntensity:p,environmentRotation:m,scene:g,files:y,path:S,preset:x=void 0,extensions:_}){const A=Pr(N=>N.gl),E=Pr(N=>N.scene),b=me.useRef(null),[O]=me.useState(()=>new bl),I=me.useMemo(()=>{const N=new Lp(n);return N.texture.type=Bn,N},[n]);me.useEffect(()=>()=>{I.dispose()},[I]),me.useLayoutEffect(()=>{if(i===1){const N=A.autoClear;A.autoClear=!0,b.current.update(A,O),A.autoClear=N}return vm(o,g,E,I.texture,{backgroundBlurriness:c??u,backgroundIntensity:h,backgroundRotation:f,environmentIntensity:p,environmentRotation:m})},[r,O,I.texture,g,E,o,i,A]);let D=1;return ao(()=>{if(i===1/0||D<i){const N=A.autoClear;A.autoClear=!0,b.current.update(A,O),A.autoClear=N,D++}}),me.createElement(me.Fragment,null,nR(me.createElement(me.Fragment,null,r,me.createElement("cubeCamera",{ref:b,args:[e,t,I]}),y||x?me.createElement(Yx,{background:!0,files:y,preset:x,path:S,extensions:_}):s?me.createElement(_m,{background:!0,map:s,extensions:_}):null),O))}function o2(r){var e,t,n,i;const s=gh(r),o=r.map||s;me.useMemo(()=>mx({GroundProjectedEnvImpl:NR}),[]),me.useEffect(()=>()=>{s.dispose()},[s]);const c=me.useMemo(()=>[o],[o]),u=(e=r.ground)==null?void 0:e.height,h=(t=r.ground)==null?void 0:t.radius,f=(n=(i=r.ground)==null?void 0:i.scale)!==null&&n!==void 0?n:1e3;return me.createElement(me.Fragment,null,me.createElement(_m,Qa({},r,{map:o})),me.createElement("groundProjectedEnvImpl",{args:c,scale:f,height:u,radius:h}))}function l2(r){return r.ground?me.createElement(o2,r):r.map?me.createElement(_m,r):r.children?me.createElement(a2,r):me.createElement(Yx,r)}const c2=me.forwardRef(({scale:r=10,frames:e=1/0,opacity:t=1,width:n=1,height:i=1,blur:s=1,near:o=0,far:c=10,resolution:u=512,smooth:h=!0,color:f="#000000",depthWrite:p=!1,renderOrder:m,...g},y)=>{const S=me.useRef(null),x=Pr(Y=>Y.scene),_=Pr(Y=>Y.gl),A=me.useRef(null);n=n*(Array.isArray(r)?r[0]:r||1),i=i*(Array.isArray(r)?r[1]:r||1);const[E,b,O,I,D,N,R]=me.useMemo(()=>{const Y=new ni(u,u),ie=new ni(u,u);ie.texture.generateMipmaps=Y.texture.generateMipmaps=!1;const te=new Ur(n,i).rotateX(Math.PI/2),Ae=new tn(te),X=new Zu;X.depthTest=X.depthWrite=!1,X.onBeforeCompile=de=>{de.uniforms={...de.uniforms,ucolor:{value:new Ye(f)}},de.fragmentShader=de.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),de.fragmentShader=de.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const re=new zn(OR),K=new zn(FR);return K.depthTest=re.depthTest=!1,[Y,te,X,Ae,re,K,ie]},[u,n,i,r,f]),C=Y=>{I.visible=!0,I.material=D,D.uniforms.tDiffuse.value=E.texture,D.uniforms.h.value=Y*1/256,_.setRenderTarget(R),_.render(I,A.current),I.material=N,N.uniforms.tDiffuse.value=R.texture,N.uniforms.v.value=Y*1/256,_.setRenderTarget(E),_.render(I,A.current),I.visible=!1};let H=0,q,W;return ao(()=>{A.current&&(e===1/0||H<e)&&(H++,q=x.background,W=x.overrideMaterial,S.current.visible=!1,x.background=null,x.overrideMaterial=O,_.setRenderTarget(E),_.render(x,A.current),C(s),h&&C(s*.4),_.setRenderTarget(null),S.current.visible=!0,x.overrideMaterial=W,x.background=q)}),me.useImperativeHandle(y,()=>S.current,[]),me.createElement("group",Qa({"rotation-x":Math.PI/2},g,{ref:S}),me.createElement("mesh",{renderOrder:m,geometry:b,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},me.createElement("meshBasicMaterial",{transparent:!0,map:E.texture,opacity:t,depthWrite:p})),me.createElement("orthographicCamera",{ref:A,args:[-n/2,n/2,i/2,-i/2,o,c]}))});function Sd({position:r,crateColor:e="#2563EB",hasAlert:t=!1,scale:n=1}){const i=me.useRef(null);return ao(s=>{i.current&&t&&i.current.scale.setScalar(1+.15*Math.sin(s.clock.elapsedTime*2))}),ke.jsxs("group",{position:r,scale:n,children:[ke.jsxs("mesh",{receiveShadow:!0,castShadow:!0,position:[0,0,0],children:[ke.jsx("boxGeometry",{args:[2.2,.18,1.4]}),ke.jsx("meshStandardMaterial",{color:"#f1f5f9",roughness:.4,metalness:.05})]}),[0,1,2].map(s=>ke.jsxs("mesh",{castShadow:!0,position:[-.45+s%2*.55,.28+Math.floor(s/2)*.38,s%2*.1],children:[ke.jsx("boxGeometry",{args:[.42,.35,.42]}),ke.jsx("meshStandardMaterial",{color:s===1?e:"#e2e8f0",roughness:.5,metalness:.08})]},s)),ke.jsxs("mesh",{castShadow:!0,position:[.65,.4,-.1],children:[ke.jsx("cylinderGeometry",{args:[.12,.12,.45,16]}),ke.jsx("meshStandardMaterial",{color:"#dbeafe",roughness:.3,metalness:.1})]}),ke.jsxs("mesh",{castShadow:!0,position:[.65,.68,-.1],children:[ke.jsx("sphereGeometry",{args:[.09,16,16]}),ke.jsx("meshStandardMaterial",{color:"#93c5fd",roughness:.3})]}),t&&ke.jsxs("mesh",{ref:i,position:[.95,.5,.5],children:[ke.jsx("sphereGeometry",{args:[.1,16,16]}),ke.jsx("meshStandardMaterial",{color:"#B45309",emissive:"#92400e",emissiveIntensity:.8,roughness:.2})]})]})}function u2({platforms:r}){const e=me.useRef(null),t=me.useRef(null),n=me.useRef(0),i=me.useRef([0,1]),s=me.useRef(0);function o(c){const u=[[0,1],[1,2],[0,2],[2,0],[1,0]].filter(([h,f])=>!(h===c[0]&&f===c[1]));return u[Math.floor(Math.random()*u.length)]}return ao((c,u)=>{if(!e.current||!t.current)return;n.current=Math.min(n.current+u*.45,1);const[h,f]=i.current,p=new F(...r[h]),m=new F(...r[f]),g=new F().addVectors(p,m).multiplyScalar(.5).add(new F(0,1.5,0)),y=n.current,S=new F().addVectors(new F().addVectors(p.clone().multiplyScalar((1-y)*(1-y)),g.clone().multiplyScalar(2*(1-y)*y)),m.clone().multiplyScalar(y*y));e.current.position.copy(S),t.current.position.copy(S),y>=1&&(s.current+=u*4,s.current>Math.PI&&(n.current=0,s.current=0,i.current=o(i.current)));const x=1.5+Math.sin(Date.now()*.005)*.5;t.current.intensity=x,e.current.rotation.x+=u*1.2,e.current.rotation.y+=u*.9}),ke.jsxs(ke.Fragment,{children:[ke.jsxs("mesh",{ref:e,castShadow:!0,children:[ke.jsx("boxGeometry",{args:[.18,.18,.18]}),ke.jsx("meshStandardMaterial",{color:"#38BDF8",emissive:"#0ea5e9",emissiveIntensity:1.2,roughness:.1,metalness:.2})]}),ke.jsx("pointLight",{ref:t,color:"#38BDF8",intensity:2,distance:1.5})]})}function h2({platforms:r}){const e=[[r[0],r[1]],[r[1],r[2]],[r[0],r[2]]];return ke.jsx(ke.Fragment,{children:e.map(([t,n],i)=>ke.jsx(GR,{points:[[t[0],t[1]+.1,t[2]],[n[0],n[1]+.1,n[2]]],color:"#cbd5e1",lineWidth:.8,opacity:.5,transparent:!0},i))})}function f2({children:r}){const e=me.useRef(null),t=me.useRef({x:0,y:0});return Pr(),me.useEffect(()=>{const n=i=>{t.current.x=(i.clientX/window.innerWidth-.5)*2,t.current.y=(i.clientY/window.innerHeight-.5)*2};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[]),ao(()=>{e.current&&(e.current.rotation.y+=(t.current.x*.15-e.current.rotation.y)*.04,e.current.rotation.x+=(-t.current.y*.08-e.current.rotation.x)*.04)}),ke.jsx("group",{ref:e,children:r})}function d2({isMobile:r}){const e=me.useMemo(()=>[[-2.2,.2,0],[0,-.3,-.5],[2.2,.1,.2]],[]);return ke.jsxs(ke.Fragment,{children:[ke.jsx("ambientLight",{intensity:.5}),ke.jsx("directionalLight",{position:[5,8,5],intensity:1.2,castShadow:!r}),ke.jsx(l2,{preset:"city",environmentIntensity:.3}),ke.jsxs(f2,{children:[ke.jsx(xd,{speed:1.2,rotationIntensity:.15,floatIntensity:.25,children:ke.jsx(Sd,{position:e[0],crateColor:"#2563EB",hasAlert:!0})}),ke.jsx(xd,{speed:.9,rotationIntensity:.1,floatIntensity:.2,children:ke.jsx(Sd,{position:e[1],crateColor:"#38BDF8",scale:1.1})}),ke.jsx(xd,{speed:1.4,rotationIntensity:.12,floatIntensity:.3,children:ke.jsx(Sd,{position:e[2],crateColor:"#93c5fd"})}),ke.jsx(h2,{platforms:e}),ke.jsx(u2,{platforms:e})]}),!r&&ke.jsx(c2,{position:[0,-1.2,0],opacity:.25,scale:8,blur:2.5,far:3})]})}function p2(){return ke.jsx("div",{className:"w-full h-full flex items-center justify-center",children:ke.jsxs("svg",{width:"340",height:"260",viewBox:"0 0 340 260",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[ke.jsx("rect",{x:"20",y:"160",width:"100",height:"16",rx:"4",fill:"#e2e8f0"}),ke.jsx("rect",{x:"35",y:"134",width:"36",height:"28",rx:"3",fill:"#2563EB",opacity:"0.8"}),ke.jsx("rect",{x:"75",y:"140",width:"36",height:"22",rx:"3",fill:"#dbeafe"}),ke.jsx("rect",{x:"120",y:"180",width:"100",height:"16",rx:"4",fill:"#e2e8f0"}),ke.jsx("rect",{x:"135",y:"150",width:"36",height:"32",rx:"3",fill:"#e2e8f0"}),ke.jsx("rect",{x:"175",y:"155",width:"36",height:"27",rx:"3",fill:"#38BDF8",opacity:"0.7"}),ke.jsx("rect",{x:"220",y:"165",width:"100",height:"16",rx:"4",fill:"#e2e8f0"}),ke.jsx("rect",{x:"235",y:"138",width:"36",height:"29",rx:"3",fill:"#e2e8f0"}),ke.jsx("rect",{x:"275",y:"143",width:"36",height:"24",rx:"3",fill:"#dbeafe"}),ke.jsx("line",{x1:"70",y1:"162",x2:"170",y2:"180",stroke:"#cbd5e1",strokeWidth:"1",strokeDasharray:"4 4"}),ke.jsx("line",{x1:"170",y1:"180",x2:"270",y2:"165",stroke:"#cbd5e1",strokeWidth:"1",strokeDasharray:"4 4"}),ke.jsx("rect",{x:"115",y:"140",width:"12",height:"12",rx:"2",fill:"#38BDF8",opacity:"0.9"}),ke.jsx("circle",{cx:"38",cy:"130",r:"5",fill:"#B45309",opacity:"0.9"})]})})}class m2 extends BS.Component{constructor(){super(...arguments);on(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?this.props.fallback:this.props.children}}function S2(){const r=me.useRef(null),[e,t]=me.useState(!1),n=typeof window<"u"&&(window.innerWidth<768||(navigator.hardwareConcurrency??4)<=2);return me.useEffect(()=>{if(!r.current)return;const i=new IntersectionObserver(([s])=>t(!s.isIntersecting),{threshold:0});return i.observe(r.current),()=>i.disconnect()},[]),ke.jsx("div",{ref:r,className:"w-full h-full",children:ke.jsx(m2,{fallback:ke.jsx(p2,{}),children:ke.jsx(xR,{camera:{position:[0,1.5,7],fov:40},gl:{alpha:!0,antialias:!n,powerPreference:"default"},dpr:[1,n?1.2:1.75],frameloop:e?"never":"always",style:{background:"transparent"},children:ke.jsx(d2,{isMobile:n})})})})}export{S2 as default};
