import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Row, Col } from "antd";
import { Form, Input, Button} from "antd";
import LastLoanRequest from "../components/LastLoanRequest";
import Loading from '../Pages/Loading'
import LoanService from '../Services/LoanService'

export default function ApplyforLoan(props) {
  const onFinish = (values) => {
    LoanService.applyLoan(values).then(()=>{
      alert("Successfully Submitted")
    }).catch((err)=>{
        alert('Request Failed')
    })
  };
  const [loading,setLoading]=useState(false)
  const [err,setErr]= useState(false)
  const [data,setData]=useState([])

  useEffect(()=>{
    
    LoanService.getMyLoansRequest()
    .then(res=>{
     
      setData(res.data)
      console.log(res)
      setLoading(false)
    })
    .catch(error=>{

      console.log(error.response)
      setLoading(false)
    })



  },[])

  if(loading)

    return <Loading/>
  else if (err){

    return <h1 className='text-center text-danger'>Request Failed.</h1>
  }
  else
  return (
    <div>
      <Card title={"Loan request Form"}>
        <Form  name="control-ref" onFinish={onFinish}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item
                name="loanAmount"
                label="Amount"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input type='number'></Input>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={{ span: 24 }} lg={{ span: 12 }}>
              <Form.Item
                
                name="reasonOfLoan"
                label="Reason"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: "50%" }}
                >
                  Submit request
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <LastLoanRequest data={data}></LastLoanRequest>
    </div>
  );
}
