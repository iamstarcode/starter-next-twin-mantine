import tw from 'twin.macro'
import { Logo } from '../components'
import { useMantineTheme } from '@mantine/styles'
import { Button } from '@mantine/core'
const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}


/* const myTheme = theme=>{
  tw`bg-black` && theme.colors.blue[5]
} */

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button color="primary" tw="dark:bg-electric">Submit</Button>
    </div>
    <Logo />
  </div >
)

export default App
