import { Client, TablesDB, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("69072d68001951c68701"); 

export const account = new Account(client);
export const tablesDB = new TablesDB(client);
