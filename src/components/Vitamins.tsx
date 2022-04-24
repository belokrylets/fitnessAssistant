import React, { useEffect } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import compatibilityCheck from '../calculations/compatibilityCheck';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { VitaminsTypes } from '../types/vitamins';

const Vitamins = () => {
    const vitamins = [
        { id: 1, vitamin: 'Витамин A', value:'A'},
        { id: 2, vitamin: 'Витамин B1', value:'B1'},
        { id: 3, vitamin: 'Витамин B2', value:'B2'},
        { id: 4, vitamin: 'Витамин B3', value:'B3'},
        { id: 5, vitamin: 'Витамин B5', value:'B5'},
        { id: 6, vitamin: 'Витамин B6', value:'B6'},
        { id: 7, vitamin: 'Витамин B9', value:'B9'},
        { id: 8, vitamin: 'Витамин B12', value:'B12'},
        { id: 9, vitamin: 'Витамин C', value:'C'},
        { id: 10, vitamin: 'Витамин D', value:'D'},
        { id: 11, vitamin: 'Витамин E', value:'E'},
        { id: 12, vitamin: 'Витамин K', value:'K'},
        { id: 13, vitamin: 'Железо', value:'Fe'},
        { id: 14, vitamin: 'Магний', value:'Mg'},
        { id: 15, vitamin: 'Медь', value:'Cu'},
        { id: 16, vitamin: 'Кальций', value:'Ca'},
        { id: 17, vitamin: 'Фосфор', value:'F'},
        { id: 18, vitamin: 'Цинк', value:'Zn'},
        { id: 19, vitamin: 'Omega 3', value:'Omega3'},
    ]

const {vitamin1, vitamin2, compatibility} = useTypeSelector(state => state.vitamins)

const dispatch = useDispatch();

useEffect(() => {
    const result = compatibilityCheck(vitamin1, vitamin2)
    dispatch({
        type: VitaminsTypes.COMPATIBILITY,
        payload: result
    })
}, [vitamin1, vitamin2])

   

    const handleSelectVit1 = (event: any) => {
        event.preventDefault()
        console.log(event.target.value)
        dispatch({
            type: VitaminsTypes.SELECT_VIT1,
            payload: {value: event.target.value}
        })
    } 

    const handleSelectVit2 = (event: any) => {
        event.preventDefault()
        dispatch({
            type: VitaminsTypes.SELECT_VIT2,
            payload: {value: event.target.value}
        })
    } 

    return (
        <Container fluid="xxl">
            <div className='vitamins'>
                <div className='col-7'>
                    <h5>Раздел "Совместимость витаминов" создан для проверки совместимости, чтобы ваш прием витаминов был эффективным. </h5>
                    Не многие знают, что покупка дорогих витаминных комплексов это пустая трата денег.<br />
                    Многие витамины не совместимы друг с другом и их совместный прием сводит эффект приема к нулю. <br />
                    Какие то витамины имеют нейтральную совместимость.  <br />
                    Существует ряд витаминов, совместный прием которых повышает эффективность от приема в несколько раз.

                </div>
                <div  className='col-5'>
                    <InputGroup className="mb-3">
                        <Form.Select aria-label="Default select example" onChange={handleSelectVit1}>
                            {vitamins.map(({ id, vitamin, value }) => (
                                <option key={id} value={value}>{vitamin}</option>
                            ))}
                        </Form.Select>
                        <Form.Select aria-label="Default select example" onChange={handleSelectVit2}>
                            {vitamins.map(({ id, vitamin, value }) => (
                                <option key={id} value={value}>{vitamin}</option>
                            ))}
                        </Form.Select>
                    </InputGroup>
                    <div>
                        {compatibility}
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Vitamins;