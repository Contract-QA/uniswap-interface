import { Field } from '../../state/mint/v3/actions'
import { AutoColumn } from 'components/Column'
import styled from 'styled-components/macro'
import { Currency, CurrencyAmount, Price } from '@uniswap/sdk-core'
import { Position } from '@uniswap/v3-sdk'
import { PositionPreview } from 'components/PositionPreview'

const Wrapper = styled.div`
  padding-top: 12px;
`

export function Review({
  position,
  outOfRange,
}: {
  position?: Position
  existingPosition?: Position
  parsedAmounts: { [field in Field]?: CurrencyAmount<Currency> }
  priceLower?: Price<Currency, Currency>
  priceUpper?: Price<Currency, Currency>
  outOfRange: boolean
}) {
  return (
    <Wrapper>
      <AutoColumn gap="lg">
        {position ? <PositionPreview position={position} inRange={!outOfRange} title={'Selected Range'} /> : null}
      </AutoColumn>
    </Wrapper>
  )
}
