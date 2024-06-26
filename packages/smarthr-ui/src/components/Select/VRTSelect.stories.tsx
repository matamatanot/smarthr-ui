import { StoryFn } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { FormControl } from '../FormControl'
import { InformationPanel } from '../InformationPanel'

import { All } from './Select.stories'

import { Select } from '.'

export default {
  title: 'Forms（フォーム）/Select',
  component: Select,
  parameters: {
    withTheming: true,
  },
}

const options = [
  { label: '高齢任意加入被保険者', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: '評価業務担当者', value: 'banana' },
  { label: '書類に記載する従業員・扶養家族', value: 'melon', disabled: true },
]

export const VRTState: StoryFn = () => (
  <>
    <VRTInformationPanel title="VRT 用の Story です">
      hover, activeなどの状態で表示されます
    </VRTInformationPanel>
    <WrapperList>
      <li>
        <Title>hover</Title>
        <InnerList id="list-hover">
          <li>
            <FormControl title="標準">
              <Select name="default" options={options} />
            </FormControl>
          </li>
          <li>
            <FormControl title="エラー状態">
              <Select name="error" error options={options} />
            </FormControl>
          </li>
          <li>
            <FormControl title="disabled 状態">
              <Select name="disabled" disabled options={options} />
            </FormControl>
          </li>
        </InnerList>
      </li>

      <li>
        <Title>focus</Title>
        <InnerList id="list-focus">
          <li>
            <FormControl title="標準">
              <Select name="default" options={options} />
            </FormControl>
          </li>
          <li>
            <FormControl title="エラー状態">
              <Select name="error" error options={options} />
            </FormControl>
          </li>
          <li>
            <FormControl title="disabled 状態">
              <Select name="disabled" disabled options={options} />
            </FormControl>
          </li>
        </InnerList>
      </li>

      <li>
        <Title>focus-visible</Title>
        <InnerList id="list-focus-visible">
          <li>
            <FormControl title="標準">
              <Select name="default" options={options} />
            </FormControl>
          </li>
          <li>
            <FormControl title="エラー状態">
              <Select name="error" error options={options} />
            </FormControl>
          </li>
          <li>
            <FormControl title="disabled 状態">
              <Select name="disabled" disabled options={options} />
            </FormControl>
          </li>
        </InnerList>
      </li>

      <li>
        <Title>active</Title>
        <InnerList id="list-active">
          <li>
            <FormControl title="標準">
              <Select name="default" options={options} />
            </FormControl>
          </li>
          <li>
            <FormControl title="エラー状態">
              <Select name="error" error options={options} />
            </FormControl>
          </li>
          <li>
            <FormControl title="disabled 状態">
              <Select name="disabled" disabled options={options} />
            </FormControl>
          </li>
        </InnerList>
      </li>
    </WrapperList>
  </>
)

export const VRTForcedColors: StoryFn = () => (
  <>
    <VRTInformationPanel title="VRT 用の Story です">
      Chromatic 上では強制カラーモードで表示されます
    </VRTInformationPanel>
    <All />
  </>
)

VRTState.parameters = {
  controls: { hideNoControlsWarning: true },
  pseudo: {
    hover: ['#list-hover select'],
    focus: ['#list-focus select'],
    focusVisible: ['#list-focus-visible select'],
    active: ['#list-active select'],
  },
}
VRTForcedColors.parameters = {
  chromatic: { forcedColors: 'active' },
}

const WrapperList = styled.ul`
  padding: 0 24px;
  list-style: none;
  & > li {
    padding: 16px;
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`
const InnerList = styled.ul`
  padding: 0;
  list-style: none;
  & > li {
    display: inline-block;
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`
const Title = styled.p`
  margin: 0 0 16px;
`
const VRTInformationPanel = styled(InformationPanel)`
  margin-bottom: 24px;
`
