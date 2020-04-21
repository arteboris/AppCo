export const fullName = state => state.user.fullName;

export const dates = state => state.user.stats.map(e => e.date);

export const clicks = state => state.user.stats.map(e => e.clicks);

export const views = state => state.user.stats.map(e => e.page_views);
