import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import s from "../App/App.module.css";

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
  createData("total", 559, 680, 458),
  createData("satisfactory", 112, 118, 92),
  createData("unsatisfactory", 26, 37, 14),
  createData("re-opened", 329, 366, 243),
  createData(
    "initiated outside bh",
    "67 (11.99%)",
    "119 (17.50%)",
    "96 (20.96%)"
  ),
];

//SECOND TABLE
function createDataSecond(name, monthCurrent, monthPrevious, monthLastYear) {
  return { name, monthCurrent, monthPrevious, monthLastYear };
}

const rowsSecond = [
  createDataSecond("response time", "40s", "42s", "52s"),
  createDataSecond("wait time bh", "38s", "37s", "1m 58s"),
  createDataSecond("resolution time", "17m 5s", "14m 40s", "21m 14s"),
  createDataSecond("CSAT score", "4.96", "4.92", "4.93"),
  //   createDataSecond("initiated outside bh", 500, 500, 500),
];

export default function October24() {
  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead className={s.tableHead}>
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
