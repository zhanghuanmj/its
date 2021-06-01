import ItsButton from '../'

export default {
    title: 'ItsButton',
    component: ItsButton,
    
}

export const Primary = () => ({
    components: { ItsButton },
    template: '<its-button>{{ msg }}</its-button>',
    data() {
        return {
            msg: '哎呀'
        }
    }
})
  
  /* const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ItsButton },
    template: '<its-button @onClick="onClick" v-bind="$props">{{ msg }}</its-button>',
  });
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    label: 'Button',
  }; */
