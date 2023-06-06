//Run this to setup the databases in mongo
function seed(dbName, user, password) {
    db = db.getSiblingDB(dbName);
    db.createUser({
      user: user,
      pwd: password,
      roles: [{ role: 'readWrite', db: dbName }],
    });

    db.createCollection('api_keys');

    db.api_keys.insert({
      metadata: 'To be used by the xyz vendor',
      key: 'GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj',
      version: 1,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  seed('twitter-database', 'twitter-database-user', 'twitter');
  seed('twitter-test-database', 'twitter-test-database-user', 'test-twitter');