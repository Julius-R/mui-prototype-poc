import CreateTextComponent from './index.tsx'
import { render } from '@testing-library/react'

const renderToTextContent = (val?: unknown) => render(CreateTextComponent(val)).container.textContent

test('undefined schema returns null', () => {
  const res = renderToTextContent()
  expect(res).toBe('')
})

test('schema returns element', () => {
  const content = {
      variant: 'subtitle2',
      align: 'center',
      color: 'primary',
      child: 'This is a typography element',
    },
    res = renderToTextContent(content)
  expect(res).toBe('This is a typography element')
})
