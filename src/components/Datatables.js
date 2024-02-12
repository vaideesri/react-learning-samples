import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Datatables() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://gtsuvai.gtcollege.in/Master/GetCategoryDetails")
      .then(res => {
        setRecords(res.data);
        console.log(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>fetch</div>
  );
}

export default Datatables;
