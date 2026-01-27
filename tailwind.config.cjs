/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cor principal: Azul profissional (remete a software e confiança)
        primary: '#2563eb',     // Blue 600
        primaryDark: '#1d4ed8', // Blue 700
        
        // Sucesso, Alerta e Erro (Essencial para gestão de pedidos)
        success: '#10b981',     // Emerald 500 (Pedido Pronto/Pago)
        warning: '#f59e0b',     // Amber 500 (Pedido Atrasado)
        danger: '#ef4444',      // Red 500 (Pedido Cancelado/Erro)

        // Tons de fundo e interface
        background: '#f1f5f9',  // Slate 100 (Fundo da tela)
        surface: '#ffffff',     // Branco (Fundo de cards e tabelas)
        
        // Texto
        textBase: '#0f172a',    // Slate 900 (Títulos e textos fortes)
        textMuted: '#64748b',   // Slate 500 (Legendas e textos de apoio)
      },
      fontSize: {
        title: ["1.25rem", { lineHeight: "1.75rem" }],
        subtitle: ["1rem", { lineHeight: "1.5rem" }],
        body: ["0.875rem", { lineHeight: "1.25rem" }],
      },
    },
  },
  plugins: [],
};
