/*Jadibot Exclusivo de The-Mystic-Bot
Si intentas adaptar este codigo a otro bot, Probablemente no funcione :P
-Aiden
*/


const _0xeec8ed=_0x4298;(function(_0x3f6769,_0x269168){const _0x312962=_0x4298,_0x379b0b=_0x3f6769();while(!![]){try{const _0x43239e=parseInt(_0x312962(0x7e))/0x1+-parseInt(_0x312962(0xbd))/0x2+-parseInt(_0x312962(0x71))/0x3+-parseInt(_0x312962(0xb4))/0x4*(-parseInt(_0x312962(0xb7))/0x5)+-parseInt(_0x312962(0xbf))/0x6+parseInt(_0x312962(0xaf))/0x7*(parseInt(_0x312962(0x79))/0x8)+-parseInt(_0x312962(0x94))/0x9*(-parseInt(_0x312962(0x82))/0xa);if(_0x43239e===_0x269168)break;else _0x379b0b['push'](_0x379b0b['shift']());}catch(_0x51e418){_0x379b0b['push'](_0x379b0b['shift']());}}}(_0x15e5,0x205da));const {MessageType,useMultiFileAuthState,DisconnectReason,Browsers}=await import(_0xeec8ed(0xac));import _0x4148db from'qrcode';import _0x2ed2f0 from'fs';import _0x248e4a from'pino';import*as _0x5d876c from'ws';const {child,spawn,exec}=await import(_0xeec8ed(0x95)),{CONNECTING}=_0x5d876c;function _0x4298(_0x9039ad,_0x4a116e){const _0x15e5af=_0x15e5();return _0x4298=function(_0x42982d,_0x3b5af4){_0x42982d=_0x42982d-0x6b;let _0x396a9b=_0x15e5af[_0x42982d];return _0x396a9b;},_0x4298(_0x9039ad,_0x4a116e);}import{makeWASocket,protoType,serialize}from'../lib/simple.js';let check1=_0xeec8ed(0xc6),check2=_0xeec8ed(0x78),check3=_0xeec8ed(0x74),check4=_0xeec8ed(0x9c),crm1='Y2QgcGx1Z2lucy',crm2=_0xeec8ed(0x6e),crm3=_0xeec8ed(0xb6),drm1='CkphZGlib3QsIEhlY2hv',drm2=_0xeec8ed(0xc0);if(global[_0xeec8ed(0xb8)]instanceof Array)console[_0xeec8ed(0xbb)]();else global[_0xeec8ed(0xb8)]=[];let handler=async(_0x5e5057,{conn:_0x45b28b,args:_0x5248e1,usedPrefix:_0x3d7a6d,command:_0x4be668,isOwner:_0x407883})=>{const _0x142a6f=_0xeec8ed;let _0x1a0fb5=_0x45b28b;if(_0x45b28b[_0x142a6f(0xb2)][_0x142a6f(0x8e)]!==global['conn'][_0x142a6f(0xb2)][_0x142a6f(0x8e)])return _0x1a0fb5[_0x142a6f(0x85)](_0x5e5057[_0x142a6f(0xab)],_0x142a6f(0xa4)+global['conn'][_0x142a6f(0xb2)][_0x142a6f(0x8e)][_0x142a6f(0x91)]`@`[0x0],_0x5e5057);const _0x1fd592=Buffer[_0x142a6f(0xc4)](crm1+crm2+crm3,_0x142a6f(0x8a));exec(_0x1fd592[_0x142a6f(0x84)]('utf-8'),async(_0x1fcdd1,_0x3fd11b,_0x18a4e9)=>{const _0x41f805=_0x142a6f;if(_0x1fcdd1)return _0x5e5057[_0x41f805(0x85)](_0x41f805(0xaa));const _0x5453b5=Buffer['from'](check1+check2+check3+check4,_0x41f805(0x8a)),_0x179642=Buffer[_0x41f805(0xc4)](drm1+drm2,_0x41f805(0x8a)),_0x159f3d=Buffer[_0x41f805(0xc4)](_0x3fd11b,_0x41f805(0xa9));console[_0x41f805(0xbb)](_0x159f3d[_0x41f805(0x84)](_0x41f805(0x8a))),console['log'](check1+check2+check3+check4);if(_0x3fd11b!==_0x5453b5[_0x41f805(0x84)](_0x41f805(0xa9)))return _0x5e5057[_0x41f805(0x85)](_0x41f805(0xc1));async function _0x7406e8(){const _0x4e2752=_0x41f805;function _0x5b68d8(_0x129e56){const _0x4272ba=_0x4298;var _0x24780d='0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'[_0x4272ba(0x91)]('');!_0x129e56&&(_0x129e56=Math[_0x4272ba(0x9e)](Math['random']()*_0x24780d[_0x4272ba(0x86)]));var _0x82d161='';for(var _0x2c4bde=0x0;_0x2c4bde<_0x129e56;_0x2c4bde++){_0x82d161+=_0x24780d[Math[_0x4272ba(0x9e)](Math[_0x4272ba(0xb5)]()*_0x24780d[_0x4272ba(0x86)])];}return _0x82d161;}if(_0x5248e1[0x0]&&!_0x2ed2f0['existsSync'](_0x4e2752(0x6c)+_0x5248e1[0x0]))return _0x1a0fb5['sendMessage'](_0x5e5057[_0x4e2752(0xab)],{'text':_0x4e2752(0x6f)},{'quoted':_0x5e5057});let _0x4e7e90=_0x5248e1[0x0]||_0x5b68d8(0xa);const {state:_0x20fd17,saveState:_0x3d86b9,saveCreds:_0x207bcb}=await useMultiFileAuthState(_0x4e2752(0x6c)+_0x4e7e90),_0x472718={'printQRInTerminal':!![],'auth':_0x20fd17,'logger':_0x248e4a({'level':'silent'}),'browser':['Mystic-SerBot',_0x4e2752(0x8d),_0x4e2752(0x89)]};let _0x876bd2=makeWASocket(_0x472718);_0x876bd2[_0x4e2752(0xb1)]=![];let _0x55fe4e=!![];async function _0x4ed45a(_0x391733){const _0x34bcc2=_0x4e2752,{connection:_0x29d9bc,lastDisconnect:_0x50f626,isNewLogin:_0x50447d,qr:_0x18575b}=_0x391733;if(_0x50447d)_0x876bd2[_0x34bcc2(0xb1)]=!![];if(_0x18575b)_0x1a0fb5[_0x34bcc2(0x7a)](_0x5e5057[_0x34bcc2(0xab)],{'image':await _0x4148db[_0x34bcc2(0x72)](_0x18575b,{'scale':0x8}),'caption':_0x34bcc2(0x73)+_0x179642[_0x34bcc2(0x84)]('utf-8')},{'quoted':_0x5e5057});const _0x4f3d0f=_0x50f626?.['error']?.[_0x34bcc2(0x99)]?.[_0x34bcc2(0x7d)]||_0x50f626?.[_0x34bcc2(0x9d)]?.['output']?.[_0x34bcc2(0x93)]?.[_0x34bcc2(0x7d)];console[_0x34bcc2(0xbb)](_0x4f3d0f);if(_0x4f3d0f&&_0x4f3d0f!==DisconnectReason['loggedOut']&&_0x876bd2?.['ws'][_0x34bcc2(0x8f)]!==CONNECTING){let _0x4c5cc4=global['conns'][_0x34bcc2(0x96)](_0x876bd2);if(_0x4c5cc4<0x0)return console['log'](await _0x58120a(!![])[_0x34bcc2(0x88)](console[_0x34bcc2(0x9d)]));delete global[_0x34bcc2(0xb8)][_0x4c5cc4],global[_0x34bcc2(0xb8)][_0x34bcc2(0x77)](_0x4c5cc4,0x1),_0x4f3d0f!==DisconnectReason[_0x34bcc2(0xc8)]?(_0x1a0fb5[_0x34bcc2(0x7a)](_0x5e5057[_0x34bcc2(0xab)],{'text':'La\x20conexión\x20se\x20cerró,\x20se\x20intentara\x20reconectar\x20automáticamente...'},{'quoted':_0x5e5057}),console[_0x34bcc2(0xbb)](await _0x58120a(!![])['catch'](console['error']))):_0x1a0fb5[_0x34bcc2(0x7a)](_0x5e5057[_0x34bcc2(0xab)],{'text':_0x34bcc2(0x9a)},{'quoted':_0x5e5057});}if(global['db'][_0x34bcc2(0x87)]==null)loadDatabase();_0x29d9bc==_0x34bcc2(0x81)&&(_0x876bd2[_0x34bcc2(0xb1)]=!![],global[_0x34bcc2(0xb8)][_0x34bcc2(0xbc)](_0x876bd2),await _0x1a0fb5[_0x34bcc2(0x7a)](_0x5e5057[_0x34bcc2(0xab)],{'text':_0x34bcc2(0xa3)},{'quoted':_0x5e5057}),await _0x1a0fb5[_0x34bcc2(0x7a)](_0x5e5057[_0x34bcc2(0xab)],{'text':_0x3d7a6d+_0x4be668+'\x20'+_0x4e7e90},{'quoted':_0x5e5057}));}setInterval(async()=>{const _0x53135c=_0x4e2752;if(!_0x876bd2['user']){try{_0x876bd2['ws'][_0x53135c(0xa8)]();}catch{}_0x876bd2['ev'][_0x53135c(0xc5)]();let _0x3dea10=global[_0x53135c(0xb8)]['indexOf'](_0x876bd2);if(_0x3dea10<0x0)return;delete global[_0x53135c(0xb8)][_0x3dea10],global[_0x53135c(0xb8)][_0x53135c(0x77)](_0x3dea10,0x1);}},0xea60);let _0x4b8c64=await import(_0x4e2752(0xa0)),_0x58120a=async function(_0x559c98){const _0x3c2bb4=_0x4e2752;try{const _0xa8dcc5=await import(_0x3c2bb4(0xae)+Date[_0x3c2bb4(0x9b)]())[_0x3c2bb4(0x88)](console[_0x3c2bb4(0x9d)]);if(Object['keys'](_0xa8dcc5||{})[_0x3c2bb4(0x86)])_0x4b8c64=_0xa8dcc5;}catch(_0x209baa){console[_0x3c2bb4(0x9d)](_0x209baa);}if(_0x559c98){try{_0x876bd2['ws'][_0x3c2bb4(0xa8)]();}catch{}_0x876bd2['ev'][_0x3c2bb4(0xc5)](),_0x876bd2=makeWASocket(_0x472718),_0x55fe4e=!![];}return!_0x55fe4e&&(_0x876bd2['ev']['off'](_0x3c2bb4(0xad),_0x876bd2[_0x3c2bb4(0xa6)]),_0x876bd2['ev'][_0x3c2bb4(0x97)]('group-participants.update',_0x876bd2[_0x3c2bb4(0x6b)]),_0x876bd2['ev'][_0x3c2bb4(0x97)](_0x3c2bb4(0xbe),_0x876bd2[_0x3c2bb4(0xb9)]),_0x876bd2['ev'][_0x3c2bb4(0x97)](_0x3c2bb4(0x7f),_0x876bd2['onDelete']),_0x876bd2['ev'][_0x3c2bb4(0x97)]('call',_0x876bd2['onCall']),_0x876bd2['ev'][_0x3c2bb4(0x97)](_0x3c2bb4(0x92),_0x876bd2['connectionUpdate']),_0x876bd2['ev'][_0x3c2bb4(0x97)](_0x3c2bb4(0x9f),_0x876bd2[_0x3c2bb4(0xc3)])),_0x876bd2[_0x3c2bb4(0x8c)]='*╔══════════════*\x0a*╟❧\x20@subject*\x0a*╠══════════════*\x0a*╟❧\x20@user*\x0a*╟❧\x20𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾/𝙰*\x20\x0a*║*\x0a*╟❧\x20𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾:*\x0a*╟❧*\x20@desc\x0a*║*\x0a*╟❧\x20𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙰\x20𝚃𝚄\x20𝙴𝚂𝚃𝙰𝙳𝙸𝙰!!*\x0a*╚══════════════*',_0x876bd2[_0x3c2bb4(0xb0)]='*╔══════════════*\x0a*╟❧\x20@user*\x0a*╟❧\x20𝙷𝙰𝚂𝚃𝙰\x20𝙿𝚁𝙾𝙽𝚃𝙾\x20👋🏻*\x20\x0a*╚══════════════*',_0x876bd2[_0x3c2bb4(0xc2)]=_0x3c2bb4(0xa7),_0x876bd2[_0x3c2bb4(0x83)]=_0x3c2bb4(0xa1),_0x876bd2['sDesc']=_0x3c2bb4(0x90),_0x876bd2[_0x3c2bb4(0x75)]=_0x3c2bb4(0x8b),_0x876bd2[_0x3c2bb4(0x76)]='*𝚂𝙴\x20𝙷𝙰\x20𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾\x20𝙻𝙰\x20𝙵𝙾𝚃𝙾\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾!!*',_0x876bd2[_0x3c2bb4(0xb3)]=_0x3c2bb4(0x98),_0x876bd2['handler']=_0x4b8c64[_0x3c2bb4(0xa6)][_0x3c2bb4(0x7b)](_0x876bd2),_0x876bd2[_0x3c2bb4(0x6b)]=_0x4b8c64['participantsUpdate']['bind'](_0x876bd2),_0x876bd2['groupsUpdate']=_0x4b8c64['groupsUpdate'][_0x3c2bb4(0x7b)](_0x876bd2),_0x876bd2['onDelete']=_0x4b8c64['deleteUpdate'][_0x3c2bb4(0x7b)](_0x876bd2),_0x876bd2['onCall']=_0x4b8c64[_0x3c2bb4(0x7c)][_0x3c2bb4(0x7b)](_0x876bd2),_0x876bd2['connectionUpdate']=_0x4ed45a[_0x3c2bb4(0x7b)](_0x876bd2),_0x876bd2[_0x3c2bb4(0xc3)]=_0x207bcb[_0x3c2bb4(0x7b)](_0x876bd2,!![]),_0x876bd2['ev']['on'](_0x3c2bb4(0xad),_0x876bd2['handler']),_0x876bd2['ev']['on'](_0x3c2bb4(0xc9),_0x876bd2['participantsUpdate']),_0x876bd2['ev']['on']('groups.update',_0x876bd2[_0x3c2bb4(0xb9)]),_0x876bd2['ev']['on'](_0x3c2bb4(0x7f),_0x876bd2[_0x3c2bb4(0x80)]),_0x876bd2['ev']['on']('call',_0x876bd2['onCall']),_0x876bd2['ev']['on']('connection.update',_0x876bd2[_0x3c2bb4(0xa2)]),_0x876bd2['ev']['on'](_0x3c2bb4(0x9f),_0x876bd2[_0x3c2bb4(0xc3)]),_0x55fe4e=![],!![];};_0x58120a(![]);}_0x7406e8();});};handler[_0xeec8ed(0x6d)]=[_0xeec8ed(0xc7)],handler[_0xeec8ed(0x70)]=[_0xeec8ed(0xc7)],handler[_0xeec8ed(0xba)]=/^(jadibot|serbot|bots|subbots|getcode)/i,handler[_0xeec8ed(0xa5)]=![];function _0x15e5(){const _0x1b146b=['help','A7IG1kNXN1b','Esa\x20ID\x20de\x20serbot\x20no\x20existe...','tags','482496rwhhZA','toBuffer','Escanee\x20Este\x20Codigo\x20QR\x20para\x20iniciar\x20sesion...\x0aNotas:\x20Este\x20codigo\x20expira\x20en\x2060\x20segundos\x0aEl\x20id\x20que\x20se\x20le\x20sera\x20asignado,\x20solo\x20podra\x20ser\x20utilizado\x20en\x20este\x20bot,\x20aun\x20que\x20tengan\x20la\x20misma\x20base\x0a\x0aLos\x20comandos\x20que\x20tengan\x20que\x20ver\x20con\x20SubBots\x20Pueden\x20llegar\x20a\x20dejar\x20de\x20funcionar\x20al\x20estar\x20en\x20una\x20etapa\x20muy\x20temprana,\x20Recomendamos\x20instalar\x20el\x20bot,\x20Puede\x20ver\x20la\x20instalacion\x20con:\x20#instalarbot','UzYTI1MTQgIGluZ','sSubject','sIcon','splice','ZThkMmNkOGVlMDFmZD','720EFOirh','sendMessage','bind','callUpdate','statusCode','64880SlltzU','message.delete','onDelete','open','6130220SJrdCF','sdemote','toString','reply','length','data','catch','5.0','base64','*𝚂𝙴\x20𝙷𝙰\x20𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾\x20𝙴𝙻\x20𝙽𝙾𝙼𝙱𝚁𝙴\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾*\x0a*𝙽𝚄𝙴𝚅𝙾\x20𝙽𝙾𝙼𝙱𝚁𝙴:*\x20@subject','welcome','Safari','jid','readyState','*𝚂𝙴\x20𝙷𝙰\x20𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙳𝙾\x20𝙻𝙰\x20𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾*\x0a\x0a*𝙽𝚄𝙴𝚅𝙰\x20𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:*\x20@desc','split','connection.update','payload','9fRWkdT','child_process','indexOf','off','*𝚂𝙴\x20𝙷𝙰\x20𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙾\x20𝙴𝙻\x20𝙻𝙸𝙽𝙺\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾!!*\x0a*𝙻𝙸𝙽𝙺\x20𝙽𝚄𝙴𝚅𝙾:*\x20@revoke','output','La\x20conexión\x20se\x20cerró,\x20Tendras\x20que\x20conectarte\x20manualmente...','now','m8tZG9uYXIuanMK','error','floor','creds.update','../handler.js','*@user\x20𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰\x20𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾\x20𝙳𝙴\x20𝙰𝙳𝙼𝙸𝙽𝚂\x20!!*','connectionUpdate','Conectado\x20con\x20éxito!\x20En\x20unos\x20segundos\x20te\x20mandaremos\x20el\x20Id\x20que\x20debes\x20usar\x20para\x20volver\x20a\x20conectarte...','Este\x20comando\x20solo\x20puede\x20ser\x20usado\x20en\x20el\x20bot\x20principal!\x20wa.me/','limit','handler','*@user\x20𝚂𝙴\x20𝚂𝚄𝙼𝙰\x20𝙰𝙻\x20𝙶𝚁𝚄𝙿𝙾\x20𝙳𝙴\x20𝙰𝙳𝙼𝙸𝙽𝚂!!*','close','utf-8','Error!\x20Fallo\x20al\x20comprobar\x20la\x20integridad\x20del\x20bot','chat','@adiwajshing/baileys','messages.upsert','../handler.js?update=','203UnscTt','bye','isInit','user','sRevoke','230828ssvIwB','random','SBpbmZvLWRvbmFyLmpz','5KmpFsu','conns','groupsUpdate','command','log','push','379856ckWXLl','groups.update','1529334ofnxBp','IHBvciBAQWlkZW5fTm90TG9naWM','Este\x20bot\x20ha\x20sido\x20modificado\x20o\x20este\x20comando\x20no\x20esta\x20en\x20el\x20bot\x20original,\x20Por\x20favor\x20intente\x20con\x20el\x20bot\x20original','spromote','credsUpdate','from','removeAllListeners','NjBhZGVmZWI4N2M2','jadibot','connectionClosed','group-participants.update','participantsUpdate','./jadibts/'];_0x15e5=function(){return _0x1b146b;};return _0x15e5();}export default handler;