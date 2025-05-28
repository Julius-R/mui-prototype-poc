import CreateTextComponent from './text'

describe('CreateTextComponent', () => {
	it('mounts', () => {
		cy.mount(
			CreateTextComponent({
				child: 'Text',
				sx: {
					color: 'green'
				}
			})
		)
		cy.get('[data-cy=typography]').should('not.be.hidden')
		cy.get('[data-cy=typography]').should('contain.text', 'Text')
	})
})
