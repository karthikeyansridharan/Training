
function summarizeTransactions(transactionArray){
    if(!Array.isArray(transactionArray)){
      console.error("Error: Invalid input");
      return null;
    }
    let set = new Set(transactionArray.map(val=>val["userId"]));
  
    let finalTransaction = [];

    for(let ids of set){
      let tempObject = {};
      let key = ids;
      let totalAmount = 0;
      let byCategory = {};
      let count = 0;
      let currency = "";
      let transactionTime = "";
      for(let objects of transactionArray){
          if(ids === objects["userId"]){
              tempObject["key"] = ids;
              totalAmount += (typeof objects["amount"]==="number") ? objects["amount"] : 0;
              if(!byCategory[`${objects["category"]}`]) byCategory[`${objects["category"]}`] = objects["amount"];
              else byCategory[`${objects["category"]}`] += objects["amount"];
              count++;
              currency = (typeof objects["currency"]==="string") ? objects["currency"] : "";
              transactionTime = (objects["ts"]>transactionTime) ? objects["ts"] : transactionTime;
          }
      } 
      tempObject["totalAmount"] = totalAmount;
      tempObject["byCategory"] = byCategory;
      tempObject["count"] = count;
      tempObject["lastTransactionAt"] = transactionTime;
      tempObject["currency"] = currency;
      
      finalTransaction.push(tempObject);
    }
    finalTransaction.sort((a,b)=>b.totalAmount - a.totalAmount);
    return finalTransaction;
}

const transactionArray = [
  { id: "t1", userId: 101, category: "food",   amount:  120.50, currency: "INR", ts: "2025-08-01T09:10:00Z" },
  { id: "t2", userId: 101, category: "travel", amount:  80.00,  currency: "INR", ts: "2025-08-02T14:33:00Z" },
  { id: "t3", userId: 102, category: "food",   amount:  60.00,  currency: "INR", ts: "2025-08-02T07:05:00Z" },
  { id: "t4", userId: 101, category: "food",   amount: -20.00,  currency: "INR", ts: "2025-08-03T10:00:00Z" } // refund
];


console.log(summarizeTransactions(transactionArray));
