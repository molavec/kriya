import * as React from 'react'
import { Layout } from 'antd'
const { Header } = Layout

const TITLE = "Kriya App"

interface HeaderInfo { 
    name?: string 
}

const KriyaHeader: React.FunctionComponent<HeaderInfo> = ({ name = TITLE }) => (
    <Header>
        <h1> { name } </h1>
    </Header>
)

export default KriyaHeader