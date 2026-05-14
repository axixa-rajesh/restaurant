import React from 'react';

const PageHeader = ({ title, subtitle = '' }) => {
    return (
        <div className="page-header">
            <div className="page-header-text">
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;