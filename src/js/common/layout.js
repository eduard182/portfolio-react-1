function createMediaQueryWithMaxWidth(maxWidth) {
  return `@media only screen and (max-width: ${maxWidth}px)`;
}

export const phone = createMediaQueryWithMaxWidth(480);

export const tablet = createMediaQueryWithMaxWidth(768);

export const desktop = createMediaQueryWithMaxWidth(992);

export const largeScreen = createMediaQueryWithMaxWidth(1200);
