import React from 'react'

function Stringobj() {
    let str="welcome to GT college GT"
    let str1="hello gt"
    let str2 = new String( "This is beautiful string" );
         let index = str2.localeCompare( "This is beautiful string" );
         var str3 = "For more information, see Chapter 3.4.5.1";
         var re = /(chapter \d+(\.\d)*)/i;
         var found = str3.match( re );
         var re1 = /apples/;
         var str4 = "Apples are round, and apples are juicy.";
         var newstr = str4.replace(re1, "oranges"); 
  return (
    <div>
      {str1.toUpperCase()}
{str4.substr(0,2)}
      {str4.split(" ",2)}
      {/* {str4.slice(0,5)} */}
        {str4.search("apple")}<br/>
        {newstr}
        {found}<br/>
        {index}<br/>
      {str.charAt(0)}<br/>
      {str.charCodeAt(0)}<br/>
      {str.concat(str1)}<br/>
      {10+"10"}<br/>
      {str.indexOf("GT")}<br/>
      {str.lastIndexOf("GT")}
    </div>
  )
}

export default Stringobj
