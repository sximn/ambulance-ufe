import { newSpecPage } from '@stencil/core/testing';
import { SukusAmbulanceWlList } from '../sukus-ambulance-wl-list';

describe('sukus-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SukusAmbulanceWlList],
      html: `<sukus-ambulance-wl-list></sukus-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <sukus-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sukus-ambulance-wl-list>
    `);
  });
});
