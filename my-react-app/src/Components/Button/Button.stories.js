import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

function click() {
    alert("Button Component Executed props.onClick")
}

storiesOf("Button", module)


    .add("Primary", () => <Button label="Primary" type="primary" />)
    .add("Primary Hover", () => <Button label="Primary" type="primary" hover />)
    .add("Primary Outline", () => (<Button label="Primary" type="primary" outline />))
    .add("Primary Pale", () => <Button label="Primary" type="primary" pale />)
    .add("Large Primary", () => (<Button label="Primary" type="primary" large />))
    .add("Large Primary Outline", () => (<Button label="Primary" type="primary" large outline />))
    .add("Large Primary Pale", () => (<Button label="Primary" type="primary" large pale />))

    .add("Danger", () => <Button label="Danger" type="danger" />)
    .add("Danger Hover", () => <Button label="Danger" type="danger" hover />)
    .add("Danger Outline", () => <Button label="Danger" type="danger" outline />)
    .add("Danger Pale", () => <Button label="Danger" type="danger" pale />)
    .add("Large Danger", () => (<Button label="Danger" type="danger" large />))
    .add("Large Danger Outline", () => (<Button label="Danger" type="danger" large outline />))
    .add("Large Danger Pale", () => (<Button label="Danger" type="danger" large pale />))

    .add("Success", () => <Button label="Success" type="success" />)
    .add("Success Hover", () => <Button label="Success" type="success" hover />)
    .add("Success Outline", () => (<Button label="Success" type="success" outline />))
    .add("Success Pale", () => <Button label="Success" type="success" pale />)
    .add("Large Success", () => (<Button label="Success" type="success" large />))
    .add("Large Success Outline", () => (<Button label="Success" type="success" large outline />))
    .add("Large Success Pale", () => (<Button label="Success" type="success" large pale />))

    .add("Warning", () => <Button label="Warning" type="warning" />)
    .add("Warning Hover", () => <Button label="Warning" type="warning" hover />)
    .add("Warning Outline", () => (<Button label="Warning" type="warning" outline />))
    .add("Warning Pale", () => <Button label="Warning" type="warning" pale />)
    .add("Large Warning", () => (<Button label="Warning" type="warning" large />))
    .add("Large Warning Outline", () => (<Button label="Warning" type="warning" large outline />))
    .add("Large Warning Pale", () => (<Button label="Warning" type="warning" large pale />))

    .add("Default", () => <Button label="Default" />)
    .add("Default Hover", () => <Button label="Default" hover />)
    .add("Default Outline", () => <Button label="Default" outline />)
    .add("Default Pale", () => <Button label="Default" pale />)
    .add("Large Default", () => <Button label="Default" large white />)
    .add("Large Default Outline", () => <Button label="Default" large outline />)
    .add("Large Default Pale", () => <Button label="Default" large pale />)
    
    
