import { LayoutProps } from "../../types/layouts";

const MainLayout: LayoutProps = ({ children }) => {
	return (
        <div>
            { children }
        </div>
    );
};

export default MainLayout;
