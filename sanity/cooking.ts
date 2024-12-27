// sanity/cooking.ts
export default {
     name: 'cooking',
     type: 'document',
     title: 'Cooking',
     fields: [

          {
               name: 'name',
               type: 'string',
               title: 'Name'
           },
       {
          name: 'expert',
          type: 'string',
          title: 'Expert'
      },
      {
          name: 'introdution',
          type: 'string',
          title: 'Introduction'
      },
      {
          name: 'recipe',
          type: 'string',
          title: 'Recipe'
      },
      {
          name: 'totka',
          type: 'string',
          title: 'Totkay'
      },
      {
          name: 'image',
          type: 'image',
          title:'Image'
      }
     ]
 }