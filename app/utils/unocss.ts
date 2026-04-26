const colorTypes: NTheme.ColorType[] = ['primary', 'info', 'success', 'warning', 'error']

/**
 * 生成 UnoCSS 颜色组合
 *
 * @description 根据 NTheme.ColorType 和 NTheme.ColorNumber 生成颜色变量映射
 * @example
 * // 生成如下颜色数据
 * // 'primary': 'rgba(var(--n-primary-color))'
 * // 'primary-1': 'rgba(var(--n-primary-color-1))',
 * // ...其他
 */
export function generateColorCombinations() {
  const colors = {} as Record<NTheme.ColorVariable, string>
  for (const type of colorTypes) {
    colors[type] = `rgba(var(--n-${type}-color))`
    for (let i = 1; i <= 10; i++) {
      const key = `${type}-${i}` as NTheme.ColorVariable
      colors[key] = `rgba(var(--n-${type}-color-${i}))`
    }
  }
  return colors
}
