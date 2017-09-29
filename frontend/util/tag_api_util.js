export const postTag = (tag) => (
  $.ajax({
    url: `api/tags`,
    method: 'POST',
    data: { tag }
  })
);

export const getTag = (tagId) => (
  $.ajax({
    url: `api/tags/${tagId}`
  })
);
