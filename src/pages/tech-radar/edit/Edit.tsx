import React from 'react';
import styles from './Edit.module.css';
import Button from '@material-ui/core/Button';

const Edit = () => {

    return <Button variant="contained" color="primary">
        Hello World
        </Button>
};

export default Edit;

export const EditRoute = {
    url: '/tech-radar/edit',
    component: Edit,
}