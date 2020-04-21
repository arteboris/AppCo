const showPagination = page => {
  const total = [];

  if (page < 5) {
    for (let i = 1; i <= 5; i += 1) {
      total.push(i);
    }
  } else if (page > 4 && page < 10) {
    for (let i = 5; i <= 10; i += 1) {
      total.push(i);
    }
  } else if (page > 9 && page < 15) {
    for (let i = 10; i <= 15; i += 1) {
      total.push(i);
    }
  } else if (page > 14 && page <= 20) {
    for (let i = 15; i <= 20; i += 1) {
      total.push(i);
    }
  } else if (page > 20 && page < 25) {
    for (let i = 20; i <= 25; i += 1) {
      total.push(i);
    }
  } else if (page > 24 && page < 30) {
    for (let i = 25; i <= 30; i += 1) {
      total.push(i);
    }
  } else if (page > 29 && page < 35) {
    for (let i = 30; i <= 35; i += 1) {
      total.push(i);
    }
  }

  return total;
};

export default showPagination;
