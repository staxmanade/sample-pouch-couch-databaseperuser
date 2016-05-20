import React from 'react';

export default class TestData extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            newItem: ""
        }
    }

    onItemUpdate(doc, e) {
        doc.name = e.target.value;
        this.props.localDb.put(doc);
    }

    addNewItem() {
        this.props.localDb.post({
            name: this.refs.newItem.value
        });
        this.setState( {
            newItem: ""
        })
    }

    deleteItem(doc, e) {
        doc._deleted = true;
        this.props.localDb.put(doc);
    }

    render() {

        var innerView;
        if(!this.props.localDb) {
            innerView = <div>Not conneced. Try logging in first.</div>
        } else {
            var testDocs = this.props.testDocs || [];
            console.log('TestData.render testDocs', testDocs);
            innerView = (<div>
                <ul> Items
                    {testDocs.map(doc => <li key={doc._id}>
                            <input type="text" value={doc.name} onChange={this.onItemUpdate.bind(this, doc)} />
                            <a onClick={this.deleteItem.bind(this, doc)}>🗑</a>
                        </li>)}
                </ul>

                New Item: <input type="text" ref="newItem" value={this.state.newItem} onChange={e => { this.setState({ newItem: e.target.value }); }} />
                <button onClick={this.addNewItem.bind(this)}>➕Add</button>
            </div>)
        }

        return (
            <div>
                <fieldset>
                    <legend>Test Data</legend>
                    {innerView}
                </fieldset>
            </div>
        );
    }
}