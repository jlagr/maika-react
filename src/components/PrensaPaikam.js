import React from 'react'
import { getPaikamNotas } from '../selectors/prensaSelectors';
import PrensaRow from './PrensaRow';

const PrensaPaikam = ({credits}) => {
    const notas = getPaikamNotas();
    return (
        <>
            <h2 className="wow" id="prensaPaikam">Notas de Prensa</h2>
            <hr />
            <div className="row">
                {
                    notas.map( nota  => (
                        <PrensaRow { ...nota } key = {nota.id} />
                    ))
                }
            </div>
        </>
    )
}

export default PrensaPaikam
