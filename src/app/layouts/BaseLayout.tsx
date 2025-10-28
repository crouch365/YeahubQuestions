import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
