
import {USERS_DB_ID, USERS_TABLE_ID,tablesDB } from "../appwrite";


export const fetchUserData = async ()=>{
  try{
    const response = await tablesDB.listRows({
        databaseId : USERS_DB_ID,
        tableId : USERS_TABLE_ID,
    });
    return response.rows;
  
  } catch(error){
    console.error("Error",error);
    return null;
  }  
}

