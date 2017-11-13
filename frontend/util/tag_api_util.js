export const postTag = (tag) => (
  $.ajax({
    url: `api/tags`,
    method: 'POST',
    data: { tag }
  })
);

export const getTag = (tagName) => (
  $.ajax({
    url: `api/tags/${tagName}`
  })
);
