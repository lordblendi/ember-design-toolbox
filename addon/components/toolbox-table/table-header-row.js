import TableRowComponent from "./table-row";
import layout from "../../templates/components/toolbox-table/table-header-row";

// A specialized version of the row component, where the content is marked as being a header and where the expander collapses/expands all children of the row
export default TableRowComponent.extend({
  layout
});
