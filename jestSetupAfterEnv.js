window.fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    text: () => Promise.resolve(),
    json: () => Promise.resolve(),
  });
});

fetch = window.fetch;
