const pg = require('pg');
const connection_string: string = "postgres://usazetuz:YURmRz6z-mxPZqqNTvj9gVIogc8qws5J@stampy.db.elephantsql.com/usazetuz";
const db = new pg.Client(connection_string);