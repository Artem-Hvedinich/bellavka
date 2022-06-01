import React from 'react';
import styles from './LinkBlock.module.css'
import {modalState} from "../../../store/localStore";
import {OneLinkBlock} from "./OneLinkBlock/OneLinkBlock";

export const LinkBlock = () => {
    return (
        <div className={styles.link_block}>

            <div>Heard</div>

            <div className={styles.modal_block} >
                {modalState.map(modal => <OneLinkBlock
                    onClick={modal.onClick}
                    title={modal.title}
                    count={modal.count}
                    icon={modal.icon}/>
                )}
            </div>
        </div>
    );
};

