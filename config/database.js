module.exports = ({ env }) => {
	
	const dbUrl = new URL(env('DATABASE_URL'));
	return {
	  connection: {
		client: 'postgres',
		connection: {
		  host: dbUrl.hostname,
		  port: Number(dbUrl.port),
		  database: dbUrl.pathname.substring(1),
		  user: dbUrl.username,
		  password: dbUrl.password,
		  ssl: {
			rejectUnauthorized: false, // Railway používa SSL
		  },
		},
	  },
	};
  };
  