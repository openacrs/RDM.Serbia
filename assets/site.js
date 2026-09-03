
document.addEventListener('DOMContentLoaded', async () => {
  const q=document.getElementById('search-q'), go=document.getElementById('search-go'), results=document.getElementById('search-results');
  if(q&&results){
    let idx=[];
    try{idx=await fetch('../assets/search-index.json').then(r=>r.json())}catch(e){}
    const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const run=()=>{
      const term=q.value.toLocaleLowerCase('sr').trim();
      if(!term){results.innerHTML='';return}
      const matches=idx.filter(x=>(x.title+' '+x.text).toLocaleLowerCase('sr').includes(term)).slice(0,80);
      results.innerHTML=matches.length?matches.map(x=>`<div class="search-result"><a href="../${x.route.replace(/^\/+/,'')}">${esc(x.title)}</a><p>${esc(x.text.slice(0,260))}${x.text.length>260?'…':''}</p></div>`).join(''):'<p>Nema rezultata.</p>';
    };
    go?.addEventListener('click',run); q.addEventListener('keydown',e=>{if(e.key==='Enter')run()});
  }
});
