import { GetServerSideProps } from "next"
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// サーバ、クライアント両方
console.log(publicRuntimeConfig.MY_MESSAGE);
//サーバサイド側のみ
console.log(serverRuntimeConfig.MY_SECRET);

const EnvDemo2 = (props: any) => {
    return (
        <div>
            <div>
                MY_MESSAGE:{publicRuntimeConfig.MY_MESSAGE}
            </div>
            <div>
                MY_SECRET:{serverRuntimeConfig.MY_SECRET}
            </div>
            {JSON.stringify(props, null, 4)}
        </div>
    );
}

export default EnvDemo2

export const getServerSideProps: GetServerSideProps = (ctx) => {
    return {
        props: {
            MY_MESSAGE: publicRuntimeConfig.MY_MESSAGE,
            MY_SECRET: serverRuntimeConfig.MY_SECRET
        }
    };
}