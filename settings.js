module.exports = {
  uiPort: process.env.PORT || 1880,
  mqttReconnectTime: 15000,
  serialReconnectTime: 15000,
  debugMaxLength: 1000,

  adminAuth:
    process.env.NODE_RED_USERNAME && process.env.NODE_RED_PASSWORD_HASH
      ? {
          type: 'credentials',
          users: [
            {
              username: process.env.NODE_RED_USERNAME,
              password: process.env.NODE_RED_PASSWORD_HASH,
              permissions: '*',
            },
          ],
        }
      : undefined,

  httpAdminRoot: '/admin',
  httpNodeRoot: '/api',

  ui: {
    path: 'ui',
  },

  editorTheme: {
    projects: {
      enabled: false,
    },
    palette: {
      editable: true,
    },
    tours: false,
    userMenu: true,
  },

  logging: {
    console: {
      level: 'info',
      metrics: false,
      audit: false,
    },
  },

  logging: {
    console: {
      level: 'info',
      metrics: false,
      audit: false,
    },
  },

  exportGlobalContextKeys: false,

  contextStorage: {
    default: {
      module: 'memory',
    },
  },

  functionGlobalContext: {},

  httpAdminMiddleware: function (req, res, next) {
    if (req.method === 'GET' && req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          status: 'ok',
          timestamp: new Date().toISOString(),
          uptime: process.uptime(),
        }),
      );
      return;
    }
    next();
  },
};
