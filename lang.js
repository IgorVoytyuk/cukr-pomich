(function(){
  var bs=document.querySelectorAll('.lang button'),ms=document.querySelectorAll('main[data-lang]');
  function set(l){
    ms.forEach(function(m){m.hidden=m.getAttribute('data-lang')!==l});
    bs.forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-l')===l)});
    document.documentElement.lang=l;
    try{localStorage.setItem('lang',l)}catch(e){}
  }
  bs.forEach(function(b){b.onclick=function(){set(b.getAttribute('data-l'))}});
  var s=null;try{s=localStorage.getItem('lang')}catch(e){}
  if(!s&&/[?&]lang=ru/.test(location.search))s='ru';
  if(s)set(s);
})();
