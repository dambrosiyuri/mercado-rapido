export default ({ config }) => {
  return {
    ...config,
    name: "Mercado Rápido",
    slug: "mercado-rapido",
    version: "1.0.0",
    extra: {
      apiBaseUrl: process.env.API_BASE_URL || "http://10.0.2.2:5000"
    }
  };
};
