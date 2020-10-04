import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// import style from './ResultTable.module.scss';

const useStyles = makeStyles({
  tableContainer: {
    width: '80%',
    maxHeight: '60vh',
    overflowX: 'auto',
    overflowY: 'auto',
    marginTop: '5vh',
    margin: 'auto',
  },
});

function ResultTable({tableData}) {
  const classes = useStyles();
  console.log('rows', tableData);
  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader aria-label="article results">
          <TableHead>
            <TableRow>
              <TableCell>SE Practice</TableCell>
              <TableCell align="left">Article Title</TableCell>
              <TableCell align="left">Author(s)</TableCell>
              <TableCell align="left">Source</TableCell>
              <TableCell align="center">Publication Year</TableCell>
              <TableCell align="center">DOI</TableCell>
              <TableCell align="center">Claimed Benefits</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.practice}
                </TableCell>
                <TableCell align="left">{row.articleTitle}</TableCell>
                <TableCell align="left">{row.author.join(', ')}</TableCell>
                <TableCell align="left">{row.source}</TableCell>
                <TableCell align="center">{row.year}</TableCell>
                <TableCell align="center">{row.doi}</TableCell>
                <TableCell align="center">{row.benefits.join(', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ResultTable;
