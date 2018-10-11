import React, {Component} from 'react'
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import TextField from "@material-ui/core/TextField/TextField";
import styled from 'styled-components';
import {Add} from '@material-ui/icons/';
import {Delete} from '@material-ui/icons/';

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 70px;
    flex: 1;
    font-size: 1.4rem;
    flex-flow: column;
    width: 100%;
    > a {
        align-self: flex-end;
    }
`

const InnerWrapper = styled.div`
    display: block;
    margin: 20px;
    flex: 1;
    font-size: 1.4rem;
    flex-flow: row;
    flex-wrap: wrap;
`

class DynamicList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            row: [
                {
                    name: 'row1',
                    time: 1232131
                }
            ],
        }
    }

    addRow = () => {
        this.setState((prevState) => ({
            row: [...prevState.row, {name: '', time: new Date().getTime()}]
        }))
    }

    rmRow = (index) => {
        let row = this.state.row
        row.splice(index, 1)

        this.setState({row: row})
    }

    updateName = (action, index) => {
        if (action.hasOwnProperty('target')) {
            let newArray = [...this.state.row]
            newArray[index].name = action.target.value
            this.setState({row: newArray});
        } else {
            console.log('update name didn\'t work for some weird reason')
        }
    }


    render() {
        let preview = ''

        return (
            <Wrapper>
                <InnerWrapper style={{width: '100%', float: 'left'}}>
                    <Button  onClick={this.addRow} ><Icon><Add/></Icon></Button>
                </InnerWrapper>
                <InnerWrapper style={{width: '100%'}}>
                    {this.state.row.map((item, k) => {
                        preview = preview + item.name + ','
                        return (
                            <div key={'row' + (k + 1)} style={{marginTop: '30px'}}>
                                <TextField
                                    label={'row' + (k + 1)}
                                    onChange={(event) => this.updateName(event, k)}
                                    helperText={'write anything'}
                                    limit={0}
                                    value={this.state.row[k].name}
                                />
                                <Button
                                    onClick={() => this.rmRow(k)}
                                ><Icon><Delete/></Icon>
                                </Button>
                            </div>
                        )
                    })}
                </InnerWrapper>
            </Wrapper>
        )
    }
}

export default DynamicList;
