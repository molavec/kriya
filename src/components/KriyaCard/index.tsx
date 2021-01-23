import * as React from 'react';
import { Card } from 'antd';

const NOMBRE_KRIYA = "NOMBRE DE LA KRIYA blabla";
const DESCRIPCION_KRIYA = "lorem ipsum jsnald  aslk saj fsdkaj flsjd ksaj dkaj ska...";

interface KriyaCardInfo {
  name?: string,
  description?: string
}

const KriyaCard: React.FunctionComponent<KriyaCardInfo> = ({ name = NOMBRE_KRIYA, description = DESCRIPCION_KRIYA }) => (
  <Card>
    <h1> {name} </h1>
    <p> {description} </p>
  </Card>
)

export default KriyaCard;