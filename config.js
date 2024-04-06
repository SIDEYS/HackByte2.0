const configObj = {}

let conn = 'mongodb://localhost:27017/hackbyte'
if(process.env.ENV=='prod')
{
    conn = 'mongodb://localhost:27017/hackbyte'
}

configObj.connectionString = conn

export const config = configObj;