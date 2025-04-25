import React from 'react';
import Headings from './components/headings';
import Paragraph from './components/paragraph';
import Captionlabel from './components/captionlabel';
import Textbox from './components/textbox';
import Notificationbar from './components/notificationbar';

function App() {
  return (
    <div className="App">
      <Headings />
      <Textbox />
      <Paragraph />
      <Captionlabel />
      <Notificationbar />
    </div>
  );
}

export default App;
