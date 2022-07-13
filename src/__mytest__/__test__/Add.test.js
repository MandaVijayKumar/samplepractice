import React from 'react';
import Add from '../Components/Add';
import {render} from '@testing-library/react'
describe('my first test suits', ()=> {
    it('test header tag',()=>{
            let {getByTestId} = render(<Add/>)
            let header = getByTestId('headerid');
            expect(header).toBeTruthy();
    });
    it('test header tag content',()=>{
        let {getByTestId} = render(<Add/>)
        let header = getByTestId('headerid');
        expect("hi").toBe
})
})