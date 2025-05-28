import { Typography } from '@mui/material'

import { z } from 'zod/v4'
import { type ReactNode } from 'react'

const TextSchema = z.object({
	variant: z
		.literal([
			'body1',
			'body2',
			'button',
			'caption',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'inherit',
			'overline',
			'subtitle1',
			'subtitle2'
		])
		.optional()
		.default('body1'),
	align: z.literal(['center', 'inherit', 'justify', 'left', 'right']).optional().default('inherit'),
	child: z.string(),
	sx: z.record(z.string(), z.string()).optional()
})

type TextProps = z.infer<typeof TextSchema>

const Text = ({ textProps }: { textProps: TextProps }) => {
	const sxProps = textProps.sx
	return (
		<Typography data-cy={'typography'} align={textProps.align} sx={sxProps} variant={textProps.variant}>
			{textProps.child}
		</Typography>
	)
}

const CreateTextComponent = (schema: unknown): ReactNode => {
	const parsedScheme = TextSchema.safeParse(schema)
	if (parsedScheme.success) return <Text textProps={parsedScheme.data} />
	return null
}
export default CreateTextComponent
