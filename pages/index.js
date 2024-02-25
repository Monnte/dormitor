import { useState } from 'react';
import { Button } from 'primereact/button';

import { Card } from 'primereact/card';
export default function Home() {
    const [count, setCount] = useState(0);
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <div className="text-center">
            <div className="card flex justify-content-center">
                <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                </Card>
            </div>
        </div>
    );
}