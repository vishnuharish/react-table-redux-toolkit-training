import React from "react";
import { useTable, usePagination } from "react-table";
interface TableProps {
    data: any;
    columns: any;
}
export const Table: React.FC<TableProps> = (props) => {
    const options = { data: props.data, columns: props.columns };

    const tableInstance = useTable({ ...options }, usePagination);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        canNextPage,
        previousPage,
        canPreviousPage,
        pageOptions,
        state,
        setPageSize,
        prepareRow,
    } = tableInstance;
    const {pageIndex, pageSize} = state;

    return (
        <>
            <table {...getTableProps()} border={1}>
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row: any) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                <span>
                    Page {' '}
                        <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                    </span>
                    <span>
                        <select value ={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                            {
                                [25,50,100,200,500].map((size) => <option key={size} value={size}>{size}</option>)
                                }
                        </select>
                    </span>
                    <button disabled={!canPreviousPage} onClick={() => previousPage()}>{'Previous'}</button>
                <button disabled={!canNextPage} onClick={() => nextPage()}>{'Next'}</button>
            </div>
        </>
    );
};
