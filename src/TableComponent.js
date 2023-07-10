import { useState } from "react";

const TableComponent = () => {
  const [tableData, setTableData] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35 },
    // Другие данные таблицы...
  ]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Остальной код компонента...
};
export default TableComponent;
