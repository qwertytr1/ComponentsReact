import React from 'react';
import MySearch from '../../components/UI element/input/MySearch';
import { CardList } from '../../components/cardList';
import './mainPage.css';
import type ISearchProps from '../../components/UI element/input/intForExport';

export class Main extends React.Component {
  prop: ISearchProps = { type: 'search', placeholder: 'Input some body...' };
  render() {
    return (
      <>
        <MySearch {...this.prop} />
        <CardList />
      </>
    );
  }
}
