import { newSpecPage } from '@stencil/core/testing';
import { SukusAmbulanceWlEditor } from '../sukus-ambulance-wl-editor';

describe('sukus-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SukusAmbulanceWlEditor],
      html: `<sukus-ambulance-wl-editor></sukus-ambulance-wl-editor>`,
    });
    // expect(page.root).toEqualHtml(`
    //   <sukus-ambulance-wl-editor>
    //     <mock:shadow-root>
    //       <slot></slot>
    //     </mock:shadow-root>
    //   </sukus-ambulance-wl-editor>
    // `);
  });
});
