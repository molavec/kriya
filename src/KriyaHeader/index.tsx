import * as React from 'react'
import { Layout } from 'antd'
const { Header } = Layout

const TITLE = "Kriya App"

interface KriyaHeaderInfo {
    name?: string
}

const KriyaHeader: React.FunctionComponent<KriyaHeaderInfo> = ({ name = TITLE }) => (
    <Header>
        <h1> {name} </h1>
    </Header>
)

export default KriyaHeader