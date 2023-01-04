import { useEffect } from 'react';
import '../css/Button.css';

const Button = () => {
    
    useEffect(() => {
        window.$ = window.jQuery = jQuery;
        const script = document.createElement("script");
        script.src = "";
        script.async = true;
        document.body.appendChild(script);    
    });

    return (
        <div class="fancy-button">
            <div class="left-frills frills"></div>
            <div class="button">타다!</div>
            <div class="right-frills frills"></div>
        </div>
    );
}

export default Button;