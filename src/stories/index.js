import { storiesOf } from '@storybook/vue'

import Button from './../components/button.vue'

storiesOf('Button', module)
  .add('simple', () => ({
    components: { Button },
    template: '<Button />'
  }))
