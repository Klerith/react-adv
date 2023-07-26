import { useState, useEffect, useRef } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [counter, setCouter] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({ count: value, product })
        }

        const newValue = Math.max(counter + value, 0)

        setCouter(newValue);

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCouter(value);
    }, [value])

    return {
        counter,
        increaseBy
    }
}