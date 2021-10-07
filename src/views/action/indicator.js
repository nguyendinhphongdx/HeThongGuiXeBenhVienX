import { Alert, Spin } from "antd";
import { useSelector } from "react-redux";
export default function IndicatorLoading({ content }) {
  const loading = useSelector(state => state.Layout.loading);
  return (
    loading && <div className="wall-loading">
      <Spin tip={content || "Loading..."} spinning={loading} delay={100}>
        {/* <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    /> */}
      </Spin>
    </div>
  );
}
