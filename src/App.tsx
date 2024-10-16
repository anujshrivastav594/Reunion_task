import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { DemoRadioGroup } from "./components/Head";
import { data, type DataTypes } from "./sampleData";
import {
  Stack,
} from "@mui/material";

//Date Picker Imports - these should just be in your Context Provider
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const ExampleWithLocalizationProvider = () => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <App />
  </LocalizationProvider>
);

export default ExampleWithLocalizationProvider;



const App = () => {
  const columns = useMemo<MRT_ColumnDef<DataTypes>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },

      {
        accessorKey: "name",
        header: "Name",
        filterVariant: "text", // default
        size: 200,
      },

      {
        accessorKey: "category",
        header: "Category",
        filterVariant: "text", // default
        size: 200,
      },

      {
        accessorKey: "subcategory",
        header: "Sub Category",
        filterVariant: "text", // default
        size: 200,
      },

      {
        accessorFn: (originalRow) => new Date(originalRow.createdAt), //convert to date for sorting and filtering
        id: "createdAt",
        header: "Created At",
        filterVariant: "date-range",
        Cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString(), // convert back to string for display
      },

      {
        accessorFn: (originalRow) => new Date(originalRow.updatedAt), //convert to date for sorting and filtering
        id: "updatedAt",
        header: "Updated At",
        filterVariant: "date-range",
        Cell: ({ cell }) => cell.getValue<Date>().toLocaleDateString(), // convert back to string for display
      },

      {
        accessorKey: "price",
        header: "Price",
        Cell: ({ cell }) => cell.getValue<number>(),
        filterVariant: "range-slider",
        filterFn: "betweenInclusive", // default (or between)
        muiFilterSliderProps: {
          marks: true,
          max: 200, //custom max (as opposed to faceted max)
          min: 11, //custom min (as opposed to faceted min)
          step: 10,
          valueLabelFormat: (value) =>
            value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            }),
        },
      },

      {
        accessorKey: "sale_price",
        header: "Sale Price",
        Cell: ({ cell }) => cell.getValue<number>(),
        filterVariant: "range-slider",
        filterFn: "betweenInclusive", // default (or between)
        muiFilterSliderProps: {
          marks: true,
          max: 200, //custom max (as opposed to faceted max)
          min: 11, //custom min (as opposed to faceted min)
          step: 10,
          valueLabelFormat: (value) =>
            value.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            }),
        },
      },
    ],
    []
  );
  

  const [groupedColumnMode, setGroupedColumnMode] = useState<
    false | "remove" | "reorder"
  >("reorder"); //default is 'reorder

  const table = useMaterialReactTable({
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

  return (
    <Stack gap="1rem">
      <DemoRadioGroup
        groupedColumnMode={groupedColumnMode}
        setGroupedColumnMode={setGroupedColumnMode}
      />
      <MaterialReactTable table={table} />;
    </Stack>
  );
};


