import { Layout } from "antd";
const { Header } = Layout;
import '../globals.css';

const headerStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  display: "flex",
  justifyContent: "center",
  boxShadow: "2px 3px 3px 0 rgb(0 0 0 / 8%)",
  marginBottom: "20px",
};

const TopBar = () => (
  <Header style={headerStyle}>
    <div className="container">
      <h3 style={{ margin: 0 }}>App bar</h3>
    </div>
  </Header>
)
export default TopBar;