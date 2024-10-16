import {
    useMaterialReactTable,
  
  } from "material-react-table";

import { columns } from "./Columns";
import {data } from "../sampleData";

export const table = useMaterialReactTable({
    columns,
    data,
    enableGrouping: true,
    // groupedColumnMode,
    initialState: {
      showColumnFilters: true,
      expanded: true, //expand all groups by default
      grouping: ["category", "subcategory"], //an array of columns to group by by default (can be multiple)
    },
  });