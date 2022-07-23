import React from "react";
import { useTable, usePagination,useSortBy } from "react-table";
import './styles/Table.scss';
interface TableProps {
    data: any;
    columns: any;
}
export const Table: React.FC<TableProps> = (props) => {
    const options = { data: props.data, columns: props.columns };

    const tableInstance = useTable({ ...options }, useSortBy, usePagination);
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
    const arrowUp = ' ⬆'
    const arrowDown = ' ⬇'
    return (
        <>
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}> 
                            {headerGroup.headers.map((column: any) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className={column.isSorted ? 'sorted' : 'normal'}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? arrowUp : arrowDown ) : ''}
                                    </span>
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
                                        <td {...cell.getCellProps()} className={cell.column.isSorted ? "sorted-td" : "normal-td"} >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="table-footer">
                <button disabled={!canPreviousPage} onClick={() => previousPage()}>{'<'}</button>
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
                    <button disabled={!canNextPage} onClick={() => nextPage()}>{'>'}</button>
            </div>
        </>
    );
};
