import ItsInput from '../'

export default {
    title: 'ItsInput',
    component: ItsInput,
}

export const Text = () => ({
    components: { ItsInput },
    template: '<its-input></its-input>',
})