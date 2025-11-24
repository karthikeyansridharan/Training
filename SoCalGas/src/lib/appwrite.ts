import { Client, TablesDB, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("69072d68001951c68701")
  

export const account = new Account(client);
export const tablesDB = new TablesDB(client);

export const USERS_DB_ID = "690854d5003d80f13dc2"; 
export const USERS_TABLE_ID = "userDetails"; 