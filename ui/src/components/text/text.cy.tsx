import CreateTextComponent from './text'

describe('CreateTextComponent', () => {
	it('mounts p element with green text', () => {
		cy.mount(
			CreateTextComponent({
				children: 'Text',
				sx: {
					color: 'rgb(0, 128, 0)'
				}
			})
		)
			.get('p')
			.should('contain.text', 'Text')
			.should('have.css', 'color', 'rgb(0, 128, 0)')
	})

	it('mounts h6 element', () => {
		cy.mount(
			CreateTextComponent({
				children: 'This is text',
				variant: 'h6'
			})
		)
			.get('h6')
			.should('exist')
			.should('contain.text', 'This is text')
	})

	it('null returns nothing', () => {
		cy.mount(CreateTextComponent({})).get('[data-cy="typography"]').should('not.exist')
	})
})
