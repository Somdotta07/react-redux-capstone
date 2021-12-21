const countries = () => Promise.resolve({
  data: [
    {
      code: 'AF',
      name: 'Afganistan',
      latest_data: {
        recovered: 123527,
      },
    },
    {
      code: 'ZM',
      name: 'Zambia',
      latest_data: {
        recovered: 204553,
      },
    },
  ],
});

export default countries;
