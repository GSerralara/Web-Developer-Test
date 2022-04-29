import './App.css';

import './i18n/config';
import { useTranslation } from 'react-i18next';

//import TabbedPane from './components/TabbedPane';
import InputNumber from './components/InputNumber';
import InputField from './components/InputField';

function App() {
  const { t } = useTranslation();
  return (
    <div id="EventForm">
      <InputField name={t('content:event.name')}/>
      <InputNumber name={t('content:event.capacity')}/>
      <button type='button' id="CreateButton">{t('content:button')}</button>
    </div>
  );
}

export default App;
