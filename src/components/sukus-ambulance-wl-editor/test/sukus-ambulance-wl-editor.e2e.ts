import { newE2EPage } from '@stencil/core/testing';

describe('sukus-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sukus-ambulance-wl-editor></sukus-ambulance-wl-editor>');

    const element = await page.find('sukus-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
