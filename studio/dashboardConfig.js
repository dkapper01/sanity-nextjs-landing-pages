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
                  buildHookId: '5d9006c4ab11f727c3d35439',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-di2w9sjc',
                  apiId: 'c8b1438b-d2b9-4881-9857-54711c030c71'
                },
                {
                  buildHookId: '5d9006c4bc2b5aa1688d48b2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sw2bgabo',
                  apiId: '04a20212-622c-413c-9c3c-d2b239e58990'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkapper01/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sw2bgabo.netlify.com', category: 'apps'}
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
