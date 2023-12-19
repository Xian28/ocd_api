After cloning, open the directory.
Type npm install --force
Type npm run dev.
The backend server is now running.

For the database, use postgresql.
Refer to the .env file for the details.
Take note of the database name, which is OCD.
Also, create a table named "disasters".
Columns are the following:
disaster_id : integer and primary key, auto incremented
province : char varying
city: char varying
barangay: char varying
family: char carying
