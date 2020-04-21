// import React from 'react'
import * as ReactNative from 'react-native'
import {View, ViewProps} from 'react-native'
import styled from 'styled-components/native'
import {
  compose,
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  background,
  BackgroundProps,
  position,
  PositionProps,
  grid,
  GridProps,
  shadow,
  ShadowProps,
} from 'styled-system'

export interface BaseKnownProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export const baseSystem = compose(
  space,
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  typography,
)

export type BaseProps<T = View> = BaseKnownProps & Omit<T, keyof BaseKnownProps>

export type BoxProps = BaseProps<ViewProps>
export const Box = styled.View<BoxProps>(baseSystem)

export type TextProps = BaseProps<Text>
export const Text = styled.Text<TextProps>(baseSystem)

export type ButtonProps = BaseProps<ReactNative.Button>
export const Button = styled.Button<ButtonProps>(baseSystem)

export type ImageProps = BaseProps<ReactNative.Image>
export const Image = styled.Image<ImageProps>(baseSystem)
