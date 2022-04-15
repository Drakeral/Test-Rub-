export interface IMainProps {
    temp: number,
    feels_like: number,
    temp_min: number, 
    temp_max: number,
    pressure: number,   
    humidity: number

}

export const objectForm: IMainProps = {
    temp: 0,
    feels_like: 0,
    temp_min: 0, 
    temp_max: 0,
    pressure: 0,   
    humidity: 0
}

export interface IWindProps {
    speed: number,
    degree: number,
    gust: number
}

export const objectWindForm: IWindProps = {
    speed: 0,
    degree: 0,
    gust: 0
}

export interface IFormProps {
    name: string,
    contact: string,

}

export const form: IFormProps = {
    name: '',
    contact: '',
}

export interface IFormV2Props {
    firstName: string,
    lastName: string,
    contact: string,
    email: string
}

export const formV2: IFormV2Props = {
    firstName: '',
    lastName: '',
    contact: '',
    email: ''
}