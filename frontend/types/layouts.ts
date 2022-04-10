import { NextPage } from 'next';
import type { ReactElement } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import AdminLayout from '../components/layouts/DashboardLayout';

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };
export type PageWithDashboardLayoutType = NextPage & { layout: typeof AdminLayout };

export type PageWithLayoutType =
	| PageWithMainLayoutType
	| PageWithDashboardLayoutType;

export type LayoutProps = ({
	children,
}: {
	children: ReactElement;
}) => ReactElement;

export default PageWithLayoutType;
