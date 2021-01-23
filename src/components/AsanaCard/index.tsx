import * as React from 'react';
import { Card } from 'antd';

const NOMBRE_ASANA = "Tadasana";
const DESCRIPCION_ASANA = "lorem ipsum jsnald  aslk saj fsdkaj flsjd ksaj dkaj ska...";

interface AsanaCardInfo {
  name?: string,
  description?: string
}

const AsanaCard: React.FunctionComponent<AsanaCardInfo> = ({ name = NOMBRE_ASANA, description = DESCRIPCION_ASANA }) => (
  <Card>
    <h1> {name} </h1>
    <p> {description} </p>
  </Card>
)

export default AsanaCard;