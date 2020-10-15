import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { makeStyles } from '@material-ui/core/styles';

import style from './ResultTable.module.scss';

const useStyles = makeStyles({
  tableContainer: {
    width: '90%',
    maxHeight: '60vh',
    overflowX: 'auto',
    overflowY: 'auto',
    marginTop: '5vh',
    margin: 'auto',
  },
});

function ResultTable({ tableData, benefitsSelected }) {
  const classes = useStyles();
  const noEvidenceMessage = (
    <h3 className={style.noEvidence}>
      No evidence data available satisfying the filtering criteria{' '}
    </h3>
  );
  return (
    <>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader aria-label="article results">
          <colgroup>
            <col width="10%" />
            <col width="20%" />
            <col width="15%" />
            <col width="10%" />
            <col width="5%" />
            <col width="10%" />
            <col width="15%" />
            <col width="15%" />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>SE Practice</TableCell>
              <TableCell align="left">Article Title</TableCell>
              <TableCell align="left">Author(s)</TableCell>
              <TableCell align="left">Source</TableCell>
              <TableCell align="center">Publication Year</TableCell>
              <TableCell align="center">DOI</TableCell>
              <TableCell align="left">Claimed Benefits</TableCell>
              <TableCell align="center">Evidence</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((article) =>
              Object.keys(article.benefits).map((articleBenefit, i) => {
                if (
                  benefitsSelected.length === 0 ||
                  benefitsSelected.includes(articleBenefit)
                ) {
                  return (
                    <TableRow key={article._id + i}>
                      <TableCell component="th" scope="row">
                        {article.practice}
                      </TableCell>
                      <TableCell align="left">{article.articleTitle}</TableCell>
                      <TableCell align="left">
                        {article.author.join(', ')}
                      </TableCell>
                      <TableCell align="left">{article.journal}</TableCell>
                      <TableCell align="center">{article.year}</TableCell>
                      <TableCell align="center">{article.doi}</TableCell>
                      <TableCell align="left">{articleBenefit}</TableCell>
                      <TableCell align="right">
                        {article.benefits[articleBenefit].level}{' '}
                        {article.benefits[articleBenefit].isSupporting
                          ? 'Support'
                          : 'Not Support'}
                        {'  '}
                        {article.benefits[articleBenefit].isSupporting ? (
                          <ThumbUpIcon
                            className={style.thumbIconSupport}
                          ></ThumbUpIcon>
                        ) : (
                          <ThumbDownIcon
                            className={style.thumbIconAgainst}
                          ></ThumbDownIcon>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                }
              })
            )}
          </TableBody>
        </Table>
        {tableData.length === 0 ? noEvidenceMessage : <></>}
      </TableContainer>
    </>
  );
}

export default ResultTable;
