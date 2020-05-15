export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebe5ba7f23904212b03af33',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3e6j1zxb',
                  apiId: '9217581b-5a78-455b-8ce9-0f36699a174e'
                },
                {
                  buildHookId: '5ebe5ba73ef93eedb45d0f33',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e814guc1',
                  apiId: '99c4e556-1b97-42e8-b041-7c774f76f129'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RaduGabor/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e814guc1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
