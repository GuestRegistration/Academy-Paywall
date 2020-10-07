const get = S => document.querySelector(S);const hideElement = E => E.setAttribute('style', 'display: none');let SSR = get('#ssr');let preLoader = get('#preloader');let appScript = get('#app-script');appScript.onload = e => {hideElement(SSR);hideElement(preLoader);}

