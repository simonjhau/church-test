export default {
  server: {
    proxy: {
      "/": {
        target: "http://localhost:9000",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
};
