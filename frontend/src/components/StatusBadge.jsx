import React from 'react';

const StatusBadge = ({ status }) => {
    const getClassName = () => {
        switch (status) {
            case 'active':
            case 'paid':
            case 'ready':
                return 'badge-success';
            case 'partial':
            case 'preparing':
                return 'badge-warning';
            case 'unpaid':
            case 'pending':
                return 'badge-secondary';
            case 'cancelled':
            case 'failed':
                return 'badge-danger';
            default:
                return 'badge-default';
        }
    };

    return <span className={`badge ${getClassName()}`}>{status}</span>;
};

export default StatusBadge;