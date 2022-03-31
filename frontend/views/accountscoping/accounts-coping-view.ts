import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/number-field';
import '@vaadin/grid/vaadin-grid';
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from '../../views/view';
import { Binder, field } from '@hilla/form';
import * as CompanyEndpoint from 'Frontend/generated/CompanyEndpoint';
import EatFirma from 'Frontend/generated/pl/kskowronski/data/entities/EatFirma';
import EatFirmaModel from 'Frontend/generated/pl/kskowronski/data/entities/EatFirmaModel';

@customElement('accounts-coping-view')
export class AboutView extends View {

    @state()
    private comapnies: EatFirma[] = [];
    private binder = new Binder(this, EatFirmaModel);

    render() {
        return html`<div>
        <h2>Tutaj powstanie kopiowanie</h2>
        <p>It’s a place where you can grow your own UI 🤗</p>

        <h3>Comany List</h3>
        <vaadin-grid .items="${this.comapnies}" theme="row-stripes" style="max-width: 400px">
            <!--(8)-->
            <vaadin-grid-column path="frmName"></vaadin-grid-column>
            <vaadin-grid-column path="frmKlId"></vaadin-grid-column>
        </vaadin-grid>
            
    </div>`;
    }

    async firstUpdated() {
        const comapnies = await CompanyEndpoint.getCompanies();
        this.comapnies = comapnies;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add(
            'flex',
            'flex-col',
            'h-full',
            'items-center',
            'justify-center',
            'p-l',
            'text-center',
            'box-border'
        );
    }
}