import Head from 'next/head';

export interface IProps {
    pageTitle: string
}

const Header = ({pageTitle}: IProps) => {
    return(
        <Head>
            {pageTitle && <title>{pageTitle}</title>}
        </Head>
    )
}

export default Header;