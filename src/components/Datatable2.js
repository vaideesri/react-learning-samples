import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const customStyles = {
  headRow: {
    style: { backgroundColor: "orange", color: "red" }
  },
  headCells: {
    style: { fontSize: "18px" }
  },
  cells: {
    style: { color: "green", fontSize: "16px" }
  }
};

const Datatable1 = () => {
  const columns = [
    {
      name: "Category ID",
      selector: "categoryId",
      sortable: true
    },
    {
      name: "Category Name",
      selector: "categoryName",
      sortable: true
    }
  ];

  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://gtsuvai.gtcollege.in/Master/GetCategoryDetails")
      .then(res => setRecords(res.data.categoryDtls))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Category Details</h2>
      <DataTable
        columns={columns}
        data={records}
        customStyles={customStyles}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
        selectableRows
        selectableRowsHighlight
        highlightOnHover
      />
    </div>
  );
};

export default Datatable1;
