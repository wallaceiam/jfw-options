import React, { useCallback, useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

export const Blotter = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const onGridReady = useCallback(
    (params) => {
      setGridApi(params.api);
      setGridColumnApi(params.columnApi);
    },
    [setGridApi, setGridColumnApi]
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact onGridReady={onGridReady} rowData={rowData}>
        <AgGridColumn field="make"></AgGridColumn>
        <AgGridColumn field="model"></AgGridColumn>
        <AgGridColumn field="price"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
