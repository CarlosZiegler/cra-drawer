## Technologies Used

- React-query for fetch data
- React Hook Form for manage form state
- Jest and React Library Testing for tests
- Antd for design system
- Styled Components for extend styles
- Yup for data Validation
- Github Actions for Automate tests
- Git flow for manage Branches (Main - Develop - Feature Branches - Hotfix)
- Deploy on Vercel
- FakeAPI for fetch fake data

### Path structure

- assets : to share images
- components : to share common Components
- context : to use in useContext hook to share data in SPA
- hooks : to share hooks
- infra : to share axios api
- models : to share class for company, to normalize and manipulate Company Object
- pages : to share pages
- service : to share services that call extern apis
- tests : to share mock context, mock helpers , Data builders to help in tests.
- theme : to share theme

### Comments

First step I tried do more tests but I have a issue if I using React-Query, that I need more time to solve tests config and mocks. Alternative is using tool like MSW (Mock Service Work) intercepting requests on the network level.

Create concept of this APP is hard without a Design. I think is better if I can create some design from Figma and then implement it BUT this take more time.

In first moment I will try to implement something with Gatsby and GraphQL, I read the Documentation but I think if I would go fast, that is no good Idee to implement it with a stack that I have less contact.

Design could be better, but I think its take more time. Like responsiveness.

I tried to separate app in layers and responsabilities, This can certainly be improved.

Some components can be more adaptable and reused, using composition. (TIME)

Maybe use env variables, for example to hide url of api.

Adjusting tests maybe we can add more tests. (TIME)

Maybe add storybook to document our components. (TIME)
