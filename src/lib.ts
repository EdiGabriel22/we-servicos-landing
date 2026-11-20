/** Prefixa caminhos de /public com o base path (necessário no GitHub Pages). */
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const asset = (path: string) => base + path.replace(/^\//, '');

export const WHATSAPP_NUMBER = '5511999999999';
export const whatsappLink = (text = 'Olá! Gostaria de solicitar um orçamento.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
