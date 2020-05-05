// import React from 'react'
import * as ReactNative from 'react-native'
import styled from 'styled-components/native'
import {
  color,
  compose,
  ColorProps,
  border,
  BorderProps,
  background,
  BackgroundProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'

export interface BaseKnownProps
  extends ColorProps,
    BackgroundProps,
    BorderProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps {}

export const baseSystem = compose(
  background,
  border,
  color,
  flexbox,
  space,
  typography,
)

export type BaseProps<T = ReactNative.ViewProps> = BaseKnownProps &
  Omit<T, keyof BaseKnownProps>

export type ViewProps = BaseProps<ReactNative.ViewProps>
export const View = styled.View<ViewProps>(baseSystem)

export type TextProps = BaseProps<ReactNative.TextProps>
export const Text = styled.Text<TextProps>(baseSystem)

export type ButtonProps = BaseProps<ReactNative.ButtonProps>
export const Button = styled.Button<ButtonProps>(baseSystem)

export type ImageProps = BaseProps<ReactNative.ImageProps>
export const Image = styled.Image<ImageProps>(baseSystem)

// export type FlatListProps = BaseProps<ViewProps>
// export const FlatList = styled(ReactNative.FlatList)<FlatListProps>(baseSystem)
