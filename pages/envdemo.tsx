console.log('MY_ENV', process.env.MY_ENV);
console.log('GREETING :', process.env.GREETING);
console.log('NEXT_PUBLIC_ :', process.env.NEXT_PUBLIC_MYSAMPLE);

const EnvDemo = () => {
    return (
        <div>
            <div>
                MY_ENV:{process.env.MY_ENV}
            </div>

            <div>
                GREETING:{process.env.GREETING}
            </div>

            <div>
                NEXT_PUBLIC_MYSAMPLE:{process.env.NEXT_PUBLIC_MYSAMPLE}
            </div>
        </div>
    );

}
export default EnvDemo