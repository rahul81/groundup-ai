

import { Button } from '@mui/material'
import React from 'react'

interface GButtonProps {
    title?: string;
    variant?: "text" | "outlined" | "contained";
    size?: "small" | "medium" | "large";
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    style?: Object;
    sx?: Object;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset'
}

export default function GButton(props: GButtonProps) {

    const { 
        title = '',
        variant = 'contained', 
        size = 'medium', 
        color = 'primary', 
        style = {}, 
        sx= {}, 
        className = '', 
        onClick = () => ({}), 
        startIcon, 
        endIcon,
        type } = props;

    return (
        <Button type={type} variant={variant} size={size} style={style} color={color} sx={sx} className={className} onClick={onClick} startIcon={startIcon} endIcon={endIcon} >
            {title}
        </Button>
    )
}
