import crel from 'crel';

export const sidebarWrapper = crel('aside', { class: 'sidebar' });
export const contentWrapper = crel('div', { class: 'content-wrapper' });

export const wrapper = crel(document.body, crel('div', { class: 'wrapper' },
  crel(sidebarWrapper),
  crel(contentWrapper)));
