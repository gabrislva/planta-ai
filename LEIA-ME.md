# Planta Aí

Site estático (HTML + CSS + JS), sem instalação. Abra `index.html` ou use a extensão Live Server.

## Onde mudar cada coisa
- Espécies, preços, bairros e artigos: `js/data.js`
- Cores e fontes: variáveis no topo de `css/style.css`
- Menu e rodapé (todas as páginas): função `nav()` em `js/app.js`
- Dados (pedidos, voluntários): objeto `db` em `js/app.js`

## O que ainda é simulado
Hoje tudo fica no navegador (localStorage), então um voluntário não vê pedidos feitos em outro computador.
Próximos passos para ficar real:
1. Trocar o `db` por um banco online (Supabase é uma boa opção gratuita) com login de voluntário.
2. Ligar o Pix (Mercado Pago, Asaas ou similar), que exige um pequeno servidor/função para criar a cobrança e confirmar o pagamento.
3. Só marcar o pedido como "pendente" depois da confirmação do pagamento.
