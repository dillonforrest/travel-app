import { ping } from 'lambdagrid-mfi';

const routes = {
  '^/login$': ping('Layouts', 'get layout', 'login'),
  '^/destinations$': ping('Layouts', 'get layout', 'main', {
    main: ping('ReactViews', 'get view', 'DestinationList')
  }),
  '^/destinations/([^/+])$': ping('Layouts', 'get layout', 'main', {
    main: ping('ReactViews', 'get view', 'DestinationDetail')
  })
};

ping('UrlRouting', 'set 404', ping('ReactViews', 'get view', 'PageNotFound'));
ping('UrlRouting', 'set routes', routes);
