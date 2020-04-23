export const config = {
  "dev": {
    "username": "postgres",
    "password": process.env.POSTGRESS_PASSWORD,
    "database": "cloud-developer",
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": "eu-central-1",
    "aws_profile": "udacity",
    "aws_media_bucket": "hannes-cors"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
};
