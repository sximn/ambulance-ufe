import { newSpecPage } from '@stencil/core/testing';
import { SukusAmbulanceWlList } from '../sukus-ambulance-wl-list';

describe('sukus-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SukusAmbulanceWlList],
      html: `<sukus-ambulance-wl-list></sukus-ambulance-wl-list>`,
    });
      const wlList = page.rootInstance as SukusAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
