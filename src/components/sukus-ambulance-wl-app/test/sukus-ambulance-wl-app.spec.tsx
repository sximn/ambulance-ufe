import { newSpecPage } from '@stencil/core/testing';
import { SukusAmbulanceWlApp } from '../sukus-ambulance-wl-app';

describe('sukus-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SukusAmbulanceWlApp],
      html: `<sukus-ambulance-wl-app></sukus-ambulance-wl-app>`,
    });
    // expect(page.root).toEqualHtml(`
    //   <sukus-ambulance-wl-app>
    //     <mock:shadow-root>
    //       <slot></slot>
    //     </mock:shadow-root>
    //   </sukus-ambulance-wl-app>
    // `);
  });
});
