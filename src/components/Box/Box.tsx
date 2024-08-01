import React from 'react';
import classnames from 'classnames';
import type { TBoxAlign, TBoxDisplay, TBoxFlex, TBoxJustifyContent, TBoxSizing, TResponsiveValue } from '../../types';
import { generateResponsiveClasses } from '../../utilities';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
    as?: keyof React.ReactHTML;
    align?: TBoxAlign;
    bg?: string;
    d?: TResponsiveValue<TBoxDisplay>;
    flex?: TResponsiveValue<TBoxFlex>;
    h?: TBoxSizing;
    invisible?: boolean;
    justifyContent?: TResponsiveValue<TBoxJustifyContent>;
    text?: string;
    visible?: boolean;
    w?: TBoxSizing;
}

const Box: React.FC<BoxProps> = ({
    as: Component = 'div',
    className,
    align,
    bg,
    d,
    flex,
    h,
    invisible,
    justifyContent,
    text,
    visible,
    w,
    ...props
}) => {
    const classNames = classnames(
        {
            [`align-${align}`]: align,
            [`bg-${bg}`]: bg,
            [`invisible`]: invisible,
            [`h-${h}`]: h,
            [`text-${text}`]: text,
            [`visible`]: visible,
            [`w-${w}`]: w
        },
        generateResponsiveClasses('d', d),
        generateResponsiveClasses('flex', flex),
        generateResponsiveClasses('justify-content', justifyContent),
        className
    );

    return <Component className={classNames} {...props} />;
};

export default Box;
