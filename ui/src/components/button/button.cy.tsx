import CreateButtonComponent from './button'

describe('CreateButtonComponent', () => {
	it('mounts button with default variant', () => {
		cy.mount(CreateButtonComponent({ children: 'Click Me' }))
			.get('button')
			.should('exist')
			.should('contain.text', 'Click Me')
			.should('have.css', 'background-color', 'rgb(25, 118, 210)')
	})

	it('mounts button with outlined variant', () => {
		cy.mount(CreateButtonComponent({ children: 'New Button', variant: 'outlined' }))
			.get('button')
			.should('exist')
			.should('contain.text', 'New Button')
			.should('have.css', 'outline-color', 'rgb(25, 118, 210)')
	})

	it('does not mount on incorrect variant', () => {
		cy.mount(CreateButtonComponent({ children: 'New Button', variant: 'bad-value' }))
			.get('button')
			.should('not.exist')
	})

	it('does not mount on missing children value', () => {
		cy.mount(CreateButtonComponent({ variant: 'bad-value' }))
			.get('button')
			.should('not.exist')
	})

	it('shows alert when clicked', () => {
		const clickSpy = cy.spy().as('click-event')
		cy.mount(
			CreateButtonComponent({
				variant: 'outlined',
				children: 'Show Alert',
				onClick: clickSpy
			})
		)
			.get('[data-cy="btn"]')
			.should('be.visible')
			.should('contain.text', 'Show Alert')
			.click()
			.get('@click-event')
			.should('have.been.called')
	})
})
