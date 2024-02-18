import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;
export const selectFavorites = state => state.adverts.favorites;

export const selectMaxPrice = createSelector([selectAdverts], adverts => {
  if (adverts.length !== 0) {
    return adverts.reduce(
      (max, item) =>
        Number.parseInt(item.rentalPrice.replace(/[^\d]/g, '')) > max
          ? Number.parseInt(item.rentalPrice.replace(/[^\d]/g, ''))
          : max,
      Number.parseInt(adverts[0].rentalPrice.replace(/[^\d]/g, ''))
    );
  }
  return 0;
});

export const selectMinPrice = createSelector([selectAdverts], adverts => {
  if (adverts.length !== 0) {
    return adverts.reduce(
      (min, item) =>
        Number.parseInt(item.rentalPrice.replace(/[^\d]/g, '')) < min
          ? Number.parseInt(item.rentalPrice.replace(/[^\d]/g, ''))
          : min,
      Number.parseInt(adverts[0].rentalPrice.replace(/[^\d]/g, ''))
    );
  }
  return 0;
});
