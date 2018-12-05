export default {
  sections: [
    {
      type: 'dev/welcome'
    },
    [
      {
        type: 'dev/info'
      },
      {
        type: 'invite'
      }
    ],
    [
      {
        type: 'recent-docs',
        options: {
          limit: 20
        }
      },
      {
        type: 'dev/first-steps'
      }
    ]
  ]
}
