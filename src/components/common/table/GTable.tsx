import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Box } from '@mui/material';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';
import React from 'react';  
import { grey } from '@mui/material/colors';
interface GTableProps{
  rowClicked?: (data: any)=>void;
  rows: Array<any>,
  columns: Array<any>,
}

export default function GTable(props: GTableProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const { rows = [], columns = [] } = props;
    
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
      <Paper sx={{ width: '100%', overflow: 'scroll' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table" sx={{padding:'1rem', paddingTop:'0.5rem'}}>
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth || 100 }}
                        sx={{borderBottom: `2.5px solid ${grey[300]}`}}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=>props.rowClicked && props.rowClicked(row)}>
                            {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : column.id === 'image' ? <img src={value} style={{height: '3rem', width:'3.5rem'}}/>
                                    : column.id === 'action' ? <Box> <EditOutlined sx={{color:'gray'}} onClick={()=> alert('Edit')} /> <DeleteOutlined sx={{color:'red'}} onClick={()=> alert('Delete')} />  </Box>
                                    : value}
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
