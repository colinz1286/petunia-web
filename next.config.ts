import createNextIntlPlugin from 'next-intl/plugin';
import intlConfig from './next-intl.config';

const withNextIntl = createNextIntlPlugin(intlConfig);

export default withNextIntl({});
