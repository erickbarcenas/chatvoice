import React, {Fragment} from 'react';
import { withNamespaces } from 'react-i18next';
import i18n from '../../i18n/i18n';
// @ts-ignore
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import HeaderComponent from "../../components/Header.component";


const Home =({t}: any) => {


    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng);
    }

    return <Fragment>
        <HeaderComponent/>
        <h1>{t('welcome')}</h1>
        <div>
            <button onClick={() => changeLanguage('es')}>es</button>
            <button onClick={() => changeLanguage('en')}>en</button>
        </div>
    </Fragment>
}

export default withNamespaces()(Home);
