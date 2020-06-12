/* eslint-disable @typescript-eslint/no-namespace */
type CacheType = {
  revision: string;
  url: string;
};

type CacheProvider = {
  __WB_MANIFEST: CacheType[];
};

namespace CustomServiceWorkerNS {
  export class CustomServiceWorkerCache {
    private cache = ((self as unknown) as CacheProvider).__WB_MANIFEST || [];
    private routes = ['home', 'index', 'about'];
    public constructor() {
      /* */
    }

    public async register(basename: string): Promise<void> {
      /* */
      try {
        this.log('Cache', this.cache);
        const cache = await caches.open(`install-${CustomServiceWorkerNS.VERSION}`);
        return cache.addAll(
          this.cache
            .map((entry) => `${basename}${entry.url}`)
            .concat(this.routes.map((route) => `${basename}${route}`)),
        );
      } catch (error) {
        throw error;
      }
    }

    public fetch(event: FetchEvent): void {
      if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') {
        return;
      }

      event.respondWith(
        caches.match(event.request).then(async (cached) => {
          if (cached) {
            return cached;
          } else {
            const response = await self.fetch(event.request, { credentials: 'same-origin' });
            if (response) {
              const responseCopy = response.clone();
              const cache = await caches.open(`runtime-${CustomServiceWorkerNS.VERSION}`);
              if (cache) {
                cache.put(event.request, responseCopy);
              }
            }
            return response;
          }
        }),
      );
    }

    private log(...args: unknown[]) {
      const styles = [`background-color: #080`];
      console.log(...[`%cServiceWorkerCache ${CustomServiceWorkerNS.VERSION}`, styles.join(';')], args);
    }
  }
}
