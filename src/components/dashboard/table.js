import React, { Fragment } from 'react';
import { Table, Header, Container, Grid } from 'semantic-ui-react';
import './index.css'


const DashboardTable = (props) => {

  const { rows, data } = props.data || {};
  
  return (
    <Grid className='table-grid' textAlign='center'>
      <Grid.Row textAlign = 'center' className = 'row-header'>
        <Header as = 'h1' color='teal'>Employee Table</Header>
        </Grid.Row>
      <Table celled  style={{ width: '80vw' }} className = 'dashboard-table' >
        <Table.Header>
          <Table.Row>
            {
              (rows || []).map(row => <Table.Cell><Header as='h3'>{row}</Header></Table.Cell>
              )
            }
          </Table.Row>
        </Table.Header>
        <Table.Body>

          {(data || []).map(item => {
            return (<Table.Row>

              <Table.Cell>
                {item.id}
              </Table.Cell>
              <Table.Cell>
                {item.name}
              </Table.Cell>
              <Table.Cell>
                {item.age}
              </Table.Cell>
              <Table.Cell>
                {item.gender}
              </Table.Cell>
              <Table.Cell>
                {item.email}
              </Table.Cell>
              <Table.Cell>
                {item.phoneNo}
              </Table.Cell>
            </Table.Row>)
          })}

        </Table.Body>
      </Table>
    </Grid>
  )
}

export default DashboardTable;