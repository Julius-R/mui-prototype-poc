import { z } from 'zod/v4'
import { Button } from '@mui/material'
import { ReactNode, MouseEventHandler } from 'react'

const ButtonSchema = z.object({
	onClick: z.custom<MouseEventHandler>().optional(),
	variant: z.literal(['contained', 'outlined', 'text']).optional().default('contained'),
	children: z.string(),
	sx: z.record(z.string(), z.string()).optional()
})

type ButtonProps = z.infer<typeof ButtonSchema>

const Btn = ({ buttonProps }: { buttonProps: ButtonProps }) => <Button data-cy={'btn'} {...buttonProps} />

const CreateButtonComponent = (schema: unknown): ReactNode => {
	const parsedScheme = ButtonSchema.safeParse(schema)
	if (parsedScheme.success) return <Btn buttonProps={parsedScheme.data} />
}

export default CreateButtonComponent
