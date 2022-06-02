import { worker } from "./mocks/browser";

console.log("#### worker.start() ####");

worker.start({
  warnOnUncaptured: false,
  onUnhandledRequest: (req) => {
    console.error(
      "Encontrou uma solicitação %s não tratada para %s",
      req.method,
      req.url.href
    );
  },
});

// ssh-keygen -t ed25519 -C "teste@tqi.com.br"
