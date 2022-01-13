import './App.css';


const App = () => {
    return (
        <div className={'item'}>
            {/*<div>*/}
            {/*    <h1>Brand: Apple</h1>*/}
            {/*    <h2>Model: Pro</h2>*/}
            {/*    <h2>Cost: 100</h2>*/}
            {/*    <img*/}
            {/*        src={'https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111300609'}*/}
            {/*        alt={'Apple'}/>*/}
            {/*</div>*/}

            <Notebook/>

            <div>
                <h1>Brand: HP</h1>
                <h2>Model: 15S</h2>
                <h2>Cost: 1000</h2>
                <img
                    src={'https://www.notebookcheck-ru.com/fileadmin/Notebooks/HP/15s-fq1556ng/HP_15s_fq_teaser.png'}
                    alt={'HP'}/>
            </div>

        </div>
    );
};

export default App;
