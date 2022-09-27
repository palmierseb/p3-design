export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'slug',  
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      description: 'Reference the message the comment is associated to:',
      type: 'reference',
      to : {
        type : 'message'
      }
    }
  ],

}
