module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",      // bleu principal (CTA)
        secondary: "#0F172A",    // dark navy (text important)
        accent: "#22C55E",       // vert (succès / confirmation)
        warning: "#F59E0B",      // orange (alert / promo)
        danger: "#EF4444",       // rouge (erreur)
        background: "#F8FAFC",   // fond soft
        card: "#FFFFFF",         // cartes
        muted: "#64748B",        // texte secondaire
      },
    },
  },
  plugins: [],
}