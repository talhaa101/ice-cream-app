import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';
import { mockItems } from '../../data/mockData';

export default class IceCreamBuilder extends Component {
    state = {
        items: {},
        scoops: [],
        totalPrice: 0,
    };

    componentDidMount() {
        // Using mock data instead of fetching from Firebase
        this.setState({
            items: mockItems,
        });
    }

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        if (!items[scoop]) return; // Safety check
        
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        const item = items[scoop];
        const price = typeof item === 'object' ? item.price : item;
        
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + (price || 0),
            };
        });
    };

    removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        if (!items[scoop] || scoops.length === 0) return; // Safety check
        
        const workingScoops = [...scoops];
        
        // Find the last occurrence of this scoop (since they're stacked)
        const scoopIndex = workingScoops.lastIndexOf(scoop);
        
        if (scoopIndex === -1) return; // Scoop not found
        
        workingScoops.splice(scoopIndex, 1);
        const item = items[scoop];
        const price = typeof item === 'object' ? item.price : item;
        
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: Math.max(0, prevState.totalPrice - (price || 0)),
            };
        });
    };

    render() {
        const { items, totalPrice, scoops } = this.state;
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={scoops} />
                <Builder
                    items={items}
                    price={totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={scoops}
                />
            </div>
        );
    }
}
