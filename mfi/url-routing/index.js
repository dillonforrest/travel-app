import { ping } from 'lambdagrid-mfi';

const routes = {
  '^/login$': ping('Layouts', 'get layout', 'login'),
  '^/destinations$': ping('Layouts', 'get layout', 'main', {
    main: ping('Pagelets', 'get pagelet', 'DestinationList')
  }),
  '^/destinations/([^/+])$': ping('Layouts', 'get layout', 'main', {
    main: ping('Pagelets', 'get pagelet', 'DestinationDetail')
  })
};

ping('UrlRouting', 'set 404', ping('ReactViews', 'get view', 'PageNotFound'));
ping('UrlRouting', 'set routes', routes);
