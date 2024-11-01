import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//FIRST TABLE

function createData(name, monthCurrent, monthPrevious, monthLastYear) {
  return { name, monthCurrent, monthPrevious, monthLastYear };
}

const rows = [
  createData("total", 100, 100, 100),
  createData("satisfactory", 200, 200, 200),
  createData("unsatisfactory", 300, 300, 300),
  createData("re-opened", 400, 400, 400),
  createData("initiated outside bh", 500, 500, 500),
];

//SECOND TABLE
function createDataSecond(name, monthCurrent, monthPrevious, monthLastYear) {
  return { name, monthCurrent, monthPrevious, monthLastYear };
}

const rowsSecond = [
  createDataSecond("response time", 100, 100, 100),
  createDataSecond("wait time bh", 200, 200, 200),
  createDataSecond("resolution time", 300, 300, 300),
  createDataSecond("CSAT score", 400, 400, 400),
  //   createDataSecond("initiated outside bh", 500, 500, 500),
];

export default function October24() {
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Conversations</StyledTableCell>
                <StyledTableCell align="right">October 2024</StyledTableCell>
                <StyledTableCell align="right">September 2024</StyledTableCell>
                <StyledTableCell align="right">October 2023</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.monthCurrent}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.monthPrevious}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.monthLastYear}
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Average</StyledTableCell>
                <StyledTableCell align="right">October 2024</StyledTableCell>
                <StyledTableCell align="right">September 2024</StyledTableCell>
                <StyledTableCell align="right">October 2023</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsSecond.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.monthCurrent}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.monthPrevious}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.monthLastYear}
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>{" "}
      </div>{" "}
    </div>
  );
}
