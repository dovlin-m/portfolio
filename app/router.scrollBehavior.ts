export default function (to, from, saved) {
  let target = { x: 0, y: 0 };
  let behavior = 'auto';

  if (to.path === from.path && to.query !== from.query) {
    behavior = 'smooth';
  }

  if (to.hash) {
    // @ts-ignore
    target = { selector: to.hash };
  }

  return {
    ...(saved || target),
    behavior,
  };
}
