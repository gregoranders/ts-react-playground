/* eslint-disable @typescript-eslint/no-namespace */
type CustomSerivceWorkerType = WorkerGlobalScope & typeof globalThis & ServiceWorkerGlobalScope;

namespace CustomServiceWorkerNS {
  export const VERSION = '0.0.1';

  class CustomServiceWorker {
    public constructor(
      private service: CustomSerivceWorkerType,
      private basename = '/',
      private cache = new CustomServiceWorkerNS.CustomServiceWorkerCache(),
    ) {
      this.onInstall = this.onInstall.bind(this);
      this.onActivate = this.onActivate.bind(this);
      this.onFetch = this.onFetch.bind(this);
    }

    public register() {
      this.service.oninstall = this.onInstall;
      this.service.onactivate = this.onActivate;
      this.service.onfetch = this.onFetch;
    }

    private onInstall(event: ExtendableEvent) {
      event.waitUntil(
        new Promise<void>((resolve) => {
          resolve(this.cache.register(this.basename));
        }),
      );
    }

    private onActivate(event: ExtendableEvent) {
      this.log('onActivate');
      event.waitUntil(this.service.clients.claim());
    }

    private onFetch(event: FetchEvent) {
      this.cache.fetch(event);
    }

    private log(...args: unknown[]) {
      const styles = [`background-color: #008`];
      console.log(...[`%cServiceWorker ${CustomServiceWorkerNS.VERSION}`, styles.join(';')], args);
    }
  }

  const url = new URL(location.toString());
  const basename = url.searchParams.get('basename') || '/';

  const serviceWorker = new CustomServiceWorker((self as unknown) as CustomSerivceWorkerType, basename);
  serviceWorker.register();
}
