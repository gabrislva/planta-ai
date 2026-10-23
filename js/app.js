/* ===== Lógica compartilhada. Tudo é salvo no navegador (localStorage).
   Para ter dados reais, troque só o objeto `db` por chamadas ao Supabase/Firebase. ===== */
const $ = (s, el = document) => el.querySelector(s);
const brl = n => n.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
const esp = id => ESPECIES.find(e => e.id === id);
const db = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem('pa_' + k)) ?? d } catch { return d } },
  set: (k, v) => localStorage.setItem('pa_' + k, JSON.stringify(v))
};
const cart = {
  get: () => db.get('cart', []),
  add(i){ const c = this.get(), f = c.find(x => x.especie === i.especie && x.bairro === i.bairro);
          f ? f.qtd += i.qtd : c.push(i); db.set('cart', c); nav() },
  remove(n){ const c = this.get(); c.splice(n, 1); db.set('cart', c) },
  total(){ return this.get().reduce((s, i) => s + esp(i.especie).preco * i.qtd, 0) },
  count(){ return this.get().reduce((s, i) => s + i.qtd, 0) }
};
const opts = (lista, sel) => lista.map(b => `<option${b === sel ? ' selected' : ''}>${b}</option>`).join('');

function nav(){ /* menu único para todas as páginas */
  $('#topo').innerHTML = `<div class="wrap"><a class="logo" href="index.html">🌱 Planta Aí</a><nav>
    <a href="index.html">Início</a><a href="plantas.html">Plantar</a><a href="index.html#sobre">Sobre nós</a>
    <a href="index.html#contato">Contato</a><a href="login.html">Seja voluntário</a>
    <a class="cart" href="checkout.html">Sacola (${cart.count()})</a></nav></div>`;
  const f = $('#rodape'); if (f) f.innerHTML = `<div class="wrap">Planta Aí · Todo valor arrecadado é doado à instituição e usado em plantios em Florianópolis.</div>`;
}
document.addEventListener('DOMContentLoaded', nav);
