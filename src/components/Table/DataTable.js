import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "@/vendor/datatables/css/jquery.dataTables.min.css";
import dt from "datatables.net";
$.DataTable = dt;

const DataTable = ({ data, columns }) => {
  const tableRef = useRef(null);

  useEffect(() => {
    $(tableRef.current).DataTable({
      data: data,
      columns: columns,
    });
    return () => {
      $(tableRef.current).DataTable().destroy();
    };
  }, [data, columns]);

  return (
    <div className="dataTables_wrapper no-footer">
    <table className="display" ref={tableRef}>
      <thead className="bg-[rgba(249,251,252,1)]">
        <tr >
          {columns.map((column) => (
            <th
              key={column.data}
              scope="col"
            
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    
    </table>
    </div>
  );
};

export default DataTable;
