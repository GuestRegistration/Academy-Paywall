export default {
    install(Vue, options) {
        const { id } = options;
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', id);
    }
  };