import { Chip } from '@mui/material'

/**
 * Rendered Chip component with custom text and font
 *
 * @param {string} bgColor - BackgroundColor
 * @param {string} textColor - Color of text
 * @param {string} label - Text inner chip
 * @param {number} width - Width of chip
 * @returns {ReactElement} Rendered the Chip component
 */
const ChipCustom = ({ bgColor, textColor, label, width, ...others }) => {
    return (
        <Chip
            label={label}
            sx={{
                width,
                backgroundColor: bgColor,
                color: textColor,
                border: `1px solid ${textColor}`,
            }}
            {...others}
        />
    )
}

export default ChipCustom
