module.exports = {
  apps : [
    {
      name : 'Gateway',
      script : 'gateway/src/server.js',
      watch : true,
      env_development : {
        PORT : 3000,
        NODE_ENV : 'development',
        BCRYPT_SALT_ROUNDS : 10,
        JWT_KEY : "all are humans"
      },
      env_production : {
        PORT : 4000,
        NODE_ENV : 'production'
      }
    }
  ],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
