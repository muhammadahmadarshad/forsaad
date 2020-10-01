import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MessageService from "../Services/MessageService";
import Loading from "../Pages/Loading";
import Moment from "moment";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    //fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// const rows = [
//   createData("Frozen yoghurt", "hello how are ou saad"),
//   createData("Ice cream sandwich", 237),
//   createData("Eclair", 262),
//   createData("Cupcake", 305),
//   createData("Gingerbread", 356),
// ];

export default function Outbox() {
  let [loading, setLoading] = useState(true);
  let [err, setError] = useState(false);
  let [data, setData] = useState({ rows: [] });

  React.useEffect(() => {
    MessageService.getOutbox()
      .then((res) => {
        console.log("response");
        console.log(res.data);
        setData({ ...data, rows: res.data });

        setLoading(false);
        setError(false);
        console.log(data);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  if (loading) return <Loading />;
  else if (err)
    return (
      <h1 className="text-center text-danger mt-5">HTTP Request Failed</h1>
    );
  else
    return (
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Emp ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Message</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.rows.map((row) => (
              <StyledTableRow key={row.createdAt}>
                {/* {row.toUserId.map((r) => (
                  <StyledTableRow key={r.empId}> */}
                <StyledTableCell component="th" scope="row">
                  {row.toUserId.map((r) => (
                    <p>{r.empId}</p>
                  ))}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.toUserId.map((r) => (
                    <p>{r.firstName}</p>
                  ))}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {Moment(row.createdAt).calendar()}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <div dangerouslySetInnerHTML={{ __html: row.message }} />
                </StyledTableCell>
                {/* </StyledTableRow>
                ))} */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
