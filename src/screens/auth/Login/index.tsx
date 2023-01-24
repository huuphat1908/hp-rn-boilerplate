import { Camera } from 'lucide-react-native'
import { Box, Text } from 'native-base'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { colors } from '@/constants'
import { useAppDispatch, useCounter } from '@/hooks'
import { increment } from '@/store/counter'

const Login = () => {
  const { t } = useTranslation()
  const counter = useCounter()
  const dispatch = useAppDispatch()

  return (
    <Box bgColor="custom.gold">
      <Text>{t('screen.login.screenName')}</Text>
      <Text>{counter.value}</Text>
      <Text onPress={() => dispatch(increment())}>Increase</Text>
      <Camera color={colors.red} size={36} />
    </Box>
  )
}

export default Login
