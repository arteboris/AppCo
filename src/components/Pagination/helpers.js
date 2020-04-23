const showPagination = (page, totalPages) => {
  const total = [];

  if (totalPages === 10) {
    if (page <= 4) {
      for (let i = 1; i <= 5; i += 1) {
        total.push(i);
      }
    } else if (page > 4 && page <= 10) {
      for (let i = 4; i <= 10; i += 1) {
        total.push(i);
      }
    }
  } else if (totalPages === 14) {
    if (page <= 4) {
      for (let i = 1; i <= 5; i += 1) {
        total.push(i);
      }
    } else if (page > 4 && page <= 8) {
      for (let i = 4; i <= 9; i += 1) {
        total.push(i);
      }
    } else if (page > 8 && page <= 14) {
      for (let i = 8; i <= 14; i += 1) {
        total.push(i);
      }
    }
  } else if (totalPages === 20) {
    if (page <= 4) {
      for (let i = 1; i <= 5; i += 1) {
        total.push(i);
      }
    } else if (page > 4 && page <= 9) {
      for (let i = 4; i <= 10; i += 1) {
        total.push(i);
      }
    } else if (page > 9 && page <= 14) {
      for (let i = 9; i <= 15; i += 1) {
        total.push(i);
      }
    } else if (page > 14 && page <= 20) {
      for (let i = 14; i <= 20; i += 1) {
        total.push(i);
      }
    }
  } else if (totalPages === 40) {
    if (page <= 4) {
      for (let i = 1; i <= 5; i += 1) {
        total.push(i);
      }
    } else if (page > 4 && page <= 9) {
      for (let i = 4; i <= 10; i += 1) {
        total.push(i);
      }
    } else if (page > 9 && page <= 14) {
      for (let i = 9; i <= 15; i += 1) {
        total.push(i);
      }
    } else if (page > 14 && page <= 20) {
      for (let i = 14; i <= 21; i += 1) {
        total.push(i);
      }
    } else if (page > 20 && page <= 25) {
      for (let i = 20; i <= 26; i += 1) {
        total.push(i);
      }
    } else if (page > 25 && page <= 30) {
      for (let i = 25; i <= 31; i += 1) {
        total.push(i);
      }
    } else if (page > 30 && page <= 35) {
      for (let i = 30; i <= 36; i += 1) {
        total.push(i);
      }
    } else if (page > 35 && page <= 40) {
      for (let i = 35; i <= 40; i += 1) {
        total.push(i);
      }
    }
  }

  return total;
};

export default showPagination;
