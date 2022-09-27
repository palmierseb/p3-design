export default {
  name: 'message',
  title: 'Message',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'text in Message',
      type: 'string',
    },
    {
      name: 'blockMsg',
      title: 'Block Msg',
      description : 'ADMIN Controls: Toggle if Tweet is deemed inappropriate',
      type: 'boolean',     
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'MessageImage',
      type: 'string',
    },
  ],
  }
    