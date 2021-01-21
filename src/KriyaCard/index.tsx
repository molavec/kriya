import React from 'react';
import { Card } from 'antd';

const NOMBRE_KRIYA = "NOMBRE DE LA KRIYA blabla";
const DESCRIPCION_KRIYA = "lorem ipsum jsnald  aslk saj fsdkaj flsjd ksaj dkaj ska...";

const KriyaCard: React = () => (
    <Card bordered={true} >
        <h1> { NOMBRE_KRIYA } </h1>
        <p> { DESCRIPCION_KRIYA } </p>
    </Card>
    )


export default KriyaCard;