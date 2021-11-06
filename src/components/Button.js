import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES =['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, 
    buttonStyle, buttonSize, toLink}) => {
        const ckeckButtonSyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

        return (
            <a href="http://localhost:4321/swagger-ui.html" target="_blank" className='btn-mobile' rel='noreferrer'>
                <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </a>
        )
    }