import React, { useState } from 'react'
import "./App.css"
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Model from './components/Model/Model';

const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>UI Components Library Demo</h1>

      <Button text="Open Modal" onClick={() => setShowModal(true)} />

      <Card title="Demo Card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores eligendi sint. Recusandae odit quidem repellendus eum sed obcaecati ipsa tempora rem rerum magnam dolorum asperiores, amet nesciunt velit commodi.</p>
      </Card>

      <Model show={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Window</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nam sit, repellat maxime voluptatem perferendis in numquam tempora aperiam impedit, laborum fugiat voluptate blanditiis asperiores cumque eum, fuga enim dolorum.</p>
      </Model>
    </>
  );
}

export default App