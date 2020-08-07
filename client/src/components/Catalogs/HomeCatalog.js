import React from 'react';

const HomeCatalog = () => {
    const items = [item1, item2, item3];
    const status = 'ready';

    return (
        <>
            {status === 'ready' ?
            <div>
                {items.map(item => 
                    <CatalogItem key={`home-catalog-id`} item={item}/>
                )}
            </div>
            : <Loading />}
        </>
    );
};

export default HomeCatalog;