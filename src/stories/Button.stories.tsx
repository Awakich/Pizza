import { Meta, StoryObj } from '@storybook/react'

import Button from '../components/Layout/Button'

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Button_Back: Story = {
    args: {
        text: 'Вернуться назад',
        className: 'rounded-full border-2 border-gray-400 text-gray-400 py-2 px-4 bg-transparent hover:bg-gray-400 hover:text-white'
    }
}

export const Button_Add: Story = {
    args: {
        text: 'Добавить',
        count: 0,
        className: 'bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-600/80'
    }
}

export const Button_Pay: Story = {
    args: {
        text: 'Оплатить сейчас',
        className: 'rounded-full border-2 border-orange-500 text-orange-500 py-2 px-4 bg-transparent hover:bg-orange-500 hover:text-white'
    }
}