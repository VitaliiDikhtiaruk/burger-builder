import React from 'react';
import Auxilary from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });
    return (
        <Auxilary>
            <h3>Your Order</h3>
            <p>Tasty Burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>
                <strong>Total Price: {props.price.toFixed(2)}</strong>
            </p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancell}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxilary>
    );
};

export default orderSummary;
