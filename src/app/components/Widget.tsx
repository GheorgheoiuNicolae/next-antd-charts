import { Layout } from "antd";
const { Header } = Layout;
import { Divider } from 'antd';
import '../globals.css';

const widgetStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  lineHeight: "64px",
  display: "block",
  boxShadow: "2px 3px 3px 0 rgb(0 0 0 / 8%)",
  marginBottom: "20px",
  maxHeight: '600px'
};

const Widget = ({
    children,
    title
  }: {
    children: React.ReactNode
    title: string
  }) => (
  <div style={widgetStyle}>
    <h3 style={{ margin: 0, padding: '20px 20px 0 20px' }}>{title}</h3>
    <Divider />
    {children}
  </div>
)
export default Widget;