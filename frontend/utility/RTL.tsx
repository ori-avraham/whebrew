import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ReactElement } from 'react';

// Create rtl cache
const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin],
});

interface RTLProps {
    children: ReactElement;
}

export default function RTLProvider(props: RTLProps) {
	return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
