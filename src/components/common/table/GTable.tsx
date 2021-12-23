import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Box, Typography, useTheme } from '@mui/material';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';
import React from 'react';
import { grey } from '@mui/material/colors';
import './g-table.scss'

interface GTableProps {
    rowClicked?: (data: any) => void;
    deleteClicked?: (data: any) => void;
    editlicked?: (data: any) => void;
    rows: Array<any>,
    columns: Array<any>,
}

export default function GTable(props: GTableProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { rows = [], columns = [] } = props;
    const theme = useTheme();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ border: `1px solid ${theme.palette.secondary.main}` }} className="table-paper">
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" size="small" sx={{ padding: '1rem', paddingTop: '0.5rem' }}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth || 100 }}
                                    sx={{ borderBottom: `2.5px solid ${grey[300]}` }}
                                >
                                    <Typography variant="subtitle2">
                                        {column.label}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => props.rowClicked && props.rowClicked(row)}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}  >
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : column.id === 'image' ? <img src={value} style={{ height: '3rem', width: '3.5rem' }} />
                                                            : column.id === 'action' ? <Box> <EditOutlined sx={{ color: 'gray' }} onClick={() => props.editlicked && props.editlicked(row)} />
                                                                <DeleteOutlined sx={{ color: 'red' }} onClick={() => props.deleteClicked && props.deleteClicked(row['_id']) } />  </Box>
                                                                : <Typography variant="subtitle2"> {value} </Typography>}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                rows.length >= 10 &&
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            }
        </Paper>
    )
}
